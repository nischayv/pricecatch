import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './container'

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
);