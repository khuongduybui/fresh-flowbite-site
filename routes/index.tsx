import CfTurnstile from "$turnstile/components/CfTurnstile.tsx";
import Page from "$flowbite/components/Page.tsx";
import Button from "$flowbite/components/Button.tsx";

import Preview from "../components/Preview.tsx";

export default function Home() {
  const pageCode = `<Page [title="Page Title"]>...</Page>`;
  const buttonCode = `<Button type="button">Default</Button>
<Button type="button" variant="primary">Primary</Button>
<Button type="button" variant="dark">Primary</Button>
<Button type="button" variant="light">Primary</Button>
<Button type="button" variant="red">Primary</Button>
<Button type="button" variant="yellow">Primary</Button>
<Button type="button" variant="green">Primary</Button>
<Button type="button" variant="purple">Primary</Button>`;
  const cfTurnstileCode = `<CfTurnstile sitekey="..." />`;

  return (
    <Page title="Documentation for Fresh Flowbite">
      <div class="p-4 mx-auto max-w-screen-lg">
        <Preview header="<Page/>" sourceCode={pageCode}>
          There is no preview for a page. It simply puts title into head and
          classes on body.
        </Preview>

        <Preview header="<Button/>" sourceCode={buttonCode}>
          <Button type="button">Default</Button>
          <Button type="button" variant="primary">Primary</Button>
          <Button type="button" variant="dark">Primary</Button>
          <Button type="button" variant="light">Primary</Button>
          <Button type="button" variant="red">Primary</Button>
          <Button type="button" variant="yellow">Primary</Button>
          <Button type="button" variant="green">Primary</Button>
          <Button type="button" variant="purple">Primary</Button>
        </Preview>

        <Preview header="<CfTurnstile/>" sourceCode={cfTurnstileCode}>
          <p class="pb-4">
            <a
              href="https://github.com/khuongduybui/fresh-turnstile"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              target="_blank"
            >
              View plugin
            </a>
          </p>
          <CfTurnstile sitekey="0x4AAAAAAAAtgk2aWtSM5M6N" />
        </Preview>
      </div>
    </Page>
  );
}
