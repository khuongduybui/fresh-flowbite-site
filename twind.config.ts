import { FreshwindUserConfig } from "freshwind/shared.ts";
import presetTailwind from "@twind/preset-tailwind";

export default {
  selfURL: import.meta.url,
  presets: [presetTailwind()],
} as FreshwindUserConfig;
