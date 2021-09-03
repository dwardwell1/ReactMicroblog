import React, {useState, useEffect} from "react";
import { Card, Button, CardTitle, CardText, Row, Col, Form, Label, Input } from 'reactstrap';
import NewBlog from "./NewPost";
import {  useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchPost, deletePost } from '../actionCreators'
import CommentSection from "./Comments";


function PostView({posts, editPost}) {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const {id} = useParams();
    const post = useSelector(state => state.posts, shallowEqual);
    const error = useSelector(state => state.error, shallowEqual);
    // const post = useSelector(state => state[id], shallowEqual);
    console.log(post)
    // const post =  posts.find(post => post.id === id);
    const history = useHistory();
    //comment logic
    useEffect(() => {
        dispatch(fetchPost(id))
      }, [id, dispatch])
    
     

      console.log(post.comments, "lookie here")
   
    
    const toggleEdit = () => {
        setEdit(!edit);
    }
    const doEdit = (post) => {
        editPost(post); }

    
        async function doDelete(event){
          
            event.preventDefault();
            await dispatch(deletePost(id));
            history.push("/");
              }
         if (error) {
        return <h1>Something bad happened. Please try again later...</h1>;
      }
             
    return (
    //    <h1>Hello</h1>
        <div>{console.log("id",id)}
            {edit ? (
                
                <NewBlog posts={posts} PostId={id} addPost={doEdit}  />) : (
            <Card body>
                <CardTitle style={{fontSize: 50}}>{post.title}</CardTitle>
                <CardText style={{fontStyle: 'italic'}}>{post.description}</CardText>
                <CardText>{post.body}</CardText>
                <Row>
                    <Col>
                        <Button onClick={toggleEdit}>Edit</Button>
                    </Col>
                    <Col>
                        <Button onClick={doDelete}>Delete</Button>
                    </Col>
                </Row>
                <CommentSection id={id} comments={post.comments}/>
            </Card>
           
        
    )}
    </div>
    )
}



export default PostView;