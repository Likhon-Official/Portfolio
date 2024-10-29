import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0a192f] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className="relative"
      >
        <div className="w-20 h-20 border-4 border-[#64ffda]/20 rounded-full">
          <div className="w-20 h-20 border-4 border-t-[#64ffda] rounded-full animate-spin"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[#64ffda] font-mono text-sm text-center"
        >
          Loading..
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;