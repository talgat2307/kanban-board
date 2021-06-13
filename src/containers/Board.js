import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from '../components';
import { reorderCards } from '../store/actions/cardActions';

const Board = () => {

  const board = useSelector(state => state.board);

  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }
    dispatch(reorderCards({ source, destination }));
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {board && board.map((column, index) =>
          <Column
            {...column}
            key={index}
            columnIndex={index}
          />,
        )}
      </DragDropContext>
      <Column/>
    </>
  );
};

export default Board;