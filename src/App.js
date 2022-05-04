import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Pdf Reader', price: '$40.99'}
  ]
  return ( 
    <div className="App">
      <h2>App Component</h2>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>

    <Person name="Ramij" job="Marketer"></Person>
    <Person name="Pranav" job="Designer"></Person>
    <Person name="Siraj" job="Developer"></Person>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
 
  }
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
