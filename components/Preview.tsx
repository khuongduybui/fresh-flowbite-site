import { JSX } from "preact";
import ChipIcon from "$flowbite/components/icons/Chip.tsx";

export type PreviewProps = JSX.HTMLAttributes<HTMLElement> & {
  sourceCode: string;
  header?: string;
  href?: string;
  linkText?: string;
  island?: boolean;
};
export default function Preview({ class: extraClass, children, header, href, island = false, linkText = "View Plugin", sourceCode, ...props }: PreviewProps) {
  return (
    <section {...props} class={"border rounded-lg m-4 p-4" + extraClass ?? ""}>
      <div class="flex m-4">
        {island && (
          <a
            href="https://fresh.deno.dev/docs/getting-started/adding-interactivity"
            target="_blank"
            title="This component is designed to work inside islands only."
          >
            <ChipIcon class="mt-1 mr-1 h-8 w-8" />
          </a>
        )}
        <h5 class="flex-grow text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {header}
        </h5>
        {href &&
          (
            <a
              href={href}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              target="_blank"
            >
              {linkText}
            </a>
          )}
      </div>
      <pre class="m-4">{sourceCode}</pre>
      <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="m-4">
        {children}
      </div>
    </section>
  );
}
