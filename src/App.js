import './App.css';
import { RegisterPage } from './pages/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashBoardPage } from './pages/DashBoardPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashBoardPage/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
