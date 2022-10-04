import Page from "$flowbite/components/Page.tsx";
import Button from "$flowbite/components/Button.tsx";

import CfTurnstileForm from "../islands/CfTurnstileForm.tsx";
import Preview from "../components/Preview.tsx";

export default function Home() {
  const pageCode = `<Page [title="Page Title"]>...</Page>`;
  const pagePreview = (
    <Preview header="<Page/>" sourceCode={pageCode} href="https://github.com/khuongduybui/fresh-flowbite">
      There is no preview for a page. It simply puts title into head and classes on body.
    </Preview>
  );

  const buttonCode = `<Button type="button">Default</Button>
<Button type="button" variant="primary">Primary</Button>
<Button type="button" variant="dark">Primary</Button>
<Button type="button" variant="light">Primary</Button>
<Button type="button" variant="red">Primary</Button>
<Button type="button" variant="yellow">Primary</Button>
<Button type="button" variant="green">Primary</Button>
<Button type="button" variant="purple">Primary</Button>`;
  const buttonPreview = (
    <Preview header="<Button/>" sourceCode={buttonCode} href="https://github.com/khuongduybui/fresh-flowbite">
      <Button type="button">Default</Button>
      <Button type="button" variant="primary">Primary</Button>
      <Button type="button" variant="dark">Primary</Button>
      <Button type="button" variant="light">Primary</Button>
      <Button type="button" variant="red">Primary</Button>
      <Button type="button" variant="yellow">Primary</Button>
      <Button type="button" variant="green">Primary</Button>
      <Button type="button" variant="purple">Primary</Button>
    </Preview>
  );

  const cfTurnstileCode = `<form action="..." method="POST">
  <CfTurnstile sitekey="..." />
  <Button type="submit" variant="primary">Validate</Button>
</form>`;
  const cfTurnstileSitekey = Deno.env.get("CfTurnstile_Sitekey");
  const cfTurnstilePreview = cfTurnstileSitekey && (
    <Preview
      header="<CfTurnstile/>"
      sourceCode={cfTurnstileCode}
      href="https://github.com/khuongduybui/fresh-turnstile"
    >
      <CfTurnstileForm sitekey={cfTurnstileSitekey} />
    </Preview>
  );

  return (
    <Page title="Documentation for Fresh Flowbite">
      <div class="p-4 mx-auto max-w-screen-lg">
        <div>
          <p>This site is a demo / docs page for my various Deno Fresh plugins. Source codes for the site as well as those plugins are all MIT-licensed.</p>
          <p class="pt-4">
            <a
              href="https://github.com/khuongduybui/fresh-flowbite-site"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              target="_blank"
            >
              View on GitHub
            </a>
          </p>
        </div>
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        {pagePreview}
        {buttonPreview}
        {cfTurnstilePreview}
      </div>
    </Page>
  );
}
