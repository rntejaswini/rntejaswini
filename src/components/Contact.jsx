const Contact = () => (
  <section id="contact" className="py-24 px-8 text-center">
    <h2 className="text-4xl font-bold text-purple-400">Contact Me</h2>

    <p className="mt-3">📧 rntejaswini03@gmail.com</p>

    <form className="max-w-md mx-auto mt-8 glass p-6 rounded-xl flex flex-col gap-4">
      <input placeholder="Your Name" className="p-2 rounded bg-black/40"/>
      <input placeholder="Your Email" className="p-2 rounded bg-black/40"/>
      <textarea placeholder="Message" rows="4" className="p-2 rounded bg-black/40"/>
      <button className="bg-purple-600 hover:bg-purple-700 py-2 rounded">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
