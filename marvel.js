var api = require('marvel-api');
const program = require('commander')
const inquirer = require('inquirer')

program
 .version('1.0.0')
 .option('-i, --image', 'Affiche l\'image du personnage choisis')
 
program.parse(process.argv)

var marvel = api.createClient({
  publicKey: '8854539c35428148dd3839f93f98598b'
, privateKey: '45b550549ea76bb81e5de001b53f4ea566cfd346'
});

let tabName = {}

if(program.image){
    inquirer.prompt([
    {
        type : 'input',
        messge : 'De quel personnage voulez vous télécharger l\'image',
        name : 'perso'
    }
    ]).then((answers))=>{
        marvel.characters.findByName('spider-man')
            .then(function(res) {
            console.log('Image', res.data[0].thumbnails);
            return marvel.characters.comics(res.data[0].thumbnails);
            })
    }
}