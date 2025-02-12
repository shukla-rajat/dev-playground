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

function App() {
  return (
   <div>
      <CurrencyContext.Provider value='$'>
        <Books list={DATA} />
      </CurrencyContext.Provider>
   </div>
  );
}

const Books = ({list}) => (
  <ul>
    {list.map((item) => (
      <Book key={item.id} item={item}/>
    ))}
  </ul>
)

const Book = ({item}) => (
  <CurrencyContext.Consumer>
    {(currency) => (
        <li>{item.title} - {item.price} {currency}</li>
    )}
  </CurrencyContext.Consumer>
)
  

export default App
