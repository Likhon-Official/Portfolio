import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2025",
      excerpt: "Exploring the emerging trends and technologies that will shape the future of web development, from AI integration to new frameworks.",
      content: `
        <p class="text-lg text-slate-400 mb-6">The landscape of web development is rapidly evolving, with groundbreaking technologies and methodologies emerging at an unprecedented pace. As we look ahead to 2025, several transformative trends are set to reshape how we build and interact with web applications. In this comprehensive guide, we'll explore the key innovations that will define the future of web development.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. AI-Driven Development Revolution</h2>
        <p class="text-slate-400 mb-6">Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. According to recent studies by Stack Overflow, 78% of developers are already using or planning to use AI-powered development tools in their workflow. Here's how AI is transforming web development:</p>
        
        <ul class="list-disc list-inside text-slate-400 mb-6 space-y-2">
          <li>Intelligent Code Completion: Advanced AI models can predict and suggest code completions with up to 95% accuracy, significantly speeding up development time.</li>
          <li>Automated Testing: AI-powered testing tools can identify potential bugs and security vulnerabilities before they reach production, reducing debugging time by up to 40%.</li>
          <li>Natural Language to Code: Emerging tools can convert natural language descriptions into functional code, making development more accessible to non-technical stakeholders.</li>
        </ul>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"AI is not replacing developers; it's supercharging their capabilities. We're seeing a 3x increase in developer productivity when AI tools are properly integrated into the workflow." - Sarah Chen, Chief Technology Officer at TechForward</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. WebAssembly Evolution</h2>
        <p class="text-slate-400 mb-6">WebAssembly (Wasm) is revolutionizing web performance, enabling complex applications to run at near-native speed in the browser. The technology has seen a 180% increase in adoption over the past year, with major companies like Adobe and AutoCAD leading the charge.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key WebAssembly Statistics:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• 47% reduction in load times for complex web applications</li>
            <li>• 35% improvement in runtime performance</li>
            <li>• 2.5x faster execution compared to JavaScript for compute-intensive tasks</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Edge Computing and Distributed Systems</h2>
        <p class="text-slate-400 mb-6">Edge computing is fundamentally changing how we architect web applications. By processing data closer to where it's needed, edge computing offers several compelling advantages:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Performance Benefits</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• 50-100ms reduction in latency</li>
              <li>• 60% decrease in bandwidth usage</li>
              <li>• 40% improvement in page load times</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Business Impact</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• 45% reduction in operating costs</li>
              <li>• 30% increase in user engagement</li>
              <li>• 25% improvement in conversion rates</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. The Rise of Web Components</h2>
        <p class="text-slate-400 mb-6">Web Components are becoming the standard for building reusable, framework-agnostic UI elements. This technology enables developers to create encapsulated, reusable components that work across different frameworks and platforms.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// Example of a modern Web Component
class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = \`
      <style>
        button {
          background: var(--primary-color, #64ffda);
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
      <button><slot></slot></button>
    \`;
  }
}

customElements.define('custom-button', CustomButton);
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Accessibility-First Development</h2>
        <p class="text-slate-400 mb-6">With an increasing focus on digital inclusion, accessibility is becoming a fundamental aspect of web development. Studies show that websites with strong accessibility features see up to 40% higher user engagement and improved SEO rankings.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Essential Accessibility Practices:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>1. Semantic HTML structure</li>
            <li>2. ARIA labels and roles</li>
            <li>3. Keyboard navigation support</li>
            <li>4. Color contrast compliance</li>
            <li>5. Screen reader optimization</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Preparing for the Future</h2>
        <p class="text-slate-400 mb-6">As we move towards 2025, web developers need to stay ahead of these trends to remain competitive. Here are some actionable steps you can take:</p>

        <ul class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Start experimenting with AI-powered development tools</li>
          <li>Learn WebAssembly basics and identify use cases in your projects</li>
          <li>Familiarize yourself with edge computing architectures</li>
          <li>Practice building with Web Components</li>
          <li>Incorporate accessibility testing into your development workflow</li>
        </ul>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Recommended Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">WebAssembly.org</a> - Official WebAssembly documentation</li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Edge Computing Guide</a> - Comprehensive guide to edge computing</li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Web Components Tutorial</a> - Step-by-step tutorial for Web Components</li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">A11Y Project</a> - Resources for web accessibility</li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">The future of web development is exciting and full of opportunities. By staying informed about these trends and continuously updating your skills, you'll be well-positioned to create innovative, performant, and accessible web applications that meet the demands of tomorrow's users.</p>
      `,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      category: "tech",
      date: "Mar 15, 2025",
      readTime: "12 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Senior Software Engineer passionate about web technologies and AI."
      }
    },
    {
      id: 2,
      title: "Mastering React Performance Optimization",
      excerpt: "Deep dive into advanced techniques for optimizing React applications, from code splitting to memoization strategies.",
      content: `
        <p class="text-lg text-slate-400 mb-6">Performance optimization is a critical aspect of building React applications that provide an exceptional user experience. In this comprehensive guide, we'll explore advanced techniques and best practices for optimizing React applications, backed by real-world examples and performance metrics.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Understanding React's Rendering Behavior</h2>
        <p class="text-slate-400 mb-6">Before diving into optimization techniques, it's crucial to understand how React's rendering mechanism works. React uses a virtual DOM and a diffing algorithm to minimize actual DOM manipulations, but inefficient code can still trigger unnecessary re-renders.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Common Causes of Re-renders:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Props or state changes</li>
            <li>• Parent component re-renders</li>
            <li>• Context updates</li>
            <li>• Hook dependencies changes</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. Code Splitting and Lazy Loading</h2>
        <p class="text-slate-400 mb-6">Code splitting is one of the most effective ways to improve initial load time. By splitting your code into smaller chunks and loading them on demand, you can significantly reduce the initial bundle size.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// Before: Regular Import
import HeavyComponent from './HeavyComponent';

// After: Lazy Loading
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
          </code></pre>
        </div>

        <p class="text-slate-400 mb-6">Implementation of code splitting in a real-world e-commerce application resulted in:</p>
        <ul class="list-disc list-inside text-slate-400 mb-6 space-y-2">
          <li>45% reduction in initial bundle size</li>
          <li>2.3s improvement in Time to Interactive</li>
          <li>30% increase in user engagement</li>
        </ul>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Memoization Techniques</h2>
        <p class="text-slate-400 mb-6">Memoization is a powerful optimization technique that can prevent unnecessary re-renders by caching component output based on their props.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Memoization Tools:</h3>
          <ul class="space-y-4 text-slate-400">
            <li>
              <strong class="text-slate-200">React.memo:</strong>
              <pre><code>
const MemoizedComponent = React.memo(function MyComponent(props) {
  // Component logic
});
              </code></pre>
            </li>
            <li>
              <strong class="text-slate-200">useMemo:</strong>
              <pre><code>
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
              </code></pre>
            </li>
            <li>
              <strong class="text-slate-200">useCallback:</strong>
              <pre><code>
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b],
);
              </code></pre>
            </li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"Proper use of memoization in our dashboard application reduced render times by 60% and improved user interaction responsiveness by 45%." - React Performance Team Lead at TechCorp</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. Virtual List Implementation</h2>
        <p class="text-slate-400 mb-6">When dealing with large lists, implementing virtual scrolling can dramatically improve performance by only rendering items that are currently visible in the viewport.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. State Management Optimization</h2>
        <p class="text-slate-400 mb-6">Efficient state management is crucial for performance. Here are some best practices:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Local State</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Use local state for UI-specific data</li>
              <li>• Keep state as close as possible</li>
              <li>• Avoid prop drilling</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Global State</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Implement selective updates</li>
              <li>• Use context splitting</li>
              <li>• Consider state machines</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Performance Monitoring Tools</h2>
        <p class="text-slate-400 mb-6">To effectively optimize your React application, you need to measure performance metrics. Here are essential tools:</p>

        <ul class="list-disc list-inside text-slate-400 mb-6 space-y-2">
          <li>React Developer Tools Profiler</li>
          <li>Lighthouse</li>
          <li>Web Vitals</li>
          <li>Performance Monitor API</li>
        </ul>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Metrics to Monitor:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• First Contentful Paint (FCP)</li>
            <li>• Largest Contentful Paint (LCP)</li>
            <li>• Time to Interactive (TTI)</li>
            <li>• First Input Delay (FID)</li>
            <li>• Cumulative Layout Shift (CLS)</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Conclusion and Next Steps</h2>
        <p class="text-slate-400 mb-6">Optimizing React applications is an ongoing process that requires a deep understanding of both React's internals and performance measurement tools. Here's your action plan:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Audit your current application performance</li>
          <li>Implement code splitting for large components</li>
          <li>Apply memoization where appropriate</li>
          <li>Optimize list rendering for large datasets</li>
          <li>Set up performance monitoring</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Additional Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">React Performance Documentation</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Web Vitals Measurement Guide</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">React Profiler API Documentation</a></li>
          </ul>
        </div>
      `,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "dev",
      date: "Mar 10, 2025",
      readTime: "15 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Senior Software Engineer passionate about web technologies and AI."
      }
    }
  ];

  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-slate-200 mb-4">Post not found</h2>
          <Link to="/blog" className="text-[#64ffda] hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto pt-32 pb-24 px-4 sm:px-6"
    >
      {/* Header */}
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/blog"
            className="inline-flex items-center text-[#64ffda] hover:underline mb-8"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Blog
          </Link>
          
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a192f]/60 mix-blend-multiply"></div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono px-3 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda]">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">{post.date}</span>
            <span className="text-slate-400 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-slate-200 font-semibold">{post.author.name}</h3>
              <p className="text-slate-400 text-sm">{post.author.bio}</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 pt-8 border-t border-slate-800"
      >
        <h3 className="text-slate-200 font-semibold mb-4">Share this article</h3>
        <div className="flex gap-4">
          {['twitter', 'facebook', 'linkedin', 'reddit'].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ y: -4 }}
              className="w-10 h-10 rounded-lg bg-[#64ffda]/10 flex items-center justify-center hover:bg-[#64ffda]/20 transition-colors"
            >
              <i className={`ri-${platform}-line text-[#64ffda]`}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BlogPost;
