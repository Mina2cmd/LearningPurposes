import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Layout";
import {useNavigate,Link} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <main>
        <Layout />
      </main>
      <footer>
        <Link to="https://www.cloudhadoop.com/reactjs-change-default-port/#:~:text=How%20to%20change%20default%20port%20in%20React%20with,of%20an%20application.%20...%204%20Wrap%20up%20">Go to this</Link>
        {/* <button className='btn btn-primary' onClick={()=>navigate('https://www.cloudhadoop.com/reactjs-change-default-port/#:~:text=How%20to%20change%20default%20port%20in%20React%20with,of%20an%20application.%20...%204%20Wrap%20up%20')}> Go to link</button> */}
      </footer>
    </div>
  );
}

export default App;
