import { Hono } from "hono";
import { vValidator } from "@hono/valibot-validator";
import * as v from "valibot";

const VERSION = "0.0.0";

export const app = new Hono()
  .get("/version", (c) => c.json({ version: VERSION }))
  .post(
    "/echo",
    vValidator("json", v.object({ message: v.string() })),
    (c) => {
      const { message } = c.req.valid("json");
      return c.json({ echo: message });
    },
  );

export type AppType = typeof app;

export default app;
