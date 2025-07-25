"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_s9rpzih";
const TEMPLATE_ID = "template-porfolio1";
const PUBLIC_KEY = "-mMoH02uV2R2AUMM5";

const ContactMail = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null); // 'success' | 'error' | null
  const [senderEmail, setSenderEmail] = useState("");
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!subject || !message) {
      setStatus("error");
      return;
    }

    const templateParams = {
      subject,
      message,
      email: senderEmail,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("success");
      setSubject("");
      setMessage("");
      setSenderEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="z-20 flex flex-col gap-5 justify-center items-center mt-10 ">
      <div className="flex no-wrap w-full justify-center">
        <h1 className="text-xl leading-tight text-center md:text-5xl ">
          Contacta <span className="text-secondary font-bold">Conmigo</span>
        </h1>
      </div>

      <div className="flex mt-3 w-full h-auto max-w-sm md:max-w-md mt-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full h-full ">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tu email
                </label>
                <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="tuemail@example.com"
                    className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Asunto
                </label>
                <input
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Asunto..."
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mensaje
                </label>
                <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
                placeholder="Mensaje..."
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
            </div>

            <button
                type="submit"
                title="Enviar mensaje"
                className="self-center cursor-pointer w-10 inline-flex justify-center p-2 text-blue-600 rounded-full hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-blue-100 md:mb-20"
            >
                <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
                >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span className="sr-only">Enviar Mensaje</span>
            </button>

          {/* Feedback */}
          {status === "success" && (
            <p className="text-green-600 text-sm text-center">¡Mensaje enviado con éxito!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Error al enviar el mensaje. Verificá los campos.</p>
          )}

        </form>
      </div>
    </section>
  );
};

export default ContactMail;
