import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Development" },
    { value: "cloud", label: "Cloud Solutions" },
    { value: "consulting", label: "Technical Consulting" }
  ];

  const contactInfo = [
    { icon: "mail-line", text: "LikhonOfficial@Hotmail.com" },
    { icon: "phone-line", text: "+1 (555) 123-4567" },
    { icon: "map-pin-line", text: "San Francisco, CA" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12 lg:mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-200 mb-4 lg:mb-6"
        >
          Let's Work Together
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Have a project in mind? Let's discuss how we can bring your ideas to life.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#112240] p-6 sm:p-8 rounded-lg order-1"
        >
          <h3 className="text-xl sm:text-2xl text-slate-200 mb-6">Send Message</h3>
          <form className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#0a192f] text-slate-200 px-4 py-3 rounded-lg border-2 border-slate-700 focus:border-[#64ffda] outline-none transition-colors text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#0a192f] text-slate-200 px-4 py-3 rounded-lg border-2 border-slate-700 focus:border-[#64ffda] outline-none transition-colors text-base"
                />
              </div>
            </div>
            <div>
              <select 
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                className="w-full bg-[#0a192f] text-slate-200 px-4 py-3 rounded-lg border-2 border-slate-700 focus:border-[#64ffda] outline-none transition-colors text-base"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-[#0a192f] text-slate-200 px-4 py-3 rounded-lg border-2 border-slate-700 focus:border-[#64ffda] outline-none resize-none transition-colors text-base"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ y: -4 }}
              className="w-full bg-[#64ffda] text-[#0a192f] py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors text-base"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6 sm:space-y-8 order-2"
        >
          {/* Contact Details */}
          <div className="bg-[#112240] p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl text-slate-200 mb-6">Contact Information</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-colors">
                    <i className={`ri-${info.icon} text-xl text-[#64ffda]`}></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-base break-all">
                      {info.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-[#112240] p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl text-slate-200 mb-6">Business Hours</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-base">
                  Monday - Friday
                </span>
                <span className="text-[#64ffda] text-base">9 AM - 6 PM</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-base">
                  Saturday
                </span>
                <span className="text-[#64ffda] text-base">10 AM - 4 PM</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-base">
                  Sunday
                </span>
                <span className="text-[#64ffda] text-base">Closed</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#112240] p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl text-slate-200 mb-6">Follow Me</h3>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
              {['github', 'linkedin', 'twitter', 'instagram'].map((platform, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-lg bg-[#64ffda]/10 flex items-center justify-center hover:bg-[#64ffda]/20 transition-colors mx-auto"
                >
                  <i className={`ri-${platform}-line text-xl text-[#64ffda]`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
