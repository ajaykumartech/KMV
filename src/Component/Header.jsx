import React from "react";
import {  Navbar } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar fixed="top" bg="light"  expand="lg" style={{height:"60px",backgroundColor:"white"}}>
     
        <Navbar.Brand href="/home" style={{verticalAlign:"middle",}}> <h3><img
             style={{verticalAlign:"middle",float:"left"}}
             src={require("../images/kmvlogo.png")}
              width="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{'  '} <span style={{fontSize:"20px",fontFamily: "arial",fontWeight:"bold", paddingLeft: "10px"}}>Khammam Devarapalli Highway Private Ltd</span></h3> </Navbar.Brand>
    <a href="/home"> </a>
    <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <i style={{border:"1px solid black",padding:'8px',borderRadius:"15px"}} className="fa-solid fa-user"></i>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

    </div>
  );
}

export default Header;
