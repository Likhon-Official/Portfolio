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
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "tech",
      date: "Mar 15, 2025",
      readTime: "5 min read",
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
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      category: "dev",
      date: "Mar 10, 2025",
      readTime: "8 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Senior Software Engineer passionate about web technologies and AI."
      }
    },
    {
      id: 3,
      title: "UI/UX Design Trends for 2025",
      excerpt: "Discover the latest design trends that are shaping the digital landscape in 2025, from neomorphism to adaptive interfaces.",
      content: `
        <p class="text-lg text-slate-400 mb-6">As we progress through 2025, the world of UI/UX design continues to evolve at an unprecedented pace. New technologies, changing user preferences, and innovative design philosophies are reshaping how we approach digital interfaces. Let's explore the most significant trends that are defining the future of design.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Advanced Neomorphism and Glassmorphism</h2>
        <p class="text-slate-400 mb-6">The evolution of skeuomorphic design has led to more sophisticated implementations of neomorphism and glassmorphism. These styles are now being combined with practical functionality to create interfaces that are both beautiful and usable.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Design Elements:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Soft shadows and highlights for depth</li>
            <li>• Frosted glass effects with practical application</li>
            <li>• Subtle gradients and textures</li>
            <li>• High contrast for accessibility</li>
          </ul>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Implementation Tips</h4>
            <pre class="text-slate-400"><code>
.neomorphic-element {
  background: #e0e5ec;
  box-shadow: 
    8px 8px 15px #a3b1c6,
    -8px -8px 15px #ffffff;
}
            </code></pre>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Glassmorphism CSS</h4>
            <pre class="text-slate-400"><code>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
            </code></pre>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. Adaptive and Responsive Interfaces</h2>
        <p class="text-slate-400 mb-6">Modern interfaces are moving beyond traditional responsive design to create truly adaptive experiences that respond to user behavior, device capabilities, and environmental conditions.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Adaptive Features:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Dynamic color schemes based on ambient light</li>
            <li>• Context-aware layouts</li>
            <li>• Device-specific interaction patterns</li>
            <li>• Personalized user experiences</li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"The future of UI/UX design lies in creating interfaces that not only respond to different screen sizes but adapt to the user's context, preferences, and needs." - Maya Rodriguez, Lead Designer at DesignFuture</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Micro-interactions and Animation</h2>
        <p class="text-slate-400 mb-6">Subtle animations and micro-interactions are becoming more sophisticated, providing users with immediate feedback and creating more engaging experiences.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Best Practices:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>1. Keep animations under 400ms</li>
            <li>2. Use easing functions for natural movement</li>
            <li>3. Ensure animations serve a purpose</li>
            <li>4. Provide reduced motion alternatives</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. AI-Driven Personalization</h2>
        <p class="text-slate-400 mb-6">Artificial Intelligence is revolutionizing how we approach personalization in UI/UX design. Machine learning algorithms are being used to create highly personalized user experiences.</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">AI Applications</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Predictive UI elements</li>
              <li>• Dynamic content organization</li>
              <li>• Behavioral adaptation</li>
              <li>• Smart notifications</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Implementation Results</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• 35% increase in engagement</li>
              <li>• 42% better user retention</li>
              <li>• 28% higher conversion rates</li>
              <li>• 45% improved user satisfaction</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Accessibility-First Design</h2>
        <p class="text-slate-400 mb-6">Accessibility is no longer an afterthought but a fundamental aspect of modern UI/UX design. Designers are incorporating accessibility features from the very beginning of the design process.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Essential Accessibility Features:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• High contrast color schemes</li>
            <li>• Screen reader optimization</li>
            <li>• Keyboard navigation support</li>
            <li>• Focus indicators</li>
            <li>• Alternative text for images</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Implementation Guidelines</h2>
        <p class="text-slate-400 mb-6">To effectively implement these trends in your projects, consider the following guidelines:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Start with user research and testing</li>
          <li>Create consistent design systems</li>
          <li>Implement progressive enhancement</li>
          <li>Monitor performance metrics</li>
          <li>Gather and analyze user feedback</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Useful Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Material Design Guidelines</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Apple Human Interface Guidelines</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">WCAG 2.1 Documentation</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Interaction Design Foundation</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">As we continue through 2025, these trends will evolve and new ones will emerge. The key to successful UI/UX design lies in balancing innovation with usability, ensuring that new design trends enhance rather than hinder the user experience.</p>
      `,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      category: "design",
      date: "Mar 5, 2025",
      readTime: "6 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "UI/UX Designer with a passion for creating beautiful, functional interfaces"
      }
    },
    {
      id: 4,
      title: "The Rise of Edge Computing in 2025",
      excerpt: "Understanding the impact of edge computing on modern web applications and how it's revolutionizing data processing.",
      content: `
        <p class="text-lg text-slate-400 mb-6">Edge computing has emerged as a transformative force in the technology landscape, fundamentally changing how we process and deliver data in modern applications. As we move through 2025, the adoption of edge computing continues to accelerate, bringing new possibilities and challenges for developers and businesses alike.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Understanding Edge Computing</h2>
        <p class="text-slate-400 mb-6">Edge computing brings computation and data storage closer to the location where it is needed, reducing latency and bandwidth usage while improving response times. This paradigm shift is particularly crucial in an era where real-time processing is becoming increasingly important.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Benefits:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Reduced latency (50-150ms improvement)</li>
            <li>• Lower bandwidth costs (40-60% reduction)</li>
            <li>• Enhanced privacy and security</li>
            <li>• Improved reliability and redundancy</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. Edge Computing Architecture</h2>
        <p class="text-slate-400 mb-6">Modern edge computing architectures combine multiple technologies and approaches to create robust, distributed systems. Here's a look at the key components:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Edge Nodes</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Local processing units</li>
              <li>• Caching mechanisms</li>
              <li>• Security protocols</li>
              <li>• Load balancing</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Core Infrastructure</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Central data centers</li>
              <li>• Orchestration systems</li>
              <li>• Monitoring tools</li>
              <li>• Analytics platforms</li>
            </ul>
          </div>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"Edge computing isn't just about moving computation closer to the user—it's about fundamentally rethinking how we architect our applications for the next generation of user experiences." - Dr. Sarah Chen, Chief Architect at EdgeTech Solutions</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Real-World Applications</h2>
        <p class="text-slate-400 mb-6">Edge computing is transforming various industries and use cases. Here are some prominent examples:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Industry Applications:</h3>
          <ul class="space-y-4 text-slate-400">
            <li>
              <strong class="text-slate-200">IoT and Smart Devices</strong>
              <p>Real-time processing of sensor data, reducing cloud dependency by 70%</p>
            </li>
            <li>
              <strong class="text-slate-200">Gaming and AR/VR</strong>
              <p>Sub-20ms latency for immersive experiences</p>
            </li>
            <li>
              <strong class="text-slate-200">Autonomous Vehicles</strong>
              <p>Processing of critical sensor data with 99.999% reliability</p>
            </li>
            <li>
              <strong class="text-slate-200">Healthcare</strong>
              <p>Real-time patient monitoring and analysis</p>
            </li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. Implementation Strategies</h2>
        <p class="text-slate-400 mb-6">Successfully implementing edge computing requires careful planning and consideration of various factors:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// Example Edge Function Configuration
module.exports = {
  async function handler(event) {
    // Implement caching
    const cache = await caches.open('my-cache');
    const cached = await cache.match(event.request);

    if (cached) {
      return cached;
    }

    // Process at the edge
    const result = await processData(event.request);
    
    // Cache for future requests
    await cache.put(event.request, result.clone());
    
    return result;
  }
}
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Security Considerations</h2>
        <p class="text-slate-400 mb-6">Security is paramount in edge computing implementations. Here are key security measures to consider:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Security Measures:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Edge-to-edge encryption</li>
            <li>• Zero-trust security model</li>
            <li>• Regular security audits</li>
            <li>• DDoS protection</li>
            <li>• Access control and authentication</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">6. Future Trends</h2>
        <p class="text-slate-400 mb-6">The edge computing landscape continues to evolve. Here are some emerging trends to watch:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Technical Trends</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• AI at the edge</li>
              <li>• 5G integration</li>
              <li>• Edge-native applications</li>
              <li>• Serverless edge computing</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Business Impact</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• 45% cost reduction</li>
              <li>• 60% faster deployment</li>
              <li>• 3x developer productivity</li>
              <li>• 99.99% availability</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Getting Started</h2>
        <p class="text-slate-400 mb-6">To begin implementing edge computing in your applications, follow these steps:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Assess your application's requirements</li>
          <li>Choose appropriate edge computing platforms</li>
          <li>Design for distributed architecture</li>
          <li>Implement proper monitoring and analytics</li>
          <li>Test and optimize performance</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Recommended Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Edge Computing Platforms Comparison</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Implementation Best Practices</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Security Guidelines</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Performance Monitoring Tools</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">Edge computing represents a fundamental shift in how we build and deploy applications. By understanding and implementing these concepts effectively, developers can create more responsive, reliable, and efficient applications that meet the demands of modern users.</p>
      `,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      category: "tech",
      date: "Mar 3, 2025",
      readTime: "7 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Cloud Architecture Specialist"
      }
    },
    {
      id: 5,
      title: "Building Scalable Microservices",
      excerpt: "A comprehensive guide to designing and implementing microservices architecture for modern applications.",
      content: `
        <p class="text-lg text-slate-400 mb-6">Microservices architecture has become the standard for building large-scale, distributed applications. In this comprehensive guide, we'll explore the principles, patterns, and best practices for designing and implementing scalable microservices architectures that can handle modern application demands.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Microservices Fundamentals</h2>
        <p class="text-slate-400 mb-6">Understanding the core principles of microservices is essential for successful implementation. Let's explore the key concepts and benefits:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Principles:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Single Responsibility</li>
            <li>• Service Independence</li>
            <li>• Decentralized Data Management</li>
            <li>• Failure Isolation</li>
            <li>• Evolutionary Design</li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"The key to successful microservices is not just breaking down the monolith, but understanding the business domains and their boundaries." - Martin Fowler</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. Service Design Patterns</h2>
        <p class="text-slate-400 mb-6">Effective microservices implementation relies on well-established design patterns:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Communication Patterns</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Synchronous (REST, gRPC)</li>
              <li>• Asynchronous (Message Queues)</li>
              <li>• Event-Driven Architecture</li>
              <li>• API Gateway Pattern</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Data Patterns</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Database per Service</li>
              <li>• Event Sourcing</li>
              <li>• CQRS</li>
              <li>• Saga Pattern</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Implementation Strategies</h2>
        <p class="text-slate-400 mb-6">Here's an example of implementing a microservice using Node.js and Express:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// User Service Example
const express = require('express');
const app = express();

class UserService {
  async createUser(userData) {
    // Validate user data
    const validatedData = await this.validateUser(userData);
    
    // Create user in database
    const user = await this.userRepository.create(validatedData);
    
    // Publish user created event
    await this.eventBus.publish('USER_CREATED', user);
    
    return user;
  }
  
  async validateUser(userData) {
    // Implement validation logic
  }
}

app.post('/users', async (req, res) => {
  try {
    const userService = new UserService();
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. Scalability Patterns</h2>
        <p class="text-slate-400 mb-6">Implementing scalability requires careful consideration of various patterns and techniques:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Scalability Techniques:</h3>
          <ul class="space-y-4 text-slate-400">
            <li>
              <strong class="text-slate-200">Horizontal Scaling</strong>
              <p>Adding more instances of services to handle increased load</p>
            </li>
            <li>
              <strong class="text-slate-200">Caching Strategies</strong>
              <p>Implementing distributed caching to improve performance</p>
            </li>
            <li>
              <strong class="text-slate-200">Load Balancing</strong>
              <p>Distributing traffic across service instances</p>
            </li>
            <li>
              <strong class="text-slate-200">Circuit Breakers</strong>
              <p>Preventing cascade failures in distributed systems</p>
            </li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Monitoring and Observability</h2>
        <p class="text-slate-400 mb-6">Effective monitoring is crucial for maintaining healthy microservices:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Key Metrics</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Response Time</li>
              <li>• Error Rates</li>
              <li>• Resource Usage</li>
              <li>• Service Dependencies</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Tools</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Prometheus</li>
              <li>• Grafana</li>
              <li>• ELK Stack</li>
              <li>• Jaeger</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">6. Security Considerations</h2>
        <p class="text-slate-400 mb-6">Security in microservices requires a comprehensive approach:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Security Measures:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Service-to-Service Authentication</li>
            <li>• API Gateway Security</li>
            <li>• Data Encryption</li>
            <li>• Access Control</li>
            <li>• Security Monitoring</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">7. Deployment Strategies</h2>
        <p class="text-slate-400 mb-6">Successful deployment of microservices requires careful planning:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Deployment Considerations:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Container Orchestration (Kubernetes)</li>
            <li>• CI/CD Pipelines</li>
            <li>• Blue-Green Deployment</li>
            <li>• Canary Releases</li>
            <li>• Rollback Strategies</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Best Practices and Guidelines</h2>
        <p class="text-slate-400 mb-6">Follow these best practices for successful microservices implementation:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Start with a clear domain model</li>
          <li>Design for failure</li>
          <li>Implement proper monitoring</li>
          <li>Use automation extensively</li>
          <li>Maintain service independence</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Additional Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Microservices Patterns</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Domain-Driven Design</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Container Orchestration</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Monitoring Tools</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">Building scalable microservices requires careful planning, proper implementation of patterns, and continuous monitoring. By following these guidelines and best practices, you can create robust, maintainable, and scalable microservices architectures.</p>
      `,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
      category: "dev",
      date: "Mar 1, 2025",
      readTime: "10 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Backend Developer specializing in distributed systems"
      }
    },
    {
      id: 6,
      title: "Navigating Your Tech Career in 2025",
      excerpt: "Essential tips and strategies for advancing your career in the ever-evolving tech industry.",
      content: `
        <p class="text-lg text-slate-400 mb-6">The technology industry continues to evolve at a rapid pace, creating both challenges and opportunities for professionals looking to advance their careers. In this comprehensive guide, we'll explore strategies and insights to help you navigate your tech career successfully in 2025 and beyond.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Understanding the Current Tech Landscape</h2>
        <p class="text-slate-400 mb-6">The tech industry in 2025 is characterized by rapid innovation and changing demands. Here's what you need to know:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Industry Trends:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• AI and Machine Learning Integration</li>
            <li>• Remote-First Work Culture</li>
            <li>• Cross-Functional Collaboration</li>
            <li>• Emphasis on Soft Skills</li>
            <li>• Continuous Learning Requirements</li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"The most successful tech professionals in 2025 are those who combine technical expertise with strong soft skills and business acumen." - Jennifer Chen, VP of Engineering at TechGrowth</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. Essential Skills for 2025</h2>
        <p class="text-slate-400 mb-6">To stay competitive, focus on developing these key skill areas:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Technical Skills</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Cloud Architecture</li>
              <li>• AI/ML Fundamentals</li>
              <li>• DevSecOps</li>
              <li>• Data Analytics</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Soft Skills</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Remote Collaboration</li>
              <li>• Problem-Solving</li>
              <li>• Communication</li>
              <li>• Leadership</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Career Advancement Strategies</h2>
        <p class="text-slate-400 mb-6">Implement these strategies to accelerate your career growth:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Growth Tactics:</h3>
          <ul class="space-y-4 text-slate-400">
            <li>
              <strong class="text-slate-200">Build Your Personal Brand</strong>
              <p>Develop an online presence through blogging, speaking, and open-source contributions</p>
            </li>
            <li>
              <strong class="text-slate-200">Network Strategically</strong>
              <p>Engage with industry communities and attend virtual events</p>
            </li>
            <li>
              <strong class="text-slate-200">Seek Mentorship</strong>
              <p>Connect with experienced professionals who can guide your career</p>
            </li>
            <li>
              <strong class="text-slate-200">Take on Leadership Roles</strong>
              <p>Look for opportunities to lead projects and mentor others</p>
            </li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. Navigating Remote Work</h2>
        <p class="text-slate-400 mb-6">Excel in the remote-first environment of 2025:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Remote Work Best Practices:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Establish a productive workspace</li>
            <li>• Master asynchronous communication</li>
            <li>• Maintain work-life boundaries</li>
            <li>• Use collaboration tools effectively</li>
            <li>• Practice time management</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Salary Negotiation and Benefits</h2>
        <p class="text-slate-400 mb-6">Maximize your compensation package in the current market:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Negotiation Tips</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Research market rates</li>
              <li>• Document achievements</li>
              <li>• Consider total compensation</li>
              <li>• Practice negotiation skills</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Key Benefits</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Remote work flexibility</li>
              <li>• Learning allowance</li>
              <li>• Health and wellness</li>
              <li>• Stock options</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">6. Continuous Learning</h2>
        <p class="text-slate-400 mb-6">Stay current with these learning strategies:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Learning Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Online courses and certifications</li>
            <li>• Technical blogs and podcasts</li>
            <li>• Open-source projects</li>
            <li>• Industry conferences</li>
            <li>• Professional workshops</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Action Plan for Career Growth</h2>
        <p class="text-slate-400 mb-6">Follow this structured approach to advance your career:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Assess your current skills and identify gaps</li>
          <li>Create a learning roadmap</li>
          <li>Build your professional network</li>
          <li>Set clear career goals</li>
          <li>Track and document your achievements</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Recommended Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Tech Career Guide</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Salary Calculator</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Learning Platforms</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Networking Events</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">Your tech career journey in 2025 requires a combination of technical expertise, soft skills, and strategic planning. By following these guidelines and continuously adapting to industry changes, you can build a successful and fulfilling career in technology.</p>
      `,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      category: "career",
      date: "Feb 28, 2025",
      readTime: "8 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Tech Career Coach and Software Engineer"
      }
    },
    {
      id: 7,
      title: "Accessibility in Modern Web Design",
      excerpt: "Best practices for creating inclusive web experiences that work for everyone.",
      content: `
        <p class="text-lg text-slate-400 mb-6">Creating accessible web experiences is no longer optional—it's a fundamental requirement for modern web development. This comprehensive guide explores the essential principles, techniques, and tools for building inclusive websites that work for everyone, regardless of their abilities or how they access the web.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Understanding Web Accessibility</h2>
        <p class="text-slate-400 mb-6">Web accessibility (a11y) ensures that websites and applications are usable by people with various disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Benefits:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Increased user base and market reach</li>
            <li>• Better SEO performance</li>
            <li>• Improved user experience for everyone</li>
            <li>• Legal compliance</li>
            <li>• Enhanced brand reputation</li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"Accessibility is not a feature—it's a necessity. When we design for accessibility, we create better experiences for everyone." - Sarah Johnson, Accessibility Advocate</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. WCAG Guidelines Implementation</h2>
        <p class="text-slate-400 mb-6">The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible content:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Perceivable</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Alt text for images</li>
              <li>• Captions for videos</li>
              <li>• Text alternatives</li>
              <li>• Color contrast</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Operable</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Keyboard navigation</li>
              <li>• Focus indicators</li>
              <li>• Skip links</li>
              <li>• Time adjustments</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Semantic HTML Implementation</h2>
        <p class="text-slate-400 mb-6">Using semantic HTML is crucial for accessibility.Here's an example of proper semantic markup:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
<!-- Bad Example -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>

<!-- Good Example -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. ARIA Implementation</h2>
        <p class="text-slate-400 mb-6">ARIA (Accessible Rich Internet Applications) attributes enhance accessibility when HTML semantics aren't sufficient:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
<!-- Example of ARIA implementation -->
<button
  aria-expanded="false"
  aria-controls="menu-content"
  aria-label="Toggle menu"
>
  <span class="sr-only">Menu</span>
  <svg aria-hidden="true">...</svg>
</button>
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Color and Contrast</h2>
        <p class="text-slate-400 mb-6">Proper color contrast is essential for readability:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Contrast Requirements:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Normal text: 4.5:1 minimum ratio</li>
            <li>• Large text: 3:1 minimum ratio</li>
            <li>• UI components: 3:1 minimum ratio</li>
            <li>• Avoid color as sole indicator</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">6. Keyboard Navigation</h2>
        <p class="text-slate-400 mb-6">Ensure all interactive elements are keyboard accessible:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Keyboard Navigation Checklist:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Logical tab order</li>
            <li>• Visible focus indicators</li>
            <li>• Skip navigation links</li>
            <li>• Keyboard traps prevention</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">7. Testing and Validation</h2>
        <p class="text-slate-400 mb-6">Regular testing is crucial for maintaining accessibility:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Automated Testing</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• WAVE</li>
              <li>• axe DevTools</li>
              <li>• Lighthouse</li>
              <li>• NVDA</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Manual Testing</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Keyboard navigation</li>
              <li>• Screen reader testing</li>
              <li>• Color contrast checking</li>
              <li>• User testing</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Implementation Checklist</h2>
        <p class="text-slate-400 mb-6">Follow this checklist when implementing accessibility features:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Use semantic HTML elements</li>
          <li>Implement proper heading hierarchy</li>
          <li>Add descriptive alt text</li>
          <li>Ensure keyboard accessibility</li>
          <li>Test with assistive technologies</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Useful Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">WCAG Guidelines</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">A11Y Project</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">WebAIM</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Accessibility Testing Tools</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">Creating accessible web experiences is an ongoing process that requires attention to detail and regular testing. By following these guidelines and best practices, you can ensure your websites and applications are inclusive and accessible to all users.</p>
      `,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      category: "design",
      date: "Feb 25, 2025",
      readTime: "6 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Accessibility Advocate and Frontend Developer"
      }
    },
    {
      id: 8,
      title: "Machine Learning in Web Development",
      excerpt: "Practical applications of ML in modern web development and how to implement them.",
      content: `
        <p class="text-lg text-slate-400 mb-6">Machine Learning (ML) is revolutionizing web development, enabling more intelligent, personalized, and efficient web applications. This guide explores practical applications of ML in web development and provides implementation strategies for developers looking to integrate ML capabilities into their projects.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Understanding ML in Web Development</h2>
        <p class="text-slate-400 mb-6">Machine Learning can enhance web applications in numerous ways:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Applications:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Personalization and Recommendations</li>
            <li>• Natural Language Processing</li>
            <li>• Image and Video Processing</li>
            <li>• Predictive Analytics</li>
            <li>• Anomaly Detection</li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"The integration of ML in web development isn't just about adding intelligence—it's about creating more valuable and engaging user experiences." - Dr. Michael Chen, AI Research Lead</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. ML Framework Integration</h2>
        <p class="text-slate-400 mb-6">Here's how to integrate popular ML frameworks into web applications:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// TensorFlow.js Integration Example
import * as tf from '@tensorflow/tfjs';

async function predictUserBehavior(userData) {
  // Load pre-trained model
  const model = await tf.loadLayersModel('model/user_behavior.json');
  
  // Preprocess data
  const tensorData = tf.tensor2d([userData]);
  
  // Make prediction
  const prediction = await model.predict(tensorData).data();
  
  return prediction;
}
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Implementing Recommendation Systems</h2>
        <p class="text-slate-400 mb-6">Build personalized recommendation systems for web applications:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Content-Based</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Item feature analysis</li>
              <li>• User preference matching</li>
              <li>• Similarity calculations</li>
              <li>• Profile-based filtering</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Collaborative Filtering</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• User-based filtering</li>
              <li>• Item-based filtering</li>
              <li>• Matrix factorization</li>
              <li>• Hybrid approaches</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. Natural Language Processing</h2>
        <p class="text-slate-400 mb-6">Implement NLP features in web applications:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// Natural Language Processing Example
import { NLP } from '@nlp-js/core';

class ChatbotService {
  constructor() {
    this.nlp = new NLP();
    this.trainModel();
  }

  async trainModel() {
    await this.nlp.train([
      { input: 'Hello', intent: 'greeting' },
      { input: 'Goodbye', intent: 'farewell' }
    ]);
  }

  async processMessage(message) {
    const intent = await this.nlp.classify(message);
    return this.generateResponse(intent);
  }
}
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Image Processing and Computer Vision</h2>
        <p class="text-slate-400 mb-6">Implement image processing features:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Common Applications:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Image classification</li>
            <li>• Object detection</li>
            <li>• Face recognition</li>
            <li>• Image enhancement</li>
            <li>• Content moderation</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">6. Performance Optimization</h2>
        <p class="text-slate-400 mb-6">Optimize ML model performance in web applications:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Client-Side</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Model quantization</li>
              <li>• WebGL acceleration</li>
              <li>• Lazy loading</li>
              <li>• Caching strategies</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Server-Side</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• API optimization</li>
              <li>• Batch processing</li>
              <li>• Load balancing</li>
              <li>• Caching</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">7. Security Considerations</h2>
        <p class="text-slate-400 mb-6">Implement security measures for ML applications:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Security Measures:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Model encryption</li>
            <li>• Input validation</li>
            <li>• Rate limiting</li>
            <li>• Access control</li>
            <li>• Data privacy</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Implementation Steps</h2>
        <p class="text-slate-400 mb-6">Follow these steps to integrate ML into your web application:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Choose appropriate ML framework</li>
          <li>Prepare and preprocess data</li>
          <li>Train or import models</li>
          <li>Optimize performance</li>
          <li>Implement security measures</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Useful Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">TensorFlow.js Documentation</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">ML Model Optimization Guide</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Web ML Security Best Practices</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Performance Monitoring Tools</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">Integrating ML into web development requires careful planning and consideration of various factors. By following these guidelines and best practices, you can create intelligent web applications that provide enhanced user experiences while maintaining performance and security.</p>
      `,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      category: "tech",
      date: "Feb 20, 2025",
      readTime: "9 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "ML Engineer and Web Developer"
      }
    },
    {
      id: 9,
      title: "From Junior to Senior Developer",
      excerpt: "A roadmap for advancing your career from junior to senior developer position.",
      content: `
        <p class="text-lg text-slate-400 mb-6">The journey from junior to senior developer is both challenging and rewarding. This comprehensive guide provides a strategic roadmap for developers looking to advance their careers, focusing on the technical skills, soft skills, and professional development needed to reach senior level.</p>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">1. Technical Foundation</h2>
        <p class="text-slate-400 mb-6">Build a strong technical foundation with these essential skills:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Core Technical Skills:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Advanced programming concepts</li>
            <li>• System design principles</li>
            <li>• Design patterns</li>
            <li>• Testing methodologies</li>
            <li>• Performance optimization</li>
          </ul>
        </div>

        <blockquote class="border-l-4 border-[#64ffda] pl-4 my-6">
          <p class="text-slate-300 italic">"The difference between junior and senior developers isn't just years of experience—it's the ability to see the bigger picture and make decisions that benefit the entire project and team." - David Miller, Engineering Director</p>
        </blockquote>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">2. System Design and Architecture</h2>
        <p class="text-slate-400 mb-6">Develop expertise in system design and architecture:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Design Principles</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• SOLID principles</li>
              <li>• Design patterns</li>
              <li>• Microservices</li>
              <li>• Scalability</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Architecture Skills</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• System modeling</li>
              <li>• Performance analysis</li>
              <li>• Security design</li>
              <li>• Integration patterns</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">3. Code Quality and Best Practices</h2>
        <p class="text-slate-400 mb-6">Maintain high standards in code quality:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <pre class="text-slate-400"><code>
// Example of Clean Code Practices
class UserService {
  private readonly userRepository: UserRepository;
  private readonly logger: Logger;

  constructor(userRepository: UserRepository, logger: Logger) {
    this.userRepository = userRepository;
    this.logger = logger;
  }

  async createUser(userData: UserDTO): Promise<User> {
    try {
      this.validateUserData(userData);
      const user = await this.userRepository.create(userData);
      this.logger.info('User created successfully', { userId: user.id });
      return user;
    } catch (error) {
      this.logger.error('Failed to create user', { error });
      throw new UserCreationError('Failed to create user');
    }
  }

  private validateUserData(userData: UserDTO): void {
    // Validation logic
  }
}
          </code></pre>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">4. Leadership and Mentoring</h2>
        <p class="text-slate-400 mb-6">Develop leadership skills and mentor others:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Leadership Skills:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Team guidance</li>
            <li>• Code review leadership</li>
            <li>• Technical mentoring</li>
            <li>• Project planning</li>
            <li>• Decision making</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">5. Problem-Solving and Decision Making</h2>
        <p class="text-slate-400 mb-6">Enhance your problem-solving capabilities:</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Technical Problems</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• System analysis</li>
              <li>• Debugging strategies</li>
              <li>• Performance optimization</li>
              <li>• Architecture decisions</li>
            </ul>
          </div>
          <div class="bg-[#112240] p-6 rounded-lg">
            <h4 class="text-[#64ffda] font-mono mb-2">Business Problems</h4>
            <ul class="space-y-2 text-slate-400">
              <li>• Requirements analysis</li>
              <li>• Trade-off evaluation</li>
              <li>• Risk assessment</li>
              <li>• Resource planning</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">6. Communication and Collaboration</h2>
        <p class="text-slate-400 mb-6">Develop strong communication skills:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Key Areas:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Technical documentation</li>
            <li>• Team collaboration</li>
            <li>• Stakeholder management</li>
            <li>• Knowledge sharing</li>
            <li>• Conflict resolution</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">7. Professional Development</h2>
        <p class="text-slate-400 mb-6">Continue growing professionally:</p>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Growth Areas:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• Industry trends awareness</li>
            <li>• Technical certifications</li>
            <li>• Conference participation</li>
            <li>• Open source contributions</li>
            <li>• Professional networking</li>
          </ul>
        </div>

        <h2 class="text-2xl text-slate-200 font-bold mb-4">Career Development Plan</h2>
        <p class="text-slate-400 mb-6">Follow this structured approach to advance your career:</p>

        <ol class="list-decimal list-inside text-slate-400 mb-6 space-y-2">
          <li>Master fundamental concepts</li>
          <li>Build system design skills</li>
          <li>Develop leadership abilities</li>
          <li>Improve communication skills</li>
          <li>Contribute to the community</li>
        </ol>

        <div class="bg-[#112240] p-6 rounded-lg mb-6">
          <h3 class="text-[#64ffda] font-mono mb-4">Recommended Resources:</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• <a href="#" class="text-[#64ffda] hover:underline">System Design Primer</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Clean Code Guide</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Leadership in Tech</a></li>
            <li>• <a href="#" class="text-[#64ffda] hover:underline">Technical Communication</a></li>
          </ul>
        </div>

        <p class="text-slate-400 mb-6">The journey from junior to senior developer requires dedication, continuous learning, and a holistic approach to professional development. Focus on building both technical and soft skills while maintaining a growth mindset throughout your career progression.</p>
      `,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      category: "career",
      date: "Feb 15, 2025",
      readTime: "7 min read",
      author: {
        name: "LikHon Das",
        avatar: "https://i.postimg.cc/KvtZqPj3/20250312-113125.jpg",
        bio: "Senior Software Engineer and Mentor"
      }
    }
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

              <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-[#64ff
da] transition-colors">
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
