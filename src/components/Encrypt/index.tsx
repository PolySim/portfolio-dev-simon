import { EncryptStyle } from "@/styled.ts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EncryptForm, EncryptFormSubmit, EncryptResult } from "@/type.ts";
import getEncrypt from "@/api/encryp.ts";
import getDecrypt from "@/api/decrypt.ts";
import ButtonChangeEncrypt from "@/components/Encrypt/buttonChangeEncrypt.tsx";
import SubmitEncrypt from "@/components/Encrypt/submit.tsx";
import ExplainAES from "@/components/Encrypt/title.tsx";
import MessageResult from "@/components/Encrypt/MessageResult.tsx";

export default function Encrypt(): JSX.Element {
  const [result, setResult] = useState<EncryptResult>({
    iv: "",
    message: "Hello world",
  });
  const [encrypt, setEncrypt] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<EncryptForm>();

  async function fetchEncrypt(data: EncryptForm) {
    try {
      const r = await getEncrypt(data.message);
      setResult((curr) => ({ ...curr, iv: r.iv, message: r.message }));
      console.log("finish without error");
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`error: ${error}`);
    }
  }

  async function fetchDecrypt(data: EncryptForm) {
    try {
      const r = await getDecrypt(result.iv, data.message);
      setResult((curr) => ({ ...curr, message: r.message }));
      console.log("finish without error");
    } catch (error) {
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
      <ExplainAES />
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
      <MessageResult message={result.message} />
    </EncryptStyle>
  );
}
