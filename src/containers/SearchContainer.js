import { connect } from 'react-redux';
import ResponseUser from 'src/components/ResponseUser';
import { newMessage, newMessageUser } from 'src/actions';

const mapDispatchToProps = (dispatch) => ({
  search: (event) => {
    const action = newMessage(event.target.value);
    dispatch(action);
  },
  form: (event) => {
    const action = newMessageUser(event.target[0].value);
    dispatch(action);
  },
});

const componentToConnect = connect(null, mapDispatchToProps);
const connectedComponent = componentToConnect(ResponseUser);

// bien penser à utiliser le composant connecté
export default connectedComponent;
