import React from "react";
import { Link } from "react-router-dom";
import "./generalinfo.css"
import Header from "../header_sidebar/Header";

function GeneralInfo(){
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
    <div className="nav_1">
    <div className="basic"><span className="oa">1</span><span>    Basic Info</span></div>

    </div>
    <div className="nav_2">
    <div className="property"><span className="oa">2</span><span>    Property Details</span></div>

    </div>
    <div className="nav_three">
    <div className="general"><span className="oa">3</span><span>    General Info</span></div>

    </div>
    <div className="nav_fou">
    <div className="loc"><span className="oa">4</span><span>Location Info</span></div>

    </div>
</div>

</div>
        

        <form className="generalinfo">

            <div className="box9">
            <div className="name">
            <lable for="name" id="name">Ownership</lable>
            <div>
            <select name="name" className="select9">
                <option value="Owner">Owner</option>
                <option value="Self">Sellf</option>
                <option value="Family Member">Family Member</option>
            </select>
            </div>
            </div>

            <div className="mob">
                <label for="mobile">Mobile</label>
                <div>
                    <input className="mobile" placeholder="Enter Mobile Number"></input>
                </div>
            </div>
            </div>

            <div className="box10">
            <div className="postedby">
            <lable for="post" id="post">Posted By</lable>
            <div>
            <select name="post" className="select10">
                <option value="postedby">Posted By</option>
                <option value="Self">Sellf</option>
                <option value="Family Member">Family Member</option>
            </select>
            </div>
            </div>

            <div className="saletype">
            <lable for="sale" id="sale">Sale Type</lable>
            <div>
            <select name="sale" className="select11">
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>
            </div>

            <div className="box11">
            <div className="Featured Package">
            <lable for="pack" id="pack">Featured Packages</lable>
            <div>
            <select name="pack" className="select12">
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>

            <div className="ppd-Package">
            <lable for="ppd" id="ppd">PPD Packages</lable>
            <div>
            <select name="ppd" className="select13">
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>
            </div>
            
            <div className="image">
                <label for="image"></label>
                <div>
                    <input className="image" type="file"></input>
                </div>
            </div>

            <Link to="/propertydeatils"><button className="prev2">Previous</button></Link>
            <Link to="/locationinfo"><button className="save2">Save & Continue</button></Link>

        </form>

            </div>

        
        </>

    )
}

export default GeneralInfo;