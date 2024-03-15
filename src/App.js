import Home from "./pages/home/home";
import { Routes, Route} from 'react-router-dom';
import Nav from "./component/navbar/nav";
import Map from "./pages/map/map";

function App() {
  return (
    <div className="App">
   <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
       <Route path='/map' element={<Map />}/>
    </Routes>
    </div>
  );
}
export default App;
