// Agora crie um documento na coleção products , no database 
// sample com os seguintes atributos e valores:

use("sample")
db.products.insertOne(
    {
        "productName": "Caixa",
        "price": 20
    }
)

// Agora assuma o controle do campo _id , passando um valor qualquer
// para ele e crie um novo documento com os mesmos atributos e valores
// do documento anterior.

db.products.insertOne(
    {
        "_id": 100,
        "productName": "Caixa",
        "price": 20
    }
)