import { motion } from 'framer-motion';
import { useState } from 'react';

function Resume() {
  const [activeTab, setActiveTab] = useState('experience');
  const [showAllCerts, setShowAllCerts] = useState(false);

  const experiences = [
    {
      role: "Software Engineering",
      company: "Walmart USA",
      period: "September 13th, 2024",
      location: "United States",
      description: "Completed the Advanced Software Engineering Job Simulation.",
      certificate: "https://drive.google.com/file/d/17o1vgF-ZRqI0QiKhvv7L78BKTdaeafqI/view?usp=sharing",
      achievements: [
        "Developed a novel version of a heap data structure in Java for Walmart's shipping department.",
        "Designed a UML class diagram for a data processor.",
        "Created an entity relationship diagram to design a new database.",
        "Implemented efficient algorithms for data processing"
      ],
      tech: ["Java", "Python", "SQL", "UML"]
    },
    {
      role: "Technology Software Development",
      company: "Citi bank",
      period: "September 14th, 2024",
      location: "United States",
      description: "Enhanced Citi’s loan management system and stock market risk reporting.",
      certificate: "https://drive.google.com/file/d/1-uV2VYQ28QweDXNjNfLUTeHc-qxl3uK1/view?usp=sharing",
      achievements: [
        "Designed UML state diagram for the loan process.",
        "Researched ML systems for credit risk assessment.",
        "Built a Java tool for real-time stock market risk visualization.",
      ],
      tech: ["APIs", "System Design", "Data Visualization", "Machine Learning"]
    }
  ];

  const skills = {
    "Programming Languages": [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Go", level: 85 },
      { name: "Java", level: 80 }
    ],
    "Frontend": [
      { name: "React/Next.js", level: 95 },
      { name: "Vue.js", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 }
    ],
    "Backend": [
      { name: "Node.js", level: 90 },
      { name: "Django", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ],
    "DevOps & Tools": [
      { name: "Docker/K8s", level: 85 },
      { name: "AWS/GCP", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "Git", level: 95 }
    ]
  };

  const certifications = [
    {
      name: "CS50 AI",
      issuer: "Harvard University",
      date: "Computer Science",
      icon: "amazon-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google",
      date: "2022",
      icon: "google-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2022",
      icon: "database-2-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "Microsoft Azure Developer",
      issuer: "Microsoft",
      date: "2023",
      icon: "microsoft-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "Kubernetes Administrator",
      issuer: "Linux Foundation",
      date: "2023",
      icon: "terminal-box-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "React Developer",
      issuer: "Meta",
      date: "2023",
      icon: "reactjs-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "Python Professional",
      issuer: "Python Institute",
      date: "2022",
      icon: "python-line",
      certificate: "https://pythoninstitute.org/"
    },
    {
      name: "Cybersecurity Specialist",
      issuer: "CompTIA",
      date: "2023",
      icon: "shield-keyhole-line",
      certificate: "https://www.credential.net"
    },
    {
      name: "Data Science Professional",
      issuer: "IBM",
      date: "2023",
      icon: "bar-chart-box-line",
      certificate: "https://www.ibm.com/training"
    }
  ];

  const displayedCertifications = showAllCerts ? certifications : certifications.slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto pt-24 md:pt-32 pb-16 md:pb-24"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">03.</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">My Resume</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4">
            A showcase of my professional experience, technical skills, and achievements
          </p>
        </motion.div>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-4 bg-[#112240] p-1 rounded-lg">
          {['experience', 'skills', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#64ffda] text-[#0a192f]'
                  : 'text-[#64ffda] hover:bg-[#64ffda]/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      {activeTab === 'experience' && (
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#112240] rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl text-slate-200 font-bold">{exp.role}</h3>
                  <p className="text-[#64ffda] font-mono">{exp.company}</p>
                </div>
                <div className="text-slate-400 font-mono text-sm mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">{exp.description}</p>
              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex text-slate-400">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg font-mono text-sm hover:bg-[#64ffda]/20 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <i className="ri-award-line mr-2"></i>
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {activeTab === 'skills' && (
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#112240] rounded-lg p-6 md:p-8"
            >
              <h3 className="text-xl text-slate-200 font-bold mb-6">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">{skill.name}</span>
                      <span className="text-[#64ffda]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#0a192f] rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-[#64ffda] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Certifications Section */}
      {activeTab === 'certifications' && (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#112240] rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 flex items-center justify-center mb-4 group-hover:bg-[#64ffda]/20 transition-colors">
                  <i className={`ri-${cert.icon} text-2xl text-[#64ffda]`}></i>
                </div>
                <h3 className="text-lg text-slate-200 font-bold mb-2">{cert.name}</h3>
                <p className="text-[#64ffda] font-mono text-sm mb-1">{cert.issuer}</p>
                <p className="text-slate-400 text-sm mb-4">{cert.date}</p>
                <motion.a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg font-mono text-sm hover:bg-[#64ffda]/20 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <i className="ri-award-line mr-2"></i>
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
          {certifications.length > 3 && (
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="group relative px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  {showAllCerts ? 'Show Less' : 'Show More'}
                </span>
                <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <span className="absolute inset-0 flex items-center justify-center text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity">
                  {showAllCerts ? 'Show Less' : 'Show More'}
                </span>
              </motion.button>
            </motion.div>
          )}
        </>
      )}

      {/* Download Resume Button */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://drive.google.com/file/d/1-CNF8sR9j0RBKLK8l3Kq74lwEcb52EJJ/view?usp=sharing"
          className="inline-flex items-center px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-mono text-lg font-semibold hover:bg-[#64ffda]/90 transition-colors"
        >
          <i className="ri-download-line mr-2"></i>
          Download Full Resume
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
