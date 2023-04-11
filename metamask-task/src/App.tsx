import React, {FC} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'

const App: FC = () => {
 
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
