import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./Components/signin-signup/Login";
import Signup from "./Components/signin-signup/Signup";
import BasicInfo from "./Components/Add properties/BasicInfo";
import PropertyDetails from "./Components/Add properties/propertyDetails";
import GeneralInfo from "./Components/Add properties/generalinfo";
import LocationInfo from "./Components/Add properties/locationinfo";

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
