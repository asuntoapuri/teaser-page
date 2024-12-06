import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

export const handler = createRequestHandler({
  build,
  mode: "production", // For Netlify functions this is fine
});
