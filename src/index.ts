import { Elysia } from "elysia";

const app2 = new Elysia().post("/", ({ body }) => body);

const app1 = new Elysia()
  .mount("/app2", app2)
  .post("/", ({ body }) => body)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app1.server?.hostname}:${app1.server?.port}`
);
