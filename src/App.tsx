import { BrowserRouter, Routes, Route } from "react-router";
import PlainResume from './PlainResume';
import MainResume from './MainResume';
import Portfolio from './Portifolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainResume />} />
        <Route path="/plain" element={<PlainResume />} />
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
