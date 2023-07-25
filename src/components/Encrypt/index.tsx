import { EncryptStyle } from "@/styled.ts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EncryptForm, EncryptFormSubmit } from "@/type.ts";

export default function Encrypt(): JSX.Element {
  const [iv, setIv] = useState<string>("");
  const [encrypt, setEncrypt] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<EncryptForm>();

  const onSubmit: EncryptFormSubmit = (data) => {
    if (encrypt) {
      console.log(`encrypt : ${data.message}`);
    } else {
      console.log(`decrypt : ${data.message}`);
    }
  };

  return (
    <EncryptStyle>
      <p>
        This encrypt used by NSA and a big part of government america. It's
        currently the most secure at world ! It's AES 256 CBC.
      </p>
      <form
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("message")} />
        <button onClick={() => setEncrypt((curr) => !curr)}></button>
        <div></div>
      </form>
    </EncryptStyle>
  );
}
