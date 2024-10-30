import { motion } from 'framer-motion';
import { useState } from 'react';

function Work() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Spotify Profile",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      image: "https://raw.githubusercontent.com/bchiang7/v4/main/src/images/demo.png",
      technologies: ["React", "Express", "Spotify API", "Styled Components"],
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
      links: {
        github: "#",
        external: "#"
      }
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

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
          <h1 className="text-[#64ffda] font-mono mb-4">04. Some Things I've Built</h1>
          <div className="h-0.5 w-full bg-slate-700 relative">
            <div className="absolute inset-y-0 left-0 bg-[#64ffda] w-24"></div>
          </div>
        </motion.div>
      </header>

      <div className="space-y-24">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative md:grid md:grid-cols-12 items-center gap-4"
          >
            <div className={`relative col-span-7 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-[#64ffda]/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                  />
                </div>
              </motion.div>
            </div>

            <div className={`col-span-5 ${index % 2 === 0 ? 'md:order-1 md:text-right' : ''}`}>
              <p className="text-[#64ffda] font-mono mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-slate-200 mb-4">{project.title}</h3>
              <div className="bg-[#112240] p-6 rounded-lg mb-4">
                <p className="text-slate-400">{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                {project.technologies.map((tech, i) => (
                  <li key={i} className="text-slate-400 font-mono text-sm">{tech}</li>
                ))}
              </ul>
              <div className={`flex gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                <motion.a 
                  href={project.links.github} 
                  className="text-slate-400 hover:text-[#64ffda]"
                  whileHover={{ y: -4 }}
                >
                  <i className="ri-github-line text-xl"></i>
                </motion.a>
                <motion.a 
                  href={project.links.external} 
                  className="text-slate-400 hover:text-[#64ffda]"
                  whileHover={{ y: -4 }}
                >
                  <i className="ri-external-link-line text-xl"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg hover:bg-[#64ffda]/10 transition-colors"
          whileHover={{ y: -4 }}
          whileTap={{ y: 0 }}
        >
          {showAll ? 'Show Less' : 'See More'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Work;
