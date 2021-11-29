// 1. Trazer os filmes onde o diretor é `Quentin Tarantino` 
// e `avalicao.bom` esteja entre 5 e 10.


db.filmes.find({
	$and: [
		{ diretor: 'Quentin Tarantino' },
		 {'avaliacao.bom': { $lte: 10, $gte: 5} }
	]
});

db.filmes.find({
	diretor: 'Quentin Tarantino',
	'avaliacao.bom': { $lte: 10, $gte: 5 } 
});

//-------------------------

// 2. Trazer os filmes onde o ano é 2014 
// e `avaliacao.ruim` **não** esteja entre 5 e 10.
db.filmes.find({
	ano: 2014,
	'avaliacao.ruim': { $not: { $gte: 5, $lte: 10 } }
});

db.filmes.find({
	ano: 2014,
	'avaliacao.ruim': { $gte: 1, $lt: 5 }
});

db.filmes.find({}, { titulo: 1, ano: 1, _id: 0 })
	
	.limit(10)
	.sort({ ano: 1 });

//-------------------------

// 3. Trazer os filmes onde o diretor `Christopher Nolan` ou `Peter Jackson`

db.filmes.find({ $or: [
	{ diretor: "Christopher Nolan" },
	{ diretor: "Peter Jackson" }
]
});

//--------------------------

// 4. Filtre os filmes do `Steven Spielberg` que nem o nome seja 
// `Indiana Jones e a Última Cruzada` nem o ano seja 1989. (Usando o operador $nor)


db.filmes.find({
	diretor: 'Steven Spielberg',
	$nor: [
		{ titulo: 'Indiana Jones e a Última Cruzada' } ,
		{ ano: 1989 }
	]
});

//--------------------------

// 5. Insira um filme apenas com o título `Um Lugar Silencioso 2` como atributo.
db.filmes.insertOne({ titulo: 'Um Lugar Silencioso 2'});

//--------------------------

// 6. Buscar todos os filmes que não possuam o atributo `diretor`
db.filmes.find({ diretor: { $exists: 0 }});

//--------------------------

// 7. Ordenar por diretor e título em ordem alfabética, 
// ano em forma decrescente, avaliacao.bom em order decrescente. 
// (Esconder avaliacao.ruim e avaliacao.medio)

db.filmes.find({}, {"avaliacao.ruim": 0, "avaliacao.medio": 0}).sort({ diretor: 1, titulo: 1, ano: -1, "avaliacao.bom": -1 });

//--------------------------

// 8. Remover todos os filmes de `Quentin Tarantino`
db.filmes.deleteMany({ diretor: "Quentin Tarantino"});

//--------------------------

// 9. Confira se os filmes foram realmente removidos
db.filmes.find({ diretor: "Quentin Tarantino"});
// deve retornar 0 resultados