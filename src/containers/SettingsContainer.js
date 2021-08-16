import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings, ChangeInputValue } from 'src/actions';

const mapStateToProps = (state) => ({
  toggleSettings: state.toggleSettings,
  inputValueEmail: state.inputEmail,
  inputValuePassword: state.inputPassword,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    const action = toggleSettings();
    dispatch(action);
},

  onChangeInputValue: (value, nature) => {
    const action = ChangeInputValue(value, nature);
    dispatch(action);
},
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(Settings);

// bien penser à utiliser le composant connecté
export default connectedComponent;
