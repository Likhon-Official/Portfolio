import { motion } from 'framer-motion';

function About() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "AWS", level: 65 }
  ];

  const interests = [
    { icon: "code-box-line", title: "Programming", description: "Building elegant solutions to complex problems" },
    { icon: "terminal-box-line", title: "Open Source", description: "Contributing to the developer community" },
    { icon: "gamepad-line", title: "Gaming", description: "Strategy and RPG games enthusiast" },
    { icon: "book-line", title: "Reading", description: "Tech blogs and sci-fi novels" }
  ];

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
          <h1 className="text-[#64ffda] font-mono mb-4">01. About Me</h1>
          <div className="h-0.5 w-full bg-slate-700 relative">
            <div className="absolute inset-y-0 left-0 bg-[#64ffda] w-24"></div>
          </div>
        </motion.div>
      </header>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Bio Section */}
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="prose prose-invert">
            <p className="text-lg text-slate-400 mb-6">
              Hello! I'm LikHon, a passionate software developer based in San Francisco, CA. 
              I enjoy creating things that live on the internet, whether that be websites, 
              applications, or anything in between.
            </p>
            <p className="text-lg text-slate-400 mb-6">
              My journey in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p className="text-lg text-slate-400">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-square bg-[#64ffda]/10 p-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800&q=80"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl transition-all duration-500 
                filter grayscale hover:grayscale-0 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#64ffda]/10 mix-blend-multiply rounded-xl"></div>
          </div>
          <div className="absolute inset-0 border-2 border-[#64ffda] rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20"
      >
        <h2 className="text-2xl text-slate-200 mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#112240] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200">{skill.name}</span>
                <span className="text-[#64ffda] text-sm">{skill.level}%</span>
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

      {/* Interests Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-2xl text-slate-200 mb-8">Interests & Hobbies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#112240] p-6 rounded-lg text-center group hover:bg-[#64ffda]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#64ffda]/10 flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-colors">
                <i className={`ri-${interest.icon} text-2xl text-[#64ffda]`}></i>
              </div>
              <h3 className="text-slate-200 mb-2">{interest.title}</h3>
              <p className="text-sm text-slate-400">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;