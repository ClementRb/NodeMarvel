# NodeMarvel
https://developer.marvel.com

Une fois le repo cloné, il faut installer toutes les dépendances nécessaires au fonctionnement du TP :

``
npm install
``


Pour lancer le programme :

``
node marvel.js --option 
``


Option ``-i, --image`` : Permet de chercher un personnage Marvel, récupérer l'url (chemin + extension) de l'image de ce personnage, puis écrit l'url dans un fichier .txt portant son nom. exemple : spider-man.txt

``
node marvel.js -i
``

Option ``-r, --recherche`` : Permet de chercher tous les personnages Marvel dont le nom commence par les trois premières lettres que l'on saisit.

``
node marvel.js -r
``
