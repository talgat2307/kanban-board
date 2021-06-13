import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import './Column.scss';
import { Card, AddForm } from '../../components';
import deleteIcon from '../../assets/delete.svg';
import { useDispatch } from 'react-redux';
import { removeColumnFromBoard } from '../../store/actions/columnActions';

const Column = ({ title, cards, columnIndex }) => {

  const dispatch = useDispatch();

  const onRemoverColumn = () => {
    dispatch(removeColumnFromBoard(columnIndex));
  };

  return cards ? (
    <Droppable type="CARDS" droppableId={`column-${columnIndex}`}>
      {provided => (
        <div
          className="column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="column__inner">
            {title && <div className="column__title">
              <b>{title}</b>
              <div
                className="remove-btn"
                onClick={() => onRemoverColumn()}
              >
                <img src={deleteIcon} alt="Delete icon"/>
              </div>
            </div>}
            <div className="column__cards">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  cardIndex={index}
                  columnIndex={columnIndex}
                >
                  {card}
                </Card>
              ))}
              {provided.placeholder}
            </div>
            <AddForm
              isEmptyColumn={false}
              columnIndex={columnIndex}
            />
          </div>
        </div>
      )}
    </Droppable>
  ) : (
    <div className={'column column__empty'}>
      <div className="column__inner">
        <AddForm
          isEmptyColumn={true}
          columnIndex={columnIndex}
        />
      </div>
    </div>
  );
};

Column.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string,
};

export default Column;