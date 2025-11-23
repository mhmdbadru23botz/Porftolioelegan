import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur pembayaran terintegrasi dan manajemen inventori real-time',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://mocha-cdn.com/019ab051-6ad0-7613-bf6e-32c0a2c72f3a/project-ecommerce.png'
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time collaboration dan notifikasi',
      tags: ['TypeScript', 'Express', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://mocha-cdn.com/019ab051-6ad0-7613-bf6e-32c0a2c72f3a/project-taskmanager.png'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard analytics interaktif dengan visualisasi data dan laporan komprehensif',
      tags: ['React', 'D3.js', 'Tailwind'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://mocha-cdn.com/019ab051-6ad0-7613-bf6e-32c0a2c72f3a/project-analytics.png'
    },
    {
      title: 'Social Media App',
      description: 'Platform media sosial dengan feed real-time, messaging, dan sistem notifikasi',
      tags: ['Next.js', 'Socket.io', 'Redis'],
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://mocha-cdn.com/019ab051-6ad0-7613-bf6e-32c0a2c72f3a/project-social.png'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Proyek Unggulan
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
              
              <div className="relative p-6 space-y-4">
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                
                <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm text-slate-300 hover:text-white transition-all duration-200">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-lg text-sm text-indigo-300 hover:text-indigo-200 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
