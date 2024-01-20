import { lista } from "./model/adatok";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Publikus from "./pages/Publikus";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import Layout from "./Layout";



function App() {

  function kattintas(id) {
    console.log("szülőkomponensben", id);
  
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Publikus />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
