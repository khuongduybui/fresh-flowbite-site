import { PageProps } from "$fresh/server.ts";

import { CfTurnstileValidationResult, generatePostHandler } from "$turnstile/handlers/CfTurnstileValidation.ts";

export const handler = { POST: generatePostHandler(Deno.env.get("CfTurnstile_SecretKey")) };

export default function CfTurnstileValidation({ data }: PageProps<CfTurnstileValidationResult | null>) {
  const emptyData = (
    <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
      This page is not designed for stand-alone use. Please use the Turnstile validate form from the{" "}
      <a href="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">main page</a>.
    </div>
  );
  const success = (
    <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
      <b class="font-medium">Validation successful</b> at <code class="text-blue-600">{data?.challenge_ts}</code> for{" "}
      <code class="text-blue-600">{data?.hostname}</code>. You may now return to the{" "}
      <a href="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">main page</a>.
    </div>
  );
  const failure = (
    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <b class="font-medium">Validation failed</b> due to the following reason(s):
      <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
        {data?.["error-codes"]?.map((errorCode) => <li>{errorCode}</li>)}
      </ul>
      Please use the Turnstile validate form from the <a href="/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">main page</a>.
    </div>
  );
  return data ? (data.success ? success : failure) : emptyData;
}
