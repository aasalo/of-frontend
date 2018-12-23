// memes reducer
export default function memes(state = {}, action) {
    switch (action.type) {
      case 'MEMES_LIST_GETALL':
        return action.users;
  
      case 'MEMES_ADD_SAVE':
        const user = action.user;
        user.id = user.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        return [...state, user];
  
      // initial state
      default:
        return state;
    }
  }