import { Linking } from 'react-native';
import isUrl from 'is-url';
import Url from 'url-parse';
import { regex, hasProtocol } from '../../util/regex';
import AppConstants from '../../core/AppConstants';

/**
 * Returns URL prefixed with protocol
 *
 * @param url - String corresponding to url
 * @param defaultProtocol - Protocol string to append to URLs that have none
 * @returns - String corresponding to sanitized input depending if it's a search or url
 */
export const prefixUrlWithProtocol = (
  url: string,
  defaultProtocol = 'https://',
) => {
  const sanitizedURL = hasProtocol(url) ? url : `${defaultProtocol}${url}`;
  return sanitizedURL;
};

/**
 * Returns URL prefixed with protocol, which could be a search engine url if
 * a keyword is detected instead of a url
 *
 * @param input - String corresponding to url input
 * @param searchEngine - Protocol string to append to URLs that have none
 * @param defaultProtocol - Protocol string to append to URLs that have none
 * @returns - String corresponding to sanitized input depending if it's a search or url
 */
export function processUrlForBrowser(input: string, searchEngine = 'Google') {
  const defaultProtocol = 'https://';
  //Check if it's a url or a keyword
  if (!isUrl(input) && !input.match(regex.url)) {
    // Add exception for localhost
    if (
      !input.startsWith('http://localhost') &&
      !input.startsWith('localhost')
    ) {
      // In case of keywords we default to google search
      let searchUrl =
        'https://www.google.com/search?q=' + encodeURIComponent(input);
      if (searchEngine === 'DuckDuckGo') {
        searchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(input);
      }
      return searchUrl;
    }
  }
  return prefixUrlWithProtocol(input, defaultProtocol);
}

/**
 * Return an URL object from url string
 *
 * @param url - String containing url
 * @returns - URL object
 */
export function getUrlObj(url: string) {
  return new Url(url);
}

/**
 * Return host from url string
 *
 * @param url - String containing url
 * @param defaultProtocol
 * @returns - String corresponding to host
 */
export function getHost(url: string, defaultProtocol = 'https://') {
  const isValidUrl = isUrl(url);
  if (!isValidUrl) return url;

  const sanitizedUrl = prefixUrlWithProtocol(url, defaultProtocol);
  const { hostname } = getUrlObj(sanitizedUrl);

  const result = hostname === '' ? url : hostname;

  return result;
}

/**
 * This function verify if the hostname is a TLD
 * @param hostname - Represents the hostname of the URL
 * @param error - Represents the error of handleIpfsContent
 * @returns - True if its a TLD, false if it's not
 */
// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isTLD = (hostname: string, error: any) =>
  (hostname.slice(-4) !== '.eth' &&
    error.toString().indexOf('is not standard') !== -1) ||
  hostname.slice(-4) === '.xyz' ||
  hostname.slice(-5) === '.test';
/**
 *
 * List of all protocols that our webview load unconditionally
 */
export const protocolAllowList = ['about:', 'http:', 'https:'];

/**
 *
 * List of all trusted protocols for OS Linker to handle
 */
export const trustedProtocolToDeeplink = [
  'wc:',
  'metamask:',
  'ethereum:',
  'dapp:',
  'market:',
];

/**
 * Returns translated warning message for the
 * warning dialog box the user sees when the to be loaded
 * website tries to automatically start an external
 * service
 *
 * @param protocol - String containing the url protocol
 * @param i18nService - translator function
 * @returns - String corresponding to the warning message
 */
export const getAlertMessage = (
  protocol: string,
  i18nService: (id: string) => string,
) => {
  switch (protocol) {
    case 'tel:':
      return i18nService('browser.protocol_alerts.tel');
    case 'mailto:':
      return i18nService('browser.protocol_alerts.mailto');
    default:
      return i18nService('browser.protocol_alerts.generic');
  }
};

/**
 * Promps the Operating System for its ability
 * to open an URI outside the Webview
 * Executes it when a positive response is received.
 *
 * @param url - String containing url
 * @returns Promise<any>
 */
export const allowLinkOpen = (url: string) =>
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      }
      console.warn(`Can't open url: ${url}`);
      return null;
    })
    .catch((e) => {
      console.warn(`Error opening URL: ${e}`);
    });

/**
 * Appends search parameters to a URL and returns the complete URL string
 *
 * @param baseUrl - Base URL string or URL object
 * @param params - Record of key-value pairs to append as search parameters
 * @returns - String containing complete URL with appended parameters
 */
export const appendURLParams = (
  baseUrl: string | URL,
  params: Record<string, string | boolean | number>,
): URL => {
  const url = baseUrl instanceof URL ? baseUrl : new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  return url;
};

export const isTokenDiscoveryBrowserEnabled = () =>
  AppConstants.TOKEN_DISCOVERY_BROWSER_ENABLED;
