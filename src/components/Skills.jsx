const skills = [
  {
    title: "Frontend Development",
    tech: [
      "JavaScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Component-Based Architecture",
    ],
  },
  {
    title: "Mobile App Development",
    tech: [
      "React Native",
      "Android UI Development",
      "iOS UI Development",
      "Mobile UI Optimization",
    ],
  },
  {
    title: "Web & Mobile UI",
    tech: [
      "Cross Platform UI",
      "Mobile Web Applications",
      "Responsive Layout Systems",
      "Performance Optimization",
    ],
  },
  {
    title: "Tools & Workflow",
    tech: ["Git", "GitHub", "Postman", "Figma Collaboration"],
  },
];

export default function Skills() {
  return (
    <section className="py-24">
      <h2 className="text-center text-4xl font-bold text-white">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mt-14">
        {skills.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition"
          >
            <h3 className="text-xl text-blue-400 mb-4">{item.title}</h3>

            <ul className="space-y-2 text-gray-400">
              {item?.tech?.map((tech, i) => (
                <li key={i}>• {tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
