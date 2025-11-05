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
  faGlobe,
  faCalendarCheck,
  faEnvelope,
  faSmile,
  faMagic,
  faShieldAlt,
  faClock
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
      cost: 'CHF 15K setup + CHF 2K/month'
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
      cost: 'CHF 12K setup + CHF 1.5K/month'
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
      cost: 'CHF 10K setup + CHF 1K/month'
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
      cost: 'CHF 18K setup + CHF 2.5K/month'
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
      cost: 'CHF 8K setup + CHF 1K/month'
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
      cost: 'CHF 14K setup + CHF 1.8K/month'
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
      cost: 'CHF 9K setup + CHF 1.2K/month'
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
      cost: 'CHF 7K setup + CHF 900/month'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Quick Wins',
      duration: '1-2 months',
      icon: faLightbulb,
      color: 'text-yellow-400',
      features: ['AI Chatbot', 'Email Assistant', 'Smart Routing'],
      investment: 'CHF 26K + CHF 3.1K/month'
    },
    {
      phase: 'Core AI',
      duration: '3-4 months',
      icon: faBrain,
      color: 'text-purple-400',
      features: ['Lead Qualifier', 'Sentiment Analysis', 'Document Intelligence'],
      investment: 'CHF 34K + CHF 4.3K/month'
    },
    {
      phase: 'Advanced AI',
      duration: '4-6 months',
      icon: faRobot,
      color: 'text-blue-400',
      features: ['AI Voice Agents', 'Predictive Analytics'],
      investment: 'CHF 33K + CHF 4.5K/month'
    }
  ];

  const benefits = [
    { 
      metric: 'Response Time', 
      improvement: '75%', 
      description: 'Faster customer responses with AI automation',
      icon: faClock
    },
    { 
      metric: 'Lead Conversion', 
      improvement: '45%', 
      description: 'Higher conversion with intelligent lead scoring',
      icon: faChartLine
    },
    { 
      metric: 'Agent Productivity', 
      improvement: '60%', 
      description: 'More efficient agents with AI assistance',
      icon: faUserCheck
    },
    { 
      metric: 'Customer Satisfaction', 
      improvement: '40%', 
      description: 'Improved CSAT with 24/7 AI support',
      icon: faSmile
    }
  ];

  const considerations = [
    {
      title: 'Data Privacy & Compliance',
      description: 'Ensure all AI systems comply with Swiss data protection laws and GDPR',
      icon: faShieldAlt,
      importance: 'Critical'
    },
    {
      title: 'Training & Adoption',
      description: 'Comprehensive training program for staff to work alongside AI tools',
      icon: faUserCheck,
      importance: 'High'
    },
    {
      title: 'AI Model Training',
      description: 'Initial setup requires quality data for accurate predictions',
      icon: faBrain,
      importance: 'High'
    },
    {
      title: 'Integration Complexity',
      description: 'AI features integrate with existing CRM modules and workflows',
      icon: faRoute,
      importance: 'Medium'
    }
  ];

  const getImportanceColor = (importance) => {
    switch(importance) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      default: return 'bg-yellow-500';
    }
  };

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
          AI-Powered Features to Transform Your CRM
        </p>
        <p className="text-lg text-emerald-100/60 max-w-3xl mx-auto">
          Take your CRM to the next level with intelligent automation and machine learning capabilities
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
          <div className="text-emerald-100/70 text-sm">Total AI Enhancement Investment</div>
          <div className="text-emerald-300 font-bold text-3xl mt-2">CHF 93K setup + CHF 11.9K/month</div>
          <div className="text-emerald-100/60 text-xs mt-2">Can be implemented gradually based on priorities and budget</div>
        </div>
      </motion.div>

      {/* Expected Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="grid md:grid-cols-4 gap-6 mb-12"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-700/30 text-center"
          >
            <div className="text-purple-400 text-4xl mb-3">
              <FontAwesomeIcon icon={benefit.icon} />
            </div>
            <div className="text-4xl font-bold text-purple-200 mb-2">+{benefit.improvement}</div>
            <div className="text-purple-100 font-semibold mb-2">{benefit.metric}</div>
            <div className="text-purple-200/70 text-sm">{benefit.description}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Important Considerations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-6 text-center">Important Considerations</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {considerations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6 + index * 0.1 }}
              className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-emerald-400 text-3xl">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <span className={`${getImportanceColor(item.importance)} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                  {item.importance}
                </span>
              </div>
              <h4 className="text-lg font-bold text-emerald-50 mb-2">{item.title}</h4>
              <p className="text-emerald-100/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Implement AI Now */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/30 text-center"
      >
        <div className="text-purple-400 text-6xl mb-6">
          <FontAwesomeIcon icon={faMagic} />
        </div>
        <h3 className="text-4xl font-bold text-emerald-50 mb-6">Why Implement AI Now?</h3>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-left">
          <div>
            <div className="text-purple-400 text-3xl mb-3">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h4 className="text-xl font-bold text-emerald-50 mb-2">Competitive Advantage</h4>
            <p className="text-emerald-100/70">
              Early adopters of AI in insurance gain significant market advantage with superior customer experience and operational efficiency.
            </p>
          </div>
          
          <div>
            <div className="text-purple-400 text-3xl mb-3">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h4 className="text-xl font-bold text-emerald-50 mb-2">Proven ROI</h4>
            <p className="text-emerald-100/70">
              AI implementations in CRM systems show 3-5x ROI within the first year through automation and improved conversion rates.
            </p>
          </div>
          
          <div>
            <div className="text-purple-400 text-3xl mb-3">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <h4 className="text-xl font-bold text-emerald-50 mb-2">Future-Ready</h4>
            <p className="text-emerald-100/70">
              Building AI capabilities now positions your organization for rapid adaptation to emerging technologies and market changes.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-purple-500/30">
          <p className="text-2xl text-emerald-100/90 font-semibold">
            Start with Quick Wins, scale based on results
          </p>
          <p className="text-emerald-100/60 mt-2">
            Implement AI features incrementally to manage risk and demonstrate value early
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AIEnhancements;
