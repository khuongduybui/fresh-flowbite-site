import { JSX } from "preact";

export type PreviewProps = JSX.HTMLAttributes<HTMLElement> & {
  sourceCode: string;
  header?: string;
};
export default function Preview(
  { class: extraClass, children, header, sourceCode, ...props }: PreviewProps,
) {
  return (
    <section {...props} class={"border rounded-lg m-4 p-4" + extraClass ?? ""}>
      <h5 class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {header}
      </h5>
      <pre class="m-4">{sourceCode}</pre>
      <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="m-4">
        {children}
      </div>
    </section>
  );
}
