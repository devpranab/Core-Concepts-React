import './App.css';

function App() {
  const personList = ["Rubel", "Sujit", "Salman"];
  return ( 
    <div className="App">

      <h2>App Component</h2>
    <Person name={personList[1]} title="Hasan"/>
    <Person name="Ramij" title="Reja"/>
    <Person name="Pranav" title="Sarkar"/>
    <Person name="Siraj" title="Roy"/>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: '2px solid blue',
    margin: '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1>{props.name} {props.title}</h1>
      <p>Something of Person</p>
    </div>
  )
}

export default App;
