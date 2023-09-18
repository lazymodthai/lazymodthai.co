import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Social from './components/Social';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Social />
    </div>
  );
}

export default App;
