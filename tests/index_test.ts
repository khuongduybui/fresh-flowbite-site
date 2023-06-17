import { createHandler } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import { assertEquals } from "$std/testing/asserts.ts";
import type { ConnInfo } from "$std/http/server.ts";

const CONN_INFO: ConnInfo = {
  localAddr: { hostname: "fresh-flowbite.localhost.direct", port: 8000, transport: "tcp" },
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("index /", async (t) => {
  const handler = await createHandler(manifest);

  await t.step("GET /", async () => {
    const resp = await handler(new Request("http://fresh-flowbite.localhost.direct/"), CONN_INFO);
    assertEquals(resp.status, 200);
  });
});
