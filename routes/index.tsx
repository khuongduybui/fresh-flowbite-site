import Page from "$flowbite/components/Page.tsx";
import Button from "$flowbite/components/Button.tsx";
import GithubIcon from "../../fresh-flowbite/components/icons/Github.tsx";
import SolidIcon from "../../fresh-flowbite/components/icons/_Solid.tsx";

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
    <Preview header="<CfTurnstile/>" sourceCode={cfTurnstileCode} href="https://github.com/khuongduybui/fresh-turnstile">
      <CfTurnstileForm sitekey={cfTurnstileSitekey} />
    </Preview>
  );

  const iconCode = `<SolidIcon [class="inline"]><path d="..." /></SolidIcon>`;
  const iconPreview = (
    <Preview header="<SolidIcon/>" sourceCode={iconCode} href="https://github.com/khuongduybui/fresh-flowbite">
      <SolidIcon class="inline">
        <path d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" />
      </SolidIcon>
      <SolidIcon class="inline">
        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
      </SolidIcon>
    </Preview>
  );

  const iconsCode = `<GithubIcon [class="inline"] />`;
  const iconsPreview = (
    <Preview header="Icons" sourceCode={iconsCode} href="https://github.com/khuongduybui/fresh-flowbite">
      <GithubIcon class="inline" />
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
              class="inline-flex items-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
              target="_blank"
            >
              <GithubIcon class="mr-1" />
              View Site on GitHub
            </a>
          </p>
        </div>
        <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        {pagePreview}
        {buttonPreview}
        {iconPreview}
        {iconsPreview}
        <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        {cfTurnstilePreview}
      </div>
    </Page>
  );
}
