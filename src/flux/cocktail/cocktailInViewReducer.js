const initialState = {
  name: 'Russian Spring Punch',
  components: [
    {
      quantity: 7,
      ingredient: {
        id: '10', name: 'Framboise', unit: 'pièce', color: 'pink',
      },
    },
    {
      quantity: 7.5,
      ingredient: {
        id: '11', name: 'Crème de Framboise', unit: 'ml', color: 'dark-pink',
      },
    },
    {
      quantity: 7.5,
      ingredient: {
        id: '15', name: 'Crème de Cassis', unit: 'ml', color: 'black',
      },
    },
    {
      quantity: 25,
      ingredient: {
        id: '12', name: 'Citron', unit: 'ml', color: 'yellow',
      },
    },
    {
      quantity: 50,
      ingredient: {
        id: '13', name: 'Vodka', unit: 'ml', color: 'transparent',
      },
    },
    {
      quantity: 50,
      ingredient: {
        id: '14', name: 'Champagne', unit: 'ml', color: 'yellow',
      },
    },
  ],
  note: [
    'Piler les framboises puis ajouter le reste des ingrédients sauf le champagne.',
    'Shaker les ingrédients et filtrer/verser dans le verre ajouter les glaçon',
    'Verser doucement le champagne en visant un glaçon pour créer un dégradé de couleur dans le verre',
  ].join('\n'),
};


export default (state = initialState) => state;
