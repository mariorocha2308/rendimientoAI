import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from '../src/components/NavBar.jsx';
import Home from '../src/components/Home.jsx';
import Analytics from '../src/components/Analytics.jsx';
import Setting from '../src/components/Settings.jsx';
import LogOut from '../src/components/LogOut.jsx';
import TopBar from '../src/components/TopBar.jsx'
import SignIn from '../src/components/SignIn.jsx'
import Register from '../src/components/Register'
import EmployeDetail from '../src/components/EmployeDetail.jsx'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getEmployes} from './redux/actions/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getEmployes())
  },[dispatch])

  return (
    <div className="App">
      <NavBar/>
      <TopBar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/analytics" element={<Analytics/>} />
        <Route exact path="/setting" element={<Setting/>} />
        <Route exact path="/logout" element={<LogOut/>} />
        <Route exact path="/signIn" element={<SignIn/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/Employe/:id" element={<EmployeDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
