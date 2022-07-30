import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import "./locationinfo.css"
import Header from "../header_sidebar/Header";

function LocationInfo(){

    const [data, setdata]=useState({
        email:"",
        city:"",
        area:"",
        pincode:"",
        address:"",
        landmark:"",
        latitude:"",
        longitude:"",
    })

    const handlelocation=()=>{
        console.log(data)
    }

    
    return(
        <>
        <hr></hr>
        <Header/>
        <div className="main_section">

            <div className="heading_section">
                    <h2>ADD NEW PROPERTY</h2>
            </div>


            <div className="nav_section">
            <div className="navbar">
                <div className="nav_first">
                <div className="basic"><span className="oa">1</span><span>    Basic Info</span></div>

                </div>
                <div className="nav_second">
                <div className="property"><span className="oa">2</span><span>    Property Details</span></div>

                </div>
                <div className="nav_third">
                <div className="general"><span className="oa">3</span><span>General Info</span></div>

                </div>
                <div className="nav_four">
                <div className="loc"><span className="oa">4</span><span>   Location Info</span></div>

                </div>
            </div>

            </div>

        <form className="locationform">


            <div className="box12">
            <div className="email">
                <label for="email">Email</label>
                <div>
                    <input className="email" placeholder="Email" onChange={e=>setdata({...data,email: e.target.value})}></input>
                </div>
            </div>
            <div className="address">
                <label for="add">Address</label>
                <div>
                    <input className="add" placeholder="Address" onChange={e=>setdata({...data,address: e.target.value})}></input>
                </div>
            </div>
            </div>
        
        <div className="box13">
        <div className="city">
            <lable for="city" id="city">City</lable>
            <div>
            <select name="city" className="select14" onChange={e=>setdata({...data,city: e.target.value})}>
                <option value="Bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="hydrbad">Hydrabad</option>
                <option value="kolkata">Kolkata</option>
            </select>
            </div>
            </div>

            <div className="area">
            <lable for="area" id="area">Area</lable>
            <div>
            <select name="area" className="select15" onChange={e=>setdata({...data,area: e.target.value})}>
                <option value="pune">Pune</option>
                <option value="jodhpur">Jodhpur</option>
                <option value="goa">Goa</option>
            </select>
            </div>
            </div>
        </div>


        <div className="box14">
        <div className="pincode">
            <lable for="pincode" id="pincode">Pincode</lable>
            <div>
            <select name="pincode" className="select16" onChange={e=>setdata({...data,pincode: e.target.value})}>
                <option value="512468">512468</option>
                <option value="987456">987456</option>
                <option value="123456">123456</option>
            </select>
            </div>
            </div>
            <div className="landmark">
                <label for="land">Landmark</label>
                <div>
                    <input className="land" placeholder="Landmark" onChange={e=>setdata({...data,landmark: e.target.value})}></input>
                </div>
        </div>
        </div>

        <div className="box15">
        <div className="lat">
                <label for="latitude">Latitude</label>
                <div>
                    <input className="latitude" placeholder="Latitude" onChange={e=>setdata({...data,latitude: e.target.value})}></input>
                </div>
        </div>

        <div className="long">
                <label for="longitude">Longitude</label>
                <div>
                    <input className="longitude" placeholder="Longitude" onChange={e=>setdata({...data,longitude: e.target.value})}></input>
                </div>
        </div>
        </div>
        <Link to="/generalinfo"><button className="prev3">Previous</button></Link>
        <button className="save2" onClick={handlelocation}>ADD PROPERTY</button>
        </form>

        

        

        </div>
        </>
    )
}

export default LocationInfo;