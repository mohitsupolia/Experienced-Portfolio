export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-400">Mohit Supolia</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-4">
            Frontend Software Engineer
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I build modern, scalable and high-performance user interfaces for{" "}
            <span className="text-blue-400">
              Web, Mobile Web, and Mobile Apps (Android & iOS)
            </span>
            . My focus is on creating responsive UI systems and delivering
            seamless user experiences using modern frontend technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1XEQcnv0e11W7k2U23_U925Wb7CTp957U/view?usp=sharing"
              className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-10 rounded-3xl backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Frontend Specialization</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>• Web Applications</li>
            <li>• Mobile Web Applications</li>
            <li>• Android & iOS Mobile Apps</li>
            <li>• UI Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
