import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About This Project
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            This presentation website showcases the power of modern web technologies. 
            Built with React, styled with Tailwind CSS, and animated with Framer Motion, 
            it demonstrates what's possible when you combine these incredible tools.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-purple-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                React
              </motion.div>
              <p className="text-gray-400">Modern UI Library</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-pink-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                Tailwind
              </motion.div>
              <p className="text-gray-400">Utility-First CSS</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-blue-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                Framer Motion
              </motion.div>
              <p className="text-gray-400">Animation Library</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
