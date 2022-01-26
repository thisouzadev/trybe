const express = require('express')
const multer = require('multer');
const path = require('path');

const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname, '/uploads')));

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads/'),
  filename: (req, file, callback) => callback(null, `${Date.now()} - ${file.originalname}`)
});

// multer ele é um middleware
const upload = multer({ storage });

app.post('/files/upload', upload.single('batatinha'), (req, res) => {
  return res.status(200).json({message: "deu tudo certo parsa"})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))