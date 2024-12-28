import postgres from "postgres";
import { PRIVATE_PGHOST, PRIVATE_PGDATABASE, PRIVATE_PGUSER, PRIVATE_PGPASSWORD, PRIVATE_ENDPOINT_ID } from "$env/static/private";

export const db = postgres({
    host: PRIVATE_PGHOST,
    database: PRIVATE_PGDATABASE,
    username: PRIVATE_PGUSER,
    password: PRIVATE_PGPASSWORD,
    port: 5432,
    ssl: "require",
    connection: {
      options: `project=${PRIVATE_ENDPOINT_ID}`,
    }
});