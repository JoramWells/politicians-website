import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Header() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home" style={{fontSize:"1.9rem"}}>Alliance Party</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav >
    <Nav.Link href="#deets" style={{color:"white", fontSize:"1.2rem"}}>AGENDA</Nav.Link>
    <Nav.Link href="#deets" style={{color:"white" , fontSize:"1.2rem"}}>EVENTS</Nav.Link>

        <Nav.Link href="#deets" style={{color:"white", fontSize:"1.2rem"}}>YOUTH & DEV</Nav.Link>
      <Nav.Link href="#deets" style={{color:"white", fontSize:"1.2rem"}}>BLOG</Nav.Link>
      <Nav.Link href="#deets" style={{color:"white", fontSize:"1.2rem"}}>NEWS</Nav.Link>

      <Nav.Link eventKey={2} href="#memes" style={{color:"white", fontSize:"1.2rem"}}>
        CONTACT
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
