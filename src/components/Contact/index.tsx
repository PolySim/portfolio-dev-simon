import { ContactStyle } from "@/styled";
import Email from "./Email";

export default function Contact(): JSX.Element {
  return (
    <ContactStyle>
      <Email />
      <div>
        <p>A request ?</p>
        <p>Contact me !</p>
        <div>
          <svg viewBox="0 0 24 24">
            <path d="m0 0h24v24h-24" fill="#fff" opacity="0" />
            <path
              d="m8.08 20a11.07 11.07 0 0 0 11.44-11 8.09 8.09 0 0 0 1.48-2.84.44.44 0 0 0 -.62-.51 1.88 1.88 0 0 1 -2.16-.38 3.89 3.89 0 0 0 -5.58-.17 4.13 4.13 0 0 0 -1.15 3.9c-3.35.2-5.65-1.39-7.49-3.57a.43.43 0 0 0 -.75.24 9.68 9.68 0 0 0 4.6 10.05 6.73 6.73 0 0 1 -4.47 2.28.45.45 0 0 0 -.14.84 11 11 0 0 0 4.84 1.16"
              fill="#231f20"
            />
          </svg>
        </div>
      </div>
    </ContactStyle>
  );
}
