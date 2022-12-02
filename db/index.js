import pg from "pg";

const databaseUrl = process.env.DATABASE_URL;

if (undefined === databaseUrl) {
  throw new Error(
    "Your database URL is undefined. Please fix this bug before continuing"
  );
}

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});