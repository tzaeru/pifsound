import { pgTable, serial, text, varchar, pgSchema } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
    host: "127.0.0.1",
    port: 5432,
    user: "pifsound",
    password: "pifsound",
    database: "pifsound",
  });
   
  await client.connect();
  export const db = drizzle(client);
