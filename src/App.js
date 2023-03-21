import Address from "./component/Profils/Address";
import FullName from "./component/Profils/FullName";
import ProfilePhoto from "./component/Profils/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
   <ProfilePhoto />
   <Address />
   <FullName />
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
