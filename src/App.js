import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import {List} from "./Pages/list/List"
import { Hotel } from './Pages/Hotel/Hotel';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/hotels" element={<List/>}></Route>
      <Route path="/hotels/:id" element={<Hotel/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

