import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import BasicInfo from "./Components/Signup-Login/BasicInfo";
import PropertyDetails from "./Components/Signup-Login/propertyDetails";
import GeneralInfo from "./Components/Signup-Login/generalinfo";
import LocationInfo from "./Components/Signup-Login/locationinfo";

function App() {
  return (
    <>
    {/* <h1>Realestate project</h1> */}
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/basicinfo" element={<BasicInfo></BasicInfo>}></Route>
      <Route path="/propertydeatils" element={<PropertyDetails></PropertyDetails>}></Route>
      <Route path="/generalinfo" element={<GeneralInfo></GeneralInfo>}></Route>
      <Route path="/locationinfo" element={<LocationInfo></LocationInfo>}></Route>

    </Routes>
    
    </>
  );
}

export default App;
