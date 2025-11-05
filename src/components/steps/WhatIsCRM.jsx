import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase,
  faHandshake,
  faChartLine, 
  faCogs,
  faChartBar,
  faMobileAlt,
  faBullseye,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const WhatIsCRM = () => {
  const benefits = [
    {
      icon: faDatabase,
      title: 'Centralized Data',
      description: 'All customer information in one secure place. Everyone has access to the same up-to-date information, eliminating data silos.'
    },
    {
      icon: faHandshake,
      title: 'Better Relationships',
      description: 'Build stronger, more personalized connections. Track preferences, history, and important dates for proactive service.'
    },
    {
      icon: faChartLine,
      title: 'Increased Sales',
      description: 'More deals closed, faster sales cycles. See your pipeline, prioritize leads, and never miss a follow-up.'
    },
    {
      icon: faCogs,
      title: 'Automated Workflows',
      description: 'Save time with intelligent automation. Automate follow-ups, emails, and document generation to focus on revenue activities.'
    },
    {
      icon: faChartBar,
      title: 'Smart Analytics',
      description: 'Data-driven decisions with real-time insights. Dashboards show key metrics like conversion rates and customer trends.'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile Access',
      description: 'Work from anywhere, anytime. Access customer information and manage tasks from your phone or tablet.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-emerald-50 mb-6 tracking-tight">
          What is a <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">CRM</span>?
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto leading-relaxed">
          Customer Relationship Management (CRM) is a technology system that helps businesses manage 
          interactions with current and potential customers throughout the entire customer lifecycle.
        </p>
      </motion.div>



      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 text-center mb-8">
          Why Your Company Needs a CRM
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(16, 185, 129, 0.15)'
              }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 shadow-lg"
            >
              <motion.div
                className="text-emerald-400 mb-4 text-4xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={benefit.icon} />
              </motion.div>
              <h4 className="text-xl font-semibold text-emerald-50 mb-2">
                {benefit.title}
              </h4>
              <p className="text-emerald-100/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-lg rounded-3xl p-10 border border-emerald-600/30 shadow-xl"
      >
        <div className="text-center mb-8">
          <div className="text-emerald-400 text-5xl mb-4">
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <h3 className="text-3xl font-bold text-emerald-50 mb-4">The Bottom Line</h3>
          <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto">
            A well-implemented CRM system can increase sales by <strong className="text-emerald-300">29%</strong>, 
            improve sales productivity by <strong className="text-emerald-300">34%</strong>, 
            and boost customer retention by <strong className="text-emerald-300">27%</strong>.
          </p>
        </div>

        {/* Comparison Charts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {/* Sales Growth Chart */}
          <div className="bg-emerald-950/50 rounded-xl p-6 border border-emerald-700/30">
            <h4 className="text-emerald-100 font-semibold mb-4 text-center">Sales Growth</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[
                { name: 'Without CRM', value: 100, color: '#ef4444' },
                { name: 'With CRM', value: 129, color: '#10b981' }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#059669" opacity={0.1} />
                <XAxis dataKey="name" tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                <YAxis tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#064e3b', 
                    border: '1px solid #059669',
                    borderRadius: '8px',
                    color: '#d1fae5'
                  }} 
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {[
                    { name: 'Without CRM', value: 100, color: '#ef4444' },
                    { name: 'With CRM', value: 129, color: '#10b981' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-emerald-300 text-sm mt-2 font-semibold">+29% Increase</p>
          </div>

          {/* Productivity Chart */}
          <div className="bg-emerald-950/50 rounded-xl p-6 border border-emerald-700/30">
            <h4 className="text-emerald-100 font-semibold mb-4 text-center">Sales Productivity</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[
                { name: 'Without CRM', value: 100, color: '#ef4444' },
                { name: 'With CRM', value: 134, color: '#10b981' }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#059669" opacity={0.1} />
                <XAxis dataKey="name" tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                <YAxis tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#064e3b', 
                    border: '1px solid #059669',
                    borderRadius: '8px',
                    color: '#d1fae5'
                  }} 
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {[
                    { name: 'Without CRM', value: 100, color: '#ef4444' },
                    { name: 'With CRM', value: 134, color: '#10b981' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-emerald-300 text-sm mt-2 font-semibold">+34% Increase</p>
          </div>

          {/* Customer Retention Chart */}
          <div className="bg-emerald-950/50 rounded-xl p-6 border border-emerald-700/30">
            <h4 className="text-emerald-100 font-semibold mb-4 text-center">Customer Retention</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[
                { name: 'Without CRM', value: 100, color: '#ef4444' },
                { name: 'With CRM', value: 127, color: '#10b981' }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#059669" opacity={0.1} />
                <XAxis dataKey="name" tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                <YAxis tick={{ fill: '#6ee7b7', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#064e3b', 
                    border: '1px solid #059669',
                    borderRadius: '8px',
                    color: '#d1fae5'
                  }} 
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {[
                    { name: 'Without CRM', value: 100, color: '#ef4444' },
                    { name: 'With CRM', value: 127, color: '#10b981' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-emerald-300 text-sm mt-2 font-semibold">+27% Increase</p>
          </div>
        </motion.div>

        {/* Data Source with Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <a 
            href="https://nucleusresearch.com/research/single/crm-pays-back-8-71-for-every-dollar-spent/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors text-sm group"
          >
            <span>Source: Nucleus Research - "CRM pays back $8.71 for every dollar spent" (2024)</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-emerald-300/60 text-xs mt-2">
            Based on analysis of 2,500+ CRM implementations across enterprise organizations
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatIsCRM;
