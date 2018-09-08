export const colorsTable = [
  { id: 'red', name: 'rouge', value: '#EF5350' },
  { id: 'pink', name: 'rose', value: '#EC407A' },
  { id: 'purple', name: 'violet', value: '#AB47BC' },
  { id: 'dark-purple', name: 'mauve', value: '#7E57C2' },
  { id: 'dark-blue', name: 'bleu foncé', value: '#5C6BC0' },
  { id: 'blue', name: 'bleu', value: '#42A5F5' },
  { id: 'light-blue', name: 'bleu clair', value: '#29B6F6' },
  { id: 'cyan', name: 'cyan', value: '#26C6DA' },
  { id: 'dark-green', name: 'vert foncé', value: '#26A69A' },
  { id: 'green', name: 'vert', value: '#66BB6A' },
  { id: 'light-green', name: 'vert clair', value: '#9ccc65' },
  { id: 'lime', name: 'vert citron', value: '#d4e157' },
  { id: 'yellow', name: 'jaune', value: '#ffee58' },
  { id: 'amber', name: 'ambre', value: '#ffca28' },
  { id: 'orange', name: 'orange', value: '#ffa726' },
  { id: 'deep-orange', name: 'orange profond', value: '#ff7043' },
  { id: 'brown', name: 'marron', value: '#8d6e63' },
  { id: 'grey', name: 'gris', value: '#bdbdbd' },
  { id: 'blue-grey', name: 'gris bleu', value: '#78909c' },
  { id: 'black', name: 'noir', value: '#000' },
  {
    id: 'white', name: 'blanc', value: '#FFF', textColor: '#444',
  },
  {
    id: 'transparent', name: 'transparent', value: '#FFF', textColor: '#444',
  },
];

export const indexedColors = colorsTable.reduce((allColors, color) => ({
  ...allColors,
  [color.id]: color,
}), {});
