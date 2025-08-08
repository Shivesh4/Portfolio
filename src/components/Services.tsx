import { Code, Brain, Zap, Cloud, CheckCircle, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building seamless, scalable digital experiences from concept to deployment',
      features: ['Modern UI/UX Design', 'API Development & Integration', 'Real-time Features', 'Cloud-Native Deployment']
    },
    {
      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Turning data into smart, automated solutions that adapt and improve over time',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Model Deployment']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-color mb-4">
            Services & Expertise
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
            Comprehensive development services from concept to deployment
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-elevated group animate-slide-up hover:animate-glow hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon */}
              <div className="mb-6 flex items-start">
                <div className="p-3 rounded-xl bg-gradient-primary glow-primary mr-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-color mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-text-muted">
                    <CheckCircle className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Availability & CTA */}
        <div className="text-center">
          <div className="card-glass max-w-2xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-primary-color">
                Available for Opportunities
              </h3>
            </div>
            
            <p className="text-text-secondary mb-6">
              Currently seeking full-time software engineering or AI/ML roles. 
              Available for graduation in <span className="text-primary font-semibold">May 2026</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start a Conversation
              </button>
              <button 
                onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank')}
                className="btn-outline"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;