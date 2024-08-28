import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Temperature from "./Pages/Temperature";
import Methane from "./Pages/Methane";
import Co2 from "./Pages/Co2";
import Glacier from "./Pages/Glacier";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/methane" element={<Methane />} />
        <Route path="/co2" element={<Co2 />} />
        <Route path="/glacier" element={<Glacier />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
