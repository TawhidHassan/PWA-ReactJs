import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Button, Form, Nav, FormControl  } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Users from './Users'
function App() {
  return (
    <div className="App">
       <Router>
       <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about" >About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>

      <Switch>
          <Route path="/about" component={About} ></Route>
          <Route path="/users" component={Users} ></Route>
          <Route path="/" component={Home} ></Route>
        </Switch>

       </Router>
      
    </div>
  );
}

export default App;
