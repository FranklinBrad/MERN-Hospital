import Header from "./components/Header"
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Patients from "./pages/Patients";
export default function App(){

  return (
    <>
   
      <Header/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Patients" element={<Patients/>}/>
    </Routes>
    </>
  )
}
