import React from "react";
import { Link } from "react-router-dom";
import "./propertydetails.css"

function PropertyDetails(){
    return(
        <div className="main">
        <h2>ADD NEW PROPERTY</h2>
        <div className="navbar">
            <div className="basic"><span className="oa">1</span><span><Link to="/basicinfo" className="basic1">    Basic Info</Link></span></div>
            <div className="property"><span className="oa">2</span><span><Link to="/propertydeatils" className="property1">    Property Details</Link></span></div>
            <div className="general"><span className="oa">3</span><span><Link to="/generalinfo" className="general1">    General Info</Link></span></div>
            <div className="loc"><span className="oa">4</span><span><Link to="/locationinfo" className="loc1">    Location Info</Link></span></div>
        </div>
        <form className="propertyform">
            <div className="box19">
            <div className="len">
                <label for="length">Length</label>
                <div>
                    <input className="length" placeholder="Example :1000"></input>
                </div>
            </div>

            <div className="breath">
                <label for="breath">Breath</label>
                <div>
                    <input className="bre" placeholder="Example :1000"></input>
                </div>
            </div>
            </div>

            <div className="box20">
            <div className="Total-area">
                <label for="area">Total Area</label>
                <div>
                    <input className="area1" placeholder="Example :7500"></input>
                </div>
            </div>

            <div className="area-unit">
            <lable for="unit" id="unit">Area Unit</lable>
            <div>
            <select name="unit" className="select17">
                <option value="meter">Meter Square</option>
                <option value="yard">Yard Square</option>
                <option value="cm">CM Square</option>
            </select>
            </div>
            </div>
            </div>
            
            <div className="box21">
            <div className="noofBHK">
            <lable for="bhk" id="bhk">No of BHK</lable>
            <div>
            <select name="bhk" className="select18">
                <option value="1-bhk">1 BHK</option>
                <option value="2-bhk">2 BHK</option>
                <option value="3-bhk">3 BHK</option>
            </select>
            </div>
            </div>

            <div className="nooffloor">
            <lable for="floor" id="floor">No of Floors</lable>
            <div>
            <select name="floor" className="select19">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </div>
            </div>

            </div>

            

            

            <div className="attached">
            <lable for="attach" id="attach">Attached</lable>
            <div>
            <select name="attach">
                <option value="1-bhk">Select Attached</option>
                <option value="2-bhk">Not Attached</option>
                <option value="3-bhk">Attached</option>
            </select>
            </div>
            </div>

            <div className="western">
            <lable for="toilet" id="toilet">Western Toliet</lable>
            <div>
            <select name="attach">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            </div>

            <div className="furnished">
            <lable for="furn" id="furn">Furnished</lable>
            <div>
            <select name="furn">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            </div>

            <div className="carparking">
            <lable for="car" id="car">Car Parking</lable>
            <div>
            <select name="car">
                <option value="south">South</option>
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
            </select>
            </div>
            </div>

            <div className="liftStatus">
            <lable for="lift" id="furn">Lift</lable>
            <div>
            <select name="lift">
                <option value="present">Present</option>
                <option value="absent">Absent</option>
            </select>
            </div>
            </div>

            <div className="electricity">
                <label for="ele">Electricity</label>
                <div>
                    <input className="ele" placeholder="Example :3 Phase"></input>
                </div>
            </div>

            <div className="face">
            <lable for="facing" id="facing">Facing</lable>
            <div>
            <select name="facing">
                <option value="south">South</option>
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
            </select>
            </div>
            </div>

            <Link to="/basicinfo"><button className="cancel">Previous</button></Link>
            <Link to="/generalinfo"><button className="save2">Save & Continue</button></Link>
        </form>
        </div>
    )
}

export default PropertyDetails;