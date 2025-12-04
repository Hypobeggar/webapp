import { BrowserRouter, Routes, Route } from "react-router";
import PlainResume from './PlainResume';
import MainResume from './MainResume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainResume />} />
        <Route path="/plain" element={<PlainResume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
