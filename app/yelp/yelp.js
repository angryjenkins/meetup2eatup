// Request API access: http://www.yelp.com/developers/getting_started/api_access 
var merge = require('merge');
var yelp = require('node-yelp-api');
 
var options = {
  consumer_key: 'blnUGOa1xqRIq5Kvk2NIiw',
  consumer_secret: 'k-VIMJNVzfFn8yA0olc9P2Rk7Os',
  token: 'mntH_9Niv9kfvf03XW-mPDQUm2wkqiTx',
  token_secret: 'g-EzbDLsWt8bEAcTxhYFBQNqXuQ',
};



// See http://www.yelp.com/developers/documentation/v2/search_api 
var parameters = {
  term: 'restaurant',
  category: '',
  location: 'NYC',
};
yelp.search(merge(options, parameters), (data) => {
  console.log(data);
}, (err) => {
  console.error(err);
});

module.exports = data;