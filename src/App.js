import './App.css';
import Home from './pages/home/home';
import { Routes, Route} from 'react-router-dom';
import Nav from './component/navbar/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
