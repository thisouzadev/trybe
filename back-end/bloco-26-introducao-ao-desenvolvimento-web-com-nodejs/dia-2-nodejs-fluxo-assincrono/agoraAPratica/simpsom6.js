const fs = require('fs').promises;

async function replaceNelson () {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    
    const replaceNelsonMuntz = simpsonsFamily.filter(simpson => {
      if (simpson.name === 'Nelson Muntz' ) {
        return simpson.name = 'Maggie Simpson'
      }
    });
    simpsonsFamily.push(replaceNelsonMuntz);
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

    console.log(simpsonsFamily);
}
replaceNelson()