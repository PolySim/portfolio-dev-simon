import { ButtonEncrypt } from "@/styled.ts";
import { ChangeEncryptProps } from "@/type.ts";

export default function ButtonChangeEncrypt({
  encrypt,
  setEncrypt,
}: ChangeEncryptProps): JSX.Element {
  return (
    <ButtonEncrypt
      $encrypt={encrypt}
      onClick={() => setEncrypt((curr) => !curr)}
    >
      <svg viewBox="0 0 24 24" fill="none" name="encrypt">
        <path
          d="M12 4c1.648 0 3 1.352 3 3v3H9V7c0-1.648 1.352-3 3-3zm5 6V7c0-2.752-2.248-5-5-5S7 4.248 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1zM6 12h12v8H6v-8z"
          fill="#0D0D0D"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        name="decrypt"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
      <div />
    </ButtonEncrypt>
  );
}
