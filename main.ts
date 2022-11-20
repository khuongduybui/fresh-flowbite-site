/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "freshwind/plugin.ts";
import twindConfig from "./twind.config.ts";

import { FlowbitePlugin } from "$flowbite/index.ts";
import { TurnstilePlugin } from "$turnstile/index.ts";
await start(manifest, {
  plugins: [
    twindPlugin(twindConfig),
    FlowbitePlugin(),
    TurnstilePlugin(),
  ],
});
