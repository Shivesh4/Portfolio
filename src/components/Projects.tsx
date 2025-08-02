import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduBlock',
      description: 'Ethereum-based blockchain system for verifying academic records',
      details: 'Reduced verification time from 2 days to 3 seconds using smart contracts and decentralized storage',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'IPFS'],
      category: 'Blockchain',
      featured: true,
      githubUrl: "https://github.com/Shivesh4/Blockchain_EDU"
    },
    {
      title: 'FairShare',
      description: 'Intelligent expense manager with LSTM forecasting and NLP-powered OCR',
      details: 'AI-powered expense tracking with predictive analytics and receipt scanning capabilities',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React Native'],
      category: 'AI/ML',
      featured: true,
      githubUrl: "https://github.com/Shivesh4/FairShare"
    },
    {
      title: 'SmartFlow',
      description: 'IoT traffic control using AWS SageMaker and real-time sensor data',
      details: 'Real-time traffic optimization system using IoT sensors and machine learning models',
      technologies: ['AWS SageMaker', 'IoT Core', 'Python', 'Node.js', 'React'],
      category: 'IoT/Cloud',
      featured: true,
      githubUrl: "https://github.com/Shivesh4/Density-based-Traffic-Control-System"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-color mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
            A showcase of my work in full-stack development, machine learning, and blockchain technology
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card-elevated group hover:scale-105 animate-slide-up animate-border-glow hover:animate-glow transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold text-primary-color mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-accent rounded text-text-muted text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex">
                <button 
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="w-full btn-outline text-sm py-2 flex items-center justify-center group"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in">
          <button 
            onClick={() => window.open('https://github.com/Shivesh4?tab=repositories', '_blank')}
            className="btn-ghost"
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;