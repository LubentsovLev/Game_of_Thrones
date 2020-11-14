import { IceAndFire } from "../api/api";

const TOGGLE_IS_FETCHING = "USERS/TOGGLE_IS_FETCHING";
const SET_USERS = "USERS/SET_USERS";
const SET_CURRNET_PAGE = "USERS/SET_CURRNET_PAGE";

let initialState = {
  characters: [],
  pageSize: 10,
  totalItemsCount: 2136,
  currentPage: 27,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_USERS: {
      return { ...state, characters: action.characters };
    }
    case SET_CURRNET_PAGE: {
      return { ...state, currentPage: action.page };
    }
    default:
      return state;
  }
};
export const setUsers = (characters) => {
  return {
    type: SET_USERS,
    characters,
  };
};
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRNET_PAGE,
    page,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const GetCharacters = (currentPage = 1, pageSize = 5) => async (
  dispath
) => {
  dispath(setIsFetching(true));
  let data = await IceAndFire.people(currentPage, pageSize);
  dispath(setUsers(data.data));
  dispath(setIsFetching(false));
  dispath(setCurrentPage(currentPage));
  // let response = commentsAPI.sendComment(comment);
};

export default usersReducer;
