import React from "react";
import { useState,useEffect} from "react";
import {debounce} from "lodash";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Property = () =>{
    const [value,setValue]= useState("");
    const [users,setUsers]= useState([]);
    // const [dataval,setDataval]=useState("")

    
    const deb= debounce((text)=>{
        setValue(text);
    },3000);

    const onChange=(e)=>{
        const text= e.target.value;
        // setDataval(text);
        // console.log(e.target.elements.searchtext.value);
        deb(text);
    }

    const onSearch = (searchTerm)=>{
        console.log(searchTerm);

            axios.get("http://localhost:5000/signupuser")
            .then(res=>{
                let post =res.data.property;
                console.log(post);
                const result= post.filter((val)=>val.email===(searchTerm));
                console.log(...result);

                setUsers(result);
                console.log(users);

            }).catch(err=>{
                console.log(err)
            })
       
    }
    useEffect(()=>{
        //axios.get("https://instaclone-10x-app.herokuapp.com/user")
        axios.get("http://localhost:5000/signupuser")
        .then(res=>{
            setUsers(res.data.property)
            console.log(res.data)
            // console.log(res.data.property.email)

        }).catch(err=>{
            console.log(err)
        })
    },[value])
    return(
        <>
            <div className="main">

            <div>
                <input type="text" name="searchtext" onChange={onChange}/>
                <button className="search" onClick={()=> onSearch(value)}><FaSearch/></button>

            </div>
            {[...users].map((user)=>{
                return(
                    <div> {user.email} </div>
                )
            })}
                
            </div>
            
        </>
    )
}

export default Property;
