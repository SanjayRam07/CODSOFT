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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
