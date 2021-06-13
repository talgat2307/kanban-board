import { ADD_CARD, CARDS_REORDER, REMOVE_CARD } from '../actionTypes';

const addCard = (card, columnIndex) => ({ type: ADD_CARD, card, columnIndex });
const removeCard = (columnIndex, cardIndex) => ({ type: REMOVE_CARD, columnIndex, cardIndex });
const cardsReorder = ({ source, destination }) => ({ type: CARDS_REORDER, payload: { source, destination } });

export const addCardToColumn = (card, columnIndex) => {
  return dispatch => {
    dispatch(addCard(card, columnIndex));
  };
};

export const removeCardFromColumn = (columnIndex, cardIndex) => {
  return dispatch => {
    dispatch(removeCard(columnIndex, cardIndex));
  };
};

export const reorderCards = ({ source, destination }) => {
  return dispatch => {
    dispatch(cardsReorder({ source, destination }));
  };
};

