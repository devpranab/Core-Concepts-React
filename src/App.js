import React, { useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Tiger', 'Sahid', 'Ranveer', 'Akshay', 'Sharukh'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Pdf Reader', price: '$40.99'}
  ]
  //Map for dynamic
  //const productNames = products.map(product => product.name);

  return ( 
    <div className="App">
      <Counter></Counter>
<ul>
  {
    nayoks.map(nayok => <li>{nayok}</li>)
  }
    {
    products.map(product => <li>{product.name}</li>)
  }
  {/* <li>{nayoks[0]}</li>
  <li>{nayoks[1]}</li>
  <li>{nayoks[2]}</li>
  <li>{nayoks[3]}</li>
  <li>{nayoks[4]}</li> */}
</ul>

      <h2>App Component</h2>

    {
      products.map(product => <Product product={product}></Product>)
    }

      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>

    <Person name="Ramij" job="Marketer"></Person>
    <Person name="Pranav" job="Designer"></Person>
    <Person name="Siraj" job="Developer"></Person>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(5);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Counting: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
 
  }
  //destructure
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>Name: {name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: '2px solid gold', margin: '15px'}}>
      <h3>{props.name}</h3>
       <p>My Job: {props.job}</p>
    </div>
  )
}

export default App;
