
db = new Mongo().getDB("myDatabase");

db.createUser({
    user: 'test_user',
    pwd: 'test1234',
    roles: [{ role: 'readWrite', db: 'myDatabase' }],
});

db.createCollection('tickets');
db.tickets.createIndex({ "id": 1 }, { unique: true });

db.tickets.insert({ "price": 10, "description": "1-Day ticket", "id": "1D" });
db.tickets.insert({ "price": 20, "description": "2-Day ticket", "id": "2D" });