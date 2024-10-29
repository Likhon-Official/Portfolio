import { motion } from 'framer-motion';

const SocialLinks = () => {
  const links = [
    { icon: "github", href: "#", label: "GitHub" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "twitter", href: "#", label: "Twitter" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
    { icon: "codepen", href: "#", label: "CodePen" },
  ];

  return (
    <motion.div 
      className="fixed left-6 lg:left-12 bottom-0 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mt-6">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              aria-label={link.label}
              className="text-slate-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-200 block"
            >
              <i className={`ri-${link.icon}-line text-xl`}></i>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;