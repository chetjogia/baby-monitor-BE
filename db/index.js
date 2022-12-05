import pg from "pg";
console.log(process.env.DATABASE_URL)
const databaseUrl = process.env.DATABASE_URL;

if (undefined === databaseUrl) {
  throw new Error(
    "Your database URL is undefined. Please fix this bug before continuing"
  );
}

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});