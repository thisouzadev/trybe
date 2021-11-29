db.filmes.find({}, { titulo: 1, ano: 1, _id: 0 })
	
	.limit(10)
	.sort({ ano: 1 });

db.filmes.count();	

// Ordenar por diretor e título em ordem alfabética, 
// ano em forma decrescente, avaliacao.bom em order decrescente. 
// (Esconder avaliacao.ruim e avaliacao.medio)
db.filmes.find({}, { 'avaliacao.ruim': 0, 'avaliacao.medio': 0 }).sort({
	diretor: 1, 
	titulo: 1,
	ano: -1,
	'avaliacao.bom': -1
})

// Trazer os filmes onde o diretor é `Quentin Tarantino` 
// e `avalicao.bom` esteja entre 5 e 10.

$and, $eq, $lte, $gte

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

// Trazer os filmes onde o diretor é `Quentin Tarantino` 
// ou `avalicao.bom` esteja entre 5 e 10.

db.filmes.find({
	$or: [
		{ diretor: 'Quentin Tarantino' },
	 	{'avaliacao.bom': { $gte: 5, $lte: 10 } }
	]
});

// Trazer os filmes onde o ano é 2014 
// e `avaliacao.ruim` **não** esteja entre 5 e 10.
db.filmes.find({
	ano: 2014,
	'avaliacao.ruim': { $not: { $gte: 5, $lte: 10 } }
});

db.filmes.find({
	ano: 2014,
	'avaliacao.ruim': { $gte: 1, $lt: 5 }
});


db.filmes.find({ ano: { $in: [2001, 1968, 1995] } })

db.filmes.find({ ano: { $nin: [2013, 2008] } });


// Filtre os filmes do `Steven Spielberg` que nem o nome seja 
// `Indiana Jones e a Última Cruzada` nem o ano seja 1989. (Usando o operador $nor)


db.filmes.find({
	diretor: 'Steven Spielberg',
	$nor: [
		{ titulo: 'Indiana Jones e a Última Cruzada' } ,
		{ ano: 1989 }
	]
});


db.filmes.insertOne({ titulo: 'Liga da  Justiça'});

db.filmes.find({ diretor: { $exists: 0 }});

db.filmes.find({ diretor: null });


db.filmes.insertOne({ titulo: 'Vingadores', diretor: null });

db.filmes.findOne({titulo: '2001 - Uma Odisséia no Espaço'});

db.filmes.find({ano: 2001});

db.filmes.deleteMany({ano: 2001});