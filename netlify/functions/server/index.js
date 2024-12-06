import { createRequestHandler } from "@remix-run/netlify";
import * as build from "../../../build/index.js"; // Point to your actual build output

export const handler = createRequestHandler({
  build,
  mode: "production",
});
