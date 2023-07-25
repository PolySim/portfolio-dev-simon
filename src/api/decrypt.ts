import { Decrypted } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default async function getEncrypt(message: string): Promise<Decrypted> {
  const res = await fetch(`${API_KEY}/decrypt`, {
    method: "GET",
    body: JSON.stringify({
      message: message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = (await res.json()) as Decrypted;
  return data;
}
