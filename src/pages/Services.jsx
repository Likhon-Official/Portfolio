import { motion } from 'framer-motion';
import { useState } from 'react';

function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: "code-line",
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies and best practices.",
      technologies: ["React", "Node.js", "TypeScript", "Next.js"]
    },
    {
      icon: "terminal-box-line",
      title: "Backend Development",
      description: "Creating robust and scalable server-side solutions with secure API implementations.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      icon: "smartphone-line",
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native-like performance.",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: "cloud-line",
      title: "Cloud Solutions",
      description: "Implementing and managing cloud infrastructure and deployments.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: "database-2-line",
      title: "Database Design",
      description: "Designing and optimizing database structures for maximum performance and scalability.",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: "shield-keyhole-line",
      title: "Security Solutions",
      description: "Implementing robust security measures and best practices for web applications.",
      technologies: ["OAuth", "JWT", "SSL/TLS", "Security Auditing"]
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto pt-32 pb-24"
    >
      <header className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">02. What I Do</h1>
          <div className="h-0.5 w-full bg-slate-700 relative">
            <div className="absolute inset-y-0 left-0 bg-[#64ffda] w-24"></div>
          </div>
        </motion.div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {displayedServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 flex items-center justify-center mr-4 group-hover:bg-[#64ffda]/20 transition-all duration-300">
                <i className={`ri-${service.icon} text-2xl text-[#64ffda]`}></i>
              </div>
              <h3 className="text-xl text-slate-200">{service.title}</h3>
            </div>
            <p className="text-slate-400 mb-6">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-mono text-[#64ffda] bg-[#64ffda]/10 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {services.length > 4 && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg hover:bg-[#64ffda]/10 transition-colors"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Services;