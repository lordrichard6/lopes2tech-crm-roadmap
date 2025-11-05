import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your project? Let's create something amazing together!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>

            <motion.button
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.2)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {['GitHub', 'Twitter', 'LinkedIn'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {social}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        className="mt-20 text-center text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p>© 2025 Your Company. All rights reserved.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
