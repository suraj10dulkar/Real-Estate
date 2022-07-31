import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BasicInfo.css";
import Header from "../header_sidebar/Header";
import Sidebar from "../header_sidebar/Sidebar";

function BasicInfo(){
    const [data, setdata]=useState({
        property_type:"",
        negotiable:"",
        ownership:"",
        price:"",
        property_age:"",
        property_approved:"",
        property_description:"",
        bank_loan:""
    })

    const handlebasic=()=>{
        console.log(data)
    }

    
    return(
        <>
        <Header/>
        <Sidebar/>
        <div className="main_section">

            <div className="heading_section">
                    <h2>ADD NEW PROPERTY</h2>
            </div>


            <div className="nav_section">
            <div className="navbar">
                <div className="nav_one">
                <div className="basic"><span className="oa">1</span><span>    Basic Info</span></div>

                </div>
                <div className="nav_2">
                <div className="property"><span className="oa">2</span><span>    Property Details</span></div>

                </div>
                <div className="nav_three3">
                <div className="general"><span className="oa">3</span><span>General Info</span></div>

                </div>
                <div className="nav_f">
                <div className="loc"><span className="oa">4</span><span>Location Info</span></div>

                </div>
            </div>

            </div>
        <form className="basicform" >
            <div className="box1">
            <div className="proType">
            <lable for="pro" id="pro">Propert Type</lable>
            <div>
            <select value={data.property_type} name="pro" className="select" onChange={e=>setdata({...data,property_type: e.target.value})} >
                <option value="Not-Selected">Select Propert Type</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Land">Land</option>
            </select>
            </div>
            </div>

            <div className="negotableSelect">
            <lable for="nego" id="nego">Negotiable</lable>
            <div>
            <select name="nego" className="select1" onChange={e=>setdata({...data,negotiable: e.target.value})}>
                <option value="Select">Select Nogtiable</option>
                <option value="Nogtiable">NogtiableNogtiable</option>
                <option value="Nogtiable">Nogtiable</option>
            </select>
            </div>
            </div>
            </div>
            
            <div className="box2">

            <div className="priceSelect">
                <div>
                    <label for="price">Price</label>
                </div>
                <input className="select3" placeholder="Example: 1000" onChange={e=>setdata({...data,price: e.target.value})}></input>
            </div>

            <div className="ownershipSelect">
            <lable for="ownership" id="ownership">Ownership</lable>
            <div>
            <select name="ownership" className="select4" onChange={e=>setdata({...data,ownership: e.target.value})}>
            <option value="Not-Selected">Select Ownership</option>
                <option value="Self Owned">Self Owned</option>
                <option value="Rented">Rented</option>
                <option value="Family Owned">Family Owned</option>
            </select>
            </div>
            </div>
            </div>
            
            <div className="box3">
            <div className="propertyageSelect">
            <lable for="propertyage" id="propertyage">Propert Age</lable>
            <div>
            <select name="propertyage" className="select5" onChange={e=>setdata({...data,property_age: e.target.value})}>
            <option value="Not-Selected">Select Property Age</option>
                <option value="old">old</option>
                <option value="Intermediate">Intermediate</option>
                <option value="new">New</option>
            </select>
            </div>
            </div>
            <div className="propertyapprovedSelect">
            <lable for="propertyapproved" id="propertyapproved">Property Approved</lable>
            <div>
            <select name="propertyapproved" className="select6" onChange={e=>setdata({...data,property_approved: e.target.value})}>
                <option value="Property Approved">Property Approved</option>
                <option value="Property Not Approved">Property Not Approved</option>
            </select>
            </div>
            </div>
            </div>

            <div className="box4">
            <div className="desciprtion">
                <div>
                    <label for="Description">Desciption</label>
                </div>
                <input className="select7" onChange={e=>setdata({...data,property_description: e.target.value})} ></input>
            </div>

            <div className="BankLoanSelect">
            <lable for="BankLoan" id="BankLoan">Bank Loan</lable>
            <div>
            <select name="BankLoan" className="select8" onChange={e=>setdata({...data,bank_loan: e.target.value})}>
                <option value="Bank Loan">Bank Loan</option>
                <option value="No Bank Loan">Bank Laon not Taken</option>
            </select>
            </div>
            </div>

            </div>
            
            
            <Link to=""><button className="cancel">Cancel</button></Link>
            <Link to="/propertydeatils"><button className="save2" onClick={handlebasic}>Save & Continue</button></Link>
        </form>
        </div>
        </>
    )
}

export default BasicInfo;