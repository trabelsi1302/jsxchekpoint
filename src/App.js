import Address from "./component/Profils/Address";
import FullName from "./component/Profils/FullName";
import ProfilePhoto from "./component/Profils/ProfilePhoto";
import Email from "./component/Profils/Email";
function App() {
  const name='elytes trabelsi'
  const style={color:"red"}

  return (
    <div className="App">
      <header className="App-header">   
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{name}</h1>
   <ProfilePhoto />
   <Address />
   <FullName />
   <Email name={name} style={style}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
