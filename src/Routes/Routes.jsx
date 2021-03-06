import {useState} from 'react';
import {  Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostView from "./PostView";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

function Routes() {
    const dispatch = useDispatch();
    const posts2 = useSelector(state => state, shallowEqual);
    const postIds = Object.keys(posts2);
    const [posts, setPosts] = useState([]);
    // console.log(posts2)
    function addPost (post) {
        setPosts([...posts, post]);
    }

    function editPost (post) {
        setPosts(posts.map(p => p.id === post.id ? post : p));
    }

    function deletePost (id) {
        setPosts(posts.filter(p => p.id !== id));
    }
  return (
      <div>
    <Nav />
    <Switch>
      <Route exact path="/" >
          <Home postIds={postIds} />
      </Route>

      <Route exact path="/new"  >
          <NewPost posts={posts} addPost={addPost}  />
      </Route>
      <Route exact path="/:id" >
        <PostView posts={posts} editPost={editPost} deletePost={deletePost}  />
      </Route>
      <Redirect to="/" />
    </Switch></div>
  );
}




export default Routes;