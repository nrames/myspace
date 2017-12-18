const posts = ( state = [], action ) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [...state, action.post];
    case 'UPDATE_POST':
      return state.map( a => {
        if (a.id === action.post.id)
          return action.post
        return a
      });
    case 'DELETE_POST':
      let posts = state.filter( p => p.id !== action.id)
      return posts
    default:
      return state
  }
}

export default posts;