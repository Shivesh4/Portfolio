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
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary-color mb-6">
              Who I Am
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              I'm Shivesh Saravanan, a Computer Science grad student at UT Arlington with a passion for building scalable, real-time systems. From full-stack development with Angular and Node.js to Dockerized microservices and machine learning pipelines, I love turning complex ideas into clean, impactful solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Arlington, TX</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Available May 2026</span>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-primary-color mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="card-glass">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary-color">{edu.degree}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-1">{edu.school}</p>
                    <p className="text-text-muted text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-primary-color mb-6 flex items-center">
                <Briefcase className="w-6 h-6 text-primary mr-3" />
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="card-glass">
                    <h4 className="font-semibold text-primary-color mb-1">{exp.role}</h4>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-text-muted text-sm mb-3">{exp.period}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;