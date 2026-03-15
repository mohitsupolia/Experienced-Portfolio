export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold">Get In Touch</h2>

      <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        I'm always open to discussing new opportunities, collaborations, or
        interesting projects related to Web and Mobile Frontend Development.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/mohitsupolia/"
          className="bg-gray-800 px-6 py-3 rounded-xl"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/mohitsupolia"
          className="bg-gray-800 px-6 py-3 rounded-xl"
        >
          GitHub
        </a>

        <a
          href="mailto:yourmail@gmail.com"
          className="bg-blue-500 px-6 py-3 rounded-xl"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
