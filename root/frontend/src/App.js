import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './Sass/main.scss';
import Register from './pages/Register';
import AddCard from './pages/AddCard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/add-card" element={<AddCard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
