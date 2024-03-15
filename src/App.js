import Home from "./pages/home/home";
import { Routes, Route} from 'react-router-dom';
import Nav from "./component/navbar/nav";
import Map from "./pages/map/map";
import Settings from "./pages/settings/settings";
import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/map' element={<Map />}/>
      <Route path='/settings' element={<Settings />}/>
    </Routes>
    </div>
  );
}
export default App;
