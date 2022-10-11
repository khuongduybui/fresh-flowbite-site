import { getLogger, ResolutionField } from "$logging/index.ts";

export const handler = [
  getLogger({
    resolvers: {
      [ResolutionField.bytes]: async (_req, _ctx, res) => `${(await res.clone().arrayBuffer()).byteLength}`,
    },
  }),
];
