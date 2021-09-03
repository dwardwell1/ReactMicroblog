// const INITIAL_STATE = {123: { title: 'Hello', description:"world", body:' Hello World', comments:[{id:123, text:"yo mama"}, {id:234, text:"my daddy"}]}, 456: { title: 'Hello',description:"world", body: 'Hello World', comments:[{id:123, text:"yo mama"}, {id:234, text:"my daddy"}]}};

const INITIAL_STATE = { posts: [], titles: [], error: false };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      // case 'ADD_BLOG':
      //     return { ...state, [action.payload.id]: {title:action.payload.title,description:action.payload.description, body:action.payload.body, comments:[action.payload.comments] }}; ;
      //   case 'ADD_COMMENT':
      //       return { ...state, [action.payload.id]: {title:action.payload.title,description:action.payload.description, body:action.payload.body, comments:action.payload.comments } };
      case 'FETCH_TITLES':
        // console.log(action, "!!")
        return { ...state, titles: action.payload };
      case 'FETCH_POST':
        // console.log(action, "!!")
        return { ...state, posts: action.payload };
      case 'NEW_POST':
        console.log(action, "!!")
          return { ...state,  titles: [...state.titles, [action.payload.id,action.payload.title, action.payload.description]] };
      case 'DELETE_POST':
        console.log(action, "!!")
          return { ...state,  titles: [...state.titles.filter(title => title[0] !== action.payload.id)] };
      case 'FETCH_COMMENTS':
        console.log(action, "!!")
          return { ...state,  posts: {...state.posts,comments: action.payload} };;

          case 'ERROR':
            return { ...state, error: true };
    //   case 'REMOVE_FROM_CART':
    //       if(state[action.payload] > 0) {
    //       return { ...state, [action.payload]: state[action.payload] - 1 }}
      default:
          return state
    }
  }
  
  
  export default rootReducer;