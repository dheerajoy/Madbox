import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import "./components/home.scss"

function App(){
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>s
        </Routes>
    </Router>
  );
}

export default App;
