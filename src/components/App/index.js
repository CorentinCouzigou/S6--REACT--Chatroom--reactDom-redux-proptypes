import React from 'react';
import ChatContainer from 'src/containers/ChatContainer';
import SearchContainer from 'src/containers/SearchContainer';
import SettingsContainer from 'src/containers/SettingsContainer';


import './styles.scss';

const App = () => {
  return ( 
    <>
      <SettingsContainer />
      <div className="app">
        <ChatContainer />
        <SearchContainer />
      </div>
  </>
);
  };


export default App;
