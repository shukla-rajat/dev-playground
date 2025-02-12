import * as React from 'react';
import { CurrencyProvider, useCurrency, CURRENCIES } from './currency-context';

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

function App() {

  return (
    <div>
      <CurrencyProvider>
        <CurrencyButtons />
        <Books list={DATA} />
      </CurrencyProvider>
    </div>
  )
}

const CurrencyButtons = () => {
  const { onChange } = useCurrency();
  return Object.values(CURRENCIES).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)} >
      {item.label}
    </CurrencyButton>
  ));
}

const CurrencyButton = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

const Books = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Book key={item.id} item={item} />
    ))}
  </ul>
)

const Book = ({ item }) => {
  const { value } = useCurrency();
  return (
    <li>{item.title} - {item.price} {value.symbol}</li>
  );
}

export default App
