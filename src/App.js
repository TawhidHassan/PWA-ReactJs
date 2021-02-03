import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar,Button,Form,Nav,FormControl } from "react-bootstrap";

function App() {
  return (
    <div className="App">
       <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
}

export default App;
