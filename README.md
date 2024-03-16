# Descripcion

Ecommerce

# Levantar en dev

1. Clonar el directorio
2. Renombrar el archivo `.env.template` y llenar las variables de entorno.
3. Instalar las dependencias `npm install `
4. Levantar la base de datos `docker compose up -d `
5. Correr las migraciones de prisma `npx prisma migrate dev `
6. Ejecutar seed `npm run seed`
7. Levantar el proyecto `npm run dev `
