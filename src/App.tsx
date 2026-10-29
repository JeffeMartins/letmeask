import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewRoom } from './pages/newRoom';import { Home } from './pages/Home';import { AuthContextProvider } from './contexts/AuthContext';
export default function App(){return <BrowserRouter><AuthContextProvider><Routes><Route path="/" element={<Home/>}/><Route path="/rooms/new" element={<NewRoom/>}/><Route path="*" element={<Home/>}/></Routes></AuthContextProvider></BrowserRouter>;}
