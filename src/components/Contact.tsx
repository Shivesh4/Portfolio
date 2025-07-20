import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sh4ivu@gmail.com',
      href: 'mailto:sh4ivu@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 817-723-9353',
      href: 'tel:+18177239353'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Arlington, Texas',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Shivesh4',
      username: 'Shivesh4'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shivesh-s',
      username: 'shivesh-s'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-color mb-4">
            Let's Connect
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
            Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary-color mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:outline-none transition-colors text-text-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:outline-none transition-colors text-text-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg focus:border-primary focus:outline-none transition-colors text-text-primary resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                  isSubmitted 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'btn-primary'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold text-primary-color mb-6">
              Get In Touch
            </h3>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center p-4 bg-surface rounded-lg border border-card-border transition-all duration-300 ${
                    info.href !== '#' ? 'hover:bg-accent hover:border-primary group' : ''
                  }`}
                >
                  <div className="p-2 rounded-lg bg-primary/20 mr-4">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{info.label}</p>
                    <p className="text-text-primary font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary-color mb-4">
                Follow Me
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-surface rounded-lg border border-card-border hover:bg-accent hover:border-primary transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/20 mr-4">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium group-hover:text-primary transition-colors">
                        {social.name}
                      </p>
                      <p className="text-text-muted text-sm">@{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;