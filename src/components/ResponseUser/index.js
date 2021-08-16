import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Form({ search, form }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    form(event);
  };
  return (
    <form type="submit" className="responseUser__container" onSubmit={handleSubmit}>
      <input type="text" className="responseUser__text" placeholder="Sasissez vous message..." onChange={(event) => {search(event)}} />
      <button type="submit" className="responserUser__submit">Envoyer</button>
    </form>
  );
}
Form.propTypes = {
  search: PropTypes.func.isRequired,
  form: PropTypes.func.isRequired,
};
export default Form;
