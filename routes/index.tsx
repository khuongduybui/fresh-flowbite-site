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
      </div>
    </Page>
  );
}
