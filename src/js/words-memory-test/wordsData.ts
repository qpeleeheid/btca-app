class Category {
  title: string;
  words: Array<string>;

  constructor(title: string, words: Array<string>) {
    this.title = title;
    this.words = words;
  }
}

const categories = [
  new Category('Pays', [
    'Allemagne',
    'France',
    'Italie',
    'Angleterre',
    'Ecosse',
    'Pologne',
    'Pays-Bas',
    'Suisse',
    'Autriche',
    'Belgique',
  ]),
  new Category('Vêtements', [
    'Mateau',
    'Pantalon',
    'Robe',
    'Jupe',
    'Chemise',
    'Pull',
    'Chaussette',
    'Gilet',
    'T-shirt',
    'Short',
    'Caleçon',
    'Veste',
    'Gants',
  ]),
  new Category('Outil', ['Tenailles', 'Clef', 'Scie', 'Hache', 'Marteau']),
  new Category('Poisson', ['Cabillaud', 'Sardine', 'Thon', 'Hareng']),
  new Category('Arbre', [
    'Sapin',
    'Bouleau',
    'Chêne',
    'Pin',
    'Cerisier',
    'Erable',
  ]),
  new Category('Métal', [
    'Bronze',
    'Argent',
    'Or',
    'Aluminium',
    'Acier',
    'Cuivre',
  ]),
  new Category('Liquide', ['Diesel', 'Jus', 'Eau', 'Crème']),
  new Category('Véhicule', ['Vélo', 'Carosse', 'Voiture', 'Avion', 'Train']),
  new Category('Oiseau', [
    'Mouette',
    'Pigeon',
    'Faucon',
    'Aigle',
    'Rouge-gorge',
  ]),
  new Category('Insecte', [
    'Fourmi',
    'Scarabée',
    'Moustique',
    'Mouche',
    'Abeille',
  ]),
  new Category('Bâtiment', [
    'Magasin',
    'Hopital',
    'Ecole',
    'Commissariat',
    'Gare',
  ]),
];

export { Category, categories };
