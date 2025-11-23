import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl shadow-indigo-500/50 group-hover:shadow-indigo-500/70 transition-shadow duration-300">
                <img 
                  src="https://mocha-cdn.com/019ab051-6ad0-7613-bf6e-32c0a2c72f3a/profile-photo.png"
                  alt="Muhamad Badru Wasih"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins">
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Muhamad Badru Wasih
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-400 font-medium">
              Developer & Creative Problem Solver
            </p>
            
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Menciptakan solusi digital yang inovatif dan berkualitas tinggi dengan fokus pada pengalaman pengguna yang luar biasa
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-4 pt-4">
            <a
              href="https://github.com/Mhmdbadru23botz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <Github className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-badru-wasih-3859212aa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </a>
            <a
              href="https://wa.me/6282258041628"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-200 group"
            >
              <FaWhatsapp className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://t.me/Mhmdbadru23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 group"
            >
              <FaTelegram className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <button
              onClick={scrollToContact}
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full text-white font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-200 transform hover:scale-105"
            >
              Mari Bekerja Sama
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
