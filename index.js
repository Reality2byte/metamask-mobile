// Shim is used to ensure API compatibility for React Native and provides polyfills for globals
import './shim.js';

// TODO: This import may not be required anymore since we've upgraded to v2 - https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation/#requirements
// Legacy - Need to import early for native module initialization - https://docs.swmansion.com/react-native-gesture-handler/docs/1.x/
import 'react-native-gesture-handler';

import * as Sentry from '@sentry/react-native'; // eslint-disable-line import/no-namespace
import { setupSentry } from './app/util/sentry/utils';
import { AppRegistry, LogBox } from 'react-native';
import Root from './app/components/Views/Root';
import { name } from './app.config.js';
import { isE2E } from './app/util/test/utils.js';
import { Performance } from './app/core/Performance';
import {
  handleCustomError,
  setReactNativeDefaultHandler,
} from './app/core/ErrorHandler';

import { enableFreeze } from 'react-native-screens';
enableFreeze(true);

// Setup Sentry
setupSentry();

// Setup Performance observers
Performance.setupPerformanceObservers();

// Ignore all logs
LogBox.ignoreAllLogs();

// List of warnings that we're ignoring
LogBox.ignoreLogs([
  '{}',
  // Uncomment the below lines (21 and 22) to run browser-tests.spec.js in debug mode
  // in e2e tests until issue https://github.com/MetaMask/metamask-mobile/issues/1395 is resolved
  //"Error in RPC response",
  // 'User rejected account access',
  "Can't perform a React state update",
  'Error evaluating injectedJavaScript',
  'createErrorFromErrorData',
  'Encountered an error loading page',
  'Error handling userAuthorizedUpdate',
  'MaxListenersExceededWarning',
  'Expected delta of 0 for the fields',
  'The network request was invalid',
  'Require cycle',
  'ListView is deprecated',
  'WebView has been extracted from react-native core',
  'Exception was previously raised by watchStore',
  'StateUpdateController',
  'this.web3.eth',
  'collectibles.map',
  'Warning: bind(): You are binding a component method to the component',
  'AssetsDectionController._callee',
  'Accessing view manager configs directly off',
  'Function components cannot be given refs.',
  'Task orphaned for request',
  'Module RNOS requires',
  'use RCT_EXPORT_MODULE',
  'Setting a timer for a long period of time',
  'Did not receive response to shouldStartLoad in time',
  'startLoadWithResult invoked with invalid',
  'RCTBridge required dispatch_sync',
  'Remote debugger is in a background tab',
  "Can't call setState (or forceUpdate) on an unmounted component",
  'No stops in gradient',
  "Cannot read property 'hash' of null",
  'componentWillUpdate',
  'componentWillReceiveProps',
  'getNode()',
  'Non-serializable values were found in the navigation state.', // We are not saving navigation state so we can ignore this
  'new NativeEventEmitter', // New libraries have not yet implemented native methods to handle warnings (https://stackoverflow.com/questions/69538962/new-nativeeventemitter-was-called-with-a-non-null-argument-without-the-requir)
  'EventEmitter.removeListener',
  'Module TcpSockets requires main queue setup',
  'Module RCTSearchApiManager requires main queue setup',
  'PushNotificationIOS has been extracted', // RNC PushNotification iOS issue - https://github.com/react-native-push-notification/ios/issues/43
  "ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.",
  'ReactImageView: Image source "null"',
  'Warning: componentWillReceiveProps has been renamed',
]);

const IGNORE_BOXLOGS_DEVELOPMENT = process.env.IGNORE_BOXLOGS_DEVELOPMENT;
// Ignore box logs, useful for QA testing in development builds
if (IGNORE_BOXLOGS_DEVELOPMENT === 'true') {
  LogBox.ignoreAllLogs();
}

/* Uncomment and comment regular registration below */
// import Storybook from './.storybook';
// AppRegistry.registerComponent(name, () => Storybook);

/**
 * Application entry point responsible for registering root component
 */
AppRegistry.registerComponent(name, () =>
  // Disable Sentry for E2E tests
  isE2E ? Root : Sentry.wrap(Root),
);

function setupGlobalErrorHandler() {
  const reactNativeDefaultHandler = global.ErrorUtils.getGlobalHandler();
  // set the base handler to the react native ExceptionsManager.handleException(), please refer to setupErrorHandling.js under react-native/Libraries/Core/ for details.
  setReactNativeDefaultHandler(reactNativeDefaultHandler);
  // override the global handler to provide custom error handling
  global.ErrorUtils.setGlobalHandler(handleCustomError);
}

setupGlobalErrorHandler();
