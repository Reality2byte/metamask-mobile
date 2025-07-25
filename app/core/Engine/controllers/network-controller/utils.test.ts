import { generateDeterministicRandomNumber } from '@metamask/remote-feature-flag-controller';

import {
  getIsOurInfuraEndpointUrl,
  getIsQuicknodeEndpointUrl,
  shouldCreateRpcServiceEvents,
} from './utils';
import { QUICKNODE_ENDPOINT_URLS_BY_INFURA_NETWORK_NAME } from '../../../../util/networks/customNetworks';

jest.mock('@metamask/remote-feature-flag-controller', () => ({
  ...jest.requireActual('@metamask/remote-feature-flag-controller'),
  __esModule: true,
  generateDeterministicRandomNumber: jest.fn(),
}));

const generateDeterministicRandomNumberMock = jest.mocked(
  generateDeterministicRandomNumber,
);

describe('getIsOurInfuraEndpointUrl', () => {
  it('returns true if the URL has an Infura hostname with some subdomain whose path starts with the MetaMask API key', () => {
    expect(
      getIsOurInfuraEndpointUrl(
        'https://some-subdomain.infura.io/v3/the-infura-project-id',
        'the-infura-project-id',
      ),
    ).toBe(true);
  });

  it('returns false if the URL has an Infura hostname with some subdomain whose path does not start with the MetaMask API key', () => {
    expect(
      getIsOurInfuraEndpointUrl(
        'https://some-subdomain.infura.io/v3/a-different-infura-project-id',
        'the-infura-project-id',
      ),
    ).toBe(false);
  });

  it('returns false if the URL does match an Infura URL', () => {
    expect(
      getIsOurInfuraEndpointUrl(
        'https://a-different-url.com',
        'the-infura-project-id',
      ),
    ).toBe(false);
  });
});

describe('getIsQuicknodeEndpointUrl', () => {
  for (const [infuraNetwork, getQuicknodeEndpointUrl] of Object.entries(
    QUICKNODE_ENDPOINT_URLS_BY_INFURA_NETWORK_NAME,
  )) {
    it(`returns true when given the known Quicknode URL for the Infura network '${infuraNetwork}`, async () => {
      await withChangesToEnvironmentVariables(() => {
        process.env.QUICKNODE_MAINNET_URL =
          'https://example.quicknode.com/mainnet';
        process.env.QUICKNODE_LINEA_MAINNET_URL =
          'https://example.quicknode.com/linea-mainnet';
        process.env.QUICKNODE_ARBITRUM_URL =
          'https://example.quicknode.com/arbitrum';
        process.env.QUICKNODE_AVALANCHE_URL =
          'https://example.quicknode.com/avalanche';
        process.env.QUICKNODE_OPTIMISM_URL =
          'https://example.quicknode.com/optimism';
        process.env.QUICKNODE_POLYGON_URL =
          'https://example.quicknode.com/polygon';
        process.env.QUICKNODE_BASE_URL = 'https://example.quicknode.com/base';
        process.env.QUICKNODE_BSC_URL = 'https://example.quicknode.com/bsc';

        // We can assume this is set.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const endpointUrl = getQuicknodeEndpointUrl()!;

        expect(getIsQuicknodeEndpointUrl(endpointUrl)).toBe(true);
      });
    });
  }

  it('returns false when given a non-Quicknode URL', () => {
    expect(getIsQuicknodeEndpointUrl('https://some.random.url')).toBe(false);
  });
});

describe('shouldCreateRpcServiceEvents', () => {
  it('returns false if given no metaMetricsId', () => {
    expect(shouldCreateRpcServiceEvents(undefined)).toBe(false);
  });

  it('returns false if METAMASK_ENVIRONMENT is not set', async () => {
    await withChangesToEnvironmentVariables(() => {
      delete process.env.METAMASK_ENVIRONMENT;

      expect(
        shouldCreateRpcServiceEvents(
          '0x86bacb9b2bf9a7e8d2b147eadb95ac9aaa26842327cd24afc8bd4b3c1d136420',
        ),
      ).toBe(false);
    });
  });

  it('returns true if METAMASK_ENVIRONMENT is not "production" or "release-candidate"', async () => {
    await withChangesToEnvironmentVariables(() => {
      process.env.METAMASK_ENVIRONMENT = 'development';

      expect(
        shouldCreateRpcServiceEvents(
          '0x86bacb9b2bf9a7e8d2b147eadb95ac9aaa26842327cd24afc8bd4b3c1d136420',
        ),
      ).toBe(true);
    });
  });

  describe.each(['production', 'pre-release', 'qa', 'beta', 'rc', 'exp'])(
    'if METAMASK_ENVIRONMENT is "%s"',
    (metamaskEnvironment: string) => {
      it('returns false if the MetaMetrics user is not within the sample', async () => {
        await withChangesToEnvironmentVariables(() => {
          process.env.METAMASK_ENVIRONMENT = metamaskEnvironment;
          generateDeterministicRandomNumberMock.mockReturnValue(0.7);

          expect(
            shouldCreateRpcServiceEvents(
              '0x86bacb9b2bf9a7e8d2b147eadb95ac9aaa26842327cd24afc8bd4b3c1d136420',
            ),
          ).toBe(false);
        });
      });

      it('returns true if the MetaMetrics user is within the sample', async () => {
        await withChangesToEnvironmentVariables(() => {
          process.env.METAMASK_ENVIRONMENT = metamaskEnvironment;
          generateDeterministicRandomNumberMock.mockReturnValue(0.09999);

          expect(
            shouldCreateRpcServiceEvents(
              '0x86bacb9b2bf9a7e8d2b147eadb95ac9aaa26842327cd24afc8bd4b3c1d136420',
            ),
          ).toBe(true);
        });
      });
    },
  );
});

/**
 * Ensures that changes to `process.env` during a test get rolled back after a
 * test.
 *
 * @param testFunction - The test function to execute.
 */
async function withChangesToEnvironmentVariables(
  testFunction: () => void | Promise<void>,
) {
  const originalEnv = { ...process.env };

  await testFunction();

  for (const key of new Set([
    ...Object.keys(originalEnv),
    ...Object.keys(process.env),
  ])) {
    if (originalEnv[key]) {
      process.env[key] = originalEnv[key];
    } else {
      delete process.env[key];
    }
  }
}
