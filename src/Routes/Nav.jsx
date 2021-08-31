import React from "react";
import { NavLink } from "react-router-dom";
import {
     Button, Jumbotron, Container
  } from 'reactstrap';

  const Nav = () => {
      return (
       
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">React Microblog</h1>
            <p className="lead">A simple microblog app</p>
            <NavLink to="/"><Button> Blog</Button></NavLink> 
          <NavLink to="/new"> <Button> Add New Post</Button></NavLink>
          </Container>
        </Jumbotron>
      </div>

      );
  }
  export default Nav;