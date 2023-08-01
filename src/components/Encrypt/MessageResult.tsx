import { MessageResultStyle } from "@/styled.ts";
import { Encrypted } from "@/type.ts";

export default function MessageResult({ message }: Encrypted): JSX.Element {
  return (
    <MessageResultStyle>
      <div />
      <h3>Response</h3>
      <p>{message}</p>
    </MessageResultStyle>
  );
}
