export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-950 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-400">Mohit Supolia</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1cHplsC6WWMhgaYu6O-sixCq1cwlJTcl9/view?usp=sharing"
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
