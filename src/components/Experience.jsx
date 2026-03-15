const jobs = [
  {
    role: "Software Engineer (Frontend)",
    company: "Current Organization",
    time: "2025 - Present",
    desc: "Developing scalable frontend systems for web and mobile applications. Building responsive UI components, optimizing application performance, and ensuring seamless user experiences across desktop, tablet, and mobile devices.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl text-center font-bold">
        Professional Experience
      </h2>

      <div className="max-w-4xl mx-auto mt-16 border-l border-gray-800 pl-10 space-y-12">
        {jobs.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-14 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            <h3 className="text-xl text-blue-400 font-semibold">{job.role}</h3>

            <p className="text-gray-500">
              {job.company} • {job.time}
            </p>

            <p className="text-gray-400 mt-2">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
