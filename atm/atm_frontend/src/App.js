import { Signin } from './components/Signin';
import './App.css';
import { Signup } from './components/Signup';
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Home } from './components/Home';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';
import Deposit from './components/Deposit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/withdraw' element={<Withdraw/>}/>
          <Route path='/deposit' element={<Deposit/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
