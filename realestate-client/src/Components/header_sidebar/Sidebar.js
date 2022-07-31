import React from 'react';
import { BsBell,BsTag } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { TbEye,TbArrowBarUp,TbArrowBarToDown } from "react-icons/tb";
import "./Sidebar.css";

const Sidebar = () =>{
    return(
        <>
       

            <div className='container'>
               <div className='sidebar'>
                <div className='top_column'>
                    <h1 className='logo'>Logo</h1>
                    <div className='content_column'>
                    <div className='content_row'>
                        <MdOutlineOtherHouses className='home'/> <p className='home_text'>Property</p>
                    </div>
                    <div className='content_row'>
                        <BsBell className='bell' /> <p className='bell_text'>Assitance</p>
                    </div>
                    <div className='content_row'>
                        <TbArrowBarToDown className='down'/>  <p className='down_text'>Recieved Intrest</p>
                    </div>
                    <div className='content_row'>
                         <TbArrowBarUp className='up'/> <p className='up_text'>Sent Intrest</p> 
                    </div>
                    <div className='content_row'>
                         <TbEye className='eye'/>  <p className='eye_text'>Property Views</p> 
                    </div>
                    <div className='content_row'>
                         <BsTag className='tag'/>  <p className='tag_text'>Traffic Plans</p> 
                    </div>
                    
                    
                    
                    
                    
                    
                    </div>
                </div>

               </div>
            </div>

           
        </>
    )
}

export default Sidebar;