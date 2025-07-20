import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile-shivesh.jpg';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const handleScrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float animate-glow"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float animate-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse-slow"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-emerald-500/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-text-shimmer">
            Shivesh Saravanan
          </h1>
          <div className="text-xl md:text-2xl text-gradient font-medium mb-4 animate-fade-in">
            Software Engineer | ML Enthusiast
          </div>

          {/* One-liner */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            Building real-time, scalable systems that bring AI to life
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleScrollToWork}
              className="btn-primary group"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={handleScrollToContact}
              className="btn-outline"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Shivesh4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-card-border hover:bg-accent hover:border-primary transition-all duration-300 glow-primary hover:scale-110"
            >
              <Github className="w-6 h-6 text-text-secondary hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/shivesh-s"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-card-border hover:bg-accent hover:border-primary transition-all duration-300 glow-primary hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-text-secondary hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:sh4ivu@gmail.com"
              className="p-3 rounded-full bg-surface border border-card-border hover:bg-accent hover:border-primary transition-all duration-300 glow-primary hover:scale-110"
            >
              <Mail className="w-6 h-6 text-text-secondary hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  );
};

export default Hero;