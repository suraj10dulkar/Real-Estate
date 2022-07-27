import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";

function App() {
  return (
    <>
    {/* <h1>Realestate project</h1> */}
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>

    </Routes>
    
    </>
  );
}

export default App;
