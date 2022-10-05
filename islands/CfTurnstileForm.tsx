import Button from "$flowbite/components/Button.tsx";
import CfTurnstile from "$turnstile/components/CfTurnstile.tsx";
import { CfTurnstileProps } from "$turnstile/components/CfTurnstile.tsx";
import { useTurnstileEffect } from "$turnstile/plugin.ts";

export type CfTurnstileFormProps = CfTurnstileProps & {
  explicit?: boolean;
};
export default function CfTurnstileForm({ explicit = false, sitekey, ...props }: CfTurnstileFormProps) {
  if (explicit) {
    useTurnstileEffect((turnstile) => {
      turnstile.render("#explicit", { sitekey });
    });
  }
  return (
    <form action="/cf-turnstile-validation" method="POST">
      {explicit ? <div {...props} id="explicit"></div> : <CfTurnstile sitekey={sitekey} {...props} />}
      <Button type="submit" variant="primary">Validate</Button>
    </form>
  );
}
