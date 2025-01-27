# Modulo de Usuarios

## Controlador de Rutas

### GET

- `GetAllUsers` -> Obtener todos los usuarios de la base de datos
- `GetUserById` -> Obtener un usuario por su ID (Numérico)
  <strong>Parametro requerido para obtener un usuario</strong>

  - `id` (number) -> Requerido como Parametro

### POST

- `CreateUser` -> Crear un usuario

  <strong>Informacion requerida al crear un usuario</strong>

  - `name` (string) - Requerido
  - `email` (string) - Requerido
  - `age` (number) - Requerido

### PUT

- `UpdateUser` -> Actualizar un usuario

  <strong>Informacion requerida al actualizar un usuario</strong>

  - `id` (number) - Requerido
  - `name` (string) - Opcional
  - `email` (string) - Opcional
  - `age` (number) - Opcional

### DELETE

- `DeleteUser` -> Eliminar un usuario

  <strong>Parametro requerido para eliminar un usuario</strong>

  - `id` (number) -> Requerido como Parametro
