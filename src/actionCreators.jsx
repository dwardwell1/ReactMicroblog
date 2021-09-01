import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export function fetchPosts() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/posts`);
      console.log("DATA", data)
      dispatch(gotPosts(data))
    } catch (e) {
      dispatch(gotError())
    }
  }
}


export function gotPosts(posts) {
  return {
    type: 'FETCH_TITLES',
    posts
  }
}

export function gotError() {
  return {
    type: 'ERROR'
  }
}

