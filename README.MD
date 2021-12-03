# Nest - Stripe Checkout integration example

## Instructions

1. Launch backend services (Nest JS, MongoDB, Mongo-Express, Redis ...)
```
docker-compose up dev
````

2. Start Angular frontend
```
cd client
ng serve
```

3. Browse frontend http://localhost:4200

4. MongoDB explorer http://localhost:8081
- Initial myDatabase created
- Initial tickets collection created

5. Inspect API Swagger http://localhost:300/api

## TODO
- Missing MongoDB integration (currently using in-memory storage)
- Tests (unit/integration)