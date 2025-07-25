import { QuoteMetadata, QuoteResponse } from '@metamask/bridge-controller';
import { QuoteMetadataSerialized } from '@metamask/bridge-status-controller';

export const serializeQuoteMetadata = (
  quoteResponse: QuoteResponse & QuoteMetadata,
): QuoteResponse & QuoteMetadataSerialized => {
  try {
    return {
      ...quoteResponse,
      sentAmount: {
        amount: quoteResponse.sentAmount.amount.toString(),
        valueInCurrency: quoteResponse.sentAmount.valueInCurrency
          ? quoteResponse.sentAmount.valueInCurrency.toString()
          : null,
        usd: quoteResponse.sentAmount.usd
          ? quoteResponse.sentAmount.usd.toString()
          : null,
      },
      gasFee: {
        amount: quoteResponse.gasFee.amount.toString(),
        valueInCurrency: quoteResponse.gasFee.valueInCurrency
          ? quoteResponse.gasFee.valueInCurrency.toString()
          : null,
        usd: quoteResponse.gasFee.usd
          ? quoteResponse.gasFee.usd.toString()
          : null,
      },
      totalNetworkFee: {
        amount: quoteResponse.totalNetworkFee.amount.toString(),
        valueInCurrency: quoteResponse.totalNetworkFee.valueInCurrency
          ? quoteResponse.totalNetworkFee.valueInCurrency.toString()
          : null,
        usd: quoteResponse.totalNetworkFee.usd
          ? quoteResponse.totalNetworkFee.usd.toString()
          : null,
      },
      totalMaxNetworkFee: {
        amount: quoteResponse.totalMaxNetworkFee.amount.toString(),
        valueInCurrency: quoteResponse.totalMaxNetworkFee.valueInCurrency
          ? quoteResponse.totalMaxNetworkFee.valueInCurrency.toString()
          : null,
        usd: quoteResponse.totalMaxNetworkFee.usd
          ? quoteResponse.totalMaxNetworkFee.usd.toString()
          : null,
      },
      toTokenAmount: {
        amount: quoteResponse.toTokenAmount.amount.toString(),
        valueInCurrency: quoteResponse.toTokenAmount.valueInCurrency
          ? quoteResponse.toTokenAmount.valueInCurrency.toString()
          : null,
        usd: quoteResponse.toTokenAmount.usd
          ? quoteResponse.toTokenAmount.usd.toString()
          : null,
      },
      adjustedReturn: {
        valueInCurrency: quoteResponse.adjustedReturn.valueInCurrency
          ? quoteResponse.adjustedReturn.valueInCurrency.toString()
          : null,
        usd: quoteResponse.adjustedReturn.usd
          ? quoteResponse.adjustedReturn.usd.toString()
          : null,
      },
      swapRate: quoteResponse.swapRate.toString(),
      cost: {
        valueInCurrency: quoteResponse.cost.valueInCurrency
          ? quoteResponse.cost.valueInCurrency.toString()
          : null,
        usd: quoteResponse.cost.usd ? quoteResponse.cost.usd.toString() : null,
      },
    };
  } catch (error) {
    console.error('Error in serializeQuoteMetadata:', error);
    throw error;
  }
};
