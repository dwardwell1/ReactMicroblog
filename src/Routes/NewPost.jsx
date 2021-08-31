import React, {useState} from "react";
import { Card, CardBody,Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Redirect} from "react-router";
import {useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function NewBlog({posts, addPost, id}) {
  
    const history = useHistory();
    let INITIAL_STATE = {
        id: "",
        title: "",
        description: "",
        body: ""}
    if (id) {
        INITIAL_STATE =  posts.find(post => post.id === id);}
    
    const [formData, setFormData] = useState(INITIAL_STATE);
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))};
     async function handleSubmit(event){
        if(id){
            event.preventDefault();
            await addPost(formData);
            history.push("/");
        } else {

        event.preventDefault();
        addPost({...formData, id: uuidv4()});
        history.push("/");
        return <Redirect to="/" push />     }
        
      
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
