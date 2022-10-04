import Button from "$flowbite/components/Button.tsx";
import CfTurnstile from "$turnstile/components/CfTurnstile.tsx";
import { CfTurnstileProps } from "$turnstile/components/CfTurnstile.tsx";

export default function CfTurnstileForm(props: CfTurnstileProps) {
  return (
    <form action="/cf-turnstile-validation" method="POST">
      <CfTurnstile {...props} />
      <Button type="submit" variant="primary">Validate</Button>
    </form>
  );
}
