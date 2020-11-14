// import { commentsAPI, usersAPI } from "../api/api";

import { commentsAPI } from "../api/api";

const ADD_COMMENT = "COMMENT/SET_COMMENT";

let initialState = {
  Comment: {},
  isFetching: false,
};

const commentreduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return { ...state, Comment: action.comment };
    }
    default:
      return state;
  }
};
export const addComments = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};
export const sendComments = (values) => async (dispath) => {
  let response = await commentsAPI.sendComment(values);
  dispath(addComments(response.data.packedData));
};

export default commentreduser;
