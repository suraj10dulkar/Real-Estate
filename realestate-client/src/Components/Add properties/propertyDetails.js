import React from "react";
import { Link } from "react-router-dom";
import "./propertDetails.css"
import Header from "../header_sidebar/Header";

function PropertyDetails(){
    return(
        <>
        <div className="prime">
        <Header/>
        <div className="main_section">

            <div className="heading_section">
                    <h2>ADD NEW PROPERTY</h2>
            </div>


            <div className="nav_section">
            <div className="navbar">
                <div className="nav_one">
                <div className="basic"><span className="oa">1</span><span>    Basic Info</span></div>

                </div>
                <div className="nav_two">
                <div className="property"><span className="oa">2</span><span>    Property Details</span></div>

                </div>
                <div className="nav_three">
                <div className="general"><span className="oa">3</span><span>General Info</span></div>

                </div>
                <div className="nav_four">
                <div className="loc"><span className="oa">4</span><span>Location Info</span></div>

                </div>
            </div>

            </div>

            
            <div className="form_section">
            <form>
                <div className="form_row">
                <div className="form_row_one">

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

            <div className="form_row_two">

            <div className="Total-area">
                <label for="area">Total Area</label>
                <div>
                    <input className="area" placeholder="Example :7500"></input>
                </div>
            </div>

            <div className="area-unit">
            <lable for="unit" id="unit">Area Unit</lable>
            <div>
            <select className="areaunit" name="unit">
                <option value="meter">Meter Square</option>
                <option value="yard">Yard Square</option>
                <option value="cm">CM Square</option>
            </select>
            </div>
            </div>

            </div>

           <div className="form_row_three">

           <div className="noofBHK">
            <lable for="bhk" id="bhk">No of BHK</lable>
            <div>
            <select className="bhk" name="bhk">
                <option value="1-bhk">1 BHK</option>
                <option value="2-bhk">2 BHK</option>
                <option value="3-bhk">3 BHK</option>
            </select>
            </div>
            </div>

            <div className="nooffloor">
            <lable for="floor" id="floor">No of Floors</lable>
            <div>
            <select className="floor" name="floor">
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
            
            <div className="form_row_four">

            <div className="attached">
            <lable for="attach" id="attach">Attached</lable>
            <div>
            <select className="attach" name="attach">
                <option value="1-bhk">Select Attached</option>
                <option value="2-bhk">Not Attached</option>
                <option value="3-bhk">Attached</option>
            </select>
            </div>
            </div>

            <div className="western">
            <lable for="toilet" id="toilet">Western Toliet</lable>
            <div>
            <select className="toilet"  name="attach">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            </div>

            </div>

            <div className="form_row_five">

                
            <div className="furnished">
            <lable for="furn" id="furn">Furnished</lable>
            <div>
            <select className="furnish" name="furn">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            </div>

            <div className="carparking">
            <lable for="car" id="car">Car Parking</lable>
            <div>
            <select className="car" name="car">
                <option value="south">South</option>
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
            </select>
            </div>
            </div>

            </div>

            <div className="form_row_six">

            <div className="liftStatus">
            <lable for="lift" id="furn">Lift</lable>
            <div>
            <select className="lift" name="lift">
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


            </div>

           <div className="form_row_seven">

           <div className="face">
            <lable for="facing" id="facing">Facing</lable>
            <div>
            <select className="facing" name="facing">
                <option value="south">South</option>
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
            </select>
            </div>
            </div>


           </div>

           </div>


            
            
           
        </form>
          </div>

            <div className="button_section">
                    <Link to="/basicinfo"><button type="button" className="cancel">Previous</button></Link>
                    <Link to="/generalinfo"><button type="button" className="save2">Save & Continue</button></Link>
            </div>
        
        </div>
        </div>
        </>
    )
}

export default PropertyDetails;