import { Layers, Database, Palette, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layers,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API']
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design', 'Prototyping']
    },
    {
      icon: Globe,
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Agile/Scrum']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Keahlian
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <category.icon className="w-7 h-7 text-indigo-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-200 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    <span className="text-sm text-slate-400">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
