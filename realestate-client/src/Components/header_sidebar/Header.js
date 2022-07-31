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
                    <h2>Assistance</h2>
                    <h2>Received Interest</h2>
                    <h2>Sent Interest</h2>
                    <h2>Property Views</h2>
                    <h2>Traffic Plan</h2>
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