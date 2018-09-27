

export default function user(state = {}, action = {}) {
  console.log("user reducers was called", action)
  switch (action.type) {
    case "USER_LOGGED_IN":
      return action.user;
    case "USER_LOGGED_OUT":
    {
     console.log(action)
      return {};
    }
    default:
      return state;
  }
}
