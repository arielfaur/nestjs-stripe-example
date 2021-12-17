# Nest - Stripe Checkout integration example

## Instructions

1. Define NODE_ENV environment variables
    ```
    PORT=3000
    STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxx
    STRIPE_TEST_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
    Note: STRIPE_WEBHOOK_SECRET key is required for webhook debugging


2. Launch backend services (Nest JS, MongoDB, Mongo-Express, Redis ...)
    ```
    docker-compose up dev
    ````

3. Listen to Stripe event on localhost (optional)

        stripe login
    
        stripe listen --forward-to localhost:3000/order/webhook


4. Start Angular frontend
    ```
    cd client
    npm install
    ng serve
    ```

5. Browse frontend on http://localhost:4200

6. MongoDB explorer on http://localhost:8081
    - Check that an initial myDatabase has been created
    - Check that an initial tickets collection has been created


7. Browse Swagger API on http://localhost:3000/api

## Changelog

2021-12-09 Added mongoose service layer and list of ordered items

## TODO
- ~~Missing MongoDB integration (currently using in-memory storage)~~
- Tests (unit/integration)