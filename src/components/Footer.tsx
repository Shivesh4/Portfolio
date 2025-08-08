
const Footer = () => {
  return (
    <footer className="py-8 border-t border-card-border bg-surface">
      <div className="container mx-auto px-6">
          <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-6 text-text-muted">
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