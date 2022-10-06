import { useSignal } from "@preact/signals";
import { useId } from "preact/hooks";

import Button from "$flowbite/components/Button.tsx";
import CfTurnstile from "$turnstile/components/CfTurnstile.tsx";
import { CfTurnstileProps } from "$turnstile/components/CfTurnstile.tsx";
import { useTurnstileEffect } from "$turnstile/plugin.ts";

export type CfTurnstileFormProps = CfTurnstileProps & {
  explicit?: boolean;
};
export default function CfTurnstileForm({ explicit = false, sitekey, ...props }: CfTurnstileFormProps) {
  const response = useSignal("Waiting for validation...");
  const printCallback = (token: string) => response.value = token.slice(0, 32) + "...";

  if (explicit) {
    const divId = useId();
    useTurnstileEffect((turnstile) => {
      turnstile.render(`#${divId}`, { sitekey, callback: printCallback });
    });
    return (
      <section>
        <div {...props} id={divId}></div>
        <pre>{response}</pre>
      </section>
    );
  }

  return (
    <form action="/cf-turnstile-validation" method="POST">
      <CfTurnstile sitekey={sitekey} {...props} callback={printCallback} />
      <Button type="submit" variant="primary">Validate</Button>
      <pre>{response}</pre>
    </form>
  );
}
