import logo from './logo.svg';
import './App.css';

function App() {
  //js code
  let name = "Pranav Sarkar";
  let person = {
    name: "Ashik Sarkar",
    job: 'Doctor'
  }
  let style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return ( //jsx syntax
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" /> 
        <h1 style={style}>Who: {person.name +" "+ person.job}</h1>
        <p>My name is {name}</p> {/* {js code} */}
        
      </header>
    </div>
  );
}

export default App;
