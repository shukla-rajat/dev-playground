import * as React from 'react';
import { CurrencyContext } from './currency-context';

const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99
  },
];

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

function App() {
  const [currency, setCurrency] = React.useState('$');

  return (
    <div>
      <CurrencyContext.Provider value={currency}>
        <CurrencyButtons onChange={setCurrency} /> 
        <Books list={DATA} />
      </CurrencyContext.Provider>
    </div>
  )
}

const CurrencyButtons = ({onChange}) => {
  return Object.values(CURRENCIES).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)} >
      {item.label}
    </CurrencyButton>
  ));
}

const CurrencyButton = ({children, onClick}) => (
  <button
  type="button"
  onClick={onClick}
  >
    {children}
  </button>
);

const Books = ({list}) => (
  <ul>
    {list.map((item) => (
      <Book key={item.id} item={item}/>
    ))}
  </ul>
)

const Book = ({item}) => {
  const currency = React.useContext(CurrencyContext);
  return (
      <li>{item.title} - {item.price} {currency.symbol}</li>
  );
}
  
export default App
