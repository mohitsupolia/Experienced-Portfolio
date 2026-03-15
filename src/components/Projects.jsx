const projects = [
  {
    name: "Cric Arabia",
    desc: "Cricket platform providing match updates, news, and user engagement across web and mobile platforms.",
    tech: ["Next", "Mobile Web"],
    live: "https://cricarabia.com",
    mobile: "https://apps.apple.com/ca/app/cric-arabia/id6746745023",
  },
  {
    name: "Logyxpress",
    desc: "Logistics platform designed to streamline shipment management and logistics operations.",
    tech: ["React", "Responsive UI"],
    live: "https://logyxps.com",
  },
  {
    name: "VisaNet",
    desc: "Platform designed to simplify visa processing and document workflows for users.",
    tech: ["React", "UI System"],
    live: "https://app.locapay.co.ke/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl text-center font-bold">Featured Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-14">
        {projects?.map((project) => (
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl text-blue-400">{project.name}</h3>

            <p className="text-gray-400 mt-3">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span className="text-sm bg-gray-800 px-3 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a href={project.live} className="text-blue-400">
                Live Website
              </a>

              {project?.mobile && (
                <a href={project.mobile} className="text-green-400">
                  Mobile App
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
