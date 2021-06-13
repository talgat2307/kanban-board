import addIcon from '../../assets/add.svg';
import deleteIcon from '../../assets/delete.svg';
import { Button, Card } from '../../components';
import './AddForm.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCardToColumn } from '../../store/actions/cardActions';
import { addColumnToBoard } from '../../store/actions/columnActions';

const AddForm = ({ isEmptyColumn, columnIndex }) => {

  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const onSubmit = () => {
    if (isEmptyColumn) {
      dispatch(addColumnToBoard(value));
    } else {
      dispatch(addCardToColumn(value, columnIndex));
    }
    setValue('');
    setShowForm(false);
  };

  return (
    <>
      {showForm ?
        (<div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={isEmptyColumn ? 'Enter column title...' : 'Enter a title for this card...'}
                ref={textareaRef}
                rows={isEmptyColumn ? '1' : '3'}
              />
            </Card>
            <div className="add-form__bottom">
              <Button
                onClick={() => onSubmit()}
                disableBtn={!value}
              >
                {isEmptyColumn ? 'Add a column' : 'Add a card'}
              </Button>
              <img
                onClick={() => setShowForm(false)}
                className="add-form__bottom-clear"
                src={deleteIcon}
                alt="Delete icon"
              />
            </div>
          </div>
        </div>)
        :
        (<div className="add-form__bottom">
          <div
            onClick={() => setShowForm(true)}
            className="add-form__bottom-add-btn"
          >
            <img src={addIcon} alt="Add icon"/>
            <span>{isEmptyColumn ? 'Add another column' : 'Add another card'}</span>
          </div>
        </div>)}
    </>
  );
};

export default AddForm;