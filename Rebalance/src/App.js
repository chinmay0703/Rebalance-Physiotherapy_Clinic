import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from './components/Services';
import BasicExample from './components/BasicExample';
import Advanced from './components/Advanced';
import Clinic from './components/Clinic';
import Contact from './components/Contact';
import Bhariheading from './components/Bhariheading';
import Tagline from './components/Tagline';
import ImageGallery from './components/ImageGallery';
import Map from './components/Map';
import './App.css'
function App() {
  return (
    <div >
          <Navbar className="navbar-with-shadow" bg="light" expand="lg">
      <Container className='ret'>
        <Navbar.Brand href="/home">ReBalance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8">location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Bhariheading></Bhariheading>
    <Clinic></Clinic>
    <Tagline></Tagline>
    <Advanced></Advanced>
    <br></br>
    <br></br>
    <ImageGallery></ImageGallery>
    <BasicExample></BasicExample>
   <Services></Services> 
  <Map></Map>
   <Contact></Contact>
     <br></br>
   </div>
  );
  }
export default App;
