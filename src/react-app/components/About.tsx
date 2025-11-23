import { Code2, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Kode Berkualitas',
      description: 'Menulis kode yang bersih, efisien, dan mudah dipelihara'
    },
    {
      icon: Lightbulb,
      title: 'Solusi Kreatif',
      description: 'Pendekatan inovatif untuk setiap tantangan'
    },
    {
      icon: Rocket,
      title: 'Hasil Cepat',
      description: 'Pengiriman proyek tepat waktu tanpa mengorbankan kualitas'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://mocha-cdn.com/019ab051-6ad0-7613-bf6e-32c0a2c72f3a/about-workspace.png"
                alt="Developer workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-300"></div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <p className="text-lg text-slate-300 leading-relaxed">
              Saya adalah seorang developer yang bersemangat dalam menciptakan pengalaman digital yang bermakna. 
              Dengan perhatian terhadap detail dan komitmen terhadap keunggulan, saya mengubah ide menjadi kenyataan.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Spesialisasi saya mencakup pengembangan web modern, dengan fokus pada teknologi terkini dan 
              praktik terbaik industri. Saya percaya pada pembelajaran berkelanjutan dan selalu mencari cara 
              untuk meningkatkan keterampilan saya.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                React
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                Node.js
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
