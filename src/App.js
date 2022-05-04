import './App.css';

function App() {
  return ( 
    <div className="App">

      <h2>App Component</h2>
    <Person/>
    <Person/>
    </div>
  );
}

function Person(){
  const personStyle = {
    border: '2px solid blue',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Person Component</h1>
      <p>Something of Person</p>
    </div>
  )
}

export default App;
