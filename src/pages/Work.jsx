import { motion } from 'framer-motion';
import { useState } from 'react';

function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Web Music Player",
      description: "A web app for View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      image: "https://cdn.dribbble.com/users/5468574/screenshots/14240780/media/d91965cf71ab1bd58b223357c3bd56d8.png?compress=1&resize=1200x900",
      technologies: ["React", "Express", "Spotify API", "Styled Components"],
      category: "web",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "VS Code Theme,
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.",
      image: "https://lightrun.com/wp-content/uploads/2021/11/Lightrun-Hero-banner-Top-5-VS-Code-Themes-01-scaled.jpg",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
      category: "tools",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "Built with Next.js",
      description: "A collection of open source projects built with Next.js, curated by the community. Submit your own project to be featured!",
      image: "https://sanet.pics/storage-8/0822/fjDnpM87ZsJ3o61sv4JB8yHM4KPQMSar.jpg",
      technologies: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
      category: "web",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "AI Image Generator",
      description: "An advanced AI-powered image generation platform using state-of-the-art machine learning models to create unique artwork.",
      image: "https://s.tmimgcdn.com/scr/800x500/351400/textopic-ai-text-to-image-generator-html-website-template_351409-original.png",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      category: "ai",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with advanced analytics and portfolio management features.",
      image: "https://cdn.dribbble.com/users/5029699/screenshots/15747468/media/e0adcb81f7bcd298136f425a6580de31.png",
      technologies: ["Vue.js", "Node.js", "WebSocket", "D3.js"],
      category: "web",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform for tracking engagement, growth, and audience insights across multiple platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      technologies: ["React", "GraphQL", "AWS", "MongoDB"],
      category: "analytics",
      links: {
        github: "#",
        external: "#"
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'tools', label: 'Tools' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">05.</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A curated collection of my projects that showcase my skills and experience
          </p>
        </motion.div>
      </header>

      {/* Project Filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-[#64ffda] text-[#0a192f]'
                : 'text-[#64ffda] border border-[#64ffda] hover:bg-[#64ffda]/10'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-[#112240] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 
                  filter grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a192f]/60 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl text-slate-200 font-bold mb-2 group-hover:text-[#64ffda] transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.links.github}
                  whileHover={{ y: -4 }}
                  className="text-slate-400 hover:text-[#64ffda] transition-colors"
                >
                  <i className="ri-github-line text-xl"></i>
                </motion.a>
                <motion.a
                  href={project.links.external}
                  whileHover={{ y: -4 }}
                  className="text-slate-400 hover:text-[#64ffda] transition-colors"
                >
                  <i className="ri-external-link-line text-xl"></i>
                </motion.a>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Show More/Less Button */}
      {filteredProjects.length > 3 && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg relative group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : 'Load More Projects'}
            </span>
            <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <span className="absolute inset-0 flex items-center justify-center text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity">
              {showAll ? 'Show Less' : 'Load More Projects'}
            </span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Work;
