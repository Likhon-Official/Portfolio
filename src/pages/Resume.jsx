import { motion } from 'framer-motion';
import { useState } from 'react';

function Resume() {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Google",
      period: "2021 - Present",
      location: "Mountain View, CA",
      description: "Led development of core search infrastructure components",
      achievements: [
        "Improved search latency by 35% through optimization of backend algorithms",
        "Led a team of 5 engineers in redesigning the search indexing pipeline",
        "Implemented real-time search suggestions using ML models",
        "Reduced infrastructure costs by 25% through efficient resource utilization"
      ],
      tech: ["Go", "Kubernetes", "TensorFlow", "BigQuery"]
    },
    {
      role: "Full Stack Developer",
      company: "Microsoft",
      period: "2019 - 2021",
      location: "Seattle, WA",
      description: "Developed features for Microsoft Teams",
      achievements: [
        "Built real-time collaboration features used by 1M+ users",
        "Reduced application bundle size by 40% through code splitting",
        "Implemented end-to-end encryption for video calls",
        "Led migration from Angular to React, improving performance by 50%"
      ],
      tech: ["React", "TypeScript", "Node.js", "WebRTC"]
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
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "amazon-line"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google",
      date: "2022",
      icon: "google-line"
    },
    {
      name: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2022",
      icon: "database-2-line"
    }
  ];

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
          <h1 className="text-[#64ffda] font-mono mb-4">03. Professional Journey</h1>
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
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex text-slate-400">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
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
              <p className="text-slate-400 text-sm">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Download Resume Button */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="#"
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