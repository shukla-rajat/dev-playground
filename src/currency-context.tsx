import React from 'react';

const CURRENCIES = {
  Euro: {
    symbol: '€',
    label: 'Euro'
  },
  Usd: {
    symbol: '$',
    label: 'Dollor'
  },
};

const CurrencyContext = React.createContext(null);

const CurrencyProvider = ({ value, children }) => {
  const [currency, setCurrency] = React.useState(CURRENCIES.Usd);
  return (<CurrencyContext.Provider value={[currency, setCurrency]}>
    {children}
  </CurrencyContext.Provider>
  );
}

const useCurrency = () => {
  const [currency, setCurrency] = React.useContext(CurrencyContext);
  const handleCurrency = (value) => {
    setCurrency(value);
  }
  return { value: currency, onChange: handleCurrency }
}

export { CurrencyProvider, useCurrency, CURRENCIES };