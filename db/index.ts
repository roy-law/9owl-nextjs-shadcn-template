import { drizzle } from "drizzle-orm/postgres-js";
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from "./schema";
import postgres from "postgres";

// for migrations
// const migrationClient = postgres(
//   "postgres://postgres:example@localhost:5432/postgres",
//   { max: 1 }
// );
// migrate(drizzle(migrationClient), ...)

// for query purposes
const queryClient = postgres(process.env.DB_URL!);
const db = drizzle(queryClient, { schema });
// await db.select().from(...)...
export { db };
