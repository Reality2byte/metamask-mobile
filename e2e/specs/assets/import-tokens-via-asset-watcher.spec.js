('use strict');
import { SmokeNetworkAbstractions } from '../../tags';
import TestHelpers from '../../helpers';
import { loginToApp } from '../../viewHelper';
import FixtureBuilder from '../../fixtures/fixture-builder';
import {
  withFixtures,
  defaultGanacheOptions,
} from '../../fixtures/fixture-helper';
import { SMART_CONTRACTS } from '../../../app/util/test/smart-contracts';

import TabBarComponent from '../../pages/wallet/TabBarComponent';
import TestDApp from '../../pages/Browser/TestDApp';
import Assertions from '../../utils/Assertions';
import AssetWatchBottomSheet from '../../pages/Transactions/AssetWatchBottomSheet';
import WalletView from '../../pages/wallet/WalletView';
import { buildPermissions } from '../../fixtures/utils';

const ERC20_CONTRACT = SMART_CONTRACTS.HST;

// TODO: Fix this test and remove the skip
// More info: https://github.com/MetaMask/metamask-mobile/issues/12501
describe(SmokeNetworkAbstractions('Asset Watch:'), () => {
  beforeAll(async () => {
    jest.setTimeout(170000);
    await TestHelpers.reverseServerPort();
  });

  it('Should Import ERC20 Token via Dapp', async () => {
    await withFixtures(
      {
        dapp: true,
        fixture: new FixtureBuilder()
          .withGanacheNetwork()
          .withPermissionControllerConnectedToTestDapp(
            buildPermissions(['0x539']),
          )
          .build(),
        restartDevice: true,
        ganacheOptions: defaultGanacheOptions,
        smartContract: ERC20_CONTRACT,
      },
      async ({ contractRegistry }) => {
        const hstAddress = await contractRegistry.getContractAddress(
          ERC20_CONTRACT,
        );
        await loginToApp();

        // Navigate to the browser screen
        await TabBarComponent.tapBrowser();
        await TestDApp.navigateToTestDappWithContract({
          contractAddress: hstAddress,
        });
        await TestHelpers.delay(3000); // Because loading the dapp is slow on CI

        await TestDApp.tapAddERC20TokenToWalletButton();
        await Assertions.checkIfVisible(AssetWatchBottomSheet.container);
        await AssetWatchBottomSheet.tapAddTokenButton();
        await Assertions.checkIfNotVisible(AssetWatchBottomSheet.container);

        await TabBarComponent.tapWallet();
        await Assertions.checkIfVisible(WalletView.tokenInWallet('100 TST'));
      },
    );
  });
});
