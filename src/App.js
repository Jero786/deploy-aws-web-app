import logo from './logo.svg';
import './App.css';
import VERSION  from '../package.json'
import {useGetUsers} from "./hooks/useGetUsers";
import {Loading} from './components/Loading';

function App() {
  const {isLoading: isFetchingUsers, users, hasError} = useGetUsers();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isFetchingUsers && <Loading/>}
          {users && <div>User fetched: {JSON.stringify(users)}</div>}
        </a>
      </header>
    </div>
  );
}

export default App;
