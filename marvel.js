var api = require('marvel-api');
const program = require('commander')
const readline = require('readline')
const fs = require('fs')

program
 .version('1.0.0')
 .option('-i, --image', 'Affiche l\'image du personnage choisis')
 
program.parse(process.argv)

var marvel = api.createClient({
  publicKey: '8854539c35428148dd3839f93f98598b'
, privateKey: '45b550549ea76bb81e5de001b53f4ea566cfd346'
});

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if(program.image){
    rl.question("De quel personnage voulez vous l\'image ?", function(answer) {
         marvel.characters.findByName(answer)
            .then(function(res) {
              console.log('Image', res.data[0].thumbnail.path+'.'+res.data[0].thumbnail.extension);
             try {
                 // Écrire un fichier
                 fs.writeFile(answer+'.txt', JSON.stringify(res.data[0].thumbnail.path+'.'+res.data[0].thumbnail.extension), (err) => {
                     if (err) throw err
                     console.log('Url écrite dans le fichier ' + answer +'.txt')
                 })} catch (err){
                     console.error('ERR>', err)
                 }
             })
    rl.close();
});
}