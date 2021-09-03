import React, {useState} from "react";
import { Card, CardBody,Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Redirect} from "react-router";
import {useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {makePost} from "../actionCreators"


function NewBlog({posts, addPost, PostId}) {
    const dispatch = useDispatch();
    const history = useHistory();
    let postEdit = useSelector(state => state[PostId], shallowEqual)
    let INITIAL_STATE = {
        // id: uuidv4(),
        title: "",
        description: "",
        body: ""
        // comments: [{id:null, text:null}]}
        }
    if (PostId) {
        INITIAL_STATE =  {...postEdit, id: PostId}}
    const [formData, setFormData] = useState(INITIAL_STATE);
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))};
     async function handleSubmit(event){
        // if(id){
        //     event.preventDefault();
        //     await addPost(formData);
        //     history.push("/");
        // } else {

        event.preventDefault();
 
      
        console.log(formData, "!!!" );   
        // addPost({...formData});
         dispatch(makePost(formData));
        history.push("/");
        // return <Redirect to="/" push />   }
     }
        
      
    

  return (
<Container className="themed-container" fluid="lg">
    <section style={{textAlign: "center"}} >
        
      <Card >
        <CardBody className="text-center">
        <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Label for="title">Title: </Label>
        <Input type="text" name="title" id="title" placeholder="Title" onChange={handleChange} value={formData.title}/>
      </FormGroup>
        <FormGroup>
        <Label for="description">Description: </Label>
        <Input type="text" name="description" id="description" placeholder="Description" onChange={handleChange} value={formData.description}/>
      </FormGroup>
      <FormGroup>
          <Label for="body">Body: </Label>
        <Input type="textarea" name="body" id="body" placeholder="Body" onChange={handleChange} value={formData.body}/>
      </FormGroup>
     
      
      <Button>Submit</Button>
    </Form>
        </CardBody>
      </Card>
    </section></Container>
  );
}

export default NewBlog;
