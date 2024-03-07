## API Endpoints

- **POST /auth/register**: User registration.
- **POST /auth/login**: User login to obtain a JWT token.
- **GET /auth/profile**: Retrieve user profile (protected route).

  For recipe operations:

- **GET /recipes**: Get all recipes.
- **GET /recipes/:id**: Get a specific recipe by ID.
- **POST /recipes**: Create a new recipe (protected route).
- **PUT /recipes/:id**: Update a recipe by ID (protected route).
- **DELETE /recipes/:id**: Delete a recipe by ID (protected route).
