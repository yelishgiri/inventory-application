# Inventory Application

Inventory management app built with **Node.js**, **Express**, and **PostgreSQL**.  
Supports categories and products in a one-to-many relation, with **full CRUD**,  
server-side validation, EJS views, and seed scripts. Ready for both local development  
and cloud deployment.

---

## Environment Variables

Create a `.env` file in the project root with the following keys:

```env
PGHOST=localhost
PGUSER=your_postgres_username
PGPASSWORD=your_postgres_password
PGDATABASE=your_database_name
PGPORT=5432
