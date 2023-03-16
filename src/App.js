import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile fullname="zakaria" bio="no bio yet" profession="devloper">
        <img src="/logo192.png" alt="" />
      </Profile>
    </div>
  );
}

export default App;
