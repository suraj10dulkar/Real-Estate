import React from "react";
import { useState } from "react";

const Property = () =>{
    const [value,setValue]= useState("");
    
    const onChange= (event) =>{
        setValue(event.target.value);
    }

    const onSearch = (searchTerm)=>{
        console.log(searchTerm);
        setValue("")
    }
    return(
        <>
            <div>
                <input type="text" value={value} onChange={onChange}/>
                <button onClick={()=> onSearch(value)}>Search</button>
            </div>
        </>
    )
}

export default Property;
