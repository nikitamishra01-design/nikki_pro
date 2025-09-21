
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Get from "./Get";
import Post from "./Post";
import Box from "./Box";
import Navbar from "./components/Navbar";
import Show   from "./Show"
import Axios from "./Axios";
import Counter from "./Counter"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/box" element={<Box />} />
         <Route path="/nav" element={<Navbar />} />
         <Route path="/show" element={<Show  />} />
         <Route path="/axios" element={<Axios />} />
         <Route path="/count" element={<Counter />} />
         

   
   
      </Routes>
    </Router>
  );
}

export default App;
