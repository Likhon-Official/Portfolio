import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import FilterButton from '../components/FilterButton';

function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Spotify Profile",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      image: "https://raw.githubusercontent.com/bchiang7/v4/main/src/images/demo.png",
      technologies: ["React", "Express", "Spotify API", "Styled Components"],
      category: "web",
      links: {
        github: "#",
        external: "#"
      }
    },
    {
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.",
      image: "https://raw.githubusercontent.com/bchiang7/v4/main/src/images/halcyon.png",
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
      image: "https://raw.githubusercontent.com/bchiang7/v4/main/src/images/nextjs.png",
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
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
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
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
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
    activeFilter === 'all' || project.category === activeFilter
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <header className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#64ffda] font-mono mb-4"
        >
          05. Some Things I've Built
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6"
        >
          Featured Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          A curated selection of my recent projects, showcasing my passion for building innovative digital solutions.
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            filter={filter}
            isActive={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 md:gap-12"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

      {filteredProjects.length > 3 && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 md:group-hover:text-[#0a192f] transition-colors duration-300">
              {showAll ? 'Show Less' : 'Load More'}
            </span>
            <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 md:group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Work;
