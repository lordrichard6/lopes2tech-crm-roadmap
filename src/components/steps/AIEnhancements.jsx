import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot,
  faMicrophone,
  faComments,
  faBrain,
  faChartLine,
  faFileAlt,
  faRoute,
  faUserCheck,
  faLightbulb,
  faEnvelope,
  faSmile
} from '@fortawesome/free-solid-svg-icons';

const AIEnhancements = () => {
  const aiFeatures = [
    {
      title: 'AI Voice Agents',
      icon: faMicrophone,
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent voice assistants that handle customer calls 24/7',
      capabilities: [
        'Natural conversation with customers',
        'Automatic call routing',
        'Real-time sentiment analysis',
        'Multi-language support (DE, FR, IT, EN)',
        'Call transcription & summarization'
      ],
      roi: '+60% call handling capacity',
      cost: 'CHF 5K setup + CHF 600/month'
    },
    {
      title: 'Lead Qualifier AI',
      icon: faUserCheck,
      color: 'from-emerald-500 to-teal-500',
      description: 'Automatically score and qualify leads based on behavior and data',
      capabilities: [
        'Predictive lead scoring',
        'Automatic priority assignment',
        'Engagement pattern analysis',
        'Conversion probability prediction',
        'Smart lead distribution'
      ],
      roi: '+45% sales team efficiency',
      cost: 'CHF 3K setup + CHF 400/month'
    },
    {
      title: 'AI Chatbot Assistant',
      icon: faComments,
      color: 'from-blue-500 to-cyan-500',
      description: '24/7 intelligent chat support for website and portal',
      capabilities: [
        'Instant customer responses',
        'Policy information lookup',
        'Appointment scheduling',
        'Document upload assistance',
        'Seamless human handoff'
      ],
      roi: '+70% first-response time',
      cost: 'CHF 2.5K setup + CHF 300/month'
    },
    {
      title: 'Predictive Analytics',
      icon: faChartLine,
      color: 'from-orange-500 to-red-500',
      description: 'AI-powered insights and forecasting for business decisions',
      capabilities: [
        'Churn prediction',
        'Revenue forecasting',
        'Customer lifetime value analysis',
        'Cross-sell/upsell opportunities',
        'Market trend identification'
      ],
      roi: '+35% retention rate',
      cost: 'CHF 4K setup + CHF 500/month'
    },
    {
      title: 'Sentiment Analysis',
      icon: faSmile,
      color: 'from-pink-500 to-rose-500',
      description: 'Real-time emotion detection in customer communications',
      capabilities: [
        'Email sentiment scoring',
        'Call tone analysis',
        'Social media monitoring',
        'Customer satisfaction prediction',
        'Alert for at-risk clients'
      ],
      roi: '+50% issue resolution speed',
      cost: 'CHF 2K setup + CHF 250/month'
    },
    {
      title: 'Document Intelligence',
      icon: faFileAlt,
      color: 'from-indigo-500 to-purple-500',
      description: 'AI-powered document processing and information extraction',
      capabilities: [
        'Automatic document classification',
        'Data extraction from forms',
        'Contract analysis',
        'Compliance checking',
        'Intelligent search'
      ],
      roi: '+80% document processing speed',
      cost: 'CHF 3.5K setup + CHF 450/month'
    },
    {
      title: 'Smart Routing Engine',
      icon: faRoute,
      color: 'from-teal-500 to-green-500',
      description: 'Intelligent assignment of leads and cases to best-fit agents',
      capabilities: [
        'Skill-based routing',
        'Workload balancing',
        'Priority queue management',
        'Agent performance matching',
        'Time-zone optimization'
      ],
      roi: '+40% agent productivity',
      cost: 'CHF 2K setup + CHF 200/month'
    },
    {
      title: 'AI Email Assistant',
      icon: faEnvelope,
      color: 'from-yellow-500 to-orange-500',
      description: 'Automated email composition and response suggestions',
      capabilities: [
        'Smart reply generation',
        'Email categorization',
        'Follow-up reminders',
        'Template personalization',
        'Tone adjustment'
      ],
      roi: '+55% email response time',
      cost: 'CHF 1.5K setup + CHF 200/month'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Quick Wins',
      duration: '2-3 weeks',
      icon: faLightbulb,
      color: 'text-yellow-400',
      features: ['AI Chatbot', 'Email Assistant', 'Smart Routing'],
      investment: 'CHF 6K + CHF 700/month'
    },
    {
      phase: 'Core AI',
      duration: '3-4 weeks',
      icon: faBrain,
      color: 'text-purple-400',
      features: ['Lead Qualifier', 'Sentiment Analysis', 'Document Intelligence'],
      investment: 'CHF 8.5K + CHF 1.1K/month'
    },
    {
      phase: 'Advanced AI',
      duration: '4-6 weeks',
      icon: faRobot,
      color: 'text-blue-400',
      features: ['AI Voice Agents', 'Predictive Analytics'],
      investment: 'CHF 9K + CHF 1.1K/month'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-emerald-50 mb-6 tracking-tight">
          What's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Next?</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto mb-4">
          AI Features I Can Add to Your CRM
        </p>
        <p className="text-lg text-emerald-100/60 max-w-3xl mx-auto">
          Once your core CRM is running smoothly, we can supercharge it with smart AI features that work for you around the clock—handling calls, qualifying leads, and predicting what your customers need before they even ask
        </p>
      </motion.div>

      {/* AI Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-6 border border-emerald-700/30 shadow-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl text-white text-3xl`}>
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <div className="text-right">
                <div className="text-emerald-300 font-bold text-sm">{feature.roi}</div>
                <div className="text-emerald-100/60 text-xs">{feature.cost}</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-emerald-50 mb-3">{feature.title}</h3>
            <p className="text-emerald-100/70 mb-4">{feature.description}</p>
            
            <div className="space-y-2">
              <div className="text-emerald-300 font-semibold text-sm mb-2">Key Capabilities:</div>
              {feature.capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="text-emerald-400 text-xs mt-1">✓</div>
                  <div className="text-emerald-100/80 text-sm">{capability}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Implementation Phases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">AI Implementation Roadmap</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {implementationPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className={`${phase.color} text-5xl mb-4 text-center`}>
                <FontAwesomeIcon icon={phase.icon} />
              </div>
              <h4 className="text-xl font-bold text-emerald-50 mb-2 text-center">{phase.phase}</h4>
              <div className="text-emerald-300 text-sm text-center mb-4">{phase.duration}</div>
              
              <div className="space-y-2 mb-4">
                {phase.features.map((feature, idx) => (
                  <div key={idx} className="bg-emerald-900/30 rounded-lg px-3 py-2 text-emerald-100/80 text-sm text-center">
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-4 border-t border-emerald-700/30">
                <div className="text-emerald-100/60 text-xs mb-1">Investment</div>
                <div className="text-emerald-300 font-bold">{phase.investment}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="text-emerald-100/70 text-sm">Total AI Enhancement Investment (All Features)</div>
          <div className="text-emerald-300 font-bold text-3xl mt-2">CHF 23.5K setup + CHF 2.9K/month</div>
          <div className="text-emerald-100/60 text-xs mt-2">Can be implemented gradually based on priorities and budget</div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIEnhancements;
