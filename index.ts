import { DatabaseSync } from "node:sqlite";
import { add } from "./utils.ts";

/* Built-in SQLite usage, with :memory: option for in-memory tables */
const database = new DatabaseSync("users.db");

function main() {
  console.log("Hello World");
  console.log("This is my TEST_VALUE", getEnvValue());
  console.log("The sum of 2 and 3 is", add(2, 3));

  console.log("The table values", useTable());
}

main();

/* Environment variable without the dotenv package */
function getEnvValue(): string {
  return process.env.TEST_VALUE;
}

type Row = {
  id: number;
  name: string;
};
function useTable(): Row[] {
  database.exec(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)",
  );

  const insert = database.prepare("INSERT INTO users (name) VALUES (?)");
  insert.run("John");
  insert.run("Alice");
  insert.run("Bob");

  const select = database.prepare("SELECT * FROM users ORDER BY name");

  return select.all();
}
