import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tech', name: 'Technology' },
    { id: 'dev', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'career', name: 'Career' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2025",
      excerpt: "Exploring the emerging trends and technologies that will shape the future of web development, from AI integration to new frameworks.",
      content: `
        <p>The landscape of web development is constantly evolving, and 2025 promises to bring even more exciting changes. Let's explore the key trends that will shape the future of web development.</p>

        <h2>1. AI-Driven Development</h2>
        <p>Artificial Intelligence is revolutionizing how we build websites and applications. From automated testing to intelligent code completion, AI tools are becoming an integral part of the development workflow.</p>

        <h2>2. WebAssembly Evolution</h2>
        <p>WebAssembly continues to push the boundaries of web performance, enabling complex applications to run at near-native speed in the browser.</p>

        <h2>3. Edge Computing</h2>
        <p>The rise of edge computing is changing how we think about deployment and data processing, bringing computation closer to where it's needed.</p>
      `,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      category: "tech",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg"
      }
    },
    {
      id: 2,
      title: "Mastering React Performance Optimization",
      excerpt: "Deep dive into advanced techniques for optimizing React applications, from code splitting to memoization strategies.",
      content: `
        <p>Performance optimization is crucial for creating smooth, responsive React applications. This guide covers essential techniques for improving your React app's performance.</p>

        <h2>1. Code Splitting</h2>
        <p>Learn how to effectively split your code into smaller chunks that can be loaded on demand, reducing the initial bundle size.</p>

        <h2>2. Memoization Techniques</h2>
        <p>Understand when and how to use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.</p>

        <h2>3. Virtual DOM Optimization</h2>
        <p>Explore strategies for minimizing DOM updates and optimizing the reconciliation process.</p>
      `,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "dev",
      date: "Mar 10, 2025",
      readTime: "8 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg"
      }
    },
    // ... (keep other blog posts)
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">06. Blog</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">
            Thoughts & Insights
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Exploring the latest in technology, development, and design through in-depth articles and tutorials.
          </p>
        </motion.div>
      </header>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-96"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#112240] text-slate-200 px-4 py-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#64ffda] text-[#0a192f]'
                    : 'text-[#64ffda] border border-[#64ffda] hover:bg-[#64ffda]/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#112240] rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <Link to={`/blog/${post.id}`} className="block">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0a192f]/60 mix-blend-multiply"></div>
              </div>
            </Link>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda]">
                  {categories.find(cat => cat.id === post.category)?.name}
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

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-slate-400">{post.author.name}</span>
                </div>
                <span className="text-sm text-slate-400">{post.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-[#112240] rounded-lg p-6 md:p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-slate-200 mb-4">
          Subscribe to My Newsletter
        </h3>
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
          Get the latest articles, tutorials, and updates delivered straight to your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-[#0a192f] text-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#64ffda] text-[#0a192f] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Blog;
