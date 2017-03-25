export const SWITCH_CURRENCY = 'SWITCH_CURRENCY';

export const selectCurrency = (baseCurrency, rates) => {
  return {
    type: SWITCH_CURRENCY,
    baseCurrency: baseCurrency,
    rates: rates
  };
};
