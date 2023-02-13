import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Appointments from './components/Appointments';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';



const API_URL = "http://localhost:3000/api/v1/appointments"

function getApiData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [appointments,setAppointments] = useState([])

  useEffect(() =>{
    let mounted = true;
    getApiData().then((items) =>{
      if (mounted){
        setAppointments(items)
      }
    })
  return () => (mounted = false)
}, []);

  return (
      <HomePage appointments={appointments} />
  );
}

export default App;
