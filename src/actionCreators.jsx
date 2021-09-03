import axios from 'axios';

const API_URL = 'http://localhost:5000/api';


// logic to get all titles
export function fetchTitles() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/posts`);
      // console.log("DATA", data)
      dispatch(gotTitles(data))
    } catch (e) {
      dispatch(gotError())
    }
  }
}


export function gotTitles(titles) {
  return {
    type: 'FETCH_TITLES',
    payload: titles
  }
}

//logic to get full individual post

export function fetchPost(id) {
    return async function (dispatch){
        try{
            const { data } = await axios.get(`${API_URL}/posts/${id}`);
            // console.log("DATA", data)
            dispatch(gotPost(data))
        } catch(e){
            dispatch(gotError())
        }
    }
}


export function gotPost(post) {
    return {
        type: 'FETCH_POST',
        payload: post
    }
}

//logic for creating a new post

export function makePost(post) {
    return async function (dispatch){
      console.log("make post runs?")
        try{
            const { data } = await axios.post(`${API_URL}/posts`, post);
            // console.log("DATA", data)
            dispatch(newPost(data))
        } catch(e){
          console.log("error here!", e)
            dispatch(gotError())
        }
    }}


export function newPost(post) {
    return {
        type: 'NEW_POST',
        payload: post
    }
}

//logic to delete post

export function deletePost(id) {
    return async function (dispatch){
        try{
            const { data } = await axios.delete(`${API_URL}/posts/${id}`);
            console.log("DATA", data, id)
            dispatch(deletedPost(id))
        } catch(e){
          console.log(e)
            dispatch(gotError())
        }
    }
}

export function deletedPost(id) {
    return {
        type: 'DELETE_POST',
        payload: {id:id}
    }
}

//logic to get comments

export function getComments(id) {
    return async function (dispatch){
        try{ 
          console.log("checking id", id)
            const { data } = await axios.get(`${API_URL}/posts/${id}/comments`);
            console.log("DATA", data)
            dispatch(gotComments(data))
        } catch(e){
          console.log(e)
            dispatch(gotError())
        }
    }}
  
export function gotComments(comments) {
    return {
        type: 'FETCH_COMMENTS',
        payload: comments
    }
}



export function gotError() {
  return {
    type: 'ERROR'
  }
}

