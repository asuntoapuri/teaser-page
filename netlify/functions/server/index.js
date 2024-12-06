import { createRequestHandler } from "@remix-run/netlify";
import * as build from "./build.js";

export const handler = createRequestHandler({
  build,
  mode: "production",
});
