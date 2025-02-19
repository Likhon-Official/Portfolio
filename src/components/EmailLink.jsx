import { motion } from 'framer-motion';

function EmailLink() {
  return (
    <motion.div 
      className="fixed right-6 lg:right-12 bottom-0 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 after:mt-6">
        <a
          href="mailto:LikhonOffiicial@gmail.com"
          className="font-mono text-sm text-slate-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-200 vertical-rl"
          style={{ writingMode: 'vertical-rl' }}
        >
          LikhonOfficial@Hotmail.com
        </a>
      </div>
    </motion.div>
  );
}

export default EmailLink;
