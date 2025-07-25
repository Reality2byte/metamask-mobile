import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { act, render, waitFor } from '@testing-library/react-native';
import useTokenBalancesController from './useTokenBalancesController';
import BN4 from 'bnjs4';
import { cloneDeep } from 'lodash';
import { backgroundState } from '../../../util/test/initial-root-state';

const accountAddress = '0x123';
const chainId = '0x1';

// initial state for the test store
const mockInitialState = {
  engine: {
    backgroundState: {
      ...backgroundState,
      AccountsController: {
        internalAccounts: {
          selectedAccount: '1',
          accounts: {
            '1': {
              address: accountAddress,
            },
          },
        },
      },
      TokenBalancesController: {
        tokenBalances: {
          [accountAddress]: {
            [chainId]: {
              '0x326836cc6cd09B5aa59B81A7F72F25FcC0136b95': new BN4(0x2a),
            },
          },
        },
      },
    },
  },
};

// test reducer for the test store
// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testBalancesReducer = (state: any, action: any) => {
  if (action.type === 'add-balances') {
    return {
      ...state,
      engine: {
        ...state.engine,
        backgroundState: {
          ...state.engine.backgroundState,
          TokenBalancesController: {
            ...state.engine.backgroundState.TokenBalancesController,
            tokenBalances: {
              ...state.engine.backgroundState.TokenBalancesController
                .tokenBalances,
              ...action.value,
              [accountAddress]: {
                ...state.engine.backgroundState.TokenBalancesController
                  .tokenBalances[accountAddress],
                ...action.value[accountAddress],
                [chainId]: {
                  ...state.engine.backgroundState.TokenBalancesController
                    .tokenBalances[accountAddress][chainId],
                  ...action.value[accountAddress][chainId],
                },
              },
            },
          },
        },
      },
    };
  }
  return state;
};

const spyOnDummyUseEffect = jest.fn();
// Dummy component to test the useTokenBalancesController hook
// and be able to detect the rerenders using the useEffect spy
const DummyTestComponent = () => {
  const balances = useTokenBalancesController();

  useEffect(() => {
    spyOnDummyUseEffect();
  }, [balances]);

  // render the balances as a string to be able to compare the snapshots
  return <Text>{JSON.stringify(balances)}</Text>;
};

describe('useTokenBalancesController()', () => {
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let toJSON: any;
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testStore: Store<any, any>;

  beforeEach(async () => {
    // create a test store, not a mock, as we need to test for content changes
    // Cloning as the store is mutated by the reducer and prevents the test from
    // starting from fresh store with the initial state
    testStore = createStore(testBalancesReducer, cloneDeep(mockInitialState));

    // console.log('testStore', JSON.stringify(testStore.getState()));

    // TODO: Replace "any" with type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Wrapper = ({ children }: any) => (
      <Provider store={testStore}>{children}</Provider>
    );

    // render the component with the test store
    toJSON = render(<DummyTestComponent />, { wrapper: Wrapper }).toJSON;

    await waitFor(async () => {
      // check that the initial balances are returned
      expect(spyOnDummyUseEffect).toHaveBeenCalledTimes(1);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should rerender when state changed', async () => {
    // add a new balance to the store
    act(() => {
      testStore.dispatch({
        type: 'add-balances',
        value: {
          [accountAddress]: {
            [chainId]: {
              '0x326836cc6cd09B5aa59B81A7F72F25FcC0136b96': new BN4(0x539),
            },
          },
        },
      });
    });

    // check that the useEffect is called again and the new updated balances are returned
    await waitFor(() => {
      expect(spyOnDummyUseEffect).toHaveBeenCalledTimes(2);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('should not rerender when state is not changed', async () => {
    // add the same balance to the store again, should override the previous one
    act(() => {
      testStore.dispatch({
        type: 'add-balances',
        value: {
          [accountAddress]: {
            [chainId]: {
              '0x326836cc6cd09B5aa59B81A7F72F25FcC0136b95': new BN4(0x2a),
            },
          },
        },
      });
    });

    // check that the useEffect is not called again and the returned balances are unchanged
    await waitFor(async () => {
      expect(spyOnDummyUseEffect).toHaveBeenCalledTimes(1);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
