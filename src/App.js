import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cube from './components/main/Cube';
import TicTacToe from './components/TicTacToe/main';

function App() {
  return (
    <>
      {/* <Cube /> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Cube />} />
          <Route path='/TicTacToe' element={<div style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#222325', height:'580px'}}><TicTacToe /></div>} />
        </Routes>
      </HashRouter>
      {/* 
        Used HashRouter instead of BrowserRouter
        For a route like localhost:3000/#/TicTacToe , 
        HashRouter only sends the part before the # to the server in GET request
        The client side routing (which in this case is done by react-router) takes care of the value after the hash
        Whereas BrowserRouter will send a get request to the complete URL
        Need HashRouter only for the purpose of deploying since don't have control over how server responds to unavailable GET requests
      */}
    </>
  );
}

export default App;
