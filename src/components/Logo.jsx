import { motion } from 'framer-motion';

function Logo() {
  return (
    <motion.div 
      className="w-12 h-12 border border-[#64ffda] text-[#64ffda] flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl font-bold">A</span>
    </motion.div>
  );
}

export default Logo;