export const SET_TITLE = 'bookStore/SET_TITLE';

export const setTitle = title => {
  return {
    type: SET_TITLE,
    payload: title
  };
};
