import { ADD_COLUMN, REMOVE_COLUMN } from '../actionTypes';

const addColumn = title => ({ type: ADD_COLUMN, title });
const removeColumn = columnIndex => ({ type: REMOVE_COLUMN, columnIndex });

export const addColumnToBoard = (title) => {
  return dispatch => {
    dispatch(addColumn(title));
  };
};

export const removeColumnFromBoard = (columnIndex) => {
  return dispatch => {
    dispatch(removeColumn(columnIndex));
  };
};