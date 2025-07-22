import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'MS in Computer Science',
      school: 'University of Texas at Arlington',
      period: 'Aug 2024 – May 2026',
      status: 'Current'
    },
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'Amrita Vishwa Vidyapeetham',
      period: 'Sep 2020 – Jul 2024',
      status: 'Completed'
    }
  ];

  const experience = [
    {
      role: 'Software Developer',
      company: 'Holistic MD LLP',
      period: 'Aug 2023 – Jul 2024',
      description: 'Built Angular-Node.js apps with WebSocket-based real-time chat, Dockerized microservices, integrated Stripe & API optimizations'
    },
    {
      role: 'ML Engineer Intern',
      company: 'TIFAC-CORE in Cyber Security',
      period: 'Nov 2022 – Mar 2023',
      description: 'Built neural models for malware classification & automated CVE workflows'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-color mb-4">
            About Me
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
            Passionate Computer Science graduate student with expertise in full-stack development, machine learning, and scalable systems
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Bio Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-elevated group hover:scale-105 animate-fade-in transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-color mb-4">Who I Am</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm Shivesh Saravanan, a Computer Science grad student at UT Arlington with a passion for building scalable, real-time systems. From full-stack development with Angular and Node.js to Dockerized microservices and machine learning pipelines, I love turning complex ideas into clean, impactful solutions.
              </p>
            </div>
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-accent rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted font-medium">Location</p>
                  <p className="font-semibold text-primary-color">Arlington, TX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-accent rounded-lg">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted font-medium">Available</p>
                  <p className="font-semibold text-primary-color">May 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="card-elevated group hover:scale-105 animate-slide-up transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary-color">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-primary-color">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary/20 text-secondary'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-1 font-medium">{edu.school}</p>
                  <p className="text-text-muted text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="card-elevated group hover:scale-105 animate-slide-up transition-all duration-300" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary-color">Experience</h3>
            </div>
            
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                  <h4 className="font-bold text-primary-color mb-1">{exp.role}</h4>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-text-muted text-sm mb-3">{exp.period}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;