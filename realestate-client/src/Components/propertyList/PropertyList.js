import React from "react";
import { useState,useEffect } from "react"
import {Link} from "react-router-dom";

const PropertyList = () => {
    const [properties, setProperties]= useState([]);
    useEffect(()=>{
        //axios.get("")
        axios.get("http://localhost:5000/user")
        .then(res=>{
           // setUsers(res.data.user)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    })
}