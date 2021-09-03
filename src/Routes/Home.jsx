import React, { useEffect } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { NavLink} from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchTitles} from '../actionCreators'


function Home({postIds}) {
    // const posts = useSelector(state => state, shallowEqual);
    const titles = useSelector(state => state.titles, shallowEqual);
    const error = useSelector(st => st.error);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchTitles())
    }, [dispatch])
  
    if (error) {
      return <h1>Something bad happened. Please try again later...</h1>;
    }
  
    // console.log(titles, "TITLES AT HOME")
    
  return (
    <Row>
    
    {titles.map(title => (
        
        <Col sm="3" key={title.id}>
          <Card body >
          
            <CardTitle tag="h5">{title.title}</CardTitle>
            <CardText>{title.description}</CardText>
            <NavLink to={`/${title.id}`}> <Button> See full post</Button></NavLink>
          </Card>
        </Col>))}
  
  </Row>
  );
}

export default Home;
