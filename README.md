# Instalaciones necesarias

### Instalar Docker

Luego de instalar docker, Crear una carpea y posicionarse en dicha carpeta, luego navegar con una terminal a dicha carpeta y copiar el `.env` que esta en el repositorio de la API, tambien copiar el archivo `docker-compose.yml`, luego de eso ejecutar el siguiente comando `docker compose up -d`, este comando pondra todos los servicios.

- Ruta para ver la web: `http://localhost:5173/`

- Ruta para ver la documentacion de la API: `http://localhost:3000/api/v1/docs/`

# Endpoints de Usuarios

## Obtener todos los usuarios (con paginación)

- **Método:** GET
- **URL:** `http://localhost:3000/api/v1/users/all`
- **Descripción:** Retorna una lista paginada de todos los usuarios registrados en el sistema.
- **Parámetros de consulta (Query Parameters):**
  - `page` (opcional): Número de página para la paginación. Valor por defecto: `1`. Debe ser un número mayor o igual a 1.
- **Ejemplo de solicitud:**
  GET http://localhost:3000/api/v1/users/all?page=2

## Obtener un usuario por ID

- **Método:** GET
- **URL:** `http://localhost:3000/api/v1/users/by-id/{id}`
- **Descripción:** Retorna la información de un usuario específico basado en su ID.
- **Parámetros de ruta (Path Parameters):**
- `id`: ID del usuario (número).
- **Ejemplo de solicitud:**
  GET http://localhost:3000/api/v1/users/by-id/1

## Buscar usuarios

- **Método:** GET
- **URL:** `http://localhost:3000/api/v1/users/search?{query}`
- **Descripción:** Retorna una lista de usuarios que coinciden con los criterios de búsqueda especificados en la consulta.
- **Parámetros de consulta (Query Parameters):**
- `query`: Parámetros de búsqueda (por ejemplo, `name=John` o `email=johndoe@gmail.com`).
- **Ejemplo de solicitud:**
  GET http://localhost:3000/api/v1/users/search?name=John

## Crear un nuevo usuario

- **Método:** POST
- **URL:** `http://localhost:3000/api/v1/users`
- **Descripción:** Crea un nuevo usuario en el sistema con la información proporcionada en el cuerpo de la solicitud.
- **Cuerpo de la solicitud (Body):**
- `name` (requerido): Nombre del usuario. Debe tener entre 3 y 100 caracteres.
- `email` (requerido): Correo electrónico del usuario. Debe ser un correo válido.
- `age` (requerido): Edad del usuario. Debe ser un número.
- **Ejemplo de solicitud:**

```json
POST http://localhost:3000/api/v1/users
Body:
{
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "age": 30
}
```

## Actualizar un usuario existente

- **Método:** PUT
- **URL:** `http://localhost:3000/api/v1/users`
- **Descripción:** Actualiza la información de un usuario existente basado en los datos proporcionados en el cuerpo de la solicitud.
- **Cuerpo de la solicitud (Body):**
  - `id` (requerido): ID del usuario que se desea actualizar. Debe ser un número.
  - `name` (opcional): Nuevo nombre del usuario. Debe tener entre 3 y 100 caracteres.
  - `email` (opcional): Nuevo correo electrónico del usuario. Debe ser un correo válido.
  - `age` (opcional): Nueva edad del usuario. Debe ser un número.
- **Ejemplo de solicitud:**
  ```json
  PUT http://localhost:3000/api/v1/users
  Body:
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "janedoe@gmail.com",
    "age": 25
  }
  ```

## Eliminar un usuario

- **Método:** DELETE
- **URL:** `http://localhost:3000/api/v1/users/{id}`
- **Descripción:** Elimina un usuario específico basado en su ID.
- **Parámetros de ruta (Path Parameters):**
  - `id`: ID del usuario (número).
- **Ejemplo de solicitud:**
  DELETE http://localhost:3000/api/v1/users/1
