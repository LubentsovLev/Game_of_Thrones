// import { commentsAPI, usersAPI } from "../api/api";

import { commentsAPI } from "../api/api";

const ADD_COMMENT = "COMMENT/SET_COMMENT";

let initialState = {
  Comment: { title: "", body: "", userId: "" },
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
export const sendComments = (title, body, userId) => async (dispath) => {
  // let packedData = JSON.stringify({
  //   title,
  //   body,
  //   userId,
  // });
  let response = await commentsAPI.sendComment(title, body, userId);
  let comment = { title, body, userId };
  dispath(addComments(comment));
  // let response = commentsAPI.sendComment(comment);
};

export default commentreduser;
