import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  // Функція відслідкування вміста інпуту
  const changeInputFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.filter_cont}>
      <p>Find contacts by name</p>
      <input
        className={css.filter_inp}
        type="text"
        name={filter}
        onChange={changeInputFilter}
        placeholder="Enter name"
      />
    </label>
  );
};

export default Filter;
