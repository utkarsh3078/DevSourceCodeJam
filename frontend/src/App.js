
import { Route ,  BrowserRouter as Router , Routes } from "react-router-dom";
import Land from "./pages/LandingPage";
import { useState } from "react";
import Home from "./pages/Home";
function App() {
  const [Authented , setAuthented] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={ Authented ? <Home/> : <Land Authented = {Authented} setAuthented = {setAuthented}/>}></Route>
        <Route path="/landing" element={<Land Authented = {Authented} setAuthented = {setAuthented} />} />
        <Route path="*" element={ Authented ? <Home Authented = {Authented} setAuthented = {setAuthented} /> : <Land/> }></Route>
      </Routes>
  </Router>
  );
}

export default App;
