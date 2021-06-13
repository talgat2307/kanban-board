import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.scss';
import deleteIcon from '../../assets/delete.svg';
import { removeCardFromColumn } from '../../store/actions/cardActions';

const Card = ({ children, cardIndex, columnIndex }) => {

  const dispatch = useDispatch();

  const onRemoveCard = () => {
    dispatch(removeCardFromColumn(columnIndex, cardIndex));
  };

  return typeof cardIndex !== 'undefined' ? (
    <Draggable
      draggableId={`card-${columnIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{children}</span>
          <div
            onClick={() => onRemoveCard()}
            className="remove-btn"
          >
            <img src={deleteIcon} alt="Delete icon"/>
          </div>
        </div>
      )}
    </Draggable>
  ) : (
    <div className="card">{children}</div>
  );
};
Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Card;