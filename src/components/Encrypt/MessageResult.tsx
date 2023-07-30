import { MessageResultStyle } from "@/styled.ts";
import { Encrypted } from "@/type.ts";

export default function MessageResult({ iv, message }: Encrypted): JSX.Element {
  return (
    <MessageResultStyle>
      <div />
      <h3>Response</h3>
      <p>IV : {iv}</p>
      <p>{message}</p>
    </MessageResultStyle>
  );
}
