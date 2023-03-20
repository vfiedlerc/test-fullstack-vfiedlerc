## Start the application

1. Run:

   `yarn` or `npm install`

## Running the Docker image

1. Run:

   `docker-compose up`

## Running the application

1. Keep docker running and run the following command to create a table in the database:
   `yarn typeorm migration:run`

2. Run app:
   `yarn dev` or `npm run dev`

## Use the application

1. User login:

   - Create user with postman,insomnia e etc.

     - route: http://localhost:3333/user/create

     - body example:

       {

        "name":"admin",
        "password":"admin",
        "email":"admin@admin.com",
        "admin":true 
        }
