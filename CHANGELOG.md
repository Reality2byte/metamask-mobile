# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- fix: Security vulnerability in RPC domain validation that could allow malicious domains to be misclassified as legitimate providers ([#17234](https://github.com/MetaMask/metamask-mobile/pull/17234))

## [7.50.1]

### Fixed
- fix: default to main code fence and opt-in for beta ([#16599](https://github.com/MetaMask/metamask-mobile/pull/16599))/

## [7.50.0]

### Added

- feat: add new segment events for onboarding ([#16493](https://github.com/MetaMask/metamask-mobile/pull/16493))
- feat: Stake 1033 add aave v 3 receipt tokens to mobile token list by default ([#16440](https://github.com/MetaMask/metamask-mobile/pull/16440))
- feat: signature verification for private deeplinks ([#16262](https://github.com/MetaMask/metamask-mobile/pull/16262))
- feat: upgrade notification controller to use v2 endpoints ([#16360](https://github.com/MetaMask/metamask-mobile/pull/16360))
- feat: deeplink modal UI ([#16309](https://github.com/MetaMask/metamask-mobile/pull/16309))
- feat: remove logic and state related to disable-security-check-prompt ([#16125](https://github.com/MetaMask/metamask-mobile/pull/16125))
- feat: multichain api e2e ([#15483](https://github.com/MetaMask/metamask-mobile/pull/15483))
- feat: STAKE-1052 reintroduce withdrawal safety checks ([#16432](https://github.com/MetaMask/metamask-mobile/pull/16432))
- feat: update account list to support grouping ([#16285](https://github.com/MetaMask/metamask-mobile/pull/16285))
- feat: STAKE-967: Add historic vault apy bottom sheet for stablecoin lending ([#16379](https://github.com/MetaMask/metamask-mobile/pull/16379))
- feat: Create transaction batch confirmation ([#15542](https://github.com/MetaMask/metamask-mobile/pull/15542))
- feat: add e2e tests for multichain accounts ([#16311](https://github.com/MetaMask/metamask-mobile/pull/16311))
- feat: enable backup & sync for all users ([#16228](https://github.com/MetaMask/metamask-mobile/pull/16228))
- feat: add 7702 to multichain account details ([#16227](https://github.com/MetaMask/metamask-mobile/pull/16227))
- feat: Add `approve` transaction confirmation ([#16282](https://github.com/MetaMask/metamask-mobile/pull/16282))
- feat: New Metametrics flow ([#15989](https://github.com/MetaMask/metamask-mobile/pull/15989))
- feat: 1.7 new-srp-login ([#15833](https://github.com/MetaMask/metamask-mobile/pull/15833))
- feat: Misc Earn Lending UI Improvements ([#16374](https://github.com/MetaMask/metamask-mobile/pull/16374))
- feat: Stake-1036: fix unknown method in confirmation bottom sheet for lending transactions ([#16211](https://github.com/MetaMask/metamask-mobile/pull/16211))
- feat: Earn Lending Base Layer - Earn Controller Integration and Mock Data Removal ([#15761](https://github.com/MetaMask/metamask-mobile/pull/15761))
- feat: add export credentials to multichain account details ([#16157](https://github.com/MetaMask/metamask-mobile/pull/16157))
- feat: Compress images in the project using imageoptim (https://imageo… ([#15727](https://github.com/MetaMask/metamask-mobile/pull/15727))
- feat: add multi-SRP EVM Account Syncing ([#15357](https://github.com/MetaMask/metamask-mobile/pull/15357))
- feat: add new domain deeplinks ([#15467](https://github.com/MetaMask/metamask-mobile/pull/15467))
- feat: add base network to networks enabled by default ([#16064](https://github.com/MetaMask/metamask-mobile/pull/16064))
- feat: added network selector to the request payment flow ([#14954](https://github.com/MetaMask/metamask-mobile/pull/14954))
- feat: prebuilt app support for e2e tests ([#15794](https://github.com/MetaMask/metamask-mobile/pull/15794))
- feat: 1.6 new srp onboarding success ([#15804](https://github.com/MetaMask/metamask-mobile/pull/15804))
- feat: 1.5 new srp backup step1 ([#15795](https://github.com/MetaMask/metamask-mobile/pull/15795))
- feat: add metrics for defi tab and view ([#15717](https://github.com/MetaMask/metamask-mobile/pull/15717))
- feat: add ConfirmationView class for end-to-end testing ([#16249](https://github.com/MetaMask/metamask-mobile/pull/16249))
- feat: added e2e for two connected dapps ([#16175](https://github.com/MetaMask/metamask-mobile/pull/16175))
- feat: add remove account components for multichain accounts ([#16008](https://github.com/MetaMask/metamask-mobile/pull/16008))
- feat: multichain accounts - account details part 2 ([#15884](https://github.com/MetaMask/metamask-mobile/pull/15884))
- feat: 1.2 disable wizard tour ([#15840](https://github.com/MetaMask/metamask-mobile/pull/15840))
- feat: 1.4 new srp backup ([#15773](https://github.com/MetaMask/metamask-mobile/pull/15773))
- feat: 1.3 disable security check prompt ([#15841](https://github.com/MetaMask/metamask-mobile/pull/15841))
- feat: identity/profile multichain analytics ([#15992](https://github.com/MetaMask/metamask-mobile/pull/15992))
- feat: enable react compiler for Nav directory (#15220) ([#15220](https://github.com/MetaMask/metamask-mobile/pull/15220))
- feat: update accounts-deps to enable `KeyringRequest.origin` support ([#15995](https://github.com/MetaMask/metamask-mobile/pull/15995))
- feat: new build commands for Android and iOS ([#15861](https://github.com/MetaMask/metamask-mobile/pull/15861))
- feat: add spam filtering for wallet_sendCalls ([#16054](https://github.com/MetaMask/metamask-mobile/pull/16054))
- feat: Adding alert for batched un-used approvals ([#15983](https://github.com/MetaMask/metamask-mobile/pull/15983))
- feat: add Solana Wallet Standard to in-app browser ([#15707](https://github.com/MetaMask/metamask-mobile/pull/15707))
- feat: add katana network logo ([#15390](https://github.com/MetaMask/metamask-mobile/pull/15390))
- feat: Displaying nested transaction data in advance section ([#16019](https://github.com/MetaMask/metamask-mobile/pull/16019))
- feat: Hero NFT redesign confirmation ([#15878](https://github.com/MetaMask/metamask-mobile/pull/15878))
- feat: Enable `transfer` and `contractInteraction` redesigned confirmations ([#15958](https://github.com/MetaMask/metamask-mobile/pull/15958))
- feat: multichain api analytics ([#15854](https://github.com/MetaMask/metamask-mobile/pull/15854))
- feat: cp-7.47.0 fetch all tokens for bridge input ([#15993](https://github.com/MetaMask/metamask-mobile/pull/15993))
- feat: add spam filtering for wallet_sendCalls ([#15853](https://github.com/MetaMask/metamask-mobile/pull/15853))
- feat: Add user setting to dismiss prompt for smart account upgrade ([#15791](https://github.com/MetaMask/metamask-mobile/pull/15791))
- feat: New Onboarding UI - Carousel and Terms of Use UI ([#15665](https://github.com/MetaMask/metamask-mobile/pull/15665))
- feat: Solana accountChanged event ([#15561](https://github.com/MetaMask/metamask-mobile/pull/15561))
- feat: multichain accounts - account details part 1 ([#15722](https://github.com/MetaMask/metamask-mobile/pull/15722))
- feat: Remove env variables to hide 7702 feature ([#15766](https://github.com/MetaMask/metamask-mobile/pull/15766))
- feat: Adds missing metrics for `transfer` confirmation redesign ([#15901](https://github.com/MetaMask/metamask-mobile/pull/15901))
- feat: Add `transaction_contract_method` to transaction metrics ([#15770](https://github.com/MetaMask/metamask-mobile/pull/15770))
- feat: add migration 082 to reset PhishingController phishingLists ([#14573](https://github.com/MetaMask/metamask-mobile/pull/14573))
- feat: Add pending transaction alert ([#15893](https://github.com/MetaMask/metamask-mobile/pull/15893))
- feat: track multi srp events ([#15618](https://github.com/MetaMask/metamask-mobile/pull/15618))
- feat: Implement speed row in gas-fee-estimates ([#15880](https://github.com/MetaMask/metamask-mobile/pull/15880))
- feat: Contentful banner integration ([#15731](https://github.com/MetaMask/metamask-mobile/pull/15731))
- feat: STAKE-1023 add lending withdraw and deposit more buttons ([#15238](https://github.com/MetaMask/metamask-mobile/pull/15238))
- feat: Add `ConfirmationAssetPollingProvider` into redesigned transactions ([#15843](https://github.com/MetaMask/metamask-mobile/pull/15843))
- feat: Implement redesigned gas fee modal ([#15234](https://github.com/MetaMask/metamask-mobile/pull/15234))
- feat: extend TokenHero support for all ERC20 tokens - transfer transactions ([#15259](https://github.com/MetaMask/metamask-mobile/pull/15259))
- feat: cp-7.47.0 add "hardware wallets not supported" error when attempting sola… ([#15743](https://github.com/MetaMask/metamask-mobile/pull/15743))
- feat: Add signed or submitted general alert to alert system ([#15779](https://github.com/MetaMask/metamask-mobile/pull/15779))
- feat: Implementing features in simulation section for batched transactions ([#15442](https://github.com/MetaMask/metamask-mobile/pull/15442))
- feat: Adding metrics for batched confirmations ([#15689](https://github.com/MetaMask/metamask-mobile/pull/15689))
- feat: Smart account upgrade splash page should be displayed for the user only once. ([#15705](https://github.com/MetaMask/metamask-mobile/pull/15705))
- feat: SIP-26 Integration ([#15389](https://github.com/MetaMask/metamask-mobile/pull/15389))
- feat: Add RPC (sub)domain tracking to transaction event metrics for RPC endpoints usage ([#15290](https://github.com/MetaMask/metamask-mobile/pull/15290))
- feat: Display tag with batched transaction count. ([#15408](https://github.com/MetaMask/metamask-mobile/pull/15408))
- feat: 15379 update minimum version modal UI ([#15567](https://github.com/MetaMask/metamask-mobile/pull/15567))
- feat: (deposit) adds a progress bar to the deposit flow ([#15646](https://github.com/MetaMask/metamask-mobile/pull/15646))
- feat: Reject 7702 requests for hardware wallets ([#15678](https://github.com/MetaMask/metamask-mobile/pull/15678))
- feat: Changes in activity list for smart account upgrade/downgrade confirmations ([#15393](https://github.com/MetaMask/metamask-mobile/pull/15393))
- feat: Track number_of_hd_entropies for a user ([#15566](https://github.com/MetaMask/metamask-mobile/pull/15566))
- feat: Add MM SDK Analytics ([#15350](https://github.com/MetaMask/metamask-mobile/pull/15350))
- feat: add DeFi tab ([#13925](https://github.com/MetaMask/metamask-mobile/pull/13925))
- feat: Adding splash page to upgrade account request ([#15355](https://github.com/MetaMask/metamask-mobile/pull/15355))
- feat: Make legacy approval transaction multichain ready ([#15507](https://github.com/MetaMask/metamask-mobile/pull/15507))
- feat: Adding confirmation page for dapp request to upgrade+batched transactions ([#15329](https://github.com/MetaMask/metamask-mobile/pull/15329))
- feat: update dapp connection UI ([#15513](https://github.com/MetaMask/metamask-mobile/pull/15513))
- feat: Auto-failover to Quicknode when Infura is down ([#15077](https://github.com/MetaMask/metamask-mobile/pull/15077))
- feat: Add Multichain API to Flask ([#14756](https://github.com/MetaMask/metamask-mobile/pull/14756))
- feat: adding Copyable to mobile snaps ([#15348](https://github.com/MetaMask/metamask-mobile/pull/15348))
- feat: STAKE-1015: build 2 step lending deposit confirmation flow ([#15132](https://github.com/MetaMask/metamask-mobile/pull/15132))
- feat: cp-7.47.0 solana code fences ([#15297](https://github.com/MetaMask/metamask-mobile/pull/15297))
- feat: add red styling for insufficient balance on solana swaps ([#15353](https://github.com/MetaMask/metamask-mobile/pull/15353))
- feat: cleaned up Vault Sentry logs ([#15227](https://github.com/MetaMask/metamask-mobile/pull/15227))
- feat: Throttle state serialization ([#15266](https://github.com/MetaMask/metamask-mobile/pull/15266))
- feat: add insufficient balance check for Soala swaps ([#15311](https://github.com/MetaMask/metamask-mobile/pull/15311))
- feat: Adding support for wallet_getCapabilities ([#15047](https://github.com/MetaMask/metamask-mobile/pull/15047))
- feat: Add max value refresher for `transfer` redesigned confirmations ([#15074](https://github.com/MetaMask/metamask-mobile/pull/15074))
- feat: replace `profileSyncing` references by `backupAndSync` and bump `@metamask/profile-sync-controller` to `^14.0.0` ([#15211](https://github.com/MetaMask/metamask-mobile/pull/15211))
- feat: Implement `network-row` component for redesigned transfer transactions ([#15281](https://github.com/MetaMask/metamask-mobile/pull/15281))
- feat: implementing upgrade / downgrade smart account flows ([#15158](https://github.com/MetaMask/metamask-mobile/pull/15158))
- feat: add `Monad Testnet` ([#14963](https://github.com/MetaMask/metamask-mobile/pull/14963))
- feat: support bitcoin ([#15263](https://github.com/MetaMask/metamask-mobile/pull/15263))
- feat: Update button shape to rounded rectangular ([#14540](https://github.com/MetaMask/metamask-mobile/pull/14540))
- feat: Solana dapp connectivity announcement toast ([#15224](https://github.com/MetaMask/metamask-mobile/pull/15224))
- feat: Add function getCallsStatus for middleware to handle wallet_getCallsStatus requests ([#15015](https://github.com/MetaMask/metamask-mobile/pull/15015))
- feat: create solana account and call discoverAccounts during creation and import of hd keyring ([#14775](https://github.com/MetaMask/metamask-mobile/pull/14775))
- feat: add asset selector ([#14958](https://github.com/MetaMask/metamask-mobile/pull/14958))
- feat: Add clear confirmation on back swipe for `transfer` confirmations ([#15101](https://github.com/MetaMask/metamask-mobile/pull/15101))
- feat: Make standalone confirmations redirect to transactions view ([#15106](https://github.com/MetaMask/metamask-mobile/pull/15106))
- feat: Add advanced details row into `transfer` confirmations ([#15004](https://github.com/MetaMask/metamask-mobile/pull/15004))
- feat: account modal changes to switch account type ([#15104](https://github.com/MetaMask/metamask-mobile/pull/15104))
- feat: Migrate eth_accounts and permittedChains to CAIP-25 endowment ([#13970](https://github.com/MetaMask/metamask-mobile/pull/13970))
- feat: swap/bridge solana prepopulate source asset ([#15148](https://github.com/MetaMask/metamask-mobile/pull/15148))
- feat: Implement the publishBatch hook for smart transactions ([#15049](https://github.com/MetaMask/metamask-mobile/pull/15049))
- feat: update backup and sync settings events ([#15165](https://github.com/MetaMask/metamask-mobile/pull/15165))
- feat: Enable general alert banners for transaction confirmations ([#15119](https://github.com/MetaMask/metamask-mobile/pull/15119))
- feat: Add validations for incoming batch request ([#14993](https://github.com/MetaMask/metamask-mobile/pull/14993))
- feat: profile sync > backup and sync redesign ([#15003](https://github.com/MetaMask/metamask-mobile/pull/15003))
- feat: Remove Go To Favorites from browser menus ([#14121](https://github.com/MetaMask/metamask-mobile/pull/14121))
- feat: add backup sync new components (unused yet) ([#15071](https://github.com/MetaMask/metamask-mobile/pull/15071))
- feat: Adding wallet middleware in mobile ([#14792](https://github.com/MetaMask/metamask-mobile/pull/14792))
- feat: Integrate deeplink and dapp initated transfer confirmations ([#14916](https://github.com/MetaMask/metamask-mobile/pull/14916))
- feat: Use chainId when checking if it's a smart transaction ([#14890](https://github.com/MetaMask/metamask-mobile/pull/14890))
- feat: Add `FromTo` component for `transfer` confirmations ([#14960](https://github.com/MetaMask/metamask-mobile/pull/14960))
- feat: Add Flask Build Support with Dynamic RDNs for Mobile ([#14886](https://github.com/MetaMask/metamask-mobile/pull/14886))
- feat: solana opt-in changes cp-7.46.0 ([#14888](https://github.com/MetaMask/metamask-mobile/pull/14888))
- feat: solana banner cp-7.46.0 ([#14881](https://github.com/MetaMask/metamask-mobile/pull/14881))
- feat: STAKE-1006 add earn remote feature flags to mobile ([#14660](https://github.com/MetaMask/metamask-mobile/pull/14660))
- feat: add discover accounts to MultichainSnapClient ([#14727](https://github.com/MetaMask/metamask-mobile/pull/14727))
- feat: Add initial `transfer` info component for redesigned confirmations ([#14793](https://github.com/MetaMask/metamask-mobile/pull/14793))
- feat: cp-7.46.0 Solana Token Details ([#14736](https://github.com/MetaMask/metamask-mobile/pull/14736))
- chore: Bump WebView to 14.2.0 ([#16492](https://github.com/MetaMask/metamask-mobile/pull/16492))
- feat(deposit): adds region selector to deposit page ([#16478](https://github.com/MetaMask/metamask-mobile/pull/16478))
- chore: add apechain, berachain and edu network logos ([#16316](https://github.com/MetaMask/metamask-mobile/pull/16316))
- chore: remove MM_CHAIN_PERMISSIONS flag ([#16142](https://github.com/MetaMask/metamask-mobile/pull/16142))
- feat(identity): enable contact backup-and-sync ([#15784](https://github.com/MetaMask/metamask-mobile/pull/15784))
- chore: update deeplink modal text copies ([#16476](https://github.com/MetaMask/metamask-mobile/pull/16476))
- test: convert browser page obects to typescript ([#16448](https://github.com/MetaMask/metamask-mobile/pull/16448))
- feat(deposit): Build quote page UI ([#16298](https://github.com/MetaMask/metamask-mobile/pull/16298))
- test: move multi SRP e2e to quarantine ([#16473](https://github.com/MetaMask/metamask-mobile/pull/16473))
- feat(deposit): KYC webview ([#16180](https://github.com/MetaMask/metamask-mobile/pull/16180))
- chore: cp-7.25.0 bump `@metamask/keyring-controller` to `^21.0.4` ([#14702](https://github.com/MetaMask/metamask-mobile/pull/14702))
- feat(ramps): adds sentry tracing to ramp quote load ([#14824](https://github.com/MetaMask/metamask-mobile/pull/14824))
- chore: v0 of a performance tracing system only for not production builds ([#14835](https://github.com/MetaMask/metamask-mobile/pull/14835))
- chore: update bug template to differentiate public beta ([#14758](https://github.com/MetaMask/metamask-mobile/pull/14758))
- feat(bridge): cp-7.46.0 implement bridge controller metrics ([#14846](https://github.com/MetaMask/metamask-mobile/pull/14846))
- New Crowdin translations by Github Action ([#14588](https://github.com/MetaMask/metamask-mobile/pull/14588))
- feat(ramps): adds performance tracing for initial ramp experience load ([#14810](https://github.com/MetaMask/metamask-mobile/pull/14810))
- perf: cp-7.46.0 prevent carousel rerenders ([#14980](https://github.com/MetaMask/metamask-mobile/pull/14980))
- chore: add backup and sync translations ([#15039](https://github.com/MetaMask/metamask-mobile/pull/15039))
- chore: rename profile sync hooks and selectors to backup and sync ([#15042](https://github.com/MetaMask/metamask-mobile/pull/15042))
- chore: update cicd release workflow refs ([#15062](https://github.com/MetaMask/metamask-mobile/pull/15062))
- test: change phishing url for e2e ([#15054](https://github.com/MetaMask/metamask-mobile/pull/15054))
- feat(bridge): prevent quotes from refreshing once tx has been submitted cp-7.46.0 ([#15019](https://github.com/MetaMask/metamask-mobile/pull/15019))
- chore: Mms 2059 bridge remote feature flags cp-7.46.0 ([#14865](https://github.com/MetaMask/metamask-mobile/pull/14865))
- chore: Upgrade React Native to 0.76.6 ([#13771](https://github.com/MetaMask/metamask-mobile/pull/13771))
- test: rename ganache specific contract registry class to generic 'contract registry' ([#14944](https://github.com/MetaMask/metamask-mobile/pull/14944))
- chore: bridge keep keyboard on screen even during quote fetching cp-7.46.0 ([#14908](https://github.com/MetaMask/metamask-mobile/pull/14908))
- chore: Improve ApprovalModal performance ([#14986](https://github.com/MetaMask/metamask-mobile/pull/14986))
- chore(docs): Add E2E testing guide for Segment events ([#14995](https://github.com/MetaMask/metamask-mobile/pull/14995))
- chore: Further optimize AccountsSelectorList ([#14957](https://github.com/MetaMask/metamask-mobile/pull/14957))
- perf: cp-7.46.0 prevent account notification rerenders ([#14981](https://github.com/MetaMask/metamask-mobile/pull/14981))
- chore: bump solana snap to 1.24.0 cp-7.46.0 ([#14880](https://github.com/MetaMask/metamask-mobile/pull/14880))
- perf: optimise useGetFormattedTokensPerChain reselector recomputations ([#14961](https://github.com/MetaMask/metamask-mobile/pull/14961))
- chore: cp-7.46.0 remove temporary activity tab navigation workaround ([#14966](https://github.com/MetaMask/metamask-mobile/pull/14966))
- chore: upgrade assets controller v59 ([#14895](https://github.com/MetaMask/metamask-mobile/pull/14895))
- chore: Improve account list performance ([#14910](https://github.com/MetaMask/metamask-mobile/pull/14910))
- chore(ramp): cp-7.46.0 upgrade sdk to v2.1.6 ([#14930](https://github.com/MetaMask/metamask-mobile/pull/14930))
- perf: reduce constant re-renders from component size calculations ([#14945](https://github.com/MetaMask/metamask-mobile/pull/14945))
- feat(bridge): cp-7.46.0 enable bridge UI in bitrise.yml ([#14948](https://github.com/MetaMask/metamask-mobile/pull/14948))
- chore: Remove ios simulator runway bucket link ([#14896](https://github.com/MetaMask/metamask-mobile/pull/14896))
- chore: resolve lint warnings in UI components ([#14831](https://github.com/MetaMask/metamask-mobile/pull/14831))
- perf: cp-7.45.0 remove additional polling provider re-renders from parent updates ([#14925](https://github.com/MetaMask/metamask-mobile/pull/14925))
- chore: Bridge controller version bumps ([#14943](https://github.com/MetaMask/metamask-mobile/pull/14943))
- perf: cp-7.45.0 reduce bottom sheet loading animations ([#14920](https://github.com/MetaMask/metamask-mobile/pull/14920))
- chore: Bump Snaps packages (cp-7.46.0) ([#14922](https://github.com/MetaMask/metamask-mobile/pull/14922))
- chore: use Arrow2Left for bridge numpad arrow cp-7.46.0 ([#14909](https://github.com/MetaMask/metamask-mobile/pull/14909))
- chore: add bitrise version bump ([#14610](https://github.com/MetaMask/metamask-mobile/pull/14610))
- chore: Update readme and remove e2e smoke from label check ([#14900](https://github.com/MetaMask/metamask-mobile/pull/14900))
- chore: Report undefined selected account in migrations ([#14823](https://github.com/MetaMask/metamask-mobile/pull/14823))
- chore(ramp): cp-7.46.0 update ramp sdk to 2.1.5 ([#14595](https://github.com/MetaMask/metamask-mobile/pull/14595))
- refactor: snaps UI tests ([#14705](https://github.com/MetaMask/metamask-mobile/pull/14705))
- refactor: use `react-native-quick-crypto` ([#14923](https://github.com/MetaMask/metamask-mobile/pull/14923))
- refactor: rm ts exception for getNetworkImageSource param ([#15144](https://github.com/MetaMask/metamask-mobile/pull/15144))
- chore: add controllers metadata ([#15020](https://github.com/MetaMask/metamask-mobile/pull/15020))
- perf: persist Snap accounts only once ([#15027](https://github.com/MetaMask/metamask-mobile/pull/15027))
- chore: remove profile sync unused translations ([#15136](https://github.com/MetaMask/metamask-mobile/pull/15136))
- revert: Reduce bottom sheet loading animations (#14920) ([#14920](https://github.com/MetaMask/metamask-mobile/pull/14920))
- chore: remove unused identity paths from CODEOWNERS ([#15129](https://github.com/MetaMask/metamask-mobile/pull/15129))
- chore: upgrade solana cp-7.46.0 ([#15005](https://github.com/MetaMask/metamask-mobile/pull/15005))
- test: Create Anvil Clients Util ([#14952](https://github.com/MetaMask/metamask-mobile/pull/14952))
- perf: Fix a couple of selectors used for tokens ([#15075](https://github.com/MetaMask/metamask-mobile/pull/15075))
- chore: add expo flask dev & sim builds ([#15093](https://github.com/MetaMask/metamask-mobile/pull/15093))
- refactor: parse signTypedData logic ([#14378](https://github.com/MetaMask/metamask-mobile/pull/14378))
- chore: Revert "chore: Remove ios simulator runway bucket link (#14896)" ([#14896](https://github.com/MetaMask/metamask-mobile/pull/14896))
- Chore: upgrade assets controller v60 ([#14913](https://github.com/MetaMask/metamask-mobile/pull/14913))
- refactor: remove old notification code ([#15177](https://github.com/MetaMask/metamask-mobile/pull/15177))
- feat(INFRA-2571): add pr line checker ([#15397](https://github.com/MetaMask/metamask-mobile/pull/15397))
- chore: cp-7.47.0 extract insufficient balance check to hook ([#15386](https://github.com/MetaMask/metamask-mobile/pull/15386))
- chore: add `SEI` network logo ([#14677](https://github.com/MetaMask/metamask-mobile/pull/14677))
- chore(bridge): update bridge base url based on environment ([#15305](https://github.com/MetaMask/metamask-mobile/pull/15305))
- feat(deposit): initial context and feature flag selectors ([#15331](https://github.com/MetaMask/metamask-mobile/pull/15331))
- refactor: re-patch react-native-svg@15.11.2 ([#15327](https://github.com/MetaMask/metamask-mobile/pull/15327))
- chore: Remove DrawerView ([#15181](https://github.com/MetaMask/metamask-mobile/pull/15181))
- chore: Bump `@metamask/snaps-controllers` from `^12.0.0` to `^12.0.1` ([#15310](https://github.com/MetaMask/metamask-mobile/pull/15310))
- Improvements in smart account upgrade, downgrade pages ([#15200](https://github.com/MetaMask/metamask-mobile/pull/15200))
- test: disable portfolio connect e2e ([#15307](https://github.com/MetaMask/metamask-mobile/pull/15307))
- test: Create Anvil Seeder Utility ([#15271](https://github.com/MetaMask/metamask-mobile/pull/15271))
- chore(deposit): add initial folder structure ([#15294](https://github.com/MetaMask/metamask-mobile/pull/15294))
- chore: sentry cleanup: stop logging deeplinked URL parsing errors ([#15121](https://github.com/MetaMask/metamask-mobile/pull/15121))
- chore: Bump Snaps packages ([#15232](https://github.com/MetaMask/metamask-mobile/pull/15232))
- chore: cp-7.47.0 upgrade assets-controller v62.0.0 ([#15261](https://github.com/MetaMask/metamask-mobile/pull/15261))
- chore: cp-7.47.0 upgrade solana-wallet-snap to v1.27.0 ([#15282](https://github.com/MetaMask/metamask-mobile/pull/15282))
- test: add extra param to waitAndTap to reduce flakiness while selecting a network ([#15276](https://github.com/MetaMask/metamask-mobile/pull/15276))
- test: Create anvil manager class ([#15046](https://github.com/MetaMask/metamask-mobile/pull/15046))
- chore: Chore/update ios simulator readme ([#15251](https://github.com/MetaMask/metamask-mobile/pull/15251))
- chore: stable sync 7.45.1 & 7.45.2 ([#15064](https://github.com/MetaMask/metamask-mobile/pull/15064))
- chore: add matchain, flow, plume, lens logos ([#15072](https://github.com/MetaMask/metamask-mobile/pull/15072))
- chore: stable-sync 7.45.0 ([#15044](https://github.com/MetaMask/metamask-mobile/pull/15044))
- chore: Update the icon assets with new set of icons ([#14733](https://github.com/MetaMask/metamask-mobile/pull/14733))
- refactor: Refactor connection UI MultiSelector components to be more generic ([#14941](https://github.com/MetaMask/metamask-mobile/pull/14941))
- chore(ramp): cp-7.46.0 upgrade sdk to 2.1.8 ([#15212](https://github.com/MetaMask/metamask-mobile/pull/15212))
- refactor: update account item list selection element to fix flakiness ([#15206](https://github.com/MetaMask/metamask-mobile/pull/15206))
- perf: accounts improvements ([#15194](https://github.com/MetaMask/metamask-mobile/pull/15194))
- perf: add HD account tracing + fix add Snap account tracing ([#15207](https://github.com/MetaMask/metamask-mobile/pull/15207))
- chore: create main rc workflow ([#15195](https://github.com/MetaMask/metamask-mobile/pull/15195))
- feat(INFRA-2510): new RCA workflow ([#15179](https://github.com/MetaMask/metamask-mobile/pull/15179))
- test: Move the token details tests to quarantine ([#15728](https://github.com/MetaMask/metamask-mobile/pull/15728))
- feat(deposit): replaces mock OTP email SDK calls with real ones ([#15647](https://github.com/MetaMask/metamask-mobile/pull/15647))
- perf: patch tokenBalances state update modifications ([#15048](https://github.com/MetaMask/metamask-mobile/pull/15048))
- feat(deposit): MVP - deposit feature email authentication UX ([#15568](https://github.com/MetaMask/metamask-mobile/pull/15568))
- chore: stable sync 7.46.0 & 7.46.1 ([#15562](https://github.com/MetaMask/metamask-mobile/pull/15562))
- chore: updates multichain-transactions-controller cp-7.47.0 ([#15673](https://github.com/MetaMask/metamask-mobile/pull/15673))
- chore: Sentry instrumentation for accounts list ([#15459](https://github.com/MetaMask/metamask-mobile/pull/15459))
- build: upgrade `@metamask/assets-controllers@63.1.0` ([#15558](https://github.com/MetaMask/metamask-mobile/pull/15558))
- test: Adding e2e tests for bridge ([#15067](https://github.com/MetaMask/metamask-mobile/pull/15067))
- build: upgrade `@metamask/assets-controllers@63.0.0` ([#15557](https://github.com/MetaMask/metamask-mobile/pull/15557))
- perf: cp-7.47.0 Improve `useSnapAssetDisplay` performance ([#15573](https://github.com/MetaMask/metamask-mobile/pull/15573))
- test: Added coverage transaction activity ([#15514](https://github.com/MetaMask/metamask-mobile/pull/15514))
- chore: replace RNFS with expo-filesystem for EntryScriptWeb3.js (#15413) ([#15413](https://github.com/MetaMask/metamask-mobile/pull/15413))
- perf: prevent unnecessary AssetPollingProvider hook re-renders ([#15556](https://github.com/MetaMask/metamask-mobile/pull/15556))
- chore: Remove yarn.lock from CODEOWNERS ([#15535](https://github.com/MetaMask/metamask-mobile/pull/15535))
- chore: #15028 Add `redux-devtools-expo-dev-plugin` for debugging Redux actions ([#15474](https://github.com/MetaMask/metamask-mobile/pull/15474))
- test: add successful swap analytics checks ([#15541](https://github.com/MetaMask/metamask-mobile/pull/15541))
- perf: reduce scrollable tab view re-renders ([#15552](https://github.com/MetaMask/metamask-mobile/pull/15552))
- chore: add expo pipelines for main ([#15338](https://github.com/MetaMask/metamask-mobile/pull/15338))
- feat(deposit): add native ramps sdk ([#15465](https://github.com/MetaMask/metamask-mobile/pull/15465))
- chore: set CODEOWNERs for multichain accounts ([#15525](https://github.com/MetaMask/metamask-mobile/pull/15525))
- test: refactor and fix ramps e2e test cases ([#15518](https://github.com/MetaMask/metamask-mobile/pull/15518))
- feat(4144): per-dapp-selected-networks ([#14539](https://github.com/MetaMask/metamask-mobile/pull/14539))
- chore: update stale bot ([#15050](https://github.com/MetaMask/metamask-mobile/pull/15050))
- test: restore phishing alert scenario in AccountConnect ([#15506](https://github.com/MetaMask/metamask-mobile/pull/15506))
- chore: Bump Snaps packages ([#15477](https://github.com/MetaMask/metamask-mobile/pull/15477))
- chore: #14527 - Add performance docs for identifying re-render optimizations ([#15422](https://github.com/MetaMask/metamask-mobile/pull/15422))
- chore: bump `@metamask/{controller-utils,network-controller}` to `11.9.0`, `23.5.0` ([#15490](https://github.com/MetaMask/metamask-mobile/pull/15490))
- refactor: CAIP-ify Connection Components ([#15084](https://github.com/MetaMask/metamask-mobile/pull/15084))
- feat(deposit): add routes and root route ([#15374](https://github.com/MetaMask/metamask-mobile/pull/15374))
- test: update ramps tests region auto select ([#15471](https://github.com/MetaMask/metamask-mobile/pull/15471))
- chore: update plume logo ([#15296](https://github.com/MetaMask/metamask-mobile/pull/15296))
- test: update notification e2e tests ([#15447](https://github.com/MetaMask/metamask-mobile/pull/15447))
- feat(INFRA-2531): check for bitrise success comments in imported commits ([#15349](https://github.com/MetaMask/metamask-mobile/pull/15349))
- chore(multi-srp): remove code fences ([#15438](https://github.com/MetaMask/metamask-mobile/pull/15438))
- refactor: remove link safety checks and related tests ([#15361](https://github.com/MetaMask/metamask-mobile/pull/15361))
- chore: update bitrise.yml to re-enable iOS API specs ([#15750](https://github.com/MetaMask/metamask-mobile/pull/15750))
- chore: cp-7.47.0 update solana-snap to latest version ([#15712](https://github.com/MetaMask/metamask-mobile/pull/15712))
- feat(deposit): adds the verify identity page to the deposit flow ([#15652](https://github.com/MetaMask/metamask-mobile/pull/15652))
- chore: cp-7.47.0 update button text for EVM bridges ([#15724](https://github.com/MetaMask/metamask-mobile/pull/15724))
- perf: reduce useMetrics hook rerenders ([#15719](https://github.com/MetaMask/metamask-mobile/pull/15719))
- chore(ramp): cp-7.47.0 upgrade sdk to 2.1.10 ([#15852](https://github.com/MetaMask/metamask-mobile/pull/15852))
- feat(ramp): store provider accessToken in a secure token vault ([#15570](https://github.com/MetaMask/metamask-mobile/pull/15570))
- refactor(4144): Consolidate per dapp feature flags into one feature flag ([#15621](https://github.com/MetaMask/metamask-mobile/pull/15621))
- test: rename parameter in Assertions and Gestures utils, and add more test methods ([#15706](https://github.com/MetaMask/metamask-mobile/pull/15706))
- chore: update reselect + use fast equals ([#15800](https://github.com/MetaMask/metamask-mobile/pull/15800))
- Add `promptToCreateSolanaAccount` flag to enable Solana Opt In Flow ([#15729](https://github.com/MetaMask/metamask-mobile/pull/15729))
- chore: removing duplicate icons and updating account splash page ([#15642](https://github.com/MetaMask/metamask-mobile/pull/15642))
- test: e2e test coverage for solana ([#15107](https://github.com/MetaMask/metamask-mobile/pull/15107))
- chore: Update transaction controller to 56.3.0 ([#15902](https://github.com/MetaMask/metamask-mobile/pull/15902))
- test: enable send solana spec ([#15960](https://github.com/MetaMask/metamask-mobile/pull/15960))
- User to be able to edit approval amount in simulation section of batched confirmation ([#15572](https://github.com/MetaMask/metamask-mobile/pull/15572))
- Discovery tab implementation ([#15569](https://github.com/MetaMask/metamask-mobile/pull/15569))
- feat(deposit): kyc address form ([#15822](https://github.com/MetaMask/metamask-mobile/pull/15822))
- feat(deposit): phone number input formatting (USA only) ([#15905](https://github.com/MetaMask/metamask-mobile/pull/15905))
- feat(deposit): adds basic info KYC form ([#15818](https://github.com/MetaMask/metamask-mobile/pull/15818))
- chore: add remote feature flag for multichain accounts ([#15533](https://github.com/MetaMask/metamask-mobile/pull/15533))
- fix(ramp): region not detected case ([#15869](https://github.com/MetaMask/metamask-mobile/pull/15869))
- chore: add e2e test for defi positions pages ([#15892](https://github.com/MetaMask/metamask-mobile/pull/15892))
- chore: upgrade multichain-networks-controllers-v0.7.0 ([#14348](https://github.com/MetaMask/metamask-mobile/pull/14348))
- feat(15638): for the block explorer of the account menu, use Etherscan's multichain portfolio view ([#15821](https://github.com/MetaMask/metamask-mobile/pull/15821))
- chore: Batch bg state updates in Engine service (#15189) ([#15189](https://github.com/MetaMask/metamask-mobile/pull/15189))
- chore: Remove remnants of Flipper and update README with Redux DevTools ([#15855](https://github.com/MetaMask/metamask-mobile/pull/15855))
- chore(deps): bump @metamask/message-signing-snap to v1.1.2 ([#15141](https://github.com/MetaMask/metamask-mobile/pull/15141))
- Feat: 1.3 new create import srp ([#15669](https://github.com/MetaMask/metamask-mobile/pull/15669))
- chore: add Genesys network logo ([#16033](https://github.com/MetaMask/metamask-mobile/pull/16033))
- refactor(ramps): adds aggregator and deposit directory subdirectories ([#15998](https://github.com/MetaMask/metamask-mobile/pull/15998))
- chore: remove "solana dapp connectivity coming soon" toast ([#15817](https://github.com/MetaMask/metamask-mobile/pull/15817))
- chore: remove MULTICHAIN_API feature flag fencing ([#15769](https://github.com/MetaMask/metamask-mobile/pull/15769))
- chore: Remove MetaMetrics.events file from code owners ([#16005](https://github.com/MetaMask/metamask-mobile/pull/16005))
- chore: Bump @metamask/phishing-controller to 12.5.0 ([#15146](https://github.com/MetaMask/metamask-mobile/pull/15146))
- chore: update js.env.example with ramps environment variable ([#16010](https://github.com/MetaMask/metamask-mobile/pull/16010))
- chore: updating deprecated button shape ([#15643](https://github.com/MetaMask/metamask-mobile/pull/15643))
- New Crowdin translations by Github Action ([#14902](https://github.com/MetaMask/metamask-mobile/pull/14902))
- chore: cp-7.47.0 update solana ([#15980](https://github.com/MetaMask/metamask-mobile/pull/15980))
- chore: stable main 7.46.2 sync ([#15938](https://github.com/MetaMask/metamask-mobile/pull/15938))
- chore: Use metro extraNodeModules instead of rn-nodeify ([#15378](https://github.com/MetaMask/metamask-mobile/pull/15378))
- ci: fix stale bot action ([#15990](https://github.com/MetaMask/metamask-mobile/pull/15990))
- fix(AccountConnect): filter networks for WalletConnect and MMSDK remote connections ([#15968](https://github.com/MetaMask/metamask-mobile/pull/15968))
- chore: bump `@metamask/network-controller` to `^23.5.1` ([#15981](https://github.com/MetaMask/metamask-mobile/pull/15981))
- chore: prevent TokenList rerenders ([#15926](https://github.com/MetaMask/metamask-mobile/pull/15926))
- chore: upgrade native-ramps- sdk to 1.0.4 ([#16346](https://github.com/MetaMask/metamask-mobile/pull/16346))
- test: disable unstable multi srp e2e ([#16336](https://github.com/MetaMask/metamask-mobile/pull/16336))
- chore(deposit): upgrade sdk to 1.0.2 ([#16310](https://github.com/MetaMask/metamask-mobile/pull/16310))
- chore: Update onboarding views for web3auth team ownership ([#16324](https://github.com/MetaMask/metamask-mobile/pull/16324))
- fix(15815): in TransactionElement componet, ticker displayed as undefined instead instead of ticker symbol. This is now fixed ([#16043](https://github.com/MetaMask/metamask-mobile/pull/16043))
- test: migrate receive flow e2e infrastructure to TypeScript with shared types ([#16263](https://github.com/MetaMask/metamask-mobile/pull/16263))
- chore: Update code owners for accounts components ([#16290](https://github.com/MetaMask/metamask-mobile/pull/16290))
- refactor(deposit): useCallback in KYC handlers ([#16245](https://github.com/MetaMask/metamask-mobile/pull/16245))
- perf: Unmount Transactions and Browser (incl tabs) screens when unfocused ([#16034](https://github.com/MetaMask/metamask-mobile/pull/16034))
- feat(deposit): adds get started screen to deposit flow ([#16148](https://github.com/MetaMask/metamask-mobile/pull/16148))
- feat(deposit): pass email to OTP view ([#16113](https://github.com/MetaMask/metamask-mobile/pull/16113))
- feat(deposit): adds order type to ramp processor ([#16210](https://github.com/MetaMask/metamask-mobile/pull/16210))
- test: implement create and import wallet analytics tests ([#16128](https://github.com/MetaMask/metamask-mobile/pull/16128))
- test: Fix flakiness Swap tests ([#16218](https://github.com/MetaMask/metamask-mobile/pull/16218))
- chore: bump up bridge controller to `32.1.1` ([#16217](https://github.com/MetaMask/metamask-mobile/pull/16217))
- chore: Generate test apk in build_android_devbuild workflow ([#16003](https://github.com/MetaMask/metamask-mobile/pull/16003))
- feat(deposit): kyc processing screen ([#16053](https://github.com/MetaMask/metamask-mobile/pull/16053))
- chore(4144): enable feature flag and fix unit tests falling this enable. ([#16150](https://github.com/MetaMask/metamask-mobile/pull/16150))
- feat(deposit): adds logout button to settings page ([#16156](https://github.com/MetaMask/metamask-mobile/pull/16156))
- feat(4057): account list active networks avatars ([#15964](https://github.com/MetaMask/metamask-mobile/pull/15964))
- refactor: getMultichainBlockExplorer to be a hook ([#16168](https://github.com/MetaMask/metamask-mobile/pull/16168))
- fix(5091): remove misleading network badges from AccountRightButton ([#16104](https://github.com/MetaMask/metamask-mobile/pull/16104))
- chore: Convert confirmation e2e test files to TS ([#16160](https://github.com/MetaMask/metamask-mobile/pull/16160))
- chore: upgrade assets-controllers to v68 ([#16012](https://github.com/MetaMask/metamask-mobile/pull/16012))
- refactor: move e2e notification spec to typescript ([#16164](https://github.com/MetaMask/metamask-mobile/pull/16164))
- feat(deposit): submit kyc form data to provider ([#16115](https://github.com/MetaMask/metamask-mobile/pull/16115))
- perf: cache Intl instances ([#16151](https://github.com/MetaMask/metamask-mobile/pull/16151))
- perf: optimise tokenlistitem selectors to use weakmap parameter memoization ([#16095](https://github.com/MetaMask/metamask-mobile/pull/16095))
- test: flip switch to make all tests use anvil by default ([#15375](https://github.com/MetaMask/metamask-mobile/pull/15375))
- feat(deposit): adds logout button to settings page ([#16110](https://github.com/MetaMask/metamask-mobile/pull/16110))
- fix(16004): filter network icons by account scopes in dapp connections ([#16041](https://github.com/MetaMask/metamask-mobile/pull/16041))
- feat(deposit): fetch user KYC status and route to correct view ([#16091](https://github.com/MetaMask/metamask-mobile/pull/16091))
- chore: Add Sophon and Sophon Testnet logos ([#16106](https://github.com/MetaMask/metamask-mobile/pull/16106))
- chore: add e2e test utils for user storage ([#16139](https://github.com/MetaMask/metamask-mobile/pull/16139))
- refactor: Active/Selected account change toast for Solana ([#16061](https://github.com/MetaMask/metamask-mobile/pull/16061))
- chore: Move EIP_7702_PUBLIC_KEY to AppConstants ([#16124](https://github.com/MetaMask/metamask-mobile/pull/16124))
- chore: Rename `network-row` component into `network-and-origin-row` ([#16117](https://github.com/MetaMask/metamask-mobile/pull/16117))
- chore: move flaky test to quarantine ([#16120](https://github.com/MetaMask/metamask-mobile/pull/16120))
- feat(deposit): add sdk environment ([#16097](https://github.com/MetaMask/metamask-mobile/pull/16097))
- build: bump `@metamask/assets-controllers@68.2.0` ([#16369](https://github.com/MetaMask/metamask-mobile/pull/16369))
- test: add regression tests for new networks monad + megaeth ([#15903](https://github.com/MetaMask/metamask-mobile/pull/15903))
- test: create withSecondTestDappTab fixture for multi-dapp e2e ([#16380](https://github.com/MetaMask/metamask-mobile/pull/16380))
- chore: add hoodi support for mobile pooled staking ([#16350](https://github.com/MetaMask/metamask-mobile/pull/16350))
- feat(deposit): adds initial deposit processor ([#16352](https://github.com/MetaMask/metamask-mobile/pull/16352))
- test: temporarily disable multisrp e2e ([#16372](https://github.com/MetaMask/metamask-mobile/pull/16372))
- build: bump `@metamask/notification-services-controller@10.0.0` ([#16365](https://github.com/MetaMask/metamask-mobile/pull/16365))
- chore: Bump Snaps packages ([#16283](https://github.com/MetaMask/metamask-mobile/pull/16283))
- chore: cp-7.49.0 bump solana 1.33.1 ([#16364](https://github.com/MetaMask/metamask-mobile/pull/16364))
- Feat/stake 901 integrate your earnings component with stablecoin lending data ([#16428](https://github.com/MetaMask/metamask-mobile/pull/16428))
- test: run smoke e2e tests on flask builds ([#16405](https://github.com/MetaMask/metamask-mobile/pull/16405))
- chore: migrate identity e2e files to TypeScript ([#16419](https://github.com/MetaMask/metamask-mobile/pull/16419))
- test: Convert Swap and Stake e2e tests to typescript ([#16269](https://github.com/MetaMask/metamask-mobile/pull/16269))
- test: update asset list test cases ([#16395](https://github.com/MetaMask/metamask-mobile/pull/16395))
- test: move ramp deeplink cases to quarantine, rename and clean up old versions ([#16408](https://github.com/MetaMask/metamask-mobile/pull/16408))
- test: cancel and view all quotes metametrics e2e test ([#16071](https://github.com/MetaMask/metamask-mobile/pull/16071))
- test: Revert "test: add regression tests for new networks monad + megaeth" ([#16414](https://github.com/MetaMask/metamask-mobile/pull/16414))
- chore: remove unchanged changelog ([#16515](https://github.com/MetaMask/metamask-mobile/pull/16515))
- New Crowdin translations by Github Action ([#16007](https://github.com/MetaMask/metamask-mobile/pull/16007))
- New Crowdin translations by Github Action ([#14867](https://github.com/MetaMask/metamask-mobile/pull/14867))

### Fixed

- fix: ensure inpage provider retries any pending requests sent before BackgroundBridge fully initialized ([#16349](https://github.com/MetaMask/metamask-mobile/pull/16349))
- fix: android lottie flickering ([#16506](https://github.com/MetaMask/metamask-mobile/pull/16506))
- fix: Improve Snaps UI scrolling experience ([#16426](https://github.com/MetaMask/metamask-mobile/pull/16426))
- fix: checkbox text update ([#16501](https://github.com/MetaMask/metamask-mobile/pull/16501))
- fix: contact-sync tests naming conventions ([#16498](https://github.com/MetaMask/metamask-mobile/pull/16498))
- fix: icon update and removed unused image ([#16496](https://github.com/MetaMask/metamask-mobile/pull/16496))
- fix: Per Dapp selected network in `AddressFrom` component for legacy confirmations ([#16335](https://github.com/MetaMask/metamask-mobile/pull/16335))
- fix: asset detail screen ([#16468](https://github.com/MetaMask/metamask-mobile/pull/16468))
- fix: fix breaking E2E due to bad throttle function ([#16470](https://github.com/MetaMask/metamask-mobile/pull/16470))
- fix: cp-7.47.0 Remove `requireApproval:false` from swaps confirmations ([#16469](https://github.com/MetaMask/metamask-mobile/pull/16469))
- fix: lottie flickering ([#16410](https://github.com/MetaMask/metamask-mobile/pull/16410))
- fix: SRP paste with space ([#16443](https://github.com/MetaMask/metamask-mobile/pull/16443))
- fix: Design QA Mobile - Bottom padding for CTA is missing and Confirm SRP word selection issue ([#16415](https://github.com/MetaMask/metamask-mobile/pull/16415))
- fix: use `ApprovalType.TransactionBatch` ([#16313](https://github.com/MetaMask/metamask-mobile/pull/16313))
- fix: Use `ContractInteraction` as default confirmation for redesigned transfer confirmations ([#16455](https://github.com/MetaMask/metamask-mobile/pull/16455))
- fix: scroll button flickering issue ([#16442](https://github.com/MetaMask/metamask-mobile/pull/16442))
- fix: cp-7.47.0 Fix QR wallet support in swaps flow ([#16447](https://github.com/MetaMask/metamask-mobile/pull/16447))
- fix: ui updates - translation format, text ellipsis, fox logo padding… ([#16451](https://github.com/MetaMask/metamask-mobile/pull/16451))
- fix: Fox logo issue ([#16422](https://github.com/MetaMask/metamask-mobile/pull/16422))
- fix: OptinMetrics transation fix, style fix for title and Password ch… ([#16420](https://github.com/MetaMask/metamask-mobile/pull/16420))
- fix: improve token search token ([#16423](https://github.com/MetaMask/metamask-mobile/pull/16423))
- fix: cp-7.49.0 bump version of `@metamask/chain-agnostic-permission` with fix to helper function that was causing error thrown in certain cases when browser tabs were opened ([#16383](https://github.com/MetaMask/metamask-mobile/pull/16383))
- fix: cp-7.49.0 bump solana-wallet-standard to 0.5.0 and multichain-api-client to 0.6.2 ([#16363](https://github.com/MetaMask/metamask-mobile/pull/16363))
- fix: cp-7.47.0 Fix QR send flow edge case ([#16418](https://github.com/MetaMask/metamask-mobile/pull/16418))
- fix: add wallet ux traces ([#16412](https://github.com/MetaMask/metamask-mobile/pull/16412))
- fix: cp-7.47.0 add Solana transactions in AssetOverview ([#16073](https://github.com/MetaMask/metamask-mobile/pull/16073))
- fix: android login page status-bar ([#16396](https://github.com/MetaMask/metamask-mobile/pull/16396))
- fix: cp-7.47.0 optimize send flow ([#16373](https://github.com/MetaMask/metamask-mobile/pull/16373))
- fix: Import SRP Build and UI fixes ([#16394](https://github.com/MetaMask/metamask-mobile/pull/16394))
- fix: Create Password UI Update ([#16393](https://github.com/MetaMask/metamask-mobile/pull/16393))
- fix: add traces ([#16317](https://github.com/MetaMask/metamask-mobile/pull/16317))
- fix: cp-7.47.0 use keyringMetadata from keyring ([#16359](https://github.com/MetaMask/metamask-mobile/pull/16359))
- fix: cp-7.49.0 lens-logo-background ([#16366](https://github.com/MetaMask/metamask-mobile/pull/16366))
- fix: #16214 - users are unable to paste their SRP into the import fi… ([#16225](https://github.com/MetaMask/metamask-mobile/pull/16225))
- fix: Progress Bar Carousel ([#16123](https://github.com/MetaMask/metamask-mobile/pull/16123))
- fix: Checkbox text ui ([#16130](https://github.com/MetaMask/metamask-mobile/pull/16130))
- fix: fix flaky test on token list ([#16342](https://github.com/MetaMask/metamask-mobile/pull/16342))
- fix: flakey import-srp e2e test ([#16326](https://github.com/MetaMask/metamask-mobile/pull/16326))
- fix: cp-7.49.0 Integrate ErrorReportingService to fix NetworkController init ([#16300](https://github.com/MetaMask/metamask-mobile/pull/16300))
- fix: fix ticker trx history regression ([#16327](https://github.com/MetaMask/metamask-mobile/pull/16327))
- fix: use disable sync before assertion ([#16325](https://github.com/MetaMask/metamask-mobile/pull/16325))
- fix: fixes unit test guide url ([#16235](https://github.com/MetaMask/metamask-mobile/pull/16235))
- fix: cp-7.49.0 eth_signTypedData_v4 on Multichain API ([#16318](https://github.com/MetaMask/metamask-mobile/pull/16318))
- fix: cp-7.49.0 Fix native asset `transfer` for Polygon ([#16295](https://github.com/MetaMask/metamask-mobile/pull/16295))
- fix: add traces for transactions ([#16278](https://github.com/MetaMask/metamask-mobile/pull/16278))
- fix: cp-7.49.0 Fix `useConfirmationRedesignEnabled` hook ([#16280](https://github.com/MetaMask/metamask-mobile/pull/16280))
- fix: #16215 - SRP correctly imported in any format ([#16224](https://github.com/MetaMask/metamask-mobile/pull/16224))
- fix: show snap accounts in account count in AddNewAccount cp-7.47.0 ([#16229](https://github.com/MetaMask/metamask-mobile/pull/16229))
- fix: number_of_hd_entropies value when keyring is unlocked ([#16250](https://github.com/MetaMask/metamask-mobile/pull/16250))
- fix: background bridge sending accounts changed events to WC/Remote connections ([#16243](https://github.com/MetaMask/metamask-mobile/pull/16243))
- fix: Add :app: prefix to specify exact Android task to build ([#16213](https://github.com/MetaMask/metamask-mobile/pull/16213))
- fix: fix sorting by name instead of symbol ([#16241](https://github.com/MetaMask/metamask-mobile/pull/16241))
- fix: hide solana accounts in EVM send flow ([#16231](https://github.com/MetaMask/metamask-mobile/pull/16231))
- fix: add percent change to token details ([#16237](https://github.com/MetaMask/metamask-mobile/pull/16237))
- fix: update e2e tag and refactor to typescript ([#16121](https://github.com/MetaMask/metamask-mobile/pull/16121))
- fix: cp-7.49.0 Make `confirmation_redesign` feature flags work as true kill-switch ([#16238](https://github.com/MetaMask/metamask-mobile/pull/16238))
- fix: cp-7.47.0 reset bridge state after swap ([#16236](https://github.com/MetaMask/metamask-mobile/pull/16236))
- fix: add traces for token details ([#16203](https://github.com/MetaMask/metamask-mobile/pull/16203))
- fix: cp-7.49.0 Fix fiat values for non-test networks ([#16194](https://github.com/MetaMask/metamask-mobile/pull/16194))
- fix: Resolve issue of ENS websites not working in WebView on Android ([#16101](https://github.com/MetaMask/metamask-mobile/pull/16101))
- fix: always show total for popular networks in connected accounts view ([#16098](https://github.com/MetaMask/metamask-mobile/pull/16098))
- fix: update testing documentation for environment variables and local test execution ([#16208](https://github.com/MetaMask/metamask-mobile/pull/16208))
- fix: walletconnect issue 15240 chain mismatch #15539 ([#15767](https://github.com/MetaMask/metamask-mobile/pull/15767))
- fix: cp-7.47.0 add T&Cs to swap ([#16193](https://github.com/MetaMask/metamask-mobile/pull/16193))
- fix: make mandatory not interactable ( dismissed ) ([#16111](https://github.com/MetaMask/metamask-mobile/pull/16111))
- fix: regression tests ([#16173](https://github.com/MetaMask/metamask-mobile/pull/16173))
- fix: SelectComponent scrollview does not scroll to item automatically ([#15943](https://github.com/MetaMask/metamask-mobile/pull/15943))
- fix: Revert "feat(deposit): adds logout button to settings page (#16110)" ([#16110](https://github.com/MetaMask/metamask-mobile/pull/16110))
- fix: Do not lowercase account addresses cp-7.47.0 ([#16068](https://github.com/MetaMask/metamask-mobile/pull/16068))
- fix: cp-7.47.0 include gas and gas price in PPOM requests ([#15836](https://github.com/MetaMask/metamask-mobile/pull/15836))
- fix: update account list items design ([#15549](https://github.com/MetaMask/metamask-mobile/pull/15549))
- fix: cp-7.47.0 accounts for scientific notation in amounts ([#16140](https://github.com/MetaMask/metamask-mobile/pull/16140))
- fix: cp-7.47.0 migration order to cherry pick the phishing controller migration in 7.47 ([#16137](https://github.com/MetaMask/metamask-mobile/pull/16137))
- fix: 1.0 hide / show seedphrase ([#16114](https://github.com/MetaMask/metamask-mobile/pull/16114))
- fix: cp-7.47.0 show banner for hardware wallets not supported ([#16094](https://github.com/MetaMask/metamask-mobile/pull/16094))
- fix: cp-7.47.0 not resetting BridgeStatusController when user resets account ([#16030](https://github.com/MetaMask/metamask-mobile/pull/16030))
- fix: `enableMultichainAccounts` flag ([#16134](https://github.com/MetaMask/metamask-mobile/pull/16134))
- fix: cp-7.47.0 improve transaction details date formatting ([#16083](https://github.com/MetaMask/metamask-mobile/pull/16083))
- fix: fix scroll custom import tokens ([#16079](https://github.com/MetaMask/metamask-mobile/pull/16079))
- fix: WebView keyboard UI glitch ([#15961](https://github.com/MetaMask/metamask-mobile/pull/15961))
- fix: fix sentry noice related to undefined currentCurrency property when the app start ([#15977](https://github.com/MetaMask/metamask-mobile/pull/15977))
- fix: use shortened i18n currency format ([#16081](https://github.com/MetaMask/metamask-mobile/pull/16081))
- fix: E2E test for the fix of the issue 15523 ([#15653](https://github.com/MetaMask/metamask-mobile/pull/15653))
- fix: add retries on solana discovery fail cp-7.47.0 ([#16013](https://github.com/MetaMask/metamask-mobile/pull/16013))
- fix: cp-7.47.0 add loader if account balance is not defined ([#16011](https://github.com/MetaMask/metamask-mobile/pull/16011))
- fix: enable solana and eth account creation in edit accounts ([#15595](https://github.com/MetaMask/metamask-mobile/pull/15595))
- fix: Fix staking simulations container ([#16060](https://github.com/MetaMask/metamask-mobile/pull/16060))
- fix: cp-7.47.0 check for valid decimals before parsing in isInsufficientBalance ([#16063](https://github.com/MetaMask/metamask-mobile/pull/16063))
- fix: cp-7.47.0 set destination chain ID when token switch button is clicked ([#16032](https://github.com/MetaMask/metamask-mobile/pull/16032))
- fix: cp-7.47.0 fixing all ledger flow broken in android due to hermes engine bug. ([#16031](https://github.com/MetaMask/metamask-mobile/pull/16031))
- fix: inital solana account creation in dapp connection flow. ([#15796](https://github.com/MetaMask/metamask-mobile/pull/15796))
- fix: Fix e2e feature flags ([#16050](https://github.com/MetaMask/metamask-mobile/pull/16050))
- fix: No selected account or hd keyrings when device is locked during create account flow cp-7.47.0 ([#15991](https://github.com/MetaMask/metamask-mobile/pull/15991))
- fix: Revert "feat: add spam filtering for wallet_sendCalls (#15853)" ([#15853](https://github.com/MetaMask/metamask-mobile/pull/15853))
- fix: Fix testnet gas values and design defects ([#15988](https://github.com/MetaMask/metamask-mobile/pull/15988))
- fix: Account modal switch account option should not be hidden is user enable preference to dismiss smart account upgrade ([#16024](https://github.com/MetaMask/metamask-mobile/pull/16024))
- fix: display chainId as decimal ([#15140](https://github.com/MetaMask/metamask-mobile/pull/15140))
- fix: cp-7.47.0 Fix alignment on Snap UI links and buttons ([#16020](https://github.com/MetaMask/metamask-mobile/pull/16020))
- fix: fix smart contract address call with non valid network client id ([#15987](https://github.com/MetaMask/metamask-mobile/pull/15987))
- fix: cp-7.47.0 Use SVG width/height when available ([#16016](https://github.com/MetaMask/metamask-mobile/pull/16016))
- fix: currentAppVersion & currentMigration in AppMetadataController init ([#15530](https://github.com/MetaMask/metamask-mobile/pull/15530))
- fix: eth_signTypedData_v4 on Multichain API ([#15837](https://github.com/MetaMask/metamask-mobile/pull/15837))
- fix: cp-7.47.0 fix keyring controller remove hardware account permission issue ([#15966](https://github.com/MetaMask/metamask-mobile/pull/15966))
- fix: update op logo ([#15986](https://github.com/MetaMask/metamask-mobile/pull/15986))
- fix: cp-7.47.0 update text color ([#15888](https://github.com/MetaMask/metamask-mobile/pull/15888))
- fix: cp-7.47.0 Prevent unnecessary re-renders when using Snaps forms ([#15976](https://github.com/MetaMask/metamask-mobile/pull/15976))
- fix: Hide simulations on wallet initiated `transfer` ([#15951](https://github.com/MetaMask/metamask-mobile/pull/15951))
- fix: Solana account reveal SRP with multiple imported SRPs cp-7.47.0 ([#15872](https://github.com/MetaMask/metamask-mobile/pull/15872))
- fix: unable to scroll through currency in setting on android devices ([#15939](https://github.com/MetaMask/metamask-mobile/pull/15939))
- fix: cp-7.47.0 fix watchAsset ([#15882](https://github.com/MetaMask/metamask-mobile/pull/15882))
- fix: cp-7.47.0 stuck in submitting during a failed tx, also log errors ([#15904](https://github.com/MetaMask/metamask-mobile/pull/15904))
- fix: cp-7.47.0 copy on IOS ([#15676](https://github.com/MetaMask/metamask-mobile/pull/15676))
- fix: cp-7.47.0 show the warning text educational message on showing SRP & private key ([#15644](https://github.com/MetaMask/metamask-mobile/pull/15644))
- fix: Fallback to regular transaction submit for legacy transactions ([#15881](https://github.com/MetaMask/metamask-mobile/pull/15881))
- fix: cp-7.47.0 bridge controllers bumps ([#15862](https://github.com/MetaMask/metamask-mobile/pull/15862))
- fix: bump accounts-controller to fix reset wallet flow cp-7.47.0 ([#15889](https://github.com/MetaMask/metamask-mobile/pull/15889))
- fix: cp-7.47.0 fix QR account can't be imported and scan QR code without response ([#15793](https://github.com/MetaMask/metamask-mobile/pull/15793))
- fix: Remove use of useAccounts within TabThumbnail (WebView) ([#15429](https://github.com/MetaMask/metamask-mobile/pull/15429))
- fix: Solana account discovery on SRP import cp-7.47.0 ([#15614](https://github.com/MetaMask/metamask-mobile/pull/15614))
- fix: cp-7.47.0 turn on env var for MM_BRIDGE_ENABLED in bitrise.yml ([#15826](https://github.com/MetaMask/metamask-mobile/pull/15826))
- fix: cp-7.47.0 fix display contract address on non evm chains ([#15803](https://github.com/MetaMask/metamask-mobile/pull/15803))
- fix: Remove unnecessary visibility checks for api-spec ([#15823](https://github.com/MetaMask/metamask-mobile/pull/15823))
- fix: Save chain-specific feature flags for each chain, resolve an edge case with accessing swaps feature flags ([#15790](https://github.com/MetaMask/metamask-mobile/pull/15790))
- fix: Move Some Browser View Navigation Params to Component State ([#15428](https://github.com/MetaMask/metamask-mobile/pull/15428))
- fix: cp-7.47.0 don't show currency value unless amount is above zero ([#15798](https://github.com/MetaMask/metamask-mobile/pull/15798))
- fix: Fix transaction type on send flow when recipient is smart account ([#15801](https://github.com/MetaMask/metamask-mobile/pull/15801))
- fix: Fix `checkIfVisible` assertion ([#15347](https://github.com/MetaMask/metamask-mobile/pull/15347))
- fix: cp-7.47.0 [WARNING] discards duplicate accounts on unlock ([#15356](https://github.com/MetaMask/metamask-mobile/pull/15356))
- fix: cp-7.47.0 persist completedOnboarding state value ([#15754](https://github.com/MetaMask/metamask-mobile/pull/15754))
- fix: cp-7.47.0 update critical message about not backing up SRP ([#15771](https://github.com/MetaMask/metamask-mobile/pull/15771))
- fix: disable option to remove Solana account ([#15760](https://github.com/MetaMask/metamask-mobile/pull/15760))
- fix: (cp-7.47.0) allow formatting tokens to be done on either EVM or SOL chain ([#15755](https://github.com/MetaMask/metamask-mobile/pull/15755))
- fix: cp-7.47.0 rm import token footer on non evm ([#15720](https://github.com/MetaMask/metamask-mobile/pull/15720))
- fix: added the pre-release to exclusion for this isTest ([#15759](https://github.com/MetaMask/metamask-mobile/pull/15759))
- fix: Remove ethereum: prefix in account details QR code for non EVM accounts cp-7.47.0 ([#15695](https://github.com/MetaMask/metamask-mobile/pull/15695))
- fix: cp-7.47.0 shorten bridge transaction details date formats ([#15693](https://github.com/MetaMask/metamask-mobile/pull/15693))
- fix: cp-7.47.0 add version awareness to bridge feature flag selector ([#15498](https://github.com/MetaMask/metamask-mobile/pull/15498))
- fix: multichain balance checks in legacy confirmations ([#15632](https://github.com/MetaMask/metamask-mobile/pull/15632))
- fix: Fix updating blockaid validation result in batched confirmation ([#15493](https://github.com/MetaMask/metamask-mobile/pull/15493))
- fix: incorrect initial default network avatars shown in AccountConnect view ([#15526](https://github.com/MetaMask/metamask-mobile/pull/15526))
- fix: cp-7.47.0 Replace commas when inputting numbers in `SnapUIInput` ([#15691](https://github.com/MetaMask/metamask-mobile/pull/15691))
- fix: Update PR max lines limit to ignore test snapshots ([#15686](https://github.com/MetaMask/metamask-mobile/pull/15686))
- fix: cp-7.47.0 stop quote polling when "quote expired" modal is open ([#15602](https://github.com/MetaMask/metamask-mobile/pull/15602))
- fix: cp-7.47.0 bridge input field behaving erratically ([#15524](https://github.com/MetaMask/metamask-mobile/pull/15524))
- fix: cp-7.47.0 reset state to prevent stale quotes on token switch ([#15571](https://github.com/MetaMask/metamask-mobile/pull/15571))
- fix: cp-7.47.0 fix default swap destination token when source is USDC ([#15611](https://github.com/MetaMask/metamask-mobile/pull/15611))
- fix: cp-7.47.0 prevent quote error during bridge destination account selection ([#15594](https://github.com/MetaMask/metamask-mobile/pull/15594))
- fix: Ensure bottom modal height is large enough for tooltips on android ([#15555](https://github.com/MetaMask/metamask-mobile/pull/15555))
- fix: issue 15523: Resolve crash for SVG images from Network which contain symbol &quot; instead of " ([#15544](https://github.com/MetaMask/metamask-mobile/pull/15544))
- fix: cp-7.47.0 fix error when navigating to asset details from bridge/swap ([#15409](https://github.com/MetaMask/metamask-mobile/pull/15409))
- fix: validate network configuration currency before update rates ([#15545](https://github.com/MetaMask/metamask-mobile/pull/15545))
- fix: pass entropySource to default account created cp-7.47.0 ([#15548](https://github.com/MetaMask/metamask-mobile/pull/15548))
- fix: remove failing test for portfolio connect account, was renamed ([#15543](https://github.com/MetaMask/metamask-mobile/pull/15543))
- fix: cp-7.47.0 fix useRef re-render ([#15521](https://github.com/MetaMask/metamask-mobile/pull/15521))
- fix: Fix hook useEIP7702Networks to not check for atomic batch support if env variable MM_SMART_ACCOUNT_UI_ENABLED is not enabled. ([#15537](https://github.com/MetaMask/metamask-mobile/pull/15537))
- fix: update PortfolioHomePage to use WebID selectors and add burger menu interaction ([#15301](https://github.com/MetaMask/metamask-mobile/pull/15301))
- fix: provide snap naming from client cp-7.47.0 ([#15479](https://github.com/MetaMask/metamask-mobile/pull/15479))
- fix: show accounts in AddNewAccount ([#15208](https://github.com/MetaMask/metamask-mobile/pull/15208))
- fix: eth_chainId not matching requested scope chainId on Multichain API ([#15495](https://github.com/MetaMask/metamask-mobile/pull/15495))
- fix: update account label text in permission summary selectors ([#15515](https://github.com/MetaMask/metamask-mobile/pull/15515))
- fix: cp-7.47.0 disable solana as bridge destination if no solana account exists ([#15497](https://github.com/MetaMask/metamask-mobile/pull/15497))
- fix: avoid creating Sentry exception events when notification display fails ([#15398](https://github.com/MetaMask/metamask-mobile/pull/15398))
- fix: do not log missing network state change event subscription error ([#15412](https://github.com/MetaMask/metamask-mobile/pull/15412))
- fix: cp-7.47.0 close actions sheet after clicking on send ([#15449](https://github.com/MetaMask/metamask-mobile/pull/15449))
- fix: cp-7.47.0 improve bridge screen layout and user experience ([#15425](https://github.com/MetaMask/metamask-mobile/pull/15425))
- fix: capture exception with Sentry instead throwing the error ([#15463](https://github.com/MetaMask/metamask-mobile/pull/15463))
- fix: update carousel tests for solana and refactor ([#15431](https://github.com/MetaMask/metamask-mobile/pull/15431))
- fix: cp-7.47.0 Pass optional disabled prop into token details list item ([#15418](https://github.com/MetaMask/metamask-mobile/pull/15418))
- fix: account connect origin ([#13394](https://github.com/MetaMask/metamask-mobile/pull/13394))
- fix: cp-7.47.0 tokens small amount crashing bridge ([#15419](https://github.com/MetaMask/metamask-mobile/pull/15419))
- fix: chain changed event not emitted ([#15400](https://github.com/MetaMask/metamask-mobile/pull/15400))
- fix: restore snap and imported srps when changing password ([#15237](https://github.com/MetaMask/metamask-mobile/pull/15237))
- fix: cp-7.47.0 Asset Detail Nav alignment ([#15417](https://github.com/MetaMask/metamask-mobile/pull/15417))
- fix: Bridge long token values show the right hand side, make it show the left ([#15335](https://github.com/MetaMask/metamask-mobile/pull/15335))
- fix: cp-7.47.0 add MetaMask fee disclaimer text to bridge view ([#15377](https://github.com/MetaMask/metamask-mobile/pull/15377))
- fix: cp-7.47.0 bump bridge controllers and update quote response fields ([#15300](https://github.com/MetaMask/metamask-mobile/pull/15300))
- fix: cp-7.47.0 fix endowment:caip25 error when removing dapp permitted chain ([#15352](https://github.com/MetaMask/metamask-mobile/pull/15352))
- fix: quarantine permissions clean up test ([#15342](https://github.com/MetaMask/metamask-mobile/pull/15342))
- fix: Add back build_ios_simbuild to Bitrise to generate .app prebuilds for Runway bucket ([#15336](https://github.com/MetaMask/metamask-mobile/pull/15336))
- fix: switching to solana address in legacy swaps, redirect them to solana swaps UI ([#15273](https://github.com/MetaMask/metamask-mobile/pull/15273))
- fix: cp-7.46.0 cp-7.47.0 Add dummy file for migration 73 ([#15302](https://github.com/MetaMask/metamask-mobile/pull/15302))
- fix: (cp-7.46.0) network switcher - use additional checks for non-evm networks ([#15283](https://github.com/MetaMask/metamask-mobile/pull/15283))
- fix: Relocate sprout button ([#15196](https://github.com/MetaMask/metamask-mobile/pull/15196))
- fix: reset swap/bridge state after submission ([#15288](https://github.com/MetaMask/metamask-mobile/pull/15288))
- fix: catch when url parse throws ([#15161](https://github.com/MetaMask/metamask-mobile/pull/15161))
- fix: horizontal network picker not appearing in bridge and vertical + horizontal scroll ([#15219](https://github.com/MetaMask/metamask-mobile/pull/15219))
- fix: i18n text for 'Popular Networks' ([#15253](https://github.com/MetaMask/metamask-mobile/pull/15253))
- fix: back up logic to clear vault before reapplying ([#14743](https://github.com/MetaMask/metamask-mobile/pull/14743))
- fix: login message ([#15247](https://github.com/MetaMask/metamask-mobile/pull/15247))
- fix: fix error when no pricePercentageChange found ([#15230](https://github.com/MetaMask/metamask-mobile/pull/15230))
- fix: use AddNewAccount for account creation in SolanaNewFeatureContent ([#15001](https://github.com/MetaMask/metamask-mobile/pull/15001))
- fix: update onboarding copy and links for default privacy settings ([#14971](https://github.com/MetaMask/metamask-mobile/pull/14971))
- fix: only show SRP pill when we have multiple SRPs ([#15217](https://github.com/MetaMask/metamask-mobile/pull/15217))
- fix: yarn lint:fix ([#15149](https://github.com/MetaMask/metamask-mobile/pull/15149))
- fix: don't push up the token selector modal when keyboard is open ([#15197](https://github.com/MetaMask/metamask-mobile/pull/15197))
- fix: display multichain accounts in srp list cp-7.47.0 ([#14724](https://github.com/MetaMask/metamask-mobile/pull/14724))
- fix: Updated useComponentSize to re-render on change ([#15188](https://github.com/MetaMask/metamask-mobile/pull/15188))
- fix: Skeleton loader default value fix ([#15185](https://github.com/MetaMask/metamask-mobile/pull/15185))
- fix: filter non EVM testnets ([#15184](https://github.com/MetaMask/metamask-mobile/pull/15184))
- fix: Remove undefined error (migration63) ([#14225](https://github.com/MetaMask/metamask-mobile/pull/14225))
- fix: Standardize token list item height to improve virtualization ([#15137](https://github.com/MetaMask/metamask-mobile/pull/15137))
- fix: swap button not appearing in solana asset details ([#15145](https://github.com/MetaMask/metamask-mobile/pull/15145))
- fix: cp-7.46.0 Bump @metamask/smart-transactions-controller to 16.3.1 ([#15123](https://github.com/MetaMask/metamask-mobile/pull/15123))
- fix: cp-7.46.0 Mms 1878 bridge input fiat quantity ([#15057](https://github.com/MetaMask/metamask-mobile/pull/15057))
- fix: cp-7.46.0 Temporarily disable send flow via token details on non-evm networks ([#15096](https://github.com/MetaMask/metamask-mobile/pull/15096))
- fix: cp-7.46.0 show bridge button when the mobile feature flag is off and redirect to Portfolio ([#15088](https://github.com/MetaMask/metamask-mobile/pull/15088))
- fix: cp-7.46.0 show "auto" when slippage is undefined ([#15083](https://github.com/MetaMask/metamask-mobile/pull/15083))
- fix: cp-7.46.0 add navigation to activity page before solana tx submission ([#15082](https://github.com/MetaMask/metamask-mobile/pull/15082))
- fix: AccountSelectorList test ([#15085](https://github.com/MetaMask/metamask-mobile/pull/15085))
- fix: cp-7.46.0 De-duplicate key and overlapping item issues in TokenList ([#15055](https://github.com/MetaMask/metamask-mobile/pull/15055))
- fix: Fix iOS build issue on Xcode 16.3 ([#15045](https://github.com/MetaMask/metamask-mobile/pull/15045))
- fix: base-x audit issue ([#15087](https://github.com/MetaMask/metamask-mobile/pull/15087))
- fix: cp-7.46.0 improve token list item re renders ([#15063](https://github.com/MetaMask/metamask-mobile/pull/15063))
- fix: Auto reject terminated Snap dialogs ([#15051](https://github.com/MetaMask/metamask-mobile/pull/15051))
- fix: prevent token details from crashing when decimals are 0 ([#15052](https://github.com/MetaMask/metamask-mobile/pull/15052))
- fix: Do not initialize RemoteFeatureFlagController with state ([#14784](https://github.com/MetaMask/metamask-mobile/pull/14784))
- fix: app crashing on main builds when navigating to bridge cp-7.46.0 ([#15056](https://github.com/MetaMask/metamask-mobile/pull/15056))
- fix: cp-7.46.0 Improve `TokenList` performance with `FlashList` and improved data flow ([#14988](https://github.com/MetaMask/metamask-mobile/pull/14988))
- fix: Confirm font size; use default 16 px ([#14715](https://github.com/MetaMask/metamask-mobile/pull/14715))
- fix: cp-7.46.0 Fix `Approval` component to unnecessary override on confirmation ([#14935](https://github.com/MetaMask/metamask-mobile/pull/14935))
- fix: Removes transaction simulations from send flow confirmation page ([#14994](https://github.com/MetaMask/metamask-mobile/pull/14994))
- fix: Temporarily remove contract interaction feature flag ([#14977](https://github.com/MetaMask/metamask-mobile/pull/14977))
- fix: update header to show network name for multichain accounts ([#14933](https://github.com/MetaMask/metamask-mobile/pull/14933))
- fix: cp-7.25.0 Revert "feat: Auto-failover to Quicknode when Infura is down" ([#14814](https://github.com/MetaMask/metamask-mobile/pull/14814))
- fix: proceed anyways looping when EPD enabled ([#14905](https://github.com/MetaMask/metamask-mobile/pull/14905))
- fix: Broken AssetOverview native tokens ([#14907](https://github.com/MetaMask/metamask-mobile/pull/14907))
- fix: cp-7.46.0 add percent change for asset list v2 ([#14892](https://github.com/MetaMask/metamask-mobile/pull/14892))
- fix: cp-7.46.0 fix solana token list render ([#14898](https://github.com/MetaMask/metamask-mobile/pull/14898))
- fix: Mms 2316 bridge tokens speed cp-7.46.0 ([#14904](https://github.com/MetaMask/metamask-mobile/pull/14904))
- fix: update empty tx view ([#14849](https://github.com/MetaMask/metamask-mobile/pull/14849))
- fix: cp-7.45.0 network form text styling contrast issue ([#14848](https://github.com/MetaMask/metamask-mobile/pull/14848))
- fix: stop pv polling when non evm account is selected ([#14859](https://github.com/MetaMask/metamask-mobile/pull/14859))
- fix: Receive page shows 0x prefix for Solana account ([#14873](https://github.com/MetaMask/metamask-mobile/pull/14873))
- fix: Account List Performance Issues ([#14817](https://github.com/MetaMask/metamask-mobile/pull/14817))
- fix: cp-7.46.0 navigate to activity page before solana originating swap/bridge… ([#14861](https://github.com/MetaMask/metamask-mobile/pull/14861))
- fix: cp-7.45.0 use correct default etherscan link on tx details ([#14847](https://github.com/MetaMask/metamask-mobile/pull/14847))
- test: Fix bridge tests flakiness ([#16480](https://github.com/MetaMask/metamask-mobile/pull/16480))
- fix(ramps): adds error message if user tries to sell zero balance token ([#16417](https://github.com/MetaMask/metamask-mobile/pull/16417))
- fix(ramp): cp-7.46.0 non evm address balance ([#14858](https://github.com/MetaMask/metamask-mobile/pull/14858))
- fix(14025): call keyring cancel sync when closing QR scan modal to resolve pending promise ([#14840](https://github.com/MetaMask/metamask-mobile/pull/14840))
- fix(ramp): cp-7.46.0 limits comparison ([#15183](https://github.com/MetaMask/metamask-mobile/pull/15183))
- fix(bridge): implement dynamic refresh rate in QuoteExpiredModal ([#15157](https://github.com/MetaMask/metamask-mobile/pull/15157))
- fix(ramp): cp-7.46.0 fix custom action by upgrading sdk v2.1.7 ([#15155](https://github.com/MetaMask/metamask-mobile/pull/15155))
- test: fix wdio TOU move upfront, appium test ([#16322](https://github.com/MetaMask/metamask-mobile/pull/16322))
- test: fix token scroll ([#16353](https://github.com/MetaMask/metamask-mobile/pull/16353))
- test: Revert "fix: E2E test for the fix of the issue 15523 (#15653)" ([#15653](https://github.com/MetaMask/metamask-mobile/pull/15653))
- fix(15875): preserve active tab when returning from permission edits ([#16038](https://github.com/MetaMask/metamask-mobile/pull/16038))
- test: Add `e2e` test for `transfer` confirmations ([#15346](https://github.com/MetaMask/metamask-mobile/pull/15346))
- fix(permissions): properly hide Bitcoin network in permissions flow ([#16045](https://github.com/MetaMask/metamask-mobile/pull/16045))
- ci: fix stale bot action ([#15975](https://github.com/MetaMask/metamask-mobile/pull/15975))
- fix(15641): dapp connected accounts is now scrollable on android ([#15758](https://github.com/MetaMask/metamask-mobile/pull/15758))
- test: fix failing assertions for solana e2e ([#15825](https://github.com/MetaMask/metamask-mobile/pull/15825))
- fix(15619): permissions summary page shows only network permissions ([#15623](https://github.com/MetaMask/metamask-mobile/pull/15623))
- fix(ramp): custom actions check ([#15752](https://github.com/MetaMask/metamask-mobile/pull/15752))
- fix (cp-7.47.0): Ensure we pass the correct type when rendering the price overview ([#15711](https://github.com/MetaMask/metamask-mobile/pull/15711))
- fix(snaps): Add fix for missing Snap permission labels ([#15265](https://github.com/MetaMask/metamask-mobile/pull/15265))
- fix(bridge): add auto slippage option and improve slippage selection UI ([#15159](https://github.com/MetaMask/metamask-mobile/pull/15159))

## [7.47.3]

### Fixed
- chore(runway): cherry-pick fix(bridge): fix: cp-7.47.3 prevent crash when viewing Solana asset details ([#16776](https://github.com/MetaMask/metamask-mobile/pull/16776)

## [7.47.2]

### Fixed
- chore(runway): cherry-pick chore: bump pbkdf ([#16629](https://github.com/MetaMask/metamask-mobile/pull/16629))
- chore(runway): cherry-pick fix: cp-7.47.2 migrate caip permission to include sessionProperties value ([#16643](https://github.com/MetaMask/metamask-mobile/pull/16643))
- chore(runway): cherry-pick fix:  account address missmatch with identity ([#16683](https://github.com/MetaMask/metamask-mobile/pull/16683))
- chore(runway): cherry-pick fix: Remove delay for dispatch of INIT_BG_STATE_KEY ([#16703](https://github.com/MetaMask/metamask-mobile/pull/16703))

## [7.47.1]

### Fixed
- fix: ensure inpage provider retries any pending requests sent before BackgroundBridge fully initialized ([#16349](https://github.com/MetaMask/metamask-mobile/pull/16349))

## [7.47.0]

### Added

 - feat(bridge): fetch all tokens for bridge input([#15993](https://github.com/MetaMask/metamask-mobile/pull/15993))
 - feat(bridge): add "hardware wallets not supported" error when attempting Solana swap/bridge ([#15743](https://github.com/MetaMask/metamask-mobile/pull/15743))
 - feat: migrate eth_accounts and permittedChains to CAIP-25 endowment ([#13970](https://github.com/MetaMask/metamask-mobile/pull/13970))
 - feat(identity): rebrand "Profile syncing" to "Backup and sync", adding a dedicated settings menu and more ([#15003](https://github.com/MetaMask/metamask-mobile/pull/15003))
 - feat(bridge): implement quote expiration handling in Bridge feature ([#14872](https://github.com/MetaMask/metamask-mobile/pull/14872))
 - feat(bridge): use dynamic slippage for single-chain Solana swaps ([#14805](https://github.com/MetaMask/metamask-mobile/pull/14805))
 - feat(bridge): enhance bridging with network fee estimation and UI improvements ([#14786](https://github.com/MetaMask/metamask-mobile/pull/14786))
 - feat(ramp): auto-select region ([#14780](https://github.com/MetaMask/metamask-mobile/pull/14780))
 - feat(bridge): add solana chain support and improve bridge state management ([#14713](https://github.com/MetaMask/metamask-mobile/pull/14713))
 - feat(bridge): add error handling and input management for bridge quotes ([#14693](https://github.com/MetaMask/metamask-mobile/pull/14693))
 - feat(multi-srp): enable multi-srp in main and beta ([#14558](https://github.com/MetaMask/metamask-mobile/pull/14558))
 - feat(ramp): Update ramp data flow to fetch cryptos before payment methods ([#14437](https://github.com/MetaMask/metamask-mobile/pull/14437))
 - feat(bridge): add destination account picker ([#14656](https://github.com/MetaMask/metamask-mobile/pull/14656))
 - feat(bridge): add Solana assets to bridge token pickers ([#14365](https://github.com/MetaMask/metamask-mobile/pull/14365))
 - feat: add AppMetadataController controller ([#14513](https://github.com/MetaMask/metamask-mobile/pull/14513))
 - feat(bridge): implement bridge quote fetching ([#14413](https://github.com/MetaMask/metamask-mobile/pull/14413))
 - feat(multi-srp): add e2e tests ([#14583](https://github.com/MetaMask/metamask-mobile/pull/14583))
 - feat(bridge): fetch token metadata for Bridge token pickers if not already available ([#14699](https://github.com/MetaMask/metamask-mobile/pull/14699))
 - feat(bridge): use `BridgeStatusController` for EVM and Solana Bridge transaction submission ([#14708](https://github.com/MetaMask/metamask-mobile/pull/14708))
 - feat(multi-srp): add discover accounts to MultichainWalletSnapClient ([#14727](https://github.com/MetaMask/metamask-mobile/pull/14727))
 - feat: real time dapp scanning BrowserTab ([#14515](https://github.com/MetaMask/metamask-mobile/pull/14515))
 - feat(multi-srp): add new srp pills labels ([#14829](https://github.com/MetaMask/metamask-mobile/pull/14829))
 - feat(earn): add pooled-staking and stablecoin lending remote feature flags ([#14660](https://github.com/MetaMask/metamask-mobile/pull/14660))
 - feat: feat: AccountConnect and AccountApproval use dapp scanning ([#14514](https://github.com/MetaMask/metamask-mobile/pull/14514/))
 - feat(bridge): improve bridge screen layout and user experience ([#15425](https://github.com/MetaMask/metamask-mobile/pull/15425))
 - feat: add migration 082 to reset PhishingController phishingLists [#16067](https://github.com/MetaMask/metamask-mobile/pull/16067)
 - feat:  fetch all tokens for bridge input [#16029](https://github.com/MetaMask/metamask-mobile/pull/16029)
 - feat: add insufficient balance check for Soala swaps [#15509](https://github.com/MetaMask/metamask-mobile/pull/15509)
 - feat: add red styling for insufficient balance on solana swaps [#15501](https://github.com/MetaMask/metamask-mobile/pull/15501)
 - feat: cleaned up Vault Sentry logs [#15458](https://github.com/MetaMask/metamask-mobile/pull/15458)
 - feat: Solana dapp connectivity announcement toast (cherry pick from #15224) [#15339](https://github.com/MetaMask/metamask-mobile/pull/15339)
 - feat: add "hardware wallets not supported" error when attempting Solana [#15743](https://github.com/MetaMask/metamask-mobile/pull/15743)

 ### Fixed

 - fix(bridge): prevent quote polling when "quote expired" modal is open ([#15602](https://github.com/MetaMask/metamask-mobile/issues/15602))
 - fix(bridge): don't show currency value unless amount is above zero ([#15798](https://github.com/MetaMask/metamask-mobile/pull/15798))
 - fix(bridge): fix default swap destination token when source is USDC ([#15611](https://github.com/MetaMask/metamask-mobile/pull/15611))
 - fix(multi-srp): display multichain accounts in SRP list ([#14724](https://github.com/MetaMask/metamask-mobile/pull/14724))
 - fix(confirmations): remove transaction simulations from wallet initiated send flow ([#14994](https://github.com/MetaMask/metamask-mobile/pull/14994))
 - fix(bridge): add auto slippage option and improve slippage selection UI ([#15159](https://github.com/MetaMask/metamask-mobile/pull/15159))
 - fix(bridge): implement dynamic refresh rate in QuoteExpiredModal ([#15157](https://github.com/MetaMask/metamask-mobile/pull/15157))
 - fix(bridge): keyboard not appearing when error banner is displayed ([#14862](https://github.com/MetaMask/metamask-mobile/pull/14862))
 - fix(bridge): fix not switching networks when selecting source token ([#14712](https://github.com/MetaMask/metamask-mobile/pull/14712))
 - fix: update confirmation font sizes ([#14715](https://github.com/MetaMask/metamask-mobile/pull/14715))
 - fix(bridge): fix transaction history for EVM and Solana bridge transactions ([#14759](https://github.com/MetaMask/metamask-mobile/pull/14759))
 - fix(bridge): change networks properly when user switches between source and destination tokens ([#14812](https://github.com/MetaMask/metamask-mobile/pull/14812))
 - fix(bridge): fix(bridge): update quote details card toggle to handle same chain swaps and improve slippage button layout ([#15153](https://github.com/MetaMask/metamask-mobile/pull/15153))
 - fix: No selected account or hd keyrings when device is locked during create account flow [#16122](https://github.com/MetaMask/metamask-mobile/pull/16122)
 - fix: show banner for hardware wallets not supported [#16152](https://github.com/MetaMask/metamask-mobile/pull/16152)
 - fix: include gas and gas price in PPOM requests [#15836](https://github.com/MetaMask/metamask-mobile/pull/15836) [#16155](https://github.com/MetaMask/metamask-mobile/pull/16155)
 - fix: accounts for scientific notation in amounts [#16146](https://github.com/MetaMask/metamask-mobile/pull/16146)
 - fix: migration order to cherry pick the phishing controller migration in 7.47 [#16149](https://github.com/MetaMask/metamask-mobile/pull/16149)
 - fix: not resetting BridgeStatusController when user resets account [#16143](https://github.com/MetaMask/metamask-mobile/pull/16143)
 - fix: add retries on solana discovery fail [#16085](https://github.com/MetaMask/metamask-mobile/pull/16085)
 - fix: fixing all ledger flow broken in android due to hermes engine bug. [#16065](https://github.com/MetaMask/metamask-mobile/pull/16065)
 - fix: Fix alignment on Snap UI links and buttons [#16028](https://github.com/MetaMask/metamask-mobile/pull/16028)
 - fix: Use SVG width/height when available [#16026](https://github.com/MetaMask/metamask-mobile/pull/16026)
 - fix: fix keyring controller remove hardware account permission issue [#15994](https://github.com/MetaMask/metamask-mobile/pull/15994)
 - fix: bridge controllers bumps [#15973](https://github.com/MetaMask/metamask-mobile/pull/15973)
 - fix: update text color [#15985](https://github.com/MetaMask/metamask-mobile/pull/15985)
 - fix: Prevent unnecessary re-renders when using Snaps forms [#15978](https://github.com/MetaMask/metamask-mobile/pull/15978)
 - fix: Solana account reveal SRP with multiple imported SRPs … [#15974](https://github.com/MetaMask/metamask-mobile/pull/15974)
 - fix: unable to scroll through currency in setting on android devices [#15944](https://github.com/MetaMask/metamask-mobile/pull/15944)
 - fix: discards duplicate accounts on unlock [#15806](https://github.com/MetaMask/metamask-mobile/pull/15806)
 - fix: close actions sheet after clicking on send [#15702](https://github.com/MetaMask/metamask-mobile/pull/15702)
 - fix: persist completedOnboarding state value [#15789](https://github.com/MetaMask/metamask-mobile/pull/15789)
 - fix: update critical message about not backing up SRP [#15778](https://github.com/MetaMask/metamask-mobile/pull/15778)
 - fix: () allow formatting tokens to be done on either EVM or SOL chain [#15777](https://github.com/MetaMask/metamask-mobile/pull/15777)
 - fix: added the pre-release to exclusion for this isTest [#15762](https://github.com/MetaMask/metamask-mobile/pull/15762)
 - fix: rm import token footer on non evm [#15768](https://github.com/MetaMask/metamask-mobile/pull/15768)
 - fix: Remove ethereum: prefix in account details QR code for non EVM accounts [#15737](https://github.com/MetaMask/metamask-mobile/pull/15737)
 - fix: shorten bridge transaction details date formats [#15736](https://github.com/MetaMask/metamask-mobile/pull/15736)
 - fix: add version awareness to bridge feature flag selector [#15725](https://github.com/MetaMask/metamask-mobile/pull/15725)
 - fix: Sanitize gas values before transaction updater functions [#15701](https://github.com/MetaMask/metamask-mobile/pull/15701)
 - fix: Replace commas when inputting numbers in `SnapUIInput` [#15694](https://github.com/MetaMask/metamask-mobile/pull/15694)
 - fix: code fence [#15609](https://github.com/MetaMask/metamask-mobile/pull/15609)
 - fix: Bridge long token values show the right hand side, make it show the left [#15517](https://github.com/MetaMask/metamask-mobile/pull/15517)
 - fix: Improve `useSnapAssetDisplay` performance [#15585](https://github.com/MetaMask/metamask-mobile/pull/15585)
 - fix: fix error when navigating to asset details from bridge/swap [#15559](https://github.com/MetaMask/metamask-mobile/pull/15559)
 - fix: pass entropySource to default account created [#15553](https://github.com/MetaMask/metamask-mobile/pull/15553)
 - fix: fix useRef re-render [#15540](https://github.com/MetaMask/metamask-mobile/pull/15540)
 - fix: show accounts in AddNewAccount [#15531](https://github.com/MetaMask/metamask-mobile/pull/15531)
 - fix: provide snap naming from client [#15534](https://github.com/MetaMask/metamask-mobile/pull/15534)
 - fix: horizontal network picker not appearing in bridge and vertical + horizontal scroll [#15503](https://github.com/MetaMask/metamask-mobile/pull/15503)
 - fix: switching to solana address in legacy swaps, redirect them to solana swaps UI [#15505](https://github.com/MetaMask/metamask-mobile/pull/15505)
 - fix: reset swap/bridge state after submission [#15504](https://github.com/MetaMask/metamask-mobile/pull/15504)
 - fix: Pass optional disabled prop into token details list item [#15461](https://github.com/MetaMask/metamask-mobile/pull/15461)
 - fix: improve bridge screen layout and user experience [#15470](https://github.com/MetaMask/metamask-mobile/pull/15470)
 - fix: tokens small amount crashing bridge [#15450](https://github.com/MetaMask/metamask-mobile/pull/15450)
 - fix: Asset Detail Nav alignment [#15427](https://github.com/MetaMask/metamask-mobile/pull/15427)
 - fix: bump bridge controllers and update quote response fields [#15376](https://github.com/MetaMask/metamask-mobile/pull/15376)
 - fix: add MetaMask fee disclaimer text to bridge view [#15380](https://github.com/MetaMask/metamask-mobile/pull/15380)
 - fix: fix endowment:caip25 error when removing dapp permitted chain [#15354](https://github.com/MetaMask/metamask-mobile/pull/15354)
 - fix: Add dummy file for migration 73 [#15315](https://github.com/MetaMask/metamask-mobile/pull/15315)
 - fix: Add safe checksum method in `SendTo` page [#15309](https://github.com/MetaMask/metamask-mobile/pull/15309)
 - fix(bridge): reset state to prevent stale quotes on token switch ([#15571](https://github.com/MetaMask/metamask-mobile/pull/15571))
 - fix: fix watchAsset [#15882](https://github.com/MetaMask/metamask-mobile/pull/15882)
 - fix: Do not lowercase account addresses [#16068](https://github.com/MetaMask/metamask-mobile/pull/16068)
 - fix: add loader if account balance is not defined  [#16011](https://github.com/MetaMask/metamask-mobile/pull/16011)

## [7.46.2]

### Fixed

- fix: Json rpc and invalid transaction type envelope errors ([#15538](https://github.com/MetaMask/metamask-mobile/pull/15538)

## [7.46.1]

### Fixed

- fix: capture exception with Sentry instead throwing the error ([#15469](https://github.com/MetaMask/metamask-mobile/pull/15469))

## [7.46.0]

### Added

- feat(bridge): implement quote expiration handling in Bridge feature ([#14872](https://github.com/MetaMask/metamask-mobile/pull/14872))
- feat(bridge): use dynamic slippage for single-chain Solana swaps ([#14805](https://github.com/MetaMask/metamask-mobile/pull/14805))
- feat(bridge): enhance bridging with network fee estimation and UI improvements ([#14786](https://github.com/MetaMask/metamask-mobile/pull/14786))
- feat(ramp): auto-select region ([#14780](https://github.com/MetaMask/metamask-mobile/pull/14780))
- feat(bridge): add solana chain support and improve bridge state management ([#14713](https://github.com/MetaMask/metamask-mobile/pull/14713))
- feat(bridge): add error handling and input management for bridge quotes ([#14693](https://github.com/MetaMask/metamask-mobile/pull/14693))
- feat(multi-srp): enable multi-srp in main and beta ([#14558](https://github.com/MetaMask/metamask-mobile/pull/14558))
- feat(ramp): Update ramp data flow to fetch cryptos before payment methods ([#14437](https://github.com/MetaMask/metamask-mobile/pull/14437))
- feat(bridge): add destination account picker ([#14656](https://github.com/MetaMask/metamask-mobile/pull/14656))
- feat(bridge): add Solana assets to bridge token pickers ([#14365](https://github.com/MetaMask/metamask-mobile/pull/14365))
- feat: add AppMetadataController controller ([#14513](https://github.com/MetaMask/metamask-mobile/pull/14513))
- feat(bridge): implement bridge quote fetching ([#14413](https://github.com/MetaMask/metamask-mobile/pull/14413))
- feat(multi-srp): add e2e tests ([#14583](https://github.com/MetaMask/metamask-mobile/pull/14583))
- feat(bridge): fetch token metadata for Bridge token pickers if not already available ([#14699](https://github.com/MetaMask/metamask-mobile/pull/14699))
- feat(bridge): use `BridgeStatusController` for EVM and Solana Bridge transaction submission ([#14708](https://github.com/MetaMask/metamask-mobile/pull/14708))
- feat: real time dapp scanning BrowserTab ([#14515](https://github.com/MetaMask/metamask-mobile/pull/14515))
- feat(multi-srp): add new srp pills labels ([#14829](https://github.com/MetaMask/metamask-mobile/pull/14829))
- feat: feat: AccountConnect and AccountApproval use dapp scanning ([#14514](https://github.com/MetaMask/metamask-mobile/pull/14514/))

### Changed

- feat(bridge): Handle Solana vs EVM swap and bridge routing ([#14614](https://github.com/MetaMask/metamask-mobile/pull/14614))
- fix(multi-srp): allow a user to select srp when creating a multichain account ([#14644](https://github.com/MetaMask/metamask-mobile/pull/14644))
- fix(multi-srp): display errors only after all the words are have been entered ([#14607](https://github.com/MetaMask/metamask-mobile/pull/14607))
- feat: update address truncation format from 4 to 5 characters to match extension ([#14744](https://github.com/MetaMask/metamask-mobile/pull/14744))
- fix(multi-srp): display errors only after all the words are have been entered ([#14607](https://github.com/MetaMask/metamask-mobile/pull/14607))
- fix(wallet-ux): increased touchable area for account picker so it is easier to select ([#14762](https://github.com/MetaMask/metamask-mobile/pull/14762))
- fix(multi-srp): display alternative text color when in dark mode([#14718](https://github.com/MetaMask/metamask-mobile/pull/14718))

### Fixed

- fix(bridge): keyboard not appearing when error banner is displayed ([#14862](https://github.com/MetaMask/metamask-mobile/pull/14862))
- fix(bridge): fix not switching networks when selecting source token ([#14712](https://github.com/MetaMask/metamask-mobile/pull/14712))
- fix: updates a padding style specifically for Android devices ([#14725](https://github.com/MetaMask/metamask-mobile/pull/14725))
- fix(bridge): enhance UI/UX with improved input handling and layout adjustments ([#14781](https://github.com/MetaMask/metamask-mobile/pull/14781))
- fix(swaps): set default slippage when source or destination token is not stablecoin ([#14730](https://github.com/MetaMask/metamask-mobile/pull/14730))
- fix(bridge): fix transaction history for EVM and Solana bridge transactions ([#14759](https://github.com/MetaMask/metamask-mobile/pull/14759))
- fix(bridge): change networks properly when user switches between source and destination tokens ([#14812](https://github.com/MetaMask/metamask-mobile/pull/14812))
- fix(bridge): fix(bridge): update quote details card toggle to handle same chain swaps and improve slippage button layout ([#15153](https://github.com/MetaMask/metamask-mobile/pull/15153))
- fix(confirmations): fix the send crash when user puts unexpected address into recipient input([#15308](https://github.com/MetaMask/metamask-mobile/pull/15308))

## [7.45.2]

### Fixed

- fix: 15108 create a wrapper for toChecksumAddress to prevent app crash ([#15202](https://github.com/MetaMask/metamask-mobile/pull/15202))
- chore(runway): cherry-pick fix: base-x audit issue ([#15216](https://github.com/MetaMask/metamask-mobile/pull/15216))

## [7.45.1]

### Fixed
- fix: update patch to use old AccountTrackerController data structures ([dfc076c](https://github.com/MetaMask/metamask-mobile/commit/dfc076cee12aab974720b2dd1e8a145b3fafd484))

## [7.45.0]

### Changed

- fix(multi-srp): display errors only after all the words are have been entered ([#14607](https://github.com/MetaMask/metamask-mobile/pull/14607))
- fix(multi-srp): display alternative text color when in dark mode([#14718](https://github.com/MetaMask/metamask-mobile/pull/14718))

### Added

- feat(4213-2) update network icons ([#14069](https://github.com/MetaMask/metamask-mobile/pull/14069))
- feat(ramp): add backpress handler to expanded quotes view ([#14210](https://github.com/MetaMask/metamask-mobile/pull/14210))
- feat(ramp): paymentMethods refactor for sdk evolution ([#13464](https://github.com/MetaMask/metamask-mobile/pull/13464))
- feat(ramp): erc20 gas and balance checks for off-ramp ([#12526](https://github.com/MetaMask/metamask-mobile/pull/12526))
- feat(4213-3): network badge positioning ([#14071](https://github.com/MetaMask/metamask-mobile/pull/14071))
- feat(4213-1): rounded square network icons ([#14065](https://github.com/MetaMask/metamask-mobile/pull/14065))
- feat: new cicd integration changelog-check ([#14011](https://github.com/MetaMask/metamask-mobile/pull/14011))
- feat: 14467 expo ios simulator ([#14569](https://github.com/MetaMask/metamask-mobile/pull/14569))
- feat: Auto-failover to Quicknode when Infura is down ([#14139](https://github.com/MetaMask/metamask-mobile/pull/14139))
- feat: bridge solana bridge button ([#14364](https://github.com/MetaMask/metamask-mobile/pull/14364))
- feat: multi srp reveal seed ([#13825](https://github.com/MetaMask/metamask-mobile/pull/13825))
- feat: add account syncing ([#14291](https://github.com/MetaMask/metamask-mobile/pull/14291))
- feat: Add support for native asset token images on custom networks ([#14491](https://github.com/MetaMask/metamask-mobile/pull/14491))
- feat: feature flag to disable epd ([#14407](https://github.com/MetaMask/metamask-mobile/pull/14407))
- feat: api request logging ([#14083](https://github.com/MetaMask/metamask-mobile/pull/14083))
- feat: bridge top tokens ([#14258](https://github.com/MetaMask/metamask-mobile/pull/14258))
- feat: add `MegaETH Testnet` as default network ([#14241](https://github.com/MetaMask/metamask-mobile/pull/14241))
- feat: add new `completedOnboarding` onboarding state property ([#14370](https://github.com/MetaMask/metamask-mobile/pull/14370))
- feat: Init asset details balance, remove PV flag ([#14439](https://github.com/MetaMask/metamask-mobile/pull/14439))
- feat: util file for phishing detection ([#14232](https://github.com/MetaMask/metamask-mobile/pull/14232))
- feat: upgrade `@testing-library/react-native` to `13.2.0` ([#14450](https://github.com/MetaMask/metamask-mobile/pull/14450))
- feat: add metrics for Alert System ([#14246](https://github.com/MetaMask/metamask-mobile/pull/14246))
- feat: Updated design-tokens package to 7.0 ([#14395](https://github.com/MetaMask/metamask-mobile/pull/14395))
- feat: bump `@metamask/notification-services-controller` to `^5.0.1` ([#14296](https://github.com/MetaMask/metamask-mobile/pull/14296))
- feat: added mmpoly and mmsans font files ([#14394](https://github.com/MetaMask/metamask-mobile/pull/14394))
- feat: Snaps UI text styling inheritance ([#14355](https://github.com/MetaMask/metamask-mobile/pull/14355))
- feat: solana opt-in modal ([#14298](https://github.com/MetaMask/metamask-mobile/pull/14298))
- feat: add quote details card component to Bridge UI ([#14264](https://github.com/MetaMask/metamask-mobile/pull/14264))
- feat: add accounts to different srps ([#13852](https://github.com/MetaMask/metamask-mobile/pull/13852))
- feat: Support input types on `SnapUIInput` ([#14312](https://github.com/MetaMask/metamask-mobile/pull/14312))
- feat: multichain trx history ([#13922](https://github.com/MetaMask/metamask-mobile/pull/13922))
- feat: escape / sanitize signTypedData update ([#14280](https://github.com/MetaMask/metamask-mobile/pull/14280))
- feat: add phishing tracking events to PhishingModal component ([#14254](https://github.com/MetaMask/metamask-mobile/pull/14254))
- feat: upgrade to brand evolution colors ([#14218](https://github.com/MetaMask/metamask-mobile/pull/14218))

### Changed

- fix(multi-srp): display errors only after all the words are have been entered ([#14607](https://github.com/MetaMask/metamask-mobile/pull/14607))
- fix(multi-srp): display alternative text color when in dark mode([#14718](https://github.com/MetaMask/metamask-mobile/pull/14718))

### Fixed

- fix(swaps): set default slippage when source or destination token is not stablecoin ([#14730](https://github.com/MetaMask/metamask-mobile/pull/14730))
- fix: cp-7.45.0 fix block explorer link for default networks on trx detail modal. ([#14498](https://github.com/MetaMask/metamask-mobile/pull/14498))
- fix(14255): invalid url on account list ([#14259](https://github.com/MetaMask/metamask-mobile/pull/14259))
- fix(snaps): Update snap footer buttons ([#13953](https://github.com/MetaMask/metamask-mobile/pull/13953))
- fix(14305): removed background color for header in QR code screen ([#14411](https://github.com/MetaMask/metamask-mobile/pull/14411))
- fix: deeplinks when non evm network is selected ([#14521](https://github.com/MetaMask/metamask-mobile/pull/14521))
- fix: account syncing flaky E2E tests ([#14557](https://github.com/MetaMask/metamask-mobile/pull/14557))
- fix: show multisrp banner ([#14564](https://github.com/MetaMask/metamask-mobile/pull/14564))
- fix: Crowdin Action ([#14562](https://github.com/MetaMask/metamask-mobile/pull/14562))
- fix: 10371 hide biometrics button on manual lock ([#14396](https://github.com/MetaMask/metamask-mobile/pull/14396))
- fix: temporarily disable identity E2E ([#14570](https://github.com/MetaMask/metamask-mobile/pull/14570))
- fix: cp-7.44.0 STAKE-1005 refresh staking data when staking txs are confirmed ([#14520](https://github.com/MetaMask/metamask-mobile/pull/14520))
- fix: SDK Connection when multichain account is selected ([#14494](https://github.com/MetaMask/metamask-mobile/pull/14494))
- fix: activity reloads every minute ([#14465](https://github.com/MetaMask/metamask-mobile/pull/14465))
- fix: prevent text overlap in notification opt-in modal ([#14481](https://github.com/MetaMask/metamask-mobile/pull/14481))
- fix: cp-7.44.0 Update traits when tracked settings change 2/2 ([#14088](https://github.com/MetaMask/metamask-mobile/pull/14088))
- fix: cp-7.44.0 Add notification when redesigned transaction confirmation submitted and finalized ([#14495](https://github.com/MetaMask/metamask-mobile/pull/14495))
- fix: cp-7.44.0 Fix header styling for redesigned staking confirmations ([#14472](https://github.com/MetaMask/metamask-mobile/pull/14472))
- fix: update `ConfirmAlertModal` copy blockaid ([#14206](https://github.com/MetaMask/metamask-mobile/pull/14206))
- fix: code fence name - show only in Beta ([#14490](https://github.com/MetaMask/metamask-mobile/pull/14490))
- fix: Prevent re-renders of Field component in Snaps UI [cp-7.44.0] ([#14475](https://github.com/MetaMask/metamask-mobile/pull/14475))
- fix: hide show private key in non-evm accounts ([#14466](https://github.com/MetaMask/metamask-mobile/pull/14466))
- fix: fix typo in network message ([#14434](https://github.com/MetaMask/metamask-mobile/pull/14434))
- fix: create Solana account in beta builds ([#14460](https://github.com/MetaMask/metamask-mobile/pull/14460))
- fix: activity showing same transactions ([#14449](https://github.com/MetaMask/metamask-mobile/pull/14449))
- fix: Prevent Snap footer buttons from being pushed out of the modal ([#14430](https://github.com/MetaMask/metamask-mobile/pull/14430))
- fix: Disable auto correct on Snaps UI inputs [cp-7.44.0] ([#14433](https://github.com/MetaMask/metamask-mobile/pull/14433))
- fix: 3273 keyboard blocks send flow (Solana) ([#14403](https://github.com/MetaMask/metamask-mobile/pull/14403))
- fix: fix dark mode for trx history network selector ([#14416](https://github.com/MetaMask/metamask-mobile/pull/14416))
- fix: #3931 Stop loading when enabling biometrics from settings ([#14412](https://github.com/MetaMask/metamask-mobile/pull/14412))
- fix: Remove bitcoin from beta release ([#14406](https://github.com/MetaMask/metamask-mobile/pull/14406))
- fix: cp-7.44.0 Add new feature flag for staking confirmations ([#14401](https://github.com/MetaMask/metamask-mobile/pull/14401))
- fix: E2E phishing test on android ([#14402](https://github.com/MetaMask/metamask-mobile/pull/14402))
- fix: import button ([#14398](https://github.com/MetaMask/metamask-mobile/pull/14398))
- fix: #13410: Don't switch networks when 'Close' button is tapped in Add Network flow ([#14297](https://github.com/MetaMask/metamask-mobile/pull/14297))
- fix: clear error if the srp is cleared manually. ([#14327](https://github.com/MetaMask/metamask-mobile/pull/14327))
- fix: small update for event consistency ([#14357](https://github.com/MetaMask/metamask-mobile/pull/14357))
- fix: Hide account list selector balance for non evm accounts ([#14379](https://github.com/MetaMask/metamask-mobile/pull/14379))
- fix: Dont send empty set "Token Added" event to Mixpanel ([#14303](https://github.com/MetaMask/metamask-mobile/pull/14303))
- fix: Resolve a couple of Snaps UI dark mode issues ([#14353](https://github.com/MetaMask/metamask-mobile/pull/14353))
- fix: anonymous props that's not moved to sensitive props ([#12931](https://github.com/MetaMask/metamask-mobile/pull/12931))
- fix: notification switch loading flicker ([#14331](https://github.com/MetaMask/metamask-mobile/pull/14331))
- fix: Relocate confirmations code to `legacy` folder ([#14313](https://github.com/MetaMask/metamask-mobile/pull/14313))
- fix: ledger singing on re-designed signature pages ([#14266](https://github.com/MetaMask/metamask-mobile/pull/14266))
- fix: adds translations for a Swap tx in the Multichain activity view ([#14314](https://github.com/MetaMask/metamask-mobile/pull/14314))
- fix: Fix missing invalid password for login #13558 ([#14308](https://github.com/MetaMask/metamask-mobile/pull/14308))
- fix: Remove `Transaction Finalized` event tied to STX ([#14293](https://github.com/MetaMask/metamask-mobile/pull/14293))
- fix: yml formatting causing error ([#14277](https://github.com/MetaMask/metamask-mobile/pull/14277))
- fix: reduce tests worker for only performance tests ([#14051](https://github.com/MetaMask/metamask-mobile/pull/14051))
- fix: scroll for the confirmation screen ([#14269](https://github.com/MetaMask/metamask-mobile/pull/14269))
- fix: STAKE-964: bumped @metamask/earn-controller dependency to resolve pooled-staking geo-block for fresh installs ([#14257](https://github.com/MetaMask/metamask-mobile/pull/14257))
- fix: updates a padding style specifically for Android devices ([#14725](https://github.com/MetaMask/metamask-mobile/pull/14725))
- fix(swaps): set default slippage when source or destination token is not stablecoin ([#14730](https://github.com/MetaMask/metamask-mobile/pull/14730))

## [7.44.0]

### Added

- feat(ramp): add backpress handler to expanded quotes view ([#14210](https://github.com/MetaMask/metamask-mobile/pull/14210))
- feat(4213-3): network badge positioning ([#14071](https://github.com/MetaMask/metamask-mobile/pull/14071))
- feat(4213-1): rounded square network icons ([#14065](https://github.com/MetaMask/metamask-mobile/pull/14065))
- feat(4213-2) update network icons ([#14069](https://github.com/MetaMask/metamask-mobile/pull/14069))
- feat(ramp): add non evm balance ([#13948](https://github.com/MetaMask/metamask-mobile/pull/13948))
- feat: add quote info modal component ([#14263](https://github.com/MetaMask/metamask-mobile/pull/14263))
- feat: SPL TokenList v2 ([#14126](https://github.com/MetaMask/metamask-mobile/pull/14126))
- feat: Bridge dest token ([#14135](https://github.com/MetaMask/metamask-mobile/pull/14135))
- feat: Adding BSC to STX Supported Chains Array (prod) ([#14230](https://github.com/MetaMask/metamask-mobile/pull/14230))
- feat: add wallet_revokePermissions rpc call ([#14091](https://github.com/MetaMask/metamask-mobile/pull/14091))
- feat: Add `getPreferences` hook ([#14062](https://github.com/MetaMask/metamask-mobile/pull/14062))
- feat: Enforce 3-minute idle time for BrowserTabs before unmounting them ([#14175](https://github.com/MetaMask/metamask-mobile/pull/14175))
- feat: Add Linea to Smart Transaction supported chains ([#14018](https://github.com/MetaMask/metamask-mobile/pull/14018))
- feat: import srp ([#13768](https://github.com/MetaMask/metamask-mobile/pull/13768))
- feat: add inline alert (origin mismatch) to SIWE ([#13773](https://github.com/MetaMask/metamask-mobile/pull/13773))
- feat: Add BSC to Smart Transaction supported chains ([#13964](https://github.com/MetaMask/metamask-mobile/pull/13964))
- feat: STAKE-902: build lending empty state component ([#14107](https://github.com/MetaMask/metamask-mobile/pull/14107))
- feat: use new identity hooks ([#14081](https://github.com/MetaMask/metamask-mobile/pull/14081))
- feat: add bridge slippage modal component using segmented control ([#14070](https://github.com/MetaMask/metamask-mobile/pull/14070))
- feat: add carousel component ([#13010](https://github.com/MetaMask/metamask-mobile/pull/13010))
- feat: STAKE-958 - added migration 070 to remove unused staking state ([#14089](https://github.com/MetaMask/metamask-mobile/pull/14089))
- feat: Implement claim rewards confirmation ([#14049](https://github.com/MetaMask/metamask-mobile/pull/14049))
- feat: Implement Segment sampling for expected errors ([#13874](https://github.com/MetaMask/metamask-mobile/pull/13874))
- feat: Rename `transactionMetrics` to `confirmationMetrics` ([#14080](https://github.com/MetaMask/metamask-mobile/pull/14080))
- feat: Add `TransactionController` metric handlers ([#14020](https://github.com/MetaMask/metamask-mobile/pull/14020))
- feat: e2e gate ([#13696](https://github.com/MetaMask/metamask-mobile/pull/13696))
- feat: add segmented control component ([#14066](https://github.com/MetaMask/metamask-mobile/pull/14066))
- feat: Implement MaxBrowserTabModal at 5 browser tabs ([#14033](https://github.com/MetaMask/metamask-mobile/pull/14033))
- feat: add button toggle component ([#14064](https://github.com/MetaMask/metamask-mobile/pull/14064))
- feat: bridge source token selector ([#13915](https://github.com/MetaMask/metamask-mobile/pull/13915))
- feat: add new identity hooks ([#14045](https://github.com/MetaMask/metamask-mobile/pull/14045))
- feat: bridge tx submission ([#13577](https://github.com/MetaMask/metamask-mobile/pull/13577))
- feat: integrate blockaid alert into the Alert System ([#13744](https://github.com/MetaMask/metamask-mobile/pull/13744))

### Fixed

- fix: reduce tests worker for only performance tests ([#14051](https://github.com/MetaMask/metamask-mobile/pull/14051))
- fix: scroll for the confirmation screen ([#14269](https://github.com/MetaMask/metamask-mobile/pull/14269))
- fix: STAKE-964: bumped @metamask/earn-controller dependency to resolve pooled-staking geo-block for fresh installs ([#14257](https://github.com/MetaMask/metamask-mobile/pull/14257))
- fix(snaps): Update snap footer buttons ([#13953](https://github.com/MetaMask/metamask-mobile/pull/13953))
- fix: default open links turn true with attaching the protocol per intent filter ([#14222](https://github.com/MetaMask/metamask-mobile/pull/14222))
- fix: waitAndTap on ad carousel banner ([#14198](https://github.com/MetaMask/metamask-mobile/pull/14198))
- fix: bump `@metamask/keyring-controller` to `^19.2.2` ([#14229](https://github.com/MetaMask/metamask-mobile/pull/14229))
- fix: return the same track event reference ([#14205](https://github.com/MetaMask/metamask-mobile/pull/14205))
- fix: Fix mobile redesigned transaction metrics ([#14219](https://github.com/MetaMask/metamask-mobile/pull/14219))
- fix: Display correct snap name when connecting ([#14204](https://github.com/MetaMask/metamask-mobile/pull/14204))
- fix: Add staking claim event location ([#14203](https://github.com/MetaMask/metamask-mobile/pull/14203))
- fix: ramps: change token to tap and confirm ([#14197](https://github.com/MetaMask/metamask-mobile/pull/14197))
- fix: Fix a number of rendering problems with `AvatarFavicon` ([#14191](https://github.com/MetaMask/metamask-mobile/pull/14191))
- fix: Disable Snaps APIs when using WalletConnect or SDK ([#14187](https://github.com/MetaMask/metamask-mobile/pull/14187))
- fix: yarn setup bitrise ([#14174](https://github.com/MetaMask/metamask-mobile/pull/14174))
- fix: Address final design adjustments for redesigned confirmations ([#14113](https://github.com/MetaMask/metamask-mobile/pull/14113))
- fix: Add support for swipe navigation on android for staking confirma… ([#14125](https://github.com/MetaMask/metamask-mobile/pull/14125))
- fix: Snap account actions ([#14013](https://github.com/MetaMask/metamask-mobile/pull/14013))
- fix: toggle to display the correct balance ([#13916](https://github.com/MetaMask/metamask-mobile/pull/13916))
- fix: Xcode 16 bitcode upload issue ([#14124](https://github.com/MetaMask/metamask-mobile/pull/14124))
- fix: change function in `interfaceController.ts` to a memorised function to imporve performance ([#14090](https://github.com/MetaMask/metamask-mobile/pull/14090))
- fix: Not report invalid URL errors to sentry ([#14115](https://github.com/MetaMask/metamask-mobile/pull/14115))
- fix: Loading state bug ([#14096](https://github.com/MetaMask/metamask-mobile/pull/14096))
- fix: android BottomSheet missing padding bottom ([#13993](https://github.com/MetaMask/metamask-mobile/pull/13993))
- fix: prevent unintentional remote feature flag override ([#14086](https://github.com/MetaMask/metamask-mobile/pull/14086))
- fix: when cancelling signature by swiping modal out it should not navigate back ([#14085](https://github.com/MetaMask/metamask-mobile/pull/14085))
- fix: fix cannot read length property ([#14046](https://github.com/MetaMask/metamask-mobile/pull/14046))
- fix: account name / label overflow on re-designed confirmation pages ([#14044](https://github.com/MetaMask/metamask-mobile/pull/14044))
- fix: moved xcode 16 as default and applied xcode 15 only to testflight builds ([#14032](https://github.com/MetaMask/metamask-mobile/pull/14032))
- fix: inherit icon size from text component parent ([#14024](https://github.com/MetaMask/metamask-mobile/pull/14024))
- fix: animation added for loading state on SnapUILink button ([#13973](https://github.com/MetaMask/metamask-mobile/pull/13973))
- fix: Revert "chore: upgrade Xcode 16 on bitrise.yml" ([#14012](https://github.com/MetaMask/metamask-mobile/pull/14012))
- fix(bridge): hide staked native assets from token selectors ([#14457](https://github.com/MetaMask/metamask-mobile/pull/14457))

## [7.43.0]

### Added

- feat(ramp): estimate gasLimit for ERC20 transfers (sell feature) ([#12467](https://github.com/MetaMask/metamask-mobile/pull/12467))
- feat(snaps): Add Snap UI Skeleton component integration and mapping ([#13966](https://github.com/MetaMask/metamask-mobile/pull/13966))
- feat(snaps): Add icon next to SnapUILink ([#13878](https://github.com/MetaMask/metamask-mobile/pull/13878))
- feat(snaps): Add Snap UI Spinner component ([#13832](https://github.com/MetaMask/metamask-mobile/pull/13832))
- feat(ramp): payment method selector UI update ([#13722](https://github.com/MetaMask/metamask-mobile/pull/13722))
- feat(snaps): Add support for full border radius for SnapUIImage ([#13816](https://github.com/MetaMask/metamask-mobile/pull/13816))
- feat(ramp): enable non-evm support for Ramp, buy only ([#13718](https://github.com/MetaMask/metamask-mobile/pull/13718))
- feat: Add confirmation UI metrics infra and some redesigned staking deposit events ([#13919](https://github.com/MetaMask/metamask-mobile/pull/13919))
- feat: Add gas included swaps ([#13972](https://github.com/MetaMask/metamask-mobile/pull/13972))
- feat: Add Base to Smart Transaction supported chains ([#13920](https://github.com/MetaMask/metamask-mobile/pull/13920))
- feat: Add token list item pressed event ([#13808](https://github.com/MetaMask/metamask-mobile/pull/13808))
- feat: STAKE-934 update staking hooks to consume earn controller selectors ([#13939](https://github.com/MetaMask/metamask-mobile/pull/13939))
- feat: adding skeleton component ([#13780](https://github.com/MetaMask/metamask-mobile/pull/13780))
- feat: Implement unstaking confirmation ([#13921](https://github.com/MetaMask/metamask-mobile/pull/13921))
- feat: revisit currencies list ([#13879](https://github.com/MetaMask/metamask-mobile/pull/13879))
- feat: bridge input screen ([#13847](https://github.com/MetaMask/metamask-mobile/pull/13847))
- feat: Implement tooltip component on mobile ([#13860](https://github.com/MetaMask/metamask-mobile/pull/13860))
- feat: support DAI while it's being deprecated ([#13666](https://github.com/MetaMask/metamask-mobile/pull/13666))
- feat: Implement redesigned staking withdrawals component ([#13826](https://github.com/MetaMask/metamask-mobile/pull/13826))
- feat: bump profile-sync-controller and migrate to the controller init pattern ([#13859](https://github.com/MetaMask/metamask-mobile/pull/13859))
- feat: Multi chain send flow ([#13854](https://github.com/MetaMask/metamask-mobile/pull/13854))
- feat: STAKE-934: added earn-controller pooled staking selectors ([#13875](https://github.com/MetaMask/metamask-mobile/pull/13875))
- feat: STAKE-934 add earn controller to engine ([#13778](https://github.com/MetaMask/metamask-mobile/pull/13778))
- feat: bump @metamask/notification-services-controller to 2.0.0 ([#13857](https://github.com/MetaMask/metamask-mobile/pull/13857))
- feat: add bridge controllers to Engine ([#13750](https://github.com/MetaMask/metamask-mobile/pull/13750))
- feat: add InlineAlert component ([#13709](https://github.com/MetaMask/metamask-mobile/pull/13709))
- feat: add MultipleAlertModal component ([#13683](https://github.com/MetaMask/metamask-mobile/pull/13683))
- feat: Add Snaps UI `Selector` component ([#13747](https://github.com/MetaMask/metamask-mobile/pull/13747))
- feat: added **/**mocks**/** to sonar.coverage.exclusions ([#13787](https://github.com/MetaMask/metamask-mobile/pull/13787))
- feat: add `GeneralAlertBanner` component ([#13627](https://github.com/MetaMask/metamask-mobile/pull/13627))

### Fixed

- fix(close bug report action): target branch name has been renamed stable ([#13755](https://github.com/MetaMask/metamask-mobile/pull/13755))
- fix(sentry sampling): reduce by 25% our sentry trace sample rate to avoid exceeding our quota ([#13745](https://github.com/MetaMask/metamask-mobile/pull/13745))
- fix(deps): unpin ethereumjs-abi@0.6,x ethereumjs-util@6.x ([#11972](https://github.com/MetaMask/metamask-mobile/pull/11972))
- fix: Uppercase currency code ([#13967](https://github.com/MetaMask/metamask-mobile/pull/13967))
- fix: Max balance for dApp erc20 approval ([#13881](https://github.com/MetaMask/metamask-mobile/pull/13881))
- fix: fix network filter on switch network from dapp ([#13987](https://github.com/MetaMask/metamask-mobile/pull/13987))
- fix: Move the SnapExecutionService render up in the stack ([#13998](https://github.com/MetaMask/metamask-mobile/pull/13998))
- fix: Manage order for app services initialization ([#13912](https://github.com/MetaMask/metamask-mobile/pull/13912))
- fix: use correct updating text when toggling notifications ([#13943](https://github.com/MetaMask/metamask-mobile/pull/13943))
- fix: cp-7.42.0 fix history transactions loading ([#13959](https://github.com/MetaMask/metamask-mobile/pull/13959))
- fix: error when asset chain is not available in account controller state ([#13951](https://github.com/MetaMask/metamask-mobile/pull/13951))
- fix: margin incrementally applied to icon when bottom sheet opened ([#13946](https://github.com/MetaMask/metamask-mobile/pull/13946))
- fix: STX swap failures when needing to approve erc20 ([#13653](https://github.com/MetaMask/metamask-mobile/pull/13653))
- fix: cp-7.42.0 Move AssetsPollingProvider down a level to persist tab label ([#13962](https://github.com/MetaMask/metamask-mobile/pull/13962))
- fix: MMASSETS-626-new-rpc-no-confirmation ([#13883](https://github.com/MetaMask/metamask-mobile/pull/13883))
- fix: Use proper implementation for `getUnlockPromise` ([#13947](https://github.com/MetaMask/metamask-mobile/pull/13947))
- fix: Migration of `TransactionController` to modularised controller init ([#13817](https://github.com/MetaMask/metamask-mobile/pull/13817))
- fix: cp-7.42.0`Tokens` screen performance degradation ([#13907](https://github.com/MetaMask/metamask-mobile/pull/13907))
- fix: Confirm ScrollView and readd drag down and backdrop click to close ([#13913](https://github.com/MetaMask/metamask-mobile/pull/13913))
- fix: Persist scrypt derived storage keys to Keychain/Keystore on iOS/Android ([#13899](https://github.com/MetaMask/metamask-mobile/pull/13899))
- fix: cp-7.42.0 enable notifications UI ([#13877](https://github.com/MetaMask/metamask-mobile/pull/13877))
- fix: main balance formatting ([#13818](https://github.com/MetaMask/metamask-mobile/pull/13818))
- fix: cp-7.42.0 Display account label in re-designs confirmation page account info section ([#13853](https://github.com/MetaMask/metamask-mobile/pull/13853))
- fix: add autoscroll in RPC URL form when virtual keyboard blocks content ([#13831](https://github.com/MetaMask/metamask-mobile/pull/13831))
- fix: Missing POL percentage trend ([#13812](https://github.com/MetaMask/metamask-mobile/pull/13812))
- fix: cp-7.42.0 Disable signature re-designs for ledger account ([#13858](https://github.com/MetaMask/metamask-mobile/pull/13858))
- fix: prevent network selector modal from going behind IOS keyboard ([#13810](https://github.com/MetaMask/metamask-mobile/pull/13810))
- fix: Permit Simulation vertical overflow, title padding, and collapsed message alignment ([#13830](https://github.com/MetaMask/metamask-mobile/pull/13830))
- fix: Deal with a couple of crashes when rendering Snaps UI ([#13828](https://github.com/MetaMask/metamask-mobile/pull/13828))
- fix: Multichain balances ([#13742](https://github.com/MetaMask/metamask-mobile/pull/13742))
- fix: tsdoc multi rpc for non evm networks ([#13688](https://github.com/MetaMask/metamask-mobile/pull/13688))
- fix: Improve Snaps UI spacing rules ([#13797](https://github.com/MetaMask/metamask-mobile/pull/13797))
- fix: cp-7.42.0 improve performance of notifications loading when opening the app ([#13803](https://github.com/MetaMask/metamask-mobile/pull/13803))
- fix: Redesign Confirmation bold font weight text ([#13706](https://github.com/MetaMask/metamask-mobile/pull/13706))
- fix: receive network name in receive asset screen ([#13746](https://github.com/MetaMask/metamask-mobile/pull/13746))
- fix: fix setup files ([#13799](https://github.com/MetaMask/metamask-mobile/pull/13799))
- fix: fix balance display in account info signature request ([#13740](https://github.com/MetaMask/metamask-mobile/pull/13740))
- fix: Remove `transactionMetrics` from persisted storage ([#13793](https://github.com/MetaMask/metamask-mobile/pull/13793))
- fix: cp-7.42.0 push notification settings bugs ([#13772](https://github.com/MetaMask/metamask-mobile/pull/13772))
- fix: bitrise missing signature elements following BottomModal → BottomSheet refactor ([#13783](https://github.com/MetaMask/metamask-mobile/pull/13783))
- fix: permit simulation overflow ([#13769](https://github.com/MetaMask/metamask-mobile/pull/13769))
- fix: Improve redesigned staking deposit confirmation navigation ([#13743](https://github.com/MetaMask/metamask-mobile/pull/13743))
- fix: fixes ramp quote selection test ([#13756](https://github.com/MetaMask/metamask-mobile/pull/13756))

## [7.42.1]

### Fixed

- fix: Manage order for app services initialization ([#13912](https://github.com/MetaMask/metamask-mobile/pull/13912))
- fix: #9487 Remove false vault back up failure log ([#14038](https://github.com/MetaMask/metamask-mobile/pull/14038))

## [7.42.0]

### Added

- feat(snaps): Add Snap UI Banner component ([#13735](https://github.com/MetaMask/metamask-mobile/pull/13735))
- feat(ramps): adds some properties to ramp quote analytics events ([#13754](https://github.com/MetaMask/metamask-mobile/pull/13754))
- feat(ramps): adds most reliable tag to ramp quotes ([#13495](https://github.com/MetaMask/metamask-mobile/pull/13495))
- feat: Make Snaps UI footers properly sticky ([#13736](https://github.com/MetaMask/metamask-mobile/pull/13736))
- feat: Add token hero rounded amount tooltip ([#13685](https://github.com/MetaMask/metamask-mobile/pull/13685))
- feat: make Snap account creation flow async + displayAccountNameSuggestion flag ([#13703](https://github.com/MetaMask/metamask-mobile/pull/13703))
- feat: bump notifications services controller to v1.0.0 ([#13716](https://github.com/MetaMask/metamask-mobile/pull/13716))
- feat: add `ConfirmAlertModal` component ([#13604](https://github.com/MetaMask/metamask-mobile/pull/13604))
- feat: Implement Snaps address UI components ([#13712](https://github.com/MetaMask/metamask-mobile/pull/13712))
- feat: add `AlertModal` component ([#13483](https://github.com/MetaMask/metamask-mobile/pull/13483))
- feat: More Snaps UI components ([#13668](https://github.com/MetaMask/metamask-mobile/pull/13668))
- feat: Support standalone confirmation for re-redesigned confirmations ([#13550](https://github.com/MetaMask/metamask-mobile/pull/13550))
- feat: Non evm network global selector ([#13307](https://github.com/MetaMask/metamask-mobile/pull/13307))
- feat: publish slack release testing status ([#13468](https://github.com/MetaMask/metamask-mobile/pull/13468))
- feat: Limit Segment tracked events to only random 1% of users ([#13534](https://github.com/MetaMask/metamask-mobile/pull/13534))
- feat: snaps dynamic UI ([#12429](https://github.com/MetaMask/metamask-mobile/pull/12429))
- feat: refactor cleanup notification hooks and UI ([#13647](https://github.com/MetaMask/metamask-mobile/pull/13647))
- feat: Implement `GasFeeDetails` ([#13634](https://github.com/MetaMask/metamask-mobile/pull/13634))
- feat: Add support for ledger wallet in new signature designs ([#13402](https://github.com/MetaMask/metamask-mobile/pull/13402))
- feat: Migrate tooltips to use BottomModal components ([#13631](https://github.com/MetaMask/metamask-mobile/pull/13631))
- feat: Refactor/12873 modular controller init ([#13065](https://github.com/MetaMask/metamask-mobile/pull/13065))
- feat: add initial structure for Alert System ([#13382](https://github.com/MetaMask/metamask-mobile/pull/13382))
- feat: add better default style support for android push notifications ([#13271](https://github.com/MetaMask/metamask-mobile/pull/13271))
- feat: add EarnTokenSelector component for stablecoin lending ([#13595](https://github.com/MetaMask/metamask-mobile/pull/13595))
- feat: adds best rate quote tag to ramp quotes ([#13486](https://github.com/MetaMask/metamask-mobile/pull/13486))
- feat: Implement staking advanced details ([#13551](https://github.com/MetaMask/metamask-mobile/pull/13551))
- feat: Implement staking terms and disclosure footer ([#13588](https://github.com/MetaMask/metamask-mobile/pull/13588))
- feat: add tokens search discovery controller ([#13111](https://github.com/MetaMask/metamask-mobile/pull/13111))
- feat: bridge feature routing skeleton ([#13404](https://github.com/MetaMask/metamask-mobile/pull/13404))
- feat: bump notification services controller ([#13529](https://github.com/MetaMask/metamask-mobile/pull/13529))
- feat: Adding scroll button to confirmation pages ([#13552](https://github.com/MetaMask/metamask-mobile/pull/13552))
- feat: Port first party staking contracts from extension to mobile ([#13555](https://github.com/MetaMask/metamask-mobile/pull/13555))
- feat: STAKE-898: build select token component for earn products ([#13258](https://github.com/MetaMask/metamask-mobile/pull/13258))
- feat: Add Redesign Permit support; fix: InfoRow padding and alignment ([#13369](https://github.com/MetaMask/metamask-mobile/pull/13369))
- feat: Implement staking details section ([#13475](https://github.com/MetaMask/metamask-mobile/pull/13475))
- feat: update FCM and Notification Services to better support push impl ([#13441](https://github.com/MetaMask/metamask-mobile/pull/13441))
- feat: adding navigation to confirmation pages ([#13461](https://github.com/MetaMask/metamask-mobile/pull/13461))
- feat: enable STX by default with migration and notification ([#12857](https://github.com/MetaMask/metamask-mobile/pull/12857))

### Fixed

- fix(action): Improve bug report creation ([#13562](https://github.com/MetaMask/metamask-mobile/pull/13562))
- fix(action): revert recent change, due to impossibility to indicate working directory for reusable workflows from github-tools repo ([#13629](https://github.com/MetaMask/metamask-mobile/pull/13629))
- fix(13492): background shapes animation stories and centering fix ([#13503](https://github.com/MetaMask/metamask-mobile/pull/13503))
- fix: Adhere to locale settings for Annual Rewards in ETH and in Fiat ([#13660](https://github.com/MetaMask/metamask-mobile/pull/13660))
- fix: Analytics issue where anonymousId and userId are not properly defined on first sent event ([#13405](https://github.com/MetaMask/metamask-mobile/pull/13405))
- fix: app store icon ([#13724](https://github.com/MetaMask/metamask-mobile/pull/13724))
- fix: cp-7.41.0 13708 fix the submitQRSignature scope issue ([#13714](https://github.com/MetaMask/metamask-mobile/pull/13714))
- fix: network of the asset when pressed in popular list view ([#13713](https://github.com/MetaMask/metamask-mobile/pull/13713))
- fix: Revert native HMACSHA512 usage ([#13711](https://github.com/MetaMask/metamask-mobile/pull/13711))
- fix: Remove scroll button from confirmation page ([#13680](https://github.com/MetaMask/metamask-mobile/pull/13680))
- fix: cp-7.41.0 support NFT collectibles that have multiple images ([#13689](https://github.com/MetaMask/metamask-mobile/pull/13689))
- fix: cp-7.41.0 implement transparent app icons for improved dark/light mode handling ([#13597](https://github.com/MetaMask/metamask-mobile/pull/13597))
- fix: `@metamask/transaction-controller` version to exact `45.0.0` ([#13690](https://github.com/MetaMask/metamask-mobile/pull/13690))
- fix: hide simulation button pill value if no value loaded ([#13663](https://github.com/MetaMask/metamask-mobile/pull/13663))
- fix: TypedSignDecoded revoke state changes should show "Revoke" not "Spending cap" ([#13665](https://github.com/MetaMask/metamask-mobile/pull/13665))
- fix: cp-7.41.0 Handle better errors by getting tags in pre-init ([#13598](https://github.com/MetaMask/metamask-mobile/pull/13598))
- fix: mobile crash issue during revoke with low gas ([#13655](https://github.com/MetaMask/metamask-mobile/pull/13655))
- fix: origin url displayed for signatures ([#13681](https://github.com/MetaMask/metamask-mobile/pull/13681))
- fix: swaps using hardware wallets or QR scan wallets are broken ([#13657](https://github.com/MetaMask/metamask-mobile/pull/13657))
- fix: cp-7.41.0 Temporarily revert gas included swaps ([#13639](https://github.com/MetaMask/metamask-mobile/pull/13639))
- fix: cp-7.41.0 Prevent flickering on `RetryModal` ([#13637](https://github.com/MetaMask/metamask-mobile/pull/13637))
- fix: rm duplicate locale entry ([#13635](https://github.com/MetaMask/metamask-mobile/pull/13635))
- fix: Disabling sentry capturing temporarily till we address issue with url missing protocol ([#13636](https://github.com/MetaMask/metamask-mobile/pull/13636))
- fix: Confirm button should not be disabled for user to scroll to the bottom of confirmation page ([#13628](https://github.com/MetaMask/metamask-mobile/pull/13628))
- fix: accessibility issue with footer buttons ([#13626](https://github.com/MetaMask/metamask-mobile/pull/13626))
- fix: error thrown from DisplayURL component ([#13624](https://github.com/MetaMask/metamask-mobile/pull/13624))
- fix: STAKE-946: fix inconsistent pooled staking reward rate ([#13594](https://github.com/MetaMask/metamask-mobile/pull/13594))
- fix: confirm scroll icon color and add scrollEventThrottle prop ([#13600](https://github.com/MetaMask/metamask-mobile/pull/13600))
- fix: Fix `undefined` `chainId` or `networkClientId` on fetchEstimatedMultiLayer params ([#13606](https://github.com/MetaMask/metamask-mobile/pull/13606))
- fix: Disable staking deposit for hw wallets ([#13517](https://github.com/MetaMask/metamask-mobile/pull/13517))
- fix: update toLocaleString locale to undefined ([#13589](https://github.com/MetaMask/metamask-mobile/pull/13589))
- fix: tooltip display for text should have label ([#13572](https://github.com/MetaMask/metamask-mobile/pull/13572))
- fix: Reject transaction as user closes modal by swiping out ([#13573](https://github.com/MetaMask/metamask-mobile/pull/13573))
- fix: remove supported chains check ([#13047](https://github.com/MetaMask/metamask-mobile/pull/13047))
- fix: additional app icons and remove tint fields ([#13544](https://github.com/MetaMask/metamask-mobile/pull/13544))
- fix: update plist to include CFBundleIconName for app icons ([#13530](https://github.com/MetaMask/metamask-mobile/pull/13530))
- fix: cp-7.41.0 fix main aggregated account balance ([#13513](https://github.com/MetaMask/metamask-mobile/pull/13513))
- fix: cp-7.41.0 fix account selector balance ([#13484](https://github.com/MetaMask/metamask-mobile/pull/13484))
- fix: account tracker polling called twice ([#13473](https://github.com/MetaMask/metamask-mobile/pull/13473))
- fix: IPFS gateway down in settings ([#13357](https://github.com/MetaMask/metamask-mobile/pull/13357))

## [7.41.0]

### Added

- feat(action): Improve bug report creation ([#13397](https://github.com/MetaMask/metamask-mobile/pull/13397))
- feat(ramp): sorts ramp quotes by price ([#13339](https://github.com/MetaMask/metamask-mobile/pull/13339))
- feat(ramps): updates useQuotes interface to include some quotes metadata ([#13335](https://github.com/MetaMask/metamask-mobile/pull/13335))
- feat: Add gas included swaps ([#13430](https://github.com/MetaMask/metamask-mobile/pull/13430))
- feat: remove unused package ([#13395](https://github.com/MetaMask/metamask-mobile/pull/13395))
- feat: Implement staking deposit `TokenHero` component ([#13418](https://github.com/MetaMask/metamask-mobile/pull/13418))
- feat: Implement staking back navigation header ([#13416](https://github.com/MetaMask/metamask-mobile/pull/13416))
- feat: Implement redesigned staking confirmation entry point ([#13361](https://github.com/MetaMask/metamask-mobile/pull/13361))
- feat: MultichainBalanceController ([#12599](https://github.com/MetaMask/metamask-mobile/pull/12599))
- feat: remove unused push notification environment variables ([#13270](https://github.com/MetaMask/metamask-mobile/pull/13270))
- feat: QR hardware signing in new designs ([#13261](https://github.com/MetaMask/metamask-mobile/pull/13261))
- feat: SIWE signature related changes on personal signature page ([#13329](https://github.com/MetaMask/metamask-mobile/pull/13329))
- feat: Implement confirm layout ([#13331](https://github.com/MetaMask/metamask-mobile/pull/13331))
- feat: customize fetchInterval for remoteFeatureFlagController to 15min ([#13341](https://github.com/MetaMask/metamask-mobile/pull/13341))
- feat: create release pr refs ([#13317](https://github.com/MetaMask/metamask-mobile/pull/13317))
- feat: STAKE-808: graph with historic vault apy tooltip ([#12804](https://github.com/MetaMask/metamask-mobile/pull/12804))
- feat: update notification codeowners ([#13269](https://github.com/MetaMask/metamask-mobile/pull/13269))
- feat: Adding token value field typed sign data tree. ([#13223](https://github.com/MetaMask/metamask-mobile/pull/13223))
- feat: allow override remote feature flags ([#13156](https://github.com/MetaMask/metamask-mobile/pull/13156))
- feat: add user earning history graph and list on history button click ([#12746](https://github.com/MetaMask/metamask-mobile/pull/12746))
- feat: shared-platform rls process ([#13280](https://github.com/MetaMask/metamask-mobile/pull/13280))

### Fixed

- fix: typed sign message display in dark mode ([#13479](https://github.com/MetaMask/metamask-mobile/pull/13479))
- fix(13491): update wallet creation flow styles ([#13501](https://github.com/MetaMask/metamask-mobile/pull/13501))
- fix(action): indicate working directory ([#13419](https://github.com/MetaMask/metamask-mobile/pull/13419))
- fix(action): handle edge case of issue that can't be accessed by access token ([#13442](https://github.com/MetaMask/metamask-mobile/pull/13442))
- fix(action): indicate working directory (again) ([#13425](https://github.com/MetaMask/metamask-mobile/pull/13425))
- fix: simulation Fiat precision and Fiat flickers different value before decimals are applied ([#13371](https://github.com/MetaMask/metamask-mobile/pull/13371))
- fix: Permit Simulation loader and value modal UI/UX ([#13398](https://github.com/MetaMask/metamask-mobile/pull/13398))
- fix: Fix missing `networkClientId` on estimating gas ([#13466](https://github.com/MetaMask/metamask-mobile/pull/13466))
- fix: fix duplicate native entry after send flow ([#13413](https://github.com/MetaMask/metamask-mobile/pull/13413))
- fix: Fix redesigned e2e tests ([#13364](https://github.com/MetaMask/metamask-mobile/pull/13364))
- fix: use global network client Id in send confirmation screen ([#13363](https://github.com/MetaMask/metamask-mobile/pull/13363))
- fix: fiat estimates disabled in send flow ([#13359](https://github.com/MetaMask/metamask-mobile/pull/13359))
- fix: update marketing traits when tracked settings change [PR 1/2] ([#13254](https://github.com/MetaMask/metamask-mobile/pull/13254))
- fix: SIWE detection on mobile by patching @spruceid+siwe-parser ([#13334](https://github.com/MetaMask/metamask-mobile/pull/13334))
- fix: revert NFT grid view ([#13292](https://github.com/MetaMask/metamask-mobile/pull/13292))
- fix: check isNative to determine if a token is a gas token ([#13315](https://github.com/MetaMask/metamask-mobile/pull/13315))
- fix: SIWE detection on mobile by patching @spruceid+siwe-parser ([#13314](https://github.com/MetaMask/metamask-mobile/pull/13314))
- fix: Currently keystone lib will throw `KeystoneError#Tx_canceled` which will crash the mobile app ([#13313](https://github.com/MetaMask/metamask-mobile/pull/13313))
- fix: send max main branch ([#13279](https://github.com/MetaMask/metamask-mobile/pull/13279))
- fix: prev network eth swap send main branch ([#13283](https://github.com/MetaMask/metamask-mobile/pull/13283))
- fix: Adjust browser display when multiple tabs are present ([#13294](https://github.com/MetaMask/metamask-mobile/pull/13294))
- fix: bump @react-native-community/blur to v4.4.1 ([#13293](https://github.com/MetaMask/metamask-mobile/pull/13293))
- fix: fix sort feature ([#13277](https://github.com/MetaMask/metamask-mobile/pull/13277))
- fix: metrics call during onboarding ([#13226](https://github.com/MetaMask/metamask-mobile/pull/13226))

## [7.40.0]

### Added

- [#12983](https://github.com/MetaMask/metamask-mobile/pull/12983): feat: `NftGrid` view (#12983)
- [#13198](https://github.com/MetaMask/metamask-mobile/pull/13198): feat(network): validate RPC URL for popular networks on add network from dapp connection (#13198)
- [#13099](https://github.com/MetaMask/metamask-mobile/pull/13099): feat: add the ability for all networks to be pre-selected in the checkbox list on initial connect to a dapp. (#13099)
- [#13247](https://github.com/MetaMask/metamask-mobile/pull/13247): feat: Adding text with tooltip component (#13247)
- [#13195](https://github.com/MetaMask/metamask-mobile/pull/13195): feat: Adding date field type in typed sign data tree (#13195)
- [#13135](https://github.com/MetaMask/metamask-mobile/pull/13135): feat: hide primary type displayed in collapsed message section if simulation is enabled (#13135)
- [#13041](https://github.com/MetaMask/metamask-mobile/pull/13041): feat: Decoding Simulation Metrics (#13041)
- [#12627](https://github.com/MetaMask/metamask-mobile/pull/12627): feat: Enable feature Flag Values with Scope Based on ""threshold"" (#12627)
- [#13018](https://github.com/MetaMask/metamask-mobile/pull/13018): feat: add earn button to wallet actions (#13018)
- [#13154](https://github.com/MetaMask/metamask-mobile/pull/13154): feat: STAKE-929 build token list item component (#13154)
- [#13108](https://github.com/MetaMask/metamask-mobile/pull/13108): feat: STAKE-927 build upsell banner component (#13108)
- [#13160](https://github.com/MetaMask/metamask-mobile/pull/13160): feat: Add Solana account (Flask only) (#13160)
- [#13231](https://github.com/MetaMask/metamask-mobile/pull/13231): fix: swaps button missing when no feature flags (#13231)
- [#13088](https://github.com/MetaMask/metamask-mobile/pull/13088): feat: Ledger team request us to upgrade the @ledgerhq/hw-app-eth to 6.42.0 to fix ledger bug for EIP-712 content (#13088)
- [#12938](https://github.com/MetaMask/metamask-mobile/pull/12938): feat: MMPD-1528 - View recents and favorites in browser URL modal (#12938)

### Changed

- [#13272](https://github.com/MetaMask/metamask-mobile/pull/13272): test: Added back ramps smoke tests to Bitrise (#13272)
- [#13058](https://github.com/MetaMask/metamask-mobile/pull/13058): chore: Remove device constraint from isPortfolioViewEnabled feature flag (#13058)
- [#13039](https://github.com/MetaMask/metamask-mobile/pull/13039): chore: Scope PortfolioView feature flag to iOS devices only (#13039)
- [#13217](https://github.com/MetaMask/metamask-mobile/pull/13217): test: Delete suggested-gas-api.mock.spec.js due to duplication (#13217)
- [#13214](https://github.com/MetaMask/metamask-mobile/pull/13214): test: Disable flakey e2e wallet edit-recipient-address.spec (#13214)
- [#13181](https://github.com/MetaMask/metamask-mobile/pull/13181): test: fix flakiness while browser loads test dapp (#13181)
- [#13183](https://github.com/MetaMask/metamask-mobile/pull/13183): test: remove AfterAll hook in e2e (#13183)
- [#13129](https://github.com/MetaMask/metamask-mobile/pull/13129): test: Reverse TCP port for edit address test (#13129)
- [#12955](https://github.com/MetaMask/metamask-mobile/pull/12955): refactor: remove global network usage from transaction confirmations (#12955)
- [#13075](https://github.com/MetaMask/metamask-mobile/pull/13075): chore: Add e2e tests for blockaid validations on re-designed signature request pages (#13075)
- [#13053](https://github.com/MetaMask/metamask-mobile/pull/13053): chore: Adding e2e test cases for signature pages (#13053)
- [#13243](https://github.com/MetaMask/metamask-mobile/pull/13243): chore: stable sync with main v7.38.1 (#13243)
- [#13059](https://github.com/MetaMask/metamask-mobile/pull/13059): test: deprecate gestures in helpers.js file (#13059)
- [#12740](https://github.com/MetaMask/metamask-mobile/pull/12740): chore: Convert browser tab to typescript (#12740)
- [#13084](https://github.com/MetaMask/metamask-mobile/pull/13084): chore: Token list performance measurement (#13084)
- [#12912](https://github.com/MetaMask/metamask-mobile/pull/12912): test: Add regression test for wallet address edit issue on confirmation screen (#12912)
- [#13043](https://github.com/MetaMask/metamask-mobile/pull/13043): chore: chore/7.39.0-Changelog (#13043)
- [#13244](https://github.com/MetaMask/metamask-mobile/pull/13244): chore: re-add staking actions when not on supported chain and switch to mainnet (#13244)
- [#13110](https://github.com/MetaMask/metamask-mobile/pull/13110): chore: upgrade `@metamask/transaction-controller` (#13110)
- [#13185](https://github.com/MetaMask/metamask-mobile/pull/13185): test: fix edit account regression test (#13185)
- [#13082](https://github.com/MetaMask/metamask-mobile/pull/13082): chore: add fiat value to token and sort desc by fiat (#13082)
- [#13221](https://github.com/MetaMask/metamask-mobile/pull/13221): refactor(navigation): unify dapp redirect logic to prevent premature navigation (#13221)
- [#13157](https://github.com/MetaMask/metamask-mobile/pull/13157): chore: upgrading to design tokens v5.0.0 (#13157)

### Fixed

- [#13126](https://github.com/MetaMask/metamask-mobile/pull/13126): fix: Fix assert e2e test for `Address advanced gas fees` test (#13126)
- [#12926](https://github.com/MetaMask/metamask-mobile/pull/12926): fix: ensure marketing consent is explicitly tracked as boolean (#12926)
- [#13166](https://github.com/MetaMask/metamask-mobile/pull/13166): fix: Blockaid banner momentarily visible on benign request opened after malicious one (#13166)
- [#13208](https://github.com/MetaMask/metamask-mobile/pull/13208): fix: update token balances on pull tokenlist pull down (#13208)
- [#13218](https://github.com/MetaMask/metamask-mobile/pull/13218): fix: fix send flow on token detail page (#13218)
- [#13200](https://github.com/MetaMask/metamask-mobile/pull/13200): fix: fix edit network and delete network with tokenNetworkFilter (#13… (#13200)
- [#13228](https://github.com/MetaMask/metamask-mobile/pull/13228): fix: fix balance after swap (#13228)
- [#13199](https://github.com/MetaMask/metamask-mobile/pull/13199): fix: failure to convert undefined value to hex object (#13199)
- [#13141](https://github.com/MetaMask/metamask-mobile/pull/13141): fix: fix edit network and delete network with tokenNetworkFilter (#13141)
- [#13177](https://github.com/MetaMask/metamask-mobile/pull/13177): fix: token details network name (#13162) (#13177)
- [#12843](https://github.com/MetaMask/metamask-mobile/pull/12843): fix: improve assets perfs + fix blurred balances and prices (#12843)
- [#13162](https://github.com/MetaMask/metamask-mobile/pull/13162): fix: token details network name (#13162)
- [#13146](https://github.com/MetaMask/metamask-mobile/pull/13146): fix: toast msg on deleted network (#13146)
- [#13057](https://github.com/MetaMask/metamask-mobile/pull/13057): fix: fix holesky network balance included in aggregated balance on ma… (#13057)
- [#12907](https://github.com/MetaMask/metamask-mobile/pull/12907): fix: bugs in add network modal (#12907)
- [#13123](https://github.com/MetaMask/metamask-mobile/pull/13123): fix: fix token list on network rpc selection (#13097) (#13123)
- [#13097](https://github.com/MetaMask/metamask-mobile/pull/13097): fix: fix token list on network rpc selection (#13097)
- [#13007](https://github.com/MetaMask/metamask-mobile/pull/13007): fix: tokens list to display with hideTokensWithoutBalance setting (#13007)
- [#13219](https://github.com/MetaMask/metamask-mobile/pull/13219): fix: Prevent extra dismissModal call after network selection (#13219)
- [#13163](https://github.com/MetaMask/metamask-mobile/pull/13163): fix: removes runAfterInteractions call from OptinMetrics (#13163)
- [#13262](https://github.com/MetaMask/metamask-mobile/pull/13262): fix: Fix the case of undefined `networkClientId` & `chainId` (#13262)
- [#13090](https://github.com/MetaMask/metamask-mobile/pull/13090): fix: Add fallback for undefined case when destructuring `isUpdatedAfterSecurityCheck` (#13090)
- [#13138](https://github.com/MetaMask/metamask-mobile/pull/13138): fix: mobile crash issue during swap with low gas (#13138)
- [#13142](https://github.com/MetaMask/metamask-mobile/pull/13142): fix: setApprovalForAll nonce too low (#13142)
- [#13145](https://github.com/MetaMask/metamask-mobile/pull/13145): fix: User should be re-directed to old designs when signing using QR wallet (#13145)
- [#13139](https://github.com/MetaMask/metamask-mobile/pull/13139): fix: Hide simulation section in typed sign v1 pages (#13139)
- [#13087](https://github.com/MetaMask/metamask-mobile/pull/13087): fix: Flickering permit and decoding simulation values (#13087)
- [#13092](https://github.com/MetaMask/metamask-mobile/pull/13092): fix: blockaid validations are not being flagged in re-designed signature request pages (#13092)
- [#13072](https://github.com/MetaMask/metamask-mobile/pull/13072): fix: Fix `disabled` send button on sending `erc721` and `erc20` (#13072)
- [#13232](https://github.com/MetaMask/metamask-mobile/pull/13232): fix(action): the next semver version can not be a patch version (#13232)
- [#12909](https://github.com/MetaMask/metamask-mobile/pull/12909): fix: Change login in field.setValue to use optional operator (#12909)
- [#13118](https://github.com/MetaMask/metamask-mobile/pull/13118): fix: app opened event (#13118)
- [#12971](https://github.com/MetaMask/metamask-mobile/pull/12971): fix: use asset ticker else asset.symbol for Price component header text (#12971)
- [#13158](https://github.com/MetaMask/metamask-mobile/pull/13158): fix: move migration validation out of onPersistComplete (#13158)
- [#13066](https://github.com/MetaMask/metamask-mobile/pull/13066): fix: apply migration 66 (#13066)
- [#13077](https://github.com/MetaMask/metamask-mobile/pull/13077): fix: only send length of available_quotes (#13077)
- [#13119](https://github.com/MetaMask/metamask-mobile/pull/13119): fix: Fix Samsung freeze by reverting reanimated version and bump expo-dev-client (#13119)

## [7.39.0]

### Added

- [#13030](https://github.com/MetaMask/metamask-mobile/pull/13030): feat: ""Unlimited"" value Decoding Simulation and account and message modal UI/UX updates (#13030)
- [#12994](https://github.com/MetaMask/metamask-mobile/pull/12994): feat: Redesign Signature Decoding Simulation (#12994)
- [#12606](https://github.com/MetaMask/metamask-mobile/pull/12606): feat: Create Permit Simulation (#12606)
- [#12813](https://github.com/MetaMask/metamask-mobile/pull/12813): feat: add Network URL non-ascii -> punycode warning (#12813)
- [#12977](https://github.com/MetaMask/metamask-mobile/pull/12977): feat: Adding remote feature flag for signature redesign (#12977)
- [#12927](https://github.com/MetaMask/metamask-mobile/pull/12927): feat: Adding metrics events for re-designed signatures pages (#12927)
- [#12863](https://github.com/MetaMask/metamask-mobile/pull/12863): feat: Adding blockaid banner to re-designed confirmation pages (#12863)
- [#12754](https://github.com/MetaMask/metamask-mobile/pull/12754): feat: Implement send max to send flow (#12754)
- [#12936](https://github.com/MetaMask/metamask-mobile/pull/12936): feat: log-merge-group-failure (#12936)
- [#12852](https://github.com/MetaMask/metamask-mobile/pull/12852): feat: STAKE-914 Remove MM_POOLED_STAKING_UI_ENABLED feature flag (#12852)
- [#12911](https://github.com/MetaMask/metamask-mobile/pull/12911): feat: add stablecoin lending feature flag (#12911)
- [#12651](https://github.com/MetaMask/metamask-mobile/pull/12651): feat: STAKE-884 add more mobile pooled staking events (#12651)
- [#12621](https://github.com/MetaMask/metamask-mobile/pull/12621): feat: add metametricsid in state export (#12621)
- [#12978](https://github.com/MetaMask/metamask-mobile/pull/12978): feat: Use a dynamic interval value for smart transaction status polling (#12978)
- [#12811](https://github.com/MetaMask/metamask-mobile/pull/12811): feat: add detected tokens automatically (#12811)

### Changed

- [#12984](https://github.com/MetaMask/metamask-mobile/pull/12984): chore: Update assets and accounts packages (#12984)
- [#12822](https://github.com/MetaMask/metamask-mobile/pull/12822): chore: Improve Keyring/Accounts error handling and logs (#12822)
- [#13026](https://github.com/MetaMask/metamask-mobile/pull/13026): test: Redesign Signature Decoding Simulation (#13026)
- [#13033](https://github.com/MetaMask/metamask-mobile/pull/13033): refactor: revert noBorder Ramp Box param and replace Ramp Box usage in SimulationValueDisplay with View (#13033)
- [#12905](https://github.com/MetaMask/metamask-mobile/pull/12905): refactor: remove global network usage from signature confirmations (#12905)
- [#12743](https://github.com/MetaMask/metamask-mobile/pull/12743): refactor: remove global network usage from transaction simulation (#12743)
- [#13017](https://github.com/MetaMask/metamask-mobile/pull/13017): chore: reorganize stake button tests (#13017)
- [#11670](https://github.com/MetaMask/metamask-mobile/pull/11670): test: Refactor e2e Swap test to use Tenderly Virtual TestNets (#11670)
- [#12975](https://github.com/MetaMask/metamask-mobile/pull/12975): chore: Chore/update png mock for tests (#12975)
- [#12951](https://github.com/MetaMask/metamask-mobile/pull/12951): test: add selected payment type for ramps sell e2e (#12951)
- [#12906](https://github.com/MetaMask/metamask-mobile/pull/12906): test: Disable flakey chain permissions e2e (#12906)
- [#12823](https://github.com/MetaMask/metamask-mobile/pull/12823): chore: assign CODEOWNERS to BrowserTab (#12823)
- [#12839](https://github.com/MetaMask/metamask-mobile/pull/12839): test: change browser homepage for e2e (#12839)
- [#12821](https://github.com/MetaMask/metamask-mobile/pull/12821): test: Enhance ramps deeplink e2e (#12821)
- [#12805](https://github.com/MetaMask/metamask-mobile/pull/12805): test: E2E to reveal SRP on error boundary screen (#12805)
- [#12747](https://github.com/MetaMask/metamask-mobile/pull/12747): test: Add ramps URL scheme deeplinking e2e (#12747)
- [#12777](https://github.com/MetaMask/metamask-mobile/pull/12777): test: E2E Send to Contract Address (#12777)
- [#12722](https://github.com/MetaMask/metamask-mobile/pull/12722): chore: remove duplicated dependencies (#12722)
- [#12737](https://github.com/MetaMask/metamask-mobile/pull/12737): test: add Ethereum sign in e2e (#12737)
- [#12750](https://github.com/MetaMask/metamask-mobile/pull/12750): test: disable confirmations e2e (#12750)
- [#11230](https://github.com/MetaMask/metamask-mobile/pull/11230): chore: change relavent to relevant (typo fix) (#11230)
- [#12720](https://github.com/MetaMask/metamask-mobile/pull/12720): test: add Asset watch e2e (#12720)
- [#12715](https://github.com/MetaMask/metamask-mobile/pull/12715): test: add e2e to clear privacy data (#12715)
- [#12830](https://github.com/MetaMask/metamask-mobile/pull/12830): test(3615): E2E to check the labels displaying the default account and chain (#12830)
- [#12915](https://github.com/MetaMask/metamask-mobile/pull/12915): chore: remove dead code that had been added for multichain permission early in the project but not used anymore (#12915)
- [#12762](https://github.com/MetaMask/metamask-mobile/pull/12762): test(3615): add ability to check if chain permission is checked (#12762)
- [#12809](https://github.com/MetaMask/metamask-mobile/pull/12809): refactor: rename multichain e2e pipeline (#12809)
- [#12807](https://github.com/MetaMask/metamask-mobile/pull/12807): chore(tests): move multichain assets test so it runs as part of the assets bitrise workflow (#12807)
- [#12791](https://github.com/MetaMask/metamask-mobile/pull/12791): chore: update js.env.example to include examples of chain permissions to true (#12791)
- [#12714](https://github.com/MetaMask/metamask-mobile/pull/12714): refactor(tests): move multichain test files to a new folder structure (#12714)
- [#12695](https://github.com/MetaMask/metamask-mobile/pull/12695): test(3598): fixing some failing e2e tests possibly due to flakiness introduced by toast sticking around longer than should (#12695)
- [#12986](https://github.com/MetaMask/metamask-mobile/pull/12986): chore: Remove unused patch (#12986)
- [#12795](https://github.com/MetaMask/metamask-mobile/pull/12795): chore: remove duplicate `@metamask/swaps-controller` in `package.json` (#12795)
- [#12614](https://github.com/MetaMask/metamask-mobile/pull/12614): refactor: update some @metamask/notification-services-controller imports (#12614)
- [#12790](https://github.com/MetaMask/metamask-mobile/pull/12790): chore: bump `@metamask/smart-transactions-controller` to `16.0.0` (#12790)
- [#12378](https://github.com/MetaMask/metamask-mobile/pull/12378): chore: Bump `@metamask/swaps-controller` to 12.0.0 (#12378)
- [#12814](https://github.com/MetaMask/metamask-mobile/pull/12814): feat: @lavamoat/git-safe-dependencies (#12814)
- [#12595](https://github.com/MetaMask/metamask-mobile/pull/12595): chore: pin react-native-tcp to hash (#12595)
- [#12802](https://github.com/MetaMask/metamask-mobile/pull/12802): test: send failing contract (#12802)
- [#12800](https://github.com/MetaMask/metamask-mobile/pull/12800): test: erc 1155 batch transfer (#12800)
- [#12774](https://github.com/MetaMask/metamask-mobile/pull/12774): test: ERC1155 set approval for all e2e (#12774)
- [#12767](https://github.com/MetaMask/metamask-mobile/pull/12767): test: approve erc721 token e2e (#12767)
- [#12766](https://github.com/MetaMask/metamask-mobile/pull/12766): perf: no multichain list calculations are made when feature flag is off (#12766)
- [#10716](https://github.com/MetaMask/metamask-mobile/pull/10716): chore: Add Wallet API Platform Team as `CODEOWNER` for the `RPCMethods/` directory (#10716)
- [#12643](https://github.com/MetaMask/metamask-mobile/pull/12643): chore(ramp): upgrade sdk to 1.28.8 (#12643)

### Fixed

- [#13027](https://github.com/MetaMask/metamask-mobile/pull/13027): fix: Fix disappearing security alert response (#13027)
- [#12694](https://github.com/MetaMask/metamask-mobile/pull/12694): fix: small refactoring of the latest migration script + add a new migration case (#12694)
- [#12929](https://github.com/MetaMask/metamask-mobile/pull/12929): fix: Keep latest 50 history instead of first 50 (#12929)
- [#13029](https://github.com/MetaMask/metamask-mobile/pull/13029): fix: Precision of BigNumber values of calcTokenAmount and Configure BigNumber to support 36 decimals (#13029)
- [#13002](https://github.com/MetaMask/metamask-mobile/pull/13002): fix: fix old signature e2e by mocking launch darkly api (#13002)
- [#12965](https://github.com/MetaMask/metamask-mobile/pull/12965): fix: Fix `send` flow deeplinks (#12965)
- [#12998](https://github.com/MetaMask/metamask-mobile/pull/12998): fix: Make message section on re-designed signature pages scrollable (#12998)
- [#12957](https://github.com/MetaMask/metamask-mobile/pull/12957): fix: Addressing design feedbacks on re-designed signature pages (#12957)
- [#12954](https://github.com/MetaMask/metamask-mobile/pull/12954): fix: Addressing UX feedbacks on re-designed signature pages (#12954)
- [#12958](https://github.com/MetaMask/metamask-mobile/pull/12958): fix: Add `networkClientId` to `estimateGas` function (#12958)
- [#12916](https://github.com/MetaMask/metamask-mobile/pull/12916): fix: Add `transactionMeta` condition to render `SimulationDetails` (#12916)
- [#12629](https://github.com/MetaMask/metamask-mobile/pull/12629): fix: hide `ApprovalTagUrl` when origins is internal (#12629)
- [#12789](https://github.com/MetaMask/metamask-mobile/pull/12789): fix: Sanitize `signTypedDatav3v4` params before calling security API (#12789)
- [#12988](https://github.com/MetaMask/metamask-mobile/pull/12988): fix: enable earn button navigation on unsupported networks (#12988)
- [#12987](https://github.com/MetaMask/metamask-mobile/pull/12987): fix: ensure StakingBalance is shown or hidden appropriately per asset… (#12987)
- [#12851](https://github.com/MetaMask/metamask-mobile/pull/12851): fix: add nativeAsset key to staked ETH asset multichain (#12851)
- [#12920](https://github.com/MetaMask/metamask-mobile/pull/12920): fix: fixed getStakingNavbar broken back and cancel buttons regression (#12920)
- [#12799](https://github.com/MetaMask/metamask-mobile/pull/12799): fix: improve error handling in staking eligibility hook (#12799)
- [#12665](https://github.com/MetaMask/metamask-mobile/pull/12665): fix: Fix padding on Android browser search (#12665)
- [#12918](https://github.com/MetaMask/metamask-mobile/pull/12918): fix: Bump artifact upload and download version to 4 (#12918)
- [#12820](https://github.com/MetaMask/metamask-mobile/pull/12820): fix: mark transactions as failed for cancelled / unknown smart transa… (#12820)
- [#12798](https://github.com/MetaMask/metamask-mobile/pull/12798): fix: use correct import for MetricsEventBuilder (#12798)
- [#12847](https://github.com/MetaMask/metamask-mobile/pull/12847): fix: Bump smart-transactions-controller to ^16.0.1 (#12847)
- [#12664](https://github.com/MetaMask/metamask-mobile/pull/12664): fix: mark transactions as failed for cancelled / unknown smart transactions (#12664)
- [#12846](https://github.com/MetaMask/metamask-mobile/pull/12846): fix: Add missing allowed action to the `SmartTransactionsController` messenger (#12846)
- [#11952](https://github.com/MetaMask/metamask-mobile/pull/11952): fix: replace legacy eth-json-rpc deps (#11952)
- [#12961](https://github.com/MetaMask/metamask-mobile/pull/12961): fix: Only aggregate PortfolioBalance if on Popular Network (#12961)
- [#12919](https://github.com/MetaMask/metamask-mobile/pull/12919): fix: fix asset options sheet (#12859) (#12919)
- [#12860](https://github.com/MetaMask/metamask-mobile/pull/12860): fix: add kaia logo (#12860)
- [#12838](https://github.com/MetaMask/metamask-mobile/pull/12838): fix: remove goerli infura from network state (#12838)
- [#12859](https://github.com/MetaMask/metamask-mobile/pull/12859): fix: fix asset options sheet (#12859)
- [#12833](https://github.com/MetaMask/metamask-mobile/pull/12833): fix: fix add network form when addMode is true (#12833)
- [#12796](https://github.com/MetaMask/metamask-mobile/pull/12796): fix: fix ramp flow (#12796)
- [#12797](https://github.com/MetaMask/metamask-mobile/pull/12797): fix: fix swap flow (#12788) (#12797)
- [#12788](https://github.com/MetaMask/metamask-mobile/pull/12788): fix: fix swap flow (#12788)
- [#12732](https://github.com/MetaMask/metamask-mobile/pull/12732): fix: filter token activity when clicking on native token (#12732)
- [#12661](https://github.com/MetaMask/metamask-mobile/pull/12661): fix: set token network filter when adding network from dapp (#12661)
- [#12227](https://github.com/MetaMask/metamask-mobile/pull/12227): fix: set default selectedNetworkClientId to 'mainnet' if no matching with entry on network list (#12227)
- [#12605](https://github.com/MetaMask/metamask-mobile/pull/12605): fix: fix network selector bug (#12605)
- [#12658](https://github.com/MetaMask/metamask-mobile/pull/12658): fix: poll only popular network (#12658)
- [#12693](https://github.com/MetaMask/metamask-mobile/pull/12693): fix: optimize display swap button (#12693)
- [#12923](https://github.com/MetaMask/metamask-mobile/pull/12923): fix: invoke_snap RPC requests inside the built-in browser (#12923)
- [#12816](https://github.com/MetaMask/metamask-mobile/pull/12816): fix: updated default button label text variant to bodyMDMedium (#12816)
- [#12775](https://github.com/MetaMask/metamask-mobile/pull/12775): fix: Updated display format for asset currency dif (#12775)
- [#12778](https://github.com/MetaMask/metamask-mobile/pull/12778): fix: Update layout of ""Network added"" BottomSheet (#12778)
- [#12756](https://github.com/MetaMask/metamask-mobile/pull/12756): fix(ramp): reset intent asset after parsed (#12756)
- [#12989](https://github.com/MetaMask/metamask-mobile/pull/12989): fix(12945): privacy mode and account selection bottom sheet (#12989)
- [#12853](https://github.com/MetaMask/metamask-mobile/pull/12853): fix(12849): alert toast blocking tab navigation (#12853)

## [7.38.1]

### Fixed

- [#13067](https://github.com/MetaMask/metamask-mobile/pull/13067)fix: remove expo changes (#13067)

## [7.38.0]

### Added

- [#12427](https://github.com/MetaMask/metamask-mobile/pull/12427): feat: implement remote feature flag controller (#12427)
- [#12507](https://github.com/MetaMask/metamask-mobile/pull/12507): feat: activate portfolio view (#12507)
- [#12540](https://github.com/MetaMask/metamask-mobile/pull/12540): feat: migrate Base network RPC from https://mainnet.base.org to base-… (#12540)
- [#12505](https://github.com/MetaMask/metamask-mobile/pull/12505): feat: add aggregated portfolio balance cross chains (#12505)
- [#12417](https://github.com/MetaMask/metamask-mobile/pull/12417): feat: multichain detect tokens feat (#12417)
- [#12419](https://github.com/MetaMask/metamask-mobile/pull/12419): feat: upgrade transaction controller to get incoming transactions using accounts API (#12419)
- [#12537](https://github.com/MetaMask/metamask-mobile/pull/12537): feat: enable ledger clear signing feature (#12537)
- [#12622](https://github.com/MetaMask/metamask-mobile/pull/12622): feat: Hide the smart transaction status page if we return a txHash asap (#12622)
- [#12244](https://github.com/MetaMask/metamask-mobile/pull/12244): feat(ci): Expo (#12244)
- [#12459](https://github.com/MetaMask/metamask-mobile/pull/12459): feat: upgrade profile-sync-controller to 1.0.0 (#12459)
- [#12294](https://github.com/MetaMask/metamask-mobile/pull/12294): feat: Add Bitcoin accounts (Flask Only) (#12294)
- [#12243](https://github.com/MetaMask/metamask-mobile/pull/12243): feat: cicd e2e label requirements + pr automation (#12243)
- [#12495](https://github.com/MetaMask/metamask-mobile/pull/12495): feat: Support gas fee flows in swaps (#12495)
- [#12431](https://github.com/MetaMask/metamask-mobile/pull/12431): feat: multi chain asset list (#12431)

### Changed

- [#12623](https://github.com/MetaMask/metamask-mobile/pull/12623): chore: update bug template to include feature branches (#12623)
- [#12538](https://github.com/MetaMask/metamask-mobile/pull/12538): chore: Chore/12435 mvp handle engine does not exist (#12538)
- [#12617](https://github.com/MetaMask/metamask-mobile/pull/12617): docs: Update README.md with new expo instructions (#12617)
- [#12559](https://github.com/MetaMask/metamask-mobile/pull/12559): test: move remaining modal pages and selectors to their respective folders (#12559)
- [#12556](https://github.com/MetaMask/metamask-mobile/pull/12556): test: remove redundent tests in quarantine folder (#12556)
- [#12558](https://github.com/MetaMask/metamask-mobile/pull/12558): test: Create e2e tag for multi chain (#12558)
- [#12531](https://github.com/MetaMask/metamask-mobile/pull/12531): test: Move files to Wallet folder (#12531)
- [#12511](https://github.com/MetaMask/metamask-mobile/pull/12511): test: Move files to Onboarding folder (#12511)
- [#12512](https://github.com/MetaMask/metamask-mobile/pull/12512): test: address regression pipeline slow down (#12512)
- [#12513](https://github.com/MetaMask/metamask-mobile/pull/12513): ci: disable security e2e tests (#12513)
- [#12602](https://github.com/MetaMask/metamask-mobile/pull/12602): chore: Additional e2e test to support `PortfolioView` (#12602)
- [#12321](https://github.com/MetaMask/metamask-mobile/pull/12321): refactor: remove global network from transaction controller (#12321)
- [#12536](https://github.com/MetaMask/metamask-mobile/pull/12536): test: fix mock server (#12536)
- [#12288](https://github.com/MetaMask/metamask-mobile/pull/12288): test: add e2e test for security alert api (#12288)
- [#12597](https://github.com/MetaMask/metamask-mobile/pull/12597): test(3615): additional e2e scenarios editing permissions and non permitted networks (#12597)
- [#12488](https://github.com/MetaMask/metamask-mobile/pull/12488): test(3615): add new e2e test for initial dapp connection and non permitted flow (#12488)
- [#12532](https://github.com/MetaMask/metamask-mobile/pull/12532): refactor: de-anonymize insensitive properties of swaps events (#12532)
- [#12485](https://github.com/MetaMask/metamask-mobile/pull/12485): chore: Stop suppressing pod install failures (#12485)
- [#12574](https://github.com/MetaMask/metamask-mobile/pull/12574): chore: Add option to skip pod install setup step (#12574)
- [#12609](https://github.com/MetaMask/metamask-mobile/pull/12609): chore: update user storage E2E framework (#12609)
- [#12569](https://github.com/MetaMask/metamask-mobile/pull/12569): chore: transfer ownership of auth & profile sync E2E from notifications to identity (#12569)
- [#12534](https://github.com/MetaMask/metamask-mobile/pull/12534): chore: change ownership of profile sync from notifications to identity (#12534)
- [#12543](https://github.com/MetaMask/metamask-mobile/pull/12543): chore: Decrease hot and cold start app to wallet view time (#12543)
- [#12428](https://github.com/MetaMask/metamask-mobile/pull/12428): chore: Add eth hd keyring and key tree to decrease unlock time (#12428)
- [#12555](https://github.com/MetaMask/metamask-mobile/pull/12555): chore: Update accounts packages (#12555)
- [#12563](https://github.com/MetaMask/metamask-mobile/pull/12563): chore: cicd e2e hardening (#12563)
- [#12554](https://github.com/MetaMask/metamask-mobile/pull/12554): chore: fail status when on no labels for retro-label changes (#12554)
- [#12295](https://github.com/MetaMask/metamask-mobile/pull/12295): chore: use getShares contract method from stake-sdk for unstake all flow (#12295)
- [#12551](https://github.com/MetaMask/metamask-mobile/pull/12551): chore: Bump Snaps packages (#12551)

### Fixed

- [#12650](https://github.com/MetaMask/metamask-mobile/pull/12650): fix: fix swaps button on asset overview page for multichain feature (#12650)
- [#12659](https://github.com/MetaMask/metamask-mobile/pull/12659): fix: fix token details navigation (#12659)
- [#12624](https://github.com/MetaMask/metamask-mobile/pull/12624): fix: add new translations (#12624)
- [#12373](https://github.com/MetaMask/metamask-mobile/pull/12373): fix: circular dependencies engine-network-handleNetworkSwitch (#12373)
- [#12663](https://github.com/MetaMask/metamask-mobile/pull/12663): fix: disable flaky tests on incoming-transactions.spec (#12663)
- [#12598](https://github.com/MetaMask/metamask-mobile/pull/12598): fix: disable mock poc test (#12598)
- [#12230](https://github.com/MetaMask/metamask-mobile/pull/12230): fix: Jest timer error in unit test (#12230)
- [#12626](https://github.com/MetaMask/metamask-mobile/pull/12626): fix: fix flaky test (#12626)
- [#12372](https://github.com/MetaMask/metamask-mobile/pull/12372): fix: abstract out circular dependencies between engine and networks util (#12372)
- [#12641](https://github.com/MetaMask/metamask-mobile/pull/12641): fix: fix network selector (#12641)
- [#12637](https://github.com/MetaMask/metamask-mobile/pull/12637): fix: fix native tokens filter when all networks is selected (#12637)
- [#12529](https://github.com/MetaMask/metamask-mobile/pull/12529): fix: fix NFTs disappearing after killing app (#12529)
- [#12562](https://github.com/MetaMask/metamask-mobile/pull/12562): fix: Move `AssetPollingProvider` from Root to Nav/Main/index.js (#12562)
- [#12607](https://github.com/MetaMask/metamask-mobile/pull/12607): fix: e2e regression gas api (#12607)
- [#12460](https://github.com/MetaMask/metamask-mobile/pull/12460): fix: add source when local PPOM fails (#12460)
- [#12199](https://github.com/MetaMask/metamask-mobile/pull/12199): fix: 10967 User able to add Ledger account with existing account name (#12199)
- [#12566](https://github.com/MetaMask/metamask-mobile/pull/12566): fix(12527): sdk connection with unknown url causes a bug (#12566)
- [#12405](https://github.com/MetaMask/metamask-mobile/pull/12405): fix(431-2): active network icon has too much margin and adding optional prop (#12405)
- [#12591](https://github.com/MetaMask/metamask-mobile/pull/12591): fix: add resolution for express to fix failing audit on path-to-regexp (#12591)
- [#12567](https://github.com/MetaMask/metamask-mobile/pull/12567): fix: update input handling in useInputHandler to support BACK key functionality (#12567)
- [#12630](https://github.com/MetaMask/metamask-mobile/pull/12630): fix: hide tokens without balance for multichain (#12630)

## [7.37.1]

### Fixed

- [#12577](https://github.com/MetaMask/metamask-mobile/pull/12577): chore: bump {gas-fee,network,selected-network,notification-services,profile-sync,signature}-controller (#12577)
- [#12694](https://github.com/MetaMask/metamask-mobile/pull/12694): fix: small refactoring of the latest migration script + add a new migration case (#12694)
- [#12664](https://github.com/MetaMask/metamask-mobile/pull/12664): fix: mark transactions as failed for cancelled / unknown smart transactions (#12664)

## [7.37.0]

### Added

- [#12091](https://github.com/MetaMask/metamask-mobile/pull/12091): feat: 2020 Add a performance test for iOS in Bitrise (#12091)
- [#12148](https://github.com/MetaMask/metamask-mobile/pull/12148): feat: Enable smart transactions for new users (#12148)
- [#12442](https://github.com/MetaMask/metamask-mobile/pull/12442): test: add a new unit test to cover for multichain feature flags ON (#12442)
- [#12420](https://github.com/MetaMask/metamask-mobile/pull/12420): feat(3598): non permitted chain flow small improvements (#12420)
- [#12198](https://github.com/MetaMask/metamask-mobile/pull/12198): feat: custom names for snap accounts (Flask only) (#12198)
- [#12396](https://github.com/MetaMask/metamask-mobile/pull/12396): feat(ramp): enable buy button in asset overview (#12396)
- [#11613](https://github.com/MetaMask/metamask-mobile/pull/11613): feat(ramp): improve amount editing formatting (#11613)
- [#12393](https://github.com/MetaMask/metamask-mobile/pull/12393): feat: Creating data tree for signed type V1 signatures (#12393)
- [#12160](https://github.com/MetaMask/metamask-mobile/pull/12160): feat: Integrate NFT api to display image & names in simulations includes `erc721`s (#12160)
- [#12324](https://github.com/MetaMask/metamask-mobile/pull/12324): feat: confirmation re-designs add basic page for types sign V1 signature request (#12324)
- [#11424](https://github.com/MetaMask/metamask-mobile/pull/11424): feat: add workflow for updating automated test results in TestRail (#11424)
- [#12337](https://github.com/MetaMask/metamask-mobile/pull/12337): feat: updated staking events to use withMetaMetrics helper (#12337)
- [#12363](https://github.com/MetaMask/metamask-mobile/pull/12363): feat: add PooledStaking slice for managing staking state (#12363)
- [#12398](https://github.com/MetaMask/metamask-mobile/pull/12398): feat: limit input digits to 12 in useInputHandler (#12398)
- [#12344](https://github.com/MetaMask/metamask-mobile/pull/12344): feat: upgrade assets controllers to v44 (#12344)
- [#12340](https://github.com/MetaMask/metamask-mobile/pull/12340): feat: upgrade assets controllers to version 43 (#12340)
- [#12270](https://github.com/MetaMask/metamask-mobile/pull/12270): feat: upgrade assets controllers to 42 with multichain token rates (#12270)
- [#12452](https://github.com/MetaMask/metamask-mobile/pull/12452): feat: updated staking events to use withMetaMetrics helper (#12337) (#12452)

### Changed

- [#12356](https://github.com/MetaMask/metamask-mobile/pull/12356): chore: Remove unnecessary event prop (#12356)
- [#12425](https://github.com/MetaMask/metamask-mobile/pull/12425): ci: create ci workflow for multichain flow (#12425)
- [#12350](https://github.com/MetaMask/metamask-mobile/pull/12350): chore: Bump Snaps packages (#12350)
- [#11409](https://github.com/MetaMask/metamask-mobile/pull/11409): refactor: use `withKeyring` to batch account restore operation (#11409)
- [#12339](https://github.com/MetaMask/metamask-mobile/pull/12339): chore: Update accounts-controller @v19.0.0 and keyring-controller @v18.0.0 (#12339)
- [#12440](https://github.com/MetaMask/metamask-mobile/pull/12440): chore(ramp): upgrade sdk to 1.28.7 (#12440)
- [#12351](https://github.com/MetaMask/metamask-mobile/pull/12351): refactor(ramp): remove anonymous events (#12351)
- [#12355](https://github.com/MetaMask/metamask-mobile/pull/12355): chore: Add missing confirmation unit tests (#12355)
- [#12369](https://github.com/MetaMask/metamask-mobile/pull/12369): chore: upgrade transaction controller to increase polling rate (#12369)
- [#12202](https://github.com/MetaMask/metamask-mobile/pull/12202): refactor: update swaps quote poll count (#12202)
- [#10743](https://github.com/MetaMask/metamask-mobile/pull/10743): chore: @metamask/swaps-controller v9 -> v10 (#10743)
- [#12238](https://github.com/MetaMask/metamask-mobile/pull/12238): chore: update codeowners (#12238)
- [#12416](https://github.com/MetaMask/metamask-mobile/pull/12416): chore: Chore/update accounts controller messenger code owner (#12416)
- [#12366](https://github.com/MetaMask/metamask-mobile/pull/12366): chore: #12184 MVP split engine file (#12366)
- [#12362](https://github.com/MetaMask/metamask-mobile/pull/12362): chore: Unit tests for tags approval controller undefined (#12362)
- [#12332](https://github.com/MetaMask/metamask-mobile/pull/12332): chore: do not show staked eth balance when balance is zero on homepage or asset detail (#12332)
- [#12413](https://github.com/MetaMask/metamask-mobile/pull/12413): chore: simplify cicd rls script (#12413)
- [#12334](https://github.com/MetaMask/metamask-mobile/pull/12334): chore: updating filter icon (#12334)

### Fixed

- [#12313](https://github.com/MetaMask/metamask-mobile/pull/12313): fix: Remove run all tests section (#12313)
- [#12489](https://github.com/MetaMask/metamask-mobile/pull/12489): fix: replace end of navigation init and UIStartup span (#12489)
- [#12331](https://github.com/MetaMask/metamask-mobile/pull/12331): fix: tags pending approvals receiving undefined (#12331)
- [#10486](https://github.com/MetaMask/metamask-mobile/pull/10486): fix: limit ReactNativeWebview message size (#10486)
- [#12478](https://github.com/MetaMask/metamask-mobile/pull/12478): fix: incorrect event source in analytics and connection (#12478)
- [#10786](https://github.com/MetaMask/metamask-mobile/pull/10786): fix: added icon to walletconnect metadata (#10786)
- [#12455](https://github.com/MetaMask/metamask-mobile/pull/12455): fix: gas fee edit from swaps (#12455)
- [#12370](https://github.com/MetaMask/metamask-mobile/pull/12370): fix: Fix copy of ""Network fee"" on approval (#12370)
- [#12273](https://github.com/MetaMask/metamask-mobile/pull/12273): fix: Disable confirm button if `transactionMeta` is undefined (#12273)
- [#12367](https://github.com/MetaMask/metamask-mobile/pull/12367): fix: app crashing after send or swap (#12367)
- [#12446](https://github.com/MetaMask/metamask-mobile/pull/12446): fix: update wallet_addEthereumChain.js with correct MetricsEventBuilder (#12446)
- [#12180](https://github.com/MetaMask/metamask-mobile/pull/12180): fix: trackevent enabled is undefined (#12180)
- [#12315](https://github.com/MetaMask/metamask-mobile/pull/12315): fix: e2e: ensure Decrypt button is displayed (#12315)
- [#12402](https://github.com/MetaMask/metamask-mobile/pull/12402): fix: fix missing variable patch (#12402)
- [#12319](https://github.com/MetaMask/metamask-mobile/pull/12319): fix: hide rpc url selector for networks with one rpc (#12319)
- [#12371](https://github.com/MetaMask/metamask-mobile/pull/12371): fix: fix patch missing variable sentry error (#12371)
- [#12375](https://github.com/MetaMask/metamask-mobile/pull/12375): fix: breaking selector due to missing controller state (#12375)

## [7.36.0]

### Added

- [#12015](https://github.com/MetaMask/metamask-mobile/pull/12015): feat: 1957 crash screen redesign (#12015)
- [#12110](https://github.com/MetaMask/metamask-mobile/pull/12110): feat: display staking transaction methods (#12110)
- [#12290](https://github.com/MetaMask/metamask-mobile/pull/12290): feat: STAKE-827: track additional pooled staking events (#12290)
- [#12280](https://github.com/MetaMask/metamask-mobile/pull/12280): feat: add loading skeleton for staking banners (#12280)
- [#12245](https://github.com/MetaMask/metamask-mobile/pull/12245): feat: add gas impact modal to stake confirmation input view (#12245)
- [#12263](https://github.com/MetaMask/metamask-mobile/pull/12263): feat: conditionally display stake/earn text based on pooled staking feature flag (#12261) (#12263)
- [#12146](https://github.com/MetaMask/metamask-mobile/pull/12146): feat: add staked ETH to metamask mobile homepage and account list menu (#12146)
- [#12261](https://github.com/MetaMask/metamask-mobile/pull/12261): feat: conditionally display stake/earn text based on pooled staking feature flag (#12261)
- [#12247](https://github.com/MetaMask/metamask-mobile/pull/12247): feat: update input colors and text formatting (#12247)
- [#12210](https://github.com/MetaMask/metamask-mobile/pull/12210): chore: disable pooled staking feature flag (#12210)
- [#12144](https://github.com/MetaMask/metamask-mobile/pull/12144): feat: add staking events (#12144)
- [#12268](https://github.com/MetaMask/metamask-mobile/pull/12268): feat: multichain currency rate polling (#12268)
- [#11808](https://github.com/MetaMask/metamask-mobile/pull/11808): feat: Token Network Filter UI [Mobile] (#11808)
- [#12171](https://github.com/MetaMask/metamask-mobile/pull/12171): feat: multichain polling hook (#12171)
- [#12168](https://github.com/MetaMask/metamask-mobile/pull/12168): feat(2808): improvements-and-small-features-and-small-fixes-that-still-needed-to-be-added-to-edit-permissions (#12168)
- [#11590](https://github.com/MetaMask/metamask-mobile/pull/11590): feat(2796): permission settings replace some of the mock data by real data (#11590)
- [#11511](https://github.com/MetaMask/metamask-mobile/pull/11511): feat: display snap name (#11511)
- [#12145](https://github.com/MetaMask/metamask-mobile/pull/12145): feat: disable wallet buttons for accounts that cannot sign transactions (#12145)
- [#12057](https://github.com/MetaMask/metamask-mobile/pull/12057): feat: team-label-token (#12057)
- [#11836](https://github.com/MetaMask/metamask-mobile/pull/11836): feat: upgrade @metamask/eth-ledger-bridge-keyring (#11836)

### Changed

- [#11898](https://github.com/MetaMask/metamask-mobile/pull/11898): chore: New Crowdin translations by Github Action (#11898)
- [#12292](https://github.com/MetaMask/metamask-mobile/pull/12292): chore: Allow for higher versions of ruby (#12292)
- [#12291](https://github.com/MetaMask/metamask-mobile/pull/12291): chore: Remove notifications logic from wallet view (#12276) (#12291)
- [#12271](https://github.com/MetaMask/metamask-mobile/pull/12271): chore: Cache node installed via nvm on Bitrise (#12271)
- [#12121](https://github.com/MetaMask/metamask-mobile/pull/12121): chore: udpate LSMinimumSystemVersion (#12121)
- [#11658](https://github.com/MetaMask/metamask-mobile/pull/11658): chore: 8618 reduce enzyme usage in unit test by 25 (#11658)
- [#12257](https://github.com/MetaMask/metamask-mobile/pull/12257): refactor: remove global network usage from petnames (#12257)
- [#11996](https://github.com/MetaMask/metamask-mobile/pull/11996): chore: upgrade signature controller to remove global network (#11996)
- [#12274](https://github.com/MetaMask/metamask-mobile/pull/12274): chore: Update naming for returning a txHash asap for smart transactions (#12274)
- [#12287](https://github.com/MetaMask/metamask-mobile/pull/12287): docs: update onboarding readme (#12287)
- [#12234](https://github.com/MetaMask/metamask-mobile/pull/12234): chore: add unit test for native currency validation (#12234)
- [#12237](https://github.com/MetaMask/metamask-mobile/pull/12237): chore: Remove GoogleService files from git cache (#12237)
- [#12178](https://github.com/MetaMask/metamask-mobile/pull/12178): chore: upgrade assets-controllers to v41 (#12178)
- [#12209](https://github.com/MetaMask/metamask-mobile/pull/12209): chore: Modify gitignore to include generated ios/plist files (#12209)
- [#12286](https://github.com/MetaMask/metamask-mobile/pull/12286): chore: Add tags to UI Startup sentry transaction (#12286)
- [#12276](https://github.com/MetaMask/metamask-mobile/pull/12276): chore: Remove notifications logic from wallet view (#12276)
- [#12174](https://github.com/MetaMask/metamask-mobile/pull/12174): chore: Remove navigation instrumentation (#12174)
- [#12211](https://github.com/MetaMask/metamask-mobile/pull/12211): chore: disable pooled staking release for v7.35.0 (#12211)
- [#12194](https://github.com/MetaMask/metamask-mobile/pull/12194): chore: cicd error handling (#12194)
- [#12192](https://github.com/MetaMask/metamask-mobile/pull/12192): chore: fix release pr fixes (#12192)
- [#12175](https://github.com/MetaMask/metamask-mobile/pull/12175): chore: cicd - propagate changes to release pr from scripts (#12175)
- [#12225](https://github.com/MetaMask/metamask-mobile/pull/12225): chore: bump `@metamask/ppom-validator` to `0.35.1` (#12225)

### Fixed

- [#12166](https://github.com/MetaMask/metamask-mobile/pull/12166): fix: remove SmokeNotifications tests for android on smoke tests pipeline (#12166)
- [#12217](https://github.com/MetaMask/metamask-mobile/pull/12217): fix: e2e: use different wallet SRP for non accounts tests (#12217)
- [#12197](https://github.com/MetaMask/metamask-mobile/pull/12197): fix: E2E: quarantine import-wallet-account tests (#12197)
- [#12250](https://github.com/MetaMask/metamask-mobile/pull/12250): fix: Add migration to fix NotificationServicesController bug (#12219) (#12250)
- [#12232](https://github.com/MetaMask/metamask-mobile/pull/12232): fix: e2e re-enable notifications android workflow (#12232)
- [#12219](https://github.com/MetaMask/metamask-mobile/pull/12219): fix: Add migration to fix NotificationServicesController bug (#12219)
- [#12120](https://github.com/MetaMask/metamask-mobile/pull/12120): fix: Onboarding failing biometrics locks screen for user instead of disabling biometrics and continuing with the onboarding (#12120)
- [#12177](https://github.com/MetaMask/metamask-mobile/pull/12177): fix: Create migration 59 to fix undefined selectedAccount (#12177)
- [#12311](https://github.com/MetaMask/metamask-mobile/pull/12311): fix: transaction reject crash (#12311)
- [#12228](https://github.com/MetaMask/metamask-mobile/pull/12228): fix: Update `transaction-controller` version (#12228)
- [#12100](https://github.com/MetaMask/metamask-mobile/pull/12100): fix: hide internal transaction origins in confirmation views (#12100)
- [#12283](https://github.com/MetaMask/metamask-mobile/pull/12283): fix: ensure unstake max will unstake all user shares (#12283)
- [#12231](https://github.com/MetaMask/metamask-mobile/pull/12231): fix: added ScrollView to stake confirmation review screen (#12231)
- [#12255](https://github.com/MetaMask/metamask-mobile/pull/12255): fix: fix displayed selected rpc for linea (#12255)
- [#11693](https://github.com/MetaMask/metamask-mobile/pull/11693): fix: relax network symbol length validation (#11693)
- [#12205](https://github.com/MetaMask/metamask-mobile/pull/12205): fix: add contractBalances as dependency (#12205)
- [#12235](https://github.com/MetaMask/metamask-mobile/pull/12235): fix: privacy mode is enabled in account selector by params (#12235)
- [#12282](https://github.com/MetaMask/metamask-mobile/pull/12282): fix: Lock ruby version to 3.1.6 and bump pod to 1.16.2 (#12282)

## [7.35.1]

### Fixed

- [#12331](https://github.com/MetaMask/metamask-mobile/pull/12331): fix: tags pending approvals receiving undefined (#12331)

## [7.35.0]

### Added

- [#12107](https://github.com/MetaMask/metamask-mobile/pull/12107): feat: Add re-simulation feature (#12107)
- [#11770](https://github.com/MetaMask/metamask-mobile/pull/11770): feat: enable Security Alerts API (#11770)
- [#11812](https://github.com/MetaMask/metamask-mobile/pull/11812): feat: network value component for re-designed confirmation pages (#11812)
- [#11608](https://github.com/MetaMask/metamask-mobile/pull/11608): feat: enable sentry performance reporting on local development builds (#11608)
- [#11190](https://github.com/MetaMask/metamask-mobile/pull/11190): feat(NOTIFY-1096): add account syncing (#11190)
- [#12138](https://github.com/MetaMask/metamask-mobile/pull/12138): feat: update staking eligibility and unstaking time details (#12138)
- [#12084](https://github.com/MetaMask/metamask-mobile/pull/12084): feat: enable mobile native pooled staking experience for users (#12084)
- [#12025](https://github.com/MetaMask/metamask-mobile/pull/12025): feat: add max tooltip for staking with gas fee consideration (#12025)
- [#12018](https://github.com/MetaMask/metamask-mobile/pull/12018): feat: STAKE-802 integrate claim sdk method (#12018)
- [#11962](https://github.com/MetaMask/metamask-mobile/pull/11962): feat: STAKE-803 integrate unstake method from sdk (#11962)
- [#11611](https://github.com/MetaMask/metamask-mobile/pull/11611): feat: STAKE-841 build unstake review confirmation screen (#11611)
- [#11891](https://github.com/MetaMask/metamask-mobile/pull/11891): feat: add live staking data with geo-blocking support (#11891)
- [#11845](https://github.com/MetaMask/metamask-mobile/pull/11845): feat: STAKE-805 integrate stake method (#11845)
- [#11668](https://github.com/MetaMask/metamask-mobile/pull/11668): feat: Add StakeSdkProvider with stake-sdk (#11668)
- [#11963](https://github.com/MetaMask/metamask-mobile/pull/11963): feat(2808): edit network permissions (#11963)
- [#12060](https://github.com/MetaMask/metamask-mobile/pull/12060): feat: add favorites to browser menu (#12060)
- [#11965](https://github.com/MetaMask/metamask-mobile/pull/11965): feat(3417): sensitive text component (#11965)
- [#11928](https://github.com/MetaMask/metamask-mobile/pull/11928): feat: Add ApeChain network and token icons (#11928)
- [#11926](https://github.com/MetaMask/metamask-mobile/pull/11926): feat: add new default networks (#11926)
- [#11618](https://github.com/MetaMask/metamask-mobile/pull/11618): feat: Sort/Import Tokens in Mobile (#11618)
- [#12098](https://github.com/MetaMask/metamask-mobile/pull/12098): feat: automate build versions (#12098)
- [#11933](https://github.com/MetaMask/metamask-mobile/pull/11933): feat: cicd - create rls draft on tags (#11933)
- [#11935](https://github.com/MetaMask/metamask-mobile/pull/11935): feat: 1940 add custom sentry span (#11935)
- [#11451](https://github.com/MetaMask/metamask-mobile/pull/11451): feat: Remove Account Snap Warning (Flask) (#11451)

### Changed

- [#11911](https://github.com/MetaMask/metamask-mobile/pull/11911): chore: upgrade signature controller to remove message managers (#11911)
- [#12150](https://github.com/MetaMask/metamask-mobile/pull/12150): chore: upgrade nodejs to v20.17 (#12150)
- [#12135](https://github.com/MetaMask/metamask-mobile/pull/12135): test: Move files to Settings folder (#12135)
- [#12102](https://github.com/MetaMask/metamask-mobile/pull/12102): test: Move files to Network folder (#12102)
- [#12093](https://github.com/MetaMask/metamask-mobile/pull/12093): test: Move files to Receive folder (#12093)
- [#12090](https://github.com/MetaMask/metamask-mobile/pull/12090): test: Move files to Transactions folder (#12090)
- [#11797](https://github.com/MetaMask/metamask-mobile/pull/11797): test: Refining E2E Testing with API Mocking (#11797)
- [#12103](https://github.com/MetaMask/metamask-mobile/pull/12103): ci: Update bitrise machines (#12103)
- [#12034](https://github.com/MetaMask/metamask-mobile/pull/12034): test: Move files to the Browser folder (#12034)
- [#12062](https://github.com/MetaMask/metamask-mobile/pull/12062): test: change ramps e2e tag (#12062)
- [#12023](https://github.com/MetaMask/metamask-mobile/pull/12023): test: Move portfolio connect out of quarantine (#12023)
- [#12021](https://github.com/MetaMask/metamask-mobile/pull/12021): test: move terms of use out of qurantine (#12021)
- [#11987](https://github.com/MetaMask/metamask-mobile/pull/11987): test: Detox: add video recording on failure (#11987)
- [#11981](https://github.com/MetaMask/metamask-mobile/pull/11981): chore: explicitely make platform team owners of metrics system (#11981)
- [#11976](https://github.com/MetaMask/metamask-mobile/pull/11976): chore: revert webview focused work (#11976)
- [#11927](https://github.com/MetaMask/metamask-mobile/pull/11927): test: Refactor Advanced Gas fees test to utilize mocks (#11927)
- [#11194](https://github.com/MetaMask/metamask-mobile/pull/11194): chore: addressed lint issues (#11194)
- [#11721](https://github.com/MetaMask/metamask-mobile/pull/11721): chore(sentry): don't report `AxiosError: Network Error` (#11721)
- [#11842](https://github.com/MetaMask/metamask-mobile/pull/11842): chore: update release action to not create the release branch but just open PR (#11842)
- [#11356](https://github.com/MetaMask/metamask-mobile/pull/11356): chore: New Crowdin translations by Github Action (#11356)
- [#12116](https://github.com/MetaMask/metamask-mobile/pull/12116): chore: upgrade assets-controllers to v38 (#12116)
- [#11988](https://github.com/MetaMask/metamask-mobile/pull/11988): chore: upgrade assets-controllers v37 (#11988)
- [#11971](https://github.com/MetaMask/metamask-mobile/pull/11971): chore: upgrade assets-controllers to v36.0.0 (#11971)
- [#11903](https://github.com/MetaMask/metamask-mobile/pull/11903): chore: upgrade assets-controllers to v35.0.0 (#11903)
- [#11803](https://github.com/MetaMask/metamask-mobile/pull/11803): chore: Add Gravity network icon (#11803)
- [#11860](https://github.com/MetaMask/metamask-mobile/pull/11860): chore: upgrade assets controllers v34.0.0 (#11860)
- [#11800](https://github.com/MetaMask/metamask-mobile/pull/11800): chore: upgrade assets controllers v33.0.0 (#11800)
- [#12142](https://github.com/MetaMask/metamask-mobile/pull/12142): chore: update cicd perms (#12142)
- [#12140](https://github.com/MetaMask/metamask-mobile/pull/12140): chore: update cicd refs for build version automation (#12140)
- [#12137](https://github.com/MetaMask/metamask-mobile/pull/12137): chore: update ref (#12137)
- [#12136](https://github.com/MetaMask/metamask-mobile/pull/12136): chore: v0.2.0 build ver (#12136)
- [#11591](https://github.com/MetaMask/metamask-mobile/pull/11591): test: skip onramp onboarding for returning user (#11591)
- [#10952](https://github.com/MetaMask/metamask-mobile/pull/10952): refactor(ramp): update ramp copy (#10952)
- [#11573](https://github.com/MetaMask/metamask-mobile/pull/11573): test: initial off-ramp test to show build quote screen (#11573)
- [#12039](https://github.com/MetaMask/metamask-mobile/pull/12039): chore(devDeps): detox@20.27.2->^20.27.5 (#12039)
- [#11758](https://github.com/MetaMask/metamask-mobile/pull/11758): chore: update setup docs and google-services-example.json (#11758)
- [#12030](https://github.com/MetaMask/metamask-mobile/pull/12030): refactor: replace swap slider with swap button (#12030)
- [#11977](https://github.com/MetaMask/metamask-mobile/pull/11977): chore: add tags to custom spans (#11977)
- [#11862](https://github.com/MetaMask/metamask-mobile/pull/11862): chore: revert sentry traces (#11862)
- [#11782](https://github.com/MetaMask/metamask-mobile/pull/11782): chore: Dependencies cleanup (#11782)
- [#11861](https://github.com/MetaMask/metamask-mobile/pull/11861): chore: revert custom tags sentry (#11861)
- [#10950](https://github.com/MetaMask/metamask-mobile/pull/10950): chore: Add a new transaction event (#10950)
- [#11986](https://github.com/MetaMask/metamask-mobile/pull/11986): test: Refactor SendLinkView.js & TokenOverview.js files to follow page object model (#11986)
- [#11983](https://github.com/MetaMask/metamask-mobile/pull/11983): test: Refactor EditAccountNameView.js & EnableSecurityChecksView.js files to follow page object model (#11983)

### Fixed

- [#11768](https://github.com/MetaMask/metamask-mobile/pull/11768): fix: fix non regression tests (#11768)
- [#11947](https://github.com/MetaMask/metamask-mobile/pull/11947): fix: Fiat value displayed only for the native token in simulations (#11947)
- [#12126](https://github.com/MetaMask/metamask-mobile/pull/12126): fix: Reuse main logic for migration52 (#12126)
- [#12125](https://github.com/MetaMask/metamask-mobile/pull/12125): fix: revert the nvm update (#12125)
- [#12112](https://github.com/MetaMask/metamask-mobile/pull/12112): fix: Update TransactionProtectionModal import (#12112)
- [#12115](https://github.com/MetaMask/metamask-mobile/pull/12115): fix: Reapply migration 52 to fix undefined selectedAccount (#12115)
- [#12089](https://github.com/MetaMask/metamask-mobile/pull/12089): fix: Contacts disappearing (#12089)
- [#11993](https://github.com/MetaMask/metamask-mobile/pull/11993): fix: Fix/10812 redundant source map upload (#11993)
- [#11985](https://github.com/MetaMask/metamask-mobile/pull/11985): fix: migrate from decommissioned ipfs gateway to new one (#11985)
- [#11993](https://github.com/MetaMask/metamask-mobile/pull/11993): fix: Fix/10812 redundant source map upload (#11993)
- [#11929](https://github.com/MetaMask/metamask-mobile/pull/11929): fix: Resolve secp256k1 package (#11929)
- [#11551](https://github.com/MetaMask/metamask-mobile/pull/11551): fix: Migrate Login view to use design system components (and fix blur error) (#11551)
- [#11958](https://github.com/MetaMask/metamask-mobile/pull/11958): fix: update default search engine to google (#11958)
- [#12010](https://github.com/MetaMask/metamask-mobile/pull/12010): fix: toBignumber conversion error with high balance (#12010)
- [#12016](https://github.com/MetaMask/metamask-mobile/pull/12016): fix(11895): remove duplicate networks in incoming transactions settings (#12016)
- [#11723](https://github.com/MetaMask/metamask-mobile/pull/11723): fix(1702): update onboarding settings UI (#11723)
- [#11671](https://github.com/MetaMask/metamask-mobile/pull/11671): fix(3245): green checkbox vertical alignment on the create pw screen (#11671)
- [#12109](https://github.com/MetaMask/metamask-mobile/pull/12109): fix: patch tokenDetectionController tokensChainsCache updates (#12109)
- [#12108](https://github.com/MetaMask/metamask-mobile/pull/12108): fix: fix missing token balances (#12108)
- [#12074](https://github.com/MetaMask/metamask-mobile/pull/12074): fix: fix naming for linea and mainnet (#12074)
- [#12064](https://github.com/MetaMask/metamask-mobile/pull/12064): fix: fix assets detail page crash (#12064)
- [#12036](https://github.com/MetaMask/metamask-mobile/pull/12036): fix: fix block explorer return button (#12036)
- [#11995](https://github.com/MetaMask/metamask-mobile/pull/11995): fix: prevent Duplicate Block Explorer Entries and Ensure Proper Input Validation (#11995)
- [#11923](https://github.com/MetaMask/metamask-mobile/pull/11923): fix: fix render detected tokens section (#11923)
- [#11864](https://github.com/MetaMask/metamask-mobile/pull/11864): fix: fix copy token address from token details page (#11864)
- [#12143](https://github.com/MetaMask/metamask-mobile/pull/12143): Cicd fixes build auto (#12143)
- [#11980](https://github.com/MetaMask/metamask-mobile/pull/11980): fix: eth-json-rpc-filters@^5.1.0->^6.0.1 (#11980)
- [#12048](https://github.com/MetaMask/metamask-mobile/pull/12048): fix: validate chain before send (#12048)
- [#11859](https://github.com/MetaMask/metamask-mobile/pull/11859): fix: stop linea swaps crashing when approval is required (#11859)
- [#12002](https://github.com/MetaMask/metamask-mobile/pull/12002): fix: re renders of wallet view on every navigation action (#12002)
- [#11989](https://github.com/MetaMask/metamask-mobile/pull/11989): fix: Remove unnecessary re renders activity view (#11989)
- [#11769](https://github.com/MetaMask/metamask-mobile/pull/11769): fix: Fix the mobile crash due to ledger bluetooth relative exception (#11769)

## [7.34.1]

### Fixed

- [#12205](https://github.com/MetaMask/metamask-mobile/pull/12205): fix: add contractBalances as dependency
- [#12236](https://github.com/MetaMask/metamask-mobile/pull/12236): fix: Add migration to fix NotificationServicesController bug (#12236)
- [#12228](https://github.com/MetaMask/metamask-mobile/pull/12228): fix: Update transaction-controller version

## [7.34.0]

### Added

- [#11578](https://github.com/MetaMask/metamask-mobile/pull/11578): feat: 1653 first feature flag poc (#11578)
- [#11705](https://github.com/MetaMask/metamask-mobile/pull/11705): feat: Transition from Multiple Networks with Same ChainID to Unique Networks with Distinct ChainIDs and Multiple RPC URLs (#11705)
- [#11685](https://github.com/MetaMask/metamask-mobile/pull/11685): feat: multi rpc modal (#11685)
- [#11651](https://github.com/MetaMask/metamask-mobile/pull/11651): feat: add utm field to app_open event (#11651)
- [#11579](https://github.com/MetaMask/metamask-mobile/pull/11579): feat: 1940 Add custom traces (#11579)
- [#11815](https://github.com/MetaMask/metamask-mobile/pull/11815): feat: Address value component for use in re-designed confirmation pages (#11815)
- [#11737](https://github.com/MetaMask/metamask-mobile/pull/11737): feat: Adding simulation section to personal sign page (#11737)
- [#11736](https://github.com/MetaMask/metamask-mobile/pull/11736): feat: add copy button component (#11736)
- [#11703](https://github.com/MetaMask/metamask-mobile/pull/11703): feat: Adding expandable message section to personal sign page (#11703)
- [#11698](https://github.com/MetaMask/metamask-mobile/pull/11698): feat: add account_network section to re-designed confirmation page (#11698)
- [#11453](https://github.com/MetaMask/metamask-mobile/pull/11453): feat: Add signature tracing (#11453)
- [#11456](https://github.com/MetaMask/metamask-mobile/pull/11456): feat: Add metric for insufficient funds for gas (#11456)
- [#11602](https://github.com/MetaMask/metamask-mobile/pull/11602): feat: adding a basic personal sign page re-designed (#11602)
- [#11572](https://github.com/MetaMask/metamask-mobile/pull/11572): feat: add tooltip component for re-designed confirmation pages (#11572)
- [#11567](https://github.com/MetaMask/metamask-mobile/pull/11567): feat: add url value component for use in re-designed confirmation pages (#11567)
- [#11528](https://github.com/MetaMask/metamask-mobile/pull/11528): feat: expandable section for use in confirmation pages (#11528)
- [#11605](https://github.com/MetaMask/metamask-mobile/pull/11605): feat: STAKE-824: [FE] build staking input confirmation screen (#11605)
- [#11607](https://github.com/MetaMask/metamask-mobile/pull/11607): feat: add unstake screen for mobile staking (#11607)
- [#11660](https://github.com/MetaMask/metamask-mobile/pull/11660): feat: added ReactNode support for KeyValueRow tooltip and label (#11660)
- [#11733](https://github.com/MetaMask/metamask-mobile/pull/11733): feat: add references and utils for delete storage key (#11733)
- [#11653](https://github.com/MetaMask/metamask-mobile/pull/11653): feat: Implement partially local Snaps execution environment (#11653)
- [#11127](https://github.com/MetaMask/metamask-mobile/pull/11127): feat(1702): enhanced onboarding settings config (#11127)

### Changed

- [#11852](https://github.com/MetaMask/metamask-mobile/pull/11852): chore: readd date time picker (#11852)
- [#11831](https://github.com/MetaMask/metamask-mobile/pull/11831): chore: Add conditional for api specification test (#11831)
- [#11838](https://github.com/MetaMask/metamask-mobile/pull/11838): chore: revert tags commit (#11838)
- [#11839](https://github.com/MetaMask/metamask-mobile/pull/11839): chore: Revert custom span (#11839)
- [#11824](https://github.com/MetaMask/metamask-mobile/pull/11824): chore: enable Sentry performance reports on QA builds (#11824)
- [#11825](https://github.com/MetaMask/metamask-mobile/pull/11825): chore: fix create qa build pipeline (#11825)
- [#11805](https://github.com/MetaMask/metamask-mobile/pull/11805): chore: Update Sentry Performance Sampling utils.js (#11805)
- [#11710](https://github.com/MetaMask/metamask-mobile/pull/11710): ci: Enable Detox E2E in Release mode (#11710)
- [#11757](https://github.com/MetaMask/metamask-mobile/pull/11757): docs: update e2e best practices link in readme (#11757)
- [#11746](https://github.com/MetaMask/metamask-mobile/pull/11746): "chore: Revert ""chore(js-ts): Convert app/util/test/ganache-contract-address-registry.js to TypeScript"" (#11746)"
- [#11694](https://github.com/MetaMask/metamask-mobile/pull/11694): test: Refactor ImportAccountView.js and LoginView.js files (#11694)
- [#11136](https://github.com/MetaMask/metamask-mobile/pull/11136): chore(build): let adb server live between builds (#11136)
- [#11669](https://github.com/MetaMask/metamask-mobile/pull/11669): chore: Merge 7.32.0 back into main (#11669)
- [#11667](https://github.com/MetaMask/metamask-mobile/pull/11667): chore: add 9f9a11 to git blame ignore (#11667)
- [#11262](https://github.com/MetaMask/metamask-mobile/pull/11262): chore: Refactor event tracking method (#11262)
- [#11520](https://github.com/MetaMask/metamask-mobile/pull/11520): chore: Reorganize `PortfolioBalance` (#11520)
- [#11761](https://github.com/MetaMask/metamask-mobile/pull/11761): chore: Add support for custom network images (#11761)
- [#11687](https://github.com/MetaMask/metamask-mobile/pull/11687): chore: upgrade assets controllers v32.0.0 (#11687)
- [#11471](https://github.com/MetaMask/metamask-mobile/pull/11471): chore: Componetize `Tokens` screen (#11471)
- [#11751](https://github.com/MetaMask/metamask-mobile/pull/11751): chore(devDeps): remove unused react-native-cli (#11751)
- [#11623](https://github.com/MetaMask/metamask-mobile/pull/11623): chore: Add tags to custom traces (#11623)
- [#11788](https://github.com/MetaMask/metamask-mobile/pull/11788): chore(ramp): upgrade sdk to 1.28.5 (#11788)
- [#11421](https://github.com/MetaMask/metamask-mobile/pull/11421): refactor(ramp): use list item from the components library (#11421)
- [#11086](https://github.com/MetaMask/metamask-mobile/pull/11086): test: initial ramps E2E test to build quote (#11086)
- [#11745](https://github.com/MetaMask/metamask-mobile/pull/11745): ci: fix get-next-semver-version invocation in add-release-label (#11745)
- [#11756](https://github.com/MetaMask/metamask-mobile/pull/11756): chore: Remove obsolete CI step (#11756)
- [#11656](https://github.com/MetaMask/metamask-mobile/pull/11656): chore: rename `isprivateConnection` to `isPrivateConnection ` (#11656)
- [#11546](https://github.com/MetaMask/metamask-mobile/pull/11546): chore(js-ts): Convert app/components/Views/AndroidBackHandler/index.js to TypeScript (#11546)
- [#11629](https://github.com/MetaMask/metamask-mobile/pull/11629): chore(js-ts): Convert app/util/transaction-reducer-helpers.js to TypeScript (#11629)
- [#11661](https://github.com/MetaMask/metamask-mobile/pull/11661): chore(js-ts): Convert app/components/Base/HorizontalSelector/index.js to TypeScript (#11661)
- [#11650](https://github.com/MetaMask/metamask-mobile/pull/11650): chore(js-ts): Convert app/components/UI/Swaps/components/InfoModal.js to TypeScript (#11650)
- [#11406](https://github.com/MetaMask/metamask-mobile/pull/11406): chore(js-ts): Convert app/util/test/ganache-contract-address-registry.js to TypeScript (#11406)
- [#11556](https://github.com/MetaMask/metamask-mobile/pull/11556): chore(js-ts): Convert app/components/UI/Fox/index.js to TypeScript (#11556)
- [#11525](https://github.com/MetaMask/metamask-mobile/pull/11525): chore(js-ts): Convert app/components/UI/StyledButton/styledButtonStyles.js to TypeScript (#11525)
- [#11385](https://github.com/MetaMask/metamask-mobile/pull/11385): refactor(1702-5): incoming transactions and network details settings into reusable components (#11385)
- [#11381](https://github.com/MetaMask/metamask-mobile/pull/11381): refactor(1702-4): ipfs gateway settings and display nft media settings components (#11381)
- [#11614](https://github.com/MetaMask/metamask-mobile/pull/11614): chore: Update UX CodeOwners responsibilities (#11614)
- [#11709](https://github.com/MetaMask/metamask-mobile/pull/11709): chore: updating codeowners to remove mobile-devs from component library (#11709)
- [#11617](https://github.com/MetaMask/metamask-mobile/pull/11617): chore: chore/7.33.0-Changelog (#11617)

### Fixed

- [#11787](https://github.com/MetaMask/metamask-mobile/pull/11787): fix: non deterministic date in test (#11787)
- [#11762](https://github.com/MetaMask/metamask-mobile/pull/11762): fix: snapshot of test to enable ci (#11762)
- [#11632](https://github.com/MetaMask/metamask-mobile/pull/11632): fix: add custom and add popular network detox test (#11632)
- [#11794](https://github.com/MetaMask/metamask-mobile/pull/11794): fix(action): github action to apply release label is broken (#11794)
- [#11760](https://github.com/MetaMask/metamask-mobile/pull/11760): fix: Android: Splash screen always showing behind other screens (#11760)
- [#11741](https://github.com/MetaMask/metamask-mobile/pull/11741): fix: rollback originWhitelist (#11741)
- [#11722](https://github.com/MetaMask/metamask-mobile/pull/11722): fix: add safe space on the left of bell icon (#11722)
- [#11139](https://github.com/MetaMask/metamask-mobile/pull/11139): fix: Reuse mmkv instance once created (#11139)
- [#11532](https://github.com/MetaMask/metamask-mobile/pull/11532): fix: fix approve flow on swap (#11532)
- [#11718](https://github.com/MetaMask/metamask-mobile/pull/11718): fix: token list after switching networks (#11718)
- [#11495](https://github.com/MetaMask/metamask-mobile/pull/11495): fix: fix asset symbol for incoming tx (#11495)
- [#11664](https://github.com/MetaMask/metamask-mobile/pull/11664): fix: Duplicate key in Settings and Privacy (#11664)
- [#11412](https://github.com/MetaMask/metamask-mobile/pull/11412): fix: upgrade assets-controllers to v31 (#11412)
- [#11631](https://github.com/MetaMask/metamask-mobile/pull/11631): fix: hotfix/issue-11539 (#11631)
- [#11834](https://github.com/MetaMask/metamask-mobile/pull/11834): fix: invalid wallet connect detection (wrong hostname in connect modal) (#11834)
- [#11701](https://github.com/MetaMask/metamask-mobile/pull/11701): fix: connect request completed source validation (#11701)
- [#11603](https://github.com/MetaMask/metamask-mobile/pull/11603): fix: await for detect origin before logging analytics (#11603)
- [#11595](https://github.com/MetaMask/metamask-mobile/pull/11595): fix: fix signature requested analytics (#11595)
- [#11592](https://github.com/MetaMask/metamask-mobile/pull/11592): fix: fix walletconnect source validation (#11592)
- [#11802](https://github.com/MetaMask/metamask-mobile/pull/11802): fix: persist token and phishing list (#11802)
- [#11729](https://github.com/MetaMask/metamask-mobile/pull/11729): fix: support for batch of signature requests (#11729)
- [#11771](https://github.com/MetaMask/metamask-mobile/pull/11771): fix: Add `preferContractSymbol` to Name components (#11771)
- [#11730](https://github.com/MetaMask/metamask-mobile/pull/11730): fix: Use domain for origin pill component (#11730)
- [#11620](https://github.com/MetaMask/metamask-mobile/pull/11620): fix: Fix unwanted `IncompleteAssetDisplayed` events (#11620)
- [#11792](https://github.com/MetaMask/metamask-mobile/pull/11792): fix: use object styling in Title component (#11792)
- [#11633](https://github.com/MetaMask/metamask-mobile/pull/11633): fix(ramp): disable button while confirming off-ramp transaction (#11633)
- [#11431](https://github.com/MetaMask/metamask-mobile/pull/11431): fix: refactor notifications unit tests (#11431)

## [7.33.2]

### Fixed

- [#10952](https://github.com/MetaMask/metamask-mobile/pull/10952): refactor(ramp): update ramp copy (#10952)

## [7.33.1]

### Fixed

- [#12073](https://github.com/MetaMask/metamask-mobile/pull/12073): feat: Simulation re-trigger (#12073)

## [7.33.0]

### Added

- [#11507](https://github.com/MetaMask/metamask-mobile/pull/11507): feat: 10550 Re-introduce test for measuring cold app start + JS bundle load time (#11507)
- [#11318](https://github.com/MetaMask/metamask-mobile/pull/11318): feat: app event manager and attribution id parameters (#11318)
- [#11445](https://github.com/MetaMask/metamask-mobile/pull/11445): feat: add the abilty to hide the disconnect all button as well as showing and hiding the accounts row when necessary (#11445)
- [#11386](https://github.com/MetaMask/metamask-mobile/pull/11386): feat(3299): add tracking to network switching and confirmation (#11386)
- [#11239](https://github.com/MetaMask/metamask-mobile/pull/11239): feat(2739): permission summary view gets the ability to disconnect all (#11239)
- [#11497](https://github.com/MetaMask/metamask-mobile/pull/11497): feat: simple key-> value component for text value type (#11497)
- [#11478](https://github.com/MetaMask/metamask-mobile/pull/11478): feat: adding title to confirmation page (#11478)
- [#11477](https://github.com/MetaMask/metamask-mobile/pull/11477): feat: adding footer section to confirmation page (#11477)
- [#11454](https://github.com/MetaMask/metamask-mobile/pull/11454): feat: adding very basic confirmation page hidden behind env var (#11454)
- [#11083](https://github.com/MetaMask/metamask-mobile/pull/11083): feat: bundle size check (#11083)
- [#11452](https://github.com/MetaMask/metamask-mobile/pull/11452): feat(ds): add ListItem top and bottom accessories (#11452)
- [#11387](https://github.com/MetaMask/metamask-mobile/pull/11387): feat: 10550 Re-introduce test for measuring cold app start + JS bundle load time (#11387)
- [#11464](https://github.com/MetaMask/metamask-mobile/pull/11464): feat: STAKE-804: build pooled staking empty state component (#11464)
- [#11399](https://github.com/MetaMask/metamask-mobile/pull/11399): feat: add learn more modal component for staking (#11399)
- [#11261](https://github.com/MetaMask/metamask-mobile/pull/11261): feat: STAKE-822 build your balance component (#11261)
- [#11294](https://github.com/MetaMask/metamask-mobile/pull/11294): feat: added KeyValueRow to component-library/components-temp (#11294)
- [#11185](https://github.com/MetaMask/metamask-mobile/pull/11185): feat: display ""Snaps (Beta)"" decorator tag in accounts list (#11185)
- [#10829](https://github.com/MetaMask/metamask-mobile/pull/10829): feat: Eth snap keyring (#10829)
- [#11455](https://github.com/MetaMask/metamask-mobile/pull/11455): feat: bootstrap a reset notifications feat (#11455)
- [#11466](https://github.com/MetaMask/metamask-mobile/pull/11466): feat: add support for external links (#11466)
- [#11429](https://github.com/MetaMask/metamask-mobile/pull/11429): feat: add timeout handler (#11429)
- [#11427](https://github.com/MetaMask/metamask-mobile/pull/11427): feat: add feature announcements channel for android (#11427)
- [#11069](https://github.com/MetaMask/metamask-mobile/pull/11069): feat: react native fast crypto for notifications (#11069)

### Changed

- [#11379](https://github.com/MetaMask/metamask-mobile/pull/11379): refactor: rename the feature flag since it had a typo (#11379)
- [#11615](https://github.com/MetaMask/metamask-mobile/pull/11615): chore: exclude temporarily sentry SDK advisory (#11615)
- [#11577](https://github.com/MetaMask/metamask-mobile/pull/11577): ci: disable swaps e2e workflow (#11577)
- [#11350](https://github.com/MetaMask/metamask-mobile/pull/11350): chore: replace Segment patch by plugin (#11350)
- [#11287](https://github.com/MetaMask/metamask-mobile/pull/11287): chore: remove unused events (#11287)
- [#11517](https://github.com/MetaMask/metamask-mobile/pull/11517): chore: delete swaps token charts test (#11517)
- [#11515](https://github.com/MetaMask/metamask-mobile/pull/11515): test: disable swaps token charts regression tests (#11515)
- [#11504](https://github.com/MetaMask/metamask-mobile/pull/11504): chore: revert measuring with react native performance (#11504)
- [#11458](https://github.com/MetaMask/metamask-mobile/pull/11458): test: Merge Import Token flow methods and ids in just one folder and files (#11458)
- [#11492](https://github.com/MetaMask/metamask-mobile/pull/11492): chore(revert): Prevent redundant Sentry sourcemap uploads (#11492)
- [#11469](https://github.com/MetaMask/metamask-mobile/pull/11469): test: Remove E2E Tests for Features No Longer Present in the App (#11469)
- [#11425](https://github.com/MetaMask/metamask-mobile/pull/11425): chore: Add skip label to bypass sonarcloud (#11425)
- [#11275](https://github.com/MetaMask/metamask-mobile/pull/11275): chore(js-ts): Convert app/util/bytes.js to TypeScript (#11275)
- [#11418](https://github.com/MetaMask/metamask-mobile/pull/11418): chore: revert chore(js-ts): Migrate 37 0-error js files (#11418)
- [#10880](https://github.com/MetaMask/metamask-mobile/pull/10880): chore: Enable linting Pods and re-organize setup.mjs file (#10880)
- [#11311](https://github.com/MetaMask/metamask-mobile/pull/11311): chore(js-ts): Convert app/components/UI/Swaps/components/Ratio.js to TypeScript (#11311)
- [#11357](https://github.com/MetaMask/metamask-mobile/pull/11357): chore(js-ts): Convert app/components/Views/PickComponent/index.js to TypeScript (#11357)
- [#11446](https://github.com/MetaMask/metamask-mobile/pull/11446): chore(js-ts): Convert app/components/Views/MediaPlayer/Loader.js to TypeScript (#11446)
- [#11473](https://github.com/MetaMask/metamask-mobile/pull/11473): chore(js-ts): Convert app/components/Base/ModalHandler.js to TypeScript (#11473)
- [#11601](https://github.com/MetaMask/metamask-mobile/pull/11601): chore(js-ts): Convert app/components/Base/ListItem.js to TypeScript (#11601)
- [#11407](https://github.com/MetaMask/metamask-mobile/pull/11407): chore(js-ts): Convert app/util/jsonRpcRequest.js to TypeScript (#11407)
- [#11594](https://github.com/MetaMask/metamask-mobile/pull/11594): chore(js-ts): Convert app/component-library/components/Icons/Icon/scripts/generate-assets.js to TypeScript (#11594)
- [#11523](https://github.com/MetaMask/metamask-mobile/pull/11523): chore(js-ts): Convert app/components/UI/GenericButton/index.ios.js to TypeScript (#11523)
- [#11472](https://github.com/MetaMask/metamask-mobile/pull/11472): chore(js-ts): Convert app/components/UI/FadeView/index.js to TypeScript (#11472)
- [#11476](https://github.com/MetaMask/metamask-mobile/pull/11476): chore(js-ts): Convert app/components/UI/OnboardingProgress/index.js to TypeScript (#11476)
- [#11405](https://github.com/MetaMask/metamask-mobile/pull/11405): chore(js-ts): Convert app/util/browserScripts.js to TypeScript (#11405)
- [#11214](https://github.com/MetaMask/metamask-mobile/pull/11214): chore(js-ts): Migrate 37 0-error js files (#11214)
- [#11271](https://github.com/MetaMask/metamask-mobile/pull/11271): chore(js-ts): Convert app/components/UI/ComponentErrorBoundary/index.js to TypeScript (#11271)
- [#11299](https://github.com/MetaMask/metamask-mobile/pull/11299): chore(js-ts): Convert app/util/validators/index.js to TypeScript (#11299)
- [#11303](https://github.com/MetaMask/metamask-mobile/pull/11303): chore(js-ts): Convert app/components/Base/SelectorButton.js to TypeScript (#11303)
- [#11280](https://github.com/MetaMask/metamask-mobile/pull/11280): chore(js-ts): Convert app/components/UI/GenericButton/index.android.js to TypeScript (#11280)
- [#11273](https://github.com/MetaMask/metamask-mobile/pull/11273): chore(js-ts): Convert app/components/UI/OnboardingScreenWithBg/index.js to TypeScript (#11273)
- [#11272](https://github.com/MetaMask/metamask-mobile/pull/11272): chore(js-ts): Convert app/components/Base/ModalDragger.js to TypeScript (#11272)
- [#11308](https://github.com/MetaMask/metamask-mobile/pull/11308): chore(js-ts): Convert app/components/UI/BlockingActionModal/index.js to TypeScript (#11308)
- [#11305](https://github.com/MetaMask/metamask-mobile/pull/11305): chore(js-ts): Convert app/components/Base/Summary.js to TypeScript (#11305)
- [#11274](https://github.com/MetaMask/metamask-mobile/pull/11274): chore(js-ts): Convert app/components/UI/ConnectHeader/index.js to TypeScript (#11274)
- [#11334](https://github.com/MetaMask/metamask-mobile/pull/11334): chore: chore/7.32.0-Changelog (#11334)
- [#11483](https://github.com/MetaMask/metamask-mobile/pull/11483): chore: refactor e2e (#11483)
- [#11491](https://github.com/MetaMask/metamask-mobile/pull/11491): chore: Add UX CodeOwners responsibilities (#11491)
- [#11364](https://github.com/MetaMask/metamask-mobile/pull/11364): refactor(1702-2): auto detect nft component (#11364)
- [#11363](https://github.com/MetaMask/metamask-mobile/pull/11363): refactor(1702-1): auto detect tokens component (#11363)
- [#11329](https://github.com/MetaMask/metamask-mobile/pull/11329): chore: Add `@MetaMask/metamask-assets` to `CODEOWNERS` (#11329)
- [#10449](https://github.com/MetaMask/metamask-mobile/pull/10449): chore: remove installation of redundant detox-cli in bitrise (#10449)
- [#11111](https://github.com/MetaMask/metamask-mobile/pull/11111): chore(deps): Bump `@metamask/phishing-controller` from `^9.0.0` to `^12.0.1` (#11111)
- [#11375](https://github.com/MetaMask/metamask-mobile/pull/11375): chore(deps): Bump `@metamask/controller-utils` from `^10.0.0` to `^11.3.0` (#11375)
- [#11140](https://github.com/MetaMask/metamask-mobile/pull/11140): chore(deps): Bump `@metamask/smart-transactions-controller` from `11.0.0` to `^13.0.0` (#11140)
- [#11351](https://github.com/MetaMask/metamask-mobile/pull/11351): chore(deps): Bump `@metamask/keyring-controller` from `^16.1.0` to `^17.2.1` (#11351)
- [#11104](https://github.com/MetaMask/metamask-mobile/pull/11104): chore(deps): Bump `@metamask/address-book-controller` from `^4.0.1` to `^6.0.1` (#11104)
- [#10917](https://github.com/MetaMask/metamask-mobile/pull/10917): chore(ci): split out ci scripts and devDeps into separate project (#10917)
- [#11081](https://github.com/MetaMask/metamask-mobile/pull/11081): chore: Prevent redundant Sentry sourcemap uploads (#11081)
- [#11470](https://github.com/MetaMask/metamask-mobile/pull/11470): chore: [Design quality] Update token details (#11470)
- [#11169](https://github.com/MetaMask/metamask-mobile/pull/11169): chore(deps): Bump `@metamask/signature-controller` from `^17.0.0` to `^19.1.0`
- [#11352](https://github.com/MetaMask/metamask-mobile/pull/11352): chore(deps): Bump `@metamask/accounts-controller` to `^18.2.1`

### Fixed

- [#11512](https://github.com/MetaMask/metamask-mobile/pull/11512): fix: android firebase docs template (#11512)
- [#11430](https://github.com/MetaMask/metamask-mobile/pull/11430): fix: refactor Logger usage (#11430)
- [#11250](https://github.com/MetaMask/metamask-mobile/pull/11250): fix: push notifications (#11250)
- [#11581](https://github.com/MetaMask/metamask-mobile/pull/11581): fix: Fix invalid browser url crash (#11581)
- [#11467](https://github.com/MetaMask/metamask-mobile/pull/11467): fix: Reorder prep_environment (#11467)
- [#11367](https://github.com/MetaMask/metamask-mobile/pull/11367): fix: Update steps of the methods that are no longer valid (#11367)
- [#11400](https://github.com/MetaMask/metamask-mobile/pull/11400): fix: Stop crowdin action from creating branches (#11400)
- [#11348](https://github.com/MetaMask/metamask-mobile/pull/11348): fix: splash screen image on android (#11348)
- [#11346](https://github.com/MetaMask/metamask-mobile/pull/11346): fix: splash screen image on android (#11346)
- [#11554](https://github.com/MetaMask/metamask-mobile/pull/11554): fix: Fix/use portfolio home page (#11554)
- [#11443](https://github.com/MetaMask/metamask-mobile/pull/11443): fix: react native quick crypto ios build bug (#11443)
- [#11325](https://github.com/MetaMask/metamask-mobile/pull/11325): fix: loader can display on top of login screen (#11325)
- [#11372](https://github.com/MetaMask/metamask-mobile/pull/11372): fix: origin spoofing vulnerability in signature prompts on iOS (#11372)
- [#11076](https://github.com/MetaMask/metamask-mobile/pull/11076): fix(2453): adjust UI details for account cell on wallet screen (#11076)
- [#11524](https://github.com/MetaMask/metamask-mobile/pull/11524): fix: fix duplicated network select (#11524)
- [#11411](https://github.com/MetaMask/metamask-mobile/pull/11411): fix: fix fixture builder network state (#11411)
- [#11380](https://github.com/MetaMask/metamask-mobile/pull/11380): fix: Unreadable Asset options (#11380)
- [#11321](https://github.com/MetaMask/metamask-mobile/pull/11321): fix: fix detect tokens performance (#11321)
- [#11401](https://github.com/MetaMask/metamask-mobile/pull/11401): fix: replace decomissioned cloudflare-ipfs.com with gateway.pinata.cloud (#11401)
- [#11552](https://github.com/MetaMask/metamask-mobile/pull/11552): fix(11481): android system alert respects dark mode themes (#11552)
- [#11518](https://github.com/MetaMask/metamask-mobile/pull/11518): fix(11482): incorrect QR code error (#11518)

## [7.32.0]

### Added

- [#10294](https://github.com/MetaMask/metamask-mobile/pull/10294): feat: create redux slice for featureFlags (#10294)
- [#11314](https://github.com/MetaMask/metamask-mobile/pull/11314): feat: reject connection properly (#11314)
- [#11132](https://github.com/MetaMask/metamask-mobile/pull/11132): feat: Add performance tracing infrastructure (#11132)
- [#10061](https://github.com/MetaMask/metamask-mobile/pull/10061): feat: new receive flow (#10061)
- [#11174](https://github.com/MetaMask/metamask-mobile/pull/11174): feat(2796): behind feature flag permission settings multichain 2of2 (#11174)
- [#11019](https://github.com/MetaMask/metamask-mobile/pull/11019): feat(2793): mocked UI screen displaying multichain dapp permission summary 2of2 (#11019)
- [#10988](https://github.com/MetaMask/metamask-mobile/pull/10988): feat(2808): add a mocked UI checkbox list that will later allow adding the ability to edit network permission (#10988)
- [#11168](https://github.com/MetaMask/metamask-mobile/pull/11168): feat: add pooled staking input flow screen (#11168)
- [#10964](https://github.com/MetaMask/metamask-mobile/pull/10964): feat: build your earnings component stub in eth token details (#10964)
- [#11051](https://github.com/MetaMask/metamask-mobile/pull/11051): feat: add brand evo font files (#11051)
- [#11285](https://github.com/MetaMask/metamask-mobile/pull/11285): feat: notifications add analytics (#11285)
- [#10755](https://github.com/MetaMask/metamask-mobile/pull/10755): feat: ledger account selection screen add hd options to sync with extension (#10755)
- [#11195](https://github.com/MetaMask/metamask-mobile/pull/11195): feat: add AppState dependency to load notifications (#11195)
- [#11175](https://github.com/MetaMask/metamask-mobile/pull/11175): feat: add product announcements toggle (#11175)

### Changed

- [#11148](https://github.com/MetaMask/metamask-mobile/pull/11148): chore: remove animation and add new splash screen (#11148)
- [#11306](https://github.com/MetaMask/metamask-mobile/pull/11306): chore: update @sentry/react-native to version 5.33.0 (#11306)
- [#11144](https://github.com/MetaMask/metamask-mobile/pull/11144): test: E2E Mocking Setup For Detox Tests (#11144)
- [#11212](https://github.com/MetaMask/metamask-mobile/pull/11212): chore: Update CI workflow triggers to support release branches (#11212)
- [#11243](https://github.com/MetaMask/metamask-mobile/pull/11243): chore(js-ts): Convert ModalNavbarTitle to TypeScript (#11243)
- [#11213](https://github.com/MetaMask/metamask-mobile/pull/11213): test: Appium separate and optimize app launch time measurements (#11213)
- [#11264](https://github.com/MetaMask/metamask-mobile/pull/11264): chore: remove triggers for actions not needed during the merge-queue CI (#11264)
- [#11222](https://github.com/MetaMask/metamask-mobile/pull/11222): chore: add bitrise document link to the bitrise failed comment (#11222)
- [#11145](https://github.com/MetaMask/metamask-mobile/pull/11145): chore: update performance for new allocation (#11145)
- [#11184](https://github.com/MetaMask/metamask-mobile/pull/11184): test: remove notifications launch arg in E2E (#11184)
- [#11186](https://github.com/MetaMask/metamask-mobile/pull/11186): ci: prevent detox E2E lock failure (#11186)
- [#11141](https://github.com/MetaMask/metamask-mobile/pull/11141): chore: update express for all the packages (#11141)
- [#11124](https://github.com/MetaMask/metamask-mobile/pull/11124): docs: Update Appium documentation (#11124)
- [#10865](https://github.com/MetaMask/metamask-mobile/pull/10865): chore: update eslint v^8.44 (#10865)
- [#11096](https://github.com/MetaMask/metamask-mobile/pull/11096): test: detox black list gas api endpoint (#11096)
- [#11246](https://github.com/MetaMask/metamask-mobile/pull/11246): chore: Remove `eth-sign` (#11246)
- [#11220](https://github.com/MetaMask/metamask-mobile/pull/11220): chore: Update package @blockaid/ppom_release to version 1.5.3 (#11220)
- [#11244](https://github.com/MetaMask/metamask-mobile/pull/11244): chore(js-ts): Convert useInterval.js to TypeScript (#11244)
- [#11089](https://github.com/MetaMask/metamask-mobile/pull/11089): chore: add staking team to codeowners file (#11089)
- [#11049](https://github.com/MetaMask/metamask-mobile/pull/11049): chore: update balance design (#11049)
- [#11011](https://github.com/MetaMask/metamask-mobile/pull/11011): chore: Capture currency change in MetaMetrics (#11011)
- [#10468](https://github.com/MetaMask/metamask-mobile/pull/10468): chore: Capture custom rpc url in `trackEvent` (#10468)
- [#11207](https://github.com/MetaMask/metamask-mobile/pull/11207): chore(deps): Bump `@metamask/base-controller` from `^6.0.0` to `^7.0.0` (#11207)
- [#11235](https://github.com/MetaMask/metamask-mobile/pull/11235): ci: avoid running release pipeline on every commit to the release branch (#11235)
- [#11094](https://github.com/MetaMask/metamask-mobile/pull/11094): chore: chore/7.31.0-Changelog (#11094)
- [#10788](https://github.com/MetaMask/metamask-mobile/pull/10788): chore: Add `@metamask/selected-network-controller` & integrate (#10788)
- [#11122](https://github.com/MetaMask/metamask-mobile/pull/11122): test: e2e for auto-lock (#11122)
- [#11143](https://github.com/MetaMask/metamask-mobile/pull/11143): chore: bump react native webview to 14.0.3 version (#11143)
- [#11284](https://github.com/MetaMask/metamask-mobile/pull/11284): chore: add notifications state awareness inapp badge (#11284)
- [#11082](https://github.com/MetaMask/metamask-mobile/pull/11082): chore: bump network controller 20.0.0 (#11082)
- [#10821](https://github.com/MetaMask/metamask-mobile/pull/10821): chore(deps): bump `accounts-controller` to v18.1.0 and `keyring-api` to v8.1.0 (#10821)

### Fixed

- [#11117](https://github.com/MetaMask/metamask-mobile/pull/11117): fix: add feat flag (#11117)
- [#11084](https://github.com/MetaMask/metamask-mobile/pull/11084): fix: locks api spec version for api spec tests (#11084)
- [#11310](https://github.com/MetaMask/metamask-mobile/pull/11310): fix: quick fix on feature flag & notification state (#11310)
- [#11200](https://github.com/MetaMask/metamask-mobile/pull/11200): fix: add feature flag on profile sync (#11200)
- [#11302](https://github.com/MetaMask/metamask-mobile/pull/11302): fix: cp & resolve merge conflict (#11302)
- [#11130](https://github.com/MetaMask/metamask-mobile/pull/11130): fix(action): add a workaround for known bots (#11130)
- [#11173](https://github.com/MetaMask/metamask-mobile/pull/11173): fix: dset version (#11173)
- [#10899](https://github.com/MetaMask/metamask-mobile/pull/10899): fix: Android crash when svgs use the &quot; html entity (#10899)
- [#11126](https://github.com/MetaMask/metamask-mobile/pull/11126): fix: Skip sonar cloud gate in step instead (#11126)
- [#11121](https://github.com/MetaMask/metamask-mobile/pull/11121): fix: Add new job to verify ""All jobs pass"" job for required PR check (#11121)
- [#11266](https://github.com/MetaMask/metamask-mobile/pull/11266): fix: notification permission flow (#11266)
- [#11252](https://github.com/MetaMask/metamask-mobile/pull/11252): fix: notification permission request message (#11252)
- [#11155](https://github.com/MetaMask/metamask-mobile/pull/11155): fix: android crashing on date formating Intl usage. (#11155)
- [#11137](https://github.com/MetaMask/metamask-mobile/pull/11137): fix: notifications bugs (#11137)
- [#11110](https://github.com/MetaMask/metamask-mobile/pull/11110): fix: accounts notifications switch (#11110)
- [#11146](https://github.com/MetaMask/metamask-mobile/pull/11146): fix: update nativesdk with improved concurrency handling (#11146)
- [#11165](https://github.com/MetaMask/metamask-mobile/pull/11165): fix: freeze during swap with approval (#11165)
- [#11161](https://github.com/MetaMask/metamask-mobile/pull/11161): fix: blockaid loader on confirmation pages (#11161)
- [#10989](https://github.com/MetaMask/metamask-mobile/pull/10989): fix: closing of gas info tooltip (#10989)
- [#10348](https://github.com/MetaMask/metamask-mobile/pull/10348): fix: confirmations UI adjustments (#10348)
- [#10842](https://github.com/MetaMask/metamask-mobile/pull/10842): fix: app crash due to minimal input must be string error (#10842)
- [#11112](https://github.com/MetaMask/metamask-mobile/pull/11112): fix: update token details monetization button (#11112)
- [#11172](https://github.com/MetaMask/metamask-mobile/pull/11172): fix: fix check token balance is zero (#11172)
- [#11087](https://github.com/MetaMask/metamask-mobile/pull/11087): fix: Intermittent Display Issue of Fiat Currency on Main Wallet View (#11087)
- [#11176](https://github.com/MetaMask/metamask-mobile/pull/11176): fix: switch from bundled to url EE (#11176)
- [#11281](https://github.com/MetaMask/metamask-mobile/pull/11281): fix: Fix the styling issue of link in SearchingForDeviceStep component (#11281)
- [#11265](https://github.com/MetaMask/metamask-mobile/pull/11265): fix: notification account syncing (#11265)
- [#11218](https://github.com/MetaMask/metamask-mobile/pull/11218): fix: close icon on notifications list screen (#11218)
- [#11193](https://github.com/MetaMask/metamask-mobile/pull/11193): fix: ItemMenu crash using dayjs (#11193)
- [#11098](https://github.com/MetaMask/metamask-mobile/pull/11098): fix: badge count and ui polishing (#11098)

## [7.31.1]

### Fixed

- [#11631](https://github.com/MetaMask/metamask-mobile/pull/11631): fix: Fixes UI issue in token details (#11631)

## [7.31.0]

### Added

- [#10747](https://github.com/MetaMask/metamask-mobile/pull/10747): feat: 2805 grant permission to network with missmatching rpc url (#10747)
- [#10715](https://github.com/MetaMask/metamask-mobile/pull/10715): feat: 2795 disconnect all account permission multichain edit account screen (#10715)
- [#10347](https://github.com/MetaMask/metamask-mobile/pull/10347): feat: refactor WalletConnect v2 and add unit tests (#10347)
- [#10695](https://github.com/MetaMask/metamask-mobile/pull/10695): feat: sdk async key exchange (#10695)
- [#10562](https://github.com/MetaMask/metamask-mobile/pull/10562): feat: New token detail view (#10562)
- [#10876](https://github.com/MetaMask/metamask-mobile/pull/10876): feat: js bundle size ci gate (#10876)
- [#10847](https://github.com/MetaMask/metamask-mobile/pull/10847): feat: add pooled staking feature flag (#10847)
- [#2796](https://github.com/MetaMask/metamask-mobile/pull/2796): feat(2796): permission settings for multichain
- [#10727](https://github.com/MetaMask/metamask-mobile/pull/10727): feat: add ledger live deviation path support (#10727)

### Changed

- [#10749](https://github.com/MetaMask/metamask-mobile/pull/10749): chore(deps): bump rexml from 3.3.3 to 3.3.6 in the bundler group across 1 directory (#10749)
- [#10794](https://github.com/MetaMask/metamask-mobile/pull/10794): Release-update-BS-URL (#10794)
- [#11088](https://github.com/MetaMask/metamask-mobile/pull/11088): chore: add new track events for enabling/disabling basic functionality (#11088)
- [#10781](https://github.com/MetaMask/metamask-mobile/pull/10781): chore: update gitignore (#10781)
- [#11080](https://github.com/MetaMask/metamask-mobile/pull/11080): chore: fix flipper pod compilation with pika 15.3 toolchain (#11080)
- [#11077](https://github.com/MetaMask/metamask-mobile/pull/11077): chore: disable api spec pipeline (#11077)
- [#11075](https://github.com/MetaMask/metamask-mobile/pull/11075): test: disable flakey accounts test (#11075)
- [#11074](https://github.com/MetaMask/metamask-mobile/pull/11074): test: set baseline for app launch times (#11074)
- [#11039](https://github.com/MetaMask/metamask-mobile/pull/11039): test: Update swap test to handle the details modal (#11039)
- [#11070](https://github.com/MetaMask/metamask-mobile/pull/11070): test: remove duplicate push_branch in trigger map (#11070)
- [#11037](https://github.com/MetaMask/metamask-mobile/pull/11037): test: enable launch times pipeline on main (#11037)
- [#10983](https://github.com/MetaMask/metamask-mobile/pull/10983): chore: Metrics on download logs on login screen (#10983)
- [#11012](https://github.com/MetaMask/metamask-mobile/pull/11012): chore: revert splash screen PR (#11012)
- [#11003](https://github.com/MetaMask/metamask-mobile/pull/11003): chore: update swaps controller to 9.0.12 (#11003)
- [#11000](https://github.com/MetaMask/metamask-mobile/pull/11000): chore: merge release 7.29.1 into main (#11000)
- [#10937](https://github.com/MetaMask/metamask-mobile/pull/10937): chore: remove prefer default export eslint rule (#10937)
- [#10958](https://github.com/MetaMask/metamask-mobile/pull/10958): test: Increase cold start bench marks (#10958)
- [#10016](https://github.com/MetaMask/metamask-mobile/pull/10016): chore: Update Keystone and NGRAVE dependencies (#10016)
- [#10866](https://github.com/MetaMask/metamask-mobile/pull/10866): chore: update typescript version to v~5.4.5 (#10866)
- [#10745](https://github.com/MetaMask/metamask-mobile/pull/10745): chore: Enable typescript coverage for all the files (#10745)
- [#10830](https://github.com/MetaMask/metamask-mobile/pull/10830): chore: Bump old pod checksums (#10830)
- [#10835](https://github.com/MetaMask/metamask-mobile/pull/10835): test: Remove Redundant Steps in WDIO to Fix Upgrade Test Failures (#10835)
- [#10813](https://github.com/MetaMask/metamask-mobile/pull/10813): chore: Remove react-native-splash-screen from Android (#10813)
- [#10828](https://github.com/MetaMask/metamask-mobile/pull/10828): chore: Add troubleshoot for missing simulators (#10828)
- [#10736](https://github.com/MetaMask/metamask-mobile/pull/10736): chore: Update permission controller to v^11 & utils to v^9 (#10736)
- [#10814](https://github.com/MetaMask/metamask-mobile/pull/10814): test:update-bs-url-to-correct-url (#10814)
- [#10744](https://github.com/MetaMask/metamask-mobile/pull/10744): chore: typescript coverage (#10744)
- [#10785](https://github.com/MetaMask/metamask-mobile/pull/10785): test: Refactor swaps page object files (#10785)
- [#10723](https://github.com/MetaMask/metamask-mobile/pull/10723): docs: Clean up testing readme (#10723)
- [#10751](https://github.com/MetaMask/metamask-mobile/pull/10751): chore: chore/7.30.0-Changelog (#10751)
- [#11017](https://github.com/MetaMask/metamask-mobile/pull/11017): refactor: updated button primary to use light theme colors (#11017)
- [#11018](https://github.com/MetaMask/metamask-mobile/pull/11018): refactor: updated wallet action icons to be light themed (#11018)
- [#10325](https://github.com/MetaMask/metamask-mobile/pull/10325): chore: updated avatargroup to take in all avatars (#10325)
- [#10616](https://github.com/MetaMask/metamask-mobile/pull/10616): chore: upgrade network controller to version 19.0.0 (#10616)
- [#11001](https://github.com/MetaMask/metamask-mobile/pull/11001): test: Fix swap smoke tests (#11001)
- [#10953](https://github.com/MetaMask/metamask-mobile/pull/10953): test: replaced TestHelpers function call with equivalent from Assertions (#10953)
- [#10897](https://github.com/MetaMask/metamask-mobile/pull/10897): test: Fix Swap e2e test failure (#10897)
- [#10874](https://github.com/MetaMask/metamask-mobile/pull/10874): chore: add new `keyring-snaps` code fence (#10874)
- [#10913](https://github.com/MetaMask/metamask-mobile/pull/10913): test: e2e srp reveal regression update (#10913)
- [#10879](https://github.com/MetaMask/metamask-mobile/pull/10879): test: e2e to reveal private key (#10879)
- [#10754](https://github.com/MetaMask/metamask-mobile/pull/10754): test: complete quiz to reveal SRP (#10754)
- [#10871](https://github.com/MetaMask/metamask-mobile/pull/10871): chore: enable merge queues gh action test run (#10871)
- [#10714](https://github.com/MetaMask/metamask-mobile/pull/10714): test: Refactor AccountListView Page object (#10714)

### Fixed

- [#10518](https://github.com/MetaMask/metamask-mobile/pull/10518): fix: refactor blockaid utils sync functions to async (#10518)
- [#11020](https://github.com/MetaMask/metamask-mobile/pull/11020): fix: Fix broken unit test in `Sendflow` tests (#11020)
- [#10385](https://github.com/MetaMask/metamask-mobile/pull/10385): fix: no insufficient funds warning (#10385)
- [#10826](https://github.com/MetaMask/metamask-mobile/pull/10826): fix: Upgrading Appium test failing (#10826)
- [#9910](https://github.com/MetaMask/metamask-mobile/pull/9910): fix: refactor saga xhr injection and add unit tests (#9910)
- [#10850](https://github.com/MetaMask/metamask-mobile/pull/10850): fix: remove exclusion of micromatch advisory and bump it (#10850)
- [#10673](https://github.com/MetaMask/metamask-mobile/pull/10673): fix: camera permission alert with settings access (#10673)
- [#10851](https://github.com/MetaMask/metamask-mobile/pull/10851): fix(2795): remove duplicate description in account connect multiselect screen (#10851)
- [#10894](https://github.com/MetaMask/metamask-mobile/pull/10894): fix: browser tab url type (#10894)
- [#10963](https://github.com/MetaMask/metamask-mobile/pull/10963): fix: Update PRODUCTION_APP_URL value (#10963)
- [#10903](https://github.com/MetaMask/metamask-mobile/pull/10903): fix(bug report): the description of bug report issue wasn't up-to-date anymore (#10903)
- [#10886](https://github.com/MetaMask/metamask-mobile/pull/10886): fix: recaptcha on in app browser (#10886)
- [#10540](https://github.com/MetaMask/metamask-mobile/pull/10540): fix: Browser dialog prompts in app (#10540)
- [#10844](https://github.com/MetaMask/metamask-mobile/pull/10844): fix: Refactor `yarn setup` in CI to generate terms of use content while retaining performance optimization (#10844)
- [#10845](https://github.com/MetaMask/metamask-mobile/pull/10845): fix: Add missing react-native-slider to pod lock file (#10845)
- [#10843](https://github.com/MetaMask/metamask-mobile/pull/10843): "revert: ""fix: Fixed 17 High Priority Issues - SonarCloud"" (#10843)"
- [#10635](https://github.com/MetaMask/metamask-mobile/pull/10635): fix: Fixed 17 High Priority Issues - SonarCloud (#10635)
- [#10827](https://github.com/MetaMask/metamask-mobile/pull/10827): fix: Fix/disable flipper for release (#10827)
- [#10820](https://github.com/MetaMask/metamask-mobile/pull/10820): fix: Set NO_FLIPPER to true on ios release (#10820)
- [#10545](https://github.com/MetaMask/metamask-mobile/pull/10545): fix: update metrics logic (#10545)
- [#10761](https://github.com/MetaMask/metamask-mobile/pull/10761): fix: typescript vs code default version (#10761)
- [#10753](https://github.com/MetaMask/metamask-mobile/pull/10753): fix: Fix coachmark error (#10753)
- [#10979](https://github.com/MetaMask/metamask-mobile/pull/10979): fix: wallet connect invalid hostname (#10979)
- [#10701](https://github.com/MetaMask/metamask-mobile/pull/10701): fix: wrong or missing analytics request source (#10701)
- [#10863](https://github.com/MetaMask/metamask-mobile/pull/10863): fixes: connectWith sdk (#10863)
- [#10729](https://github.com/MetaMask/metamask-mobile/pull/10729): fix: support set custom nonce to zero (#10729)
- [#11002](https://github.com/MetaMask/metamask-mobile/pull/11002): fix: infinite gas fee loading during send (#11002)
- [#10936](https://github.com/MetaMask/metamask-mobile/pull/10936): fix: Add missing allowedAction NetworkController:findNetworkClientIdByChainId to transactionController (#10936)
- [#10965](https://github.com/MetaMask/metamask-mobile/pull/10965): fix: gas never loading during send + high gas fee after deep link (#10965)
- [#10662](https://github.com/MetaMask/metamask-mobile/pull/10662): fix: blockaid loader on confirmation pages (#10662)
- [#10286](https://github.com/MetaMask/metamask-mobile/pull/10286): fix: Add dark mode to storybook (#10286)
- [#9962](https://github.com/MetaMask/metamask-mobile/pull/9962): fix: updated Text to use proper font styles (#9962)
- [#10476](https://github.com/MetaMask/metamask-mobile/pull/10476): fix: fix sentry error (#10476)
- [#10687](https://github.com/MetaMask/metamask-mobile/pull/10687): fix: Optimism quotes failing (#10687)
- [#10900](https://github.com/MetaMask/metamask-mobile/pull/10900): fix(notifications): hide profile sync toggle (#10900)
- [#10791](https://github.com/MetaMask/metamask-mobile/pull/10791): fix: Fix the QR code account unable to sign any message and transaction issue in 7.30.0 (#10791)
- [#10982](https://github.com/MetaMask/metamask-mobile/pull/10982): fix: UI notifications details bugs (#10982)
- [#10795](https://github.com/MetaMask/metamask-mobile/pull/10795): fix: small UI polishings (#10795)
- [#10792](https://github.com/MetaMask/metamask-mobile/pull/10792): fix: refactor notifications utils (#10792)

## [7.30.0]

### Added

- [#10748](https://github.com/MetaMask/metamask-mobile/pull/10748): feat: Add yarn flipper script (#10748)
- [#10739](https://github.com/MetaMask/metamask-mobile/pull/10739): feat: Feat/add redux debugger (#10739)
- [#10589](https://github.com/MetaMask/metamask-mobile/pull/10589): feat: Feat/10521 react-native-performance mvp for measuring app start + JS bundle load times (#10589)
- [#10696](https://github.com/MetaMask/metamask-mobile/pull/10696): feat: Update @blockaid/ppom_release to release 1.5.2 (#10696)
- [#10718](https://github.com/MetaMask/metamask-mobile/pull/10718): feat: update add team label workflow (#10718)
- [#10682](https://github.com/MetaMask/metamask-mobile/pull/10682): feat: 2794 account edit permission multichain bottomsheet UI changes only (#10682)
- [#10542](https://github.com/MetaMask/metamask-mobile/pull/10542): feat: add warning banner to custom network bottom sheet (#10542)
- [#10519](https://github.com/MetaMask/metamask-mobile/pull/10519): feat: multichain popular network dapp connection confirmation bottomsheet (#10519)
- [#10393](https://github.com/MetaMask/metamask-mobile/pull/10393): feat(ramp): add property to provider selected event (#10393)
- [#10395](https://github.com/MetaMask/metamask-mobile/pull/10395): feat(ramp): add amounts to quotes received event (#10395)
- [#10596](https://github.com/MetaMask/metamask-mobile/pull/10596): feat: select multi rpc UI (#10596)
- [#10123](https://github.com/MetaMask/metamask-mobile/pull/10123): feat: improve add network fields checkers (#10123)
- [#9950](https://github.com/MetaMask/metamask-mobile/pull/9950): feat: QR-based add NGRAVE ZERO Hardware (#9950)

### Changed

- [#10746](https://github.com/MetaMask/metamask-mobile/pull/10746): chore: fix another batch of TS errors (#10746)
- [#10735](https://github.com/MetaMask/metamask-mobile/pull/10735): chore: Add E2E folders to sonar exclusion list (#10735)
- [#10697](https://github.com/MetaMask/metamask-mobile/pull/10697): chore: Add more typescript fixes (#10697)
- [#10549](https://github.com/MetaMask/metamask-mobile/pull/10549): chore: New Crowdin translations by Github Action (#10549)
- [#10732](https://github.com/MetaMask/metamask-mobile/pull/10732): chore: ignore errors that are fixed on TS v5 (#10732)
- [#10710](https://github.com/MetaMask/metamask-mobile/pull/10710): chore: remove tsc issues of node_modules (#10710)
- [#10670](https://github.com/MetaMask/metamask-mobile/pull/10670): chore: Implement TypeScript for Ramp folder (#10670)
- [#10285](https://github.com/MetaMask/metamask-mobile/pull/10285): chore: enable webview debugging for all builds but prod (#10285)
- [#10698](https://github.com/MetaMask/metamask-mobile/pull/10698): chore: Ignore TS issues on snaps directory (#10698)
- [#10636](https://github.com/MetaMask/metamask-mobile/pull/10636): test: Update ios simulator to iphone 15 (#10636)
- [#10707](https://github.com/MetaMask/metamask-mobile/pull/10707): chore: Fix TS errors in batch of components/UI folder (#10707)
- [#10720](https://github.com/MetaMask/metamask-mobile/pull/10720): test: disable sonar on E2E folder (#10720)
- [#10603](https://github.com/MetaMask/metamask-mobile/pull/10603): chore: reverting chainID 1338 (#10603)
- [#10709](https://github.com/MetaMask/metamask-mobile/pull/10709): chore: Bump version 1398 RC3 (#10709)
- [#10700](https://github.com/MetaMask/metamask-mobile/pull/10700): chore: removing unused component (#10700)
- [#10690](https://github.com/MetaMask/metamask-mobile/pull/10690): chore: Prevent crash when engine is not initialized (#10690)
- [#10587](https://github.com/MetaMask/metamask-mobile/pull/10587): chore: Typescript Views folder part 3 - 1 (#10587)
- [#10672](https://github.com/MetaMask/metamask-mobile/pull/10672): chore: TS coverage on views folder part 3 - 2 (#10672)
- [#10665](https://github.com/MetaMask/metamask-mobile/pull/10665): chore: Views directory ts coverage - part 1 (#10665)
- [#10675](https://github.com/MetaMask/metamask-mobile/pull/10675): chore: typescript no check on notifications directory (#10675)
- [#10594](https://github.com/MetaMask/metamask-mobile/pull/10594): chore: Typescript Views folder part 3 - 3 (#10594)
- [#10681](https://github.com/MetaMask/metamask-mobile/pull/10681): chore: blockaid and fav icon test files ts errors (#10681)
- [#10561](https://github.com/MetaMask/metamask-mobile/pull/10561): chore: 10311 transactions simulation dir (#10561)
- [#10663](https://github.com/MetaMask/metamask-mobile/pull/10663): chore: Update axios to v1.7.4 (#10663)
- [#10645](https://github.com/MetaMask/metamask-mobile/pull/10645): chore: confirmations directory ts coverage (#10645)
- [#10653](https://github.com/MetaMask/metamask-mobile/pull/10653): chore: skip flakey test (#10653)
- [#10557](https://github.com/MetaMask/metamask-mobile/pull/10557): test: Bump Detox version from v20.20.3 to v20.23.1 (#10557)
- [#10537](https://github.com/MetaMask/metamask-mobile/pull/10537): chore: TS coverage UI folder part 1 (#10537)
- [#10538](https://github.com/MetaMask/metamask-mobile/pull/10538): chore: Update terms of use modal (#10538)
- [#10559](https://github.com/MetaMask/metamask-mobile/pull/10559): chore: Create app launch times pipeline (#10559)
- [#10575](https://github.com/MetaMask/metamask-mobile/pull/10575): chore: enable sonar on E2E (#10575)
- [#10307](https://github.com/MetaMask/metamask-mobile/pull/10307): chore: Fix some TS errors in component library (#10307)
- [#10578](https://github.com/MetaMask/metamask-mobile/pull/10578): chore: audit override (#10578)
- [#10576](https://github.com/MetaMask/metamask-mobile/pull/10576): chore: merge 7.28.0 (#10576)
- [#10510](https://github.com/MetaMask/metamask-mobile/pull/10510): chore: update Android SDK to API Level 34 (#10510)
- [#10553](https://github.com/MetaMask/metamask-mobile/pull/10553): chore: move detox setup into its own script (#10553)
- [#10354](https://github.com/MetaMask/metamask-mobile/pull/10354): chore: New Crowdin translations by Github Action (#10354)
- [#10546](https://github.com/MetaMask/metamask-mobile/pull/10546): chore: add runway bot to CLA allow list (#10546)
- [#10535](https://github.com/MetaMask/metamask-mobile/pull/10535): chore: Optimize/10528 remove generated svgs (#10535)
- [#10534](https://github.com/MetaMask/metamask-mobile/pull/10534): chore: chore/7.29.0-Changelog (#10534)
- [#10712](https://github.com/MetaMask/metamask-mobile/pull/10712): test: Refactor AdvancedView.js (#10712)
- [#10536](https://github.com/MetaMask/metamask-mobile/pull/10536): test: Refactor RequestPaymentView page object (#10536)
- [#10647](https://github.com/MetaMask/metamask-mobile/pull/10647): chore: updated in-app review to comply with SDK 14 on Android (#10647)
- [#10437](https://github.com/MetaMask/metamask-mobile/pull/10437): chore: Bump @metamask/smart-transactions-controller from 10.1.1 to 11.0.0 (#10437)
- [#10565](https://github.com/MetaMask/metamask-mobile/pull/10565): chore: Enable smart transactions only for ETH mainnet in production and for ETH mainnet and Sepolia in non-prod (#10565)
- [#10608](https://github.com/MetaMask/metamask-mobile/pull/10608): chore: add test variant for credential reveal (#10608)
- [#10262](https://github.com/MetaMask/metamask-mobile/pull/10262): chore(ramp): upgrade sdk to 1.28.3 and remove chainId casting (#10262)
- [#10680](https://github.com/MetaMask/metamask-mobile/pull/10680): refactor(notification types): fix notification types (#10680)
- [#10639](https://github.com/MetaMask/metamask-mobile/pull/10639): chore: chery pick fix for harmony network image (#10639)
- [#10490](https://github.com/MetaMask/metamask-mobile/pull/10490): chore: Add primary currency to user object in MetaMetrics (#10490)
- [#10457](https://github.com/MetaMask/metamask-mobile/pull/10457): chore: Notifications Settings Polishing (#10457)
- [#10692](https://github.com/MetaMask/metamask-mobile/pull/10692): perf: add parallel fetching for the network fee dropdown (#10692)
- [#10539](https://github.com/MetaMask/metamask-mobile/pull/10539): chore: enhance Source Detection Logic in Analytics Parameters (#10539)

### Fixed

- [#10649](https://github.com/MetaMask/metamask-mobile/pull/10649): fix: Update test dapp favorite selector (#10649)
- [#10641](https://github.com/MetaMask/metamask-mobile/pull/10641): fix: Add missing pod lock changes (#10641)
- [#10613](https://github.com/MetaMask/metamask-mobile/pull/10613): fix: useBlockExplorer hook (#10613)
- [#10598](https://github.com/MetaMask/metamask-mobile/pull/10598): fix: App crashes when deleting browser favorites on android devices (#10598)
- [#10489](https://github.com/MetaMask/metamask-mobile/pull/10489): fix: url change bug (#10489)
- [#10733](https://github.com/MetaMask/metamask-mobile/pull/10733): fix: remove duplicate origin validation in transaction controller (#10733)
- [#10658](https://github.com/MetaMask/metamask-mobile/pull/10658): fix: issue in blockaid spinner for batched confirmations (#10658)
- [#10588](https://github.com/MetaMask/metamask-mobile/pull/10588): fix: disabled what's new modal (#10588)
- [#10547](https://github.com/MetaMask/metamask-mobile/pull/10547): fix: settings toggle extra large paddings when biometrics hidden (#10547)
- [#10154](https://github.com/MetaMask/metamask-mobile/pull/10154): fix: sets data marketing to false in case of non-selection (#10154)
- [#10532](https://github.com/MetaMask/metamask-mobile/pull/10532): fix: replaced incorrect icons on wallet bottom sheet with correct icons (#10532)
- [#10548](https://github.com/MetaMask/metamask-mobile/pull/10548): fix: replaced incorrect export icon with correct icon (#10548)
- [#10607](https://github.com/MetaMask/metamask-mobile/pull/10607): fix: hold to reveal UI/UX (#10607)
- [#10683](https://github.com/MetaMask/metamask-mobile/pull/10683): fix: remove snap webview flag (#10683)
- [#10600](https://github.com/MetaMask/metamask-mobile/pull/10600): fix: harmony network image (#10600)
- [#10404](https://github.com/MetaMask/metamask-mobile/pull/10404): fix: aggregated balance calculation (#10404)
- [#10394](https://github.com/MetaMask/metamask-mobile/pull/10394): fix: switch chain with walletconnect (#10394)
- [#10637](https://github.com/MetaMask/metamask-mobile/pull/10637): fix: swap button blocked by SwapsController polling issue (#10637)
- [#10361](https://github.com/MetaMask/metamask-mobile/pull/10361): fix: fix alignment issues in onboarding success (#10361)
- [#10741](https://github.com/MetaMask/metamask-mobile/pull/10741): fix: bump micromatch to 4.0.7 (#10741)
- [#10668](https://github.com/MetaMask/metamask-mobile/pull/10668): fix: notifications first round of tests (#10668)
- [#10640](https://github.com/MetaMask/metamask-mobile/pull/10640): fix: notification small fixes (#10640)
- [#10693](https://github.com/MetaMask/metamask-mobile/pull/10693): fix: notification second round fixes (#10693)

## [7.29.2]

### Fixed

- [#10965](https://github.com/MetaMask/metamask-mobile/pull/10965): fix: gas never loading during send + high gas fee after deep link (#10965)
- [#11005](https://github.com/MetaMask/metamask-mobile/pull/11005): fix: Add missing allowedAction NetworkController:findNetworkClientIdByChainId to transactionController (#11005)

## [7.29.1]

### Fixed

- [#10831](https://github.com/MetaMask/metamask-mobile/pull/10831): feat: Update Polygon from MATIC to POL (#10831)

## [7.29.0]

### Added

- [#9578](https://github.com/MetaMask/metamask-mobile/pull/9578): feat: type `renderHookWithProvider` (#9578)
- [#10277](https://github.com/MetaMask/metamask-mobile/pull/10277): feat: New nft details page (#10277)
- [#9469](https://github.com/MetaMask/metamask-mobile/pull/9469): feat: nft + swap metrics (#9469)
- [#10267](https://github.com/MetaMask/metamask-mobile/pull/10267): feat: add utility function to get supported chains from the Security Alerts API (#10267)
- [#10082](https://github.com/MetaMask/metamask-mobile/pull/10082): feat: add origin spam modal (#10082)
- [#9947](https://github.com/MetaMask/metamask-mobile/pull/9947): feat: bump `react-native-aes-crypto` (#9947)
- [#10474](https://github.com/MetaMask/metamask-mobile/pull/10474): feat: add the multchain v1 feature flag (#10474)
- [#10378](https://github.com/MetaMask/metamask-mobile/pull/10378): feat: add copy for new receive flow (#10378)
- [#10350](https://github.com/MetaMask/metamask-mobile/pull/10350): feat: make add-team-label use the reusable workflow (#10350)
- [#9390](https://github.com/MetaMask/metamask-mobile/pull/9390): feat(ramp): add ramp intent (#9390)
- [#10451](https://github.com/MetaMask/metamask-mobile/pull/10451): feat: add notifications' details screen (#10451)
- [#10456](https://github.com/MetaMask/metamask-mobile/pull/10456): feat: add notifications list screen (#10456)
- [#10363](https://github.com/MetaMask/metamask-mobile/pull/10363): feat: add notifications UI components to be used by Views (#10363)

### Changed

- [#10531](https://github.com/MetaMask/metamask-mobile/pull/10531): chore: fix release action (#10531)
- [#10471](https://github.com/MetaMask/metamask-mobile/pull/10471): chore: Typescript type coverage util lib folders (#10471)
- [#10507](https://github.com/MetaMask/metamask-mobile/pull/10507): chore: core related files selectors refactor (#10507)
- [#10508](https://github.com/MetaMask/metamask-mobile/pull/10508): chore: abort on fail smoke e2e pipeline (#10508)
- [#10417](https://github.com/MetaMask/metamask-mobile/pull/10417): chore: Dapp protocol qr code scanning (#10417)
- [#10452](https://github.com/MetaMask/metamask-mobile/pull/10452): chore: fix pod install on linux (#10452)
- [#10408](https://github.com/MetaMask/metamask-mobile/pull/10408): chore: create and use selectors of swaps and ramp directories (#10408)
- [#10397](https://github.com/MetaMask/metamask-mobile/pull/10397): chore: selectors confirmations dir (#10397)
- [#10487](https://github.com/MetaMask/metamask-mobile/pull/10487): test: Disable flakey portfolio test (#10487)
- [#10372](https://github.com/MetaMask/metamask-mobile/pull/10372): chore: refactor async-storage-wrapper to MMKV-wrapper (#10372)
- [#10373](https://github.com/MetaMask/metamask-mobile/pull/10373): chore: Migrate default preference to mmkv (#10373)
- [#10387](https://github.com/MetaMask/metamask-mobile/pull/10387): test: Add step to close onboarding modals (#10387)
- [#10376](https://github.com/MetaMask/metamask-mobile/pull/10376): test: Update env variables for appium upgrading on bitrise.yml (#10376)
- [#10412](https://github.com/MetaMask/metamask-mobile/pull/10412): chore: Update BNB logos (#10412)
- [#10263](https://github.com/MetaMask/metamask-mobile/pull/10263): chore: upgrade transaction controller to 35.0.0 (#10263)
- [#10450](https://github.com/MetaMask/metamask-mobile/pull/10450): test: add e2e to edit account name (#10450)
- [#10251](https://github.com/MetaMask/metamask-mobile/pull/10251): chore: remove remaining use of Preferences Controller for account information (#10251)
- [#10380](https://github.com/MetaMask/metamask-mobile/pull/10380): test: add e2e for imported account being removed and then reimported (#10380)
- [#10346](https://github.com/MetaMask/metamask-mobile/pull/10346): chore: update SRP copy to remove mention of cloud (#10346)
- [#10491](https://github.com/MetaMask/metamask-mobile/pull/10491): chore(ci): pin action versions for external docker/ actions (#10491)
- [#10462](https://github.com/MetaMask/metamask-mobile/pull/10462): refactor: updated children in bottomsheetheader to be optional (#10462)
- [#9580](https://github.com/MetaMask/metamask-mobile/pull/9580): test(ramp): add `useCryptoCurrencies` tests (#9580)
- [#9582](https://github.com/MetaMask/metamask-mobile/pull/9582): test(ramp): add `useFiatCurrencies` tests (#9582)
- [#9579](https://github.com/MetaMask/metamask-mobile/pull/9579): test(ramp): add `useAnalytics` tests (#9579)
- [#9626](https://github.com/MetaMask/metamask-mobile/pull/9626): test(ramp): add `useInAppBrowser` tests (#9626)
- [#9581](https://github.com/MetaMask/metamask-mobile/pull/9581): test(ramp): add `useFetchRampNetworks` tests (#9581)
- [#9589](https://github.com/MetaMask/metamask-mobile/pull/9589): test(ramp): add `useApplePay` tests (#9589)

### Fixed

- [#9744](https://github.com/MetaMask/metamask-mobile/pull/9744): fix: fix/9350 Use consistent commit hash on Bitrise e2e smoke tests (#9744)
- [#10511](https://github.com/MetaMask/metamask-mobile/pull/10511): fix: crash on reload fix by patch (#10511)
- [#10481](https://github.com/MetaMask/metamask-mobile/pull/10481): fix: Added parse errors to be caught on vault corruption flow (#10481)
- [#10467](https://github.com/MetaMask/metamask-mobile/pull/10467): fix: Audit issue xml parser (#10467)
- [#10463](https://github.com/MetaMask/metamask-mobile/pull/10463): fix: useAddressBalance hook selectors warning (#10463)
- [#10436](https://github.com/MetaMask/metamask-mobile/pull/10436): fix: Fix long press login on samsung devices (#10436)
- [#10477](https://github.com/MetaMask/metamask-mobile/pull/10477): fix: fix error when clicking on asset (#10477)
- [#10458](https://github.com/MetaMask/metamask-mobile/pull/10458): fix: adding new locales for nft-details new page (#10458)
- [#10409](https://github.com/MetaMask/metamask-mobile/pull/10409): fix: add events for nft detection (#10409)
- [#10435](https://github.com/MetaMask/metamask-mobile/pull/10435): fix: update @blockaid/ppom_release package to version 1.5.1 (#10435)
- [#10362](https://github.com/MetaMask/metamask-mobile/pull/10362): fix: transaction cancel speed up modal should disappear after transaction is confirmed (#10362)
- [#10488](https://github.com/MetaMask/metamask-mobile/pull/10488): fix: security and privacy toggle paddings (#10488)
- [#10381](https://github.com/MetaMask/metamask-mobile/pull/10381): fix: check navigator availability before initializing the 'DeeplinkManager' (#10381)
- [#10383](https://github.com/MetaMask/metamask-mobile/pull/10383): fix: race condition issues when doing batch-rpc calls in the DeeplinkProtocolService (#10383)
- [#10365](https://github.com/MetaMask/metamask-mobile/pull/10365): fix: attribution link (#10365)
- [#10303](https://github.com/MetaMask/metamask-mobile/pull/10303): fix: page navigation during QR accounts selection (#10303)

## [7.28.1]

### Fixed

- [#10637](https://github.com/MetaMask/metamask-mobile/pull/10637): fix: swap button blocked by SwapsController polling issue (#10637)
- [#10654](https://github.com/MetaMask/metamask-mobile/pull/10654): fix: hot fix for ledger account select screen to provide disclaimer copy information. (#10654)

## [7.28.0]

### Added

- [#10252](https://github.com/MetaMask/metamask-mobile/pull/10252): feat: regression label (#10252)
- [#10214](https://github.com/MetaMask/metamask-mobile/pull/10214): feat: Partially local WebView for Snaps (#10214)
- [#10103](https://github.com/MetaMask/metamask-mobile/pull/10103): feat: update walletconnect se-sdk (#10103)
- [#10319](https://github.com/MetaMask/metamask-mobile/pull/10319): feat: add support for linea mainnet for nft detection (#10319)
- [#10338](https://github.com/MetaMask/metamask-mobile/pull/10338): feat: add notifications actions selectors - 4/7 (#10338)
- [#10332](https://github.com/MetaMask/metamask-mobile/pull/10332): feat: add notifications controllers v2 - 3/7 (#10332)
- [#10109](https://github.com/MetaMask/metamask-mobile/pull/10109): feat: multiple accounts support in ledger (#10109)

### Changed

- [#10278](https://github.com/MetaMask/metamask-mobile/pull/10278): chore: disable snaps feat from main temporarily (#10278)
- [#10329](https://github.com/MetaMask/metamask-mobile/pull/10329): test: Disable bitrise slack notification step (#10329)
- [#10172](https://github.com/MetaMask/metamask-mobile/pull/10172): chore: changelog release automation (#10172)
- [#10282](https://github.com/MetaMask/metamask-mobile/pull/10282): chore: update Android SDK to API Level 34 (#10282)
- [#10241](https://github.com/MetaMask/metamask-mobile/pull/10241): chore: add Sentry snapshot with masked data (#10241)
- [#10289](https://github.com/MetaMask/metamask-mobile/pull/10289): chore: Download state logs on login screen (#10289)
- [#10291](https://github.com/MetaMask/metamask-mobile/pull/10291): chore: Update webview to v 14.0.2 (#10291)
- [#10253](https://github.com/MetaMask/metamask-mobile/pull/10253): chore: typescript hooks and base folder coverage (#10253)
- [#10272](https://github.com/MetaMask/metamask-mobile/pull/10272): chore: Add deep partial single source of truth (#10272)
- [#10225](https://github.com/MetaMask/metamask-mobile/pull/10225): test: Refactor WalletView file (#10225)
- [#10273](https://github.com/MetaMask/metamask-mobile/pull/10273): test: e2e Reveal Secret Recovery Phrase Quiz answer confirmation (#10273)
- [#9956](https://github.com/MetaMask/metamask-mobile/pull/9956): refactor: change vault backup option from `WHEN_UNLOCKED` to `WHEN_UNLOCKED_THIS_DEVICE_ONLY` (#9956)
- [#10283](https://github.com/MetaMask/metamask-mobile/pull/10283): chore: add code fence to avoid ts issue (#10283)
- [#10299](https://github.com/MetaMask/metamask-mobile/pull/10299): chore: add translations for notification feature - 1/7 (#10299)
- [#10268](https://github.com/MetaMask/metamask-mobile/pull/10268): chore: move SnapsExecutionWebView out of Main navigation stack (#10268)
- [#10304](https://github.com/MetaMask/metamask-mobile/pull/10304): chore: update the 'sendMessage' method in the 'DeeplinkProtocolService' class (#10304)
- [#10321](https://github.com/MetaMask/metamask-mobile/pull/10321): chore: added isScaled option to BadgeNetwork to allow nonscaled usage (#10321)
- [#10301](https://github.com/MetaMask/metamask-mobile/pull/10301): chore: remove details and list references - 2/7 (#10301)
- [#10215](https://github.com/MetaMask/metamask-mobile/pull/10215): chore: Remove blockaid env variable (#10215)
- [#10184](https://github.com/MetaMask/metamask-mobile/pull/10184): chore: implementing Firebase messaging on iOS/Android (#10184)
- [#10274](https://github.com/MetaMask/metamask-mobile/pull/10274): chore: New Crowdin translations by Github Action (#10274)

### Fixed

- [#10308](https://github.com/MetaMask/metamask-mobile/pull/10308): fix: correctly get current PR number in bitrise e2e workflow (#10308)
- [#10232](https://github.com/MetaMask/metamask-mobile/pull/10232): fix: fixes missing analytics data for non-web dapps that don't have a url (no… (#10232)
- [#10264](https://github.com/MetaMask/metamask-mobile/pull/10264): fix: skip blockaid validations for users internal accounts (#10264)
- [#10266](https://github.com/MetaMask/metamask-mobile/pull/10266): fix: blockaid loader on confirmation pages (#10266)
- [#10279](https://github.com/MetaMask/metamask-mobile/pull/10279): fix: use ACTIONS_WRITE_TOKEN in attributions workflow (#10279)

## [7.27.1]

### Fixed

- [#10438](https://github.com/MetaMask/metamask-mobile/pull/10438): cherry-pick: update @blockaid/ppom_release package to version 1.5.1 (#10435) #10438

## [7.27.0]

### Added

- [#7759](https://github.com/MetaMask/metamask-mobile/pull/7759): feat: upgrade react-native-webview (#7759)
- [#10000](https://github.com/MetaMask/metamask-mobile/pull/10000): feat: support security alerts API (#10000)
- [#10039](https://github.com/MetaMask/metamask-mobile/pull/10039): feat: enable transaction simulations (#10039)
- [#10085](https://github.com/MetaMask/metamask-mobile/pull/10085): feat: Integrate Firebase libraries and initial config to enable Push Notifications FCM. (#10085)
- [#9724](https://github.com/MetaMask/metamask-mobile/pull/9724): feat: remove `selectIdentities` in favour of `selectInternalAccounts` (#9724)
- [#9356](https://github.com/MetaMask/metamask-mobile/pull/9356): feat: add api spec test infrastructure (#9356)
- [#10144](https://github.com/MetaMask/metamask-mobile/pull/10144): feat: add increase decrease token percentage (#10144)
- [#10189](https://github.com/MetaMask/metamask-mobile/pull/10189): feat: Revamp Snap connection screen (#10189)
- [#10121](https://github.com/MetaMask/metamask-mobile/pull/10121): feat: enables snaps feature flag on mobile (#10121)
- [#10040](https://github.com/MetaMask/metamask-mobile/pull/10040): feat: edit networks UI redesign (#10040)
- [#10120](https://github.com/MetaMask/metamask-mobile/pull/10120): feat: add i18n to for the add/edit network ui re-design (#10120)
- [#9961](https://github.com/MetaMask/metamask-mobile/pull/9961): feat: adding search to the network bottomsheet as part of the networks management UI redesign (#9961)
- [#10112](https://github.com/MetaMask/metamask-mobile/pull/10112): feat: Add the ""is_smart_transaction"" prop for the ""Swap Started"" event (#10112)
- [#10086](https://github.com/MetaMask/metamask-mobile/pull/10086): feat: Add team label to pr (#10086)

### Changed

- [#10153](https://github.com/MetaMask/metamask-mobile/pull/10153): chore: Migrate AsyncStorage to mmkv (#10153)
- [#10071](https://github.com/MetaMask/metamask-mobile/pull/10071): chore: New Crowdin translations by Github Action (#10071)
- [#9441](https://github.com/MetaMask/metamask-mobile/pull/9441): chore: Convert initial background state to typed background state (#9441)
- [#10219](https://github.com/MetaMask/metamask-mobile/pull/10219): test: address flaky smoke e2e (#10219)
- [#10167](https://github.com/MetaMask/metamask-mobile/pull/10167): chore: added the requirement for PRs to contain a QA label (#10167)
- [#10015](https://github.com/MetaMask/metamask-mobile/pull/10015): test: add connect to Portfolio (#10015)
- [#10134](https://github.com/MetaMask/metamask-mobile/pull/10134): test: disable privacy policy toast and whats new modal using fixtures (#10134)
- [#10128](https://github.com/MetaMask/metamask-mobile/pull/10128): refactor: update bitrise e2e check to not run on forks (#10128)
- [#10092](https://github.com/MetaMask/metamask-mobile/pull/10092): chore: merge release 7.24.3 tag in 7.26.0 (#10092)
- [#10070](https://github.com/MetaMask/metamask-mobile/pull/10070): chore: update attribution (#10070)
- [#9779](https://github.com/MetaMask/metamask-mobile/pull/9779): chore: Update accounts controller v14 (#9779)
- [#10055](https://github.com/MetaMask/metamask-mobile/pull/10055): test: Fix detox test run inconsistencies (#10055)
- [#9777](https://github.com/MetaMask/metamask-mobile/pull/9777): chore: New Crowdin translations by Github Action (#9777)
- [#9960](https://github.com/MetaMask/metamask-mobile/pull/9960): chore: add typescript fitness function (#9960)
- [#10048](https://github.com/MetaMask/metamask-mobile/pull/10048): chore: Chore/9924 - Enable `@typescript-eslint/no-explicit-any` as error rule (#10048)
- [#9652](https://github.com/MetaMask/metamask-mobile/pull/9652): chore(ramp): upgrade sdk to 1.28.1 (#9652)
- [#9969](https://github.com/MetaMask/metamask-mobile/pull/9969): test: add E2E for increase allowance (#9969)
- [#9811](https://github.com/MetaMask/metamask-mobile/pull/9811): chore: Add Notification devs to codeowners file (#9811)
- [#9936](https://github.com/MetaMask/metamask-mobile/pull/9936): chore: restore bot workflow to update attributions (#9936)
- [#10067](https://github.com/MetaMask/metamask-mobile/pull/10067): chore: add smokeAssets e2e tag (#10067)
- [#10213](https://github.com/MetaMask/metamask-mobile/pull/10213): chore: reorder accounts in ETH_REQUESTACCOUNTS response to prioritize selectedAddress in the 'AndroidService' (#10213)
- [#9914](https://github.com/MetaMask/metamask-mobile/pull/9914): chore: fix the incorrect URL displayed during transaction confirmation (#9914)
- [#10063](https://github.com/MetaMask/metamask-mobile/pull/10063): chore: Refactor Snaps integration (#10063)

### Fixed

- [#10168](https://github.com/MetaMask/metamask-mobile/pull/10168): fix: convert Sentry messages to log (#10168)
- [#9918](https://github.com/MetaMask/metamask-mobile/pull/9918): fix: hide amount in simulations for testnets if its opt out (#9918)
- [#10164](https://github.com/MetaMask/metamask-mobile/pull/10164): fix: Stop running fencing logic on `node_modules` (#10164)
- [#10146](https://github.com/MetaMask/metamask-mobile/pull/10146): fix: add API Spec Tests section in testing.md (#10146)
- [#10122](https://github.com/MetaMask/metamask-mobile/pull/10122): fix: updated changelog for 7.24.4 (#10122)
- [#10034](https://github.com/MetaMask/metamask-mobile/pull/10034): fix: Auto capitalize letter to none to have the same behaviour as the password field on create new wallet flow (#10034)
- [#10233](https://github.com/MetaMask/metamask-mobile/pull/10233): fix: copy changes in blockaid settings (#10233)
- [#10190](https://github.com/MetaMask/metamask-mobile/pull/10190): fix: untranslated error when speed up transaction (#10190)
- [#10227](https://github.com/MetaMask/metamask-mobile/pull/10227): fix: add edge case of having falsy address for `useTokenListEntries` (#10227)
- [#10163](https://github.com/MetaMask/metamask-mobile/pull/10163): fix: add tokenList iconUrl to `IdentIcon` component (#10163)
- [#10192](https://github.com/MetaMask/metamask-mobile/pull/10192): fix: blockaid validations for deeplink transactions (#10192)
- [#10142](https://github.com/MetaMask/metamask-mobile/pull/10142): fix: memoize token list (#10142)
- [#10049](https://github.com/MetaMask/metamask-mobile/pull/10049): fix: fix stuck after `nonce too low` error (#10049)
- [#9795](https://github.com/MetaMask/metamask-mobile/pull/9795): fix: improve message display for typed sign messages (#9795)
- [#10247](https://github.com/MetaMask/metamask-mobile/pull/10247): fix: add support for svg uris without viewbox (#10247)
- [#9972](https://github.com/MetaMask/metamask-mobile/pull/9972): fix(devDeps): ganache@^7.7.7->^7.9.2 (#9972)
- [#10127](https://github.com/MetaMask/metamask-mobile/pull/10127): fix: swaps android swap allowance error (#10127)
- [#10088](https://github.com/MetaMask/metamask-mobile/pull/10088): fix: Swap with unapproved token (#10088)
- [#10133](https://github.com/MetaMask/metamask-mobile/pull/10133): fix: Fix BaseControllerV1 state rehydration (#10133)
- [#10151](https://github.com/MetaMask/metamask-mobile/pull/10151): fix: fix checksum address (#10151)
- [#10135](https://github.com/MetaMask/metamask-mobile/pull/10135): fix: fix checksum address for balance check (#10135)
- [#9857](https://github.com/MetaMask/metamask-mobile/pull/9857): fix: create nft auto detection modal and remove nft polling logic (#9857)
- [#9843](https://github.com/MetaMask/metamask-mobile/pull/9843): fix: deeplink is not opening the site in the inapp-browser when the wallet is locked (#9843)
- [#10064](https://github.com/MetaMask/metamask-mobile/pull/10064): fix: Always mark the STX Opt In modal as seen (#10064)

## [7.26.1]

### Fixed

- [#9724](https://github.com/MetaMask/metamask-mobile/pull/9724): feat: remove selectIdentities in favour of selectInternalAccounts

## [7.26.0]

### Added

- [#9937](https://github.com/MetaMask/metamask-mobile/pull/9937): feat: modification of the network bottom sheet to use the new UI redesign by adding the popular network section as additional network (#9937)
- [#9856](https://github.com/MetaMask/metamask-mobile/pull/9856): feat: new attribution github workflow (#9856)
- [#9768](https://github.com/MetaMask/metamask-mobile/pull/9768): feat: add MetaMetrics delete on Wallet delete (#9768)
- [#9785](https://github.com/MetaMask/metamask-mobile/pull/9785): feat: Log the validity of the keyringController in the top 3 Migrations that appear in Sentry (#9785)
- [#9885](https://github.com/MetaMask/metamask-mobile/pull/9885): feat: Feat/9492 add unsupported method and legacy method middlewares (#9885)
- [#9743](https://github.com/MetaMask/metamask-mobile/pull/9743): feat: Metrics/1803 emit error viewed event (#9743)
- [#9888](https://github.com/MetaMask/metamask-mobile/pull/9888): feat: add set approve for all screen (#9888)
- [#9794](https://github.com/MetaMask/metamask-mobile/pull/9794): feat: add increase allowance screen (#9794)
- [#9828](https://github.com/MetaMask/metamask-mobile/pull/9828): feat: enable transaction simulations (#9828)
- [#9648](https://github.com/MetaMask/metamask-mobile/pull/9648): feat: add transaction simulations preference (#9648)
- [#9783](https://github.com/MetaMask/metamask-mobile/pull/9783): feat: add transaction simulation metrics (#9783)
- [#9793](https://github.com/MetaMask/metamask-mobile/pull/9793): feat: add fiat support to simulations (#9793)
- [#9410](https://github.com/MetaMask/metamask-mobile/pull/9410): feat: add SimulationDetails component (#9410)
- [#9070](https://github.com/MetaMask/metamask-mobile/pull/9070): feat: remove selectSelectedAddress in favour of selectSelectedInternalAccount (#9070)
- [#9845](https://github.com/MetaMask/metamask-mobile/pull/9845): feat: updated design-tokens to v4 (#9845)
- [#9653](https://github.com/MetaMask/metamask-mobile/pull/9653): feat: added design tokens eslint rules to mobile (#9653)
- [#9473](https://github.com/MetaMask/metamask-mobile/pull/9473): feat: notifications details screen (#9473)

### Changed

- [#9884](https://github.com/MetaMask/metamask-mobile/pull/9884): chore(pr template + readme): add link to contributor docs (#9884)
- [#9863](https://github.com/MetaMask/metamask-mobile/pull/9863): chore: Revert ""fix: swaps quote nan to bnjs (#9848)"" (#9863)
- [#9915](https://github.com/MetaMask/metamask-mobile/pull/9915): test: 1454 refactor modal pages batch 4 (#9915)
- [#9998](https://github.com/MetaMask/metamask-mobile/pull/9998): test: marketing optin date trigger testing. (#9998)
- [#9941](https://github.com/MetaMask/metamask-mobile/pull/9941): chore: Revert ""chore: fitness quality gate to only allow TS & TSX files in app directory"" (#9941)
- [#9913](https://github.com/MetaMask/metamask-mobile/pull/9913): chore: Update signature controller to v16 (#9913)
- [#9723](https://github.com/MetaMask/metamask-mobile/pull/9723): chore: fitness quality gate to only allow TS & TSX files in app directory (#9723)
- [#9926](https://github.com/MetaMask/metamask-mobile/pull/9926): chore: Resolve braces package to address audit issue (#9926)
- [#9814](https://github.com/MetaMask/metamask-mobile/pull/9814): chore: Update Preferences Controller v^11 (#9814)
- [#9714](https://github.com/MetaMask/metamask-mobile/pull/9714): test: import tokens detected (#9714)
- [#9693](https://github.com/MetaMask/metamask-mobile/pull/9693): chore: update gas fee controller to 15.1.2 (#9693)
- [#9868](https://github.com/MetaMask/metamask-mobile/pull/9868): chore: add source to setup script (#9868)
- [#9886](https://github.com/MetaMask/metamask-mobile/pull/9886): test: Update Browserstack url as old link deprecated (#9886)
- [#9865](https://github.com/MetaMask/metamask-mobile/pull/9865): chore: swap view crash fetching quotes (#9865)
- [#9852](https://github.com/MetaMask/metamask-mobile/pull/9852): test: fix Assertion only working on IOS (#9852)
- [#9838](https://github.com/MetaMask/metamask-mobile/pull/9838): test: E2e Regression failure fix (#9838)
- [#9805](https://github.com/MetaMask/metamask-mobile/pull/9805): chore: Upgrade address-book-controller (#9805)
- [#9809](https://github.com/MetaMask/metamask-mobile/pull/9809): chore: merge 7.23.0 tag (#9809)
- [#9952](https://github.com/MetaMask/metamask-mobile/pull/9952): chore: update code owners (#9952)
- [#9790](https://github.com/MetaMask/metamask-mobile/pull/9790): chore(ci): update @rhysd/actionlint to 1.7.1 (#9790)
- [#9545](https://github.com/MetaMask/metamask-mobile/pull/9545): chore: Fix CocoaPods install on Linux (#9545)
- [#9883](https://github.com/MetaMask/metamask-mobile/pull/9883): chore: Update ppom package to 1.4.7 (#9883)
- [#9866](https://github.com/MetaMask/metamask-mobile/pull/9866): chore: commit changes to project.pgxproj caused by known issue in xcode 15 (#9866)
- [#9986](https://github.com/MetaMask/metamask-mobile/pull/9986): test: fix `TransactionReview` snapshots (#9986)
- [#9965](https://github.com/MetaMask/metamask-mobile/pull/9965): test: comment out flaky test from `encryption-with-key` (#9965)
- [#9964](https://github.com/MetaMask/metamask-mobile/pull/9964): test: fix snapshots from `AesCryptoTestForm` (#9964)
- [#9898](https://github.com/MetaMask/metamask-mobile/pull/9898): test: AES module E2E tests (#9898)
- [#9949](https://github.com/MetaMask/metamask-mobile/pull/9949): chore: add SmokeAccounts E2E tag (#9949)
- [#9942](https://github.com/MetaMask/metamask-mobile/pull/9942): refactor: updated cellbase to allow size changes (#9942)
- [#9922](https://github.com/MetaMask/metamask-mobile/pull/9922): refactor: replace secondary colors with warning colors (#9922)
- [#9899](https://github.com/MetaMask/metamask-mobile/pull/9899): chore: align ButtonIcons with design (#9899)
- [#9875](https://github.com/MetaMask/metamask-mobile/pull/9875): refactor: update brandColors to be imported from design system (#9875)
- [#9718](https://github.com/MetaMask/metamask-mobile/pull/9718): chore: upgrade snaps-controller and adapts its usage (#9718)
- [#9920](https://github.com/MetaMask/metamask-mobile/pull/9920): chore: remove update-attributions.yml (#9920)
- [#9570](https://github.com/MetaMask/metamask-mobile/pull/9570): chore: Update `@metamask/keyring-controller` to v16 (#9570)
- [#9234](https://github.com/MetaMask/metamask-mobile/pull/9234): chore: update the 'CODEOWNERS' file to include directories relevant to the 'sdk-devs' team (#9234)

### Fixed

- [#9903](https://github.com/MetaMask/metamask-mobile/pull/9903): fix: upgrade test failure fix for 7.24.0 release branch (#9903)
- [#9844](https://github.com/MetaMask/metamask-mobile/pull/9844): fix: confirmations failing ci tests (#9844)
- [#9831](https://github.com/MetaMask/metamask-mobile/pull/9831): fix: Fix audit ci (#9831)
- [#9893](https://github.com/MetaMask/metamask-mobile/pull/9893): fix: contributor docs link is not correct in pr template (#9893)
- [#9847](https://github.com/MetaMask/metamask-mobile/pull/9847): Fix/release testing issues (#9847)
- [#9946](https://github.com/MetaMask/metamask-mobile/pull/9946): fix: Update help center URLs (#9946)
- [#9848](https://github.com/MetaMask/metamask-mobile/pull/9848): fix: swaps quote nan to bnjs (#9848)
- [#9781](https://github.com/MetaMask/metamask-mobile/pull/9781): fix: Update Basic Functionality settings description.json (#9781)
- [#9763](https://github.com/MetaMask/metamask-mobile/pull/9763): "fix: JS ""pseudo protocol"" works when pasted on mobile browser (#9763)"
- [#9993](https://github.com/MetaMask/metamask-mobile/pull/9993): fix: Fix/re order internal accounts (#9993)
- [#9991](https://github.com/MetaMask/metamask-mobile/pull/9991): fix: fixed snapshots (#9991)
- [#9905](https://github.com/MetaMask/metamask-mobile/pull/9905): "fix: ""data collection for marketing"" from PR #9687 (#9905)"
- [#9980](https://github.com/MetaMask/metamask-mobile/pull/9980): fix: add migration to fix engine does not exist and (#9980)
- [#9982](https://github.com/MetaMask/metamask-mobile/pull/9982): fix: migration 43 stringify to type of (#9982)
- [#9894](https://github.com/MetaMask/metamask-mobile/pull/9894): fix: Update bitrise.yml with correct Browserstack url (#9894)
- [#9887](https://github.com/MetaMask/metamask-mobile/pull/9887): fix: Update Browserstack url as old link deprecated (#9887)
- [#9855](https://github.com/MetaMask/metamask-mobile/pull/9855): fix: Undefined balance when fetching from chain (#9855)
- [#9812](https://github.com/MetaMask/metamask-mobile/pull/9812): fix: main token balance not updating when switching accounts (#9812)
- [#9674](https://github.com/MetaMask/metamask-mobile/pull/9674): fix: update Delete MetaMetrics Data copy to 30 days (#9674)
- [#9819](https://github.com/MetaMask/metamask-mobile/pull/9819): fix: Add .e2e as part of the setup script (#9819)
- [#9791](https://github.com/MetaMask/metamask-mobile/pull/9791): fix: Disable segment in E2E mode (#9791)
- [#9934](https://github.com/MetaMask/metamask-mobile/pull/9934): fix: flakey CI asdf node version (#9934)
- [#9584](https://github.com/MetaMask/metamask-mobile/pull/9584): fix: @metamask/swaps-controller v6 -> v9 (#9584)
- [#9867](https://github.com/MetaMask/metamask-mobile/pull/9867): fix: only remove SES from exception if exception exists (#9867)
- [#9870](https://github.com/MetaMask/metamask-mobile/pull/9870): fix: yarn deduplicate release/7.24.0 to fix dupe in #9864 (#9870)
- [#9842](https://github.com/MetaMask/metamask-mobile/pull/9842): fix: error validating wallet connect signature with security provider (#9842)
- [#9999](https://github.com/MetaMask/metamask-mobile/pull/9999): fix: new locales (#9999)
- [#9826](https://github.com/MetaMask/metamask-mobile/pull/9826): fix: add migration for linea goerli (#9826)
- [#9876](https://github.com/MetaMask/metamask-mobile/pull/9876): fix: update patch for updateNftMetadata fct (#9876)
- [#9759](https://github.com/MetaMask/metamask-mobile/pull/9759): fix: remove unecessary calls to third party apis (#9759)
- [#9746](https://github.com/MetaMask/metamask-mobile/pull/9746): fix: render images of networks removed from popularNetwork list (#9746)
- [#9970](https://github.com/MetaMask/metamask-mobile/pull/9970): fix: error 'Invalid character in NaN' while gas editing (#9970)
- [#9902](https://github.com/MetaMask/metamask-mobile/pull/9902): fix: Update PPOM controller to fix handling of HTTP status codes (#9902)
- [#9943](https://github.com/MetaMask/metamask-mobile/pull/9943): fix: Duplicate accounts (#9943)
- [#9974](https://github.com/MetaMask/metamask-mobile/pull/9974): fix(ramp): memoize asset before passing it to balance hook (#9968) (#9974)
- [#9882](https://github.com/MetaMask/metamask-mobile/pull/9882): fix: edit account name screen display incorrect account name (#9882)
- [#9891](https://github.com/MetaMask/metamask-mobile/pull/9891): fix: bug report template - remove reference to recordit (#9891)
- [#9755](https://github.com/MetaMask/metamask-mobile/pull/9755): fix: display the DApp URL in connect screen for MetaMask IOS-SDK (#9755)

## [7.24.4]

### Fixed

- [10064](https://github.com/MetaMask/metamask-mobile/pull/10064) fix: Always mark the STX Opt In modal as seen
- [10088](https://github.com/MetaMask/metamask-mobile/pull/10088) fix: Swap with unapproved token
- [10099](https://github.com/MetaMask/metamask-mobile/pull/10099) fix: stx on ramps missing origin

## [7.24.3]

### Fixed

- [#10045](https://github.com/MetaMask/metamask-mobile/pull/10045): fix: Update ppom package to 1.4.8 (#10041)

## [7.24.2]

### Added

- [#9687](https://github.com/MetaMask/metamask-mobile/pull/9687): feat: adds "data collection for marketing" toggles

### Fixed

- [#9905](https://github.com/MetaMask/metamask-mobile/pull/9905): fix: remove metametrics redundant calls and improve compliance

## [7.24.1]

### Fixed

- [#9943](https://github.com/MetaMask/metamask-mobile/pull/9943): fix: Remove duplicate accounts (#9943)
- [#10006](https://github.com/MetaMask/metamask-mobile/pull/10006): fix: Fix order of accounts (#10006)
- [#10004](https://github.com/MetaMask/metamask-mobile/pull/10004): fix: Synchronize account names (#10004)
- [#9974](https://github.com/MetaMask/metamask-mobile/pull/9974): fix: Fix freeze on buy and sell flow (#9974)
- [#9980](https://github.com/MetaMask/metamask-mobile/pull/9980): fix: Fix initialization crash / login error "Engine does not exist (#9980)

## [7.24.0]

### Added

- [#9767](https://github.com/MetaMask/metamask-mobile/pull/9767): feat: push Privacy policy date to 2024 Jun 18 12:00 UTC (#9767)
- [#9707](https://github.com/MetaMask/metamask-mobile/pull/9707): feat: adds strings for the opt in toggles (#9707)
- [#9661](https://github.com/MetaMask/metamask-mobile/pull/9661): feat: smart-tx opt in modal 2 (#9661)
- [#9448](https://github.com/MetaMask/metamask-mobile/pull/9448): feat: smart tx small views (#9448)
- [#9442](https://github.com/MetaMask/metamask-mobile/pull/9442): feat: smart-tx-small-logic (#9442)
- [#9204](https://github.com/MetaMask/metamask-mobile/pull/9204): feat: Add new privacy policy alert toast (#9204)
- [#9651](https://github.com/MetaMask/metamask-mobile/pull/9651): feat: Upgrade signature Controller to v14 (#9651)
- [#9394](https://github.com/MetaMask/metamask-mobile/pull/9394): feat: Network & Gas & Assets & Utils controllers update (#9394)
- [#9625](https://github.com/MetaMask/metamask-mobile/pull/9625): feat: Update signature controller v13 (#9625)
- [#9129](https://github.com/MetaMask/metamask-mobile/pull/9129): feat: setting to show fiat values on testnets (#9129)
- [#9740](https://github.com/MetaMask/metamask-mobile/pull/9740): feat: Update checkbox to be able to override checkbox style (#9740)
- [#9346](https://github.com/MetaMask/metamask-mobile/pull/9346): feat: notifications LIST screen UI - [9 of 10] (#9346)
- [#9572](https://github.com/MetaMask/metamask-mobile/pull/9572): feat: notifications onboarding wizard - [8 of 10] (#9572)

### Changed

- [#9612](https://github.com/MetaMask/metamask-mobile/pull/9612): revert: feat(swaps): enable Base for swaps (#9286) (#9612)
- [#9735](https://github.com/MetaMask/metamask-mobile/pull/9735): chore: add swaps team to swaps domain folder (#9735)
- [#9683](https://github.com/MetaMask/metamask-mobile/pull/9683): refactor: the network name and image utils into selectors (#9683)
- [#9639](https://github.com/MetaMask/metamask-mobile/pull/9639): chore: New Crowdin translations by Github Action (#9639)
- [#9725](https://github.com/MetaMask/metamask-mobile/pull/9725): chore: make test code dev env only (#9725)
- [#9574](https://github.com/MetaMask/metamask-mobile/pull/9574): chore: update confirmations codeowners (#9574)
- [#9663](https://github.com/MetaMask/metamask-mobile/pull/9663): chore: update tx controller v13 patch notes (#9663)
- [#9629](https://github.com/MetaMask/metamask-mobile/pull/9629): chore: apply string changes from #9565 (#9629)
- [#9753](https://github.com/MetaMask/metamask-mobile/pull/9753): chore: Chore/optimize Wallet screen re-renders (#9753)
- [#9771](https://github.com/MetaMask/metamask-mobile/pull/9771): chore: align main and flask build numbers (#9771)
- [#9751](https://github.com/MetaMask/metamask-mobile/pull/9751): test: disable flakey test (#9751)
- [#9708](https://github.com/MetaMask/metamask-mobile/pull/9708): test: add send to saved contact e2e test (#9708)
- [#9690](https://github.com/MetaMask/metamask-mobile/pull/9690): test: Address App launch times failure test (#9690)
- [#9694](https://github.com/MetaMask/metamask-mobile/pull/9694): test: send flow page object refactor (#9694)
- [#9658](https://github.com/MetaMask/metamask-mobile/pull/9658): chore: Upgrade react-native-svg to 15.3 (#9658)
- [#9657](https://github.com/MetaMask/metamask-mobile/pull/9657): chore: Update boost checksum (#9657)
- [#9609](https://github.com/MetaMask/metamask-mobile/pull/9609): chore: add deprecated tag to the websiteicon component (#9609)
- [#9619](https://github.com/MetaMask/metamask-mobile/pull/9619): chore(deps): remove unused react-native-v8 (#9619)
- [#9599](https://github.com/MetaMask/metamask-mobile/pull/9599): chore: update Encryptor CODEOWNER to Accounts Team (#9599)
- [#9734](https://github.com/MetaMask/metamask-mobile/pull/9734): test: Added swap ERC20->ETH test case (#9734)
- [#9712](https://github.com/MetaMask/metamask-mobile/pull/9712): chore: remove unnecessary patch imports and change the patch branch name (#9712)

### Fixed

- [#9301](https://github.com/MetaMask/metamask-mobile/pull/9301): fix: flaky tests issues template skip 2 (#9301)
- [#9774](https://github.com/MetaMask/metamask-mobile/pull/9774): fix: unit tests (#9774)
- [#9706](https://github.com/MetaMask/metamask-mobile/pull/9706): fix: QR scanner crash when user dismisses camera view in web view (#9706)
- [#9787](https://github.com/MetaMask/metamask-mobile/pull/9787): fix: revert use of sponge not available in actions Ubuntu image (#9787)
- [#9780](https://github.com/MetaMask/metamask-mobile/pull/9780): fix: make version setting script work with both main and flask (#9780)
- [#9721](https://github.com/MetaMask/metamask-mobile/pull/9721): fix: App slower when changing account and switching network (#9721)
- [#9775](https://github.com/MetaMask/metamask-mobile/pull/9775): fix: Update boost checksum (#9775)
- [#9772](https://github.com/MetaMask/metamask-mobile/pull/9772): fix: Fix/ruby install (#9772)
- [#9773](https://github.com/MetaMask/metamask-mobile/pull/9773): fix: e2e builds (#9773)
- [#9742](https://github.com/MetaMask/metamask-mobile/pull/9742): fix: Selecting custom ethereum mainnet on fresh install (#9742)
- [#9733](https://github.com/MetaMask/metamask-mobile/pull/9733): fix: Fix/9662 account section disappears (#9733)
- [#9699](https://github.com/MetaMask/metamask-mobile/pull/9699): fix: Move permission middleware to be later than rpc method middleware (#9699)
- [#9680](https://github.com/MetaMask/metamask-mobile/pull/9680): fix: Increase waiting for swaps and switch account on E2E (#9680)
- [#9656](https://github.com/MetaMask/metamask-mobile/pull/9656): fix: Fix/1723 broken sign verification (#9656)
- [#9630](https://github.com/MetaMask/metamask-mobile/pull/9630): fix: Fix/rn svg pod files (#9630)
- [#9614](https://github.com/MetaMask/metamask-mobile/pull/9614): fix: migrations key numbers (#9614)
- [#9611](https://github.com/MetaMask/metamask-mobile/pull/9611): fix: Fix/9345 bitrise cache failure (#9611)
- [#9696](https://github.com/MetaMask/metamask-mobile/pull/9696): fix(devDeps): @lavamoat/allow-scripts@^2.3.1->^3.0.4 (#9696)
- [#9685](https://github.com/MetaMask/metamask-mobile/pull/9685): fix(deps): @metamask/eth-sig-util@^4.0.1->^7.0.2 (#9685)
- [#9682](https://github.com/MetaMask/metamask-mobile/pull/9682): fix: update base nickname (#9682)
- [#9686](https://github.com/MetaMask/metamask-mobile/pull/9686): fix: update sepolia nickname (#9686)
- [#9764](https://github.com/MetaMask/metamask-mobile/pull/9764): fix: selectSelectedInternalAccount: Account with ID not found (#9764)
- [#9568](https://github.com/MetaMask/metamask-mobile/pull/9568): fix: 9559 issue android json parse (#9568)
- [#9616](https://github.com/MetaMask/metamask-mobile/pull/9616): fix: fix the issue 9560 which QR code accounts has been reappeared aftter user `remove wallets` (#9616)

## [7.23.0]

### Added

- [#9595](https://github.com/MetaMask/metamask-mobile/pull/9595): feat: Upgrade to react-native-svg to 15.2.0 (#9595)
- [#9305](https://github.com/MetaMask/metamask-mobile/pull/9305): feat: Update SignatureController v6.1.3 + LoggingController v2.0.0 (#9305)
- [#9546](https://github.com/MetaMask/metamask-mobile/pull/9546): feat: fix logs for 1709 (#9546)
- [#9504](https://github.com/MetaMask/metamask-mobile/pull/9504): feat: Log the validity of keyringController in EngineService for initialisation and update (#9504)
- [#9288](https://github.com/MetaMask/metamask-mobile/pull/9288): feat: Update assets controller to v^18 (#9288)
- [#9286](https://github.com/MetaMask/metamask-mobile/pull/9286): feat(swaps): enable Base for swaps (#9286)
- [#9495](https://github.com/MetaMask/metamask-mobile/pull/9495): feat: url bar no longer shown in the tab thumnail list view (#9495)
- [#9474](https://github.com/MetaMask/metamask-mobile/pull/9474): feat: add localizations for the browser tab (#9474)
- [#9435](https://github.com/MetaMask/metamask-mobile/pull/9435): feat: sdk async persistence and protocol upgrade (#9435)
- [#9119](https://github.com/MetaMask/metamask-mobile/pull/9119): feat(ramp): add activation keys labels and DS components (#9119)
- [#9372](https://github.com/MetaMask/metamask-mobile/pull/9372): feat: Add `useTokenListName` hook for `Name` component (#9372)
- [#9407](https://github.com/MetaMask/metamask-mobile/pull/9407): feat: Add `useFirstPartyContractName` hook (#9407)
- [#9379](https://github.com/MetaMask/metamask-mobile/pull/9379): feat: create basic Name component for simulations (#9379)
- [#9547](https://github.com/MetaMask/metamask-mobile/pull/9547): feat: OS to Reservoir migration (#9547)
- [#9431](https://github.com/MetaMask/metamask-mobile/pull/9431): feat: add palm to popular network (#9431)
- [#9508](https://github.com/MetaMask/metamask-mobile/pull/9508): feat: bump controllers related accounts logic (#9508)
- [#8827](https://github.com/MetaMask/metamask-mobile/pull/8827): feat: preinstalled mobile snaps (#8827)
- [#9392](https://github.com/MetaMask/metamask-mobile/pull/9392): feat: notifications onboarding wizard (#9392)
- [#9450](https://github.com/MetaMask/metamask-mobile/pull/9450): feat: added TagBase component (#9450)
- [#9401](https://github.com/MetaMask/metamask-mobile/pull/9401): feat: updated styling in badgenetwork (#9401)

### Changed

- [#9571](https://github.com/MetaMask/metamask-mobile/pull/9571): chore: revert feat: notifications onboarding wizard (#9392) (#9571)
- [#9610](https://github.com/MetaMask/metamask-mobile/pull/9610): test: Fix flakiness caused by the notification permission dialog which caused confirmation test flakiness (#9610)
- [#9577](https://github.com/MetaMask/metamask-mobile/pull/9577): chore: Chore/1742 remove vault recreation log in (#9577)
- [#9576](https://github.com/MetaMask/metamask-mobile/pull/9576): chore: Update migrations with Fatal Errors (#9576)
- [#9529](https://github.com/MetaMask/metamask-mobile/pull/9529): test: Refactor browser and testdapp page objects (#9529)
- [#9231](https://github.com/MetaMask/metamask-mobile/pull/9231): chore: ensure gemfile versions (#9231)
- [#9502](https://github.com/MetaMask/metamask-mobile/pull/9502): test: add edit custom mainnet scenario (#9502)
- [#9088](https://github.com/MetaMask/metamask-mobile/pull/9088): chore: Update TransactionController to v13 and ApprovalController to v3.5.2 (#9088)
- [#9430](https://github.com/MetaMask/metamask-mobile/pull/9430): test: Add timeouts to Detox builds/tests worflows (#9430)
- [#9264](https://github.com/MetaMask/metamask-mobile/pull/9264): chore: Force appium drivers to use @xmldom/xmldom@0.7.13 (#9264)
- [#9501](https://github.com/MetaMask/metamask-mobile/pull/9501): "chore: Revert ""chore: Remove notify step from pr_e2e_smoke_pipeline"" (#9501)"
- [#9500](https://github.com/MetaMask/metamask-mobile/pull/9500): chore: Remove notify step from pr_e2e_smoke_pipeline (#9500)
- [#9460](https://github.com/MetaMask/metamask-mobile/pull/9460): "chore: Revert ""chore(iyarc): remove resolved audit advisory (#9455)"" (#9460)"
- [#9420](https://github.com/MetaMask/metamask-mobile/pull/9420): test: move NFT import test to quarantine folder (#9420)
- [#9413](https://github.com/MetaMask/metamask-mobile/pull/9413): test: fix flakey E2E tests (#9413)
- [#9415](https://github.com/MetaMask/metamask-mobile/pull/9415): refactor(ramp): transform aggregator network chain id to string (#9415)
- [#8138](https://github.com/MetaMask/metamask-mobile/pull/8138): test(ramp): add useActivationKeys hook test (#8138)
- [#9011](https://github.com/MetaMask/metamask-mobile/pull/9011): refactor(ramp): use statusDescription in order details (#9011)
- [#9203](https://github.com/MetaMask/metamask-mobile/pull/9203): refactor(encryptor): align Encryptor methods to match @metamask/browser-passworder (#9203)
- [#9503](https://github.com/MetaMask/metamask-mobile/pull/9503): chore: upgrade nodejs to v20 LTS (#9503)
- [#9371](https://github.com/MetaMask/metamask-mobile/pull/9371): chore: remove unecessary conditional (#9371)
- [#9484](https://github.com/MetaMask/metamask-mobile/pull/9484): chore(devDeps): @actions/github@^5.1.1->^6.0.0 (#9484)
- [#9454](https://github.com/MetaMask/metamask-mobile/pull/9454): chore: Update Jest to v29 (#9454)
- [#9475](https://github.com/MetaMask/metamask-mobile/pull/9475): chore: Fix handling of generated ppom files (#9475)
- [#9388](https://github.com/MetaMask/metamask-mobile/pull/9388): chore: initial _.metafi and _.metaswap URL migrations (#9388)
- [#9455](https://github.com/MetaMask/metamask-mobile/pull/9455): chore(iyarc): remove resolved audit advisory (#9455)
- [#8557](https://github.com/MetaMask/metamask-mobile/pull/8557): chore: remove unused @metamask/oss-attribution-generator (#8557)

### Fixed

- [#9525](https://github.com/MetaMask/metamask-mobile/pull/9525): fix: fix regression tests (#9525)
- [#9411](https://github.com/MetaMask/metamask-mobile/pull/9411): fix: refactor mechanism for sending analytics events (#9411)
- [#9575](https://github.com/MetaMask/metamask-mobile/pull/9575): fix: Add missing wallet_addEthereumChain to unrestricted list (#9575)
- [#9521](https://github.com/MetaMask/metamask-mobile/pull/9521): fix: Fix/1723 add permission middleware (#9521)
- [#9514](https://github.com/MetaMask/metamask-mobile/pull/9514): fix: Opensea Popup (#9514)
- [#9412](https://github.com/MetaMask/metamask-mobile/pull/9412): fix: revert siwe and apg resolution (#9412)
- [#9597](https://github.com/MetaMask/metamask-mobile/pull/9597): fix: permission-controller to include minor updates (#9597)
- [#9527](https://github.com/MetaMask/metamask-mobile/pull/9527): fix: upgrade permission-controller to 8.0.0 (#9527)
- [#9538](https://github.com/MetaMask/metamask-mobile/pull/9538): fix: cp url fix (#9538)
- [#9489](https://github.com/MetaMask/metamask-mobile/pull/9489): fix: adjust UI and Cancel ability on Basic Functionality flow (#9489)
- [#9498](https://github.com/MetaMask/metamask-mobile/pull/9498): fix(translations): Trying to account for updated translations in main for crowdin (#9498)
- [#9494](https://github.com/MetaMask/metamask-mobile/pull/9494): fix(translations): Attempting to reduce additional translations (#9494)
- [#9569](https://github.com/MetaMask/metamask-mobile/pull/9569): fix: deeplink invalid error when importing privateKey via qr (#9569)
- [#9347](https://github.com/MetaMask/metamask-mobile/pull/9347): fix: documentation link in storybook.md (#9347)
- [#9456](https://github.com/MetaMask/metamask-mobile/pull/9456): fix: fix sentry error when adding network (#9456)
- [#9177](https://github.com/MetaMask/metamask-mobile/pull/9177): fix: add symbol check on network add custom form (#9177)
- [#9566](https://github.com/MetaMask/metamask-mobile/pull/9566): fix: Fix Engine context types (#9566)
- [#9453](https://github.com/MetaMask/metamask-mobile/pull/9453): fix: include blockaid parameters in metrics of send flow (#9453)
- [#9340](https://github.com/MetaMask/metamask-mobile/pull/9340): fix: update blockaid setting section and align with extension (#9340)
- [#9539](https://github.com/MetaMask/metamask-mobile/pull/9539): fix: disable notifee badges (#9539)
- [#9436](https://github.com/MetaMask/metamask-mobile/pull/9436): fix: notification settings state bug (#9436)
- [#9543](https://github.com/MetaMask/metamask-mobile/pull/9543): fix: IPHONEOS_DEPLOYMENT_TARGET: 11 -> 12 (#9543)
- [#9523](https://github.com/MetaMask/metamask-mobile/pull/9523): fix: migrate from git-reffed react-native-search-api to @metamask/react-native-search-api (#9523)
- [#9522](https://github.com/MetaMask/metamask-mobile/pull/9522): fix: migrate from patched react-native-actionsheet to @metamask/react-native-actionsheet (#9522)
- [#9483](https://github.com/MetaMask/metamask-mobile/pull/9483): fix: migrate from patched @exodus/react-native-payments to @metamask/react-native-payments (#9483)
- [#9482](https://github.com/MetaMask/metamask-mobile/pull/9482): fix: remove resolution react-native-svg-asset-plugin/sharp@^0.30.5 (#9482)
- [#9143](https://github.com/MetaMask/metamask-mobile/pull/9143): fix: Yarn 1.22.22 (#9143)

## [7.22.0]

### Added

- [#9329](https://github.com/MetaMask/metamask-mobile/pull/9329): feat: Added log to capture failing exception for getItem (#9329)
- [#9271](https://github.com/MetaMask/metamask-mobile/pull/9271): feat: update phishing controller v8.0.0 (#9271)
- [#9254](https://github.com/MetaMask/metamask-mobile/pull/9254): feat: Update Gas fee controller v10 (#9254)
- [#9183](https://github.com/MetaMask/metamask-mobile/pull/9183): feat: gas fee controller update v^7 (#9183)
- [#9241](https://github.com/MetaMask/metamask-mobile/pull/9241): feat: Update network controller to v^15 (#9241)
- [#9149](https://github.com/MetaMask/metamask-mobile/pull/9149): feat: Update controller utils to 5.0.2 (#9149)
- [#9182](https://github.com/MetaMask/metamask-mobile/pull/9182): feat: Update assets controllers v14 (#9182)
- [#9406](https://github.com/MetaMask/metamask-mobile/pull/9406): feat: notifications feature flag (#9406)
- [#9263](https://github.com/MetaMask/metamask-mobile/pull/9263): feat: add notifications onboarding wizard (#9263)
- [#9258](https://github.com/MetaMask/metamask-mobile/pull/9258): feat: notifications settings UI (#9258)
- [#9240](https://github.com/MetaMask/metamask-mobile/pull/9240): feat: notifications types (#9240)
- [#9238](https://github.com/MetaMask/metamask-mobile/pull/9238): feat: add new notifications badge (#9238)
- [#9257](https://github.com/MetaMask/metamask-mobile/pull/9257): feat: add all translations necessary to notifications feature (#9257)
- [#9208](https://github.com/MetaMask/metamask-mobile/pull/9208): feat: enable basic functionality on onboarding & settings (#9208)
- [#8565](https://github.com/MetaMask/metamask-mobile/pull/8565): feat: Improve localization workflow such that it allows for branch/PR focused translation (#8565)
- [#9225](https://github.com/MetaMask/metamask-mobile/pull/9225): feat: Update the privacy policy url (#9225)
- [#9227](https://github.com/MetaMask/metamask-mobile/pull/9227): feat: Update the Palm logo with a new one (#9227)
- [#9153](https://github.com/MetaMask/metamask-mobile/pull/9153): feat(ramp): add deeplink handler (#9153)
- [#9361](https://github.com/MetaMask/metamask-mobile/pull/9361): feat: translations for fiat testnet toggle (#9361)
- [#9236](https://github.com/MetaMask/metamask-mobile/pull/9236): feat: improve the URL validation and error handling in 'parseDeeplink' Method (#9236)
- [#9030](https://github.com/MetaMask/metamask-mobile/pull/9030): feat: Extend blockaid validations to base network (#9030)

### Changed

- [#9393](https://github.com/MetaMask/metamask-mobile/pull/9393): test: Fix failing regression test basic fun feat (#9393)
- [#9386](https://github.com/MetaMask/metamask-mobile/pull/9386): chore: Revert #9263 feat: add notifications onboarding wizard (#9386)
- [#8909](https://github.com/MetaMask/metamask-mobile/pull/8909): test: 1453 refactor modal pages batch 3 (#8909)
- [#8856](https://github.com/MetaMask/metamask-mobile/pull/8856): test: E2E networks Flow (#8856)
- [#9175](https://github.com/MetaMask/metamask-mobile/pull/9175): test: Upgrading test cases (#9175)
- [#8896](https://github.com/MetaMask/metamask-mobile/pull/8896): test: 8735 research appium upgrading app version (#8896)
- [#9285](https://github.com/MetaMask/metamask-mobile/pull/9285): chore: New Crowdin translations by Github Action (#9285)
- [#9317](https://github.com/MetaMask/metamask-mobile/pull/9317): chore: smart tx small constants (#9317)
- [#9320](https://github.com/MetaMask/metamask-mobile/pull/9320): chore: add strings to en.json for smart transactions (#9320)
- [#9171](https://github.com/MetaMask/metamask-mobile/pull/9171): chore(deps): remove useless @ethereumjs/common direct dependency (#9171)
- [#9192](https://github.com/MetaMask/metamask-mobile/pull/9192): chore: update readme (#9192)
- [#9304](https://github.com/MetaMask/metamask-mobile/pull/9304): chore(ramp): upgrade sdk to 1.27.1 (#9304)
- [#9342](https://github.com/MetaMask/metamask-mobile/pull/9342): chore: Update ppom package (#9342)
- [#9336](https://github.com/MetaMask/metamask-mobile/pull/9336): chore: revert iterations (#9336)
- [#9332](https://github.com/MetaMask/metamask-mobile/pull/9332): test: fix minor details in `Encryptor` unit test (#9332)
- [#9093](https://github.com/MetaMask/metamask-mobile/pull/9093): refactor: migrate Encryptor to TypeScript and increase PBKDF2 iterations number (#9093)

### Fixed

- [#9302](https://github.com/MetaMask/metamask-mobile/pull/9302): fix: e2e test permission problem (#9302)
- [#9395](https://github.com/MetaMask/metamask-mobile/pull/9395): fix(translations): Fix hard coded repo name left from testing in diff repo (#9395)
- [#9337](https://github.com/MetaMask/metamask-mobile/pull/9337): fix: show banner alert if account balance is insufficient (#9337)
- [#9360](https://github.com/MetaMask/metamask-mobile/pull/9360): fix: remove unusable import variables (#9360)
- [#9292](https://github.com/MetaMask/metamask-mobile/pull/9292): fix: Network Configurations state is undefined (#9292)
- [#9307](https://github.com/MetaMask/metamask-mobile/pull/9307): fix: Refactor/9083 logger class (#9307)
- [#9247](https://github.com/MetaMask/metamask-mobile/pull/9247): fix: Update siwe parse to v2.1.0 (#9247)
- [#9228](https://github.com/MetaMask/metamask-mobile/pull/9228): fix: Update pods from notifications changes (#9228)
- [#9229](https://github.com/MetaMask/metamask-mobile/pull/9229): fix: Resolve missed controller-util yarn lock versions (#9229)
- [#9134](https://github.com/MetaMask/metamask-mobile/pull/9134): fix: Revert controller utils update (#9134)
- [#9216](https://github.com/MetaMask/metamask-mobile/pull/9216): fix: correct `SubjectType` for origins connecting via the `BackgroundBridge` (#9216)
- [#9362](https://github.com/MetaMask/metamask-mobile/pull/9362): fix(translations): Crowdin does not allow slashes (#9362)
- [#9326](https://github.com/MetaMask/metamask-mobile/pull/9326): fix(translations): Fix upload translations (#9326)
- [#9173](https://github.com/MetaMask/metamask-mobile/pull/9173): fix(8667): trigger swap tx on approval tx confirmed (#9173)
- [#9243](https://github.com/MetaMask/metamask-mobile/pull/9243): fix: add missing isPortfolioUrl import and update portfolio url name (#9243)
- [#9384](https://github.com/MetaMask/metamask-mobile/pull/9384): fix(deps): Move @metamask/react-native-animated-fox from git to npm (#9384)
- [#9278](https://github.com/MetaMask/metamask-mobile/pull/9278): fix(deps): axios@1.6.0->^1.6.8 (#9278)
- [#9277](https://github.com/MetaMask/metamask-mobile/pull/9277): fix(deps): remove unused eth-json-rpc-infura (#9277)
- [#9327](https://github.com/MetaMask/metamask-mobile/pull/9327): fix(deps): move @metamask/react-native-splash-screen from github.com to registry (#9327)
- [#9338](https://github.com/MetaMask/metamask-mobile/pull/9338): fix: pin web3-provider-engine@^16.0.8 in resolutions (#9338)
- [#9273](https://github.com/MetaMask/metamask-mobile/pull/9273): fix(deps): eth-rpc-errors@^4.0.3 -> @metamask/rpc-errors@^6.2.1 (#9273)
- [#9253](https://github.com/MetaMask/metamask-mobile/pull/9253): fix(deps): replace eth-json-rpc-errors with eth-rpc-errors (#9253)
- [#9224](https://github.com/MetaMask/metamask-mobile/pull/9224): fix: add migration for linea goerli (#9224)
- [#9215](https://github.com/MetaMask/metamask-mobile/pull/9215): fix: Send ppom metrics when transaction is cancelled. (#9215)
- [#9343](https://github.com/MetaMask/metamask-mobile/pull/9343): fix: Fix intermittent install failures (#9343)
- [#9142](https://github.com/MetaMask/metamask-mobile/pull/9142): fix(labeling guidelines): Add definition of regression-develop label (#9142)
- [#9214](https://github.com/MetaMask/metamask-mobile/pull/9214): fix: Fix image import related type errors (#9214)
- [#9092](https://github.com/MetaMask/metamask-mobile/pull/9092): fix: check HD keyring (#9092)
- [#9309](https://github.com/MetaMask/metamask-mobile/pull/9309): fix: error when re-using exising id on permissionController (#9309)
- [#9284](https://github.com/MetaMask/metamask-mobile/pull/9284): fix: invalid url on inapp-browser (#9284)
- [#9283](https://github.com/MetaMask/metamask-mobile/pull/9283): fix: missing walletConnect prop (#9283)

## [7.21.0]

### Added

- [#9065](https://github.com/MetaMask/metamask-mobile/pull/9065): feat: Update network controller to version 13.0.1 (#9065)
- [#9166](https://github.com/MetaMask/metamask-mobile/pull/9166): feat: signature controller update to v6.0.0 (#9166)
- [#9194](https://github.com/MetaMask/metamask-mobile/pull/9194): feat: 7.19.1 (#9194)
- [#9136](https://github.com/MetaMask/metamask-mobile/pull/9136): feat: add eth stake button (#9136)
- [#8988](https://github.com/MetaMask/metamask-mobile/pull/8988): feat: import tokens new UI (#8988)
- [#9205](https://github.com/MetaMask/metamask-mobile/pull/9205): feat: translate multi import tokens (#9205)
- [#9161](https://github.com/MetaMask/metamask-mobile/pull/9161): feat: update popular network (#9161)
- [#9165](https://github.com/MetaMask/metamask-mobile/pull/9165): feat: translate symbol warning text (#9165)
- [#9110](https://github.com/MetaMask/metamask-mobile/pull/9110): feat: patch linea token pricing (#9110)
- [#9114](https://github.com/MetaMask/metamask-mobile/pull/9114): feat: sdk deeplinking protocol (#9114)
- [#9188](https://github.com/MetaMask/metamask-mobile/pull/9188): feat: wc fixes + ux improvements (#9188)
- [#9045](https://github.com/MetaMask/metamask-mobile/pull/9045): feat: sdk connection dependency upgrade (#9045)
- [#8701](https://github.com/MetaMask/metamask-mobile/pull/8701): feat: notifications (#8701)

### Changed

- [#9199](https://github.com/MetaMask/metamask-mobile/pull/9199): chore: Chore/resolve xcode changes (#9199)
- [#9197](https://github.com/MetaMask/metamask-mobile/pull/9197): test: Change instances of messages to enContent while importing from locales (#9197)
- [#9181](https://github.com/MetaMask/metamask-mobile/pull/9181): test: fix rpc test on Ci for Android (#9181)
- [#9124](https://github.com/MetaMask/metamask-mobile/pull/9124): chore: added new privacy file and identified reason for using privacy APIs (#9124)
- [#9146](https://github.com/MetaMask/metamask-mobile/pull/9146): test: Refactor Tab bar page object (#9146)
- [#9135](https://github.com/MetaMask/metamask-mobile/pull/9135): chore: Update dependabot.yml to use new team label (#9135)
- [#9106](https://github.com/MetaMask/metamask-mobile/pull/9106): test: fix secrets for tenderly (#9106)
- [#8992](https://github.com/MetaMask/metamask-mobile/pull/8992): chore: New Crowdin translations by Github Action (#8992)
- [#9190](https://github.com/MetaMask/metamask-mobile/pull/9190): chore(deps): bump tar from 6.2.0 to 6.2.1 (#9190)
- [#9189](https://github.com/MetaMask/metamask-mobile/pull/9189): chore(deps): bump tar from 6.2.0 to 6.2.1 in /scripts/generate-attributions (#9189)
- [#9025](https://github.com/MetaMask/metamask-mobile/pull/9025): chore: improve yarn setup logs (#9025)
- [#9024](https://github.com/MetaMask/metamask-mobile/pull/9024): docs: Add xocde required config steps (#9024)
- [#9139](https://github.com/MetaMask/metamask-mobile/pull/9139): chore(deps): bump es5-ext from 0.10.62 to 0.10.64 (#9139)
- [#9133](https://github.com/MetaMask/metamask-mobile/pull/9133): chore(deps-dev): bump chromedriver from 99.0.0 to 123.0.1 (#9133)
- [#8645](https://github.com/MetaMask/metamask-mobile/pull/8645): chore(deps): bump ip from 1.1.5 to 1.1.9 (#8645)
- [#9062](https://github.com/MetaMask/metamask-mobile/pull/9062): chore(deps): bump express from 4.18.2 to 4.19.2 (#9062)
- [#9028](https://github.com/MetaMask/metamask-mobile/pull/9028): chore(deps): bump webpack-dev-middleware from 6.1.1 to 6.1.2 (#9028)
- [#8674](https://github.com/MetaMask/metamask-mobile/pull/8674): refactor: Remove usage of regex for portfolio URLs (#8674)
- [#5022](https://github.com/MetaMask/metamask-mobile/pull/5022): chore: Bump buffer from 5.2.1 to 6.0.3 (#5022)
- [#5093](https://github.com/MetaMask/metamask-mobile/pull/5093): chore: Bump pify from 4.0.1 to 6.1.0 (#5093)

### Fixed

- [#8958](https://github.com/MetaMask/metamask-mobile/pull/8958): fix: unit test metametrics at app startup (#8958)
- [#9206](https://github.com/MetaMask/metamask-mobile/pull/9206): fix: fix nfts displayed on account and refactor collectibles component (#9206)
- [#9174](https://github.com/MetaMask/metamask-mobile/pull/9174): fix: change CUSTOM_TOKEN_IMPORTED tracking mode (#9174)
- [#9148](https://github.com/MetaMask/metamask-mobile/pull/9148): fix: Tokens disappearing when updating (#9148)
- [#9123](https://github.com/MetaMask/metamask-mobile/pull/9123): fix: Revert Update controller utils to 5.0.2 (#9123)
- [#8603](https://github.com/MetaMask/metamask-mobile/pull/8603): fix: nft detection running too many times (#8603)
- [#9125](https://github.com/MetaMask/metamask-mobile/pull/9125): fix: add display warning for mumbai (#9125)
- [#9150](https://github.com/MetaMask/metamask-mobile/pull/9150): fix: wc connections and permissions system network improvement (#9150)
- [#9185](https://github.com/MetaMask/metamask-mobile/pull/9185): fix: 9108 Keystone QR code can't send asset transaction (#9185)
- [#8745](https://github.com/MetaMask/metamask-mobile/pull/8745): fix: request location permission after it is rejected during Ledger connection (#8745)
- [#9202](https://github.com/MetaMask/metamask-mobile/pull/9202): fix: Revert PR 9075 (#9202)
- [#9075](https://github.com/MetaMask/metamask-mobile/pull/9075): fix: Send ppom metrics when transaction is cancelled. (#9075)

## [7.20.1]

### Fixed

- [#9092](https://github.com/MetaMask/metamask-mobile/pull/9092): fix: check HD keyring

## [7.20.0]

### Added

- [#8982](https://github.com/MetaMask/metamask-mobile/pull/8982): feat: Update gas fee controller to version 6.1.2
- [#9079](https://github.com/MetaMask/metamask-mobile/pull/9079): feat: Update controller utils to 5.0.2
- [#9036](https://github.com/MetaMask/metamask-mobile/pull/9036): feat: Adding blockaid validations for sepolia network
- [#8668](https://github.com/MetaMask/metamask-mobile/pull/8668): feat: PPOM Version update to download files only before transaction
- [#8720](https://github.com/MetaMask/metamask-mobile/pull/8720): feat: migrate to native primary currency
- [#8989](https://github.com/MetaMask/metamask-mobile/pull/8989): feat: Signature Controller v5.3.1
- [#8759](https://github.com/MetaMask/metamask-mobile/pull/8759): feat: Accounts controller integration
- [#9007](https://github.com/MetaMask/metamask-mobile/pull/9007): feat: Assets controller updated to version 12.0.0
- [#9005](https://github.com/MetaMask/metamask-mobile/pull/9005): feat: Update network controller to version 12.2.0
- [#8920](https://github.com/MetaMask/metamask-mobile/pull/8920): feat: add the 'eth_phishing_detection' logic to the connect accounts flow
- [#8952](https://github.com/MetaMask/metamask-mobile/pull/8952): feat: Network Controller update to v12.1.2
- [#8981](https://github.com/MetaMask/metamask-mobile/pull/8981): feat: Minor update of phishing-controller
- [#8986](https://github.com/MetaMask/metamask-mobile/pull/8986): feat: Updated Assets Controllers to v11.1.0

### Changed

- [#8967](https://github.com/MetaMask/metamask-mobile/pull/8967): chore: Handle async migrations & add migration tests
- [#8826](https://github.com/MetaMask/metamask-mobile/pull/8826): refactor: update Ledger connection instructions
- [#9038](https://github.com/MetaMask/metamask-mobile/pull/9038): chore: Consolidate and simplify isTest condition
- [#9094](https://github.com/MetaMask/metamask-mobile/pull/9094): test: stabilize swaps e2e tests
- [#9069](https://github.com/MetaMask/metamask-mobile/pull/9069): test: clean up detox build/run scripts
- [#9078](https://github.com/MetaMask/metamask-mobile/pull/9078): chore: Sentry reduce traceSample rate to 0.04
- [#9039](https://github.com/MetaMask/metamask-mobile/pull/9039): refactor(ramp): persist and format amount in build quote view
- [#9033](https://github.com/MetaMask/metamask-mobile/pull/9033): Revert "feat: migrate to native primary currency (#8720)"
- [#8918](https://github.com/MetaMask/metamask-mobile/pull/8918): ci: Simplify PR template
- [#9008](https://github.com/MetaMask/metamask-mobile/pull/9008): chore(ramp): upgrade sdk to 1.26.8
- [#7591](https://github.com/MetaMask/metamask-mobile/pull/7591): chore(deps-dev): bump @babel/traverse from 7.22.6 to 7.23.2 in /ppom
- [#8842](https://github.com/MetaMask/metamask-mobile/pull/8842): ci: Create Bitrise status check for commits
- [#8990](https://github.com/MetaMask/metamask-mobile/pull/8990): chore: Remove unnecessary react native animate fox patch
- [#8987](https://github.com/MetaMask/metamask-mobile/pull/8987): chore: adding code owner for confirmation domain's code
- [#8675](https://github.com/MetaMask/metamask-mobile/pull/8675): refactor: Refactor inpage blocklist to avoid usage of regex
- [#8959](https://github.com/MetaMask/metamask-mobile/pull/8959): chore: Migrate another (3/3) batch of unit tests away from enzyme

### Fixed

- [#9000](https://github.com/MetaMask/metamask-mobile/pull/9000): fix: Revert "test: [android] run tests on the first emulator in your list …
- [#8998](https://github.com/MetaMask/metamask-mobile/pull/8998): fix: Revert "fix: hardcode emulator name to fix failing android tests on C…
- [#8995](https://github.com/MetaMask/metamask-mobile/pull/8995): fix: hardcode emulator name to fix failing android tests on CI
- [#9023](https://github.com/MetaMask/metamask-mobile/pull/9023): fix: improve SVG Validation and Error Handling in AvatarFavicon Component
- [#9001](https://github.com/MetaMask/metamask-mobile/pull/9001): fix: (#8617): Reduce enzyme usage in unit test by 25% - [2/3] (#8823)
- [#9013](https://github.com/MetaMask/metamask-mobile/pull/9013): fix: isEIP1559 is undefined migration 29 issue
- [#8980](https://github.com/MetaMask/metamask-mobile/pull/8980): fix: analytics on Account Right Button analytics
- [#8991](https://github.com/MetaMask/metamask-mobile/pull/8991): fix: add Referer to Dapp Viewed events
- [#8977](https://github.com/MetaMask/metamask-mobile/pull/8977): fix: Remove wallet connect and sdk connect prefix from ppom domain
- [#9080](https://github.com/MetaMask/metamask-mobile/pull/9080): fix: check for preferences controller in 036 migration
- [#8751](https://github.com/MetaMask/metamask-mobile/pull/8751): fix: removes addSubjectMetadata and improves Snaps Execution Environment Webview origin restriction.
- [#9082](https://github.com/MetaMask/metamask-mobile/pull/9082): fix: Check for missing identities on migration 36
- [#9031](https://github.com/MetaMask/metamask-mobile/pull/9031): fix: Remove prefix from origin before sending request to ppom
- [#9066](https://github.com/MetaMask/metamask-mobile/pull/9066): fix: dedupe dependencies
- [#9051](https://github.com/MetaMask/metamask-mobile/pull/9051): fix: Remove duplicate i18n, en key: `qr_hardware`
- [#9053](https://github.com/MetaMask/metamask-mobile/pull/9053): fix: update ppom npm package to version 1.4.5
- [#9042](https://github.com/MetaMask/metamask-mobile/pull/9042): fix: Refactor SDK initialization
- [#8975](https://github.com/MetaMask/metamask-mobile/pull/8975): fix: remove call to private/internal methods from the `@metamask/keyring-controller`
- [#9021](https://github.com/MetaMask/metamask-mobile/pull/9021): fix: Network not updating when changing account connected the first time on a DAPP
- [#8932](https://github.com/MetaMask/metamask-mobile/pull/8932): fix: breaking change from `@metamask/transaction-controller` regarding Ledger transactions

## [7.19.1]

### Fixed

- [#9193](https://github.com/MetaMask/metamask-mobile/pull/9193): fix(ramp): default networks state to array

## [7.19.0]

### Added

- [#8935](https://github.com/MetaMask/metamask-mobile/pull/8935): feat: Remove powered by blockaid line
- [#8908](https://github.com/MetaMask/metamask-mobile/pull/8908): feat: add linea sepolia network and deprecate Linea Goerli network
- [#8881](https://github.com/MetaMask/metamask-mobile/pull/8881): feat: patch for assets controller v11.0.1
- [#8844](https://github.com/MetaMask/metamask-mobile/pull/8844): feat: Add `hideSubmitButton` prop to templates
- [#8866](https://github.com/MetaMask/metamask-mobile/pull/8866): feat: Update transaction controller to v8.0.1
- [#8628](https://github.com/MetaMask/metamask-mobile/pull/8628): feat: Update transaction controller to v7.1.0
- [#8812](https://github.com/MetaMask/metamask-mobile/pull/8812): feat: Network Controller to version 11.0.0
- [#8848](https://github.com/MetaMask/metamask-mobile/pull/8848): feat: Update Phishing Controller to version 6.0.0
- [#8850](https://github.com/MetaMask/metamask-mobile/pull/8850): feat: Gas Fee Controller minor update to version 6.1.0
- [#8778](https://github.com/MetaMask/metamask-mobile/pull/8778): feat: Assets controllers update to version 10
- [#8859](https://github.com/MetaMask/metamask-mobile/pull/8859): feat: add env vars mapping in build script
- [#8785](https://github.com/MetaMask/metamask-mobile/pull/8785): feat: permissions system within sdk redux store
- [#8768](https://github.com/MetaMask/metamask-mobile/pull/8768): feat: state logs in the exported file with app version and build number

### Changed

- [#8789](https://github.com/MetaMask/metamask-mobile/pull/8789): ci: 8253 - Add fitness function action for enzyme imports
- [#8919](https://github.com/MetaMask/metamask-mobile/pull/8919): chore: Include env variable copying into yarn setup command
- [#8964](https://github.com/MetaMask/metamask-mobile/pull/8964): chore: added platform team as codeowner to component-lib, patches, bitrise.yml
- [#8899](https://github.com/MetaMask/metamask-mobile/pull/8899): chore: New Crowdin translations by Github Action
- [#8545](https://github.com/MetaMask/metamask-mobile/pull/8545): chore(ramp): add team to CODEOWNERS
- [#8965](https://github.com/MetaMask/metamask-mobile/pull/8965): chore: Reorder migrations between 7.17.1, 7.18.0, and main
- [#8960](https://github.com/MetaMask/metamask-mobile/pull/8960): chore: set nvmrc to 18.18.2
- [#8923](https://github.com/MetaMask/metamask-mobile/pull/8923): chore: Migrate second batch of. unit tests away from enzyme
- [#8942](https://github.com/MetaMask/metamask-mobile/pull/8942): chore: Reduce enzymes usage 1/3 (#8721)
- [#8867](https://github.com/MetaMask/metamask-mobile/pull/8867): chore: update security code scanner file
- [#8872](https://github.com/MetaMask/metamask-mobile/pull/8872): ci: Run all tests on release e2e pipeline
- [#8775](https://github.com/MetaMask/metamask-mobile/pull/8775): chore: New Crowdin translations by Github Action
- [#8839](https://github.com/MetaMask/metamask-mobile/pull/8839): chore: Migrate a batch of unit tests away from enzyme
- [#8723](https://github.com/MetaMask/metamask-mobile/pull/8723): test: Onboarding add custom default ETH Mainnet
- [#8829](https://github.com/MetaMask/metamask-mobile/pull/8829): chore: remove all remaining legacy analytics native code
- [#8834](https://github.com/MetaMask/metamask-mobile/pull/8834): refactor: bring back IOS_SIMULATOR var as optional
- [#8728](https://github.com/MetaMask/metamask-mobile/pull/8728): refactor(ramp): add provider name to sell tx events
- [#8836](https://github.com/MetaMask/metamask-mobile/pull/8836): chore: Remove `cross-fetch` resolution
- [#8835](https://github.com/MetaMask/metamask-mobile/pull/8835): chore: Remove `plist` resolution
- [#8788](https://github.com/MetaMask/metamask-mobile/pull/8788): chore: Add instructions regarding tool versions and env variables in Readme
- [#8817](https://github.com/MetaMask/metamask-mobile/pull/8817): chore: Remove `y18n` resolution
- [#8819](https://github.com/MetaMask/metamask-mobile/pull/8819): chore: Remove `simple-get` resolution
- [#8815](https://github.com/MetaMask/metamask-mobile/pull/8815): chore: Remove unused `lodash` resolution
- [#8813](https://github.com/MetaMask/metamask-mobile/pull/8813): chore: Remove `ansi-regex` resolution
- [#8807](https://github.com/MetaMask/metamask-mobile/pull/8807): chore: Remove `minimatch` resolution
- [#8820](https://github.com/MetaMask/metamask-mobile/pull/8820): chore: Remove `shell-quote` resolution
- [#8818](https://github.com/MetaMask/metamask-mobile/pull/8818): chore: Remove `qs` resolution
- [#8816](https://github.com/MetaMask/metamask-mobile/pull/8816): chore: Remove `ua-parser-js` resolution
- [#8814](https://github.com/MetaMask/metamask-mobile/pull/8814): chore: Remove `immer` resolution
- [#8811](https://github.com/MetaMask/metamask-mobile/pull/8811): chore: Remove `pac-resolver` resolution
- [#8810](https://github.com/MetaMask/metamask-mobile/pull/8810): chore: Remove resolutions for unused packages
- [#8809](https://github.com/MetaMask/metamask-mobile/pull/8809): chore: Remove `nanoid` resolution
- [#8802](https://github.com/MetaMask/metamask-mobile/pull/8802): chore: Remove `glob` resolution

### Fixed

- [#8774](https://github.com/MetaMask/metamask-mobile/pull/8774): fix: normalize transaction parameters before PPOM validation
- [#8838](https://github.com/MetaMask/metamask-mobile/pull/8838): fix: Rename DAPP_VISITED to DAPP_VIEWED
- [#8784](https://github.com/MetaMask/metamask-mobile/pull/8784): fix: update usage of OP goerli to OP Sepolia
- [#8953](https://github.com/MetaMask/metamask-mobile/pull/8953): fix: fix network verification chainID and name verification for popular network
- [#8976](https://github.com/MetaMask/metamask-mobile/pull/8976): fix: Revert "chore: Include env variable copying into yarn setup command"
- [#8936](https://github.com/MetaMask/metamask-mobile/pull/8936): fix: crash during pairing request from Ledger
- [#8956](https://github.com/MetaMask/metamask-mobile/pull/8956): fix: prevent repeated incoming transaction notifications
- [#8955](https://github.com/MetaMask/metamask-mobile/pull/8955): fix: Update follow-redirects minor version
- [#8937](https://github.com/MetaMask/metamask-mobile/pull/8937): fix: circular dependency on MetaMetrics configure
- [#8888](https://github.com/MetaMask/metamask-mobile/pull/8888): fix: add identify metrics call at metrics instance setup
- [#8740](https://github.com/MetaMask/metamask-mobile/pull/8740): fix: restore Ledger keyring after restoring the vault
- [#8925](https://github.com/MetaMask/metamask-mobile/pull/8925): fix: Revert "fix: yarn version updated to 1.22.22 (#8921)"
- [#8921](https://github.com/MetaMask/metamask-mobile/pull/8921): fix: yarn version updated to 1.22.22
- [#8862](https://github.com/MetaMask/metamask-mobile/pull/8862): fix: Exclude `devDependencies` from `attribution.txt`
- [#8906](https://github.com/MetaMask/metamask-mobile/pull/8906): fix(ramp): loading fox position
- [#8882](https://github.com/MetaMask/metamask-mobile/pull/8882): fix: Fix `wallet_addEthereumChain` rpcUrls trailing slash cleanup
- [#8887](https://github.com/MetaMask/metamask-mobile/pull/8887): fix: issue with 'dappIconUrl' in 'AccountConnect.ts'
- [#8877](https://github.com/MetaMask/metamask-mobile/pull/8877): fix: fix url bug display
- [#8883](https://github.com/MetaMask/metamask-mobile/pull/8883): fix: Fix `wallet_switchEthereumChain` chainId validation
- [#8858](https://github.com/MetaMask/metamask-mobile/pull/8858): fix: PPOM - Closing alert icon overloads text box
- [#8861](https://github.com/MetaMask/metamask-mobile/pull/8861): fix: type for auth events and typo
- [#8846](https://github.com/MetaMask/metamask-mobile/pull/8846): fix: network filtered view crash
- [#8840](https://github.com/MetaMask/metamask-mobile/pull/8840): fix: update webview to grant location
- [#8741](https://github.com/MetaMask/metamask-mobile/pull/8741): fix: Fix the QR code accounts disappear when password change.
- [#8808](https://github.com/MetaMask/metamask-mobile/pull/8808): fix: unnecessary, unsafe base-controller patch
- [#8496](https://github.com/MetaMask/metamask-mobile/pull/8496): fix: redirection issue after chain switch on sign request

## [7.18.0]

### Added

- [#8729](https://github.com/MetaMask/metamask-mobile/pull/8729): feat(ramp): add event when user expands quotes
- [#8787](https://github.com/MetaMask/metamask-mobile/pull/8787): feat: add MetaMetrics custom flush vars and log
- [#8680](https://github.com/MetaMask/metamask-mobile/pull/8680): feat(ramp): add previously used tag
- [#8627](https://github.com/MetaMask/metamask-mobile/pull/8627): feat(ramp): add bottom sheet quotes
- [#8755](https://github.com/MetaMask/metamask-mobile/pull/8755): feat: Remove gap from maxHeight calculation in bottomsheet
- [#8748](https://github.com/MetaMask/metamask-mobile/pull/8748): feat: segment migration update remaining files and remove legacy analytics
- [#8731](https://github.com/MetaMask/metamask-mobile/pull/8731): feat: Missing migration events
- [#8531](https://github.com/MetaMask/metamask-mobile/pull/8531): feat: sdk permissions system integration
- [#8607](https://github.com/MetaMask/metamask-mobile/pull/8607): feat: bump mobile snaps packages to bring new snaps architecture
- [#8700](https://github.com/MetaMask/metamask-mobile/pull/8700): feat: Snaps new architecture mobile integration
- [#8581](https://github.com/MetaMask/metamask-mobile/pull/8581): feat: support updated Linea gas fee estimation
- [#8712](https://github.com/MetaMask/metamask-mobile/pull/8712): feat: confirmations views components events migration
- [#8656](https://github.com/MetaMask/metamask-mobile/pull/8656): feat: Edit gas, Drawer, DeleteWallet, ComponentErrorBoundary, CollectilbleContracts, BrowsserBottomBar events migration
- [#8692](https://github.com/MetaMask/metamask-mobile/pull/8692): feat: T-C views components events migration
- [#8672](https://github.com/MetaMask/metamask-mobile/pull/8672): feat: Views folder migration events from W to R beginning letters
- [#8651](https://github.com/MetaMask/metamask-mobile/pull/8651): feat: tabs and swaps components events migration
- [#8658](https://github.com/MetaMask/metamask-mobile/pull/8658): feat: Approvals and Nav events migration
- [#8670](https://github.com/MetaMask/metamask-mobile/pull/8670): feat: ramp analytics segment migration
- [#8657](https://github.com/MetaMask/metamask-mobile/pull/8657): feat: AccountApproval, ACcountRightButton, AddCustomCollectible, AddCustomToken, AddressCopy, BackupAlert useGoToBridge events migration
- [#8655](https://github.com/MetaMask/metamask-mobile/pull/8655): feat: migration of analytics of NavBar, NavBarTitle, LedgerConfirmationModal
- [#8705](https://github.com/MetaMask/metamask-mobile/pull/8705): feat: segment migration of utils
- [#8637](https://github.com/MetaMask/metamask-mobile/pull/8637): feat: translate fake native tokens need better UX error handling
- [#8711](https://github.com/MetaMask/metamask-mobile/pull/8711): feat: c-a views components events migration to segment
- [#8067](https://github.com/MetaMask/metamask-mobile/pull/8067): feat: use Segment (batch 1)
- [#8608](https://github.com/MetaMask/metamask-mobile/pull/8608): feat: Signature controller update to v5.3.0 and removed unnecessary patch
- [#8653](https://github.com/MetaMask/metamask-mobile/pull/8653): feat: migration of AnimatedQrScanner, QRsigningDetails and onboarding flow
- [#8652](https://github.com/MetaMask/metamask-mobile/pull/8652): feat: Search token, screenshot deterrent and receive request events migration
- [#8642](https://github.com/MetaMask/metamask-mobile/pull/8642): feat: Update needed and toknes ui component events migration
- [#8635](https://github.com/MetaMask/metamask-mobile/pull/8635): feat: Move Security settings from Experimental Settings into Security Settings
- [#8677](https://github.com/MetaMask/metamask-mobile/pull/8677): feat: Add TagColored to component temp
- [#8673](https://github.com/MetaMask/metamask-mobile/pull/8673): feat: new trackErrorAsAnalytics for segment

### Changed

- [#8803](https://github.com/MetaMask/metamask-mobile/pull/8803): chore: Remove unnecessary resolutions
- [#8792](https://github.com/MetaMask/metamask-mobile/pull/8792): test: Fix tag in regression test
- [#8791](https://github.com/MetaMask/metamask-mobile/pull/8791): test: add contact us e2e
- [#8495](https://github.com/MetaMask/metamask-mobile/pull/8495): ci: Post comment after e2e smoke
- [#8662](https://github.com/MetaMask/metamask-mobile/pull/8662): test: Update Swap token from USDC to USDT
- [#8542](https://github.com/MetaMask/metamask-mobile/pull/8542): chore: simplify ccache cache logic
- [#8664](https://github.com/MetaMask/metamask-mobile/pull/8664): refactor: consolidate accounts references to a single source of truth
- [#8366](https://github.com/MetaMask/metamask-mobile/pull/8366): chore: Create single functions to invoke Transaction Controller
- [#8709](https://github.com/MetaMask/metamask-mobile/pull/8709): test: cleanup networks e2e test
- [#8561](https://github.com/MetaMask/metamask-mobile/pull/8561): chore: modify dependency caching on bitrise
- [#8593](https://github.com/MetaMask/metamask-mobile/pull/8593): ci: enable security code scanner
- [#8492](https://github.com/MetaMask/metamask-mobile/pull/8492): docs: Improve README.md
- [#8646](https://github.com/MetaMask/metamask-mobile/pull/8646): test: Create detox setup script
- [#8644](https://github.com/MetaMask/metamask-mobile/pull/8644): test: Refactor settings page object

### Fixed

- [#8801](https://github.com/MetaMask/metamask-mobile/pull/8801): fix(ramp): undefined payment method
- [#8798](https://github.com/MetaMask/metamask-mobile/pull/8798): fix: remove unnecessary post message stream patch
- [#8572](https://github.com/MetaMask/metamask-mobile/pull/8572): fix: fake native tokens need better UX error handling
- [#8763](https://github.com/MetaMask/metamask-mobile/pull/8763): fix: PPOM version update to 1.4.2
- [#8753](https://github.com/MetaMask/metamask-mobile/pull/8753): fix: Updated accessibility role for buttons
- [#8725](https://github.com/MetaMask/metamask-mobile/pull/8725): fix: change in blockaid alert message
- [#8625](https://github.com/MetaMask/metamask-mobile/pull/8625): fix: ethQuery is not defined when refresh is called
- [#8752](https://github.com/MetaMask/metamask-mobile/pull/8752): fix: Fixed underline issue with ButtonLink's pressed state
- [#8744](https://github.com/MetaMask/metamask-mobile/pull/8744): fix: fix infura key displayed
- [#8678](https://github.com/MetaMask/metamask-mobile/pull/8678): fix: fix metrics trackEvent compatibility with legacy events
- [#8742](https://github.com/MetaMask/metamask-mobile/pull/8742): fix: update origin passed to ppom for send transactions
- [#8727](https://github.com/MetaMask/metamask-mobile/pull/8727): fix: migration to enable Blockaid by default
- [#8567](https://github.com/MetaMask/metamask-mobile/pull/8567): fix: deprecate goerli network
- [#8734](https://github.com/MetaMask/metamask-mobile/pull/8734): fix: fix hex to BN conversion
- [#8738](https://github.com/MetaMask/metamask-mobile/pull/8738): fix: linting in Engine
- [#8515](https://github.com/MetaMask/metamask-mobile/pull/8515): fix: #1408 Native Alert Patch for Webview
- [#8707](https://github.com/MetaMask/metamask-mobile/pull/8707): fix: patch transaction controller in mobile to add fallback gas estimation
- [#8584](https://github.com/MetaMask/metamask-mobile/pull/8584): fix: filter SES from Sentry stack trace frames
- [#8636](https://github.com/MetaMask/metamask-mobile/pull/8636): fix: add warning for optimism and arbitrum goerli
- [#8663](https://github.com/MetaMask/metamask-mobile/pull/8663): fix: update podfile and project.pbxproj
- [#8650](https://github.com/MetaMask/metamask-mobile/pull/8650): fix: translate scam title modal
- [#8631](https://github.com/MetaMask/metamask-mobile/pull/8631): fix: remove inexistent style
- [#8615](https://github.com/MetaMask/metamask-mobile/pull/8615): fix: Fix add custom rpc detox test script

## [7.17.1]

### Fixed

- [#8870](https://github.com/MetaMask/metamask-mobile/pull/8870): fix: update PPOM to v1.4.4
- [#8892](https://github.com/MetaMask/metamask-mobile/pull/8892): fix: Tokens disappearing

## [7.17.0]

### Added

- [#8520](https://github.com/MetaMask/metamask-mobile/pull/8520): feat: Feature/1300 dapp visit event
- [#8354](https://github.com/MetaMask/metamask-mobile/pull/8354): feat(ramp): add Terms of Service provider link to quotes
- [#8579](https://github.com/MetaMask/metamask-mobile/pull/8579): feat: translate fake native tokens need better UX error handling
- [#8588](https://github.com/MetaMask/metamask-mobile/pull/8588): feat: re-structure confirmation pages
- [#8378](https://github.com/MetaMask/metamask-mobile/pull/8378): feat: Update assets controllers v^9.0.0
- [#8370](https://github.com/MetaMask/metamask-mobile/pull/8370): feat: Update network controller v^10
- [#7999](https://github.com/MetaMask/metamask-mobile/pull/7999): feat: chain id to hexadecimal format
- [#8524](https://github.com/MetaMask/metamask-mobile/pull/8524): feat: enable blockaid by default
- [#8552](https://github.com/MetaMask/metamask-mobile/pull/8552): feat: remove friction modal for enabling the feature from settings on iOS
- [#8400](https://github.com/MetaMask/metamask-mobile/pull/8400): feat: Add DS Guides link to component readmes
- [#8544](https://github.com/MetaMask/metamask-mobile/pull/8544): feat: blockaid banner UX improvements
- [#8246](https://github.com/MetaMask/metamask-mobile/pull/8246): feat: enable Ledger integration
- [#8234](https://github.com/MetaMask/metamask-mobile/pull/8234): feat: add privacy toggle
- [#8513](https://github.com/MetaMask/metamask-mobile/pull/8513): feat: confirm button color updates when transaction is malicious
- [#7534](https://github.com/MetaMask/metamask-mobile/pull/7534): feat: hide alert when navigating to protect wallet
- [#8392](https://github.com/MetaMask/metamask-mobile/pull/8392): feat: Enable token detection on arbitrum, optimism, base, and zksync
- [#8502](https://github.com/MetaMask/metamask-mobile/pull/8502): feat: change the yellow loading banner to gray color
- [#8373](https://github.com/MetaMask/metamask-mobile/pull/8373): feat: add SES experiment toggle (iOS)
- [#8413](https://github.com/MetaMask/metamask-mobile/pull/8413): feat: Update SES lockdown options

### Changed

- [#8457](https://github.com/MetaMask/metamask-mobile/pull/8457): refactor(ramp): add routes folder
- [#8510](https://github.com/MetaMask/metamask-mobile/pull/8510): chore: upgrading design tokens package and typescript conventions
- [#8478](https://github.com/MetaMask/metamask-mobile/pull/8478): chore: bumping code coverage thresholds
- [#8414](https://github.com/MetaMask/metamask-mobile/pull/8414): chore: add logs to identify root cause of issue reported in #1507
- [#8257](https://github.com/MetaMask/metamask-mobile/pull/8257): test: 1452 refactor modal pages batch 2
- [#8558](https://github.com/MetaMask/metamask-mobile/pull/8558): test: add blacklist URLs to automated tests
- [#8563](https://github.com/MetaMask/metamask-mobile/pull/8563): ci: Exclude ip package from audit
- [#8483](https://github.com/MetaMask/metamask-mobile/pull/8483): chore: Modify cancel gas rate of Transaction Controller
- [#8541](https://github.com/MetaMask/metamask-mobile/pull/8541): test: use fast swipe on account sheet modal
- [#8514](https://github.com/MetaMask/metamask-mobile/pull/8514): chore(ramp): upgrade sdk to 1.26.2

### Fixed

- [#8348](https://github.com/MetaMask/metamask-mobile/pull/8348): fix: update nft metadata on page refresh
- [#8556](https://github.com/MetaMask/metamask-mobile/pull/8556): fix: improve native balance fetch logic on the UX
- [#8605](https://github.com/MetaMask/metamask-mobile/pull/8605): fix: Update ppom_release to fix fail ppom security validation check
- [#8606](https://github.com/MetaMask/metamask-mobile/pull/8606): fix: Custom network chain id not converted to hexadecimal format
- [#8592](https://github.com/MetaMask/metamask-mobile/pull/8592): fix: missing converting to decimal chain id on network verification of pop…
- [#8227](https://github.com/MetaMask/metamask-mobile/pull/8227): fix: ensure edit nonce input only accepts numbers
- [#8587](https://github.com/MetaMask/metamask-mobile/pull/8587): fix: revert slice engine
- [#8560](https://github.com/MetaMask/metamask-mobile/pull/8560): fix: broken WhatsNew
- [#8554](https://github.com/MetaMask/metamask-mobile/pull/8554): fix: Enable blockaid What's New Copy
- [#8559](https://github.com/MetaMask/metamask-mobile/pull/8559): fix: Commit script diff that appears when building iOS
- [#8547](https://github.com/MetaMask/metamask-mobile/pull/8547): fix: clean up old translations
- [#8551](https://github.com/MetaMask/metamask-mobile/pull/8551): fix: update ppom validator package
- [#8536](https://github.com/MetaMask/metamask-mobile/pull/8536): fix: Added inherited to build settings library search paths
- [#8485](https://github.com/MetaMask/metamask-mobile/pull/8485): fix: Rounding issue in approval amount (use site suggestion)
- [#8517](https://github.com/MetaMask/metamask-mobile/pull/8517): fix: Update MixPanel proxy URL
- [#8532](https://github.com/MetaMask/metamask-mobile/pull/8532): fix: Remove height behavior on android
- [#8468](https://github.com/MetaMask/metamask-mobile/pull/8468): fix: Inputting a nonce value messes up the nonce counter setting a totally different number
- [#8526](https://github.com/MetaMask/metamask-mobile/pull/8526): fix: Added keyboard avoiding view to bottomsheetdialog
- [#8527](https://github.com/MetaMask/metamask-mobile/pull/8527): fix: Updated backupalert snapshot from ds tokens update
- [#8509](https://github.com/MetaMask/metamask-mobile/pull/8509): fix: Fix/8352 source map stack trace
- [#8508](https://github.com/MetaMask/metamask-mobile/pull/8508): fix: Revert "fix: Fix/8352 source map stack trace (#8467)"
- [#8504](https://github.com/MetaMask/metamask-mobile/pull/8504): fix: Remove isFullscreen from AddAccount, AccountPermissions, and AddChainApproval
- [#8503](https://github.com/MetaMask/metamask-mobile/pull/8503): fix: Fix fullscreen issue with bottomsheet
- [#8467](https://github.com/MetaMask/metamask-mobile/pull/8467): fix: Fix/8352 source map stack trace
- [#8488](https://github.com/MetaMask/metamask-mobile/pull/8488): fix: Cleanup/miscellaneous
- [#8469](https://github.com/MetaMask/metamask-mobile/pull/8469): fix: deeplink handling issue when the app is closed
- [#8491](https://github.com/MetaMask/metamask-mobile/pull/8491): fix: Update theme tokens for QR-related components
- [#8486](https://github.com/MetaMask/metamask-mobile/pull/8486): fix: Update theme tokens for General and Advanced Settings
- [#8157](https://github.com/MetaMask/metamask-mobile/pull/8157): fix: display hash as hex in personal signature confirmation
- [#8126](https://github.com/MetaMask/metamask-mobile/pull/8126): fix: Update navigation bar on start loading
- [#8476](https://github.com/MetaMask/metamask-mobile/pull/8476): fix: Fix title color type in settings drawer

## [7.16.0]

### Added

- [#8093](https://github.com/MetaMask/metamask-mobile/pull/8093): feat: decouple account selector from qr code connector
- [#8383](https://github.com/MetaMask/metamask-mobile/pull/8383): feat: add translation for privacy toggle
- [#8412](https://github.com/MetaMask/metamask-mobile/pull/8412): feat: Blockaid experimental settings should be visible on all networks
- [#8290](https://github.com/MetaMask/metamask-mobile/pull/8290): feat: update walletconnect se-sdk to 1.7.0
- [#8349](https://github.com/MetaMask/metamask-mobile/pull/8349): feat(ramp): add order minimum elapsed seconds for polling
- [#8353](https://github.com/MetaMask/metamask-mobile/pull/8353): feat(ramp): skip payment method screen if has already started
- [#8282](https://github.com/MetaMask/metamask-mobile/pull/8282): feat: PPOM - Signature Metric events have the `flagged_as_malicious` and Blockaid info when using a different network than Mainnet
- [#8171](https://github.com/MetaMask/metamask-mobile/pull/8171): feat: Support token detection on linea
- [#8292](https://github.com/MetaMask/metamask-mobile/pull/8292): feat: enable support to Blockaid on custom networks on mobile
- [#8212](https://github.com/MetaMask/metamask-mobile/pull/8212): feat: bump keyring controller to v8.1.0
- [#8291](https://github.com/MetaMask/metamask-mobile/pull/8291): feat: android sdk connection management
- [#8319](https://github.com/MetaMask/metamask-mobile/pull/8319): feat: decreased UR density
- [#8255](https://github.com/MetaMask/metamask-mobile/pull/8255): feat: Added temp brand tokens to mobile codebase
- [#8030](https://github.com/MetaMask/metamask-mobile/pull/8030): feat: New Crowdin translations by Github Action

### Changed

- [#8452](https://github.com/MetaMask/metamask-mobile/pull/8452): refactor: Replace SheetBottom with BottomSheet in WalletActions
- [#8451](https://github.com/MetaMask/metamask-mobile/pull/8451): refactor: Replace SheetBottom with BottomSheet in ShowIpfsGatewaySheet
- [#8450](https://github.com/MetaMask/metamask-mobile/pull/8450): refactor: Replace SheetBottom with BottomSheet in ShowDisplayNFTMediaSheet
- [#8445](https://github.com/MetaMask/metamask-mobile/pull/8445): refactor: Replace SheetBottom with BottomSheet in SDKFeedbackModal
- [#8444](https://github.com/MetaMask/metamask-mobile/pull/8444): refactor: Replace SheetBottom with BottomSheet in NetworkSelector
- [#8447](https://github.com/MetaMask/metamask-mobile/pull/8447): refactor: Replace SheetBottom with BottomSheet in ethsignfriction
- [#8443](https://github.com/MetaMask/metamask-mobile/pull/8443): refactor: Replace SheetBottom with BottomSheet in DetectedTokens
- [#8448](https://github.com/MetaMask/metamask-mobile/pull/8448): refactor: Replace SheetBottom with BottomSheet in AmbiguousAddressSheet
- [#8442](https://github.com/MetaMask/metamask-mobile/pull/8442): refactor: Replace SheetBottom with BottomSheet in AccountSelector
- [#8441](https://github.com/MetaMask/metamask-mobile/pull/8441): refactor: Replace SheetBottom with BottomSheet in AccountsPermission
- [#8440](https://github.com/MetaMask/metamask-mobile/pull/8440): refactor: Replace SheetBottom with BottomSheet in AccountConnect
- [#8439](https://github.com/MetaMask/metamask-mobile/pull/8439): chore: Replace SheetBottom with BottomSheet in AccountActions
- [#8446](https://github.com/MetaMask/metamask-mobile/pull/8446): refactor: Replace SheetBottom with BottomSheet in SDKLoadingModal
- [#8449](https://github.com/MetaMask/metamask-mobile/pull/8449): refactor: Replace SheetBottom with BottomSheet in BlockaidIndicator
- [#8437](https://github.com/MetaMask/metamask-mobile/pull/8437): refactor: QOL update for BottomSheet and BottomSheetDialog
- [#8037](https://github.com/MetaMask/metamask-mobile/pull/8037): refactor: Replace Settings drawer with DS components and update design
- [#8438](https://github.com/MetaMask/metamask-mobile/pull/8438): refactor: Remove isFlexible prop from BottomSheet
- [#8362](https://github.com/MetaMask/metamask-mobile/pull/8362): chore: updated all debug targets to automatically manage signing
- [#8283](https://github.com/MetaMask/metamask-mobile/pull/8283): chore: New Crowdin translations by Github Action
- [#8416](https://github.com/MetaMask/metamask-mobile/pull/8416): refactor(ramp): remove buy and sell folders
- [#8399](https://github.com/MetaMask/metamask-mobile/pull/8399): chore: Remove unused static colors
- [#8386](https://github.com/MetaMask/metamask-mobile/pull/8386): chore: add `.git-blame-ignore-revs`
- [#8289](https://github.com/MetaMask/metamask-mobile/pull/8289): chore: Replace favorite icon in NFT with DS icon
- [#8330](https://github.com/MetaMask/metamask-mobile/pull/8330): chore: Replace hex colors in constants file with tokens
- [#8333](https://github.com/MetaMask/metamask-mobile/pull/8333): chore: Replace hex colors in switch-related components with ds brand tokens
- [#8335](https://github.com/MetaMask/metamask-mobile/pull/8335): chore: Update qr-related components to use brand color white
- [#8287](https://github.com/MetaMask/metamask-mobile/pull/8287): chore: Update Network Settings Actionable Buttons to use DS buttons
- [#8334](https://github.com/MetaMask/metamask-mobile/pull/8334): chore: Replace hex colors in Android Media Player with ds brand tokens
- [#8305](https://github.com/MetaMask/metamask-mobile/pull/8305): test: [android] run tests on the first emulator in your list
- [#8372](https://github.com/MetaMask/metamask-mobile/pull/8372): ci: Revert "ci: Automate Bitrise E2E smoke in GH checks based on labels (#8325)"
- [#8371](https://github.com/MetaMask/metamask-mobile/pull/8371): test: Revert "test: bump detox to v20.16 (#8304)"
- [#8359](https://github.com/MetaMask/metamask-mobile/pull/8359): refactor(ramp): add null case for payment method in order details
- [#8325](https://github.com/MetaMask/metamask-mobile/pull/8325): ci: Automate Bitrise E2E smoke in GH checks based on labels
- [#8206](https://github.com/MetaMask/metamask-mobile/pull/8206): chore(Sentry): filter out Route Change
- [#8342](https://github.com/MetaMask/metamask-mobile/pull/8342): test: fix Swap test flakiness on Bitrise
- [#8285](https://github.com/MetaMask/metamask-mobile/pull/8285): chore: Replaced ApplePayButton colors with hardcoded hex colors
- [#8288](https://github.com/MetaMask/metamask-mobile/pull/8288): chore: Updated hex color in price chart to use ds tokens
- [#8284](https://github.com/MetaMask/metamask-mobile/pull/8284): chore: Replaced hex color for ledger loader
- [#8254](https://github.com/MetaMask/metamask-mobile/pull/8254): test: Fix Swap Smoke tests failures
- [#7640](https://github.com/MetaMask/metamask-mobile/pull/7640): chore(devDeps): upgrade from metro 0.71 to 0.73
- [#8304](https://github.com/MetaMask/metamask-mobile/pull/8304): test: bump detox to v20.16
- [#8192](https://github.com/MetaMask/metamask-mobile/pull/8192): refactor(ramp): skip adding order if already exists
- [#8272](https://github.com/MetaMask/metamask-mobile/pull/8272): chore: adds snapController selector and initial state

### Fixed

- [#8460](https://github.com/MetaMask/metamask-mobile/pull/8460): fix: typos in en.json
- [#8453](https://github.com/MetaMask/metamask-mobile/pull/8453): fix: show only blockaid multichain on whats new
- [#8421](https://github.com/MetaMask/metamask-mobile/pull/8421): fix: patch handling of missing token price
- [#8415](https://github.com/MetaMask/metamask-mobile/pull/8415): fix: catch unfulfilled promise for token fetch
- [#8410](https://github.com/MetaMask/metamask-mobile/pull/8410): fix: Broken confirm flow due to missing gas
- [#8404](https://github.com/MetaMask/metamask-mobile/pull/8404): fix: you have to press the login button twice (#6633) (#6663)
- [#8375](https://github.com/MetaMask/metamask-mobile/pull/8375): fix: Minimize skipping tests
- [#8401](https://github.com/MetaMask/metamask-mobile/pull/8401): fix: Dedupe deps with Yarn and update CocoaPods lockfile
- [#8326](https://github.com/MetaMask/metamask-mobile/pull/8326): fix: PPOM - Malicious transactions triggered from Deeplinks are not flagged
- [#8393](https://github.com/MetaMask/metamask-mobile/pull/8393): fix: [Blockaid] Toggle appears together on "before you proceed" sheet
- [#8394](https://github.com/MetaMask/metamask-mobile/pull/8394): fix: [Blockaid] Cosmetic issue on "before you proceed" sheet
- [#8384](https://github.com/MetaMask/metamask-mobile/pull/8384): fix: bump restore cache step in Bitrise
- [#8374](https://github.com/MetaMask/metamask-mobile/pull/8374): fix: Compare checksum address
- [#8033](https://github.com/MetaMask/metamask-mobile/pull/8033): fix: regenerator-runtime and reenable SES (v1.1.0) on iOS (JSC)
- [#8341](https://github.com/MetaMask/metamask-mobile/pull/8341): fix: E2E: Import SNX token
- [#8328](https://github.com/MetaMask/metamask-mobile/pull/8328): fix: Transaction Details view shows inaccurate balance on Mobile
- [#8274](https://github.com/MetaMask/metamask-mobile/pull/8274): fix: substr undefined when cancelling a legacy transaction
- [#8306](https://github.com/MetaMask/metamask-mobile/pull/8306): fix: cocoapod cache issue
- [#8202](https://github.com/MetaMask/metamask-mobile/pull/8202): fix: Isolate logic to expose js env variables sooner
- [#8216](https://github.com/MetaMask/metamask-mobile/pull/8216): fix: use correct link for reporting false positives in blockaid banner
- [#8329](https://github.com/MetaMask/metamask-mobile/pull/8329): fix: android unit tests
- [#7530](https://github.com/MetaMask/metamask-mobile/pull/7530): fix: fix require misname of @metamask/react-native-button
- [#8303](https://github.com/MetaMask/metamask-mobile/pull/8303): fix: fixup regex typo for validChainIdHex
- [#8271](https://github.com/MetaMask/metamask-mobile/pull/8271): fix: migrations not being applied on 7.14.0
- [#8281](https://github.com/MetaMask/metamask-mobile/pull/8281): fix: state initialisation in PPOMController
- [#8278](https://github.com/MetaMask/metamask-mobile/pull/8278): fix: scanning dapp QR code does not open in-app browser and navigate to dapp #8277
- [#8247](https://github.com/MetaMask/metamask-mobile/pull/8247): fix: fix inconsistency in the popular tab

## [7.15.0]

### Added

- [#8080](https://github.com/MetaMask/metamask-mobile/pull/8080): feat(ramp): add sell quick amounts with gas estimations
- [#8204](https://github.com/MetaMask/metamask-mobile/pull/8204): feat: update blockaid dependency to latest version
- [#8215](https://github.com/MetaMask/metamask-mobile/pull/8215): feat: Android sdk dapp icon support
- [#8035](https://github.com/MetaMask/metamask-mobile/pull/8035): feat: bump keyring controller 7.5.0
- [#6980](https://github.com/MetaMask/metamask-mobile/pull/6980): feat: swaps on send flow when amount is insufficient
- [#8081](https://github.com/MetaMask/metamask-mobile/pull/8081): feat: #870 - Slice Storage Engine
- [#8084](https://github.com/MetaMask/metamask-mobile/pull/8084): feat: Snaps settings
- [#7547](https://github.com/MetaMask/metamask-mobile/pull/7547): feat: PPOM version update
- [#7969](https://github.com/MetaMask/metamask-mobile/pull/7969): feat: Created SelectOption
- [#7942](https://github.com/MetaMask/metamask-mobile/pull/7942): feat: snaps controllers integration (Flask Only)
- [#7938](https://github.com/MetaMask/metamask-mobile/pull/7938): feat: Added SelectButton
- [#8097](https://github.com/MetaMask/metamask-mobile/pull/8097): feat(ramp): keep region always up to date

### Changed

- [#8231](https://github.com/MetaMask/metamask-mobile/pull/8231): test: 1328 refactor modals page batch 1
- [#8229](https://github.com/MetaMask/metamask-mobile/pull/8229): refactor(ramp): update callback url for dev/staging
- [#8217](https://github.com/MetaMask/metamask-mobile/pull/8217): test: fixed Swap smoke and regression test failures
- [#8239](https://github.com/MetaMask/metamask-mobile/pull/8239): chore: upgrade to rn 0.71.15
- [#8197](https://github.com/MetaMask/metamask-mobile/pull/8197): test: 8187 remove drawer folder e2e folder
- [#8195](https://github.com/MetaMask/metamask-mobile/pull/8195): test: refactor Assertions class and update specs expect assertion
- [#8191](https://github.com/MetaMask/metamask-mobile/pull/8191): test: create additional e2e subfolders
- [#7736](https://github.com/MetaMask/metamask-mobile/pull/7736): test: Approve custom erc20 v2
- [#8194](https://github.com/MetaMask/metamask-mobile/pull/8194): test: fix failing smoke test
- [#8131](https://github.com/MetaMask/metamask-mobile/pull/8131): refactor(ramp): change settings title to buy & sell
- [#8200](https://github.com/MetaMask/metamask-mobile/pull/8200): test: onboarding folder refactor page objects
- [#8133](https://github.com/MetaMask/metamask-mobile/pull/8133): chore(ramp): use patched gradle for react native payments
- [#8172](https://github.com/MetaMask/metamask-mobile/pull/8172): chore: fix ruby version and improve CI build time
- [#8089](https://github.com/MetaMask/metamask-mobile/pull/8089): ci: Remove using PACKAGE_READ_TOKEN for core preview builds
- [#8048](https://github.com/MetaMask/metamask-mobile/pull/8048): refactor: Replace Security Settings page with DS components and updated design
- [#8061](https://github.com/MetaMask/metamask-mobile/pull/8061): refactor: Replace General Settings page with DS components
- [#8049](https://github.com/MetaMask/metamask-mobile/pull/8049): refactor: Updated Advanced Settings page with DS components and designs
- [#8091](https://github.com/MetaMask/metamask-mobile/pull/8091): refactor: Replace Experimental Settings page with DS components
- [#7975](https://github.com/MetaMask/metamask-mobile/pull/7975): test: Implement `CCache` to e2e builds
- [#8136](https://github.com/MetaMask/metamask-mobile/pull/8136): test(ramp): add test for stateHasOrder util
- [#8137](https://github.com/MetaMask/metamask-mobile/pull/8137): test(ramp): add test for sell order processor
- [#8174](https://github.com/MetaMask/metamask-mobile/pull/8174): test: bump detox + implement dynamic scroll in e2e tests
- [#8083](https://github.com/MetaMask/metamask-mobile/pull/8083): refactor: E2e Smoke Tests to Execute Across Multiple Virtual Machines on Bitrise
- [#8087](https://github.com/MetaMask/metamask-mobile/pull/8087): test: Refactor Settings Contacts Folder page objects
- [#8109](https://github.com/MetaMask/metamask-mobile/pull/8109): chore: Added deprecation notices to button-related components
- [#8124](https://github.com/MetaMask/metamask-mobile/pull/8124): chore: Added deprecation notice to non-ds icons
- [#8150](https://github.com/MetaMask/metamask-mobile/pull/8150): refactor(ds): make onPressClearButton required when showClearButton
- [#8128](https://github.com/MetaMask/metamask-mobile/pull/8128): chore: disable hardware wallet feature and remove dependencies
- [#8104](https://github.com/MetaMask/metamask-mobile/pull/8104): docs: Adding README to component library folder
- [#8074](https://github.com/MetaMask/metamask-mobile/pull/8074): chore: split the Connection class into smaller chunks and add unit tests
- [#8014](https://github.com/MetaMask/metamask-mobile/pull/8014): test: Batch 4 Remove all instances of strings in TestID property in the app code
- [#8028](https://github.com/MetaMask/metamask-mobile/pull/8028): chore: split the SDKConnect class into smaller chunks and add unit tests
- [#8073](https://github.com/MetaMask/metamask-mobile/pull/8073): chore: sync icon library with figma icon library
- [#7897](https://github.com/MetaMask/metamask-mobile/pull/7897): test: Separate Detox build from test execution
- [#8018](https://github.com/MetaMask/metamask-mobile/pull/8018): test: migrate MessageSign tests to react testing library
- [#8005](https://github.com/MetaMask/metamask-mobile/pull/8005): chore: add unit tests to sdk connect handlers
- [#7959](https://github.com/MetaMask/metamask-mobile/pull/7959): refactor(ses): remove stale issue comments
- [#8044](https://github.com/MetaMask/metamask-mobile/pull/8044): refactor: Updated navigational Navbar Headers with DS components

### Fixed

- [#8230](https://github.com/MetaMask/metamask-mobile/pull/8230): fix: refresh ownership status for nfts
- [#8248](https://github.com/MetaMask/metamask-mobile/pull/8248): fix: update PPOM validator version to fix validation after network change
- [#8233](https://github.com/MetaMask/metamask-mobile/pull/8233): fix: enabling blockaid should be possible only if user is on mainnet
- [#8225](https://github.com/MetaMask/metamask-mobile/pull/8225): fix: Remove duplicate declarations and library
- [#8232](https://github.com/MetaMask/metamask-mobile/pull/8232): fix: Show deprecated exports on enzyme
- [#8235](https://github.com/MetaMask/metamask-mobile/pull/8235): fix: Price API perf improvements
- [#8146](https://github.com/MetaMask/metamask-mobile/pull/8146): fix: fix padding tab, should be 16px
- [#8207](https://github.com/MetaMask/metamask-mobile/pull/8207): fix: update copy from `seed` to `secret recovery phrase`
- [#8203](https://github.com/MetaMask/metamask-mobile/pull/8203): fix: Handle Optional 'getCurrentAccount' in incoming transaction
- [#8184](https://github.com/MetaMask/metamask-mobile/pull/8184): fix: update to unable to find conversion rate when failing to get conversion rate
- [#8141](https://github.com/MetaMask/metamask-mobile/pull/8141): fix: fix bug first NFT in collection gets always displayed
- [#8075](https://github.com/MetaMask/metamask-mobile/pull/8075): fix: ignore ppom when using yarn format
- [#8211](https://github.com/MetaMask/metamask-mobile/pull/8211): fix: unmount Settings on blur to hide credential
- [#8224](https://github.com/MetaMask/metamask-mobile/pull/8224): fix: added resolution for follow-redirects
- [#8221](https://github.com/MetaMask/metamask-mobile/pull/8221): fix: add RN patch for boost
- [#7998](https://github.com/MetaMask/metamask-mobile/pull/7998): fix: Send ETH using Deeplinks sets incorrect amount if is way higher than balance
- [#8145](https://github.com/MetaMask/metamask-mobile/pull/8145): fix: handle blockaid initialisation failure on settings page
- [#8129](https://github.com/MetaMask/metamask-mobile/pull/8129): fix: Blockaid wallet connect errors.
- [#8063](https://github.com/MetaMask/metamask-mobile/pull/8063): fix: fix typo on PPOM modal text
- [#8052](https://github.com/MetaMask/metamask-mobile/pull/8052): fix(action): be more restrictive on the release branch format
- [#8088](https://github.com/MetaMask/metamask-mobile/pull/8088): fix: metrics event not fired when blockaid is disabled
- [#8095](https://github.com/MetaMask/metamask-mobile/pull/8095): fix: dedupe deps
- [#8085](https://github.com/MetaMask/metamask-mobile/pull/8085): fix: PPOMController related issues in blockaid integration
- [#8029](https://github.com/MetaMask/metamask-mobile/pull/8029): fix: blockaid analytics code typos

## [7.14.0]

### Added

- [#8016](https://github.com/MetaMask/metamask-mobile/pull/8016): feat(ramp): add sell deeplink
- [#7962](https://github.com/MetaMask/metamask-mobile/pull/7962): feat(ramp): add sell notification texts
- [#8047](https://github.com/MetaMask/metamask-mobile/pull/8047): feat: Added RadioButton to DS
- [#7951](https://github.com/MetaMask/metamask-mobile/pull/7951): feat: New Crowdin translations by Github Action
- [#7954](https://github.com/MetaMask/metamask-mobile/pull/7954): feat: minor changes to connect QR wallet view
- [#7963](https://github.com/MetaMask/metamask-mobile/pull/7963): feat(ramp): add sell order polling when has txhash
- [#7899](https://github.com/MetaMask/metamask-mobile/pull/7899): feat(ramp): popular region and search states
- [#7955](https://github.com/MetaMask/metamask-mobile/pull/7955): feat: RNTar native modules (Android and iOS)
- [#7960](https://github.com/MetaMask/metamask-mobile/pull/7960): feat: Content update for Swaps
- [#7899](https://github.com/MetaMask/metamask-mobile/pull/7899): feat(ramp): popular region and search states
- [#7955](https://github.com/MetaMask/metamask-mobile/pull/7955): feat: RNTar native modules (Android and iOS)
- [#7960](https://github.com/MetaMask/metamask-mobile/pull/7960): feat: Content update for Swaps
- [#7961](https://github.com/MetaMask/metamask-mobile/pull/7961): feat: Create Select's foundational component - SelectValue
- [#7835](https://github.com/MetaMask/metamask-mobile/pull/7835): feat: add bridge wallet action
- [#7921](https://github.com/MetaMask/metamask-mobile/pull/7921): feat: android sdk connectsign + batch request
- [#7933](https://github.com/MetaMask/metamask-mobile/pull/7933): feat: Added images to component Readmes
- [#7607](https://github.com/MetaMask/metamask-mobile/pull/7607): feat: New Crowdin translations by Github Action
- [#7837](https://github.com/MetaMask/metamask-mobile/pull/7837): feat: New mobile Flask Build Type
- [#7876](https://github.com/MetaMask/metamask-mobile/pull/7876): feat: display the dapp icon when connecting with sdk
- [#7861](https://github.com/MetaMask/metamask-mobile/pull/7861): feat: enable Blockaid on iOS
- [#7864](https://github.com/MetaMask/metamask-mobile/pull/7864): feat(ramp): sell what's new modal content

### Changed

- [#7908](https://github.com/MetaMask/metamask-mobile/pull/7908): chore: tranfer the DeeplinkManager file from JS to TS
- [#7972](https://github.com/MetaMask/metamask-mobile/pull/7972): chore: Replace local code fence transform with `@metamask/build-utils`
- [#7925](https://github.com/MetaMask/metamask-mobile/pull/7925): chore: refactor the DeeplinkManager into smaller parts and add unit tests
- [#8011](https://github.com/MetaMask/metamask-mobile/pull/8011): test: batch 1 remove strings testid app code
- [#7888](https://github.com/MetaMask/metamask-mobile/pull/7888): test: Settings Security And Privacy: Refactor page objects
- [#7989](https://github.com/MetaMask/metamask-mobile/pull/7989): test: Removing test selector strings within app code (5/7)
- [#7978](https://github.com/MetaMask/metamask-mobile/pull/7978): test: Removing test selector strings within app code 2/7
- [#7992](https://github.com/MetaMask/metamask-mobile/pull/7992): test: Removing test selector strings within app code (6/7)
- [#7993](https://github.com/MetaMask/metamask-mobile/pull/7993): test: Removing test selector strings within app code (7/7)
- [#7873](https://github.com/MetaMask/metamask-mobile/pull/7873): refactor: split migrations into multiple files
- [#7710](https://github.com/MetaMask/metamask-mobile/pull/7710): test: flag Confirmations tests as Smoke tests
- [#7472](https://github.com/MetaMask/metamask-mobile/pull/7472): refactor: Convert Tag stories to csf format
- [#7967](https://github.com/MetaMask/metamask-mobile/pull/7967): test: Removing test selector strings within app code
- [#7966](https://github.com/MetaMask/metamask-mobile/pull/7966): test: fix wallet test
- [#7937](https://github.com/MetaMask/metamask-mobile/pull/7937): chore: Updating CODEOWNERS file with DS ownership of component-library
- [#7952](https://github.com/MetaMask/metamask-mobile/pull/7952): chore: add bridge translations
- [#7922](https://github.com/MetaMask/metamask-mobile/pull/7922): chore(patch): Use core branch for assets-controllers patch
- [#7929](https://github.com/MetaMask/metamask-mobile/pull/7929): test: Increase E2E test setup time
- [#7904](https://github.com/MetaMask/metamask-mobile/pull/7904): test: Fix permission-system-revoking-multiple-accounts test
- [#7689](https://github.com/MetaMask/metamask-mobile/pull/7689): refactor: generate nonces using nonce tracker
- [#7896](https://github.com/MetaMask/metamask-mobile/pull/7896): test: Remove duplicate methods on Gesture class

### Fixed

- [#7953](https://github.com/MetaMask/metamask-mobile/pull/7953): fix: correct proptypes array in WebsiteIcon component
- [#7886](https://github.com/MetaMask/metamask-mobile/pull/7886): fix: Fix `eth_signTypedData` signatures containing `0x`
- [#7935](https://github.com/MetaMask/metamask-mobile/pull/7935): fix: bitrise cocoapods issue in bitrise
- [#7934](https://github.com/MetaMask/metamask-mobile/pull/7934): fix: Resolve CocoaPods Version Issue and Ruby Installation Failure for Podfile.lock
- [#7745](https://github.com/MetaMask/metamask-mobile/pull/7745): fix: add a section for stakeholder reviews in issue template
- [#7924](https://github.com/MetaMask/metamask-mobile/pull/7924): fix: Prevent SES errors in iOS dev builds
- [#7917](https://github.com/MetaMask/metamask-mobile/pull/7917): fix: adjust the apiLogoUrl logic to handles cases when icon is an object with uri key
- [#7338](https://github.com/MetaMask/metamask-mobile/pull/7338): fix: update linea goerli explorer url
- [#7893](https://github.com/MetaMask/metamask-mobile/pull/7893): fix: Revert javascript disabled on the webview
- [#7881](https://github.com/MetaMask/metamask-mobile/pull/7881): fix: 7862 invalid address error
- [#7757](https://github.com/MetaMask/metamask-mobile/pull/7757): feat: integrate ledger hardware wallet
- [#8128](https://github.com/MetaMask/metamask-mobile/pull/8128): fix: disable hardware wallet feature and remove dependencies
- [#8046](https://github.com/MetaMask/metamask-mobile/pull/8046): fix: CI flakey unit tests TypeErrors on react-native/jest/setup.js global.performance
- [#8013](https://github.com/MetaMask/metamask-mobile/pull/8013): fix: show loading banner when blockaid toggled
- [#8031](https://github.com/MetaMask/metamask-mobile/pull/8031): fix: PPOMController update to handle storage crash
- [#8004](https://github.com/MetaMask/metamask-mobile/pull/8004): fix: mobile blockaid performance issues
- [#7822](https://github.com/MetaMask/metamask-mobile/pull/7822): fix: PPOM - Metrics information from ppom is not logged
- [#8012](https://github.com/MetaMask/metamask-mobile/pull/8012): fix: Rename old code fences
- [#7971](https://github.com/MetaMask/metamask-mobile/pull/7971): fix: Updated ButtonLink to use text when size is auto
- [#7976](https://github.com/MetaMask/metamask-mobile/pull/7976): fix: blockaid mobile performance improvements

## [7.12.5]

### Added

- [#8156](https://github.com/MetaMask/metamask-mobile/pull/8156): feat: migrate to latest Token rates controller

### Fixed

- [#8155](https://github.com/MetaMask/metamask-mobile/pull/8155): fix: OpenSea V1 -> V2 patch

## [7.12.3]

### Fixed

- [#8102](https://github.com/MetaMask/metamask-mobile/pull/8102): fix: prevent bad svg urls in react-native-svg

## [7.12.2]

### Fixed

- [#8057](https://github.com/MetaMask/metamask-mobile/pull/8057): fix: Disable SES on iOS

## [7.12.1]

### Fixed

- [#7991](https://github.com/MetaMask/metamask-mobile/pull/7991): fix: patch for token rates controller with coin gecko endpoint

## [7.12.0]

### Added

- [#7037](https://github.com/MetaMask/metamask-mobile/pull/7037): feat(off-ramp): add off-ramp feature
- [#7734](https://github.com/MetaMask/metamask-mobile/pull/7734): feat: enable code fence capabilities on mobile app.
- [#7754](https://github.com/MetaMask/metamask-mobile/pull/7754): feat: add a return to app modal only for ios 17 when an sdk operation is done
- [#7790](https://github.com/MetaMask/metamask-mobile/pull/7790): feat: goerli deprecation warning
- [#7714](https://github.com/MetaMask/metamask-mobile/pull/7714): feat: sdk comm update
- [#7789](https://github.com/MetaMask/metamask-mobile/pull/7789): feat: Goerli deprecation translation
- [#7732](https://github.com/MetaMask/metamask-mobile/pull/7732): feat: Update preferences controller to version ^4
- [#6586](https://github.com/MetaMask/metamask-mobile/pull/6586): feat: SES lockdown v0.18.8 (iOS JSC)
- [#7644](https://github.com/MetaMask/metamask-mobile/pull/7644): feat: add bluetooth library support
- [#7643](https://github.com/MetaMask/metamask-mobile/pull/7643): feat: add error message to retry modal
- [#7680](https://github.com/MetaMask/metamask-mobile/pull/7680): feat: UX improvement to address blockaid performance issue
- [#7701](https://github.com/MetaMask/metamask-mobile/pull/7701): feat: Network verification changed
- [#7641](https://github.com/MetaMask/metamask-mobile/pull/7641): feat: add account type tag label
- [#7728](https://github.com/MetaMask/metamask-mobile/pull/7728): feat: Update composable controller to v^3
- [#7657](https://github.com/MetaMask/metamask-mobile/pull/7657): feat: Deprecate SheetBottom component
- [#7717](https://github.com/MetaMask/metamask-mobile/pull/7717): feat: Update base controller to v3
- [#7712](https://github.com/MetaMask/metamask-mobile/pull/7712): feat: update phishing controller v5
- [#7702](https://github.com/MetaMask/metamask-mobile/pull/7702): feat: Translations for network verification warnings
- [#7708](https://github.com/MetaMask/metamask-mobile/pull/7708): feat: configure metro listener port

### Changed

- [#7860](https://github.com/MetaMask/metamask-mobile/pull/7860): refactor: Updated Toast story
- [#7391](https://github.com/MetaMask/metamask-mobile/pull/7391): refactor: Convert Button stories to csf format
- [#7393](https://github.com/MetaMask/metamask-mobile/pull/7393): refactor: Convert Badge stories to csf format
- [#7330](https://github.com/MetaMask/metamask-mobile/pull/7330): refactor: Convert Accordion stories to csf format
- [#7329](https://github.com/MetaMask/metamask-mobile/pull/7329): refactor: Convert Banner stories to csf format
- [#7415](https://github.com/MetaMask/metamask-mobile/pull/7415): refactor: Convert ModalConfirmation stories to csf format
- [#7471](https://github.com/MetaMask/metamask-mobile/pull/7471): refactor: Convert Sheet stories to csf format
- [#7374](https://github.com/MetaMask/metamask-mobile/pull/7374): refactor: Convert Avatar stories to csf format
- [#7762](https://github.com/MetaMask/metamask-mobile/pull/7762): test: Move TestIDs from page objects in e2e/pages folder
- [#7810](https://github.com/MetaMask/metamask-mobile/pull/7810): chore: Update e2e regression casing
- [#7763](https://github.com/MetaMask/metamask-mobile/pull/7763): chore(ramp): upgrade sdk to 1.25.3
- [#7749](https://github.com/MetaMask/metamask-mobile/pull/7749): revert: undo QR code changes from previous merge
- [#7770](https://github.com/MetaMask/metamask-mobile/pull/7770): chore: Test/fix swap token chart
- [#7760](https://github.com/MetaMask/metamask-mobile/pull/7760): chore(revert): Split the Swap test into two parts so that transaction activity is checked at the end
- [#7726](https://github.com/MetaMask/metamask-mobile/pull/7726): chore: Split the Swap test into two parts so that transaction activity is checked at the end
- [#7744](https://github.com/MetaMask/metamask-mobile/pull/7744): refactor: Update ListItemMultiSelect
- [#7746](https://github.com/MetaMask/metamask-mobile/pull/7746): refactor: Update AvatarVariants to AvatarVariant
- [#7741](https://github.com/MetaMask/metamask-mobile/pull/7741): refactor: Update SelectItem
- [#7739](https://github.com/MetaMask/metamask-mobile/pull/7739): refactor: Update ListItem based on latest design
- [#7756](https://github.com/MetaMask/metamask-mobile/pull/7756): docs: Update docs with new envar `METAMASK_ENVIRONMENT`
- [#7735](https://github.com/MetaMask/metamask-mobile/pull/7735): chore: Reduce e2e build scenarios
- [#7720](https://github.com/MetaMask/metamask-mobile/pull/7720): test: Move testIDs from the last 10 files from the modals folder
- [#7693](https://github.com/MetaMask/metamask-mobile/pull/7693): test: Move TestIDs from the first 10 page objects in modals folder
- [#7704](https://github.com/MetaMask/metamask-mobile/pull/7704): refactor: logger.js to typescript and optimize for dev

### Fixed

- [#7859](https://github.com/MetaMask/metamask-mobile/pull/7859): fix: microphone and camera on webview
- [#7776](https://github.com/MetaMask/metamask-mobile/pull/7776): fix: WalletConnect requests should show loading banner for blockaid
- [#7838](https://github.com/MetaMask/metamask-mobile/pull/7838): fix: remove unused .tools-versions to prioritize nvm
- [#7841](https://github.com/MetaMask/metamask-mobile/pull/7841): fix: branch io deeplink stop on error without handling link
- [#7836](https://github.com/MetaMask/metamask-mobile/pull/7836): fix: iOS Bitrise yarn setup
- [#7813](https://github.com/MetaMask/metamask-mobile/pull/7813): fix: Add microphone permissions to iOS (#7812)
- [#7834](https://github.com/MetaMask/metamask-mobile/pull/7834): fix: remove wrong property
- [#7796](https://github.com/MetaMask/metamask-mobile/pull/7796): fix: Update settings copy for Blockaid feature
- [#7797](https://github.com/MetaMask/metamask-mobile/pull/7797): fix: PPOM - What's New copy text refers to OpenSea previous feature - non existing in Mobile
- [#7798](https://github.com/MetaMask/metamask-mobile/pull/7798): fix: blockaid banner should not be visible if option has not been enabled in settings
- [#7817](https://github.com/MetaMask/metamask-mobile/pull/7817): fix: blockaid banner appearance for approve transactions
- [#7820](https://github.com/MetaMask/metamask-mobile/pull/7820): fix: blockaid banner should not break if feature is an object
- [#7799](https://github.com/MetaMask/metamask-mobile/pull/7799): fix: Update loading copy for Blockaid on mobile
- [#7821](https://github.com/MetaMask/metamask-mobile/pull/7821): fix: error property on object is not extensible
- [#7815](https://github.com/MetaMask/metamask-mobile/pull/7815): fix: blockaid banner fix for signature requests - warning should not disappear after checking message details
- [#7809](https://github.com/MetaMask/metamask-mobile/pull/7809): fix: Disable javascript when webview is not focused
- [#7811](https://github.com/MetaMask/metamask-mobile/pull/7811): fix: Lock yarn to 1.22.19
- [#7781](https://github.com/MetaMask/metamask-mobile/pull/7781): fix: android builds: update hermes commit hash
- [#7786](https://github.com/MetaMask/metamask-mobile/pull/7786): fix: e2e - update search asset and hide for wallet tests
- [#7788](https://github.com/MetaMask/metamask-mobile/pull/7788): fix: remove PPOM initialisation error appearing in dev mode
- [#7774](https://github.com/MetaMask/metamask-mobile/pull/7774): fix: blockaid URL
- [#7765](https://github.com/MetaMask/metamask-mobile/pull/7765): fix: revert the changes made for deeplink.
- [#7777](https://github.com/MetaMask/metamask-mobile/pull/7777): fix: blockaid validations should be done only on mainnet
- [#7737](https://github.com/MetaMask/metamask-mobile/pull/7737): fix: Use custom controls for iOS video (#7729)
- [#7733](https://github.com/MetaMask/metamask-mobile/pull/7733): fix: silence PollingBlockTracker Sentry error emit
- [#7758](https://github.com/MetaMask/metamask-mobile/pull/7758): fix: bump axios
- [#7750](https://github.com/MetaMask/metamask-mobile/pull/7750): fix: Fix network badge merge issue
- [#7718](https://github.com/MetaMask/metamask-mobile/pull/7718): fix: add definitions for release labels in labeling-guidelines
- [#7727](https://github.com/MetaMask/metamask-mobile/pull/7727): fix: [e2e] - Fix Bitrise pipeline environment variable
- [#7719](https://github.com/MetaMask/metamask-mobile/pull/7719): fix: Bitrise android e2e linux builds
- [#7703](https://github.com/MetaMask/metamask-mobile/pull/7703): fix: Fix Sentry source map upload
- [#7706](https://github.com/MetaMask/metamask-mobile/pull/7706): fix: PPOM - See details arrow icon missmatch between platforms
- [#7683](https://github.com/MetaMask/metamask-mobile/pull/7683): fix: 942 invalid QR code warning message on bad QR code
- [#7662](https://github.com/MetaMask/metamask-mobile/pull/7662): fix: update PPOM Validator to address blockaid performance issues
- [#7642](https://github.com/MetaMask/metamask-mobile/pull/7642): fix: action view btn not able translate

## [7.11.0]

### Added

- [#7251](https://github.com/MetaMask/metamask-mobile/pull/7251): feat: #999 - RTK consolidate reducers
- [#7628](https://github.com/MetaMask/metamask-mobile/pull/7628): feat: sdk batch rpc calls
- [#7655](https://github.com/MetaMask/metamask-mobile/pull/7655): feat: node to version 18.17.1
- [#7114](https://github.com/MetaMask/metamask-mobile/pull/7114): feat: Xcode 15 support on React Native 0.71.14
- [#7618](https://github.com/MetaMask/metamask-mobile/pull/7618): feat: Show message on UI when blockaid validation fails
- [#7567](https://github.com/MetaMask/metamask-mobile/pull/7567): feat(actions): refactoring + improvement of github actions
- [#7363](https://github.com/MetaMask/metamask-mobile/pull/7363): feat: integrating ppom update tool into mobile build
- [#7584](https://github.com/MetaMask/metamask-mobile/pull/7584): feat: re-create connect_sign feature
- [#7352](https://github.com/MetaMask/metamask-mobile/pull/7352): feat: enable Linea for swaps
- [#7419](https://github.com/MetaMask/metamask-mobile/pull/7419): feat: Add metrics for provider calls coming from ppom on mobile

### Changed

- [#7349](https://github.com/MetaMask/metamask-mobile/pull/7349): refactor: Convert Form stories
- [#7414](https://github.com/MetaMask/metamask-mobile/pull/7414): refactor: Convert List stories to csf format
- [#7468](https://github.com/MetaMask/metamask-mobile/pull/7468): refactor: Convert Text stories to csf format
- [#7412](https://github.com/MetaMask/metamask-mobile/pull/7412): refactor: Convert Overlay story to csf format
- [#7413](https://github.com/MetaMask/metamask-mobile/pull/7413): refactor: Convert Icon story to csf format
- [#7698](https://github.com/MetaMask/metamask-mobile/pull/7698): refactor(readme): node version 18
- [#7375](https://github.com/MetaMask/metamask-mobile/pull/7375): refactor: Convert BottomSheet stories to csf format
- [#7427](https://github.com/MetaMask/metamask-mobile/pull/7427): refactor: Convert Navigation stories to csf format
- [#7470](https://github.com/MetaMask/metamask-mobile/pull/7470): refactor: Convert Select stories to csf format
- [#7469](https://github.com/MetaMask/metamask-mobile/pull/7469): refactor: Convert Picker stories to csf format
- [#7373](https://github.com/MetaMask/metamask-mobile/pull/7373): refactor: Convert Cell stories to csf format
- [#7688](https://github.com/MetaMask/metamask-mobile/pull/7688): chore: refactor swaps view with selectors
- [#7682](https://github.com/MetaMask/metamask-mobile/pull/7682): test: Move testids from in SendView, WalletView, SendLinkView and AmountView
- [#7672](https://github.com/MetaMask/metamask-mobile/pull/7672): test: E2E Removed duplicate tests in quarantine
- [#7645](https://github.com/MetaMask/metamask-mobile/pull/7645): test: Enable Regression tests on Bitrise
- [#7650](https://github.com/MetaMask/metamask-mobile/pull/7650): test:7562 move testids settings folder
- [#7639](https://github.com/MetaMask/metamask-mobile/pull/7639): chore: Update selectors for contract approval modal
- [#7621](https://github.com/MetaMask/metamask-mobile/pull/7621): ci: create gh action to create cherry-pick PRs for releases
- [#7568](https://github.com/MetaMask/metamask-mobile/pull/7568): chore: run `yarn install` as part of `yarn deduplicate`
- [#7604](https://github.com/MetaMask/metamask-mobile/pull/7604): refactor: [Part 4] - Ongoing Work for legacy <Text> comp replacement.
- [#7573](https://github.com/MetaMask/metamask-mobile/pull/7573): refactor: [Part 3] - Ongoing Work for legacy <Text> comp replacement.
- [#7610](https://github.com/MetaMask/metamask-mobile/pull/7610): test: Move onboarding testIDs to Selectors folder inside e2e
- [#7635](https://github.com/MetaMask/metamask-mobile/pull/7635): chore: move spec files to subfolders
- [#6668](https://github.com/MetaMask/metamask-mobile/pull/6668): chore: update stale bot language to provide instruction for community contributions
- [#7571](https://github.com/MetaMask/metamask-mobile/pull/7571): refactor: [Part 2] - Ongoing Work for legacy <Text> comp replacement.
- [#7339](https://github.com/MetaMask/metamask-mobile/pull/7339): ci: Create github action for triggering Bitrise E2E builds based on label
- [#7626](https://github.com/MetaMask/metamask-mobile/pull/7626): test: Fix smoke tests on main
- [#7326](https://github.com/MetaMask/metamask-mobile/pull/7326): refactor: Update Header and convert Header Story
- [#7600](https://github.com/MetaMask/metamask-mobile/pull/7600): chore: split sdk connect
- [#7597](https://github.com/MetaMask/metamask-mobile/pull/7597): chore: revert transfer DeeplinkManager.js file to TS
- [#7586](https://github.com/MetaMask/metamask-mobile/pull/7586): chore: transfer DeeplinkManager.js file to TS
- [#7589](https://github.com/MetaMask/metamask-mobile/pull/7589): chore: adds the fixture env variable to debug android builds
- [#7171](https://github.com/MetaMask/metamask-mobile/pull/7171): docs: add JSDoc to deprecate Alert in favor of BannerAlert #6904
- [#7578](https://github.com/MetaMask/metamask-mobile/pull/7578): docs: Updating PR template
- [#7574](https://github.com/MetaMask/metamask-mobile/pull/7574): chore: minor bump on react native dev tools to address audit issue

### Fixed

- [#7692](https://github.com/MetaMask/metamask-mobile/pull/7692): fix: sdk and deeplink init process
- [#7687](https://github.com/MetaMask/metamask-mobile/pull/7687): fix: refactor selectors and fix request token test
- [#7491](https://github.com/MetaMask/metamask-mobile/pull/7491): fix: Warn users when connecting to a website on the eth-phishing-detect list on mobile
- [#7601](https://github.com/MetaMask/metamask-mobile/pull/7601): fix: approve deeplink displays domain pill with selected address
- [#7678](https://github.com/MetaMask/metamask-mobile/pull/7678): fix: remove init launch app
- [#7667](https://github.com/MetaMask/metamask-mobile/pull/7667): fix: Wallet not switching networks when add new network requested by a dapp
- [#7668](https://github.com/MetaMask/metamask-mobile/pull/7668): fix: Disable permission-system-revoking-multiple-accounts detox test
- [#7661](https://github.com/MetaMask/metamask-mobile/pull/7661): fix: actions improvement
- [#7651](https://github.com/MetaMask/metamask-mobile/pull/7651): fix: revert nonce logic in transaction controller
- [#7654](https://github.com/MetaMask/metamask-mobile/pull/7654): fix: update project.pbxproj removing not needed configurations
- [#7595](https://github.com/MetaMask/metamask-mobile/pull/7595): fix(devDeps): remove duplicate older storybook and babel packages
- [#7633](https://github.com/MetaMask/metamask-mobile/pull/7633): fix: bump browserify-sign to v 4.2.2
- [#7614](https://github.com/MetaMask/metamask-mobile/pull/7614): fix: Bump crypto js to 4.2.0
- [#7603](https://github.com/MetaMask/metamask-mobile/pull/7603): fix: Copy changes, Security advice by > Powered by
- [#6951](https://github.com/MetaMask/metamask-mobile/pull/6951): fix: add favicon fetching hook
- [#7590](https://github.com/MetaMask/metamask-mobile/pull/7590): fix: Change network id for chain id
- [#7482](https://github.com/MetaMask/metamask-mobile/pull/7482): fix: 1273 duplicate contact addresses
- [#7540](https://github.com/MetaMask/metamask-mobile/pull/7540): fix: token decimals fetched from the chain
- [#7546](https://github.com/MetaMask/metamask-mobile/pull/7546): fix link to testnet faucets
- [#7557](https://github.com/MetaMask/metamask-mobile/pull/7557): fix(issue template): encourage recordings
- [#7813](https://github.com/MetaMask/metamask-mobile/pull/7813): fix: Add microphone permissions to iOS
- [#7737](https://github.com/MetaMask/metamask-mobile/pull/7737): fix: Use custom controls for iOS video
- [#7811](https://github.com/MetaMask/metamask-mobile/pull/7811): fix: Lock yarn to 1.22.19
- [#7733](https://github.com/MetaMask/metamask-mobile/pull/7733): fix: silence PollingBlockTracker Sentry

## [7.10.0]

### Added

- [#7154](https://github.com/MetaMask/metamask-mobile/pull/7154): feat: incoming transactions by network
- [#7541](https://github.com/MetaMask/metamask-mobile/pull/7541): feat: Add EIP-6963 Provider
- [#7256](https://github.com/MetaMask/metamask-mobile/pull/7256): feat: Enable zkSync Era in Swaps
- [#7465](https://github.com/MetaMask/metamask-mobile/pull/7465): feat:Feat/1273 duplicate contact addresses i18n
- [#7185](https://github.com/MetaMask/metamask-mobile/pull/7185): feat: ipfs banner
- [#7411](https://github.com/MetaMask/metamask-mobile/pull/7411): feat(ramp): update quote cta copy
- [#7218](https://github.com/MetaMask/metamask-mobile/pull/7218): feat: Show link on blockaid banner to report false positives
- [#7267](https://github.com/MetaMask/metamask-mobile/pull/7267): feat: bump `@metamask/keyring-controller` to v6.0.0
- [#7584](https://github.com/MetaMask/metamask-mobile/pull/7584): feat: re-create connect_sign feature

### Changed

- [#7574](https://github.com/MetaMask/metamask-mobile/pull/7574): chore: minor bump on react native dev tools to address audit issue
- [#7354](https://github.com/MetaMask/metamask-mobile/pull/7354): chore: New Crowdin translations by Github Action
- [#7542](https://github.com/MetaMask/metamask-mobile/pull/7542): chore: @metamask/test-dapp@^7.1.0->^7.2.0
- [#7335](https://github.com/MetaMask/metamask-mobile/pull/7335): chore: Remove condition to disable transaction confirm button if user has no balance
- [#7494](https://github.com/MetaMask/metamask-mobile/pull/7494): chore: Pull `@metamask/mobile-provider` back into `metamask-mobile`
- [#7512](https://github.com/MetaMask/metamask-mobile/pull/7512): test: Extract assertion logic from the helpers.js file and add it to an Assertions class.
- [#7535](https://github.com/MetaMask/metamask-mobile/pull/7535): chore: Add @storybook LavaMoat allow-scripts config
- [#6306](https://github.com/MetaMask/metamask-mobile/pull/6306): chore(devDeps): Use updated fork of oss-attribution-generator
- [#7529](https://github.com/MetaMask/metamask-mobile/pull/7529): chore: clean up allow-scripts config
- [#7131](https://github.com/MetaMask/metamask-mobile/pull/7131): chore: Deduplicate remaining dependencies; add deduplicate script
- [#7417](https://github.com/MetaMask/metamask-mobile/pull/7417): test: Add Matchers class for all Matchers in the helpers.js file
- [#7510](https://github.com/MetaMask/metamask-mobile/pull/7510): test: Fix failing wallet E2E test on main
- [#7505](https://github.com/MetaMask/metamask-mobile/pull/7505): chore: Blockaid remove unused unfair_trade reason type and minor cleanup
- [#7473](https://github.com/MetaMask/metamask-mobile/pull/7473): test: Migrate 'Approve Custom ERC20 Token Amount' to Detox
- [#7496](https://github.com/MetaMask/metamask-mobile/pull/7496): docs: Update Yarn V1 README instructions
- [#7322](https://github.com/MetaMask/metamask-mobile/pull/7322): refactor: Update Checkbox props, style, tests, and stories
- [#7328](https://github.com/MetaMask/metamask-mobile/pull/7328): refactor: Update card story to remove story error
- [#7379](https://github.com/MetaMask/metamask-mobile/pull/7379): ci: Github action to check issue body matches issues templates and add labels to issue when needed
- [#7355](https://github.com/MetaMask/metamask-mobile/pull/7355): chore: Remove unnecessary dependency patch on `SignatureController`
- [#7376](https://github.com/MetaMask/metamask-mobile/pull/7376): chore(deps): bump postcss from 8.4.29 to 8.4.31
- [#7404](https://github.com/MetaMask/metamask-mobile/pull/7404): chore: bump `@metamask/mobile-provider` to `^3.0.0`
- [#7416](https://github.com/MetaMask/metamask-mobile/pull/7416): refactor: Re-Add decorators to storybook
- [#7402](https://github.com/MetaMask/metamask-mobile/pull/7402): test: Enable Fixtures in E2E some tests tagged "Regression"
- [#6896](https://github.com/MetaMask/metamask-mobile/pull/6896): chore: Added type declaration for deprecated Checkbox library
- [#7392](https://github.com/MetaMask/metamask-mobile/pull/7392): test: Migrate approve default erc20 to detox
- [#7293](https://github.com/MetaMask/metamask-mobile/pull/7293): feat: display nft media setting copy improvement
- [#7390](https://github.com/MetaMask/metamask-mobile/pull/7390): refactor(ramp): refactor get started copy
- [#7389](https://github.com/MetaMask/metamask-mobile/pull/7389): refactor(ramp): refactor quotes view copy and list
- [#7021](https://github.com/MetaMask/metamask-mobile/pull/7021): docs: Update JSDoc to deprecate Text Component Usage
- [#7384](https://github.com/MetaMask/metamask-mobile/pull/7384): test: add fallback when generating fixtures server url in wdio tests
- [#7372](https://github.com/MetaMask/metamask-mobile/pull/7372): test: reorg signatures tests to maximize efficiency
- [#7356](https://github.com/MetaMask/metamask-mobile/pull/7356): test: Add dynamic allocation port for ganache, fixtures and test dapp
- [#7130](https://github.com/MetaMask/metamask-mobile/pull/7130): chore(deps): dedupe semver
- [#7128](https://github.com/MetaMask/metamask-mobile/pull/7128): deps: Dedupe `ethers`@5.\*
- [#7366](https://github.com/MetaMask/metamask-mobile/pull/7366): ci(bitrise): trigger smoke test on every merge to main
- [#7364](https://github.com/MetaMask/metamask-mobile/pull/7364): chore: bump Node to v16.20

### Fixed

- [#7540](https://github.com/MetaMask/metamask-mobile/pull/7540): fix: token decimals fetched from the chain
- [#7531](https://github.com/MetaMask/metamask-mobile/pull/7531): fix: depcheck@^1.4.5->^1.4.7
- [#7483](https://github.com/MetaMask/metamask-mobile/pull/7483): fix: android os connection issue
- [#7474](https://github.com/MetaMask/metamask-mobile/pull/7474): fix: wc2 invalid origin in analytics
- [#7519](https://github.com/MetaMask/metamask-mobile/pull/7519): fix: transactions stuck in submitted status
- [#7518](https://github.com/MetaMask/metamask-mobile/pull/7518): fix(issue template): placeholder text
- [#7489](https://github.com/MetaMask/metamask-mobile/pull/7489): fix: use hostname to fetch approvedhosts
- [#7319](https://github.com/MetaMask/metamask-mobile/pull/7319): fix: finding and updating transaction errors in confirmation pages state
- [#7350](https://github.com/MetaMask/metamask-mobile/pull/7350): fix: incorrect confirmed transaction notification
- [#7476](https://github.com/MetaMask/metamask-mobile/pull/7476): fix: missing redirect on deepllink after connection
- [#7129](https://github.com/MetaMask/metamask-mobile/pull/7129): fix(deps): Dedupe ethereum-cryptography
- [#7431](https://github.com/MetaMask/metamask-mobile/pull/7431): fix: rejecting contract approval using hardware wallet account from a deeplink
- [#7331](https://github.com/MetaMask/metamask-mobile/pull/7331): fix: Fix TS errors in `core` directory
- [#7361](https://github.com/MetaMask/metamask-mobile/pull/7361): fix: reset transaction fix
- [#7410](https://github.com/MetaMask/metamask-mobile/pull/7410): fix: Verify third party details causes to watch the asset undesirably
- [#7397](https://github.com/MetaMask/metamask-mobile/pull/7397): fix: Add metrics for Blockaid settings when it's turned on/off
- [#7386](https://github.com/MetaMask/metamask-mobile/pull/7386): fix: Add Dependabot missing team label
- [#7305](https://github.com/MetaMask/metamask-mobile/pull/7305): fix: legacy gas miss match and not preserved after change
- [#7377](https://github.com/MetaMask/metamask-mobile/pull/7377): fix(podfile): add react-native-launch-arguments to podfile.lock
- [#7368](https://github.com/MetaMask/metamask-mobile/pull/7368): fix(ramp): use os browser in android
- [#7371](https://github.com/MetaMask/metamask-mobile/pull/7371): fix(action): bug report creation was not working
- [#7362](https://github.com/MetaMask/metamask-mobile/pull/7362): fix(action): update fetch-depth parameter to fetch only the last commit

## [7.9.1]

### Fixed

- [#7653](https://github.com/MetaMask/metamask-mobile/pull/7653): fix: revert nonce logic in transaction controller

## [7.9.0]

### Added

- [#7341](https://github.com/MetaMask/metamask-mobile/pull/7341): feat(ramp): add webview debug by env vars
- [#7345](https://github.com/MetaMask/metamask-mobile/pull/7345): feat: remove unused react-native-webrtc package
- [#7212](https://github.com/MetaMask/metamask-mobile/pull/7212): feat: extend the time we resume the session without showing OTP
- [#7261](https://github.com/MetaMask/metamask-mobile/pull/7261): feat: Add header to watch asset page
- [#7263](https://github.com/MetaMask/metamask-mobile/pull/7263): feat: Upgrade Mobile Storybook to version 6.5
- [#7273](https://github.com/MetaMask/metamask-mobile/pull/7273): feat: add logging controller
- [#7052](https://github.com/MetaMask/metamask-mobile/pull/7052): feat: Ipfs implementation (#6968)

### Changed

- [#7028](https://github.com/MetaMask/metamask-mobile/pull/7028): chore: New Crowdin translations by Github Action
- [#7159](https://github.com/MetaMask/metamask-mobile/pull/7159): refactor: custom network component
- [#7277](https://github.com/MetaMask/metamask-mobile/pull/7277): chore: 5.8.1 Sentry SDK Upgrade
- [#7343](https://github.com/MetaMask/metamask-mobile/pull/7343): test: revert ganache termination on fixtures
- [#7125](https://github.com/MetaMask/metamask-mobile/pull/7125): refactor: Update controller packages to core v49
- [#7324](https://github.com/MetaMask/metamask-mobile/pull/7324): refactor: Add accessibilityRole to text component
- [#7207](https://github.com/MetaMask/metamask-mobile/pull/7207): test: 939 e2e migrate senderc20 test to detox
- [#7287](https://github.com/MetaMask/metamask-mobile/pull/7287): test: increase Confirmations e2e stability by terminating ganache on hooks
- [#7280](https://github.com/MetaMask/metamask-mobile/pull/7280): test: Enable fixtures smoke tests
- [#7286](https://github.com/MetaMask/metamask-mobile/pull/7286): ci: uploading QA builds to Browserstack from Bitrise
- [#7127](https://github.com/MetaMask/metamask-mobile/pull/7127): chore(deps): dedupe ethereumjs packages
- [#7074](https://github.com/MetaMask/metamask-mobile/pull/7074): test: Swap and Token Details e2e automated tests
- [#7053](https://github.com/MetaMask/metamask-mobile/pull/7053): chore(deps): bump activesupport from 7.0.5 to 7.0.7.2
- [#7225](https://github.com/MetaMask/metamask-mobile/pull/7225): test: Signatures refactor with fixtures

### Fixed

- [#7309](https://github.com/MetaMask/metamask-mobile/pull/7309): fix: Fix Podfile.lock versions
- [#7308](https://github.com/MetaMask/metamask-mobile/pull/7308): fix: Fix e2e smoke tests caused by failed pod install step
- [#7197](https://github.com/MetaMask/metamask-mobile/pull/7197): fix: Key the address book by chain ID instead of network ID
- [#7035](https://github.com/MetaMask/metamask-mobile/pull/7035): fix: legacy gas fee edit modal
- [#7351](https://github.com/MetaMask/metamask-mobile/pull/7351): fix: Add chaijs/get-func-name resolution
- [#7271](https://github.com/MetaMask/metamask-mobile/pull/7271): fix: signature event names
- [#7314](https://github.com/MetaMask/metamask-mobile/pull/7314): fix: transaction controller patch
- [#7217](https://github.com/MetaMask/metamask-mobile/pull/7217): fix: all regex in one file
- [#7223](https://github.com/MetaMask/metamask-mobile/pull/7223): fix: remove Linea mainnet feature toggle
- [#7145](https://github.com/MetaMask/metamask-mobile/pull/7145): fix: Blockaid code fixes / updates
- [#7276](https://github.com/MetaMask/metamask-mobile/pull/7276): fix: handle overlapping add network requests
- [#7278](https://github.com/MetaMask/metamask-mobile/pull/7278): fix: Fix console errors upon switching networks

## [7.8.0]

### Added

- [#7068](https://github.com/MetaMask/metamask-mobile/pull/7068): feat: Adding blockaid banner to confirmation pages
- [#7186](https://github.com/MetaMask/metamask-mobile/pull/7186): feat: translation ipfs banner
- [#7038](https://github.com/MetaMask/metamask-mobile/pull/7038): feat: Blockaid preference
- [#6749](https://github.com/MetaMask/metamask-mobile/pull/6749): feat: PPOM integration with MetaMask mobile app
- [#7107](https://github.com/MetaMask/metamask-mobile/pull/7107): feat: update README XCode and python instructions

### Changed

- [#7213](https://github.com/MetaMask/metamask-mobile/pull/7213): chore: Normalize transaction controller patch
- [#7226](https://github.com/MetaMask/metamask-mobile/pull/7226): chore: add script to patch transaction controller
- [#7140](https://github.com/MetaMask/metamask-mobile/pull/7140): chore: Update confirmation page layout for Blockaid alerts
- [#7120](https://github.com/MetaMask/metamask-mobile/pull/7120): chore: Signature events rename values.
- [#7216](https://github.com/MetaMask/metamask-mobile/pull/7216): test: E2E-Parallel execution support for Android in Bitrise CI
- [#7202](https://github.com/MetaMask/metamask-mobile/pull/7202): test: build test dapp and run tests against localhost
- [#7150](https://github.com/MetaMask/metamask-mobile/pull/7150): refactor: Update ENS utils to accept chain ID
- [#7184](https://github.com/MetaMask/metamask-mobile/pull/7184): chore: Remove unused `getNetworkName` utility function
- [#7182](https://github.com/MetaMask/metamask-mobile/pull/7182): refactor: Fix documented return type of `handleNetworkSwitch`
- [#7168](https://github.com/MetaMask/metamask-mobile/pull/7168): test: Screenshots on failure should only be done on the last retry for ios
- [#7179](https://github.com/MetaMask/metamask-mobile/pull/7179): refactor: Add tests for `checkAddress` and fix types
- [#7118](https://github.com/MetaMask/metamask-mobile/pull/7118): deps: dedupe @babel/_, babel-_
- [#7032](https://github.com/MetaMask/metamask-mobile/pull/7032): devDeps: @lavamoat/allow-scripts@1.0.6->2.3.1
- [#7124](https://github.com/MetaMask/metamask-mobile/pull/7124): ci: Add depcheck test
- [#7156](https://github.com/MetaMask/metamask-mobile/pull/7156): refactor: Refactor `isTestNet` to accept chain ID
- [#7153](https://github.com/MetaMask/metamask-mobile/pull/7153): chore: Use ganache seeder and connected to dapp fixture
- [#7158](https://github.com/MetaMask/metamask-mobile/pull/7158): ci: Fix SonarCloud warning
- [#6877](https://github.com/MetaMask/metamask-mobile/pull/6877): ci: Run unit tests in parallel
- [#7117](https://github.com/MetaMask/metamask-mobile/pull/7117): refactor: move ganache from hooks to fixtures
- [#7121](https://github.com/MetaMask/metamask-mobile/pull/7121): refactor: Use selectors for core network state access
- [#7119](https://github.com/MetaMask/metamask-mobile/pull/7119): ci: Resolve SonarCloud warnings
- [#7101](https://github.com/MetaMask/metamask-mobile/pull/7101): chore: Bump test-dapp to 7.1.0
- [#7110](https://github.com/MetaMask/metamask-mobile/pull/7110): refactor: Migrate store to TypeScript
- [#7111](https://github.com/MetaMask/metamask-mobile/pull/7111): ci: Improve performance of GitHub Actions setup
- [#7100](https://github.com/MetaMask/metamask-mobile/pull/7100): ci: Add type check lint to CI

### Fixed

- [#7187](https://github.com/MetaMask/metamask-mobile/pull/7187): fix: sonar coverage path
- [#7106](https://github.com/MetaMask/metamask-mobile/pull/7106): fix: rename signature events and fix failing unit test
- [#7077](https://github.com/MetaMask/metamask-mobile/pull/7077): fix: Warning when rejecting an approval request with id XYZ not found
- [#7200](https://github.com/MetaMask/metamask-mobile/pull/7200): fix: invalid destructuring of undefined object
- [#7056](https://github.com/MetaMask/metamask-mobile/pull/7056): fix: safeguard util/address functions for undefined arguments
- [#7141](https://github.com/MetaMask/metamask-mobile/pull/7141): fix: 1078 mixpanel delete data
- [#7166](https://github.com/MetaMask/metamask-mobile/pull/7166): fix: keystone signatures
- [#7147](https://github.com/MetaMask/metamask-mobile/pull/7147): fix: Fix type errors in reducers
- [#7142](https://github.com/MetaMask/metamask-mobile/pull/7142): fix: approval modal showing after submit swap
- [#7102](https://github.com/MetaMask/metamask-mobile/pull/7102): fix: sdk connection issues
- [#7105](https://github.com/MetaMask/metamask-mobile/pull/7105): fix: Fix all Engine type errors
- [#7195](https://github.com/MetaMask/metamask-mobile/pull/7195): fix: Fix incoming transaction notifications on built-in networks
- [#7109](https://github.com/MetaMask/metamask-mobile/pull/7109): fix: Fix Typescript errors in utils dir
- [#7189](https://github.com/MetaMask/metamask-mobile/pull/7189): fix: Use network name in switch alert
- [#7209](https://github.com/MetaMask/metamask-mobile/pull/7209): fix: handle etherscan rate limit errors
- [#7211](https://github.com/MetaMask/metamask-mobile/pull/7211): fix: Fix Sentry sourcemap upload step
- [#7096](https://github.com/MetaMask/metamask-mobile/pull/7096): fix: Fix Engine `controllerMessenger` type errors

## [7.7.0]

### Added

- [#7090](https://github.com/MetaMask/metamask-mobile/pull/7090): feat: add translations for new contextual sheet display nft media
- [#6727](https://github.com/MetaMask/metamask-mobile/pull/6727): style: Update Button's pressed and disabled states
- [#7075](https://github.com/MetaMask/metamask-mobile/pull/7075): feat: incoming transactions translations
- [#7072](https://github.com/MetaMask/metamask-mobile/pull/7072): feat: update translations
- [#7059](https://github.com/MetaMask/metamask-mobile/pull/7059): feat: fallback removed
- [#6585](https://github.com/MetaMask/metamask-mobile/pull/6585): feat: Blockaid banners implementation
- [#6983](https://github.com/MetaMask/metamask-mobile/pull/6983): feat: 940 e2e migrate senderc721 test to detox

### Changed

- [#6998](https://github.com/MetaMask/metamask-mobile/pull/6998): refactor: use block tracker to poll incoming transactions
- [#6872](https://github.com/MetaMask/metamask-mobile/pull/6872): refactor: Update controller packages to v44
- [#7091](https://github.com/MetaMask/metamask-mobile/pull/7091): refactor: Simplify Engine constructor
- [#7089](https://github.com/MetaMask/metamask-mobile/pull/7089): refactor: Rename ambiguous network variables
- [#7022](https://github.com/MetaMask/metamask-mobile/pull/7022): refactor: Adopt new `addTransaction` option bag changes
- [#7085](https://github.com/MetaMask/metamask-mobile/pull/7085): refactor: Simplify `handleNetworkSwitch` utility
- [#6106](https://github.com/MetaMask/metamask-mobile/pull/6106): refactor: Componentize BottomSheet
- [#7057](https://github.com/MetaMask/metamask-mobile/pull/7057): test: Expand interaction capabilities in test cases using fixtures
- [#7054](https://github.com/MetaMask/metamask-mobile/pull/7054): chore(ramp): upgrade sdk to 1.23.0
- [#6996](https://github.com/MetaMask/metamask-mobile/pull/6996): chore: fix ios simulator qa build
- [#7055](https://github.com/MetaMask/metamask-mobile/pull/7055): refactor: format package.json correctly
- [#6964](https://github.com/MetaMask/metamask-mobile/pull/6964): refactor: Update core controllers (v47)
- [#7048](https://github.com/MetaMask/metamask-mobile/pull/7048): chore(tests): Detox rename correct failing tests
- [#7047](https://github.com/MetaMask/metamask-mobile/pull/7047): chore(test): temp disable flaky tests
- [#6902](https://github.com/MetaMask/metamask-mobile/pull/6902): refactor: Update core controllers (v45)
- [#6898](https://github.com/MetaMask/metamask-mobile/pull/6898): refactor: Update `@metamask/assets-controllers` patch

### Fixed

- [#7050](https://github.com/MetaMask/metamask-mobile/pull/7050): fix: Update terms of use header to match new copy
- [#7086](https://github.com/MetaMask/metamask-mobile/pull/7086): fix: ext contributor SonarCloud
- [#7029](https://github.com/MetaMask/metamask-mobile/pull/7029): fix: crowdin action upload
- [#6990](https://github.com/MetaMask/metamask-mobile/pull/6990): fix: Add missing long press event for account removal
- [#6892](https://github.com/MetaMask/metamask-mobile/pull/6892): fix: Updated ButtonIcon disabled state
- [#7042](https://github.com/MetaMask/metamask-mobile/pull/7042): fix: transaction history after import
- [#7064](https://github.com/MetaMask/metamask-mobile/pull/7064): fix: [7.6.0] - Token quotes on token details screen
- [#7041](https://github.com/MetaMask/metamask-mobile/pull/7041): fix: changelog duplication
- [#6962](https://github.com/MetaMask/metamask-mobile/pull/6962): fix: remove outdated ipfs gateways
- [#7024](https://github.com/MetaMask/metamask-mobile/pull/7024): fix(action): octokit not supported on MetaMask repos

## [7.6.0]

### Added

- [#6938](https://github.com/MetaMask/metamask-mobile/pull/6938): feat(release): 7.5.0
- [#7026](https://github.com/MetaMask/metamask-mobile/pull/7026): feat: new translations for nft media
- [#6779](https://github.com/MetaMask/metamask-mobile/pull/6779): feat: Add security alerts settings to experimental tab
- [#6901](https://github.com/MetaMask/metamask-mobile/pull/6901): feat: blockaid what's new popup
- [#6967](https://github.com/MetaMask/metamask-mobile/pull/6967): feat: github actions to automatically create and close bug report issue
- [#6997](https://github.com/MetaMask/metamask-mobile/pull/6997): feat: android nativesdk integration
- [#6794](https://github.com/MetaMask/metamask-mobile/pull/6794): feat: github action to check if PR has requested labels before being merged
- [#6934](https://github.com/MetaMask/metamask-mobile/pull/6934): feat: Migrate wdio 'SendEthMultisig' test to Detox
- [#6832](https://github.com/MetaMask/metamask-mobile/pull/6832): feat: add support for template and header on result pages

### Changed

- [#6913](https://github.com/MetaMask/metamask-mobile/pull/6913): chore: remove unused Jest preprocessor
- [#6840](https://github.com/MetaMask/metamask-mobile/pull/6840): chore(deps): bump word-wrap from 1.2.3 to 1.2.4
- [#6930](https://github.com/MetaMask/metamask-mobile/pull/6930): docs: Update QA section in PR template
- [#6862](https://github.com/MetaMask/metamask-mobile/pull/6862): docs: update PR template to include QA labels
- [#6963](https://github.com/MetaMask/metamask-mobile/pull/6963): chore: small refactor
- [#6853](https://github.com/MetaMask/metamask-mobile/pull/6853): docs: update README.md
- [#6789](https://github.com/MetaMask/metamask-mobile/pull/6789): ci(code-cov): adding code-cov to project
- [#6422](https://github.com/MetaMask/metamask-mobile/pull/6422): ci(action): unused unit testing segmentation scripts and yarn steps
- [#6966](https://github.com/MetaMask/metamask-mobile/pull/6966): chore: translation ens IPFS alert
- [#6942](https://github.com/MetaMask/metamask-mobile/pull/6942): style: Updated minor checkbox style
- [#6936](https://github.com/MetaMask/metamask-mobile/pull/6936): chore: remove onBackdropPress for signatures

### Fixed

- [#6653](https://github.com/MetaMask/metamask-mobile/pull/6653): fix: #893 fix immediate lock timer
- [#6910](https://github.com/MetaMask/metamask-mobile/pull/6910): fix: remove translations files being pushed up to crowdin
- [#6947](https://github.com/MetaMask/metamask-mobile/pull/6947): fix: Fix TS errors in `component-library` directory
- [#6975](https://github.com/MetaMask/metamask-mobile/pull/6975): fix: revert PR 6958
- [#6945](https://github.com/MetaMask/metamask-mobile/pull/6945): fix: remove unused code to overwrite filenames for Sentry error reporting
- [#6957](https://github.com/MetaMask/metamask-mobile/pull/6957): fix: vault recovery & invalid password error
- [#7015](https://github.com/MetaMask/metamask-mobile/pull/7015): fix: android sdk reconnection
- [#7013](https://github.com/MetaMask/metamask-mobile/pull/7013): fix: change fox svg code
- [#6959](https://github.com/MetaMask/metamask-mobile/pull/6959): fix: Fix TS errors in `components` directory
- [#6992](https://github.com/MetaMask/metamask-mobile/pull/6992): fix: Update Terms & Conditions and Privacy Policy URLs
- [#6864](https://github.com/MetaMask/metamask-mobile/pull/6864): fix: custom position logic for badgeWrapper
- [#6956](https://github.com/MetaMask/metamask-mobile/pull/6956): fix: Restore deleted SendEthMultisig.feature file
- [#6958](https://github.com/MetaMask/metamask-mobile/pull/6958): fix: add missed parentheses in the function call
- [#6931](https://github.com/MetaMask/metamask-mobile/pull/6931): fix: Remove splash animation wait step from Cold Start Launch time test script
- [#6864](https://github.com/MetaMask/metamask-mobile/pull/6864): fix: custom position logic for badgeWrapper

## [7.5.0]

### Added

- [#6865](https://github.com/MetaMask/metamask-mobile/pull/6865): feat: Create a performance E2E test for warm starts
- [#6187](https://github.com/MetaMask/metamask-mobile/pull/6187): feat: Add guidelines for contributors
- [#6732](https://github.com/MetaMask/metamask-mobile/pull/6732): feat: add missing `wallet_requestPermissions` and `wallet_getPermissions` to the mobile API.
- [#6802](https://github.com/MetaMask/metamask-mobile/pull/6802): feat: Send flow UI updates
- [#6805](https://github.com/MetaMask/metamask-mobile/pull/6805): feat(on-ramp): upgrade on-ramp SDK with apple pay support
- [#6679](https://github.com/MetaMask/metamask-mobile/pull/6679): feat(on-ramp): upgrade on-ramp-sdk to v1.22.0 with abort controller support
- [#6799](https://github.com/MetaMask/metamask-mobile/pull/6799): feat: prioritize resume over deeplink to accelerate reconnection flow
- [#6745](https://github.com/MetaMask/metamask-mobile/pull/6745): feat: Add delay for browser permission dialog
- [#6795](https://github.com/MetaMask/metamask-mobile/pull/6795): feat(MMPD-546): update portfolio icon
- [#6738](https://github.com/MetaMask/metamask-mobile/pull/6738): feat: add approval flow success and error pages
- [#6782](https://github.com/MetaMask/metamask-mobile/pull/6782): feat: wc2 dependencies update and handle switchNetwork
- [#6766](https://github.com/MetaMask/metamask-mobile/pull/6766): feat: Added horizontalAlignment to Accordions
- [#6755](https://github.com/MetaMask/metamask-mobile/pull/6755): feat: sdk protocol update

### Changed

- [#6884](https://github.com/MetaMask/metamask-mobile/pull/6884): chore: Update `@metamask/controller-utils` to v3.4
- [#6876](https://github.com/MetaMask/metamask-mobile/pull/6876): chore: Update Jest to v28
- [#6784](https://github.com/MetaMask/metamask-mobile/pull/6784): refactor: Use selectors for token list controller state access
- [#6758](https://github.com/MetaMask/metamask-mobile/pull/6758): refactor: Use selectors for tokens controller state access
- [#6752](https://github.com/MetaMask/metamask-mobile/pull/6752): refactor: Use selectors for currency rate controller state access
- [#6687](https://github.com/MetaMask/metamask-mobile/pull/6687): refactor: split approvals into separate files
- [#6848](https://github.com/MetaMask/metamask-mobile/pull/6848): refactor: Use Redux network controller state
- [#6775](https://github.com/MetaMask/metamask-mobile/pull/6775): refactor: Use selectors for preferences controller state
- [#6808](https://github.com/MetaMask/metamask-mobile/pull/6808): refactor: Updated constants structure for button to remove
  access
- [#6814](https://github.com/MetaMask/metamask-mobile/pull/6814): refactor(ramp): rename fiat aggregator folder to ramp
- [#6804](https://github.com/MetaMask/metamask-mobile/pull/6804): refactor(on-ramp): refactor quotes screen
- [#6820](https://github.com/MetaMask/metamask-mobile/pull/6820): refactor: Use selectors for nft controller state access
- [#6786](https://github.com/MetaMask/metamask-mobile/pull/6786): refactor: Use selectors for token balances controller state access
- [#6762](https://github.com/MetaMask/metamask-mobile/pull/6762): refactor: Use selectors for account tracker controller state access
- [#6759](https://github.com/MetaMask/metamask-mobile/pull/6759): refactor: Use selectors for token rates controller state access
- [#6813](https://github.com/MetaMask/metamask-mobile/pull/6813): ci(builds): Sentry sourcemap deploy
- [#6880](https://github.com/MetaMask/metamask-mobile/pull/6880): refactor: Consistent provider config naming
- [#6878](https://github.com/MetaMask/metamask-mobile/pull/6878): refactor: Simplify `handleNetworkSwitch` helper
- [#6894](https://github.com/MetaMask/metamask-mobile/pull/6894): chore: Added README to BannerBase
- [#6287](https://github.com/MetaMask/metamask-mobile/pull/6287): chore: Custom Gas Modal Component
- [#6080](https://github.com/MetaMask/metamask-mobile/pull/6080): refactor: TypeScript ~4.8.4 and ESLint deps upgrades and initial type fixes

### Fixed

- [#6863](https://github.com/MetaMask/metamask-mobile/pull/6863): fix: misalignment issue for multiselect cells
- [#6600](https://github.com/MetaMask/metamask-mobile/pull/6600): refactor: accept SignController approval request from frontend
- [#6844](https://github.com/MetaMask/metamask-mobile/pull/6844): fix: Android filename validation when downloading from browser
- [#6742](https://github.com/MetaMask/metamask-mobile/pull/6742): fix: Browser external application alert on trusted deeplink protocols
- [#6837](https://github.com/MetaMask/metamask-mobile/pull/6837): fix: Remove fallback
- [#6754](https://github.com/MetaMask/metamask-mobile/pull/6754): fix: sending an ERC20 token with an amount with more decimals than the token decimal, results in nothing
- [#6587](https://github.com/MetaMask/metamask-mobile/pull/6587): fix: Improves handling of missing WCv2 Project ID
- [#6772](https://github.com/MetaMask/metamask-mobile/pull/6772): fix: update cookie-tough dependency
- [#6739](https://github.com/MetaMask/metamask-mobile/pull/6739): fix: deeplink connection using metamask://connect
- [#6753](https://github.com/MetaMask/metamask-mobile/pull/6753): fix: Delete collectible media reproductor
- [#6833](https://github.com/MetaMask/metamask-mobile/pull/6833): fix: invalid transaction data used for approve transaction
- [#6828](https://github.com/MetaMask/metamask-mobile/pull/6828): fix: wallet connect v1 is fully deprecated
- [#6903](https://github.com/MetaMask/metamask-mobile/pull/6903): fix: Fix crash when switching to Linea

## [7.4.0]

### Added

- [#6805](https://github.com/MetaMask/metamask-mobile/pull/6805): feat(on-ramp): upgrade on-ramp SDK with apple pay support
- [#6679](https://github.com/MetaMask/metamask-mobile/pull/6679): feat(on-ramp): upgrade on-ramp-sdk to v1.22.0 with abort controller support
- [#6799](https://github.com/MetaMask/metamask-mobile/pull/6799): feat: prioritize resume over deeplink to accelerate reconnection flow
- [#6795](https://github.com/MetaMask/metamask-mobile/pull/6795): feat(MMPD-546): update portfolio icon
- [#6738](https://github.com/MetaMask/metamask-mobile/pull/6738): feat: add approval flow success and error pages
- [#6782](https://github.com/MetaMask/metamask-mobile/pull/6782): feat: wc2 dependencies update and handle switchNetwork
- [#6766](https://github.com/MetaMask/metamask-mobile/pull/6766): feat: Added horizontalAlignment to Accordions
- [#6755](https://github.com/MetaMask/metamask-mobile/pull/6755): feat: sdk protocol update

### Changed

- [#6804](https://github.com/MetaMask/metamask-mobile/pull/6804): refactor(on-ramp): refactor quotes screen
- [#6784](https://github.com/MetaMask/metamask-mobile/pull/6784): refactor: Use selectors for token list controller state access
- [#6758](https://github.com/MetaMask/metamask-mobile/pull/6758): refactor: Use selectors for tokens controller state access
- [#6758](https://github.com/MetaMask/metamask-mobile/pull/6758): refactor: Use selectors for tokens controller state access
- [#6796](https://github.com/MetaMask/metamask-mobile/pull/6796): ci: Fix pipelines to reflect running tests on android detox
- [#6752](https://github.com/MetaMask/metamask-mobile/pull/6752): refactor: Use selectors for currency rate controller state access

### Fixed

- [#6754](https://github.com/MetaMask/metamask-mobile/pull/6754): fix: sending an ERC20 token with an amount with more decimals than the token decimal, results in nothing
- [#6790](https://github.com/MetaMask/metamask-mobile/pull/6790): fix: update snapshot for linea mainnet
- [#6587](https://github.com/MetaMask/metamask-mobile/pull/6587): fix: Improves handling of missing WCv2 Project ID
- [#6772](https://github.com/MetaMask/metamask-mobile/pull/6772): fix: update cookie-tough dependency
- [#6739](https://github.com/MetaMask/metamask-mobile/pull/6739): fix: deeplink connection using metamask://connect
- [#6753](https://github.com/MetaMask/metamask-mobile/pull/6753): fix: Delete collectible media reproductor

## [7.3.1]

### Fixed

- [#6833](https://github.com/MetaMask/metamask-mobile/pull/6833): fix: invalid transaction data used for approve transaction

## [7.3.0]

### Added

- [#6220](https://github.com/MetaMask/metamask-mobile/pull/6220): feat: Upgrade React Native to 0.71.6
- [#6596](https://github.com/MetaMask/metamask-mobile/pull/6596): feat: Memoise token balance controler hook
- [#6639](https://github.com/MetaMask/metamask-mobile/pull/6639): feat: approval flow for add & switch network
- [#6352](https://github.com/MetaMask/metamask-mobile/pull/6352): feat(action): github action to automatically add label "release-x.y.z" when PRs get merged
- [#6576](https://github.com/MetaMask/metamask-mobile/pull/6576): feat: New Ui for permissions dapp screen
- [#6212](https://github.com/MetaMask/metamask-mobile/pull/6212): feat: trigger qrsigning modal using approval controller
- [#6602](https://github.com/MetaMask/metamask-mobile/pull/6602): feat: Add BottomSheetContent
- [#6617](https://github.com/MetaMask/metamask-mobile/pull/6617): feat: Update Overlay and add BottomSheetOverlay
- [#6489](https://github.com/MetaMask/metamask-mobile/pull/6489): feat: [MC 0.75] Show test network toggle
- [#6499](https://github.com/MetaMask/metamask-mobile/pull/6499): feat: `eth_accounts` return all permitted accounts

### Changed

- [#6662](https://github.com/MetaMask/metamask-mobile/pull/6662): refactor: Remove dead network controller code
- [#6664](https://github.com/MetaMask/metamask-mobile/pull/6664): refactor: Simplify `isMainnet` utility function
- [#6723](https://github.com/MetaMask/metamask-mobile/pull/6723): refactor: Updated checkbox style and icon
- [#6552](https://github.com/MetaMask/metamask-mobile/pull/6552): refactor: Update MultiSelectItem to use ListItem
- [#6551](https://github.com/MetaMask/metamask-mobile/pull/6551): refactor: Update SelectItem to use ListItem
- [#6724](https://github.com/MetaMask/metamask-mobile/pull/6724): refactor: Updated Label Text Variant
- [#6673](https://github.com/MetaMask/metamask-mobile/pull/6673): refactor: Use selectors for network state access
- [#6666](https://github.com/MetaMask/metamask-mobile/pull/6666): refactor: Simplify engine service
- [#6641](https://github.com/MetaMask/metamask-mobile/pull/6641): refactor: approve and reject transactions using approval controller

### Fixed

- [#6741](https://github.com/MetaMask/metamask-mobile/pull/6741): fix: onPress prop added to SelectItem component
- [#6722](https://github.com/MetaMask/metamask-mobile/pull/6722): fix: WC2 error management and SDK 'authorized' event
- [#6729](https://github.com/MetaMask/metamask-mobile/pull/6729): fix: update multi select snapshot
- [#6714](https://github.com/MetaMask/metamask-mobile/pull/6714): fix: "Assets Overview" disclaimer text color
- [#6678](https://github.com/MetaMask/metamask-mobile/pull/6678): fix: Update Confirmation Sign Message detox spec file
- [#6671](https://github.com/MetaMask/metamask-mobile/pull/6671): fix: added contact alias to destination address on send flow
- [#6637](https://github.com/MetaMask/metamask-mobile/pull/6637): fix: Support Decimal Comma for Token Custom Spend Cap

## [7.2.0]

### Added

- [#6632](https://github.com/MetaMask/metamask-mobile/pull/6632): feat: add linea mainnet alert message
- [#6496](https://github.com/MetaMask/metamask-mobile/pull/6496): feat(551): add Linea Mainnet
- [#6494](https://github.com/MetaMask/metamask-mobile/pull/6494): feat: Update banner component to show/hide details section
- [#6539](https://github.com/MetaMask/metamask-mobile/pull/6539): feat: [MC 0.5] Remove drawer and add remain options to settings tab
- [#6378](https://github.com/MetaMask/metamask-mobile/pull/6378): feat: Add eth_sign friction
- [#6534](https://github.com/MetaMask/metamask-mobile/pull/6534): feat(action): remove labels after issue closed
- [#6570](https://github.com/MetaMask/metamask-mobile/pull/6570): feat: Translations for the disconnected account toast
- [#6452](https://github.com/MetaMask/metamask-mobile/pull/6452): feat: [MC 0.5] - Add Account management actions
- [#5591](https://github.com/MetaMask/metamask-mobile/pull/5591): feat: Custom Spend Allowance
- [#6426](https://github.com/MetaMask/metamask-mobile/pull/6426): feat: Componentize ListItem
- [#6514](https://github.com/MetaMask/metamask-mobile/pull/6514): feat: Componentize BottomSheetFooter
- [#6466](https://github.com/MetaMask/metamask-mobile/pull/6466): feat: componentize BottomSheetHeader
- [#6294](https://github.com/MetaMask/metamask-mobile/pull/6294): feat: [MC 0.5] - Activity view and Settings on the tab bar
- [#6486](https://github.com/MetaMask/metamask-mobile/pull/6486): feat: Add disabled prop on base button

### Changed

- [#6612](https://github.com/MetaMask/metamask-mobile/pull/6612): chore: approve txn when gas estimation ready
- [#6054](https://github.com/MetaMask/metamask-mobile/pull/6054): chore: Improve TagURL
- [#6520](https://github.com/MetaMask/metamask-mobile/pull/6520): chore: improve variable name
- [#6597](https://github.com/MetaMask/metamask-mobile/pull/6597): chore: rm unused prepareFullTransaction
- [#6291](https://github.com/MetaMask/metamask-mobile/pull/6291): refactor: trigger transaction modals using approval requests
- [#5751](https://github.com/MetaMask/metamask-mobile/pull/5751): chore: Keystone links
- [#6541](https://github.com/MetaMask/metamask-mobile/pull/6541): chore: Delete an unused hook
- [#6530](https://github.com/MetaMask/metamask-mobile/pull/6530): chore: pending review feedback for token details related changes
- [#6401](https://github.com/MetaMask/metamask-mobile/pull/6401): refactor: handle watch asset accept and reject using ApprovalController only
- [#6529](https://github.com/MetaMask/metamask-mobile/pull/6529): chore: adding english string for advanced settings eth_sign warning
- [#6026](https://github.com/MetaMask/metamask-mobile/pull/6026): chore: Add toggle to enable/disable multi account balances fetching
- [#6512](https://github.com/MetaMask/metamask-mobile/pull/6512): chore: upgrade to cocoapods 1.12.0
- [#6487](https://github.com/MetaMask/metamask-mobile/pull/6487): chore: new Show test networks translation
- [#6357](https://github.com/MetaMask/metamask-mobile/pull/6357): refactor: use approval controller for watch asset confirmation

### Fixed

- [#6549](https://github.com/MetaMask/metamask-mobile/pull/6549): fix: Networks text alignement
- [#6634](https://github.com/MetaMask/metamask-mobile/pull/6634): fix: disable next button if custom input is invalid
- [#6491](https://github.com/MetaMask/metamask-mobile/pull/6491): fix: refactor linea testnet implementation
- [#6358](https://github.com/MetaMask/metamask-mobile/pull/6358): fix: No Warning appears when a Dapp sets a really high Fees for a tx, potentially loosing all user funds
- [#6592](https://github.com/MetaMask/metamask-mobile/pull/6592): fix: Nonce too low error on Approve ERC20 and ERC721 transactions
- [#6577](https://github.com/MetaMask/metamask-mobile/pull/6577): fix: onBoarding wizard horizontal alignment on step1 and on browser step
- [#6598](https://github.com/MetaMask/metamask-mobile/pull/6598): fix: Hold to reveal Spanish copy
- [#6523](https://github.com/MetaMask/metamask-mobile/pull/6523): fix: Network logo to represent first letter of network
- [#6560](https://github.com/MetaMask/metamask-mobile/pull/6560): fix: asset page header transition
- [#6473](https://github.com/MetaMask/metamask-mobile/pull/6473): fix: fix for swaps button displaying on unsupported networks
- [#6464](https://github.com/MetaMask/metamask-mobile/pull/6464): fix: bug domain not shown on signature
- [#6517](https://github.com/MetaMask/metamask-mobile/pull/6517): fix: remove duplicate ganache steps definitions
- [#6299](https://github.com/MetaMask/metamask-mobile/pull/6299): fix: for from address balance shown for ERC20 transfers
- [#6471](https://github.com/MetaMask/metamask-mobile/pull/6471): fix: Approve default ERC20

## [7.1.0]

### Added

- [#6351](https://github.com/MetaMask/metamask-mobile/pull/6351): feat: use thunk to handle processed order side effects
- [#5829](https://github.com/MetaMask/metamask-mobile/pull/5829): feat: order of browser page load events
- [#6230](https://github.com/MetaMask/metamask-mobile/pull/6230): feat: Asset Overview / Token Detail view redesign
- [#6381](https://github.com/MetaMask/metamask-mobile/pull/6381): feat: add params validation to useSDKMethod hook
- [#6365](https://github.com/MetaMask/metamask-mobile/pull/6365): feat: remove hardcoded selected network name
- [#6421](https://github.com/MetaMask/metamask-mobile/pull/6421): feat: exclude legacy types from rate limiting
- [#6354](https://github.com/MetaMask/metamask-mobile/pull/6354): feat: Trigger signing modals from approval requests
- [#6432](https://github.com/MetaMask/metamask-mobile/pull/6432): ci(sonar): Configure SonarCloud Analysis on CI
- [#6441](https://github.com/MetaMask/metamask-mobile/pull/6441): feat: use screen in on-ramp views tests
- [#6040](https://github.com/MetaMask/metamask-mobile/pull/6040): feat: validation to send amount input box
- [#6394](https://github.com/MetaMask/metamask-mobile/pull/6394): feat(ci): removed the matrix option from unit testing
- [#6227](https://github.com/MetaMask/metamask-mobile/pull/6227): feat: [MC 0.5] Modal network selector replace by network selector sheet
- [#6393](https://github.com/MetaMask/metamask-mobile/pull/6393): feat(ci): upgrade ruby to 3.0.0
- [#6289](https://github.com/MetaMask/metamask-mobile/pull/6289): feat(ci): Sonar Action to work with SonarCloud
- [#6366](https://github.com/MetaMask/metamask-mobile/pull/6366): feat(ci): Convert Bitrise Workflows to Pipelines
- [#6334](https://github.com/MetaMask/metamask-mobile/pull/6334): feat: Aurora Token Detection

### Changed

- [#6406](https://github.com/MetaMask/metamask-mobile/pull/6406): chore: Use core signature controller
- [#6427](https://github.com/MetaMask/metamask-mobile/pull/6427): refactor: Refactor unit tests for React Native 0.71.6 upgrade
- [#6192](https://github.com/MetaMask/metamask-mobile/pull/6192): chore: Show account balance in signature screen
- [#6274](https://github.com/MetaMask/metamask-mobile/pull/6274): chore: Empty SiteURL and Null TagURL in modal
- [#6137](https://github.com/MetaMask/metamask-mobile/pull/6137): chore: Clicking toAddress to add it to address book
- [#6079](https://github.com/MetaMask/metamask-mobile/pull/6079): chore: Refactor sanitization middleware
- [#6234](https://github.com/MetaMask/metamask-mobile/pull/6234): chore: Clear Privacy section
- [#6342](https://github.com/MetaMask/metamask-mobile/pull/6342): chore: Improve processing of redirection URL
- [#6374](https://github.com/MetaMask/metamask-mobile/pull/6374): chore: en.json with eth_sign
- [#6214](https://github.com/MetaMask/metamask-mobile/pull/6214): chore: core signature controller
- [#6328](https://github.com/MetaMask/metamask-mobile/pull/6328): chore(devDeps): bump webdriverio packages
- [#6362](https://github.com/MetaMask/metamask-mobile/pull/6362): chore: Added retries
- [#6125](https://github.com/MetaMask/metamask-mobile/pull/6125): chore: controller packages to match core v42
- [#6124](https://github.com/MetaMask/metamask-mobile/pull/6124): chore: controller packages to match core v40
- [#6345](https://github.com/MetaMask/metamask-mobile/pull/6345): chore: es.js file

### Fixed

- [#6439](https://github.com/MetaMask/metamask-mobile/pull/6439): fix: remove invalid accessibilityRole value
- [#6442](https://github.com/MetaMask/metamask-mobile/pull/6442): fix(ci): Remove `restore-build` steps
- [#6311](https://github.com/MetaMask/metamask-mobile/pull/6311): fix: token balance displayed in approval pages
- [#6339](https://github.com/MetaMask/metamask-mobile/pull/6339): fix: yarn watch clean
- [#6350](https://github.com/MetaMask/metamask-mobile/pull/6350): fix: ENS name displayed on confirm send page

## [7.0.1]

### Changed

- [#6558](https://github.com/MetaMask/metamask-mobile/pull/6558): refactor(whats-new-modal): remove onramp content

## [7.0.0]

### Added

- [#6536](https://github.com/MetaMask/metamask-mobile/pull/6380): [FEATURE] WalletConnect v2 Integration (#6380)

## [6.6.0]

### Added

- [#6325](https://github.com/MetaMask/metamask-mobile/pull/6325): [FEATURE] Add development environment to onramp-sdk
- [#6165](https://github.com/MetaMask/metamask-mobile/pull/6165): [FEATURE] Edit account name view
- [#6093](https://github.com/MetaMask/metamask-mobile/pull/6093): [FEATURE] Account actions on wallet view
- [#6097](https://github.com/MetaMask/metamask-mobile/pull/6097): [UPDATE] Extracting out signature request related code from RootRPCMethodsUI conponent
- [#6085](https://github.com/MetaMask/metamask-mobile/pull/6085): [FEATURE] Update account section with card

### Changed

- [#6228](https://github.com/MetaMask/metamask-mobile/pull/6228): [UPDATE] Checkbox component
- [#6226](https://github.com/MetaMask/metamask-mobile/pull/6226): [UPDATE] Button's icon props and button org
- [#6255](https://github.com/MetaMask/metamask-mobile/pull/6255): [UPDATE] Onboarding translation updated
- [#6210](https://github.com/MetaMask/metamask-mobile/pull/6210): [UPDATE] Extend the readme documentation to cover E2E testing in more detail.

### Fixed

- [#6249](https://github.com/MetaMask/metamask-mobile/pull/6249): [FIX] Terms of Use checkbox test id
- [#5866](https://github.com/MetaMask/metamask-mobile/pull/5866): [FIX] sturdier check
- [#6340](https://github.com/MetaMask/metamask-mobile/pull/6340): [FIX] Missing network name onramp
- [#6309](https://github.com/MetaMask/metamask-mobile/pull/6309): [FIX] Missing handler on mandatory modal
- [#5876](https://github.com/MetaMask/metamask-mobile/pull/5876): [FIX] Gas is not re-calculated when updating a transaction
- [#6246](https://github.com/MetaMask/metamask-mobile/pull/6246): [FIX] Wrong to account information on confirmation page
- [#6253](https://github.com/MetaMask/metamask-mobile/pull/6253): [FIX] Confirm button should be disabled if account has no balance

## [6.5.0]

### Added

- [#5743](https://github.com/MetaMask/metamask-mobile/pull/5743): [FEATURE] On-ramp: Add buy-crypto deeplink
- [#6166](https://github.com/MetaMask/metamask-mobile/pull/6166): [FEATURE] trigger walletconnect modal using approval controller
- [#6223](https://github.com/MetaMask/metamask-mobile/pull/6223): [IMPROVEMENT] Update to Node.js v16
- [#6051](https://github.com/MetaMask/metamask-mobile/pull/6051): [FEATURE] Total balance and portfolio button changed
- [#6156](https://github.com/MetaMask/metamask-mobile/pull/6156): [IMPROVEMENT] On-ramp: Use dynamic list of networks
- [#6145](https://github.com/MetaMask/metamask-mobile/pull/6145): [IMPROVEMENT] Synced and optimized icons
- [#6138](https://github.com/MetaMask/metamask-mobile/pull/6138): [FEATURE] On-ramp: Add orderProcessor exponential backoff for orders
- [#6139](https://github.com/MetaMask/metamask-mobile/pull/6139): [FEATURE] On-ramp: Add same amount rendering as the order details to the order list
- [#6189](https://github.com/MetaMask/metamask-mobile/pull/6189): [FEATURE] On-ramp: Remove hiding the provider modal when quotes refresh
- [#6216](https://github.com/MetaMask/metamask-mobile/pull/6216): [IMPROVEMENT] account icon matches user's preferred identicon
- [#5956](https://github.com/MetaMask/metamask-mobile/pull/5956): [IMPROVEMENT] Show token symbol in verify contract details
- [#5458](https://github.com/MetaMask/metamask-mobile/pull/5458): [IMPROVEMENT] Support sepolia network
- [#6181](https://github.com/MetaMask/metamask-mobile/pull/6181): [IMPROVEMENT] Componentize Header Component
- [#6153](https://github.com/MetaMask/metamask-mobile/pull/6153): [IMPROVEMENT] On-ramp: Refactor order selector by id
- [#6044](https://github.com/MetaMask/metamask-mobile/pull/6044): [IMPROVEMENT] Componentize Badge and Badge Wrapper
- [#6180](https://github.com/MetaMask/metamask-mobile/pull/6180): [IMPROVEMENT] Componentized Overlay Component
- [#6174](https://github.com/MetaMask/metamask-mobile/pull/6174): [IMPROVEMENT] Update Tab bar styles
- [#6056](https://github.com/MetaMask/metamask-mobile/pull/6056): [IMPROVEMENT] Show Identicon for unknown token and if token icon is unknown

### Changed

- [#6157](https://github.com/MetaMask/metamask-mobile/pull/6157): [REFACTOR] Change Password setting
- [#6173](https://github.com/MetaMask/metamask-mobile/pull/6173): [REFACTOR] Auto Lock section

### Fixed

- [#6201](https://github.com/MetaMask/metamask-mobile/pull/6201): [FIX] [SDK] Missing redirect breaking backward compatibility
- [#6232](https://github.com/MetaMask/metamask-mobile/pull/6232): [FIX] bottom margin for detecting end of the page
- [#6185](https://github.com/MetaMask/metamask-mobile/pull/6185): [FIX] remove pubnub package and associated sync with extension code
- [#5718](https://github.com/MetaMask/metamask-mobile/pull/5718): [FIX] Nonce Too Low for Approve Transaction
- [#6076](https://github.com/MetaMask/metamask-mobile/pull/6076): [BUGFIX] Fixes WalletConnect deep links (wc:// schema) not working properly

## [6.4.0]

### Added

- [#6144](https://github.com/MetaMask/metamask-mobile/pull/6144): [FEATURE] New Crowdin translations by Github Action
- [#6143](https://github.com/MetaMask/metamask-mobile/pull/6143): [UPDATE] Crowdin token to use METAMASKBOT_CROWDIN_TOKEN
- [#5627](https://github.com/MetaMask/metamask-mobile/pull/5627): [IMPROVEMENT] Refactor remaining `web3-provider-engine` methods
- [#6082](https://github.com/MetaMask/metamask-mobile/pull/6082): [IMPROVEMENT] Remove inactive IPFS providers
- [#5620](https://github.com/MetaMask/metamask-mobile/pull/5620): [IMPROVEMENT] Refactor RPC `getAccounts` usage
- [#6009](https://github.com/MetaMask/metamask-mobile/pull/6009): [FEATURE] On-ramp: Add what's new modal content
- [#6020](https://github.com/MetaMask/metamask-mobile/pull/6020): [FEATURE][MC] Token list with network logo and token name
- [#5992](https://github.com/MetaMask/metamask-mobile/pull/5992): [FEATURE][MC] - Wallet actions on Tab bar
- [#5937](https://github.com/MetaMask/metamask-mobile/pull/5937): [FEATURE]Show internet protocol on confirmation screens
- [#6003](https://github.com/MetaMask/metamask-mobile/pull/6003): [IMPROVEMENT] Adding document to refactor send flow
- [#6037](https://github.com/MetaMask/metamask-mobile/pull/6037): [FEATURE] update sdk persistence
- [#5900](https://github.com/MetaMask/metamask-mobile/pull/5900): [IMPROVEMENT] Creating reusable address from/to component.
- [#5933](https://github.com/MetaMask/metamask-mobile/pull/5933): [IMPROVEMENT] Componentize Banner Component
- [#5927](https://github.com/MetaMask/metamask-mobile/pull/5927): [IMPROVEMENT] Componentize Form Components
- [#5619](https://github.com/MetaMask/metamask-mobile/pull/5619): [IMPROVEMENT] Refactor `eth_sendTransaction` handler
- [#6060](https://github.com/MetaMask/metamask-mobile/pull/6060): [IMPROVEMENT] Refactor send transaction v2

### Changed

- [#6134](https://github.com/MetaMask/metamask-mobile/pull/6134): [REFACTOR] Reveal Private Key section

- [#6015](https://github.com/MetaMask/metamask-mobile/pull/6015): [UPDATE] sentry version and enable performance metrics
- [#6081](https://github.com/MetaMask/metamask-mobile/pull/6081): [UPDATE] ESLint rules for scripts
- [#6006](https://github.com/MetaMask/metamask-mobile/pull/6006): [UPDATE] Upgrade xcode version

### Fixed

- [#6109](https://github.com/MetaMask/metamask-mobile/pull/6109): [FIX] linea network order in dropdown + remove feature toggle for linea (#6072)
- [#6058](https://github.com/MetaMask/metamask-mobile/pull/6058): [FIX] broken erc721 approve token link
- [#6122](https://github.com/MetaMask/metamask-mobile/pull/6122): [FIX] TypeError: undefined is not an object (evaluating 'n.find')

## [6.3.0]

### Added

- [#6039](https://github.com/MetaMask/metamask-mobile/pull/6039): [ENHANCEMENT] Improve Android setup instructions
- [#5996](https://github.com/MetaMask/metamask-mobile/pull/5996): [ENHANCEMENT] Add document to refactor signature request code
- [#5958](https://github.com/MetaMask/metamask-mobile/pull/5958): [FEATURE] add consensys zkevm (Linea) support
- [#5997](https://github.com/MetaMask/metamask-mobile/pull/5997): [FEATURE] Account selector on swaps screen
- [#6019](https://github.com/MetaMask/metamask-mobile/pull/6019): [ENHANCEMENT] On-ramp: Add #6009 strings
- [#6023](https://github.com/MetaMask/metamask-mobile/pull/6023): [ENHANCEMENT] disable back press and add margin to the bottom for accept ToU modal
- [#6016](https://github.com/MetaMask/metamask-mobile/pull/6016): [ENHANCEMENT] On-ramp: Add accessibility label to custom action images
- [#5948](https://github.com/MetaMask/metamask-mobile/pull/5948): [FEATURE] SDK Session Persistence
- [#5910](https://github.com/MetaMask/metamask-mobile/pull/5910): [ENHANCEMENT] E2E Permission system tests
- [#5930](https://github.com/MetaMask/metamask-mobile/pull/5930): [ENHANCEMENT] dispaly nft info in browser
- [#5785](https://github.com/MetaMask/metamask-mobile/pull/5785): [FEATURE] add portfolio button to asset action buttons
- [#5242](https://github.com/MetaMask/metamask-mobile/pull/5242): [FEATURE] Use Terms Modal
- [#5964](https://github.com/MetaMask/metamask-mobile/pull/5964): [FEATURE] Added translations for MC 0.5
- [#4421](https://github.com/MetaMask/metamask-mobile/pull/4421): [FEATURE] Vault corruption recovery flow
- [#5327](https://github.com/MetaMask/metamask-mobile/pull/5327): [FEATURE] Verify Contract Details

### Changed

- [#5669](https://github.com/MetaMask/metamask-mobile/pull/5669): [UPDATE] http-cache-semantics from 4.1.0 to 4.1.1
- [#5959](https://github.com/MetaMask/metamask-mobile/pull/5959): [UPDATE] @xmldom/xmldom from 0.8.3 to 0.8.6

### Fixed

- [#5962](https://github.com/MetaMask/metamask-mobile/pull/5962): [FIX] Remove select address as a prop on App index.js
- [#5941](https://github.com/MetaMask/metamask-mobile/pull/5941): [FIX] bundle video in app to prevent crash when not available
- [#5839](https://github.com/MetaMask/metamask-mobile/pull/5839): [FIX] Clear Hex data when Token Transfer reverts ETH
- [#5975](https://github.com/MetaMask/metamask-mobile/pull/5975): [FIX] 18 JS type errors for TSC to output 683 TS/TSX errors
- [#5882](https://github.com/MetaMask/metamask-mobile/pull/5882): [FIX] Skip type checking library declaration files
- [#5961](https://github.com/MetaMask/metamask-mobile/pull/5961): [FIX] #5898 - Converting native ETH to fiat and fiat to native ETH results in wrong values beign displayed on the Amount screen
- [#6025](https://github.com/MetaMask/metamask-mobile/pull/6025): [FIX] Add url-parse lib to our MainNavigator

## [6.2.0]

### Added

- [#5807](https://github.com/MetaMask/metamask-mobile/pull/5807): [IMPROVEMENT] "preview build" support to Bitrise
- [#5870](https://github.com/MetaMask/metamask-mobile/pull/5870): [IMPROVEMENT] On-ramp: Add buy crypto home button
- [#5529](https://github.com/MetaMask/metamask-mobile/pull/5529): [IMPROVEMENT] Network Controller refactor to use the same selector
- [#5868](https://github.com/MetaMask/metamask-mobile/pull/5868): [IMPROVEMENT] permitted account balance
- [#5842](https://github.com/MetaMask/metamask-mobile/pull/5842): [IMPROVEMENT] show the url protocol
- [#5309](https://github.com/MetaMask/metamask-mobile/pull/5309): [IMPROVEMENT] New transaction header for approve and approval modal
- [#5825](https://github.com/MetaMask/metamask-mobile/pull/5825): [Improvement] Send Token E2E test
- [#5855](https://github.com/MetaMask/metamask-mobile/pull/5855): [IMPROVEMENT] dont render suspect links
- [#5827](https://github.com/MetaMask/metamask-mobile/pull/5827): [IMPROVEMENT] analytics: add missing property to connect completed event
- [#5711](https://github.com/MetaMask/metamask-mobile/pull/5711): [IMPROVEMENT] Improve signature request message
- [#5374](https://github.com/MetaMask/metamask-mobile/pull/5374): [IMPROVEMENT] Authentication refactor

### Changed

- [#5924](https://github.com/MetaMask/metamask-mobile/pull/5924): [UPDATE] the README setup steps
- [#5775](https://github.com/MetaMask/metamask-mobile/pull/5775): [UPDATE] Security Privacy Remember me feature
- [#5803](https://github.com/MetaMask/metamask-mobile/pull/5803): [UPDATE] Sentry: remove DSN value from codebase
- [#5796](https://github.com/MetaMask/metamask-mobile/pull/5796): [UPDATE] `@metamask/phishing-controller` to v2
- [#5859](https://github.com/MetaMask/metamask-mobile/pull/5859): [UPDATE] scan icon on wallet view
- [#5880](https://github.com/MetaMask/metamask-mobile/pull/5880): [UPDATE] Display internet protocol on the new origin pill
- [#5901](https://github.com/MetaMask/metamask-mobile/pull/5901): [UPDATE] assets-controllers patch

### Fixed

- [#5890](https://github.com/MetaMask/metamask-mobile/pull/5890): [FIX] Swap with wallet connect
- [#5750](https://github.com/MetaMask/metamask-mobile/pull/5750): [FIX] Enable clipboard for private credentials

## [6.1.2]

### Fixed

- [#5925](https://github.com/MetaMask/metamask-mobile/pull/5925): [FIX] handle all ios biometric errors and create wallet
- [#5906](https://github.com/MetaMask/metamask-mobile/pull/5906): [FIX] Add try-catch to recreateVault

## [6.1.1]

### Fixed

- [#5848](https://github.com/MetaMask/metamask-mobile/pull/5848): [FIX] Remove default eth sign

## [6.1.0]

### Added

- [#5461](https://github.com/MetaMask/metamask-mobile/pull/5461): [IMPROVEMENT] On-ramp: Refactor Payment Methods view to componentization
- [#5813](https://github.com/MetaMask/metamask-mobile/pull/5813): [FEATURE] Add copy for portfolio button for translations
- [#5797](https://github.com/MetaMask/metamask-mobile/pull/5797): [IMPROVEMENT] Remove phishing list update engine removal
- [#5812](https://github.com/MetaMask/metamask-mobile/pull/5812): [CONTENT] Ledger Integration english content

- [#5725](https://github.com/MetaMask/metamask-mobile/pull/5725): [IMPROVEMENT] Show transfer view to user for approve with value
- [#5791](https://github.com/MetaMask/metamask-mobile/pull/5791): [IMPROVEMENT] Adds 'ios' and 'android' to possible sources for MM SDK events
- [#5340](https://github.com/MetaMask/metamask-mobile/pull/5340): [IMPROVEMENT]Align icon names
- [#5778](https://github.com/MetaMask/metamask-mobile/pull/5778): [IMPROVEMENT] Set different CPU capacity in jest tests
- [#5776](https://github.com/MetaMask/metamask-mobile/pull/5776): [IMPROVEMENT] Add test for change password scenario
- [#5748](https://github.com/MetaMask/metamask-mobile/pull/5748): [IMPROVEMENT] E2e appium/add splash animation step
- [#5744](https://github.com/MetaMask/metamask-mobile/pull/5744): [IMPROVEMENT] Fix sideway/formula audit
- [#5666](https://github.com/MetaMask/metamask-mobile/pull/5666): [IMPROVEMENT] E2E appium/app launch times
- [#5595](https://github.com/MetaMask/metamask-mobile/pull/5595): [IMPROVEMENT] On-ramp: Add orderProcessor index test
- [#5717](https://github.com/MetaMask/metamask-mobile/pull/5717): [IMPROVEMENT] Updated button usage to use full width
- [#5679](https://github.com/MetaMask/metamask-mobile/pull/5679): [IMPROVEMENT] Update design-tokens version and remove screen size from TextVariants
- [#5713](https://github.com/MetaMask/metamask-mobile/pull/5713): [IMPROVEMENT] Updated ButtonBase to use flex-start instead of baseline
- [#5546](https://github.com/MetaMask/metamask-mobile/pull/5546): [IMPROVEMENT] Adding smoke and regression tags to tests
- [#5694](https://github.com/MetaMask/metamask-mobile/pull/5694): [IMPROVEMENT] Added missing step definition
- [#5343](https://github.com/MetaMask/metamask-mobile/pull/5343): [IMPROVEMENT] Align buttons with Figma
- [#5682](https://github.com/MetaMask/metamask-mobile/pull/5682): [IMPROVEMENT] Componentize TextInput
- [#5621](https://github.com/MetaMask/metamask-mobile/pull/5621): [IMPROVEMENT] Refactor static method middlware
- [#5218](https://github.com/MetaMask/metamask-mobile/pull/5218): [IMPROVEMENT] Improve deeplinks experience

### Changed

- [#5768](https://github.com/MetaMask/metamask-mobile/pull/5768): [UPGRADE] Segment Analytics 2.13.0

### Fixed

- [#5657](https://github.com/MetaMask/metamask-mobile/pull/5657): [FIX] fix the RequestTokenFlow E2E test
- [#5675](https://github.com/MetaMask/metamask-mobile/pull/5675): [FIX] Fix eslint commit hook
- [#5608](https://github.com/MetaMask/metamask-mobile/pull/5608): [FIX] SRP recover when an error is thrown
- [#5722](https://github.com/MetaMask/metamask-mobile/pull/5722): [FIX] Fix env variables syntax in step
- [#5730](https://github.com/MetaMask/metamask-mobile/pull/5730): [FIX] French content for SRP Quiz
- [#5726](https://github.com/MetaMask/metamask-mobile/pull/5726): [FIX] Minor UI bugs in credential views
- [#5656](https://github.com/MetaMask/metamask-mobile/pull/5656): [FIX] ENS Resolves to Wrong Address when DeepLink
- [#5719](https://github.com/MetaMask/metamask-mobile/pull/5719): [FIX] Remove false showBack param from order details
- [#5739](https://github.com/MetaMask/metamask-mobile/pull/5739): [FIX] Fix CVE-2023-25166 by resolving @sideway/formula to 3.0.1
- [#5738](https://github.com/MetaMask/metamask-mobile/pull/5738): [FIX] On-ramp: upgrade on-ramp-sdk to v1.8.1
- [#5749](https://github.com/MetaMask/metamask-mobile/pull/5749): [FIX] Back navigation CTAs in RevealPrivateCredential view
- [#5587](https://github.com/MetaMask/metamask-mobile/pull/5587): [FIX] ERC721 Approve view
- [#5683](https://github.com/MetaMask/metamask-mobile/pull/5683): [FIX] RN Patch Version
- [#5753](https://github.com/MetaMask/metamask-mobile/pull/5753): [FIX] Fix Slack e2e announcement
- [#5777](https://github.com/MetaMask/metamask-mobile/pull/5777): [FIX] Fix/primary currency fiat insufficient funds error
- [#5399](https://github.com/MetaMask/metamask-mobile/pull/5399): [FIX] Fix bug with updating gas price for legacy transactions
- [#5780](https://github.com/MetaMask/metamask-mobile/pull/5780): [FIX] Show token symbol when approving
- [#5806](https://github.com/MetaMask/metamask-mobile/pull/5806): [FIX] Screenshot Crash
- [#5678](https://github.com/MetaMask/metamask-mobile/pull/5678): [FIX] Updated hardware label to have the correct color
- [#5801](https://github.com/MetaMask/metamask-mobile/pull/5801): [FIX] Update icon name in SRPQuiz
- [#5800](https://github.com/MetaMask/metamask-mobile/pull/5800): [FIX] TabBarIconKey to TabBarLabel
- [#5851](https://github.com/MetaMask/metamask-mobile/pull/5851): [FIX] Fix search network crasher
- [#5809](https://github.com/MetaMask/metamask-mobile/pull/5809): [FIX] Resolve tab bar merge conflicts
- [#5729](https://github.com/MetaMask/metamask-mobile/pull/5729): [FIX] Bump react-native-reanimated to 2.14.0

## [6.0.1]

### Fixed

- [#5799](https://github.com/MetaMask/metamask-mobile/pull/5799): [FIX] Browser: handle unsupported URLs

## [6.0.0]

### Added

- [#5062](https://github.com/MetaMask/metamask-mobile/pull/5062): [FEATURE] Implement Permission System
- [#5659](https://github.com/MetaMask/metamask-mobile/pull/5659): [IMPROVEMENT] E2E fix tapReminder step
- [#5641](https://github.com/MetaMask/metamask-mobile/pull/5641): [IMPROVEMENT] Use Set when filtering blocklist
- [#5650](https://github.com/MetaMask/metamask-mobile/pull/5650): [IMPROVEMENT] E2E appium request token
- [#5647](https://github.com/MetaMask/metamask-mobile/pull/5647): [IMPROVEMENT] Add introductory image to SRP Quiz
- [#5640](https://github.com/MetaMask/metamask-mobile/pull/5640): [IMPROVEMENT] Middleware - Include the request in the error params
- [#5632](https://github.com/MetaMask/metamask-mobile/pull/5632): [IMPROVEMENT] E2E appium folder structure change
- [#5579](https://github.com/MetaMask/metamask-mobile/pull/5579): [FEAT] Add friction to SRP reveal
- [#5551](https://github.com/MetaMask/metamask-mobile/pull/5551): [IMPROVEMENT] Refactor Personal Signature
- [#5600](https://github.com/MetaMask/metamask-mobile/pull/5600): [IMPROVEMENT] Refactor ProtectYourWallet section in the security section
- [#5586](https://github.com/MetaMask/metamask-mobile/pull/5586): [IMPROVEMENT] Stablize Addressbook and Networks flow tests
- [#5575](https://github.com/MetaMask/metamask-mobile/pull/5575): [CONTENT] Add translations to SRP Reveal feature
- [#5559](https://github.com/MetaMask/metamask-mobile/pull/5559): [ANALYTICS] Add analytics events for SRP reveal

### Changed

- [#5594](https://github.com/MetaMask/metamask-mobile/pull/5594): [UPGRADE] bumped ua-parser-js to 0.7.33
- [#5580](https://github.com/MetaMask/metamask-mobile/pull/5580): [UPGRADE] Bump cookiejar from 2.1.2 to 2.1.4
- [#5471](https://github.com/MetaMask/metamask-mobile/pull/5471): [UPGRADE] Bump luxon from 3.1.1 to 3.2.1
- [#5450](https://github.com/MetaMask/metamask-mobile/pull/5450): [UPGRADE] Bump json5 from 1.0.1 to 1.0.2

### Fixed

- [#5626](https://github.com/MetaMask/metamask-mobile/pull/5626): [FIX] SRP Quiz content and translations
- [#5612](https://github.com/MetaMask/metamask-mobile/pull/5612): [FIX] Make Prettier work in wdio directory
- [#5605](https://github.com/MetaMask/metamask-mobile/pull/5605): [FIX] Handle ENS Address Error
- [#5655](https://github.com/MetaMask/metamask-mobile/pull/5655): [FIX] E2E adjust get started wait
- [#5724](https://github.com/MetaMask/metamask-mobile/pull/5724): [FIX] Migrate dapps access into permission controller state
- [#5742](https://github.com/MetaMask/metamask-mobile/pull/5742): [FIX] ENS Resolves to Wrong Address when DeepLink
- [#5714](https://github.com/MetaMask/metamask-mobile/pull/5714): [FIX] Importing private key via QR code redirects to browser
- [#5709](https://github.com/MetaMask/metamask-mobile/pull/5709): [FIX] Settings networks icons were missing

## [5.14.0]

### Added

- [#5535](https://github.com/MetaMask/metamask-mobile/pull/5535): [IMPROVEMENT] Add content for "Add friction to revealing SRP"
- [#5506](https://github.com/MetaMask/metamask-mobile/pull/5506): [IMPROVEMENT] On-ramp: Add NavBar tests to GetStarted and Regions Views
- [#5495](https://github.com/MetaMask/metamask-mobile/pull/5495): [IMPROVEMENT] Copy update for metamask fee on swaps
- [#5525](https://github.com/MetaMask/metamask-mobile/pull/5525): [IMPROVEMENT] On-ramp: add fiatOrders reducer tests
- [#5521](https://github.com/MetaMask/metamask-mobile/pull/5521): [IMPROVEMENT] On-ramp: Remove unused state and fix initial state
- [#5487](https://github.com/MetaMask/metamask-mobile/pull/5487): [IMPROVEMENT] On-ramp: Use themeAppearance
- [#5530](https://github.com/MetaMask/metamask-mobile/pull/5530): [IMPROVEMENT] Refactor RevealPrivateCredential View
- [#5526](https://github.com/MetaMask/metamask-mobile/pull/5526): [IMPROVEMENT] On-ramp: Add on-ramp utils tests
- [#5531](https://github.com/MetaMask/metamask-mobile/pull/5531): [IMPROVEMENT] Refactor SeedPhraseVideo to mount player after transition
- [#5522](https://github.com/MetaMask/metamask-mobile/pull/5522): [IMPROVEMENT] On-ramp: Remove scrollable prop from views and update snapshots
- [#5524](https://github.com/MetaMask/metamask-mobile/pull/5524): [IMPROVEMENT] On-ramp: Add order processor tests
- [#5512](https://github.com/MetaMask/metamask-mobile/pull/5512): [IMPROVEMENT] Remove redundant browser feature file
- [#5511](https://github.com/MetaMask/metamask-mobile/pull/5511): [IMPROVEMENT] On-ramp: Rename applePay hook to useApplePay
- [#5474](https://github.com/MetaMask/metamask-mobile/pull/5474): [IMPROVEMENT] Screenshot deterrent alert
- [#5489](https://github.com/MetaMask/metamask-mobile/pull/5489): [IMPROVEMENT] Renaming Step files to include ".steps"
- [#5460](https://github.com/MetaMask/metamask-mobile/pull/5460): [IMPROVEMENT] E2e test/browser flow
- [#5488](https://github.com/MetaMask/metamask-mobile/pull/5488): [IMPROVEMENT] Add Browserstack step to Bitrise
- [#5484](https://github.com/MetaMask/metamask-mobile/pull/5484): [IMPROVEMENT] Isolate e2e-Appium Feature scenarios
- [#5483](https://github.com/MetaMask/metamask-mobile/pull/5483): [IMPROVEMENT] Add renderScreen test util
- [#5476](https://github.com/MetaMask/metamask-mobile/pull/5476): [IMPROVEMENT] README.md: update "Install the Android NDK"
- [#5479](https://github.com/MetaMask/metamask-mobile/pull/5479): [IMPROVEMENT] Mount SeedPhraseVideo Video Player after transition
- [#5473](https://github.com/MetaMask/metamask-mobile/pull/5473): [DEPENDENCIES] On-ramp: upgrade on-ramp-sdk to v1.6.1
- [#5465](https://github.com/MetaMask/metamask-mobile/pull/5465): [strings] vault corruption recovery strings
- [#5433](https://github.com/MetaMask/metamask-mobile/pull/5433): [IMPROVEMENT] Add WebdriverIO test reports and Browserstack Integration
- [#5270](https://github.com/MetaMask/metamask-mobile/pull/5270): [DEPENDENCIES] Migrate to new controller packages
- [#5449](https://github.com/MetaMask/metamask-mobile/pull/5449): [IMPROVEMENT] Remove deeplink warning for SDK and SDK as dependency
- [#5462](https://github.com/MetaMask/metamask-mobile/pull/5462): [IMPROVEMENT] On-ramp: Remove unused constants
- [#5413](https://github.com/MetaMask/metamask-mobile/pull/5413): [IMPROVEMENT] On-ramp: Refactor Regions view to componentization
- [#5459](https://github.com/MetaMask/metamask-mobile/pull/5459): [IMPROVEMENT] Remove extra zero balance account potentially created from seeking ahead
- [#5454](https://github.com/MetaMask/metamask-mobile/pull/5454): [IMPROVEMENT] Refactor Analytics Events
- [#5453](https://github.com/MetaMask/metamask-mobile/pull/5453): [IMPROVEMENT] Use "ModalConfirmation" component for the QR Reader security alert
- [#5447](https://github.com/MetaMask/metamask-mobile/pull/5447): [IMPROVEMENT] Refactor "Screenshot Deterrent" for Android
- [#5436](https://github.com/MetaMask/metamask-mobile/pull/5436): [IMPROVEMENT] On-ramp: Refactor fiatOrders reducer to TypeScript
- [#5451](https://github.com/MetaMask/metamask-mobile/pull/5451): [IMPROVEMENT] Add translations to "Screenshot Deterrent" feature
- [#5428](https://github.com/MetaMask/metamask-mobile/pull/5428): [IMPROVEMENT] Add accessibilityRole button to StyledButton
- [#5437](https://github.com/MetaMask/metamask-mobile/pull/5437): [IMPROVEMENT] On-ramp: Move useSDKMethod to its own file
- [#5448](https://github.com/MetaMask/metamask-mobile/pull/5448): [IMPROVEMENT] Add translations to "Safe QR" feature
- [#5430](https://github.com/MetaMask/metamask-mobile/pull/5430): [IMPROVEMENT] Remove Text as any occurrences

### Changed

- [#5496](https://github.com/MetaMask/metamask-mobile/pull/5496): [REVERT] Onramp - Remove Text as any ocurrences

### Fixed

- [#5219](https://github.com/MetaMask/metamask-mobile/pull/5219): [FIX] Update selected network when delete network manually inserted
- [#5440](https://github.com/MetaMask/metamask-mobile/pull/5440): [FIX] Approval error when insufficient balance
- [#5468](https://github.com/MetaMask/metamask-mobile/pull/5468): [FIX] Screenshot deterrent analytics
- [#5475](https://github.com/MetaMask/metamask-mobile/pull/5475): [FIX] Fix import of `isEIP1559Transaction`
- [#5486](https://github.com/MetaMask/metamask-mobile/pull/5486): [FIX] Add providerValues to renderScreen
- [#5499](https://github.com/MetaMask/metamask-mobile/pull/5499): [FIX] Remove duplicate property
- [#5631](https://github.com/MetaMask/metamask-mobile/pull/5631): [FIX] Modal confirmation refactoring
- [#5624](https://github.com/MetaMask/metamask-mobile/pull/5624): [FIX] Fix currency display
- [#5615](https://github.com/MetaMask/metamask-mobile/pull/5615): [FIX] Fix analytics events
- [#5585](https://github.com/MetaMask/metamask-mobile/pull/5585): [FIX] Token Detection not persisting
- [#5556](https://github.com/MetaMask/metamask-mobile/pull/5556): [FIX] Swaps disabled on fresh install on some networks
- [#5550](https://github.com/MetaMask/metamask-mobile/pull/5550): [FIX] On-ramp: Fix order link in details screen
- [#5538](https://github.com/MetaMask/metamask-mobile/pull/5538): [FIX] E2e appium test failure fix
- [#5444](https://github.com/MetaMask/metamask-mobile/pull/5444): [FIX] Fix unecessary executions of useEffect

## [5.13.0]

### Added

- [#5424](https://github.com/MetaMask/metamask-mobile/pull/5424): [IMPROVEMENT] Add Screenshot Warning to ImportPrivateKey
- [#4670](https://github.com/MetaMask/metamask-mobile/pull/4670): [FEAT] Screenshot Warning
- [#5376](https://github.com/MetaMask/metamask-mobile/pull/5376): [IMPROVEMENT] Include L1 fee in the Send flow and on the tx detail page for Optimism
- [#5191](https://github.com/MetaMask/metamask-mobile/pull/5191): [IMPROVEMENT] Support for ens on deeplink transactions
- [#4546](https://github.com/MetaMask/metamask-mobile/pull/4546): [IMPROVEMENT] Support downloading Apple Wallet passes on iOS
- [#5083](https://github.com/MetaMask/metamask-mobile/pull/5083): [IMPROVEMENT] Component: Custom Spending Cap

### Changed

- [#5381](https://github.com/MetaMask/metamask-mobile/pull/5381): [UPDATE] Bumped contract-metadata to 2.1.0
- [#5422](https://github.com/MetaMask/metamask-mobile/pull/5422): [UPDATE] Add custom network and Import custom token
- [#5200](https://github.com/MetaMask/metamask-mobile/pull/5200): [UPDATE] Update Controllers to version 33.0.0
- [#5352](https://github.com/MetaMask/metamask-mobile/pull/5352): [UPDATE] Bump decode-uri-component from 0.2.0 to 0.2.2
- [#5246](https://github.com/MetaMask/metamask-mobile/pull/5246): [UPDATE] Bump loader-utils from 1.4.0 to 1.4.2
- [#5351](https://github.com/MetaMask/metamask-mobile/pull/5351): [REMOVE] On-ramp: remove old on-ramp experience

### Fixed

- [#5400](https://github.com/MetaMask/metamask-mobile/pull/5400): [FIX] jest expect type
- [#5115](https://github.com/MetaMask/metamask-mobile/pull/5115): [FIX] cancelling transaction when user does not give dapp permission to transfer funds

## [5.12.3]

### Changed

- Hotfix version bump for iOS only release, no code changes

## [5.12.1]

### Added

- [#5307](https://github.com/MetaMask/metamask-mobile/pull/5307): [IMPROVEMENT] Remove RPC URL, Block Explorer URL, Network Name from metrics
- [#5355](https://github.com/MetaMask/metamask-mobile/pull/5355): [IMPROVEMENT] Sanitize privacy settings before sending to Sentry

### Changed

- [#5362](https://github.com/MetaMask/metamask-mobile/pull/5362): [UPDATE] Copy for Opt in metrics screen and enable custom mainnet RPC
- [#5366](https://github.com/MetaMask/metamask-mobile/pull/5366): [UPDATE] On-ramp Refactor wyre authentication URL approach

### Fixed

- [#5360](https://github.com/MetaMask/metamask-mobile/pull/5360): [FIX] Onboarding wizard automatic update modal

## [5.12.0]

### Added

- [#5335](https://github.com/MetaMask/metamask-mobile/pull/5335): [IMPROVEMENT] On-ramp: Add useRegions hook and fix availablePaymentMethods
- [#5333](https://github.com/MetaMask/metamask-mobile/pull/5333): [IMPROVEMENT] Only fetch minimum versions if permissions enabled
- [#5238](https://github.com/MetaMask/metamask-mobile/pull/5238): [IMPROVEMENT] Browser experience
- [#5294](https://github.com/MetaMask/metamask-mobile/pull/5294): [IMPROVEMENT] On-ramp: allow amount formatting on android
- [#5273](https://github.com/MetaMask/metamask-mobile/pull/5273): [IMPROVEMENT] Enable new networks for Swaps
- [#5289](https://github.com/MetaMask/metamask-mobile/pull/5289): [IMPROVEMENT] Add strings to feature "Screenshot Warning"
- [#5287](https://github.com/MetaMask/metamask-mobile/pull/5287): [IMPROVEMENT] Add translations to feature "Easy Delete Data"
- [#4917](https://github.com/MetaMask/metamask-mobile/pull/4917): [IMPROVEMENT] Trigger UpdateNeeded screen
- [#5280](https://github.com/MetaMask/metamask-mobile/pull/5280): [IMPROVEMENT] On-ramp: Add usePaymentMethods hook with customAction filter by chainId
- [#5265](https://github.com/MetaMask/metamask-mobile/pull/5265): [IMPROVEMENT] On-ramp: Add order pending description in details view
- [#5267](https://github.com/MetaMask/metamask-mobile/pull/5267): [IMPROVEMENT] On-ramp: Change 0 amount to a pending state in order details
- [#5194](https://github.com/MetaMask/metamask-mobile/pull/5194): [FEATURE] Add more granular killswitches for swaps

### Changed

- [#5237](https://github.com/MetaMask/metamask-mobile/pull/5237): [DEPENDENCIES] Update Segment dependencies
- [#5220](https://github.com/MetaMask/metamask-mobile/pull/5220): [UPDATE] On-ramp-sdk@1.3.1: Wyre Apple Pay auth support and inAppBrowser hook
- [#5266](https://github.com/MetaMask/metamask-mobile/pull/5266): [REMOVE] On-ramp: Remove disabled button in amount to buy screen
- [#5244](https://github.com/MetaMask/metamask-mobile/pull/5244): [UPDATE] Change SDK URL
- [#5263](https://github.com/MetaMask/metamask-mobile/pull/5263): [UPDATE] Updates WebRTC and Socket.io client to the latest versions
- [#5331](https://github.com/MetaMask/metamask-mobile/pull/5331): [UPDATE] Bump @metamask/swaps-controller

### Fixed

- [#5264](https://github.com/MetaMask/metamask-mobile/pull/5264): [FIX] Date msBetweenDates test
- [#5268](https://github.com/MetaMask/metamask-mobile/pull/5268): [FIX] On-Ramp: Fix typos from payment method icon and contact support
- [#5269](https://github.com/MetaMask/metamask-mobile/pull/5269): [FIX] On-Ramp: Fix 1.3.1 creating undefined custom order ids
- [#5243](https://github.com/MetaMask/metamask-mobile/pull/5243): [FIX] Only trigger onLoadEnd when urls are equal
- [#5262](https://github.com/MetaMask/metamask-mobile/pull/5262): [FIX] Fixes and configuration updates related to Branch.io Deep Links
- [#5103](https://github.com/MetaMask/metamask-mobile/pull/5103): [FIX] WalletConnect signed typed and eth sign throwing error back to the dapp
- [#5292](https://github.com/MetaMask/metamask-mobile/pull/5292): [FIX] On-ramp: fix default payment method selection
- [#5318](https://github.com/MetaMask/metamask-mobile/pull/5318): [FIX] Estimated gas fee calculation on the transaction detail page
- [#5169](https://github.com/MetaMask/metamask-mobile/pull/5169): [FIX] Miscalculation on toWei func when passing valid numbers in scientific notation
- [#5337](https://github.com/MetaMask/metamask-mobile/pull/5337): [FIX] Send ERC-20 tokens on legacy networks

## [5.11.0]

### Added

- [#5088](https://github.com/MetaMask/metamask-mobile/pull/5088): [IMPROVEMENT] Add no payment methods screen
- [#5223](https://github.com/MetaMask/metamask-mobile/pull/5223): [IMPROVEMENT] Add payment method icons support
- [#5198](https://github.com/MetaMask/metamask-mobile/pull/5198): [IMPROVEMENT] Improve loading experience
- [#5213](https://github.com/MetaMask/metamask-mobile/pull/5213): [IMPROVEMENT] On-ramp: add payment method detail and disclaimer
- [#5214](https://github.com/MetaMask/metamask-mobile/pull/5214): [IMPROVEMENT] On-ramp: add payment method custom action analytics
- [#5188](https://github.com/MetaMask/metamask-mobile/pull/5188): [IMPROVEMENT] Networks-flow appium feature file

## [5.10.0]

### Added

- [#5202](https://github.com/MetaMask/metamask-mobile/pull/5202): [FEAT] On-Ramp: allow Harmony ONE
- [#5195](https://github.com/MetaMask/metamask-mobile/pull/5195): [FEAT] Onramp: Add exclude from purchases to onramp aggregator orders
- [#5158](https://github.com/MetaMask/metamask-mobile/pull/5158): [FEAT] On-Ramp: Provider payment method custom action and custom order ids
- [#4922](https://github.com/MetaMask/metamask-mobile/pull/4922): [FEAT] Segment Integration
- [#5041](https://github.com/MetaMask/metamask-mobile/pull/5041): [FEAT] Add accordion component to Design System
- [#5067](https://github.com/MetaMask/metamask-mobile/pull/5067): [FEAT] Component: Contract Box component
- [#4888](https://github.com/MetaMask/metamask-mobile/pull/4888): [FEAT] Extend popular network list

### Changed

- [#5096](https://github.com/MetaMask/metamask-mobile/pull/5096): [UPDATE] Update audit list
- [#4835](https://github.com/MetaMask/metamask-mobile/pull/4835): [UPDATE] Refactor SendTransaction Component
- [#5113](https://github.com/MetaMask/metamask-mobile/pull/5113): [UPDATE] avoid using Rinkeby in wallet & import network test
- [#5091](https://github.com/MetaMask/metamask-mobile/pull/5091): [UPDATE] Standardized Storybook Structure
- [#4868](https://github.com/MetaMask/metamask-mobile/pull/4868): [UPDATE] Refactor ApprovalTransaction Component
- [#5064](https://github.com/MetaMask/metamask-mobile/pull/5064): [UPDATE] Refactor Approve Component

### Fixed

- [#5142](https://github.com/MetaMask/metamask-mobile/pull/5142): [FIX] Fix high severity audit issues
- [#4235](https://github.com/MetaMask/metamask-mobile/pull/4235): [FIX] Delete contact on android fixed
- [#5116](https://github.com/MetaMask/metamask-mobile/pull/5116): [FIX] Updated EditLegacy Component
- [#5119](https://github.com/MetaMask/metamask-mobile/pull/5119): [FIX] Crash when reject two times connect wallet on in app browser
- [#5173](https://github.com/MetaMask/metamask-mobile/pull/5173): [FIX] Android build cMake
- [#5167](https://github.com/MetaMask/metamask-mobile/pull/5167): [FIX] Fixed Button Base Size issue
- [#5209](https://github.com/MetaMask/metamask-mobile/pull/5209): [FIX] On-ramp: multiple redirection handling
- [#5217](https://github.com/MetaMask/metamask-mobile/pull/5217): [FIX] Send to the wrong address

## [5.9.1]

### Fixed

- [#5172](https://github.com/MetaMask/metamask-mobile/pull/5172): [FIX] ENS name being resolved correctly

## [5.9.0]

### Added

- [#5077](https://github.com/MetaMask/metamask-mobile/pull/5077): [FEATURE] translations for permission system
- [#5040](https://github.com/MetaMask/metamask-mobile/pull/5040): [ADD] Component/4721-card
- [#5065](https://github.com/MetaMask/metamask-mobile/pull/5065): [ENHANCEMENT] added shadows to useAppTheme
- [#5010](https://github.com/MetaMask/metamask-mobile/pull/5010): [ADD] InApp Browser package
- [#5042](https://github.com/MetaMask/metamask-mobile/pull/5042): [ADD] Component/4723-estimatedtext
- [#4999](https://github.com/MetaMask/metamask-mobile/pull/4999): [ADD] Component: Account and balance component
- [#5030](https://github.com/MetaMask/metamask-mobile/pull/5030): [ENHANCEMENT] PR template with working link for mobile coding standards
- [#5031](https://github.com/MetaMask/metamask-mobile/pull/5031): [ENHANCEMENT] Deprecate snake case from feature flags
- [#5025](https://github.com/MetaMask/metamask-mobile/pull/5025): [ENHANCEMENT] Remove all "Ooops" copies

### Changed

- [#5024](https://github.com/MetaMask/metamask-mobile/pull/5024): [UPDATE] app name for release-to-store step
- [#5006](https://github.com/MetaMask/metamask-mobile/pull/5006): [UPDATE] Bump @keystonehq/ur-decoder from 0.3.0 to 0.6.1
- [#5033](https://github.com/MetaMask/metamask-mobile/pull/5033): [UPDATE] default iOS simulator
- [#5058](https://github.com/MetaMask/metamask-mobile/pull/5058): [UPDATE] patch vm2 via resolution
- [#5039](https://github.com/MetaMask/metamask-mobile/pull/5039): [UPDATE] update shadow tokens
- [#4804](https://github.com/MetaMask/metamask-mobile/pull/4804): [UPDATE] GasPolling refactor UpdateEIP1559Transaction Component

### Fixed

- [#5035](https://github.com/MetaMask/metamask-mobile/pull/5035): [FIX] On-Ramp: Fix autolock dispatch for apple pay
- [#5079](https://github.com/MetaMask/metamask-mobile/pull/5079): [FIX] Network switch during QR scan in Send Flow
- [#5034](https://github.com/MetaMask/metamask-mobile/pull/5034): [FIX] Wallet Connect PR#4934 and PR#4861
- [#4404](https://github.com/MetaMask/metamask-mobile/pull/4404): [FIX] Fixed ERC20 token transfer from Dapps
- [#5028](https://github.com/MetaMask/metamask-mobile/pull/5028): [FIX] variable interpolation in build.sh
- [#5044](https://github.com/MetaMask/metamask-mobile/pull/5044): [FIX] evaluating ‘transaction.status’

## [5.8.1]

### Added

- [#4286](https://github.com/MetaMask/metamask-mobile/pull/4286): [ENHANCEMENT] Integrates MetaMask SDK support

## [5.8.0]

### Added

- [#4833](https://github.com/MetaMask/metamask-mobile/pull/4833): [ENHANCEMENT] Implement new QA builds for both Android and iOS
- [#4993](https://github.com/MetaMask/metamask-mobile/pull/4993): [ENHANCEMENT] On-Ramp: Add scrolling to payment methods and make logo property optional
- [#4997](https://github.com/MetaMask/metamask-mobile/pull/4997): [ENHANCEMENT] SRP Reveal Timestamp
- [#5002](https://github.com/MetaMask/metamask-mobile/pull/5002): [FEAT] ENS Wildcard and offchain resolution
- [#4649](https://github.com/MetaMask/metamask-mobile/pull/4649): [ENHANCEMENT] Url redirection from QR code
- [#4978](https://github.com/MetaMask/metamask-mobile/pull/4978): [ENHANCEMENT] Store distinct id for consistency
- [#4947](https://github.com/MetaMask/metamask-mobile/pull/4947): [IMPROVEMENT] WebView Error Copy
- [#4946](https://github.com/MetaMask/metamask-mobile/pull/4946): [ENHANCEMENT] Swaps: Add copy for 0% fee in quotes info modal
- [#4942](https://github.com/MetaMask/metamask-mobile/pull/4942): [ENHANCEMENT] Add unit tests to useDeleteWallet hook
- [#4939](https://github.com/MetaMask/metamask-mobile/pull/4939): [ENHANCEMENT] Update "Usability enhancement" template
- [#4938](https://github.com/MetaMask/metamask-mobile/pull/4938): [ENHANCEMENT] Bump git-clone version to 6 in Bitrise machines

### Changed

- [#4755](https://github.com/MetaMask/metamask-mobile/pull/4755): [UPDATE] - New template fields added to reflect newer requirements for PRs
- [#4782](https://github.com/MetaMask/metamask-mobile/pull/4782): [DEPENDENCIES] Detox version bump from 19.6.5 to 19.7.1
- [#4941](https://github.com/MetaMask/metamask-mobile/pull/4941): [DEPENDENCIES] Replace "@react-native-community/async-storage" for "@react-native-async-storage/async-storage"
- [#4980](https://github.com/MetaMask/metamask-mobile/pull/4980): [DEPENDENCIES] On-ramp: Add compact payment method selector
- [#3438](https://github.com/MetaMask/metamask-mobile/pull/3438): [DEPENDENCIES] Bump metro from 0.59.0 to 0.66.2

### Fixed

- [#5018](https://github.com/MetaMask/metamask-mobile/pull/5018): [FIX] Vault corruption error log
- [#4972](https://github.com/MetaMask/metamask-mobile/pull/4972): [FIX] Unable to Speedup/Cancel legacy transactions
- [#4430](https://github.com/MetaMask/metamask-mobile/pull/4430): [FIX] Keystone: Pagination and missing addresses
- [#4982](https://github.com/MetaMask/metamask-mobile/pull/4982): [FIX] typo in faucet name
- [#4983](https://github.com/MetaMask/metamask-mobile/pull/4983): [FIX] Navigation comment spell
- [#4958](https://github.com/MetaMask/metamask-mobile/pull/4958): [FIX] WebView Origin Allowlist

## [5.7.0]

### Added

- [#4897](https://github.com/MetaMask/metamask-mobile/pull/4897): [IMPROVEMENT] Automatic security checks settings
- [#4902](https://github.com/MetaMask/metamask-mobile/pull/4902): [IMPROVEMENT] Deprecated networks Alert border fixed
- [#4885](https://github.com/MetaMask/metamask-mobile/pull/4885): [IMPROVEMENT] Implement warning for deprecated test networks, kovan, ropsten and rinkeby
- [#4860](https://github.com/MetaMask/metamask-mobile/pull/4860): [IMPROVEMENT] Change skip to payment method in on-ramp flow
- [#4892](https://github.com/MetaMask/metamask-mobile/pull/4892): [IMPROVEMENT] Increase polling cycles for on-ramp quotes to 6
- [#4530](https://github.com/MetaMask/metamask-mobile/pull/4530): [IMPROVEMENT] Apply Test network prefix to token values to help educate users
- [#4841](https://github.com/MetaMask/metamask-mobile/pull/4841): [IMPROVEMENT] Component/4080 Badge
- [#4856](https://github.com/MetaMask/metamask-mobile/pull/4856): [IMPROVEMENT] Update Cell Account component
- [#4305](https://github.com/MetaMask/metamask-mobile/pull/4305): [FEAT] Hide remember me
- [#4862](https://github.com/MetaMask/metamask-mobile/pull/4862): [IMPROVEMENT] Fetch and parse app config
- [#4798](https://github.com/MetaMask/metamask-mobile/pull/4798): [ANALYTICS] Improve SRP reveal metrics
- [#4809](https://github.com/MetaMask/metamask-mobile/pull/4809): [IMPROVEMENT] Component/4779 Audit

### Changed

- [#4839](https://github.com/MetaMask/metamask-mobile/pull/4839): [DEPENDENCIES] Introduce @testing-library/react-hooks dependency
- [#4595](https://github.com/MetaMask/metamask-mobile/pull/4595): [DEPENDENCIES] Upgrade react-native-device-info to 9.0.2
- [#4748](https://github.com/MetaMask/metamask-mobile/pull/4748): [UPGRADE] Patch bump for SoLoader version on Android
- [#4896](https://github.com/MetaMask/metamask-mobile/pull/4896): [DEPENDENCIES] Upgrade on-ramp-sdk to 1.2.0

### Fixed

- [#4905](https://github.com/MetaMask/metamask-mobile/pull/4905): [FIX] Update send flow
- [#4407](https://github.com/MetaMask/metamask-mobile/pull/4407): [FIX] Add browser cookies support on Android
- [#4898](https://github.com/MetaMask/metamask-mobile/pull/4898): [FIX] Test sanitizeUrlInput error
- [#4882](https://github.com/MetaMask/metamask-mobile/pull/4882): [FIX] Missing token detection event properties
- [#4869](https://github.com/MetaMask/metamask-mobile/pull/4869): [FIX] Remove decimals for on-ramp order details exchange rate
- [#4824](https://github.com/MetaMask/metamask-mobile/pull/4824): [Fix] Fix password not being set as authentication type for login metrics
- [#4828](https://github.com/MetaMask/metamask-mobile/pull/4828): [FIX] Image styling
- [#4830](https://github.com/MetaMask/metamask-mobile/pull/4830): [FIX] Add user agent from property as default
- [#4684](https://github.com/MetaMask/metamask-mobile/pull/4684): [FIX] Account nickname is always defined
- [#4503](https://github.com/MetaMask/metamask-mobile/pull/4503): [FIX] Jazz icons constantly changing
- [#4016](https://github.com/MetaMask/metamask-mobile/pull/4016): [FIX] ypo in conversion/index.js
- [#4878](https://github.com/MetaMask/metamask-mobile/pull/4878): [FIX] Add testnets condition to blockchain explorer
- [#4799](https://github.com/MetaMask/metamask-mobile/pull/4799): [FIX] Reveal SRP or Private Key wrong password error

## [5.6.1]

### Uncategorized

- [#4966](https://github.com/MetaMask/metamask-mobile/pull/4966): [FIX] Add http and https protocol to webview origin whitelist
- [#4967](https://github.com/MetaMask/metamask-mobile/pull/4967): [FIX] Correct url parse

## [5.6.0]

### Uncategorized

- [#4821](https://github.com/MetaMask/metamask-mobile/pull/4821): [FIX] Staging env redirection url for onramp
- [#4742](https://github.com/MetaMask/metamask-mobile/pull/4742): [ADD] On-Ramp generic error view event
- [#4743](https://github.com/MetaMask/metamask-mobile/pull/4743): [ADD] Payment Method logos
- [#4818](https://github.com/MetaMask/metamask-mobile/pull/4818): [ADD] Provider user agent to on-ramp Checkout WebView
- [#4640](https://github.com/MetaMask/metamask-mobile/pull/4640): [ADD] Confirmation modal component
- [#4749](https://github.com/MetaMask/metamask-mobile/pull/4749): [ADD] Current network to Fiat On-ramp titles
- [#4718](https://github.com/MetaMask/metamask-mobile/pull/4718): [ADD] Component/4226 bottom sheet
- [#4780](https://github.com/MetaMask/metamask-mobile/pull/4780): [FIX] Block explorer crash
- [#4740](https://github.com/MetaMask/metamask-mobile/pull/4740): [FIX] Duplicate property
- [#4793](https://github.com/MetaMask/metamask-mobile/pull/4793): [ADD] Dapp connect Warning
- [#4634](https://github.com/MetaMask/metamask-mobile/pull/4634): [IMPROVEMENT] safeNumberToBN Method
- [#4795](https://github.com/MetaMask/metamask-mobile/pull/4795): [UPDATE] urls updated
- [#4756](https://github.com/MetaMask/metamask-mobile/pull/4756): [PS] Componentize Cell #4083
- [#4784](https://github.com/MetaMask/metamask-mobile/pull/4784): [ADD] Hide Remember me strings
- [#4639](https://github.com/MetaMask/metamask-mobile/pull/4639): [FIX] Use default QR code colors
- [#4613](https://github.com/MetaMask/metamask-mobile/pull/4613): [ADD] Component/4079 avatar group
- [#4636](https://github.com/MetaMask/metamask-mobile/pull/4636): [FIX] NFT transfer with big token id

## [5.5.1]

### Changed

- [UPDATE](https://github.com/MetaMask/dapps/pull/137): [UPDATE] Disable iOS explore links

## [5.5.0]

### Uncategorized

- [#4475](https://github.com/MetaMask/metamask-mobile/pull/4475): [IMPROVEMENT] Swaps support for hardware wallet
- [#4627](https://github.com/MetaMask/metamask-mobile/pull/4627): [IMPROVEMENT] Add typing support for payment methods to be used instead of payment IDs
- [#4625](https://github.com/MetaMask/metamask-mobile/pull/4625): [FIX] Handle SecureKeychain failed access while passcode enabled
- [#4655](https://github.com/MetaMask/metamask-mobile/pull/4655): [IMPROVEMENT] Add log for vault corruption
- [#4629](https://github.com/MetaMask/metamask-mobile/pull/4629): [IMPROVEMENT] Add EventEmitter for locale change events and update On-ramp SDK
- [#4685](https://github.com/MetaMask/metamask-mobile/pull/4685): [FIX] Fix `allowsInlineMediaPlayback` prop name
- [#4329](https://github.com/MetaMask/metamask-mobile/pull/4329): [IMPROVEMENT] Improve transaction activy for custom networks
- [#4643](https://github.com/MetaMask/metamask-mobile/pull/4643): [IMPROVEMENT] Add On-Ramp Aggregator a11y improvements
- [#4173](https://github.com/MetaMask/metamask-mobile/pull/4173): [FIX] Dapp domain resolver for ENS
- [#4676](https://github.com/MetaMask/metamask-mobile/pull/4676): [IMPROVEMENT] Componentize Toast
- [#4704](https://github.com/MetaMask/metamask-mobile/pull/4704): [IMPROVEMENT] Add word 'buy' to limit description
- [#4711](https://github.com/MetaMask/metamask-mobile/pull/4711): [FIX] Token Texts
- [#4677](https://github.com/MetaMask/metamask-mobile/pull/4677): [IMPROVEMENT] Network Picker component
- [#4689](https://github.com/MetaMask/metamask-mobile/pull/4689): [IMPROVEMENT] Componentize Account Picker
- [#4612](https://github.com/MetaMask/metamask-mobile/pull/4612): [IMPROVEMENT] Componentize Token Avatar

## [5.4.0]

### Uncategorized

- [#4604](https://github.com/MetaMask/metamask-mobile/pull/4604): [IMPROVEMENT] Change quotes error to individual events
- [#4497](https://github.com/MetaMask/metamask-mobile/pull/4497): [IMPROVEMENT] Add amount to onramp analytics events
- [#4496](https://github.com/MetaMask/metamask-mobile/pull/4496): [IMPROVEMENT] Add currency destination symbol to purchase submitted
- [#4498](https://github.com/MetaMask/metamask-mobile/pull/4498): [IMPROVEMENT] Add decimals optional prop to keypad in onramp amount view
- [#4600](https://github.com/MetaMask/metamask-mobile/pull/4600): [IMPROVEMENT] Add onramp extra properties to events
- [#4656](https://github.com/MetaMask/metamask-mobile/pull/4656): [FIX] Plain texts in code
- [#4388](https://github.com/MetaMask/metamask-mobile/pull/4388): [IMPROVEMENT] Introduce token detection v2
- [#4582](https://github.com/MetaMask/metamask-mobile/pull/4582): [IMPROVEMENT] Updated package name to be consistent with our npm namespace
- [#4609](https://github.com/MetaMask/metamask-mobile/pull/4609): [FEAT] Add pull to refresh and new design to Fiat Order Details view
- [#4527](https://github.com/MetaMask/metamask-mobile/pull/4527): [IMPROVEMENT] changed launch mode to singleInstance
- [#4644](https://github.com/MetaMask/metamask-mobile/pull/4644): [IMPROVEMENT] Update url formats popular networks
- [#4420](https://github.com/MetaMask/metamask-mobile/pull/4420): [IMPROVEMENT] Refactor transaction component
- [#4263](https://github.com/MetaMask/metamask-mobile/pull/4263): [FIX] Swaps approval transaction
- [#4618](https://github.com/MetaMask/metamask-mobile/pull/4618): [IMPROVEMENT] Componentize SelectableListItem
- [#4606](https://github.com/MetaMask/metamask-mobile/pull/4606): [IMPROVEMENT] Componentize multiselect list item
- [#4610](https://github.com/MetaMask/metamask-mobile/pull/4610): [FIX] Remove TouchableOpacity from DeleteMetaMetricsData component
- [#4554](https://github.com/MetaMask/metamask-mobile/pull/4554): [IMPROVEMENT] Allow for env variable to customise the simulator that gets launched on iOS
- [#4575](https://github.com/MetaMask/metamask-mobile/pull/4575): [IMPROVEMENT] Componentize tag url
- [#4572](https://github.com/MetaMask/metamask-mobile/pull/4572): [IMPROVEMENT] Componentize tag
- [#4549](https://github.com/MetaMask/metamask-mobile/pull/4549): [IMPROVEMENT] Componentize tab bar
- [#4599](https://github.com/MetaMask/metamask-mobile/pull/4599): [IMPROVEMENT] Componentize Checkbox
- [#4583](https://github.com/MetaMask/metamask-mobile/pull/4583): [IMPROVEMENT] Componentize icon button
- [#4548](https://github.com/MetaMask/metamask-mobile/pull/4548): [IMPROVEMENT] Componentize tab bar item
- [#4525](https://github.com/MetaMask/metamask-mobile/pull/4525): [IMPROVEMENT] Componentize button tertiary
- [#4524](https://github.com/MetaMask/metamask-mobile/pull/4524): [IMPROVEMENT] Componentize button secondary
- [#4523](https://github.com/MetaMask/metamask-mobile/pull/4523): [IMPROVEMENT] Componentize button primary
- [#4522](https://github.com/MetaMask/metamask-mobile/pull/4522): [IMPROVEMENT] Componentize buttons
- [#4602](https://github.com/MetaMask/metamask-mobile/pull/4602): [FIX] Fix color types
- [#4603](https://github.com/MetaMask/metamask-mobile/pull/4603): [FIX] Remove yarn audit exclusions
- [#4580](https://github.com/MetaMask/metamask-mobile/pull/4580): [IMPROVEMENT] Componentize NetworkAvatar
- [#4414](https://github.com/MetaMask/metamask-mobile/pull/4414): [IMPROVEMENT] Componentize FaviconAvatar
- [#4587](https://github.com/MetaMask/metamask-mobile/pull/4587): [FIX] Remove codecov
- [#4499](https://github.com/MetaMask/metamask-mobile/pull/4499): [IMPROVEMENT] Componentize icon
- [#4481](https://github.com/MetaMask/metamask-mobile/pull/4481): [IMPROVEMENT] Updating colors and typography to use theme objects
- [#4559](https://github.com/MetaMask/metamask-mobile/pull/4559): [FIX] Add resolution for shell-quote & got
- [#4531](https://github.com/MetaMask/metamask-mobile/pull/4531): [IMPROVEMENT] Add delete wallet step spec

## [5.3.0]

### Uncategorized

- [#4506](https://github.com/MetaMask/metamask-mobile/pull/4506): [IMPROVEMENT] Add OnRamp aggregator translations
- [#4389](https://github.com/MetaMask/metamask-mobile/pull/4389): [FEAT] Easy delete data
- [#4510](https://github.com/MetaMask/metamask-mobile/pull/4510): [IMPROVEMENT] Update RPC URL for xDai
- [#4269](https://github.com/MetaMask/metamask-mobile/pull/4269): [IMPROVEMENT] Show amount being approved by default on approval screens
- [#4495](https://github.com/MetaMask/metamask-mobile/pull/4495): [FIX] WalletConnect Icon on connect screen
- [#4505](https://github.com/MetaMask/metamask-mobile/pull/4505): [FIX] Updated new rpcUrl of gnosischain on test file
- [#4442](https://github.com/MetaMask/metamask-mobile/pull/4442): [FIX] Skip to amount to buy when region is selected
- [#4501](https://github.com/MetaMask/metamask-mobile/pull/4501): [FIX] Add accesible false to pressable group preventing VoiceOver interaction
- [#4247](https://github.com/MetaMask/metamask-mobile/pull/4247): [IMPROVEMENT] Add rounded corners to svg NFTs
- [#4470](https://github.com/MetaMask/metamask-mobile/pull/4470): [FIX] Add minimum required params to orders
- [#4469](https://github.com/MetaMask/metamask-mobile/pull/4469): [FIX] Displaying notification when state changes
- [#4443](https://github.com/MetaMask/metamask-mobile/pull/4443): [FIX] Wrong analytics property for region event
- [#4468](https://github.com/MetaMask/metamask-mobile/pull/4468): [FIX] Wrong amount out for onramp analytics
- [#4418](https://github.com/MetaMask/metamask-mobile/pull/4418): [IMPROVEMENT] Import address verification in send flow
- [#3783](https://github.com/MetaMask/metamask-mobile/pull/3783): [FEAT] Add custom networks
- [#4131](https://github.com/MetaMask/metamask-mobile/pull/4131): [FIX] Add method for crypto that are not in ISO4217
- [#4187](https://github.com/MetaMask/metamask-mobile/pull/4187): [IMPROVEMENT] Update copy in Edit & Advance Screens
- [#4060](https://github.com/MetaMask/metamask-mobile/pull/4060): [FIX] Avoid canceling transactions after submission
- [#4478](https://github.com/MetaMask/metamask-mobile/pull/4478): [IMPROVEMENT] Video subtitles
- [#4429](https://github.com/MetaMask/metamask-mobile/pull/4429): [FIX] Prompt camera permission
- [#4440](https://github.com/MetaMask/metamask-mobile/pull/4440): [FIX] Updating instances of "Metamask" to "MetaMask"
- [#4438](https://github.com/MetaMask/metamask-mobile/pull/4438): [FIX] Resolved spelling mistake
- [#4445](https://github.com/MetaMask/metamask-mobile/pull/4445): [FIX] Adding resolutions for security critical packages
- [#3943](https://github.com/MetaMask/metamask-mobile/pull/3943): [FIX] Remove old gas estimation
- [#4070](https://github.com/MetaMask/metamask-mobile/pull/4070): [IMPROVEMENT] Update SelectQRAccounts UI
- [#4178](https://github.com/MetaMask/metamask-mobile/pull/4178): [FIX] Prevent crash when funds warning is pressed
- [#4367](https://github.com/MetaMask/metamask-mobile/pull/4367): [IMPROVEMENT] Make text hex data selectable

## [5.2.0]

### Uncategorized

- [#4349](https://github.com/MetaMask/metamask-mobile/pull/4349): [FIX] Subtitle mapping
- [#4344](https://github.com/MetaMask/metamask-mobile/pull/4344): [FIX] Fix homepage scripts and env import
- [#4345](https://github.com/MetaMask/metamask-mobile/pull/4345): [FIX] Fix check for empty tokens list
- [#3696](https://github.com/MetaMask/metamask-mobile/pull/3696): [FEATURE] Fiat on Ramp Aggregator
- [#4303](https://github.com/MetaMask/metamask-mobile/pull/4303): [IMPROVEMENT] Add support for env variable for MM_HOMEPAGE
- [#4331](https://github.com/MetaMask/metamask-mobile/pull/4331): [IMPROVEMENT] Fix addressbook and browser test
- [#4170](https://github.com/MetaMask/metamask-mobile/pull/4170): [FIX] Copy to clipboard for Android version 9 and below
- [#4328](https://github.com/MetaMask/metamask-mobile/pull/4328): [FIX] Fix generate-static-assets
- [#4318](https://github.com/MetaMask/metamask-mobile/pull/4318): [FIX] Fix confusables bug
- [#4316](https://github.com/MetaMask/metamask-mobile/pull/4316): [IMPROVEMENT] GIVEN, WHEN, THEN - Template Update
- [#4167](https://github.com/MetaMask/metamask-mobile/pull/4167): [IMPROVEMENT] Adds support for 'dapp/' urls support on 'metamask://' and fixes DL opening to Apple Store
- [#4175](https://github.com/MetaMask/metamask-mobile/pull/4175): [Fix] Favourites not showing when home button is pressed in browser tab menu
- [#4278](https://github.com/MetaMask/metamask-mobile/pull/4278): [IMPROVEMENT] Convert back to spaces
- [#4249](https://github.com/MetaMask/metamask-mobile/pull/4249): [IMPROVEMENT] patch cross-fetch instead of skipping
- [#4174](https://github.com/MetaMask/metamask-mobile/pull/4174): [IMPROVEMENT] Address now is in the checksum standard format
- [#4182](https://github.com/MetaMask/metamask-mobile/pull/4182): [IMPROVEMENT] Standardize prettier configuration
- [#4183](https://github.com/MetaMask/metamask-mobile/pull/4183): [FIX] excluded audit because no available patch

## [5.1.0]

### Uncategorized

- [#3929](https://github.com/MetaMask/metamask-mobile/pull/3929): [IMPROVEMENT] Defaults to current network if chain id not specified in QR codes
- [#4159](https://github.com/MetaMask/metamask-mobile/pull/4159): [IMPROVEMENT] - iCloud Backup Restriction
- [#4035](https://github.com/MetaMask/metamask-mobile/pull/4035): [FIX] Issue #207
- [#4129](https://github.com/MetaMask/metamask-mobile/pull/4129): [IMPROVEMENT] Add e2e coverage for invalid browser url & changing password
- [#4166](https://github.com/MetaMask/metamask-mobile/pull/4166): [FIX] Undefined address error
- [#4165](https://github.com/MetaMask/metamask-mobile/pull/4165): [ANALYTICS] Add events to "Hold to Reveal Private Credential" feature
- [#4099](https://github.com/MetaMask/metamask-mobile/pull/4099): [IMPROVEMENT] Metrics only enabled when confirm button is pressed
- [#4168](https://github.com/MetaMask/metamask-mobile/pull/4168): [FIX] Fixed wallet_watchAsset API
- [#4114](https://github.com/MetaMask/metamask-mobile/pull/4114): [FEAT] Add the "Hold to Reveal" button before revealing an account’s private key
- [#4151](https://github.com/MetaMask/metamask-mobile/pull/4151): [FIX] Revert credit card support
- [#3942](https://github.com/MetaMask/metamask-mobile/pull/3942): [FIX] Add custom token
- [#4089](https://github.com/MetaMask/metamask-mobile/pull/4089): [FIX] Fix/2830 enter many names
- [#4115](https://github.com/MetaMask/metamask-mobile/pull/4115): [IMPROVEMENT] Upgrade controllers to 28.0.0
- [#4090](https://github.com/MetaMask/metamask-mobile/pull/4090): [FIX] Fix can not scroll on dapp modal
- [#4113](https://github.com/MetaMask/metamask-mobile/pull/4113): [FIX] Add ticker to SelectQRAccounts
- [#3980](https://github.com/MetaMask/metamask-mobile/pull/3980): [FIX] Patch network specific asset modal (Token detection)
- [#4154](https://github.com/MetaMask/metamask-mobile/pull/4154): [FIX] Update react-native-webview+11.13.0.patch
- [#4135](https://github.com/MetaMask/metamask-mobile/pull/4135): [IMPROVEMENT]browser improvement

## [5.0.1]

### Fixed

- [FIX] iOS Hotfix - Add LinkPresentation library

## [5.0.0]

### Uncategorized

- [#3971](https://github.com/MetaMask/metamask-mobile/pull/3971): [FIX] Fix issues releated to deep/universal links
- [#3925](https://github.com/MetaMask/metamask-mobile/pull/3925): [FEAT] Allow ApplePay in Transak webview.
- [#4047](https://github.com/MetaMask/metamask-mobile/pull/4047): [FIX] Fix attribution url
- [#3972](https://github.com/MetaMask/metamask-mobile/pull/3972): [FIX] Fix GasEducation ticker
- [#3915](https://github.com/MetaMask/metamask-mobile/pull/3915): [FEAT] Keystone integration
- [#4033](https://github.com/MetaMask/metamask-mobile/pull/4033): [FIX] Remove hardcoded fill
- [#3979](https://github.com/MetaMask/metamask-mobile/pull/3979): [FIX] TransactionDetails speed up and cancel CTA
- [#3948](https://github.com/MetaMask/metamask-mobile/pull/3948): [FIX] Update button on WebviewError

## [4.4.0]

### Uncategorized

- [#3910](https://github.com/MetaMask/metamask-mobile/pull/3910): [IMPROVEMENT] Network Specific Asset Education
- [#3877](https://github.com/MetaMask/metamask-mobile/pull/3877): [IMPROVEMENT] Add OSS attribution
- [#3731](https://github.com/MetaMask/metamask-mobile/pull/3731): [FIX] Fix formatting of gas price for all conversion currencies
- [#3846](https://github.com/MetaMask/metamask-mobile/pull/3846): [FEATURE] Add MoonPay on-ramp support. Add CUSD and CEUR support for Transak
- [#3792](https://github.com/MetaMask/metamask-mobile/pull/3792): [FIX] Self sent token transactions
- [#3902](https://github.com/MetaMask/metamask-mobile/pull/3902): [IMPROVEMENT] Add better messaging around ENS validation
- [#3969](https://github.com/MetaMask/metamask-mobile/pull/3969): [FIX] Fix typo in network modal

## [4.3.1]

### Fixed

- [#3946](https://github.com/MetaMask/metamask-mobile/pull/3946): [FIX] Fix error boundary SRP
- [#3947](https://github.com/MetaMask/metamask-mobile/pull/3947): [FIX] Fix gas carousel price estimate
- [#3940](https://github.com/MetaMask/metamask-mobile/pull/3940): [FIX] Fix browser crash

## [4.3.0]

### Uncategorized

- [#3916](https://github.com/MetaMask/metamask-mobile/pull/3916): [FIX] Patch Android clipboard crasher
- [#3776](https://github.com/MetaMask/metamask-mobile/pull/3776): [IMPROVEMENT] Enable dark mode
- [#3899](https://github.com/MetaMask/metamask-mobile/pull/3899): [IMPROVEMENT] Improve WalletConnect checks
- [#3898](https://github.com/MetaMask/metamask-mobile/pull/3898): [FIX] Exclude deps in build.gradle (Fix Android build)
- [#3900](https://github.com/MetaMask/metamask-mobile/pull/3900): [IMPROVEMENT] Safe delete copied object instead of original one
- [#3703](https://github.com/MetaMask/metamask-mobile/pull/3703): [IMPROVEMENT] Add credit card support and change copy
- [#3892](https://github.com/MetaMask/metamask-mobile/pull/3892): [FIX] Fix undefined gas price crash
- [#3850](https://github.com/MetaMask/metamask-mobile/pull/3850): [FIX] Fix 'io.branch.referral.installListener' crashes on Android
- [#3888](https://github.com/MetaMask/metamask-mobile/pull/3888): [FIX] Fix go to ens domain when coming from qr code
- [#3692](https://github.com/MetaMask/metamask-mobile/pull/3692): [IMPROVEMENT] Show the contract receiving token allowances on the allowance screen
- [#3878](https://github.com/MetaMask/metamask-mobile/pull/3878): [IMPROVEMENT] Upgrade controllers v26.0.0 and Swaps controller to v6.6.0
- [#3756](https://github.com/MetaMask/metamask-mobile/pull/3756): [FIX] Prioritise specified transaction gas to allow gasless network transactions
- [#3863](https://github.com/MetaMask/metamask-mobile/pull/3863): [FIX] Fix spend limit bug
- [#3851](https://github.com/MetaMask/metamask-mobile/pull/3851): [IMPROVEMENT] Clear browser tabs when cleaning history
- [#3790](https://github.com/MetaMask/metamask-mobile/pull/3790): [FIX] "Speed up" and "Cancel" buttons showing up in the receiver side
- [#3819](https://github.com/MetaMask/metamask-mobile/pull/3819): [FIX] The recent list doesn’t convert addresses to my nickname
- [#3802](https://github.com/MetaMask/metamask-mobile/pull/3802): [FIX] Check that network exists when adding a custom network
- [#3837](https://github.com/MetaMask/metamask-mobile/pull/3837): [FIX] Fix onramp BUSD address
- [#3824](https://github.com/MetaMask/metamask-mobile/pull/3824): [FIX] Add tokens/NFTs button triggers multiple times
- [#3803](https://github.com/MetaMask/metamask-mobile/pull/3803): [FIX] Fix gas fee on education wizard and related JSON parse error
- [#3825](https://github.com/MetaMask/metamask-mobile/pull/3825): [FIX] Fix lack of full ENS namespace support
- [#3638](https://github.com/MetaMask/metamask-mobile/pull/3638): [IMPROVEMENT] Upgrade controllers to 25.1.0

## [4.2.2]

### Uncategorized

- [#3841](https://github.com/MetaMask/metamask-mobile/pull/3841): [FIX] Fix custom network icons on Wallet Overview
- [#3839](https://github.com/MetaMask/metamask-mobile/pull/3839): [FIX] Update en.json
- [#3838](https://github.com/MetaMask/metamask-mobile/pull/3838): [FIX] Fix onramp BUSD address. Add wc_description string
- [#3811](https://github.com/MetaMask/metamask-mobile/pull/3811): [FIX] Problem when loading unknown icons on Swap token list
- [#3791](https://github.com/MetaMask/metamask-mobile/pull/3791): [FIX] Update style of ErrorMessage
- [#3797](https://github.com/MetaMask/metamask-mobile/pull/3797): [ENHANCEMENT] Add Fantom FTM and Celo CELO — Add token after fiat on ramp order
- [#3685](https://github.com/MetaMask/metamask-mobile/pull/3685): [ENHANCEMENT] WalletConnect, Deeplink and RPC methods refactors
- [#3766](https://github.com/MetaMask/metamask-mobile/pull/3766): [ENHANCEMENT] Swaps: Add Avalanche
- [#3806](https://github.com/MetaMask/metamask-mobile/pull/3806): [FIX] Custom network token crash
- [#3547](https://github.com/MetaMask/metamask-mobile/pull/3547): [IMPROVEMENT] Warn when exporting SRP
- [#3788](https://github.com/MetaMask/metamask-mobile/pull/3788): [UPGRADE] Bump url-parse from 1.5.2 to 1.5.9
- [#3764](https://github.com/MetaMask/metamask-mobile/pull/3764): [UPGRADE] Bump vm2 from 3.9.5 to 3.9.8
- [#3787](https://github.com/MetaMask/metamask-mobile/pull/3787): [FIX] Default spent limit value
- [#3774](https://github.com/MetaMask/metamask-mobile/pull/3774): [FIX] Address book e2e
- [#3770](https://github.com/MetaMask/metamask-mobile/pull/3770): [FIX] Delete wallet e2e
- [#3767](https://github.com/MetaMask/metamask-mobile/pull/3767): [FIX] Edit contact e2e
- [#3762](https://github.com/MetaMask/metamask-mobile/pull/3762): [ENHANCEMENT] Enhance auto-detection warning
- [#3618](https://github.com/MetaMask/metamask-mobile/pull/3618): [FIX] Modal view when adding wallet address to address book
- [#3724](https://github.com/MetaMask/metamask-mobile/pull/3724): [ENHANCEMENT] Update texts to use lock/unlock terminology
- [#3701](https://github.com/MetaMask/metamask-mobile/pull/3701): [FIX] Make selected option comes first in picker component on Android
- [#3752](https://github.com/MetaMask/metamask-mobile/pull/3752): [FIX] Fix OpenSea typo
- [#3548](https://github.com/MetaMask/metamask-mobile/pull/3548): [FIX] Fixes text field frame got cut off
- [#3690](https://github.com/MetaMask/metamask-mobile/pull/3690): [FIX] Revert svg crash

## [4.1.1]

### Uncategorized

- [3810](https://github.com/MetaMask/metamask-mobile/pull/3810) [FIX] Avalanche token crash

## [4.1.0]

### Uncategorized

- [#3741](https://github.com/MetaMask/metamask-mobile/pull/3741): [FIX] Potential error message from missing transactions details
- [#3738](https://github.com/MetaMask/metamask-mobile/pull/3738): [FIX] Error message for missing chain ID in deeplink
- [#3725](https://github.com/MetaMask/metamask-mobile/pull/3725): [FIX] Login decrypt bug
- [#3721](https://github.com/MetaMask/metamask-mobile/pull/3721): [FIX] Fixes deeplinks on Android 12 and other deeplinks minor fixes
- [#3691](https://github.com/MetaMask/metamask-mobile/pull/3691): [FIX] Limited number of lines for network names
- [#3650](https://github.com/MetaMask/metamask-mobile/pull/3650): [IMPROVEMENT] Handle network changes for incoming deeplink and qr code requests.
- [#3607](https://github.com/MetaMask/metamask-mobile/pull/3607): [FEATURE] Allow BSC, Polygon, Avalanche native and stable coins for on-ramp
- [#3573](https://github.com/MetaMask/metamask-mobile/pull/3573): [IMPROVEMENT] Code optimization, extract common code hooks usePrevious
- [#3593](https://github.com/MetaMask/metamask-mobile/pull/3593): [FIX] Line height is distributed unevenly when lineHeight <= fontSize
- [#3599](https://github.com/MetaMask/metamask-mobile/pull/3599): [FIX] Fix the input aligning on edit contact
- [#3562](https://github.com/MetaMask/metamask-mobile/pull/3562): [FIX] Removed sync with extension option in the settings view
- [#3664](https://github.com/MetaMask/metamask-mobile/pull/3664): [IMPROVEMENT] Scheme update for internal browser
- [#3558](https://github.com/MetaMask/metamask-mobile/pull/3558): [FIX] Fixes touch area of a close button and aligned the button
- [#3553](https://github.com/MetaMask/metamask-mobile/pull/3553): [FIX] Potential fix 'navigation.navigate' is undefined crashes reported on Sentry
- [#3538](https://github.com/MetaMask/metamask-mobile/pull/3538): [FIX] Fixes renderFromGwei related crashes
- [#3480](https://github.com/MetaMask/metamask-mobile/pull/3480): [IMPROVEMENT] Updated copy for drawer items to match extension
- [#3682](https://github.com/MetaMask/metamask-mobile/pull/3682): [IMPROVEMENT] Add ListItem storybook story
- [#3181](https://github.com/MetaMask/metamask-mobile/pull/3181): [IMPROVEMENT] Add client id to GasFeeController
- [#3461](https://github.com/MetaMask/metamask-mobile/pull/3461): [IMPROVEMENT] Clear the clipboard after the seed phrase is pasted
- [#3516](https://github.com/MetaMask/metamask-mobile/pull/3516): [IMPROVEMENT] Update App icons
- [#3676](https://github.com/MetaMask/metamask-mobile/pull/3676): [IMPROVEMENT] Documentation/webview debug instructions
- [#3374](https://github.com/MetaMask/metamask-mobile/pull/3374): [IMPROVEMENT] Storybook install, stories and guidelines
- [#3672](https://github.com/MetaMask/metamask-mobile/pull/3672): [IMPROVEMENT] Bump simple-get from 2.8.1 to 4.0.1

## [4.0.1]

### Fixed

- [#3658](https://github.com/MetaMask/metamask-mobile/pull/3658): [HOTFIX] 4.0.1 - BN crash and NFT Improvement

## [4.0.0]

### Uncategorized

- [#3509](https://github.com/MetaMask/metamask-mobile/pull/3509): [IMPROVEMENT] Upgrade to React Native 0.66.3
- [#3623](https://github.com/MetaMask/metamask-mobile/pull/3623): [FIX] Fix swaps slider button re-rendering
- [#3481](https://github.com/MetaMask/metamask-mobile/pull/3481): [FIX] Fix confirm button disabled on txn confirmation
- [#3495](https://github.com/MetaMask/metamask-mobile/pull/3495): [IMPROVEMENT] Reduce png file image weight using TinyPng cli tool

## [3.8.0]

### Uncategorized

- [#3457](https://github.com/MetaMask/metamask-mobile/pull/3457): [FEAT] User review prompt
- [#3465](https://github.com/MetaMask/metamask-mobile/pull/3465): [FIX] 3464 fix login bug
- [#3430](https://github.com/MetaMask/metamask-mobile/pull/3430): [IMPROVEMENT] Add better initial state for swaps loading tokens
- [#3387](https://github.com/MetaMask/metamask-mobile/pull/3387): [FIX] Minor NFTs bugs
- [#3458](https://github.com/MetaMask/metamask-mobile/pull/3458): [FIX] Collectibles Autodetection
- [#3459](https://github.com/MetaMask/metamask-mobile/pull/3459): [FIX] Android Keyboard Text Entry
- [#3452](https://github.com/MetaMask/metamask-mobile/pull/3452): [FIX] `this.existingTxId` always false
- [#3423](https://github.com/MetaMask/metamask-mobile/pull/3423): [IMPROVEMENT] Android APK Size, App Load Time
- [#3443](https://github.com/MetaMask/metamask-mobile/pull/3443): [UPDATE] Disable Sync with Extension

## [3.7.0]

### Uncategorized

- [#3405](https://github.com/MetaMask/metamask-mobile/pull/3405): [FIX] Remove Metric Opt In event
- [#3412](https://github.com/MetaMask/metamask-mobile/pull/3412): [UPGRADE] Android SDK and dependencies to support SDK 30
- [#3371](https://github.com/MetaMask/metamask-mobile/pull/3371): [FIX] iOS FaceID Deny Handler
- [#3346](https://github.com/MetaMask/metamask-mobile/pull/3346): [FEATURE] Mobile Vault Decryptor Functionality
- [#3397](https://github.com/MetaMask/metamask-mobile/pull/3397): [IMPROVEMENT] Enable sentry performance
- [#3394](https://github.com/MetaMask/metamask-mobile/pull/3394): [FIX] Persistence of analytics preference
- [#3350](https://github.com/MetaMask/metamask-mobile/pull/3350): [FEATURE] WalletConnect support signTypedData_v4 and use signTypedData_v3 by default
- [#3144](https://github.com/MetaMask/metamask-mobile/pull/3144): [IMPROVEMENT] use empty string quotes for anonymous id
- [#3413](https://github.com/MetaMask/metamask-mobile/pull/3413): [FIX] Pin git dependencies to SHA to be safe
- [#3392](https://github.com/MetaMask/metamask-mobile/pull/3392): [FIX] Allow sharp
- [#3367](https://github.com/MetaMask/metamask-mobile/pull/3367): [FEATURE] Add LavaMoat Allow-Scripts
- [#3378](https://github.com/MetaMask/metamask-mobile/pull/3378): [FIX] patch validator via resolution
- [#3357](https://github.com/MetaMask/metamask-mobile/pull/3357): [FIX] 404 dead links in readme

## [3.6.0]

### Uncategorized

- [#3301](https://github.com/MetaMask/metamask-mobile/pull/3301): [FEATURE] ERC-1155 and custom network support
- [#3343](https://github.com/MetaMask/metamask-mobile/pull/3343): [IMPROVEMENT] Add IPFS support for NFTs
- [#3352](https://github.com/MetaMask/metamask-mobile/pull/3352): [FIX] Fix rendering issue when viewing data on transaction review screen
- [#3348](https://github.com/MetaMask/metamask-mobile/pull/3348): [IMPROVEMENT] Add webview deeplink support for Android
- [#3290](https://github.com/MetaMask/metamask-mobile/pull/3290): [FIX] Fix lost data when using wallet connect for ERC20 token transaction

## [3.5.0]

### Uncategorized

- [#3340](https://github.com/MetaMask/metamask-mobile/pull/3340): [IMPROVEMENT] Reduce persisted data
- [#3330](https://github.com/MetaMask/metamask-mobile/pull/3330): [IMPROVEMENT] Refactor EngineService
- [#3325](https://github.com/MetaMask/metamask-mobile/pull/3325): [IMPROVEMENT] Isolate persisted data
- [#3314](https://github.com/MetaMask/metamask-mobile/pull/3314): [IMPROVEMENT] Update copy for token ID in collectible transaction
- [#3319](https://github.com/MetaMask/metamask-mobile/pull/3319): [IMPROVEMENT] Analytics - Track "Account Switcher" events
- [#3297](https://github.com/MetaMask/metamask-mobile/pull/3297): [IMPROVEMENT] Add IPFS support for tokens
- [#3298](https://github.com/MetaMask/metamask-mobile/pull/3298): [FEATURE] Move CI to GitHub Actions
- [#3302](https://github.com/MetaMask/metamask-mobile/pull/3302): [REFACTOR] Refactor AddCustomCollectible component
- [#3292](https://github.com/MetaMask/metamask-mobile/pull/3292): [FEATURE] Add analytics for android keystore
- [#3295](https://github.com/MetaMask/metamask-mobile/pull/3295): [FIX] Fix approval transaction getting mistakenly treated as a swap transaction
- [#3265](https://github.com/MetaMask/metamask-mobile/pull/3265): [FIX] Populate block number
- [#3294](https://github.com/MetaMask/metamask-mobile/pull/3294): [FIX] Fix empty text input on Android
- [#3293](https://github.com/MetaMask/metamask-mobile/pull/3293): [FIX] Fix Detox assertion test
- [#3255](https://github.com/MetaMask/metamask-mobile/pull/3255): [IMPROVEMENT] Detox Page Object Model
- [#3272](https://github.com/MetaMask/metamask-mobile/pull/3272): [IMPROVEMENT] Update recommended node.js version
- [#3271](https://github.com/MetaMask/metamask-mobile/pull/3271): [FIX] Update React Native dependecy links in README.md

## [3.4.1]

### Uncategorized

- [#3260](https://github.com/MetaMask/metamask-mobile/pull/3260): [FIX] Turn off token detection by default
- [#3261](https://github.com/MetaMask/metamask-mobile/pull/3261): [FIX] Fix blank screen on fresh start
- [#3254](https://github.com/MetaMask/metamask-mobile/pull/3254): [IMPROVEMENT] Isolate LICENSE file
- [#3251](https://github.com/MetaMask/metamask-mobile/pull/3251): [IMPROVEMENT] Enable CLA signing
- [#3146](https://github.com/MetaMask/metamask-mobile/pull/3146): [IMPROVEMENT] Stabilizing Detox Tests
- [#3247](https://github.com/MetaMask/metamask-mobile/pull/3247): [IMPROVEMENT] Add timeout to redux-persist
- [#3243](https://github.com/MetaMask/metamask-mobile/pull/3243): [FIX] Fix decode transfer data
- [#3221](https://github.com/MetaMask/metamask-mobile/pull/3221): [IMPROVEMENT] Replacing swaps source image to include new 1inch logo.
- [#3203](https://github.com/MetaMask/metamask-mobile/pull/3203): [FIX] Disable confirm button when transaction is submitted
- [#3211](https://github.com/MetaMask/metamask-mobile/pull/3211): [FIX] Reflect network change on Browser
- [#3207](https://github.com/MetaMask/metamask-mobile/pull/3207): [FIX] Fix rendering SVGs on Android release mode
- [#3210](https://github.com/MetaMask/metamask-mobile/pull/3210): [IMPROVEMENT] Avoid destructuring error when checking swaps liveness
- [#3173](https://github.com/MetaMask/metamask-mobile/pull/3173): [FIX] Lock contract metadata version to v1.30.0
- [#3106](https://github.com/MetaMask/metamask-mobile/pull/3106): [FEATURE] Enable variables for speed up and cancel transactions
- [#3155](https://github.com/MetaMask/metamask-mobile/pull/3155): [IMPROVEMENT] Improve transaction state management for custom networks
- [#3164](https://github.com/MetaMask/metamask-mobile/pull/3164): [FIX] Support Apple Pay on iOS 15
- [#3152](https://github.com/MetaMask/metamask-mobile/pull/3152): [FIX] Fix remove token crasher
- [#3133](https://github.com/MetaMask/metamask-mobile/pull/3133): [FIX] Fix reload when switching networks on the browser
- [#3130](https://github.com/MetaMask/metamask-mobile/pull/3130): [IMPROVEMENT] Re-add opt in event
- [#3131](https://github.com/MetaMask/metamask-mobile/pull/3131): [IMPROVEMENT] Add missing browser event
- [#3153](https://github.com/MetaMask/metamask-mobile/pull/3153): [FIX] Fix inject favourites homepage
- [#3129](https://github.com/MetaMask/metamask-mobile/pull/3129): [FIX] Parse transaction data correctly
- [#2901](https://github.com/MetaMask/metamask-mobile/pull/2901): [FEATURE] Auto token detection on ethereum mainnet
- [#2994](https://github.com/MetaMask/metamask-mobile/pull/2994): [IMPROVEMENT] Analytics: Add Wallet Security and moving opt-in first in the flow
- [#3121](https://github.com/MetaMask/metamask-mobile/pull/3121): [FIX] Analytics + Icon fixes
- [#3117](https://github.com/MetaMask/metamask-mobile/pull/3117): [FIX] Moved the newTab method to the componentdidmount
- [#3115](https://github.com/MetaMask/metamask-mobile/pull/3115): [IMPROVEMENT] Update README.md

## [3.3.0]

### Uncategorized

- [#3099](https://github.com/MetaMask/metamask-mobile/pull/3099): [FEATURE] Transaction state improvement
- [UPGRADE] react-native-webview 11.0.2 -> 11.13.0
- [#3101](https://github.com/MetaMask/metamask-mobile/pull/3101): [UPDATE] update swaps-controller and send clientId on fetchSwapsFeatureLiveness
- [#2977](https://github.com/MetaMask/metamask-mobile/pull/2977): [FIX] Fix undefined values in CustomGas component
- [#3104](https://github.com/MetaMask/metamask-mobile/pull/3104): [FEATURE] Add browser analytics
- [#3066](https://github.com/MetaMask/metamask-mobile/pull/3066): [UPGRADE] Redux and tests
- [#2866](https://github.com/MetaMask/metamask-mobile/pull/2866): [FIX] Bug in token balance
- [#3100](https://github.com/MetaMask/metamask-mobile/pull/3100): [FIX] Catch undefined navigate on buy eth
- [#3088](https://github.com/MetaMask/metamask-mobile/pull/3088): [UPDATE] Add typescript eslint from metamask
- [#3084](https://github.com/MetaMask/metamask-mobile/pull/3084): [UPGRADE] Bump eth-url-parser from 1.0.2 to 1.0.4
- [#2852](https://github.com/MetaMask/metamask-mobile/pull/2852): [UPDATE] Feature/improve warning eth sign
- [#3023](https://github.com/MetaMask/metamask-mobile/pull/3023): [FEATURE] Add support for wallet_switchEthereumChain
- [#3068](https://github.com/MetaMask/metamask-mobile/pull/3068): [UPGRADE] Bump @react-navigation/compat from 5.3.15 to 5.3.20
- [#3080](https://github.com/MetaMask/metamask-mobile/pull/3080): [UPDATE] Update custom token copy
- [#3069](https://github.com/MetaMask/metamask-mobile/pull/3069): [UPGRADE] Bump @react-native-community/cookies from 4.0.1 to 5.0.1
- [#2931](https://github.com/MetaMask/metamask-mobile/pull/2931): [UPGRADE] Bump regenerator-runtime from 0.13.1 to 0.13.9
- [#2526](https://github.com/MetaMask/metamask-mobile/pull/2526): [UPGRADE] Bump redux-persist from 5.10.0 to 6.0.0
- [#3028](https://github.com/MetaMask/metamask-mobile/pull/3028): [FEATURE] Update Recents
- [#3057](https://github.com/MetaMask/metamask-mobile/pull/3057): [UPDATE] Remove SwapsLiveness checks for non supported networks

## [3.2.0]

### Uncategorized

- [#3046](https://github.com/MetaMask/metamask-mobile/pull/3046): [FIX] Token Transfer to address
- [#2878](https://github.com/MetaMask/metamask-mobile/pull/2878): [2783] Change default account name for ENS reversed-resolved name
- [#3029](https://github.com/MetaMask/metamask-mobile/pull/3029): [FIX] Video Subtitles Not Loading Properly
- [#3038](https://github.com/MetaMask/metamask-mobile/pull/3038): [FIX] increase the heap size to help mitigate the out of memory issue on Android
- [#3013](https://github.com/MetaMask/metamask-mobile/pull/3013): Swaps V2 Integration
- [#2718](https://github.com/MetaMask/metamask-mobile/pull/2718): Switched to sslip.io instead of xip.io

## [3.1.0]

### Uncategorized

- [#3026](https://github.com/MetaMask/metamask-mobile/pull/3026): [FIX] Fix edit button
- [#2981](https://github.com/MetaMask/metamask-mobile/pull/2981): [FIX] Delete Message
- [#3017](https://github.com/MetaMask/metamask-mobile/pull/3017): [FIX] Fix deep links bug related to branch updates
- [#2972](https://github.com/MetaMask/metamask-mobile/pull/2972): [FEATURE] - Storage Limit - Reduce Txs Being Stored
- [#2999](https://github.com/MetaMask/metamask-mobile/pull/2999): [FIX] Account for `txParams.data` when we sync
- [#2961](https://github.com/MetaMask/metamask-mobile/pull/2961): [FIX] GH Action Permission for Bump-Version
- [#2980](https://github.com/MetaMask/metamask-mobile/pull/2980): [FIX] Fix header layout
- [#2907](https://github.com/MetaMask/metamask-mobile/pull/2907): [FIX] Remove extra top padding on send flow
- [#2808](https://github.com/MetaMask/metamask-mobile/pull/2808): [FIX] Issue #2763
- [#2956](https://github.com/MetaMask/metamask-mobile/pull/2956): [UPGRADE] walletconnect
- [#2996](https://github.com/MetaMask/metamask-mobile/pull/2996): [FIX] Add TransakWebview mediaPlayback props for KYC
- [#2804](https://github.com/MetaMask/metamask-mobile/pull/2804): [UPGRADE] Branch updates
- [#2813](https://github.com/MetaMask/metamask-mobile/pull/2813): [FEATURE] Secret Recovery Phrase Video Subtitles
- [#2893](https://github.com/MetaMask/metamask-mobile/pull/2893): [FIX] Address bar icon
- [#2973](https://github.com/MetaMask/metamask-mobile/pull/2973): [FEATURE] On-Ramp: Add on-ramp analytics

## [3.0.1]

### Uncategorized

- Patch to fix Wyre and Transak

## [3.0.0]

### Uncategorized

- [#2959](https://github.com/MetaMask/metamask-mobile/pull/2959): UI fixes
- [#2957](https://github.com/MetaMask/metamask-mobile/pull/2957): Fix gas information info modal on swaps
- [#2955](https://github.com/MetaMask/metamask-mobile/pull/2955): [EIP1559] Improve time estimates
- [#2952](https://github.com/MetaMask/metamask-mobile/pull/2952): Bump controllers to v14.0.2
- [#2798](https://github.com/MetaMask/metamask-mobile/pull/2798): [EIP1559] Base for Edit Gas Fee screen
- [#2943](https://github.com/MetaMask/metamask-mobile/pull/2943): [FIX] Fix typos when adding TokensController & CollectiblesController
- [#2795](https://github.com/MetaMask/metamask-mobile/pull/2795): Swaps: Use quotes conversion rate
- [#2909](https://github.com/MetaMask/metamask-mobile/pull/2909): Account for speedUp in transaction list
- [#2729](https://github.com/MetaMask/metamask-mobile/pull/2729): Swaps: Add custom token flow - search by address and get it imported to your wallet
- [#2863](https://github.com/MetaMask/metamask-mobile/pull/2863): Allow custom network fiat values
- [#2881](https://github.com/MetaMask/metamask-mobile/pull/2881): Split AssetsController into TokensController and CollectiblesController
- [#2934](https://github.com/MetaMask/metamask-mobile/pull/2934): Removed sentry debug requirement for non release builds
- [#2889](https://github.com/MetaMask/metamask-mobile/pull/2889): Feature/bitrise
- [#2890](https://github.com/MetaMask/metamask-mobile/pull/2890): Bump addressable from 2.7.0 to 2.8.0 in /ios

## [2.6.0]

### Uncategorized

- [#2865](https://github.com/MetaMask/metamask-mobile/pull/2865): Added support for custom network gas estimates
- [#2854](https://github.com/MetaMask/metamask-mobile/pull/2854): Fix time formatting on transactions
- [#2883](https://github.com/MetaMask/metamask-mobile/pull/2883): Swaps: Fix isZero undefined error
- [#2731](https://github.com/MetaMask/metamask-mobile/pull/2731): Improvement/react navigation upgrade 5
- [#2709](https://github.com/MetaMask/metamask-mobile/pull/2709): Remove Picker deprecation warning

## [2.5.0]

### Uncategorized

- [#2809](https://github.com/MetaMask/metamask-mobile/pull/2809): Optional chaining dollarBalance
- [#2776](https://github.com/MetaMask/metamask-mobile/pull/2776): Fix: empty state when using fiat on non-mainnet transactions
- [#2777](https://github.com/MetaMask/metamask-mobile/pull/2777): Add isInteraction: false
- [#2759](https://github.com/MetaMask/metamask-mobile/pull/2759): Use MediaPlayer
- [#2748](https://github.com/MetaMask/metamask-mobile/pull/2748): v2.5.0
- [#2757](https://github.com/MetaMask/metamask-mobile/pull/2757): Circleci fix
- [#2746](https://github.com/MetaMask/metamask-mobile/pull/2746): bugfix/notification visibility
- [#2749](https://github.com/MetaMask/metamask-mobile/pull/2749): @metamask/controllers@10.1.0
- [#2702](https://github.com/MetaMask/metamask-mobile/pull/2702): Swaps: Update Market price unavailable and Price impact text
- [#2701](https://github.com/MetaMask/metamask-mobile/pull/2701): Swaps: Allow every token on user wallet to be swapped
- [#2617](https://github.com/MetaMask/metamask-mobile/pull/2617): On-Ramp: Refactor and Wyre countries
- [#2611](https://github.com/MetaMask/metamask-mobile/pull/2611): Educate gas fees
- [#2738](https://github.com/MetaMask/metamask-mobile/pull/2738): Feature/simplify custom gas
- [#2741](https://github.com/MetaMask/metamask-mobile/pull/2741): bugfix/notifications reducer
- [#2626](https://github.com/MetaMask/metamask-mobile/pull/2626): @metamask/mobile-provider@2.1.0
- [#2706](https://github.com/MetaMask/metamask-mobile/pull/2706): make null conversionrate safe
- [#2703](https://github.com/MetaMask/metamask-mobile/pull/2703): Convert token id to hexadecimal for collectible transfer
- [#2742](https://github.com/MetaMask/metamask-mobile/pull/2742): Bugfix/fix ws resolution
- [#2713](https://github.com/MetaMask/metamask-mobile/pull/2713): Feature/bitrise circle ci hybrid
- [#2711](https://github.com/MetaMask/metamask-mobile/pull/2711): Feature/use same media player
- [#2728](https://github.com/MetaMask/metamask-mobile/pull/2728): Add iconUrls to allowed list of keys
- [#2737](https://github.com/MetaMask/metamask-mobile/pull/2737): Add resolution for ws to address security vuln
- [#2727](https://github.com/MetaMask/metamask-mobile/pull/2727): Add missing required prop in tests

## [2.4.0]

### Uncategorized

- [#2618](https://github.com/MetaMask/metamask-mobile/pull/2618): Collectibles experience
- [#2698](https://github.com/MetaMask/metamask-mobile/pull/2698): bugfix: navigation routeName is null
- [#2692](https://github.com/MetaMask/metamask-mobile/pull/2692): Fix custom gas crash
- [#2649](https://github.com/MetaMask/metamask-mobile/pull/2649): Migrate to new CurrencyRateController
- [#2697](https://github.com/MetaMask/metamask-mobile/pull/2697): Set ignoreSilentSwitch and reset the video onEnd
- [#2691](https://github.com/MetaMask/metamask-mobile/pull/2691): Feature/update casing secret recovery phrase
- [#2694](https://github.com/MetaMask/metamask-mobile/pull/2694): Swaps: Add chainId to swaps analytics
- [#2687](https://github.com/MetaMask/metamask-mobile/pull/2687): bufix: stuck notification
- [#2689](https://github.com/MetaMask/metamask-mobile/pull/2689): Fix "use max" in send flow
- [#2672](https://github.com/MetaMask/metamask-mobile/pull/2672): Fix xcode upgrade
- [#2640](https://github.com/MetaMask/metamask-mobile/pull/2640): Swaps: Add name from metadata to swaps tokens
- [#2628](https://github.com/MetaMask/metamask-mobile/pull/2628): Feature/use toLowerCaseCompare

## [2.3.0]

### Uncategorized

- [#2674](https://github.com/MetaMask/metamask-mobile/pull/2674): Fix deploy contract and create token testnets
- [#2669](https://github.com/MetaMask/metamask-mobile/pull/2669): Key off accounts
- [#2670](https://github.com/MetaMask/metamask-mobile/pull/2670): Bump hosted-git-info from 2.8.8 to 2.8.9
- [#2667](https://github.com/MetaMask/metamask-mobile/pull/2667): added export of iOS artifacts
- [#2664](https://github.com/MetaMask/metamask-mobile/pull/2664): updated version code and change logs
- [#2663](https://github.com/MetaMask/metamask-mobile/pull/2663): Load video over the network
- [#2656](https://github.com/MetaMask/metamask-mobile/pull/2656): Fix Balance undefined for deeplink payment requests
- [#2657](https://github.com/MetaMask/metamask-mobile/pull/2657): Fix missing seed phrase updates
- [#2645](https://github.com/MetaMask/metamask-mobile/pull/2645): Safe navbar for iphone 12
- [#2643](https://github.com/MetaMask/metamask-mobile/pull/2643): Fix undefined is not an object identities[selectedAddress].importTime
- [#2639](https://github.com/MetaMask/metamask-mobile/pull/2639): Exclude native asset from hiding when balance is zero
- [#2631](https://github.com/MetaMask/metamask-mobile/pull/2631): updated change log
- [#2633](https://github.com/MetaMask/metamask-mobile/pull/2633): Address yarn audit
- [#2625](https://github.com/MetaMask/metamask-mobile/pull/2625): Fix isZero is undefined
- [#2444](https://github.com/MetaMask/metamask-mobile/pull/2444): Implement 'hide zero balance token' setting for token balances on home screen
- [#2621](https://github.com/MetaMask/metamask-mobile/pull/2621): RC v2.3.0
- [#2605](https://github.com/MetaMask/metamask-mobile/pull/2605): Feature/update seed phrase wording
- [#2564](https://github.com/MetaMask/metamask-mobile/pull/2564): Improve rpc errors logging and removing user rejected errors
- [#2556](https://github.com/MetaMask/metamask-mobile/pull/2556): Fix/respect custom spend limit on dapp approve modal
- [#2614](https://github.com/MetaMask/metamask-mobile/pull/2614): updated lock files
- [#2586](https://github.com/MetaMask/metamask-mobile/pull/2586): Upgrade swaps-controller v4
- [#2613](https://github.com/MetaMask/metamask-mobile/pull/2613): remove typo
- [#2603](https://github.com/MetaMask/metamask-mobile/pull/2603): Bugfix/android anr
- [#2565](https://github.com/MetaMask/metamask-mobile/pull/2565): This will fix sentry errors with no title by using the extra info as a title
- [#2552](https://github.com/MetaMask/metamask-mobile/pull/2552): Upgrade wallet connect
- [#2607](https://github.com/MetaMask/metamask-mobile/pull/2607): Detox/Fix failing tests
- [#2604](https://github.com/MetaMask/metamask-mobile/pull/2604): Don't hide url modal on emulator
- [#2529](https://github.com/MetaMask/metamask-mobile/pull/2529): Move some errors to analytics instead of sentry
- [#2446](https://github.com/MetaMask/metamask-mobile/pull/2446): Add New Zealand Dollar to currency options
- [#2464](https://github.com/MetaMask/metamask-mobile/pull/2464): Feature/confusables
- [#2610](https://github.com/MetaMask/metamask-mobile/pull/2610): fix typeface on login text field
- [#2416](https://github.com/MetaMask/metamask-mobile/pull/2416): Replace controller context
- [#2590](https://github.com/MetaMask/metamask-mobile/pull/2590): Fix adding custom token in custom network
- [#2470](https://github.com/MetaMask/metamask-mobile/pull/2470): only add custom tokens if not in mainnet
- [#2524](https://github.com/MetaMask/metamask-mobile/pull/2524): Address yarn lints
- [#2588](https://github.com/MetaMask/metamask-mobile/pull/2588): Upgrade .nvmrc to node v14
- [#2514](https://github.com/MetaMask/metamask-mobile/pull/2514): Swaps: Add cache thresholds configuration
- [#2468](https://github.com/MetaMask/metamask-mobile/pull/2468): Swaps: BSC Support
- [#2539](https://github.com/MetaMask/metamask-mobile/pull/2539): Use node 14
- [#2568](https://github.com/MetaMask/metamask-mobile/pull/2568): resolve isENS without case sensitivity (#2545)

## [2.2.0]

### Uncategorized

- [#2547](https://github.com/MetaMask/metamask-mobile/pull/2547): Include decimalsToShow in balanceToFiatNumber
- [#2554](https://github.com/MetaMask/metamask-mobile/pull/2554): Bug fix/sync import time
- [#2546](https://github.com/MetaMask/metamask-mobile/pull/2546): Fix analytics try catch
- [#2543](https://github.com/MetaMask/metamask-mobile/pull/2543): Only get nonce from the network if the feature is enabled
- [#2460](https://github.com/MetaMask/metamask-mobile/pull/2460): Feature/tx local state logs
- [#2540](https://github.com/MetaMask/metamask-mobile/pull/2540): bump v2.1.2
- [#2538](https://github.com/MetaMask/metamask-mobile/pull/2538): fix/connection change handler
- [#2375](https://github.com/MetaMask/metamask-mobile/pull/2375): Style updates
- [#2536](https://github.com/MetaMask/metamask-mobile/pull/2536): Change Send Feedback to Request a Feature and update link
- [#2485](https://github.com/MetaMask/metamask-mobile/pull/2485): Fix notification so it doesn't block terms + conditions
- [#2469](https://github.com/MetaMask/metamask-mobile/pull/2469): Bug/persists old account names
- [#2534](https://github.com/MetaMask/metamask-mobile/pull/2534): Fix typo
- [#2373](https://github.com/MetaMask/metamask-mobile/pull/2373): use contract metadata version from package
- [#2520](https://github.com/MetaMask/metamask-mobile/pull/2520): Check infura availability
- [#2371](https://github.com/MetaMask/metamask-mobile/pull/2371): Feature/custom nonce
- [#2521](https://github.com/MetaMask/metamask-mobile/pull/2521): Bump v2.1.1
- [#2493](https://github.com/MetaMask/metamask-mobile/pull/2493): rename master to main
- [#2447](https://github.com/MetaMask/metamask-mobile/pull/2447): Bump vm-browserify from 0.0.4 to 1.1.2
- [#2501](https://github.com/MetaMask/metamask-mobile/pull/2501): Bump jest-serializer from 24.4.0 to 26.6.2
- [#2499](https://github.com/MetaMask/metamask-mobile/pull/2499): Bump react-native-share from 3.3.2 to 5.2.2
- [#2411](https://github.com/MetaMask/metamask-mobile/pull/2411): Bump json-rpc-middleware-stream from 2.1.1 to 3.0.0
- [#2406](https://github.com/MetaMask/metamask-mobile/pull/2406): Bump eslint-plugin-prettier from 3.3.0 to 3.3.1
- [#2403](https://github.com/MetaMask/metamask-mobile/pull/2403): Bump babel-eslint from 10.0.3 to 10.1.0
- [#2381](https://github.com/MetaMask/metamask-mobile/pull/2381): Display correct number of decimals for 'usd' fiat

## [2.1.3]

### Uncategorized

- [#2548](https://github.com/MetaMask/metamask-mobile/pull/2548): Hotfix analytics try catch

## [2.1.2]

### Uncategorized

- [#2538](https://github.com/MetaMask/metamask-mobile/pull/2538): fix/connection change handler

## [2.1.1]

### Uncategorized

- [#2520](https://github.com/MetaMask/metamask-mobile/pull/2520): Check provider status

## [2.1.0]

### Uncategorized

- [#2487](https://github.com/MetaMask/metamask-mobile/pull/2487): Fix/analytics v1 priority1
- [#2456](https://github.com/MetaMask/metamask-mobile/pull/2456): Analytics v2 (priority 1)
- [#2408](https://github.com/MetaMask/metamask-mobile/pull/2408): Fix/gas estimations
- [#2479](https://github.com/MetaMask/metamask-mobile/pull/2479): remove controllers tgz
- [#2441](https://github.com/MetaMask/metamask-mobile/pull/2441): Improvement/assets by chainid
- [#2442](https://github.com/MetaMask/metamask-mobile/pull/2442): Improvement/chain ticker
- [#2372](https://github.com/MetaMask/metamask-mobile/pull/2372): Remove instapay
- [#2467](https://github.com/MetaMask/metamask-mobile/pull/2467): Fix iOS build
- [#2084](https://github.com/MetaMask/metamask-mobile/pull/2084): Migrate from AsyncStorage to FileStorage
- [#2443](https://github.com/MetaMask/metamask-mobile/pull/2443): Update terms and privacy links
- [#2318](https://github.com/MetaMask/metamask-mobile/pull/2318): Add custom network rpc API
- [#2306](https://github.com/MetaMask/metamask-mobile/pull/2306): Feature/high gas warn
- [#2463](https://github.com/MetaMask/metamask-mobile/pull/2463): update pods
- [#2448](https://github.com/MetaMask/metamask-mobile/pull/2448): Add resolution for netmask
- [#2445](https://github.com/MetaMask/metamask-mobile/pull/2445): Add resolution for y18n
- [#2404](https://github.com/MetaMask/metamask-mobile/pull/2404): Bump react-native-branch from 5.0.0 to 5.0.1
- [#2439](https://github.com/MetaMask/metamask-mobile/pull/2439): json-rpc-engine@6.1.0
- [#2413](https://github.com/MetaMask/metamask-mobile/pull/2413): remove "git add" per husky warning
- [#2431](https://github.com/MetaMask/metamask-mobile/pull/2431): Update BN import

## [2.0.1]

### Uncategorized

- [#2430](https://github.com/MetaMask/metamask-mobile/pull/2430): Fix/send to style
- [#2426](https://github.com/MetaMask/metamask-mobile/pull/2426): bugfix/allow seedphrases when locked
- [#2422](https://github.com/MetaMask/metamask-mobile/pull/2422): bugfix/delete wallet with random password
- [#2417](https://github.com/MetaMask/metamask-mobile/pull/2417): Bugfix/sync improvements
- [#2418](https://github.com/MetaMask/metamask-mobile/pull/2418): V2 fixes
- [#2156](https://github.com/MetaMask/metamask-mobile/pull/2156): Translations with update script

## [2.0.0]

### Uncategorized

- [#2383](https://github.com/MetaMask/metamask-mobile/pull/2383): swaps/received destination amount
- [#2379](https://github.com/MetaMask/metamask-mobile/pull/2379): Swaps/fix decode tx render amounts
- [#2377](https://github.com/MetaMask/metamask-mobile/pull/2377): bugfix/dont modify local transactions
- [#2376](https://github.com/MetaMask/metamask-mobile/pull/2376): Swaps: Sort quotes by asc fees when destination amount is the same
- [#2370](https://github.com/MetaMask/metamask-mobile/pull/2370): bugfix/swaps bugs
- [#2321](https://github.com/MetaMask/metamask-mobile/pull/2321): Swaps v1
- [#2365](https://github.com/MetaMask/metamask-mobile/pull/2365): bugfix/transactions filtering
- [#2253](https://github.com/MetaMask/metamask-mobile/pull/2253): Use Etherscan API for incoming token transactions
- [#2245](https://github.com/MetaMask/metamask-mobile/pull/2245): Fix transaction history
- [#2363](https://github.com/MetaMask/metamask-mobile/pull/2363): fix: `poll` after notification don't `refresh`
- [#2344](https://github.com/MetaMask/metamask-mobile/pull/2344): Sync with extension chain id
- [#2269](https://github.com/MetaMask/metamask-mobile/pull/2269): @metamask/contract-metadata@1.23.0
- [#2357](https://github.com/MetaMask/metamask-mobile/pull/2357): Update `elliptic` to v6.5.4 to address security advisory
- [#2247](https://github.com/MetaMask/metamask-mobile/pull/2247): Provide chainId correctly
- [#2196](https://github.com/MetaMask/metamask-mobile/pull/2196): improvement/handle provider updates
- [#2157](https://github.com/MetaMask/metamask-mobile/pull/2157): Swaps: Alpha 2
- [#2272](https://github.com/MetaMask/metamask-mobile/pull/2272): Update twitter handle in README
- [#2265](https://github.com/MetaMask/metamask-mobile/pull/2265): Fix input state

## [1.0.11]

### Uncategorized

- [#2257](https://github.com/MetaMask/metamask-mobile/pull/2257): bugfix/use bignumber for transfer deeplinks
- [#2256](https://github.com/MetaMask/metamask-mobile/pull/2256): Fix account list scroll
- [#2243](https://github.com/MetaMask/metamask-mobile/pull/2243): TransactionController from controllers
- [#2240](https://github.com/MetaMask/metamask-mobile/pull/2240): Fix circleci apk
- [#2176](https://github.com/MetaMask/metamask-mobile/pull/2176): Feature/warn when replacing
- [#2233](https://github.com/MetaMask/metamask-mobile/pull/2233): contract metadata images bump
- [#2148](https://github.com/MetaMask/metamask-mobile/pull/2148): Handle `balanceError` case
- [#2228](https://github.com/MetaMask/metamask-mobile/pull/2228): Remove best deals badge from WYRE transfers.
- [#2217](https://github.com/MetaMask/metamask-mobile/pull/2217): @metamask/controllers@6.0.1
- [#2180](https://github.com/MetaMask/metamask-mobile/pull/2180): Fix cloudflare redirects
- [#2203](https://github.com/MetaMask/metamask-mobile/pull/2203): Update @metamask/contract-metadata
- [#2078](https://github.com/MetaMask/metamask-mobile/pull/2078): React Native update to 0.63
- [#2204](https://github.com/MetaMask/metamask-mobile/pull/2204): Create dependabot.yml
- [#2193](https://github.com/MetaMask/metamask-mobile/pull/2193): Fix "Text strings must be rendered within a <Text> component"
- [#2191](https://github.com/MetaMask/metamask-mobile/pull/2191): Use navigate instead of push
- [#2174](https://github.com/MetaMask/metamask-mobile/pull/2174): Add fiat on ramp modal close button extra hit area
- [#2104](https://github.com/MetaMask/metamask-mobile/pull/2104): bugfix/token tx ui amount parsing
- [#2166](https://github.com/MetaMask/metamask-mobile/pull/2166): v1.0.10
- [#2142](https://github.com/MetaMask/metamask-mobile/pull/2142): Display boolean values when signing typed data
- [#2079](https://github.com/MetaMask/metamask-mobile/pull/2079): bugfix/tx to contract validation
- [#2103](https://github.com/MetaMask/metamask-mobile/pull/2103): bugfix/erc20 allowance ui
- [#2158](https://github.com/MetaMask/metamask-mobile/pull/2158): engine swaps flag
- [#2060](https://github.com/MetaMask/metamask-mobile/pull/2060): MetaSwaps Alpha
- [#2142](https://github.com/MetaMask/metamask-mobile/pull/2142): Display boolean values when signing typed data

## [1.0.10]

### Uncategorized

- [#2164](https://github.com/MetaMask/metamask-mobile/pull/2164): Initialize NetworkController.provider with chainId (#2164)
- [#2161](https://github.com/MetaMask/metamask-mobile/pull/2161): chainid migration (#2161)

## [1.0.9]

### Uncategorized

- [#2149](https://github.com/MetaMask/metamask-mobile/pull/2149): update tests for new logic
- [#2145](https://github.com/MetaMask/metamask-mobile/pull/2145): Add missing brew installation steps
- [#2146](https://github.com/MetaMask/metamask-mobile/pull/2146): @metamask/mobile-provider@2.0.1
- [#2144](https://github.com/MetaMask/metamask-mobile/pull/2144): @walletconnect@1.3.4
- [#2143](https://github.com/MetaMask/metamask-mobile/pull/2143): Fix alert from iframes
- [#2134](https://github.com/MetaMask/metamask-mobile/pull/2134): Update podfile (#2134)
- [#2131](https://github.com/MetaMask/metamask-mobile/pull/2131): controllers v6.0.0 (#2131)
- [#2120](https://github.com/MetaMask/metamask-mobile/pull/2120): bugfix/accounts undefined (#2120)
- [#1987](https://github.com/MetaMask/metamask-mobile/pull/1987): Replace public config with rpc (#1987)
- [#2070](https://github.com/MetaMask/metamask-mobile/pull/2070): Fix android injection (#2070)
- [#2109](https://github.com/MetaMask/metamask-mobile/pull/2109): Remove support email (#2109)
- [#2044](https://github.com/MetaMask/metamask-mobile/pull/2044): Remove sync with extension from settings (#2044)
- [#2083](https://github.com/MetaMask/metamask-mobile/pull/2083): Improvement/gas estimations (#2083)
- [#2076](https://github.com/MetaMask/metamask-mobile/pull/2076): Feature/make insufficient fee descriptive (#2076)
- [#2099](https://github.com/MetaMask/metamask-mobile/pull/2099): Bump axios from 0.19.2 to 0.21.1 (#2099)
- [#2072](https://github.com/MetaMask/metamask-mobile/pull/2072): Bump ini from 1.3.5 to 1.3.8 (#2072)
- [#2071](https://github.com/MetaMask/metamask-mobile/pull/2071): Fix uploading files on the browser by modifying fingerprint intent value (#2071)
- [#2064](https://github.com/MetaMask/metamask-mobile/pull/2064): Add parseSeedPhrase behavior from extension (#2064)
- [#2061](https://github.com/MetaMask/metamask-mobile/pull/2061): Add Alert component (#2061)
- [#2059](https://github.com/MetaMask/metamask-mobile/pull/2059): Fix isBookmark functionality (#2059)
- [#2030](https://github.com/MetaMask/metamask-mobile/pull/2030): @metamask/controllers@5.1.0 (#2030)
- [#2051](https://github.com/MetaMask/metamask-mobile/pull/2051): [1984] Fixing Invalid value for 'projectId': "undefined" error [Android] [iOS] (#2051)
- [#2042](https://github.com/MetaMask/metamask-mobile/pull/2042): Bugfix/small UI fixes (#2042)
- [#2054](https://github.com/MetaMask/metamask-mobile/pull/2054): Make Keypad a functional component (#2054)
- [#2055](https://github.com/MetaMask/metamask-mobile/pull/2055): Add missing await keywords (#2055)
- [#2000](https://github.com/MetaMask/metamask-mobile/pull/2000): Remove unused views (#2000)
- [#1994](https://github.com/MetaMask/metamask-mobile/pull/1994): Feature: Initial Swaps amount view (#1994)

## [1.0.8]

### Uncategorized

- [#2040](https://github.com/MetaMask/metamask-mobile/pull/2040): Update vault error message (#2040)
- [#2034](https://github.com/MetaMask/metamask-mobile/pull/2034): Fix asyncstorage limit (#2034)
- [#2038](https://github.com/MetaMask/metamask-mobile/pull/2038): metamask wc deeplink (#2038)
- [#2023](https://github.com/MetaMask/metamask-mobile/pull/2023): @metamask/contract-metadata (#2023)
- [#2019](https://github.com/MetaMask/metamask-mobile/pull/2019): bugfix/qr code (#2019)
- [#2008](https://github.com/MetaMask/metamask-mobile/pull/2008): Add Apple Pay correct label (#2008)

## [1.0.7]

### Uncategorized

- [#2005](https://github.com/MetaMask/metamask-mobile/pull/2005): Fix activeTabUrl (#2005)
- [#2003](https://github.com/MetaMask/metamask-mobile/pull/2003): Bugfix/android choose password (#2003)
- [#1992](https://github.com/MetaMask/metamask-mobile/pull/1992): Android api level (#1992)
- [#1993](https://github.com/MetaMask/metamask-mobile/pull/1993): Catch SVG Errors (#1993)
- [#1970](https://github.com/MetaMask/metamask-mobile/pull/1970): Remove network status controller (#1970)
- [#1968](https://github.com/MetaMask/metamask-mobile/pull/1968): Add MetaSwaps feature flag and initial nav stack (#1968)
- [#1967](https://github.com/MetaMask/metamask-mobile/pull/1967): Add Keypad component (#1967)

## [1.0.6]

### Uncategorized

- [#1990](https://github.com/MetaMask/metamask-mobile/pull/1990): Fixed importing accounts when reseting password (#1990)
- [#1988](https://github.com/MetaMask/metamask-mobile/pull/1988): bugfix/protect wallet modal (#1988)
- [#1985](https://github.com/MetaMask/metamask-mobile/pull/1985): Fix seedphrase handling in QRScanner (#1985)
- [#1982](https://github.com/MetaMask/metamask-mobile/pull/1982): Bugfix/approve modal (#1982)
- [#1983](https://github.com/MetaMask/metamask-mobile/pull/1983): Fix whats new modal (#1983)
- [#1978](https://github.com/MetaMask/metamask-mobile/pull/1978): Make hintText display regardless of biometryType (#1978)
- [#1973](https://github.com/MetaMask/metamask-mobile/pull/1973): Detox: Updated onboarding flows (#1973)
- [#1780](https://github.com/MetaMask/metamask-mobile/pull/1780): Improvement/update keychain lib (#1780)
- [#1916](https://github.com/MetaMask/metamask-mobile/pull/1916): Fix QR send (#1916)
- [#1877](https://github.com/MetaMask/metamask-mobile/pull/1877): Bugfix/deeplink, request modals and wallet connect (#1877)
- [#1911](https://github.com/MetaMask/metamask-mobile/pull/1911): Feature/whats new (#1911)
- [#1954](https://github.com/MetaMask/metamask-mobile/pull/1954): Support 24 word seed phrase game (#1954)
- [#1892](https://github.com/MetaMask/metamask-mobile/pull/1892): Reminder to backup seed phrase (#1892)
- [#1908](https://github.com/MetaMask/metamask-mobile/pull/1908): Add missing env keys (#1908)
- [#1917](https://github.com/MetaMask/metamask-mobile/pull/1917): Update Wyre minimum fee and minimum amount (#1917)
- [#1915](https://github.com/MetaMask/metamask-mobile/pull/1915): Error boundary - sentry clean-up (#1915)
- [#1905](https://github.com/MetaMask/metamask-mobile/pull/1905): Ensure seedphrase hint is not the actual seedphrase (#1905)
- [#1895](https://github.com/MetaMask/metamask-mobile/pull/1895): Make whole blur area clickable (#1895)
- [#1901](https://github.com/MetaMask/metamask-mobile/pull/1901): sync log errors (#1901)
- [#1879](https://github.com/MetaMask/metamask-mobile/pull/1879): Feature/show previously created accounts on seed phrase import (#1879)
- [#1894](https://github.com/MetaMask/metamask-mobile/pull/1894): sentry cleaning (#1894)
- [#1902](https://github.com/MetaMask/metamask-mobile/pull/1902): use optional chaining and default values so we're not calling toLowerCase() on undefined values (#1902)
- [#1859](https://github.com/MetaMask/metamask-mobile/pull/1859): Direct to proper screen on address QR code scan (#1859)
- [#1881](https://github.com/MetaMask/metamask-mobile/pull/1881): Fix/disable iframes support for now (#1881)
- [#1893](https://github.com/MetaMask/metamask-mobile/pull/1893): bugfix/core env vars (#1893)
- [#1847](https://github.com/MetaMask/metamask-mobile/pull/1847): feature/approve eip 681 (#1847)
- [#1827](https://github.com/MetaMask/metamask-mobile/pull/1827): Update infura v3 (#1827)
- [#1806](https://github.com/MetaMask/metamask-mobile/pull/1806): Allow webview debugging in dev mode + XIP (#1806)
- [#1874](https://github.com/MetaMask/metamask-mobile/pull/1874): Coerce non error objects into errors before sending to sentry (#1874)
- [#1887](https://github.com/MetaMask/metamask-mobile/pull/1887): Use eth-contract-metadata@1.16.0 (#1887)
- [#1883](https://github.com/MetaMask/metamask-mobile/pull/1883): Update Transak params (#1883)
- [#1876](https://github.com/MetaMask/metamask-mobile/pull/1876): Bugfix/homepage injection (#1876)
- [#1793](https://github.com/MetaMask/metamask-mobile/pull/1793): Add cookies clearing (#1793)
- [#1873](https://github.com/MetaMask/metamask-mobile/pull/1873): Provide error feedback without actually submitting (#1873)
- [#1864](https://github.com/MetaMask/metamask-mobile/pull/1864): Add additional isUrl check, closes #1462 (#1864)
- [#1866](https://github.com/MetaMask/metamask-mobile/pull/1866): Fix proptype warning for WebviewError (#1866)
- [#1861](https://github.com/MetaMask/metamask-mobile/pull/1861): Get e2e working for seedphrase and login (#1861)

## [1.0.5]

### Uncategorized

- [#1889](https://github.com/MetaMask/metamask-mobile/pull/1889): Fix scientific notation string not convertable to BN (#1889)

## [1.0.4]

### Uncategorized

- [#1882](https://github.com/MetaMask/metamask-mobile/pull/1882): Error boundary (#1882)

## [1.0.3]

### Uncategorized

- [#1865](https://github.com/MetaMask/metamask-mobile/pull/1865): bugfix/login (#1865)
- [#1863](https://github.com/MetaMask/metamask-mobile/pull/1863): transak countries update (#1863)
- [#1829](https://github.com/MetaMask/metamask-mobile/pull/1829): Improvement/browser refactor (#1829)
- [#1848](https://github.com/MetaMask/metamask-mobile/pull/1848): Allow for 24 length seedphrase on import (#1848)
- [#1857](https://github.com/MetaMask/metamask-mobile/pull/1857): bugfix/splash screen (#1857)
- [#1852](https://github.com/MetaMask/metamask-mobile/pull/1852): Bugfix/sentry v1 (#1852)
- [#1846](https://github.com/MetaMask/metamask-mobile/pull/1846): Amount: fix 'data' value for transaction info not being populated with ERC20 tokens (#1846)
- [#1851](https://github.com/MetaMask/metamask-mobile/pull/1851): Detox/ Update e2e based on v1 updates (#1851)
- [#1853](https://github.com/MetaMask/metamask-mobile/pull/1853): fixed typo on country name (#1853)
- [#1815](https://github.com/MetaMask/metamask-mobile/pull/1815): Add ScrollView so we can scroll to errorMessage (#1815)
- [#1752](https://github.com/MetaMask/metamask-mobile/pull/1752): Send caught errors to sentry (#1752)
- [#1794](https://github.com/MetaMask/metamask-mobile/pull/1794): Feature/hide seedphrase on import (#1794)
- [#1841](https://github.com/MetaMask/metamask-mobile/pull/1841): Fixing typo in onboarding flow (#1841)
- [#1845](https://github.com/MetaMask/metamask-mobile/pull/1845): Share address from sidebar (#1845)
- [#1835](https://github.com/MetaMask/metamask-mobile/pull/1835): UI/CustomGas: fix inconsistent low gas error (#1835)
- [#1758](https://github.com/MetaMask/metamask-mobile/pull/1758): Fix wallet_scanQRCode rpc method (#1758)
- [#1831](https://github.com/MetaMask/metamask-mobile/pull/1831): Get paste context working for password fields (onboarding) (#1831)
- [#1837](https://github.com/MetaMask/metamask-mobile/pull/1837): Add gms:play-services-wallet (#1837)
- [#1830](https://github.com/MetaMask/metamask-mobile/pull/1830): Use FlatList for scan steps modal (#1830)
- [#1797](https://github.com/MetaMask/metamask-mobile/pull/1797): Bugfixes/post v1 aug 2020 (#1797)
- [#1801](https://github.com/MetaMask/metamask-mobile/pull/1801): Update gradle (#1801)
- [#1757](https://github.com/MetaMask/metamask-mobile/pull/1757): Add option to use Blockies Identicon and use Jazz Icons as default (#1757)
- [#1816](https://github.com/MetaMask/metamask-mobile/pull/1816): Update about to inclue "Contact Us" link (#1816)
- [#1775](https://github.com/MetaMask/metamask-mobile/pull/1775): WalletConnect: fix WC not respecting gas limit (#1775)
- [#1800](https://github.com/MetaMask/metamask-mobile/pull/1800): Feature/improve nav browser title (#1800)
- [#1781](https://github.com/MetaMask/metamask-mobile/pull/1781): Bugfix/Use translations for steps (#1781)
- [#1759](https://github.com/MetaMask/metamask-mobile/pull/1759): Bugfix/Display correct balance from state when creating an account that already holds funds (#1759)
- [#1728](https://github.com/MetaMask/metamask-mobile/pull/1728): Add /constants (#1728)
- [#1787](https://github.com/MetaMask/metamask-mobile/pull/1787): Add missing currency conversions (#1787)

## [1.0.2]

### Uncategorized

- [#1812](https://github.com/MetaMask/metamask-mobile/pull/1812): Add logger on login (#1812)

## [1.0.1]

### Uncategorized

- [#1795](https://github.com/MetaMask/metamask-mobile/pull/1795): Update react native aes crypto forked (#1795)
- [#1796](https://github.com/MetaMask/metamask-mobile/pull/1796): bugfix/mixpanel android in app notifications (#1796)

## [1.0.0]

### Uncategorized

- [#1790](https://github.com/MetaMask/metamask-mobile/pull/1790): Bugfix/payment request and wallet connect origin on tx (#1790)
- [#1791](https://github.com/MetaMask/metamask-mobile/pull/1791): Fix send receive buttons style (#1791)
- [#1785](https://github.com/MetaMask/metamask-mobile/pull/1785): Use @metamask/controllers@2.0.5 (#1785)
- [#1788](https://github.com/MetaMask/metamask-mobile/pull/1788): bugfix/protect wallet modal receive request (#1788)
- [#1666](https://github.com/MetaMask/metamask-mobile/pull/1666): Fiat on Ramp: Payments (#1666)
- [#1783](https://github.com/MetaMask/metamask-mobile/pull/1783): bugfix/hide protect wallet modal (#1783)
- [#1779](https://github.com/MetaMask/metamask-mobile/pull/1779): Update camera lib (#1779)
- [#1782](https://github.com/MetaMask/metamask-mobile/pull/1782): Make backup required when user has funds (#1782)
- [#1778](https://github.com/MetaMask/metamask-mobile/pull/1778): Update bip to use js version of pbkdf2 even more specific use case (#1778)
- [#1776](https://github.com/MetaMask/metamask-mobile/pull/1776): Use JS pbkdf2 if using chrome devtools (bip39) (#1776)
- [#1773](https://github.com/MetaMask/metamask-mobile/pull/1773): Improvement/import from seed styles (#1773)
- [#1772](https://github.com/MetaMask/metamask-mobile/pull/1772): bugfix/cancel dapp tx when inactive (#1772)
- [#1769](https://github.com/MetaMask/metamask-mobile/pull/1769): Patch bip39 to use native crypto lib pbkdf2 (#1769)
- [#1766](https://github.com/MetaMask/metamask-mobile/pull/1766): Feature/ipns ens sites (#1766)
- [#1755](https://github.com/MetaMask/metamask-mobile/pull/1755): Improvement/migrate aes crypto lib (#1755)
- [#1756](https://github.com/MetaMask/metamask-mobile/pull/1756): Fix recreate vault import accounts (#1756)
- [#1729](https://github.com/MetaMask/metamask-mobile/pull/1729): Lock KeyringController on logout (#1729)
- [#1767](https://github.com/MetaMask/metamask-mobile/pull/1767): Fix crash when entering custom token (#1767)
- [#1765](https://github.com/MetaMask/metamask-mobile/pull/1765): Browser newPageData state undefined (#1765)
- [#1762](https://github.com/MetaMask/metamask-mobile/pull/1762): Use patch-package@6.2.2 (#1762)
- [#1763](https://github.com/MetaMask/metamask-mobile/pull/1763): Remove unused metamask-mobile-provider dependency (#1763)
- [#1736](https://github.com/MetaMask/metamask-mobile/pull/1736): Amount: fix comma causing invalid send amount (#1736)
- [#1711](https://github.com/MetaMask/metamask-mobile/pull/1711): Improve iOS build process (#1711)
- [#1733](https://github.com/MetaMask/metamask-mobile/pull/1733): @metamask/controllers 2.0.3 (#1733)
- [#1727](https://github.com/MetaMask/metamask-mobile/pull/1727): Bump json from 2.2.0 to 2.3.1 in /ios (#1727)

## [0.2.20]

### Uncategorized

- [#1751](https://github.com/MetaMask/metamask-mobile/pull/1751): bugfix/payment requests & deeplinks (#1751)
- [#1732](https://github.com/MetaMask/metamask-mobile/pull/1732): Copy edits (#1732)
- [#1750](https://github.com/MetaMask/metamask-mobile/pull/1750): Don't allow for zero in custom gas price (#1750)
- [#1744](https://github.com/MetaMask/metamask-mobile/pull/1744): bugix/v0.2.20 (#1744)
- [#1730](https://github.com/MetaMask/metamask-mobile/pull/1730): Check for pods first, don't double up on yarn install(s) (#1730)
- [#1734](https://github.com/MetaMask/metamask-mobile/pull/1734): Use elliptic@6.5.3 (#1734)
- [#1741](https://github.com/MetaMask/metamask-mobile/pull/1741): Bugfix/skipping going to next step before (#1741)
- [#1737](https://github.com/MetaMask/metamask-mobile/pull/1737): Fix scroll and button text and secure now goes to next step (#1737)
- [#1740](https://github.com/MetaMask/metamask-mobile/pull/1740): check previousScreen and change lading message (#1740)
- [#1738](https://github.com/MetaMask/metamask-mobile/pull/1738): Bump no_output_timeout (#1738)
- [#1735](https://github.com/MetaMask/metamask-mobile/pull/1735): Switch dependency Git URLs to HTTPS (#1735)
- [#1681](https://github.com/MetaMask/metamask-mobile/pull/1681): Feature/account backup alert flows (#1681)
- [#1692](https://github.com/MetaMask/metamask-mobile/pull/1692): Update password & seedphrase backup flow (#1692)
- [#1718](https://github.com/MetaMask/metamask-mobile/pull/1718): @metamask/mobile-provider v1.3.0 (#1718)
- [#1710](https://github.com/MetaMask/metamask-mobile/pull/1710): 'Use Max' fixes (#1710)
- [#1712](https://github.com/MetaMask/metamask-mobile/pull/1712): Bugfix/payment requests (#1712)
- [#1708](https://github.com/MetaMask/metamask-mobile/pull/1708): bugfix/deep link send screen token ui (#1708)
- [#1694](https://github.com/MetaMask/metamask-mobile/pull/1694): Update font Euclid (#1694)
- [#1699](https://github.com/MetaMask/metamask-mobile/pull/1699): ChoosePassword: update preferencesControllerState after adding accounts, before passing into PreferencesController.update() (#1699)
- [#1707](https://github.com/MetaMask/metamask-mobile/pull/1707): update apple id (#1707)
- [#1704](https://github.com/MetaMask/metamask-mobile/pull/1704): Use lodash@4.17.19 (#1704)
- [#1687](https://github.com/MetaMask/metamask-mobile/pull/1687): Custom Gas + Data hotfixes (#1687)
- [#1697](https://github.com/MetaMask/metamask-mobile/pull/1697): Increase ANDROID_OFFSET (#1697)
- [#1701](https://github.com/MetaMask/metamask-mobile/pull/1701): remove-zip-controllers (#1701)
- [#1684](https://github.com/MetaMask/metamask-mobile/pull/1684): Bugfix/speedup transactions (#1684)
- [#1698](https://github.com/MetaMask/metamask-mobile/pull/1698): bump eth-contract-metadata (#1698)
- [#1613](https://github.com/MetaMask/metamask-mobile/pull/1613): Feature/incoming token transactions (#1613)
- [#1657](https://github.com/MetaMask/metamask-mobile/pull/1657): update review function names (#1657)
- [#1693](https://github.com/MetaMask/metamask-mobile/pull/1693): PaymentRequest: fix conversion bug (#1693)
- [#1689](https://github.com/MetaMask/metamask-mobile/pull/1689): bugfix/approve screen (#1689)
- [#1690](https://github.com/MetaMask/metamask-mobile/pull/1690): Bugfix/release bugs (#1690)
- [#1676](https://github.com/MetaMask/metamask-mobile/pull/1676): Initiate url as well (#1676)
- [#1688](https://github.com/MetaMask/metamask-mobile/pull/1688): Support links (#1688)
- [#1683](https://github.com/MetaMask/metamask-mobile/pull/1683): @metamask/mobile-provider v1.2.4 (#1683)
- [#1573](https://github.com/MetaMask/metamask-mobile/pull/1573): Payment channel opt in (#1573)
- [#1679](https://github.com/MetaMask/metamask-mobile/pull/1679): Update yarn.lock (#1679)
- [#1671](https://github.com/MetaMask/metamask-mobile/pull/1671): Remove minWidth, fixes #1664 (#1671)
- [#1620](https://github.com/MetaMask/metamask-mobile/pull/1620): Dapp confirmation designs transitions (#1620)
- [#1559](https://github.com/MetaMask/metamask-mobile/pull/1559): Dapp Transaction Confirmation Re-designs (#1559)
- [#1605](https://github.com/MetaMask/metamask-mobile/pull/1605): Fix word election error in Spanish (#1605)
- [#1609](https://github.com/MetaMask/metamask-mobile/pull/1609): Feature/security third party api mode (#1609)
- [#1658](https://github.com/MetaMask/metamask-mobile/pull/1658): @metamask/mobile-provider v1.2.3 (#1658)
- [#1591](https://github.com/MetaMask/metamask-mobile/pull/1591): feature/sync imported accounts from extension (#1591)
- [#1645](https://github.com/MetaMask/metamask-mobile/pull/1645): Fix env vars (#1645)
- [#1649](https://github.com/MetaMask/metamask-mobile/pull/1649): remove sai message (#1649)
- [#1648](https://github.com/MetaMask/metamask-mobile/pull/1648): bump mobile provider (#1648)
- [#1643](https://github.com/MetaMask/metamask-mobile/pull/1643): Use @metamask/controllers@2.0.1 (#1643)
- [#1558](https://github.com/MetaMask/metamask-mobile/pull/1558): Complete redesigns for approval flow (#1558)
- [#1640](https://github.com/MetaMask/metamask-mobile/pull/1640): enable-apple-pay (#1640)

## [0.2.19]

### Uncategorized

- [#1661](https://github.com/MetaMask/metamask-mobile/pull/1661): bugfix/Use eth gas API
- [#1653](https://github.com/MetaMask/metamask-mobile/pull/1653): Add ETH_GAS_STATION_API_KEY (#1653)

## [0.2.18]

### Uncategorized

- [#1636](https://github.com/MetaMask/metamask-mobile/pull/1636): Add padding to CustomGas back button (#1636)
- [#1637](https://github.com/MetaMask/metamask-mobile/pull/1637): Bugfix/incoming notifications (#1637)
- [#1628](https://github.com/MetaMask/metamask-mobile/pull/1628): Fix network color indicator on transactionHeader for connect screens (#1628)

## [0.2.17]

### Uncategorized

- [#1629](https://github.com/MetaMask/metamask-mobile/pull/1629): bugfix/custom gas modal (#1629)
- [#1625](https://github.com/MetaMask/metamask-mobile/pull/1625): Bugfix/wc connect on app closed (#1625)
- [#1624](https://github.com/MetaMask/metamask-mobile/pull/1624): Wallet connect update + Support for simple notifications (#1624)
- [#1623](https://github.com/MetaMask/metamask-mobile/pull/1623): Fix browser intial load (#1623)
- [#1621](https://github.com/MetaMask/metamask-mobile/pull/1621): Fix branch (#1621)
- [#1512](https://github.com/MetaMask/metamask-mobile/pull/1512): Transaction components (#1512)
- [#1619](https://github.com/MetaMask/metamask-mobile/pull/1619): Fix aab link on slack (#1619)
- [#1618](https://github.com/MetaMask/metamask-mobile/pull/1618): Fix android circleci (#1618)
- [#1578](https://github.com/MetaMask/metamask-mobile/pull/1578): Stops the unintended 'User Rejected...' error caused by buggy submitt… (#1578)
- [#1615](https://github.com/MetaMask/metamask-mobile/pull/1615): Android circleci fix (#1615)
- [#1554](https://github.com/MetaMask/metamask-mobile/pull/1554): Splash screen on android (#1554)
- [#1612](https://github.com/MetaMask/metamask-mobile/pull/1612): Update: add warningTextEmpty, closes #1610 (#1612)
- [#1560](https://github.com/MetaMask/metamask-mobile/pull/1560): Mixpanel migration (#1560)
- [#1606](https://github.com/MetaMask/metamask-mobile/pull/1606): Default to wallet when app re-opens (#1606)
- [#1608](https://github.com/MetaMask/metamask-mobile/pull/1608): remove log from TransactionNotification (#1608)
- [#1611](https://github.com/MetaMask/metamask-mobile/pull/1611): make detox great again (#1611)
- [#1514](https://github.com/MetaMask/metamask-mobile/pull/1514): Improvement/protect funds everywhere (#1514)
- [#1580](https://github.com/MetaMask/metamask-mobile/pull/1580): filter sentry tx rejected errors (#1580)
- [#1555](https://github.com/MetaMask/metamask-mobile/pull/1555): remove set timeouts (#1555)
- [#1604](https://github.com/MetaMask/metamask-mobile/pull/1604): Connect design qa (#1604)
- [#1602](https://github.com/MetaMask/metamask-mobile/pull/1602): Bugfix/rn upgrade circleci and e2e (#1602)
- [#1568](https://github.com/MetaMask/metamask-mobile/pull/1568): Fix browser initial loading performance (#1568)
- [#1601](https://github.com/MetaMask/metamask-mobile/pull/1601): Add overlayColor (#1601)
- [#1600](https://github.com/MetaMask/metamask-mobile/pull/1600): Fix circle ci and improve e2e (#1600)
- [#1599](https://github.com/MetaMask/metamask-mobile/pull/1599): Update @metamask/mobile-provider (#1599)
- [#1550](https://github.com/MetaMask/metamask-mobile/pull/1550): Bugfix/choose password lockout (#1550)
- [#1598](https://github.com/MetaMask/metamask-mobile/pull/1598): Use @metamask/controllers (#1598)
- [#1508](https://github.com/MetaMask/metamask-mobile/pull/1508): Connect Screen Designs (#1508)
- [#1577](https://github.com/MetaMask/metamask-mobile/pull/1577): Fix last two paste context issues on Android (#1577)
- [#1597](https://github.com/MetaMask/metamask-mobile/pull/1597): fix builds (#1597)
- [#1588](https://github.com/MetaMask/metamask-mobile/pull/1588): React native 0.62.1 libraries upgraded rebased (#1588)
- [#1586](https://github.com/MetaMask/metamask-mobile/pull/1586): React native upgrade 0.62.2 rebased (#1586)
- [#1590](https://github.com/MetaMask/metamask-mobile/pull/1590): Add CODEOWNERS (#1590)
- [#1584](https://github.com/MetaMask/metamask-mobile/pull/1584): make sign tests great again (#1584)

## [0.2.16]

### Uncategorized

- [#1582](https://github.com/MetaMask/metamask-mobile/pull/1582): Instapay deposit navbar cancel (#1582)
- [#1570](https://github.com/MetaMask/metamask-mobile/pull/1570): Disable confirm screen edit button when no tokens of a payment request (#1570)
- [#1574](https://github.com/MetaMask/metamask-mobile/pull/1574): Ensure collectibles that use 'transfer' method show a fee in tx history list (#1574)
- [#1565](https://github.com/MetaMask/metamask-mobile/pull/1565): Fix validating of amount when sending a collectible (#1565)
- [#1572](https://github.com/MetaMask/metamask-mobile/pull/1572): Fix amount validation for large token payment requests (#1572)
- [#1561](https://github.com/MetaMask/metamask-mobile/pull/1561): V0.2.16 (#1561)
- [#1548](https://github.com/MetaMask/metamask-mobile/pull/1548): Use setTimeout hack (again) to get paste context in token search (#1548)
- [#1465](https://github.com/MetaMask/metamask-mobile/pull/1465): Make send flows consistent (#1465)
- [#1557](https://github.com/MetaMask/metamask-mobile/pull/1557): Fix day and month numbers in toDateFormat (#1557)
- [#1556](https://github.com/MetaMask/metamask-mobile/pull/1556): Fix settings everywhere (#1556)
- [#1552](https://github.com/MetaMask/metamask-mobile/pull/1552): Use gaba@1.11.0 (#1552)
- [#1493](https://github.com/MetaMask/metamask-mobile/pull/1493): Sig request design fixed (#1493)
- [#1517](https://github.com/MetaMask/metamask-mobile/pull/1517): Add new mobile provider (#1517)
- [#1539](https://github.com/MetaMask/metamask-mobile/pull/1539): Use "web-search" keyboardType on iOS (#1539)
- [#1538](https://github.com/MetaMask/metamask-mobile/pull/1538): Detect if site has been added to Favorites (#1538)
- [#1495](https://github.com/MetaMask/metamask-mobile/pull/1495): Feature/block screenshots (#1495)
- [#1487](https://github.com/MetaMask/metamask-mobile/pull/1487): Transaction Header Component (#1487)
- [#1475](https://github.com/MetaMask/metamask-mobile/pull/1475): Improvement/tx status notification (#1475)
- [#1544](https://github.com/MetaMask/metamask-mobile/pull/1544): Add settings to nav bar (#1544)
- [#1521](https://github.com/MetaMask/metamask-mobile/pull/1521): update docs link in readme (#1521)
- [#1545](https://github.com/MetaMask/metamask-mobile/pull/1545): bugfix/check for sai method (#1545)
- [#1524](https://github.com/MetaMask/metamask-mobile/pull/1524): Loosen nvmrc (#1524)

## [0.2.15]

### Uncategorized

- [#1529](https://github.com/MetaMask/metamask-mobile/pull/1529): sentry android production (#1529)
- [#1528](https://github.com/MetaMask/metamask-mobile/pull/1528): Bugfix/sentry in circle ci (#1528)
- [#1527](https://github.com/MetaMask/metamask-mobile/pull/1527): env to production (#1527)
- [#1526](https://github.com/MetaMask/metamask-mobile/pull/1526): use release properties (#1526)
- [#1525](https://github.com/MetaMask/metamask-mobile/pull/1525): package version bump (#1525)
- [#1523](https://github.com/MetaMask/metamask-mobile/pull/1523): Bugfix/import private key (#1523)
- [#1522](https://github.com/MetaMask/metamask-mobile/pull/1522): Revert "Loosen nvmrc to major version (#1516)" (#1522)
- [#1516](https://github.com/MetaMask/metamask-mobile/pull/1516): Loosen nvmrc to major version (#1516)
- [#1518](https://github.com/MetaMask/metamask-mobile/pull/1518): V0.2.15 (#1518)
- [#1507](https://github.com/MetaMask/metamask-mobile/pull/1507): Bugfix/import account view (#1507)
- [#1453](https://github.com/MetaMask/metamask-mobile/pull/1453): Feature: analytics v2 (#1453)
- [#1481](https://github.com/MetaMask/metamask-mobile/pull/1481): bugfix/search-token (#1481)
- [#1494](https://github.com/MetaMask/metamask-mobile/pull/1494): improvement/async storage size (#1494)
- [#1472](https://github.com/MetaMask/metamask-mobile/pull/1472): Enable back button if going from dapp to home & redirection problems (#1472)
- [#1427](https://github.com/MetaMask/metamask-mobile/pull/1427): Change source commit for react-native-webview in package.json (#1427)
- [#1486](https://github.com/MetaMask/metamask-mobile/pull/1486): Delete accidentally pushed file (#1486)
- [#1482](https://github.com/MetaMask/metamask-mobile/pull/1482): Fix web3 injection (#1482)
- [#1477](https://github.com/MetaMask/metamask-mobile/pull/1477): update from latest changes (#1477)
- [#1470](https://github.com/MetaMask/metamask-mobile/pull/1470): Fix collectible image icon & send flow styles (#1470)
- [#1443](https://github.com/MetaMask/metamask-mobile/pull/1443): Set navigation param silent to false when switching to a tab (#1443)
- [#1438](https://github.com/MetaMask/metamask-mobile/pull/1438): Add bl to resolutions to fix vuln (#1438)
- [#1461](https://github.com/MetaMask/metamask-mobile/pull/1461): Update transaction fee selectors (#1461)
- [#1455](https://github.com/MetaMask/metamask-mobile/pull/1455): Approve design updates (#1455)
- [#1454](https://github.com/MetaMask/metamask-mobile/pull/1454): Trim white space from parsed (#1454)
- [#1460](https://github.com/MetaMask/metamask-mobile/pull/1460): Update lockfile (#1460)
- [#1458](https://github.com/MetaMask/metamask-mobile/pull/1458): Skip Sentry upload during iOS Debug build (#1458)
- [#1449](https://github.com/MetaMask/metamask-mobile/pull/1449): Use setTimeout hack to get paste context back (#1449)
- [#1450](https://github.com/MetaMask/metamask-mobile/pull/1450): Fix remove bookmark functionality, closes #1396 (#1450)
- [#1376](https://github.com/MetaMask/metamask-mobile/pull/1376): Replace Fabric Crashlytics with Sentry (#1376)
- [#1441](https://github.com/MetaMask/metamask-mobile/pull/1441): Detox: Address Book Tests (#1441)
- [#1447](https://github.com/MetaMask/metamask-mobile/pull/1447): ci: Update CircleCI config version (#1447)
- [#1439](https://github.com/MetaMask/metamask-mobile/pull/1439): Update README.md (#1439)
- [#1436](https://github.com/MetaMask/metamask-mobile/pull/1436): Update mkdirp and minimist (#1436)
- [#1435](https://github.com/MetaMask/metamask-mobile/pull/1435): Use acorn@7.1.1 (#1435)
- [#1434](https://github.com/MetaMask/metamask-mobile/pull/1434): Use acorn@6.4.1 (#1434)
- [#1433](https://github.com/MetaMask/metamask-mobile/pull/1433): Use kind-of@6.0.3 (#1433)
- [#1422](https://github.com/MetaMask/metamask-mobile/pull/1422): Bump acorn from 5.7.3 to 5.7.4 (#1422)
- [#1432](https://github.com/MetaMask/metamask-mobile/pull/1432): bump eth contract metadata (#1432)
- [#1431](https://github.com/MetaMask/metamask-mobile/pull/1431): Update debugging instructions (#1431)
- [#1418](https://github.com/MetaMask/metamask-mobile/pull/1418): Improvement: remove addresslist comment (#1418)
- [#1425](https://github.com/MetaMask/metamask-mobile/pull/1425): Detox: Upate dapp-initated-txn tests (#1425)

## [0.2.14]

### Uncategorized

- [#1413](https://github.com/MetaMask/metamask-mobile/pull/1413): Fix accountsChanged notification (#1413)
- [#1411](https://github.com/MetaMask/metamask-mobile/pull/1411): bugfix: payment request (#1411)
- [#1410](https://github.com/MetaMask/metamask-mobile/pull/1410): bugfix: ios close icon (#1410)
- [#1409](https://github.com/MetaMask/metamask-mobile/pull/1409): bugfix: wallet connect (#1409)
- [#1399](https://github.com/MetaMask/metamask-mobile/pull/1399): V0.2.14 (#1399)
- [#1398](https://github.com/MetaMask/metamask-mobile/pull/1398): Add vertical padding to close button (#1398)
- [#1384](https://github.com/MetaMask/metamask-mobile/pull/1384): Update `pubnub` dependency to match extension (#1384)
- [#1394](https://github.com/MetaMask/metamask-mobile/pull/1394): fix wallet tests (#1394)
- [#1397](https://github.com/MetaMask/metamask-mobile/pull/1397): fixes browser tests in release mode (#1397)
- [#1327](https://github.com/MetaMask/metamask-mobile/pull/1327): Improvement: send flow (#1327)
- [#1386](https://github.com/MetaMask/metamask-mobile/pull/1386): Remove Shapeshift controller (#1386)
- [#1385](https://github.com/MetaMask/metamask-mobile/pull/1385): Bump gaba minor (#1385)
- [#1338](https://github.com/MetaMask/metamask-mobile/pull/1338): Update docs, scripts (#1338)
- [#1380](https://github.com/MetaMask/metamask-mobile/pull/1380): Add padding to top and bottom of hamburgerButton (#1380)
- [#1372](https://github.com/MetaMask/metamask-mobile/pull/1372): bugfix: amount space crash (#1372)
- [#1337](https://github.com/MetaMask/metamask-mobile/pull/1337): Bugfix: duplicated word in seedphrase (#1337)
- [#1379](https://github.com/MetaMask/metamask-mobile/pull/1379): Fix mixed tabs and spaces (#1379)
- [#1378](https://github.com/MetaMask/metamask-mobile/pull/1378): Update test wording (#1378)
- [#1342](https://github.com/MetaMask/metamask-mobile/pull/1342): Device util update (#1342)
- [#1373](https://github.com/MetaMask/metamask-mobile/pull/1373): bugfix: amount switch no conversion (#1373)
- [#1322](https://github.com/MetaMask/metamask-mobile/pull/1322): Bugfix: send flow amount (#1322)
- [#1340](https://github.com/MetaMask/metamask-mobile/pull/1340): Fix faulty null checks (#1340)
- [#1333](https://github.com/MetaMask/metamask-mobile/pull/1333): Add padding to increase hit area in BrowserBottomBar (#1333)
- [#1307](https://github.com/MetaMask/metamask-mobile/pull/1307): Reorganize RPC middlewares; update mobile-provider (#1307)
- [#1306](https://github.com/MetaMask/metamask-mobile/pull/1306): Detox: Update for new send flow (#1306)
- [#1328](https://github.com/MetaMask/metamask-mobile/pull/1328): Update patch version (#1328)
- [#1313](https://github.com/MetaMask/metamask-mobile/pull/1313): Update font (#1313)
- [#1303](https://github.com/MetaMask/metamask-mobile/pull/1303): Link to support URLs using default browser, closes #1295 (#1303)
- [#1309](https://github.com/MetaMask/metamask-mobile/pull/1309): Use ethereum-ens-network-map@1.0.2 (#1309)
- [#1310](https://github.com/MetaMask/metamask-mobile/pull/1310): Update resolver.js (#1310)
- [#1251](https://github.com/MetaMask/metamask-mobile/pull/1251): Feature: approve screen (#1251)
- [#1305](https://github.com/MetaMask/metamask-mobile/pull/1305): add exception for localhost (#1305)
- [#1304](https://github.com/MetaMask/metamask-mobile/pull/1304): Use patch-package (#1304)
- [#1294](https://github.com/MetaMask/metamask-mobile/pull/1294): Bugfix: new send flow amount balance (#1294)
- [#1301](https://github.com/MetaMask/metamask-mobile/pull/1301): Add git submodule initialization to postinstall script (#1301)
- [#1239](https://github.com/MetaMask/metamask-mobile/pull/1239): Feature: address book + new send flow (#1239)
- [#1287](https://github.com/MetaMask/metamask-mobile/pull/1287): move showOptions to state (#1287)
- [#1285](https://github.com/MetaMask/metamask-mobile/pull/1285): Fix typo interal -> internal (#1285)
- [#1284](https://github.com/MetaMask/metamask-mobile/pull/1284): move pkgs to metamask org (#1284)
- [#1282](https://github.com/MetaMask/metamask-mobile/pull/1282): Fix iframe injection (#1282)
- [#1281](https://github.com/MetaMask/metamask-mobile/pull/1281): Added Architecture diagram (#1281)
- [#1279](https://github.com/MetaMask/metamask-mobile/pull/1279): Simplify build.sh control flow (#1279)
- [#1236](https://github.com/MetaMask/metamask-mobile/pull/1236): JSON RPC Engine (#1236)
- [#1277](https://github.com/MetaMask/metamask-mobile/pull/1277): check if CI before envFileMissing and exit 1 (#1277)
- [#1276](https://github.com/MetaMask/metamask-mobile/pull/1276): Improve onboarding (#1276)
- [#1275](https://github.com/MetaMask/metamask-mobile/pull/1275): bugfix: inpage bridge chainid (#1275)
- [#1263](https://github.com/MetaMask/metamask-mobile/pull/1263): Revert "increase circleci timeout (#1262)" (#1263)
- [#1262](https://github.com/MetaMask/metamask-mobile/pull/1262): increase circleci timeout (#1262)
- [#1258](https://github.com/MetaMask/metamask-mobile/pull/1258): Update iOS Builds (#1258)
- [#1252](https://github.com/MetaMask/metamask-mobile/pull/1252): Bugfix: cancel and speedup insufficient funds (#1252)

## [0.2.13]

### Uncategorized

- [#1250](https://github.com/MetaMask/metamask-mobile/pull/1250): Bump excon from 0.64.0 to 0.71.0 in /ios (#1250)
- [#1246](https://github.com/MetaMask/metamask-mobile/pull/1246): bugfix: wizard back (#1246)
- [#1235](https://github.com/MetaMask/metamask-mobile/pull/1235): Detox: Request token flow (#1235)
- [#1234](https://github.com/MetaMask/metamask-mobile/pull/1234): bump migration version (#1234)

## [0.2.12]

### Uncategorized

- [#1224](https://github.com/MetaMask/metamask-mobile/pull/1224): Bugfix: asset ens tx (#1224)
- [#1225](https://github.com/MetaMask/metamask-mobile/pull/1225): update bug report link (#1225)
- [#1215](https://github.com/MetaMask/metamask-mobile/pull/1215): Detox: Fix Android e2e Tests (#1215)
- [#1223](https://github.com/MetaMask/metamask-mobile/pull/1223): Bugfix: contract deployments (#1223)
- [#1222](https://github.com/MetaMask/metamask-mobile/pull/1222): bugfix: android show hex input instapay send (#1222)
- [#1214](https://github.com/MetaMask/metamask-mobile/pull/1214): pass metametrics context to homepage (#1214)

## [0.2.11]

### Uncategorized

- [#1212](https://github.com/MetaMask/metamask-mobile/pull/1212): Provider missing properties (#1212)
- [#1207](https://github.com/MetaMask/metamask-mobile/pull/1207): Fix typo on Import Account screen (#1207)
- [#1198](https://github.com/MetaMask/metamask-mobile/pull/1198): Migrate to SAI (#1198)

## [0.2.10]

### Uncategorized

- [#1205](https://github.com/MetaMask/metamask-mobile/pull/1205): Disable speedup instapay (#1205)
- [#1204](https://github.com/MetaMask/metamask-mobile/pull/1204): Fix injection on Android (#1204)
- [#1203](https://github.com/MetaMask/metamask-mobile/pull/1203): Update support email (#1203)
- [#1199](https://github.com/MetaMask/metamask-mobile/pull/1199): Optimize injection on Iframes (#1199)
- [#1197](https://github.com/MetaMask/metamask-mobile/pull/1197): bump version of detox e2e (#1197)
- [#1196](https://github.com/MetaMask/metamask-mobile/pull/1196): Use v8 instead of JSC + native SVG support (#1196)
- [#1194](https://github.com/MetaMask/metamask-mobile/pull/1194): bump to xcode 11.2.1 (#1194)
- [#1189](https://github.com/MetaMask/metamask-mobile/pull/1189): version bump (#1189)
- [#1192](https://github.com/MetaMask/metamask-mobile/pull/1192): Bugfix: android general settings (#1192)
- [#1191](https://github.com/MetaMask/metamask-mobile/pull/1191): xcode bumps (#1191)
- [#1190](https://github.com/MetaMask/metamask-mobile/pull/1190): Revert "Add ruby version (#1165)" (#1190)
- [#1182](https://github.com/MetaMask/metamask-mobile/pull/1182): Bugfix: android exception manager crashes (#1182)
- [#1188](https://github.com/MetaMask/metamask-mobile/pull/1188): fix go back homepage and refresh favorites (#1188)
- [#1187](https://github.com/MetaMask/metamask-mobile/pull/1187): Bugfix: ENS links (#1187)
- [#1183](https://github.com/MetaMask/metamask-mobile/pull/1183): Fix bookmark updates (#1183)
- [#1176](https://github.com/MetaMask/metamask-mobile/pull/1176): Feature: speed up transaction (#1176)
- [#1179](https://github.com/MetaMask/metamask-mobile/pull/1179): Allow injection on iframes (#1179)
- [#1181](https://github.com/MetaMask/metamask-mobile/pull/1181): walletconnect deeplink support v2 (#1181)
- [#1173](https://github.com/MetaMask/metamask-mobile/pull/1173): Detox: update RPC Network flow (#1173)
- [#1172](https://github.com/MetaMask/metamask-mobile/pull/1172): added tests for custom rpc (#1172)
- [#1168](https://github.com/MetaMask/metamask-mobile/pull/1168): bugfix: login and password issues (#1168)
- [#1170](https://github.com/MetaMask/metamask-mobile/pull/1170): Detox: Wallet Tests (#1170)
- [#1165](https://github.com/MetaMask/metamask-mobile/pull/1165): Add ruby version (#1165)
- [#1155](https://github.com/MetaMask/metamask-mobile/pull/1155): Feature: sign typed v4 (#1155)
- [#1164](https://github.com/MetaMask/metamask-mobile/pull/1164): Add CircleCI Badge (#1164)
- [#1151](https://github.com/MetaMask/metamask-mobile/pull/1151): Feature: message eth sign + Address Book Migration (#1151)
- [#1148](https://github.com/MetaMask/metamask-mobile/pull/1148): added more assertions and beefed up onboarding wizard tests (#1148)
- [#1147](https://github.com/MetaMask/metamask-mobile/pull/1147): Detox: Browser Tests (#1147)
- [#1163](https://github.com/MetaMask/metamask-mobile/pull/1163): update eslint to the latest version (#1163)
- [#1162](https://github.com/MetaMask/metamask-mobile/pull/1162): disabled e2e tests (#1162)
- [#1156](https://github.com/MetaMask/metamask-mobile/pull/1156): Fix linter on CI (#1156)
- [#1146](https://github.com/MetaMask/metamask-mobile/pull/1146): fix instapay logs app version (#1146)

## [0.2.8]

### Uncategorized

- [#1145](https://github.com/MetaMask/metamask-mobile/pull/1145): Support URLs on QR code scanner (#1145)

## [0.2.7]

### Uncategorized

- [#1143](https://github.com/MetaMask/metamask-mobile/pull/1143): Minor bugfixes (#1143)

## [0.2.6]

### Uncategorized

- [#1139](https://github.com/MetaMask/metamask-mobile/pull/1139): Fix onboarding carousel dimensions (#1139)

## [0.2.5]

### Uncategorized

- [#1136](https://github.com/MetaMask/metamask-mobile/pull/1136): Select correct profiles (#1136)
- [#1135](https://github.com/MetaMask/metamask-mobile/pull/1135): Fix fastlane config (#1135)
- [#1134](https://github.com/MetaMask/metamask-mobile/pull/1134): renew certs if needed (#1134)
- [#1132](https://github.com/MetaMask/metamask-mobile/pull/1132): Fix animated fox (#1132)
- [#1131](https://github.com/MetaMask/metamask-mobile/pull/1131): Bugfix: wizard design qa (#1131)
- [#1130](https://github.com/MetaMask/metamask-mobile/pull/1130): Bugfix: onboarding design qa (#1130)
- [#1129](https://github.com/MetaMask/metamask-mobile/pull/1129): Design QA issues (#1129)
- [#1128](https://github.com/MetaMask/metamask-mobile/pull/1128): Navigation fixes (#1128)
- [#1127](https://github.com/MetaMask/metamask-mobile/pull/1127): Fix: Add tokens android crash (#1127)
- [#1125](https://github.com/MetaMask/metamask-mobile/pull/1125): update user agents (#1125)
- [#1124](https://github.com/MetaMask/metamask-mobile/pull/1124): fix apk generation (#1124)
- [#1123](https://github.com/MetaMask/metamask-mobile/pull/1123): Support provider.once (#1123)
- [#1122](https://github.com/MetaMask/metamask-mobile/pull/1122): fix statusbar in dark mode (#1122)
- [#1121](https://github.com/MetaMask/metamask-mobile/pull/1121): Fix walletconnect sendTransaction (#1121)
- [#1120](https://github.com/MetaMask/metamask-mobile/pull/1120): fix webview black flash (#1120)
- [#1119](https://github.com/MetaMask/metamask-mobile/pull/1119): Bump rubyzip from 1.2.3 to 1.3.0 in /ios (#1119)
- [#1116](https://github.com/MetaMask/metamask-mobile/pull/1116): iOS 13 Support (#1116)
- [#1115](https://github.com/MetaMask/metamask-mobile/pull/1115): Bump react-native-device-info (#1115)
- [#1113](https://github.com/MetaMask/metamask-mobile/pull/1113): Fix develop builds (#1113)
- [#1112](https://github.com/MetaMask/metamask-mobile/pull/1112): bump to v0.2.5 (#1112)
- [#1096](https://github.com/MetaMask/metamask-mobile/pull/1096): Webview rewrite (#1096)
- [#1108](https://github.com/MetaMask/metamask-mobile/pull/1108): improvements: instapay (#1108)
- [#1104](https://github.com/MetaMask/metamask-mobile/pull/1104): Feature: instapay receive (#1104)
- [#1103](https://github.com/MetaMask/metamask-mobile/pull/1103): Feature: onboarding carousel (#1103)
- [#1106](https://github.com/MetaMask/metamask-mobile/pull/1106): Update README.md (#1106)
- [#1101](https://github.com/MetaMask/metamask-mobile/pull/1101): update dapp txn flow in case ropsten faucet is having issues (#1101)
- [#1075](https://github.com/MetaMask/metamask-mobile/pull/1075): detox: test e2e ios (#1075)
- [#1097](https://github.com/MetaMask/metamask-mobile/pull/1097): detox: Enable e2e test suite to run on CircleCI (#1097)
- [#1094](https://github.com/MetaMask/metamask-mobile/pull/1094): update deps and xcode (#1094)
- [#1093](https://github.com/MetaMask/metamask-mobile/pull/1093): fix Crashlytics import (#1093)
- [#1092](https://github.com/MetaMask/metamask-mobile/pull/1092): use old xcode to compare build diff (#1092)
- [#1091](https://github.com/MetaMask/metamask-mobile/pull/1091): fix android apk generation (#1091)
- [#1090](https://github.com/MetaMask/metamask-mobile/pull/1090): Revert "Update branch to latest version (#1078)" (#1090)
- [#1089](https://github.com/MetaMask/metamask-mobile/pull/1089): Revert "update submodules (#1079)" (#1089)
- [#1088](https://github.com/MetaMask/metamask-mobile/pull/1088): Revert "Fix android builds (#1080)" (#1088)
- [#1087](https://github.com/MetaMask/metamask-mobile/pull/1087): Revert "Fix webview files path (#1081)" (#1087)
- [#1086](https://github.com/MetaMask/metamask-mobile/pull/1086): Revert "dont use cache on pre-release (#1082)" (#1086)
- [#1084](https://github.com/MetaMask/metamask-mobile/pull/1084): bugfix: reveal credential ui (#1084)
- [#1082](https://github.com/MetaMask/metamask-mobile/pull/1082): dont use cache on pre-release (#1082)
- [#1081](https://github.com/MetaMask/metamask-mobile/pull/1081): Fix webview files path (#1081)
- [#1080](https://github.com/MetaMask/metamask-mobile/pull/1080): Fix android builds (#1080)
- [#1079](https://github.com/MetaMask/metamask-mobile/pull/1079): update submodules (#1079)
- [#1078](https://github.com/MetaMask/metamask-mobile/pull/1078): Update branch to latest version (#1078)
- [#1076](https://github.com/MetaMask/metamask-mobile/pull/1076): safe check (#1076)
- [#1058](https://github.com/MetaMask/metamask-mobile/pull/1058): detox: dapp initiated txns (#1058)
- [#1071](https://github.com/MetaMask/metamask-mobile/pull/1071): bugfix: json rpc accounts api (#1071)
- [#1069](https://github.com/MetaMask/metamask-mobile/pull/1069): fix ens manager (#1069)
- [#1068](https://github.com/MetaMask/metamask-mobile/pull/1068): bugfix: android injection (#1068)
- [#1060](https://github.com/MetaMask/metamask-mobile/pull/1060): Bugfix: custom rpc network (#1060)
- [#1065](https://github.com/MetaMask/metamask-mobile/pull/1065): bugfix: inpage enable (#1065)
- [#1054](https://github.com/MetaMask/metamask-mobile/pull/1054): bugfix: remove tokens but ETH (#1054)
- [#1064](https://github.com/MetaMask/metamask-mobile/pull/1064): Fix circleci builds (#1064)
- [#1063](https://github.com/MetaMask/metamask-mobile/pull/1063): Revert "Update branch SDK & fix build issues (#1061)" (#1063)
- [#1062](https://github.com/MetaMask/metamask-mobile/pull/1062): bump circleci cache version (#1062)
- [#1061](https://github.com/MetaMask/metamask-mobile/pull/1061): Update branch SDK & fix build issues (#1061)
- [#1056](https://github.com/MetaMask/metamask-mobile/pull/1056): Detox: Import seed phrase and validate via settings (#1056)
- [#1051](https://github.com/MetaMask/metamask-mobile/pull/1051): updated branch sdk and fix build (#1051)
- [#1050](https://github.com/MetaMask/metamask-mobile/pull/1050): dont show invalid deeplink if opening the app with no action (#1050)
- [#1048](https://github.com/MetaMask/metamask-mobile/pull/1048): bugfix: connect modal (#1048)
- [#1047](https://github.com/MetaMask/metamask-mobile/pull/1047): bugfix: token transfer deeplink (#1047)
- [#1049](https://github.com/MetaMask/metamask-mobile/pull/1049): Migrate to yarn (#1049)
- [#1045](https://github.com/MetaMask/metamask-mobile/pull/1045): More UIWebview cleanup (#1045)
- [#1044](https://github.com/MetaMask/metamask-mobile/pull/1044): remove uiwebview ocurrences (#1044)

## [0.2.4]

### Uncategorized

- [#1038](https://github.com/MetaMask/metamask-mobile/pull/1038): Fix Approval (#1038)
  : [#1037](https://github.com/MetaMask/metamask-mobile/pull/1037): Fix walletconnect :#1037)
- [#1036](https://github.com/MetaMask/metamask-mobile/pull/1036): Bugfix: browser crash (#1036)
- [#1034](https://github.com/MetaMask/metamask-mobile/pull/1034): Bump 0.2.4 (#1034)
- [#1027](https://github.com/MetaMask/metamask-mobile/pull/1027): Improvement: approval token transfer data (#1027)
- [#1028](https://github.com/MetaMask/metamask-mobile/pull/1028): fix no password logged out scenario (#1028)
- [#1030](https://github.com/MetaMask/metamask-mobile/pull/1030): Allow to import / export Pkey & seed phrase via QR Codes (#1030)
- [#1021](https://github.com/MetaMask/metamask-mobile/pull/1021): bugfix: fix dapp compat issues (#1021)
- [#1007](https://github.com/MetaMask/metamask-mobile/pull/1007): Bugfix: phishing alerts (#1007)
- [#1023](https://github.com/MetaMask/metamask-mobile/pull/1023): Fix forkdelta.app (#1023)
- [#1017](https://github.com/MetaMask/metamask-mobile/pull/1017): Allow ENS available TLDs that are not ENS names (#1017)
- [#1016](https://github.com/MetaMask/metamask-mobile/pull/1016): update copy on account import (#1016)
- [#1014](https://github.com/MetaMask/metamask-mobile/pull/1014): Upgrade to node 10 and gaba 1.6.0 (#1014)
- [#1013](https://github.com/MetaMask/metamask-mobile/pull/1013): add auto-changelog (#1013)
- [#1005](https://github.com/MetaMask/metamask-mobile/pull/1005): bugfix: block ERC721 on sync (#1005)
- [#1009](https://github.com/MetaMask/metamask-mobile/pull/1009): Bugfix: Allow file uploads on android (#1009)
- [#1008](https://github.com/MetaMask/metamask-mobile/pull/1008): bump walletconnect (#1008)

## [0.2.3]

### Uncategorized

- [#972](https://github.com/MetaMask/metamask-mobile/pull/972): bump version (#972)
- [#989](https://github.com/MetaMask/metamask-mobile/pull/989): Bugfix: Fix mobile sync & Security options (#989)
- [#1000](https://github.com/MetaMask/metamask-mobile/pull/1000): bugfix: tx edit dropdowns in small devices (#1000)
- [#999](https://github.com/MetaMask/metamask-mobile/pull/999): bugfix: homepage back (#999)
- [#997](https://github.com/MetaMask/metamask-mobile/pull/997): Feature: ERC20 approve (#997)
- [#992](https://github.com/MetaMask/metamask-mobile/pull/992): Feature: instapay global currency (#992)
- [#995](https://github.com/MetaMask/metamask-mobile/pull/995): Feature: transfer approval (#995)
- [#991](https://github.com/MetaMask/metamask-mobile/pull/991): feature: sync tokens (#991)
- [#976](https://github.com/MetaMask/metamask-mobile/pull/976): Bugfix: onboarding analytics (#976)
- [#984](https://github.com/MetaMask/metamask-mobile/pull/984): Bugfix: bowser bottom bar navigation (#984)
- [#993](https://github.com/MetaMask/metamask-mobile/pull/993): bugfix: collectibles detection (#993)
- [#974](https://github.com/MetaMask/metamask-mobile/pull/974): Bugfix: lower priority android crashes (#974)
- [#990](https://github.com/MetaMask/metamask-mobile/pull/990): add missing privacy usage keys (#990)
- [#970](https://github.com/MetaMask/metamask-mobile/pull/970): Reverse ENS caching (#970)
- [#973](https://github.com/MetaMask/metamask-mobile/pull/973): Bugfix: android tx list crashes (#973)
- [#971](https://github.com/MetaMask/metamask-mobile/pull/971): remove unused tests (#971)
- [#937](https://github.com/MetaMask/metamask-mobile/pull/937): New user and tutorial e2e tests (#937)
- [#968](https://github.com/MetaMask/metamask-mobile/pull/968): Bugfix: ExceptionsManagerModule android crashes (#968)
- [#969](https://github.com/MetaMask/metamask-mobile/pull/969): Support reverse ens names in tx detail (#969)
- [#966](https://github.com/MetaMask/metamask-mobile/pull/966): Network name crash (#966)
- [#965](https://github.com/MetaMask/metamask-mobile/pull/965): safe connext client stop (#965)
- [#967](https://github.com/MetaMask/metamask-mobile/pull/967): dont crash if no tx id (#967)
- [#960](https://github.com/MetaMask/metamask-mobile/pull/960): bugfix: instapay notifications amount (#960)
- [#963](https://github.com/MetaMask/metamask-mobile/pull/963): Retry ethereum.enable after 1 sec if bridge not ready (#963)
- [#958](https://github.com/MetaMask/metamask-mobile/pull/958): bugfix: handle qrscanner camera permission (#958)
- [#956](https://github.com/MetaMask/metamask-mobile/pull/956): bugfix: remove collectible after sending if not in mainnet (#956)
- [#955](https://github.com/MetaMask/metamask-mobile/pull/955): dont ignore calls while initial reload (#955)
- [#957](https://github.com/MetaMask/metamask-mobile/pull/957): fix timeouts (#957)
- [#954](https://github.com/MetaMask/metamask-mobile/pull/954): Bugfix: onboarding navigation (#954)

[Unreleased]: https://github.com/MetaMask/metamask-mobile/compare/v7.50.1...HEAD
[7.50.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.50.0...v7.50.1
[7.50.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.47.3...v7.50.0
[7.47.3]: https://github.com/MetaMask/metamask-mobile/compare/v7.47.2...v7.47.3
[7.47.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.47.1...v7.47.2
[7.47.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.47.0...v7.47.1
[7.47.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.46.2...v7.47.0
[7.46.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.46.1...v7.46.2
[7.46.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.46.0...v7.46.1
[7.46.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.45.2...v7.46.0
[7.45.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.45.1...v7.45.2
[7.45.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.45.0...v7.45.1
[7.45.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.44.0...v7.45.0
[7.44.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.43.0...v7.44.0
[7.43.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.42.1...v7.43.0
[7.42.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.42.0...v7.42.1
[7.42.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.41.0...v7.42.0
[7.41.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.40.0...v7.41.0
[7.40.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.39.0...v7.40.0
[7.39.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.38.1...v7.39.0
[7.38.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.38.0...v7.38.1
[7.38.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.37.1...v7.38.0
[7.37.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.37.0...v7.37.1
[7.37.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.36.0...v7.37.0
[7.36.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.35.1...v7.36.0
[7.35.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.35.0...v7.35.1
[7.35.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.34.1...v7.35.0
[7.34.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.34.0...v7.34.1
[7.34.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.33.2...v7.34.0
[7.33.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.33.1...v7.33.2
[7.33.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.33.0...v7.33.1
[7.33.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.32.0...v7.33.0
[7.32.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.31.1...v7.32.0
[7.31.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.31.0...v7.31.1
[7.31.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.30.0...v7.31.0
[7.30.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.29.2...v7.30.0
[7.29.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.29.1...v7.29.2
[7.29.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.29.0...v7.29.1
[7.29.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.28.1...v7.29.0
[7.28.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.28.0...v7.28.1
[7.28.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.27.1...v7.28.0
[7.27.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.27.0...v7.27.1
[7.27.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.26.1...v7.27.0
[7.26.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.26.0...v7.26.1
[7.26.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.24.4...v7.26.0
[7.24.4]: https://github.com/MetaMask/metamask-mobile/compare/v7.24.3...v7.24.4
[7.24.3]: https://github.com/MetaMask/metamask-mobile/compare/v7.24.2...v7.24.3
[7.24.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.24.1...v7.24.2
[7.24.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.24.0...v7.24.1
[7.24.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.23.0...v7.24.0
[7.23.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.22.0...v7.23.0
[7.22.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.21.0...v7.22.0
[7.21.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.20.1...v7.21.0
[7.20.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.20.0...v7.20.1
[7.20.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.19.1...v7.20.0
[7.19.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.19.0...v7.19.1
[7.19.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.18.0...v7.19.0
[7.18.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.17.1...v7.18.0
[7.17.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.17.0...v7.17.1
[7.17.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.16.0...v7.17.0
[7.16.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.15.0...v7.16.0
[7.15.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.14.0...v7.15.0
[7.14.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.12.5...v7.14.0
[7.12.5]: https://github.com/MetaMask/metamask-mobile/compare/v7.12.3...v7.12.5
[7.12.3]: https://github.com/MetaMask/metamask-mobile/compare/v7.12.2...v7.12.3
[7.12.2]: https://github.com/MetaMask/metamask-mobile/compare/v7.12.1...v7.12.2
[7.12.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.12.0...v7.12.1
[7.12.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.11.0...v7.12.0
[7.11.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.10.0...v7.11.0
[7.10.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.9.1...v7.10.0
[7.9.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.9.0...v7.9.1
[7.9.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.8.0...v7.9.0
[7.8.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.7.0...v7.8.0
[7.7.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.6.0...v7.7.0
[7.6.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.5.0...v7.6.0
[7.5.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.4.0...v7.5.0
[7.4.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.3.1...v7.4.0
[7.3.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.3.0...v7.3.1
[7.3.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.2.0...v7.3.0
[7.2.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.1.0...v7.2.0
[7.1.0]: https://github.com/MetaMask/metamask-mobile/compare/v7.0.1...v7.1.0
[7.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.6.0...v7.0.0
[6.6.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.5.0...v6.6.0
[6.5.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.4.0...v6.5.0
[6.4.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.3.0...v6.4.0
[6.3.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.2.0...v6.3.0
[6.2.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.1.2...v6.2.0
[6.1.2]: https://github.com/MetaMask/metamask-mobile/compare/v6.1.1...v6.1.2
[6.1.1]: https://github.com/MetaMask/metamask-mobile/compare/v6.1.0...v6.1.1
[6.1.0]: https://github.com/MetaMask/metamask-mobile/compare/v6.0.1...v6.1.0
[6.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v6.0.0...v6.0.1
[6.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.14.0...v6.0.0
[5.14.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.13.0...v5.14.0
[5.13.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.12.3...v5.13.0
[5.12.3]: https://github.com/MetaMask/metamask-mobile/compare/v5.12.1...v5.12.3
[5.12.1]: https://github.com/MetaMask/metamask-mobile/compare/v5.12.0...v5.12.1
[5.12.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.11.0...v5.12.0
[5.11.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.10.0...v5.11.0
[5.10.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.9.1...v5.10.0
[5.9.1]: https://github.com/MetaMask/metamask-mobile/compare/v5.9.0...v5.9.1
[5.9.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.8.1...v5.9.0
[5.8.1]: https://github.com/MetaMask/metamask-mobile/compare/v5.8.0...v5.8.1
[5.8.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.7.0...v5.8.0
[5.7.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.6.1...v5.7.0
[5.6.1]: https://github.com/MetaMask/metamask-mobile/compare/v5.6.0...v5.6.1
[5.6.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.5.1...v5.6.0
[5.5.1]: https://github.com/MetaMask/metamask-mobile/compare/v5.5.0...v5.5.1
[5.5.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.4.0...v5.5.0
[5.4.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.3.0...v5.4.0
[5.3.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.2.0...v5.3.0
[5.2.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.1.0...v5.2.0
[5.1.0]: https://github.com/MetaMask/metamask-mobile/compare/v5.0.1...v5.1.0
[5.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v4.4.0...v5.0.0
[4.4.0]: https://github.com/MetaMask/metamask-mobile/compare/v4.3.1...v4.4.0
[4.3.1]: https://github.com/MetaMask/metamask-mobile/compare/v4.3.0...v4.3.1
[4.3.0]: https://github.com/MetaMask/metamask-mobile/compare/v4.2.2...v4.3.0
[4.2.2]: https://github.com/MetaMask/metamask-mobile/compare/v4.1.1...v4.2.2
[4.1.1]: https://github.com/MetaMask/metamask-mobile/compare/v4.1.0...v4.1.1
[4.1.0]: https://github.com/MetaMask/metamask-mobile/compare/v4.0.1...v4.1.0
[4.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.8.0...v4.0.0
[3.8.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.7.0...v3.8.0
[3.7.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.6.0...v3.7.0
[3.6.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.5.0...v3.6.0
[3.5.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.4.1...v3.5.0
[3.4.1]: https://github.com/MetaMask/metamask-mobile/compare/v3.3.0...v3.4.1
[3.3.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/MetaMask/metamask-mobile/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.6.0...v3.0.0
[2.6.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.1.3...v2.2.0
[2.1.3]: https://github.com/MetaMask/metamask-mobile/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/MetaMask/metamask-mobile/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/MetaMask/metamask-mobile/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/MetaMask/metamask-mobile/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.11...v2.0.0
[1.0.11]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.10...v1.0.11
[1.0.10]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.9...v1.0.10
[1.0.9]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/MetaMask/metamask-mobile/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.20...v1.0.0
[0.2.20]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.19...v0.2.20
[0.2.19]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.18...v0.2.19
[0.2.18]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.17...v0.2.18
[0.2.17]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.16...v0.2.17
[0.2.16]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.15...v0.2.16
[0.2.15]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.14...v0.2.15
[0.2.14]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.13...v0.2.14
[0.2.13]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.12...v0.2.13
[0.2.12]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.11...v0.2.12
[0.2.11]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.10...v0.2.11
[0.2.10]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.8...v0.2.10
[0.2.8]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.7...v0.2.8
[0.2.7]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.6...v0.2.7
[0.2.6]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.5...v0.2.6
[0.2.5]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/MetaMask/metamask-mobile/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/MetaMask/metamask-mobile/releases/tag/v0.2.3
