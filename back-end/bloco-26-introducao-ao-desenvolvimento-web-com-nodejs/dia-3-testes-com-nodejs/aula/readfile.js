const fs = require('fs/promises');

const readfile = async (fileName) => {
  try {
    const data = await fs.readFile(fileName); // Harry Potter
    return data.toString();
  
  } catch (err) {
    return null
  }
}

module.exports = readfile;