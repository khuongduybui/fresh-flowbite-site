import { useState } from "preact/hooks";
import Button from "$flowbite/components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button type="button" onClick={() => setCount(count - 1)}>-1</Button>
      <Button
        type="button"
        variant="primary"
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>
    </div>
  );
}
