import { ADD_CARD, ADD_COLUMN, CARDS_REORDER, REMOVE_CARD, REMOVE_COLUMN } from '../actionTypes';
import reorderCards from '../../helpers/reorderCards';

const initialState = [
  {
    title: 'To do',
    cards: ['Go to Gym 3x week', 'Read book', 'Learn TypeScript', 'Apply to Masters Degree'],
  },
  {
    title: 'In Progress',
    cards: ['Update Resume', 'Work on Kanban Board project', 'Watch Loki'],
  },
  {
    title: 'Done',
    cards: ['Meeting with friend', 'Write a plan of month'],
  },
];

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return state.map((column, index) => {
        if (action.columnIndex === index) {
          return { ...column, cards: [...column.cards, action.card] };
        }
        return column;
      });
    case REMOVE_CARD:
      return state.map((column, index) => {
        if (action.columnIndex === index) {
          return { ...column, cards: column.cards.filter((card, index) => index !== action.cardIndex) };
        }
        return column;
      });
    case CARDS_REORDER:
      const { source, destination } = action.payload;
      return reorderCards({
        state,
        source,
        destination
      });
    case ADD_COLUMN:
      return [
        ...state,
        {
          title: action.title,
          cards: [],
        },
      ];
    case REMOVE_COLUMN:
      return state.filter((column, index) => action.columnIndex !== index);
    default:
      return state;
  }
};