import { MessageResultStyle } from "@/styled.ts";

export default function MessageResult({
  message,
}: {
  message: string;
}): JSX.Element {
  return (
    <MessageResultStyle>
      <p>{message}</p>
    </MessageResultStyle>
  );
}
