import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-card-border bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="flex items-center text-text-muted mb-4 md:mb-0">
            <span>© 2024 Shivesh Saravanan. Made with</span>
            <Heart className="w-4 h-4 mx-2 text-primary animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 ml-2 text-secondary" />
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-text-muted">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;