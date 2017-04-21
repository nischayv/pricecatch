import React from 'react';
import TextField from 'material-ui/TextField'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      imageSrc: '',
      price: '',
      email: ''
    };
  }

  componentDidMount() {
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
      const tab = tabs[0];
      const url = tab.url;
      this.setState({ url: url });
      this.setState({ imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/71LVvAnlJQL._SX522_.jpg' });
      this.setState({ price: '9.99' });
    });
  }

  render() {
    return (
      <div>
        <label>Enter your email to view get updates biaatch</label>
        <Card>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src={this.state.imageSrc} />
          </CardMedia>
        </Card>
        <label>{this.state.price}</label>
        <label>{this.state.url}</label>
      </div>
    );
  }
}

export default AppContainer;
