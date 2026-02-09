import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = () => {
    setResult("Message sent successfully ✅");
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-12 scroll-mt-20
                 bg-[url('./assets/footer-bg-color.png')]
                 bg-no-repeat bg-center bg-[length:85%_auto]
                 dark:bg-none"
    >
      <h2 className="text-center text-4xl font-Ovo text-black dark:text-white">
        Get in Touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-4 mb-10
                    text-gray-600 dark:text-gray-300">
        I&apos;d love to hear from you. Send me a message anytime.
      </p>

      <form
        action="https://formkeep.com/f/ae4112bbf1d5"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto
                   bg-white/90 dark:bg-[#020617]/90
                   backdrop-blur-md
                   p-8 rounded-xl shadow-lg"
      >
        <input type="hidden" name="_subject" value="New Contact Message" />

        <div className="grid gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md outline-none
                       text-black dark:text-white
                       bg-white dark:bg-darkHover/30
                       placeholder:text-gray-400 dark:placeholder:text-gray-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md outline-none
                       text-black dark:text-white
                       bg-white dark:bg-darkHover/30
                       placeholder:text-gray-400 dark:placeholder:text-gray-300"
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border rounded-md outline-none mb-6
                     text-black dark:text-white
                     bg-white dark:bg-darkHover/30
                     placeholder:text-gray-400 dark:placeholder:text-gray-300"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-10 mx-auto block rounded-full
                     bg-black text-white hover:bg-gray-900
                     dark:bg-white dark:text-black dark:hover:bg-gray-200
                     transition"
        >
          Send Message
        </button>

        {result && (
          <p className="text-center mt-4 text-green-600 dark:text-green-400">
            {result}
          </p>
        )}
      </form>
    </div>
  );
}
