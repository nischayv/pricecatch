import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './Container'

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppContainer />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
