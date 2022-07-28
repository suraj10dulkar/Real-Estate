import React from "react";
import { Link } from "react-router-dom";

function GeneralInfo(){
    return(
        <div className="main">
        <h2>ADD NEW PROPERTY</h2>
        <div className="navbar">
            <div className="basic"><span className="oa">1</span><span><Link to="/basicinfo" className="basic1">    Basic Info</Link></span></div>
            <div className="property"><span className="oa">2</span><span><Link to="/propertydeatils" className="property1">    Property Details</Link></span></div>
            <div className="general"><span className="oa">3</span><span><Link to="/generalinfo" className="general1">    General Info</Link></span></div>
            <div className="loc"><span className="oa">4</span><span><Link to="/locationinfo" className="loc1">    Location Info</Link></span></div>
        </div>

            <div className="name">
            <lable for="name" id="name">Ownership</lable>
            <div>
            <select name="name">
                <option value="Owner">Owner</option>
                <option value="Self">Sellf</option>
                <option value="Family Member">Family Member</option>
            </select>
            </div>
            </div>

            <div className="mobile">
                <label for="mobile">Mobile</label>
                <div>
                    <input className="mobile" placeholder="Enter Mobile Number"></input>
                </div>
            </div>

            <div className="postedby">
            <lable for="post" id="post">Posted By</lable>
            <div>
            <select name="post">
                <option value="postedby">Posted By</option>
                <option value="Self">Sellf</option>
                <option value="Family Member">Family Member</option>
            </select>
            </div>
            </div>

            <div className="saletype">
            <lable for="sale" id="sale">Sale Type</lable>
            <div>
            <select name="sale">
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>

            <div className="Featured Package">
            <lable for="pack" id="pack">Featured Packages</lable>
            <div>
            <select name="pack">
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>

            <div className="ppd-Package">
            <lable for="ppd" id="ppd">PPD Packages</lable>
            <div>
            <select name="ppd">
                <option value="Please Select">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>

            <div className="image">
                <label for="image">Mobile</label>
                <div>
                    <input className="image" type="file"></input>
                </div>
            </div>

            <Link to="/propertydeatils"><button className="prev2">Previous</button></Link>
            <Link to="/locationinfo"><button className="save2">Save & Continue</button></Link>


            </div>


    )
}

export default GeneralInfo;