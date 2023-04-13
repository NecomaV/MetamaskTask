import React, {FC} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Registration from './components/Registration';
import Table from './components/Table';
import Profile from './components/Profile';

const App: FC = () => {
 
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <div className="reg_container">
        <Profile />
      </div>
      

    </div>
  );
}

export default App;
