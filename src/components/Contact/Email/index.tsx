import { EmailStyle, MessageValid } from "@/styled";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormValue } from "@/type.ts";
import isFormValid from "@/components/Contact/Email/formIsValid.ts";

const KEY = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

export default function Email(): JSX.Element {
  const [isSend, setIsSend] = useState<boolean | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit } = useForm<FormValue>();

  const sendEmail = (data: FormValue) => {
    const element = formRef.current;

    if (element && isFormValid(data)) {
      emailjs
        .sendForm("service_qwoeqx5", "template_n0zq65b", element, KEY)
        .then((result) => {
          setIsSend(true);
          console.log(result.text);
        })
        .catch((error) => {
          setIsSend(false);
          console.log(error);
        });

      element.reset();
    }
  };

  return (
    <EmailStyle
      autoComplete="off"
      ref={formRef}
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
      onSubmit={handleSubmit(sendEmail)}
      onChange={() => setIsSend(null)}
    >
      {isSend === null ? (
        <></>
      ) : isSend ? (
        <MessageValid $isValid>Envoyé avec succès</MessageValid>
      ) : (
        <MessageValid>L'email ne s'est pas envoyé</MessageValid>
      )}

      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Simon Desdevises"
            {...register("name")}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="simon.desdevises@gmail.com"
            {...register("email")}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea placeholder="Hey !" {...register("message")} required />
      </div>

      <div>
        <button>
          <div />
          <p>Send Message</p>
        </button>
        <div />
      </div>
    </EmailStyle>
  );
}
