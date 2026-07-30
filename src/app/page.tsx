const projects = [
  {
    title: "Doctor Appointment",
    description:
      "A clean booking-focused web app concept for patients and doctors, designed to simplify appointments and service discovery.",
    image: "/project-doctor-appointment.svg",
    repoUrl: "https://github.com/kundanYadav1/doctor-appointment",
  },
  {
    title: "Movie Book",
    description:
      "A modern movie discovery experience with a polished UI, trending lists, and smooth browsing for film lovers.",
    image: "/project-movie-book.svg",
    repoUrl: "https://github.com/kundanYadav1/movie-book",
  },
  {
    title: "3D Portfolio",
    description:
      "An interactive personal portfolio concept with immersive visuals and a futuristic feel to present work creatively.",
    image: "/project-3d-portfolio.svg",
    repoUrl: "https://github.com/kundanYadav1/3d-portfolio",
  },
];

const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "SEO",
  "Freelance Development",
];

const faqItems = [
  {
    question: "Who is Kundan Prasad Yadav?",
    answer:
      "Kundan Prasad Yadav is a B.Tech Computer Engineering graduate from NIMS University Jaipur and a MERN Stack developer based in Kathmandu, Nepal.",
  },
  {
    question: "What services does Kundan offer?",
    answer:
      "He builds modern websites, web applications, and freelance development solutions using React, Next.js, Node.js, MongoDB, and SEO-friendly practices.",
  },
  {
    question: "Where is Kundan based?",
    answer:
      "Kundan is based in Kathmandu, Nepal, and works with clients locally and remotely.",
  },
];

const contactDetails = [
  {
    label: "Email",
    value: "kundanprasadyadav15@gmail.com",
    href: "mailto:kundanprasadyadav15@gmail.com",
  },
  {
    label: "Phone",
    value: "+977 9742471815",
    href: "tel:+9779742471815",
  },
  {
    label: "GitHub",
    value: "github.com/kundanYadav1",
    href: "https://github.com/kundanYadav1",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kundan-prasad-yadav-9a7328192",
    href: "https://www.linkedin.com/in/kundan-prasad-yadav-9a7328192/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(135deg,_#0f172a_0%,_#111827_100%)] text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col px-6 py-20 lg:px-8 lg:py-28">
        <nav className="mb-16 flex items-center justify-between text-sm text-slate-300">
          <span className="font-semibold tracking-[0.3em] text-slate-50 uppercase">Kundan Prasad Yadav</span>
          <a href="#contact" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-sky-400 hover:text-sky-300">
            Let&apos;s talk
          </a>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-300">B.Tech CSE Graduate • MERN Stack Developer • Kathmandu, Nepal</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Kundan Prasad Yadav — Developer in Kathmandu building modern web solutions.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I am Kundan Prasad Yadav, a B.Tech graduate in Computer Engineering from NIMS University Jaipur (2021–2025), currently working as a MERN Stack developer and freelance developer in Kathmandu, Nepal.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
                View projects
              </a>
              <a href="/kundan_resume.pdf" download className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300">
                Download Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-center gap-4">
              <img
                src="https://github.com/kundanYadav1.png"
                alt="Kundan Prasad Yadav"
                className="h-20 w-20 rounded-full border border-slate-700 object-cover"
                loading="eager"
              />
              <div>
                <p className="text-lg font-semibold text-white">Kundan Prasad Yadav</p>
                <p className="text-sm text-slate-400">MERN Stack Developer • Kathmandu, Nepal</p>
              </div>
            </div>

            <img
              src="/hero-kundan.svg"
              alt="Illustration of Kundan as a web developer"
              className="mt-6 w-full rounded-2xl border border-slate-800"
            />

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 transition hover:border-sky-400 hover:text-sky-300"
                >
                  <span className="text-slate-400">{item.label}:</span> {item.value}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Computer Engineering graduate and freelance developer in Kathmandu.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              I am Kundan Prasad Yadav, a B.Tech in Computer Engineering graduate from NIMS University Jaipur, class of 2021–2025. I work with the MERN Stack to build responsive web applications, business websites, and custom digital experiences for clients in Nepal, with a strong focus on performance, SEO, and modern design.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Projects & Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">What I help clients build</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
              <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200">
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Technologies I use to build and grow digital products.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Common questions about my work and services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-8 text-center lg:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s build a website that ranks, performs, and converts.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            If you need a MERN Stack developer, freelance web developer, or SEO-friendly website in Kathmandu, Nepal, I&apos;d love to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:kundanprasadyadav15@gmail.com" className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
              kundanprasadyadav15@gmail.com
            </a>
            <a href="tel:+9779742471815" className="inline-flex rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300">
              +977 9742471815
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
