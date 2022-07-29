import React from 'react';
import "./Header.css"

const Header = () =>{
    return(
        <>
            <div className='container'>
               <div className='sidebar'>
                <div className='side'>
                    <h1>Logo</h1>
                    <div className='content'>
                    <h2>Property</h2>
                    <h2>Assitance</h2>
                    <h2>Recieved Intrest</h2>
                    <h2>Sent Intrest</h2>
                    <h2>Property Views</h2>
                    <h2>Traffic Plans</h2>
                    </div>
                </div>

               </div>
            </div>

            <div className='header-main'>

            </div>
        </>
    )
}

export default Header;