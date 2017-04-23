import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isTracking: false
    };
  }

  componentWillMount() {
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
      const tab = tabs[0];
      const url = tab.url;
      this.setState({ url: url });
    });
  }

  track() {
    fetch('http://localhost:8080/api/track', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: this.state.url
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ isTracking: true });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let elem = null;
    if (this.state.isTracking) {
      elem = <div>Product is being tracked</div>;
    } else {
      elem = <RaisedButton buttonStyle={{'width': '100px'}} onClick={this.track.bind(this)}>Track</RaisedButton>;
    }
    return (
      <div>
        { elem }
      </div>
    );
  }
}

export default AppContainer;
