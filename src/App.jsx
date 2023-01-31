import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from './pages/Home/HomePage';
import CountryList from './pages/CountryList/CountryList';
import CountryPage from "./pages/CountryPage/CountryPage";
import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/countries" element={<CountryList />} />
      <Route path="/country" element={<CountryPage />} />
    </Routes>
    </>
  );
}

export default App
