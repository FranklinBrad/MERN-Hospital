
import { FaRegHospital } from "react-icons/fa";

import React from 'react';

export default function Header () {
  return (
    <header style={{
        backgroundColor:"#FF403D",
        width: "100%", 
      position: "fixed",
      top: 0, 
      zIndex: 1000,
      display:"flex",
      justifyContent:"center"
     
    }}>
  
    <h1 style={{
        color:"white",
        marginTop:"10px"
    }}>Mern Hospital</h1>
    <FaRegHospital size={70} style={{color:"white", paddingLeft:"10px", paddingRight:"10px"}}/>
    </header>
  );
};