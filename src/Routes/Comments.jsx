import React, {useState, useEffect} from "react";
import { Card, Button, CardTitle, CardText, Row, Col, Form, Label, Input } from 'reactstrap';
import NewBlog from "./NewPost";
import {  useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchPost, deletePost, getComments } from '../actionCreators'


function CommentSection({id, comments}) {
    const dispatch = useDispatch();
    console.log(id)

    // useEffect(() => {
    //     dispatch(getComments(id))
    //   }, [id, dispatch, comments])
    
    //   const comments = useSelector(state => state.posts.comments, shallowEqual);

      console.log(comments)

const DEFAULT_COMMENT = {
    id: null,
    text: null}

    // below is all logic pre introuction of redux and API actions

// const comments2 = post.comments
// const comments2 = post.comments
// console.log(comments2, "comments");
// const [comments, setComments] = useState(comments2);
// const [comment, setComment] = useState(DEFAULT_COMMENT);

// const handleChange = (event) => {
//     const {name, value} = event.target;
//     setComment(formData => ({
//         ...formData,
//         [name]: value
//     }))};
// async function handleSubmit(event) {
//     event.preventDefault();
//     setComments(comments => [...comments, {id: uuidv4(), text: comment.text}]);
//     console.log(comments, " here are before comments")
//     post.comments = comments;
//     post.id = id;
//     console.log(post.comments, "here are posted comments")
//     dispatch({type: "ADD_COMMENT", payload: post});
//     setComment(DEFAULT_COMMENT);
// }

return (
<div>
     <Card body>
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
{/* <Form onSubmit={handleSubmit}>
    
    <Label for="comment"></Label>
        <Input type="text" name="text" value={comment.text} onChange={handleChange} placeholder="New Comment"/>
    
    <Button>Add</Button>
</Form> */}
</Card> 
</div>
)
}
export default CommentSection;