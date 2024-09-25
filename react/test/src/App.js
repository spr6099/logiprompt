import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './home';
import About from './about';
import Contact from './contact';
import Tests from './test1';
import Clock from './clock';
import Clocks from './clockFunction';
import Map from './map';
import State from './state';
import Ref from './ref';
import Api from './Api';

const date = new Date();
const times = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
 
function App() {
  return (
  
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/test' element={<Tests name="ammu" school="mgm"/>}></Route>
  <Route path='/clocks' element={<Clocks time = {times}/>}></Route>
  <Route path='/clock' element={<Clock time = {times}/>}></Route>
  <Route path='/map' element={<Map/>}></Route>
  <Route path='/state' element={<State/>}></Route>
  <Route path='/ref' element={<Ref/>}></Route>
  <Route path='/api' element={<Api/>}></Route>


</Routes>
</BrowserRouter>
  );
}

export default App;
