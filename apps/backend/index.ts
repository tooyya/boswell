import { Hono } from "hono";
import { vValidator } from "@hono/valibot-validator";
import * as v from "valibot";
import { VERSION } from "../../packages/shared/version.ts";

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
