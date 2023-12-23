import { cwd } from "node:process";
import { join } from "node:path";

import { env } from "#api/lib/utils/env.js";

/**
 * @returns {Promise<(
 *  req: import("express").Request,
 *  res: import("express").Response,
 *  next: import("express").NextFunction
 * )>}
 */
export async function ssr() {
  if (env.PROD == true) {
    // handle production assets
    return (req, res, next) => {

    }
  } else {
    const vite = await import("vite");
    const server = await vite.createServer({
      server: {
        middlewareMode: true
      },
      configFile: join(cwd(), "vite.config.js")
    });

    return server.middlewares;
  }
}