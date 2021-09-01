const INITIAL_STATE = {123: { title: 'Hello', description:"world", body:' Hello World', comments:[{id:123, text:"yo mama"}, {id:234, text:"my daddy"}]}, 456: { title: 'Hello',description:"world", body: 'Hello World', comments:[{id:123, text:"yo mama"}, {id:234, text:"my daddy"}]}};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_BLOG':
          return { ...state, [action.payload.id]: {title:action.payload.title,description:action.payload.description, body:action.payload.body, comments:[action.payload.comments] }}; ;
        case 'ADD_COMMENT':
            return { ...state, [action.payload.id]: {title:action.payload.title,description:action.payload.description, body:action.payload.body, comments:action.payload.comments } };
            

        
    //   case 'REMOVE_FROM_CART':
    //       if(state[action.payload] > 0) {
    //       return { ...state, [action.payload]: state[action.payload] - 1 }}
      default:
          return state
    }
  }
  
  
  export default rootReducer;