const initialState = {
  userData: {
    avatar_url: 'https://avatars0.githubusercontent.com/u/10639145?v=4',
    name: 'Apple',
    location: 'Cupertino, CA',
  },
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
