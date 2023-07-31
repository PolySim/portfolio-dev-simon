import { Encrypted } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default async function getDecrypt(message: string): Promise<Encrypted> {
  const res = await fetch(`${API_KEY}/decrypt`, {
    method: "POST",
    body: JSON.stringify({
      message: message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = (await res.json()) as Encrypted;
  return data;
}
