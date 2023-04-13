import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import jwt from "jwt-decode"
import Header from './component/header';
import Register from './component/register';
import Login from './component/login';
import Tasks from './component/tasks';
import './App.css';
import { useState } from 'react';

function App() {
const [token,setToken] = useState('');
const handleToken = (arg)=>{
  const user = jwt(arg)
  setToken(user.id)
}
console.log(token)

  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/register' exact element={<Register/>} />
        <Route path='/Login' exact element={<Login Token={handleToken}/>}/>
        <Route path='Tasks'  exact element={<Tasks userId={token}/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
