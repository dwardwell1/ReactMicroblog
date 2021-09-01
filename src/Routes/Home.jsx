import React, { useEffect } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { NavLink} from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchPosts} from '../actionCreators'


function Home({postIds}) {
    const posts = useSelector(state => state, shallowEqual);
    const titles = useSelector(state => state, shallowEqual);
    const error = useSelector(st => st.error);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch])
  
    if (error) {
      return <h1>Something bad happened. Please try again later...</h1>;
    }
  
    console.log(titles)
    
  return (
    <Row>
    
    {/* {postIds.map(id => (
        
        <Col sm="3" key={id}>
          <Card body >
          
            <CardTitle tag="h5">{posts[id].title}</CardTitle>
            <CardText>{posts[id].description}</CardText>
            <NavLink to={`/${id}`}> <Button> See full post</Button></NavLink>
          </Card>
        </Col>))} */}
  
  </Row>
  );
}

export default Home;
