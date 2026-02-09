export default function About() {

  const tools = [
    { name: 'vscode', icon: './assets/vscode.png' },
    {name: 'github',icon:'./assets/github.png'},
    { name: 'figma', icon: './assets/figma.png' },
    { name: 'git', icon: './assets/git.png' },
  ];

  const data = [
    {
      name: 'Specialization',
      icon1: './assets/code-icon.png',
      icon2: './assets/code-icon-dark.png',
      description: (
        <p>
          Frontend-focused Full Stack Developer specializing in
          <span className="font-semibold"> React</span>, modern UI development,
          and performance-optimized web applications.
        </p>
      ),
    },
    {
      name: 'Education',
      icon1: './assets/edu-icon.png',
      icon2: './assets/edu-icon-dark.png',
      description: (
        <div className="space-y-1">
          <p className="font-semibold">N.M.S.S.V.N College</p>
          <p>Bachelor of Science in Computer Science</p>
          <p className="opacity-80 text-sm">June 2022 – April 2025</p>
          <p className="opacity-80 text-sm">CGPA : 7.95</p>
        </div>
      ),
    },
    {
      name: 'Projects',
      icon1: './assets/project-icon.png',
      icon2: './assets/project-icon-dark.png',
      description: (
        <p>
          Built and delivered multiple real-world projects focused on
          performance, scalability, and clean user experience.
        </p>
      ),
    },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-14 scroll-mt-20">

      <h2 className="text-center text-5xl font-Ovo mb-6">
        About me
      </h2>

      <p className="max-w-2xl mx-auto text-center font-Ovo leading-relaxed text-gray-300 mb-10">
        I am a Full Stack Developer passionate about building scalable,
        high-performance, and user-centric web applications with clean
        architecture and modern design.
      </p>

      {/* CARDS */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">

        {data.map((item) => (
          <li
            key={item.name}
            className="min-h-[260px] border border-gray-300 dark:border-white/30 
            rounded-xl p-6 flex flex-col items-center justify-start
            hover:bg-lightHover hover:-translate-y-1 duration-500
            dark:hover:bg-darkHover/50"
          >
            <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
            <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />

            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
              {item.name}
            </h3>

            <div className="text-gray-600 text-sm dark:text-white/80">
              {item.description}
            </div>
          </li>
        ))}
      </ul>

      {/* TOOLS */}
      <h4 className="my-8 text-gray-700 font-Ovo dark:text-white/80 text-center">
        Tools I use
      </h4>

      <ul className="flex justify-center gap-5 flex-wrap">
        {tools.map((tool) => (
          <li
            key={tool.name}
            className="flex items-center justify-center w-14 aspect-square
            border border-gray-300 dark:border-white/30 rounded-lg
            hover:-translate-y-1 duration-500"
          >
            <img src={tool.icon} alt={tool.name} className="w-7" />
          </li>
        ))}
      </ul>

    </div>
  );
}
