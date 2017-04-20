import React from 'react';
import request from 'request'
import cheerio from 'cheerio'
import { TextField } from 'material-ui'

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      urL: '',
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
      console.assert(typeof url == 'string', 'tab.url should be a string');
      this.setState({ url: url });
      request(this.state.url, (err, res, html) => {
        if (err) {
          return err;
        }
        const $ = cheerio.load(html);
        const price = $('#priceblock_ourprice_row').find('#priceblock_ourprice').text();
        const img = $('#landingImage').attr('src');
        this.setState({ price: price })
        this.setState({ imageSrc: img })
      });
    });
  }

  render() {
    return (
      <div>
        <label>Enter your email to view get updates biaatch</label>
        <TextField
          hintText="Email"
        /><br />
      </div>
    )
  }
}
