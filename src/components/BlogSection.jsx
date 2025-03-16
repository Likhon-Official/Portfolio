import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function BlogSection() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2025",
      excerpt: "Exploring the emerging trends and technologies that will shape the future of web development...",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      category: "Technology",
      date: "Mar 15, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering React Performance Optimization",
      excerpt: "Deep dive into advanced techniques for optimizing React applications...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Development",
      date: "Mar 10, 2025",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "UI/UX Design Trends for 2025",
      excerpt: "Discover the latest design trends that are shaping the digital landscape...",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Design",
      date: "Mar 5, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Insights and articles about web development, design, and technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#112240] rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0a192f]/60 mix-blend-multiply"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono px-2 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda]">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-sm">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-[#64ffda] transition-colors">
                  <Link to={`/blog/${post.id}`} className="hover:text-[#64ffda]">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#64ffda] font-mono text-sm hover:underline"
                  >
                    Read More
                  </Link>
                  <span className="text-sm text-slate-400">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg group relative overflow-hidden"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              View All Posts
            </span>
            <i className="ri-arrow-right-line ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1"></i>
            <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity">
              View All Posts
              <i className="ri-arrow-right-line ml-2"></i>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
