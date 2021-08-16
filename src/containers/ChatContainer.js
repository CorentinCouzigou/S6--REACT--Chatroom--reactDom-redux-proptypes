import { connect } from 'react-redux';
import Chat from 'src/components/Chat';

const mapStateToProps = (state) => ({
  nameUser: state.nameUser,
  messageUser: state.messageUser,
});

const componentToConnect = connect(mapStateToProps, {});
const connectedComponent = componentToConnect(Chat);

// bien penser à utiliser le composant connecté
export default connectedComponent;
