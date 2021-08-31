import React, {useState} from "react";
import { Card, Button, CardTitle, CardText, Row, Col, Form, Label, Input } from 'reactstrap';
import NewBlog from "./NewPost";
import {  useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function PostView({posts, editPost, deletePost}) {
    const [edit, setEdit] = useState(false);
    const {id} = useParams();
    const post =  posts.find(post => post.id === id);
    const history = useHistory();
    //comment logic
    const DEFAULT_COMMENT = {
        id: '',
        text: ''}
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(DEFAULT_COMMENT);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setComment(formData => ({
            ...formData,
            [name]: value
        }))};
    async function handleSubmit(event) {
        event.preventDefault();
        await setComments(comments => [...comments, {id: uuidv4(), text: comment.text}]);
        setComment(DEFAULT_COMMENT);
    }
    
    const toggleEdit = () => {
        setEdit(!edit);
    }
    const doEdit = (post) => {
        editPost(post); }

    
        async function doDelete(event){
          
            event.preventDefault();
            deletePost(id)
            history.push("/");
              }
        
              console.log(comments, "!!!")
    return (
        <div>
            {edit ? (
                <NewBlog posts={posts} id={id} addPost={doEdit}  />) : (
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
            <h2>Comments</h2>
            {console.log(comments, "!!!")}
            {comments.map(comment => (
                <div>
                 <hr
    style={{
      borderColor: "black",
    }}
  />
                <CardText key={comment.id}>{comment.text}</CardText>
                </div>
            ))}
            <Form onSubmit={handleSubmit}>
                
                <Label for="comment"></Label>
                    <Input type="text" name="text" value={comment.text} onChange={handleChange} placeholder="New Comment"/>
                
                <Button>Add</Button>
            </Form>
            </Card>
            
            )}
        </div>
    );
}

export default PostView;