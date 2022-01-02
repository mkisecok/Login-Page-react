import SignIn from './components/SignIn';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
     
    </div>
    <Routes>
        <Route path='/signin' exact element={<SignIn/>}/>
        <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
