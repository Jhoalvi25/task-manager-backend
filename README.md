# # Task Manager App

## Descripción

Este proyecto es un backend y frontend para un Task Manager desarrollado en Node.js, usando Express y MongoDB. Incluye validaciones con express-validator y documentación de la API con Swagger. Del lado de fontend se utilizo React, Tailwind para los estilos y redux para el manejo de estados y conexión con el backend.

## Requisitos Previos

- Node.js (v14.x o superior) instalado.
- MongoDB en ejecución local o un URI de conexión a MongoDB Atlas.
- Un editor de texto o IDE (como Visual Studio Code).

## Pasos para Correr el Proyecto en Local

1. Clonar repositorio 
- Repositorio back-end: https://github.com/Jhoalvi25/task-manager-backend/tree/master


```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```
2. Instalar Dependencias

```bash
npm install
```

3. Configurar las Variables de Entorno Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
 
```plaintext
MONGO_URI=mongodb+srv://<db_user>:<db_password>@taskweb.1ygsf.mongodb.net/
```
- MONGO_URI: URI de conexión a la base de datos MongoDB, la mostrada es de ejemplo, debe generar su string de conexión, este puede generarlo en Atlas DB en el siguiente enlace: https://www.mongodb.com/products/platform/atlas-database Inicia sesión, ya dentro del panel en las opciones de la izquierda, esta la opción de "Clusters", crea un Cluster, da click a la opción de conectar y genera tu string de conexión, para usarlo cambia <db_password> por la contraseña de tu user de Atlas DB .

4.Iniciar el Servidor

```bash
node server.js
```
Esto iniciará el servidor en http://localhost:3000, este mensaje se mostrara en consola junto a otro mensaje "Conexión a MongoDB exitosa", si se realizo el paso anterior correctamente.


5. Acceder a la Documentación Una vez iniciado el servidor, accede a Swagger en:

```bash
http://localhost:3000/api-docs
```

6. Ir al repositorio del front-end y hacer el mismo procedimiento de clonación del repositorio:

- Repositorio front-end: https://github.com/Jhoalvi25/task-manager-frontend

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

7. Instalar Dependencias

```bash
npm install
```

2. Correr la aplicación

```bash
npm run start
```
Esto iniciará el servidor del front-end en el puerto http://localhost:3001.

Listo, ya puede probar la aplicación de forma local.

## Enlace de la aplicación deployada

Deploy: https://task-manager-frontend-ashen-nu.vercel.app




