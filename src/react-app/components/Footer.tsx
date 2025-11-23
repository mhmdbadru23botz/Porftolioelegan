import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
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
            <a
              href="mailto:badru.wasih@email.com"
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-slate-500 text-sm">
            <span>© {currentYear} Muhamad Badru Wasih. Dibuat dengan</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
}
