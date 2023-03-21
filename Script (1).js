
db.restaurants.find({$and:[{cuisine:{$regex:/^Ame.*/},name:{$regex:/.*le$/}}]})
