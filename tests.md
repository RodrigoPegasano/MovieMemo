Contenido para copiar y hacer pruebas en Postman:


USERS:

1. Todos los usuarios (GET):
http://localhost:3000/users

2. Agregar un usuario (POST):
http://localhost:3000/users/signup

Json para el body:
{
    "username": "RodrigoP98",
    "name": "Rodrigo",
    "lastName": "Pegasano",
    "email": "rodrigo@gmail.com",
    "password": "FullStack2023!"
}

3. Hacer login (POST):
http://localhost:3000/users/login

Json para el body:
{
    "email": "rodrigo@gmail.com",
    "password": "FullStack2023!"
}



MOVIES

1. Ver todas las películas (GET)
http://localhost:3000/movies

2. Agregar una nueva película (POST)
http://localhost:3000/movies

Json para el body:
{
    "cover": "Cover",
    "title": "Batman",
    "category": "Ficción",
    "year": 2024,
    "rating": 4,
    "description": "Descripción de la película"
}

3. Eliminar una película (DELETE)
http://localhost:3000/movies/id



SERIES

1. Ver todas las series (GET)
http://localhost:3000/tvshows

2. Agregar una nueva serie (POST)
http://localhost:3000/tvshows

Json para el body:
{
    "cover": "Cover",
    "title": "Friends",
    "category": "Comedia",
    "year": 2024,
    "rating": 5,
    "description": "Descripción de la serie"
}

3. Eliminar una serie (DELETE)
http://localhost:3000/tvshows/id