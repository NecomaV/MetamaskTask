import React, {FC} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Registration from './components/Registration';

const App: FC = () => {
 
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Registration/>
    </div>
  );
}

export default App;
