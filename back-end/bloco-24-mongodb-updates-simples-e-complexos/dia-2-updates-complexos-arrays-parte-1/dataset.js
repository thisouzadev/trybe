
db.students.insertOne(
  {
    name: "Jennifer",
    quizzes : [
      { wk: 1, score : 10 },
      { wk: 2, score : 8 },
      { wk: 3, score : 5 },
      { wk: 4, score : 6 }
    ],
    turma: 100
  }
);


// $pull
db.stores.insertMany(
  [
    {
      _id: 1,
      fruits: ["apples", "pears", "oranges", "grapes", "bananas"],
      vegetables: ["carrots", "celery", "squash", "carrots"]
    },
    {
      _id: 2,
      fruits: ["plums", "kiwis", "oranges", "bananas", "apples"],
      vegetables: ["broccoli", "zucchini", "carrots", "onions"]
    }
  ]
);


// $addToSet

db.inventory.insertOne({
  _id: 1,
  product: "polarizing_filter",
  tags: ["electronics", "camera"]
});

db.inventory.findOne();
