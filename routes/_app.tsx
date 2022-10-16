import { AppProps } from "$fresh/server.ts";

import Page from "$flowbite/components/Page.tsx";

export default function App({ Component }: AppProps) {
  return (
    <Page title="Documentation for Fresh Flowbite">
      <div class="p-4 mx-auto max-w-screen-lg">
        <Component />
      </div>
    </Page>
  );
}
