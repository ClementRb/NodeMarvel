var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: '8854539c35428148dd3839f93f98598b'
, privateKey: '45b550549ea76bb81e5de001b53f4ea566cfd346'
});

marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();