import { motion } from 'framer-motion';
import { useState } from 'react';

function Experience() {
  const [activeSection, setActiveSection] = useState('experience');
  
  const experiences = [
    {
      company: "Upstatement",
      role: "Lead Engineer",
      date: "2021 - Present",
      url: "https://upstatement.com",
      points: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
      ]
    },
    {
      company: "Apple",
      role: "Software Engineer II",
      date: "2019 - 2021",
      url: "https://www.apple.com",
      points: [
        "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
        "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
        "Architected and implemented the front-end of Apple Music's embeddable web player widget",
        "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps"
      ]
    }
  ];

  const education = [
    {
      school: "Harvard University",
      degree: "Master of Computer Science",
      year: "2019 - 2021",
      description: "Specialized in Artificial Intelligence and Machine Learning",
      courses: [
        "Advanced Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning"
      ],
      achievements: [
        "Published 2 research papers in top-tier conferences",
        "Led the university's AI research group",
        "GPA: 3.9/4.0",
        "Teaching Assistant for Data Structures and Algorithms"
      ]
    },
    {
      school: "MIT",
      degree: "Bachelor of Science in Computer Science",
      year: "2015 - 2019",
      description: "Focus on Software Engineering and Data Structures",
      courses: [
        "Data Structures",
        "Operating Systems",
        "Computer Networks",
        "Database Systems"
      ],
      achievements: [
        "Dean's List all semesters",
        "President of Computer Science Club",
        "Completed 3 internships",
        "Senior thesis on distributed systems"
      ]
    }
  ];

  const skills = {
    languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "SQL"
    ],
    frameworks: [
      "React",
      "Node.js",
      "Express",
      "Next.js",
      "Vue.js",
      "Django"
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "Firebase",
      "MongoDB",
      "PostgreSQL"
    ],
    design: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator"
    ]
  };

  const aboutContent = {
    introduction: `Hello! My name is LikHon and I enjoy creating things that live on the internet. 
      My interest in web development started back in 2012 when I decided to try editing custom Tumblr 
      themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`,
    journey: `Fast-forward to today, and I've had the privilege of working at an advertising agency, 
      a start-up, a huge corporation, and a student-led design studio. My main focus these days is 
      building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.`,
    interests: `I also recently launched a course that covers everything you need to build a web app 
      with the Spotify API using Node & React. When I'm not at the computer, I'm usually rock climbing, 
      hanging out with my dog, or exploring new coffee shops in the city.`
  };

  const renderExperience = () => (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-[#112240] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h3 className="text-xl text-slate-200 mb-1">
                {exp.role}{' '}
                <span className="text-[#64ffda]">
                  @ <a href={exp.url} className="hover:underline">{exp.company}</a>
                </span>
              </h3>
              <p className="font-mono text-sm text-slate-400">{exp.date}</p>
            </div>
          </div>
          <ul className="space-y-4">
            {exp.points.map((point, i) => (
              <motion.li 
                key={i} 
                className="flex text-slate-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="text-[#64ffda] mr-2">▹</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-[#112240] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h3 className="text-xl text-slate-200 mb-1">{edu.school}</h3>
              <p className="text-[#64ffda] font-mono">{edu.degree}</p>
              <p className="text-slate-400 font-mono text-sm mt-1">{edu.year}</p>
            </div>
          </div>
          <p className="text-slate-400 mb-4">{edu.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-slate-200 font-mono mb-3">Key Courses</h4>
              <ul className="space-y-2">
                {edu.courses.map((course, i) => (
                  <motion.li 
                    key={i} 
                    className="flex text-slate-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-slate-200 font-mono mb-3">Achievements</h4>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="flex text-slate-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {Object.entries(skills).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#112240] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-[#64ffda] font-mono mb-4 capitalize">{category}</h3>
          <ul className="space-y-2">
            {items.map((skill, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center text-slate-400"
              >
                <span className="text-[#64ffda] mr-2">▹</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderAbout = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-3 gap-8"
    >
      <div className="md:col-span-2 space-y-6">
        {Object.values(aboutContent).map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-slate-400 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="relative group"
      >
        <div className="relative z-10 bg-[#64ffda] rounded-lg overflow-hidden">
          <img 
            src="/profile.jpg" 
            alt="Profile"
            className="w-full h-auto mix-blend-multiply filter grayscale contrast-100 hover:filter-none transition-all duration-300"
          />
          <div className="absolute inset-0 bg-[#64ffda]/20 hover:bg-transparent transition-colors duration-300"></div>
        </div>
        <div className="absolute -inset-2 border-2 border-[#64ffda] rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
      </motion.div>
    </motion.div>
  );

  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About Me' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto pt-32 pb-24"
    >
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">02. Professional Journey</h1>
          <div className="h-0.5 w-full bg-slate-700 relative">
            <div className="absolute inset-y-0 left-0 bg-[#64ffda] w-24"></div>
          </div>
        </motion.div>
      </header>

      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-[#64ffda] text-[#0a192f]'
                  : 'text-[#64ffda] border border-[#64ffda] hover:bg-[#64ffda]/10'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {activeSection === 'experience' && renderExperience()}
        {activeSection === 'education' && renderEducation()}
        {activeSection === 'skills' && renderSkills()}
        {activeSection === 'about' && renderAbout()}
      </div>
    </motion.div>
  );
}

export default Experience;