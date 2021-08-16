import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Settings({
  toggleSettings,
  handleClick,
  inputValueEmail,
  inputValuePassword,
  onChangeInputValue}) {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value, event.target.type);
  };
  return (
    <div className={(toggleSettings ? ("settings__container settingtrue") : ("settings__container"))}>
        <>
      <button type="button" className={(toggleSettings ? ("setting__escape buttonTrue"):("setting__escape buttonFalse"))} onClick={handleClick}>+</button>
      <form type="submit" className="settings__form">
        <input type="email" placeholder="Email" className="setting__inputMail" value={inputValueEmail} onChange={handleOnChange} />
        <input type="password" placeholder="Mot de passe" className="setting__inputMDP" value={inputValuePassword} onChange={handleOnChange} />
        <button type="submit" className="setting__submit">Envoyer</button>
      </form>
        </>
    </div>
  );
}
Settings.propTypes = {
  toggleSettings: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  inputValueEmail: PropTypes.string.isRequired,
  inputValuePassword: PropTypes.string.isRequired,
};
