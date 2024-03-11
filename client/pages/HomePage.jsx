import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from "react-router-dom";


function HomePage(){

  return (
    <>
    <div style={{
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      flexDirection: "column"
    }}>
      <div style={{paddingBottom:"20px", paddingTop:"300px"}}>
       <Button variant="danger">Add New Patient</Button>{' '}
       </div>
       
        <Link to="/Patients">
       <Button variant="danger">View Current Patients</Button>{' '}
       </Link>
    
     </div>
    </>
  )
}
export default HomePage;
