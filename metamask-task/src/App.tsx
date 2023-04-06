import React, {FC} from 'react';
import './App.css';
import { Person } from './components/Person';
import Navbar from './components/Navbar';

const App: FC = () => {
 
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
