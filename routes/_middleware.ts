import { MiddlewareHandler, MiddlewareHandlerContext } from "$fresh/server.ts";
import { getLogger, LoggingFormat, ResolutionField } from "$logging/index.ts";

const auth: MiddlewareHandler = (req: Request, ctx: MiddlewareHandlerContext) => {
  ctx.state.user = "-";
  if (req.headers.has("Authorization")) {
    // inspect req.headers.get("Authorization") and override ctx.state.user
  }
  return ctx.next();
};

export const handler = [
  auth,
  getLogger({
    format: LoggingFormat.APACHE_COMBINED,
    includeDuration: true,
    resolvers: {
      [ResolutionField.bytes]: async (_req, _ctx, res) => `${(await res.clone().arrayBuffer()).byteLength}`,
      [ResolutionField.authuser]: (_req, ctx, _res) => ctx.state.user as string,
    },
  }),
];
