
const CONFIG = {
  DATABASE_URL: import.meta.env.DATABASE_URL || "postgresql://user:password@localhost:5432/akamadb",
  SENDGRID_API_KEY: import.meta.env.SENDGRID_API_KEY || "",
  SENDGRID_FROM_EMAIL: import.meta.env.SENDGRID_FROM_EMAIL || "contact@akamagroupe.com",
  ADMIN_EMAIL: import.meta.env.ADMIN_EMAIL || "admin@akamagroupe.com",
  JWT_SECRET: import.meta.env.JWT_SECRET || "your_jwt_secret_key"
};

export default CONFIG;
