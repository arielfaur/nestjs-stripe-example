# Nest - Stripe Checkout integration example

## Instructions

1. Define NODE_ENV environment variables
```
PORT=3000

STRIPE_TEST_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx
```
2. Launch backend services (Nest JS, MongoDB, Mongo-Express, Redis ...)
```
docker-compose up dev
````

3. Start Angular frontend
```
cd client
npm install
ng serve
```

4. Browse frontend http://localhost:4200

5. MongoDB explorer http://localhost:8081
- Initial myDatabase created
- Initial tickets collection created

6. Inspect API Swagger http://localhost:300/api

## TODO
- Missing MongoDB integration (currently using in-memory storage)
- Tests (unit/integration)