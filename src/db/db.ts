import { pgTable, serial, text, varchar, pgSchema } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "pifsound",
    database: "postgres",
  });
   
  await client.connect();
  export const db = drizzle(client);