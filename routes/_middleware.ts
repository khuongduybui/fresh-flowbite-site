import { getLogger, LoggingFormat, ResolutionField } from "$logging/index.ts";

export const handler = [
  getLogger({
    format: LoggingFormat.APACHE_COMBINED,
    resolvers: {
      [ResolutionField.bytes]: async (_req, _ctx, res) => `${(await res.clone().arrayBuffer()).byteLength}`,
    },
  }),
];
