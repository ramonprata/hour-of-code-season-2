import { SET_LOADING } from './layoutActions';
const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading };
      break;

    default:
      return { ...state };
  }
};
