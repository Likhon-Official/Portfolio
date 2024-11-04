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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">02. What I Do</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">My Services</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Delivering comprehensive solutions across the full stack of digital technology
          </p>
        </motion.div>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
            onHoverStart={() => setActiveService(index)}
            onHoverEnd={() => setActiveService(null)}
          >
            <div 
              className="relative h-full bg-[#112240] rounded-lg p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${service.color}10, #112240)`
              }}
            >
              {/* Service Header */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: `${service.color}20`
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`ri-${service.icon} text-3xl`} style={{ color: service.color }}></i>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-200">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: activeService === index ? 1 : 0.7,
                        x: activeService === index ? 0 : -10
                      }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center text-slate-400 group-hover:text-slate-300"
                    >
                      <span 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      ></span>
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

              {/* Background Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${service.color}, transparent)`
                }}
              />

              {/* Hover Border Effect */}
              <div 
                className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                style={{
                  background: `linear-gradient(45deg, ${service.color}, transparent)`
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl text-slate-200 mb-4">Need a Custom Solution?</h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help bring your ideas to life with tailored solutions that meet your specific needs.
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors"
          whileHover={{ y: -4 }}
          whileTap={{ y: 0 }}
        >
          <span>Get in Touch</span>
          <i className="ri-arrow-right-line ml-2"></i>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Services;
