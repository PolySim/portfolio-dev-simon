import { EncryptStyle } from "@/styled.ts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EncryptForm, EncryptFormSubmit, EncryptResult } from "@/type.ts";
import getEncrypt from "@/api/encryp.ts";
import getDecrypt from "@/api/decrypt.ts";
import ButtonChangeEncrypt from "@/components/Encrypt/buttonChangeEncrypt.tsx";

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
      <div>
        <p>
          This encrypt used by NSA and a big part of government america. It's
          currently the most secure at world ! It's AES 256 CBC.
        </p>
        <p>
          An IV (Initialization Vector) is a random and unique value stored to
          be able to decrypt the message.
        </p>
      </div>
      <form
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input type="text" {...register("message")} autoComplete="off" />
          <button name="submit">
            <svg viewBox="0 0 32 32">
              <path d="m27.71 4.29a1 1 0 0 0 -1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43 6.34-6.36 1.41 1.41-6.37 6.37 3.44 8.59a1 1 0 0 0 .93.63 1 1 0 0 0 .92-.66l8-22a1 1 0 0 0 -.21-1.05z" />
              <path d="m0 0h32v32h-32z" fill="none" />
            </svg>
          </button>
        </div>
        <ButtonChangeEncrypt encrypt={encrypt} setEncrypt={setEncrypt} />
      </form>
      <div>
        <p>{result.message}</p>
      </div>
    </EncryptStyle>
  );
}
