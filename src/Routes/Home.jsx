import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { NavLink} from "react-router-dom";

function Home({posts}) {
  return (
    <Row>
    
    {posts.map(post => (
        
        <Col sm="3" key={post.id}>
          <Card body >
            <CardTitle tag="h5">{post.title}</CardTitle>
            <CardText>{post.description}</CardText>
            <NavLink to={`/${post.id}`}> <Button> See full post</Button></NavLink>
          </Card>
        </Col>))}
    {/* <Col sm="3">
      <Card body>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col> */}
  </Row>
  );
}

export default Home;
