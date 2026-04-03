export default function Stats() {
  const stats = [
    {
      number: "1+",
      label: "Years Experience",
    },
    {
      number: "7+",
      label: "Frontend Projects",
    },
    {
      number: "5+",
      label: "Production Deployments",
    },
    {
      number: "Web + Mobile",
      label: "Platforms",
    },
  ];

  return (
    <section className=" py-24 px-6 bg-gray-950 md:-mt-36 mt-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Professional Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats?.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                {item?.number}
              </h3>

              <p className="text-gray-400 mt-2">{item?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
