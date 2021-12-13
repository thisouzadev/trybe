const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  console.log(simpsons.id);
  const simpsonsFamily = simpsons.filter(simpson => {
    if (simpson.id <= 4) {
      return simpson
    }
  });
  console.log(simpsonsFamily);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
createSimpsonsFamily();