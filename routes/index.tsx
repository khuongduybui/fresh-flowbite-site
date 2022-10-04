import Page from "$flowbite/components/Page.tsx";
import Button from "$flowbite/components/Button.tsx";

import CfTurnstileForm from "../islands/CfTurnstileForm.tsx";
import Preview from "../components/Preview.tsx";

export default function Home() {
  const pageCode = `<Page [title="Page Title"]>...</Page>`;
  const pagePreview = (
    <Preview header="<Page/>" sourceCode={pageCode}>
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
        {pagePreview}
        {buttonPreview}
        {cfTurnstilePreview}
      </div>
    </Page>
  );
}
