import React from "react";
import { Link } from "react-router-dom";
import "./BasicInfo.css";

function BasicInfo(){
    return(
        <div className="main">
        <h2>ADD NEW PROPERTY</h2>
        <div className="navbar">
            <div className="basic"><span className="oa">1</span><span><Link to="/basicinfo" className="basic1">    Basic Info</Link></span></div>
            <div className="property"><span className="oa">2</span><span><Link to="/propertydeatils" className="property1">    Property Details</Link></span></div>
            <div className="general"><span className="oa">3</span><span><Link to="/generalinfo" className="general1">    General Info</Link></span></div>
            <div className="loc"><span className="oa">4</span><span><Link to="/locationinfo" className="loc1">    Location Info</Link></span></div>
        </div>
        <form>
            <div className="proType">
            <lable for="pro" id="pro">Propert Type</lable>
            <div>
            <select name="pro">
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Land">Land</option>
            </select>
            </div>
            </div>
            
            <div className="negotableSelect">
            <lable for="nego" id="nego">Negotiable</lable>
            <div>
            <select name="nego">
                <option value="Select">Select Nogtiable</option>
                <option value="Nogtiable">NogtiableNogtiable</option>
                <option value="Nogtiable">Nogtiable</option>
            </select>
            </div>
            </div>

            <div className="priceSelect">
                <div>
                    <label for="price">Price</label>
                </div>
                <input placeholder="Example: 1000"></input>
            </div>
            
            <div className="ownershipSelect">
            <lable for="ownership" id="ownership">Ownership</lable>
            <div>
            <select name="ownership">
                <option value="Self Owned">Self Owned</option>
                <option value="Rented">Rented</option>
                <option value="Family Owned">Family Owned</option>
            </select>
            </div>
            </div>
            
            <div className="propertyageSelect">
            <lable for="propertyage" id="propertyage">Propert Age</lable>
            <div>
            <select name="propertyage">
                <option value="old">old</option>
                <option value="Intermediate">Intermediate</option>
                <option value="new">New</option>
            </select>
            </div>
            </div>

            <div className="propertyapprovedSelect">
            <lable for="propertyapproved" id="propertyapproved">Property Approved</lable>
            <div>
            <select name="propertyapproved">
                <option value="Property Approved">Property Approved</option>
                <option value="Property Not Approved">Property Not Approved</option>
            </select>
            </div>
            </div>

            <div className="desciprtion">
                <div>
                    <label for="Description">Desciption</label>
                </div>
                <input ></input>
            </div>

            <div className="BankLoanSelect">
            <lable for="BankLoan" id="BankLoan">Bank Loan</lable>
            <div>
            <select name="BankLoan">
                <option value="Bank Loan">Bank Loan</option>
                <option value="No Bank Loan">Bank Laon not Taken</option>
            </select>
            </div>
            </div>

            <Link to=""><button className="cancel">Cancel</button></Link>
            <Link to="/propertydeatils"><button className="save2">Save & Continue</button></Link>
        </form>
        </div>
    )
}

export default BasicInfo;