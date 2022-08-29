import { ADD_LIST, DELETE_LIST, RESET_LIST } from "../action-types";

let count = 0;
export const addCount = (data) => {
  return {
    type: ADD_LIST,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteCount = (id) => {
  return {
    type: DELETE_LIST,
    id,
  };
};
export const resetCount = () => {
  return {
    type: RESET_LIST,
    count: 0,
  };
};
