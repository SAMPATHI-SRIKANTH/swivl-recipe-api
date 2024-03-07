## API Endpoints


- ### User Registration
- **POST /auth/register**: User registration.
- **Endpoint:** `http://localhost:4000/api/auth/register`
- **Method:** `POST`
- **Request Body:**

      {
        "username":"sam",
        "password":"sam1947"
      }
- **Response:**

      {
        "message": "User registered successfully"
      }

- **POST /auth/login**: User login to obtain a JWT token.
- - **Endpoint:** `http://localhost:4000/api/auth/login`
- **Method:** `POST`
- **Request Body:**

      {
        "username":"sam",
        "password":"sam1947"
      }
- **Response:**

   ```json{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU5MzAxZmU2YmQ4M2RmNmM3YjViM2MiLCJpYXQiOjE3MDk3ODEyMDIsImV4cCI6MTcwOTc4NDgwMn0.dxdIT6RdtPI5S8FWHzfvOtRfTnfdxy9gUTb0CNkoD4Y"
    }
  
- **GET /auth/profile**: Retrieve user profile (protected route).
- - **POST /auth/register**: User registration.
- **Endpoint:** `http://localhost:4000/api/auth/profile`
- **Method:** `GET`
- **Request Headers:**
  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU5MzAxZmU2YmQ4M2RmNmM3YjViM2MiLCJpYXQiOjE3MDk3ODEyMDIsImV4cCI6MTcwOTc4NDgwMn0.dxdIT6RdtPI5S8FWHzfvOtRfTnfdxy9gUTb0CNkoD4Y"
  
- **Response:**

    {
  "username": "sam"
}


 ### For recipe operations:

- **GET /recipes**: Get all recipes.
- **Endpoint:** `http://localhost:4000/api/recipes`
- **Method:** `GET`
- **Request Headers:**
  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU5MzAxZmU2YmQ4M2RmNmM3YjViM2MiLCJpYXQiOjE3MDk3ODEyMDIsImV4cCI6MTcwOTc4NDgwMn0.dxdIT6RdtPI5S8FWHzfvOtRfTnfdxy9gUTb0CNkoD4Y"
  
- **Response:**

- [
  {
    "_id": "65e88125976bf5004d846fde",
    "title": "Vegetable Biryani updated",
    "description": "A fragrant and flavorful rice dish cooked with mixed vegetables, spices, and aromatic basmati rice.",
    "ingredients": [
      "2 cups basmati rice, soaked for 30 minutes",
  ...
    ],
    "instructions": "1. Heat ghee or oil in a large pot over medium heat. ",
    "__v": 0
  },
  {
    "_id": "65e8a1adbfb7ae4f03c4c8f9",
    "title": "Spaghetti Bolognese",
    "description": "A classic and hearty Italian dish featuring a rich meat sauce served over perfectly cooked spaghetti.",
    "ingredients": [
      "400g ground beef",
  ...
    ],
    "instructions": "1. In a large pan, brown the ground beef over medium heat.",
    "__v": 0
  }
]
   
- **GET /recipes/:id**: Get a specific recipe by ID.
- - **Endpoint:** `http://localhost:4000/api/recipes/65e88125976bf5004d846fde`
- **Method:** `GET`
- **Request Headers:**
  "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU5MzAxZmU2YmQ4M2RmNmM3YjViM2MiLCJpYXQiOjE3MDk3ODEyMDIsImV4cCI6MTcwOTc4NDgwMn0.dxdIT6RdtPI5S8FWHzfvOtRfTnfdxy9gUTb0CNkoD4Y"
  
- **Response:**
-   {
    "_id": "65e88125976bf5004d846fde",
    "title": "Vegetable Biryani updated",
    "description": "A fragrant and flavorful rice dish cooked with mixed vegetables, spices, and aromatic basmati rice.",
    "ingredients": [
      "2 cups basmati rice, soaked for 30 minutes",
  ...
    ],
    "instructions": "1. Heat ghee or oil in a large pot over medium heat. ",
    "__v": 0
  }

- **POST /recipes**: Create a new recipe (protected route).
- **PUT /recipes/:id**: Update a recipe by ID (protected route).
- **DELETE /recipes/:id**: Delete a recipe by ID (protected route).
