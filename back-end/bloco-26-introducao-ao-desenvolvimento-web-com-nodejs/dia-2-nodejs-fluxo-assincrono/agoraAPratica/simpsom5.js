const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    simpsonsFamily.push({ "id": "11","name": "Nelson Muntz" });
    console.log(simpsonsFamily);
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
addNelsonToFamily()
