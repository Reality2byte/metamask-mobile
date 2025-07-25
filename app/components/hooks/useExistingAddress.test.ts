import {
  DeepPartial,
  renderHookWithProvider,
} from '../../util/test/renderWithProvider';
import useExistingAddress from './useExistingAddress';
import { backgroundState } from '../../util/test/initial-root-state';
import { createMockAccountsControllerState } from '../../util/test/accountsControllerTestUtils';
import { RootState } from '../../reducers';

const MOCK_ADDRESS_1 = '0x0';
const MOCK_ADDRESS_2 = '0x1';

const MOCK_ACCOUNTS_CONTROLLER_STATE = createMockAccountsControllerState([
  MOCK_ADDRESS_1,
  MOCK_ADDRESS_2,
]);

// Mock isRemoveGlobalNetworkSelectorEnabled utility
const mockIsRemoveGlobalNetworkSelectorEnabled = jest
  .fn()
  .mockReturnValue(false);

jest.mock('../../util/networks', () => ({
  ...jest.requireActual('../../util/networks'),
  isRemoveGlobalNetworkSelectorEnabled: () =>
    mockIsRemoveGlobalNetworkSelectorEnabled(),
}));

const mockInitialState: DeepPartial<RootState> = {
  settings: {},
  engine: {
    backgroundState: {
      ...backgroundState,
      AddressBookController: {
        addressBook: {
          [MOCK_ADDRESS_2]: {
            [MOCK_ADDRESS_2]: {
              address: MOCK_ADDRESS_2,
              name: 'Account 2',
            },
          },
        },
      },
      AccountsController: MOCK_ACCOUNTS_CONTROLLER_STATE,
    },
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useSelector: (fn: any) => fn(mockInitialState),
}));

describe('useExistingAddress', () => {
  it('returns existing address from accounts controller', async () => {
    const { result } = renderHookWithProvider(
      () => useExistingAddress(MOCK_ADDRESS_1),
      {
        state: mockInitialState,
      },
    );
    expect(result?.current?.name).toEqual('Account 1');
  });
  it('returns existing address from address book', async () => {
    const { result } = renderHookWithProvider(
      () => useExistingAddress(MOCK_ADDRESS_2),
      {
        state: mockInitialState,
      },
    );
    expect(result?.current?.name).toEqual('Account 2');
  });
  it('returns undefined address not in identities or address book', async () => {
    const { result } = renderHookWithProvider(() => useExistingAddress('0x2'), {
      state: mockInitialState,
    });
    expect(result?.current).toBeUndefined();
  });

  it('returns existing address from all chain IDs when isRemoveGlobalNetworkSelectorEnabled is true', () => {
    mockIsRemoveGlobalNetworkSelectorEnabled.mockReturnValue(true);
    const { result } = renderHookWithProvider(() => useExistingAddress('0x2'), {
      state: mockInitialState,
    });
    expect(result?.current).toBeUndefined();
  });
});
