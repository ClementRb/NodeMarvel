var api = require('marvel-api');
const program = require('commander')

program
 .version('1.0.0')
 .option('-f, --femme','Affiche toutes les femmes  Marvel')
 .option()
 
program.parse(process.argv)

var marvel = api.createClient({
  publicKey: '8854539c35428148dd3839f93f98598b'
, privateKey: '45b550549ea76bb81e5de001b53f4ea566cfd346'
});

let tabName = {}

if(program.femme){
 marvel.characters.findAll(100)
  .then(( char ) => {
    for (item of char.data){
        console.log(item.name)
    }
}
       ) 
  .fail(console.error)
  .done();
}else if(program.){
  marvel.characters.findByName('black widow')
         }