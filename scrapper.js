const request = require('request')
const cheerio = require('cheerio')

function getPrice(url, cb) {

  request(url, (err, res, html) => {
    if (err) {
      return cb(err, null);
    }
    const $ = cheerio.load(html);
    const price = $('#priceblock_ourprice_row').find('#priceblock_ourprice').text();
    return cb(null, price);
  });
}

module.exports.getPrice = getPrice;
