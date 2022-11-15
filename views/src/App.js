import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {Register, Login, ResetPassword, ForgetPassword } from './Components/index'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
