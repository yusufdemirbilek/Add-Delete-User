import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  return (
    <div className="App">
      <AddUser/>
      <UserList users={[]}></UserList>
    </div>
  );
}

export default App;
