import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import Page from "$flowbite/components/Page.tsx";

export default function App({ Component }: AppProps) {
  return (
    <Page title="Documentation for Fresh Flowbite">
      <Head>
        <script src={"https://unpkg.com/@grammarly/editor-sdk?clientId=" + Deno.env.get("Grammarly_ClientId")}></script>
      </Head>
      <div class="p-4 mx-auto max-w-screen-lg">
        <Component />
      </div>
    </Page>
  );
}
