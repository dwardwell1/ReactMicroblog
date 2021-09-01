import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { NavLink} from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


function Home({postIds}) {
    const posts = useSelector(state => state, shallowEqual);

    console.log(postIds)
  return (
    <Row>
    
    {postIds.map(id => (
        
        <Col sm="3" key={id}>
          <Card body >
          
            <CardTitle tag="h5">{posts[id].title}</CardTitle>
            <CardText>{posts[id].description}</CardText>
            <NavLink to={`/${id}`}> <Button> See full post</Button></NavLink>
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
