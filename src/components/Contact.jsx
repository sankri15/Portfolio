function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 gradient-text">
          Contact Me
        </h2>

        <div className="glass rounded-2xl p-8 card-lift glow-border text-center">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Sanjana Pal
          </h3>

          <p className="text-slate-400 mb-6">
            Full-Stack Developer • Computer Science Student
          </p>

          <div className="space-y-4">
            <p className="text-slate-300">
              📧 Email:
              <a
                href="mailto:sanjanapal004@gmail.com"
                className="ml-2 text-violet-400 hover:text-blue-400"
              >
                sanjanapal004@gmail.com
              </a>
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-6">
              <a
                href="https://github.com/sankri15"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-300 via-sky-300 to-violet-300 text-white font-semibold hover:scale-105 transition"
              >
                💻 GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sanjana-pal-94417639b/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;