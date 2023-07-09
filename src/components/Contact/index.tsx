import { ContactStyle } from "@/styled";
import emailjs from "emailjs-com";
import { useRef } from "react";

const KEY = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

export default function Contact(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    const element = formRef.current;

    if (element) {
      emailjs
        .sendForm("gmail", "template_n0zq65b", element, KEY)
        .then((result) => console.log(result.text))
        .catch((error) => console.log(error));

      element.reset();
    }
  };

  return (
    <ContactStyle>
      <div>
        <form ref={formRef}>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Simon Desdevises" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="simon.desdevises@gmail.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="object">Object</label>
            <input type="text" name="object" placeholder="Freelance" />
          </div>

          <div>
            <label htmlFor="message"></label>
            <input type="text" name="message" placeholder="Hey !" />
          </div>

          <div>
            <input
              type="submit"
              value="Send Message"
              onClick={(e) => sendEmail(e)}
            />
          </div>
        </form>
      </div>
      <div></div>
    </ContactStyle>
  );
}
