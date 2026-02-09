import { useState } from "react";

export default function Services() {

  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      name: 'Web design',
      icon: '/assets/web-icon.png',
      description: 'Web development is the process of building scalable and responsive applications.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap 5',
        'React',
        'Java',
        'Spring Boot',
        'MySQL',
      ],
    },
    {
      name: 'UI / UX design',
      icon: '/assets/ui-icon.png',
      description: 'Designing user-friendly and visually appealing digital experiences.',
      skills: [
        'Figma',
        'Blender',
        'Wireframing',
        'Prototyping',
        'Design Systems',
      ],
    },
    {
      name: 'AI Agent',
      icon: '/assets/ai-icon.png',
      description: 'Building intelligent automation workflows and AI-powered agents.',
      skills: [
        'n8n Agent',
        'AI Workflow Automation',
        'API Integrations',
        'Prompt Engineering',
      ],
    },
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">

      <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        A versatile skill set focused on building scalable, user-friendly,
        and intelligent applications using modern technologies.
      </p>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-auto gap-6 my-10">

        {services.map((service) => (
          <div
            key={service.name}
            onClick={() => setActiveService(service.name)}
            className={`border rounded-lg px-8 py-12 cursor-pointer
              duration-500 hover:-translate-y-1
              ${
                activeService === service.name
                  ? 'border-purple-500 bg-lightHover dark:bg-darkHover'
                  : 'border-gray-300 dark:border-white/30'
              }`}
          >
            <img src={service.icon} alt="" className="w-10" />

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>

            <p className="text-sm text-gray-600 dark:text-white/80">
              {service.description}
            </p>

            <span className="flex items-center gap-2 text-sm mt-5 text-purple-400">
              Click to view skills
            </span>
          </div>
        ))}

      </div>

      {/* SKILLS DISPLAY */}
      {activeService && (
        <div className="mt-12 text-center">

          <h3 className="text-3xl font-Ovo mb-6">
            {activeService} Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {services
              .find((service) => service.name === activeService)
              ?.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full border
                    border-gray-300 dark:border-white/30
                    text-sm hover:bg-purple-600 hover:text-white
                    transition duration-300"
                >
                  {skill}
                </span>
              ))}
          </div>

        </div>
      )}

    </div>
  );
}
