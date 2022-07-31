import React from 'react';
import {HiOutlineUser} from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import "./Header.css"

const Header = () =>{
        return(
            <>
                <div className='main_header'>
                    <div className='header_row'>
                        <span className='user_id_text'>USER ID :</span>
                        <span className='user_id'>CDPPD021</span>
                        <HiOutlineUser className='user_icon'/>  <span className='user_name'>rakesh</span>
                        <AiFillCaretDown className='drop_down'/>
                    </div>

                </div>
                <hr className='line'></hr>
            </>
        )
}
export default Header;