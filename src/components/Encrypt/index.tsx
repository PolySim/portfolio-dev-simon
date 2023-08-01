import { EncryptStyle } from "@/styled.ts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Encrypted, EncryptFormSubmit } from "@/type.ts";
import getEncrypt from "@/api/encryp.ts";
import getDecrypt from "@/api/decrypt.ts";
import ButtonChangeEncrypt from "@/components/Encrypt/buttonChangeEncrypt.tsx";
import SubmitEncrypt from "@/components/Encrypt/submit.tsx";
import ExplainAES from "@/components/Encrypt/title.tsx";
import MessageResult from "@/components/Encrypt/MessageResult.tsx";

export default function Encrypt({
  phoneMode,
}: {
  phoneMode: boolean;
}): JSX.Element {
  const [message, setMessage] = useState<string>("");
  const [encrypt, setEncrypt] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<Encrypted>();

  async function fetchEncrypt(data: Encrypted) {
    try {
      const r = await getEncrypt(data.message);
      setMessage(r.message);
      console.log("finish without error");
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`error: ${error}`);
    }
  }

  async function fetchDecrypt(data: Encrypted) {
    try {
      const r = await getDecrypt(data.message);
      setMessage(r.message);
      console.log("finish without error");
    } catch (error) {
      setMessage("decryption not possible");
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`error : ${error}`);
    }
  }

  const onSubmit: EncryptFormSubmit = (data) => {
    if (encrypt) {
      void fetchEncrypt(data);
    } else {
      void fetchDecrypt(data);
    }
  };

  return (
    <EncryptStyle>
      <ExplainAES phoneMode={phoneMode} />
      <form
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input type="text" {...register("message")} autoComplete="off" />
          <SubmitEncrypt />
        </div>
        <ButtonChangeEncrypt encrypt={encrypt} setEncrypt={setEncrypt} />
      </form>
      <MessageResult message={message} />
    </EncryptStyle>
  );
}
