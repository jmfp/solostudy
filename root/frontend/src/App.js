import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './Sass/main.scss';
import Register from './pages/Register';
import AddCard from './pages/AddCard';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DeckEdit from './pages/DeckEdit';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/add-card" element={<AddCard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/deck/:deckId" element={<DeckEdit/>}/>
          <Route path="/quiz/:deckId" element={<QuizPage/>}/>
          <Route path="/results/:deckId/:score" element={<ResultPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
