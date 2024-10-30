import { motion } from 'framer-motion';
import { useState } from 'react';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: "code-line",
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies and best practices.",
      technologies: ["React", "Node.js", "TypeScript", "Next.js"],
      features: [
        "Custom Web Applications",
        "Progressive Web Apps (PWA)",
        "Single Page Applications",
        "E-commerce Solutions"
      ],
      color: "#00ff9d"
    },
    {
      icon: "terminal-box-line",
      title: "Backend Development",
      description: "Creating robust and scalable server-side solutions with secure API implementations.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      features: [
        "RESTful API Development",
        "Database Architecture",
        "Server Optimization",
        "Microservices"
      ],
      color: "#ff6b6b"
    },
    {
      icon: "smartphone-line",
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native-like performance.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: [
        "Cross-platform Apps",
        "Native Applications",
        "Mobile UI/UX",
        "App Store Deployment"
      ],
      color: "#4ecdc4"
    },
    {
      icon: "cloud-line",
      title: "Cloud Solutions",
      description: "Implementing and managing cloud infrastructure and deployments.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      features: [
        "Cloud Architecture",
        "DevOps Integration",
        "Scalable Infrastructure",
        "CI/CD Pipelines"
      ],
      color: "#45b7d1"
    },
    {
      icon: "database-2-line",
      title: "Database Design",
      description: "Designing and optimizing database structures for maximum performance and scalability.",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      features: [
        "Schema Design",
        "Data Modeling",
        "Performance Tuning",
        "Data Migration"
      ],
      color: "#96f7d2"
    },
    {
      icon: "shield-keyhole-line",
      title: "Security Solutions",
      description: "Implementing robust security measures and best practices for web applications.",
      technologies: ["OAuth", "JWT", "SSL/TLS", "Security Auditing"],
      features: [
        "Security Audits",
        "Authentication Systems",
        "Data Encryption",
        "Penetration Testing"
      ],
      color: "#ffd93d"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto pt-32 pb-24 px-4"
    >
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">02. What I Do</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">My Services</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Delivering comprehensive solutions across the full stack of digital technology
          </p>
        </motion.div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative group"
            onHoverStart={() => setActiveService(index)}
            onHoverEnd={() => setActiveService(null)}
          >
            <div className="bg-[#112240] rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 relative z-10 overflow-hidden">
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)`
                }}
              />

              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, transparent)`
                  }}
                >
                  <i className={`ri-${service.icon} text-3xl`} style={{ color: service.color }}></i>
                </div>
                <h3 className="text-xl text-slate-200 font-bold">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: activeService === index ? 1 : 0, x: activeService === index ? 0 : -20 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center text-slate-400"
                  >
                    <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: service.color }}></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-mono rounded-full transition-colors duration-300"
                    style={{ 
                      color: service.color,
                      backgroundColor: `${service.color}15`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Border Gradient */}
            <div 
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${service.color}40, transparent)`,
                transform: 'translate(8px, 8px)',
                zIndex: 0
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl text-slate-200 mb-4">Need a Custom Solution?</h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can work together to create something amazing.
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <i className="ri-message-3-line mr-2"></i>
          Get in Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Services;
