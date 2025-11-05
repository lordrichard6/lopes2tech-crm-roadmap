import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket,
  faDatabase,
  faUsers,
  faComments,
  faChartLine,
  faMobileAlt,
  faCheckCircle,
  faClock,
  faCode
} from '@fortawesome/free-solid-svg-icons';

const DevelopmentPhases = () => {
  const [viewMode, setViewMode] = useState('traditional'); // 'traditional' or 'ai-powered'
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Core Features',
      duration: viewMode === 'traditional' ? '2 months (8 weeks)' : '2-3 weeks',
      icon: faDatabase,
      color: 'from-emerald-500 to-teal-500',
      sprints: viewMode === 'traditional' ? '4 sprints' : '1-2 sprints',
      objectives: [
        'Database design and architecture',
        'User authentication & RBAC',
        'Customer management module',
        'Document management system',
        'Product & policy catalog',
        'Policy lifecycle management'
      ],
      deliverables: [
        'Customer 360° view dashboard',
        'Multi-location data access',
        'FINMA compliance framework',
        'Audit logging system'
      ],
      success: [
        'All advisors can access customer data',
        'Policy information accurate and up-to-date',
        'FINMA compliance requirements met'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Sales & Lead Management',
      duration: viewMode === 'traditional' ? '2 months (8 weeks)' : '2-3 weeks',
      icon: faChartLine,
      color: 'from-teal-500 to-cyan-500',
      sprints: viewMode === 'traditional' ? '4 sprints' : '1-2 sprints',
      objectives: [
        'Lead capture system integration',
        'Lead scoring and qualification',
        'Sales pipeline management',
        'Opportunity tracking',
        'Quote generation engine',
        'Multi-provider comparison'
      ],
      deliverables: [
        'Website form integration',
        'Dynamic quote generation',
        'Sales forecasting tools',
        'Commission tracking system'
      ],
      success: [
        '100% of leads captured and tracked',
        'Sales pipeline visibility achieved',
        'Quote generation time reduced by 70%',
        'Conversion rate improved by 20%'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Communication & Relationship',
      duration: viewMode === 'traditional' ? '2 months (8 weeks)' : '2-3 weeks',
      icon: faComments,
      color: 'from-cyan-500 to-blue-500',
      sprints: viewMode === 'traditional' ? '4 sprints' : '1-2 sprints',
      objectives: [
        'Email integration (Gmail, Outlook)',
        'SMS and WhatsApp integration',
        'Task and activity management',
        'Calendar synchronization',
        'Customer service module',
        'Template management (multilingual)'
      ],
      deliverables: [
        'Communication hub dashboard',
        'Appointment scheduling system',
        'Ticket/case management',
        'Customer satisfaction surveys'
      ],
      success: [
        'All communications centralized',
        'Response time reduced by 50%',
        'Customer satisfaction maintained at 5.0',
        'Task completion rate >95%'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Analytics & Automation',
      duration: viewMode === 'traditional' ? '2 months (8 weeks)' : '2-3 weeks',
      icon: faRocket,
      color: 'from-blue-500 to-indigo-500',
      sprints: viewMode === 'traditional' ? '4 sprints' : '1-2 sprints',
      objectives: [
        'Real-time reporting dashboards',
        'Customer segmentation analytics',
        'Policy renewal automation',
        'Email campaign automation',
        'Partner API integrations',
        'Accounting system integration'
      ],
      deliverables: [
        'Custom report builder',
        'Automated renewal workflows',
        'Marketing automation',
        'E-signature integration'
      ],
      success: [
        'Real-time reporting available',
        '80% of routine tasks automated',
        'Policy renewal rate increased by 15%',
        'Cross-sell opportunities identified'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Mobile & Self-Service',
      duration: viewMode === 'traditional' ? '2 months (8 weeks)' : '2-3 weeks',
      icon: faMobileAlt,
      color: 'from-indigo-500 to-purple-500',
      sprints: viewMode === 'traditional' ? '4 sprints' : '1-2 sprints',
      objectives: [
        'Native mobile apps (iOS/Android)',
        'Offline data access',
        'Push notifications',
        'Mobile-optimized workflows',
        'Customer self-service portal',
        'Advanced reporting features'
      ],
      deliverables: [
        'Mobile applications',
        'Customer portal',
        'Advanced analytics dashboard',
        'Mobile synchronization'
      ],
      success: [
        'Mobile app used by 70% of advisors',
        'Offline access working seamlessly',
        'Self-service reduces support by 40%',
        'Sales efficiency improved by 25%'
      ]
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
        <div className="flex items-center justify-center gap-6 mb-6">
          <h2 className="text-6xl font-bold text-emerald-50 tracking-tight">
            Development <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Phases</span>
          </h2>
          
          {/* Toggle Buttons */}
          <div className="flex bg-slate-800/50 backdrop-blur-lg rounded-2xl p-2 border border-emerald-700/30">
            <motion.button
              onClick={() => setViewMode('traditional')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                viewMode === 'traditional'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              Traditional
            </motion.button>
            <motion.button
              onClick={() => setViewMode('ai-powered')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                viewMode === 'ai-powered'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              AI Powered
            </motion.button>
          </div>
        </div>
        
        <motion.p 
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-2xl text-emerald-100/80 max-w-4xl mx-auto mb-8"
        >
          {viewMode === 'traditional' 
            ? '10-month roadmap with 20 sprints across 5 phases'
            : '3-4 month roadmap with 6-8 sprints across 5 phases'
          }
        </motion.p>

        {/* Timeline Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <motion.div 
            key={`months-${viewMode}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="bg-emerald-900/30 backdrop-blur-lg rounded-xl px-6 py-3 border border-emerald-700/30"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-emerald-400" />
              <motion.span 
                key={`months-text-${viewMode}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-50 font-semibold"
              >
                {viewMode === 'traditional' ? '10 Months Total' : '3-4 Months Total'}
              </motion.span>
            </div>
          </motion.div>
          <motion.div 
            key={`sprints-${viewMode}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
            className="bg-emerald-900/30 backdrop-blur-lg rounded-xl px-6 py-3 border border-emerald-700/30"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} className="text-emerald-400" />
              <motion.span 
                key={`sprints-text-${viewMode}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-emerald-50 font-semibold"
              >
                {viewMode === 'traditional' ? '20 Sprints' : '6-8 Sprints'}
              </motion.span>
            </div>
          </motion.div>
          <motion.div 
            key={`team-${viewMode}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
            className="bg-emerald-900/30 backdrop-blur-lg rounded-xl px-6 py-3 border border-emerald-700/30"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="text-emerald-400" />
              <motion.span 
                key={`team-text-${viewMode}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-emerald-50 font-semibold"
              >
                {viewMode === 'traditional' ? '5-7 Team Members' : '1 AI Powered Person'}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Phase Cards */}
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            className="relative"
          >
            {/* Phase Card */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${phase.color} p-4 rounded-2xl text-white text-3xl`}>
                    <FontAwesomeIcon icon={phase.icon} />
                  </div>
                  <div>
                    <div className="text-emerald-300 text-sm font-semibold">{phase.phase}</div>
                    <h3 className="text-3xl font-bold text-emerald-50">{phase.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-300 text-sm">Duration</div>
                  <motion.div 
                    key={`duration-${index}-${viewMode}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-emerald-50"
                  >
                    {phase.duration}
                  </motion.div>
                  <motion.div 
                    key={`sprints-${index}-${viewMode}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-emerald-300/70 text-xs"
                  >
                    {phase.sprints}
                  </motion.div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Objectives */}
                <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30">
                  <h4 className="text-emerald-50 font-semibold mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400" />
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {phase.objectives.map((obj, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.2 + idx * 0.05 }}
                        className="text-sm text-emerald-100/70 flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{obj}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30">
                  <h4 className="text-emerald-50 font-semibold mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faRocket} className="text-emerald-400" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((del, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.2 + idx * 0.05 }}
                        className="text-sm text-emerald-100/70 flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>{del}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Success Criteria */}
                <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30">
                  <h4 className="text-emerald-50 font-semibold mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faChartLine} className="text-emerald-400" />
                    Success Criteria
                  </h4>
                  <ul className="space-y-2">
                    {phase.success.map((succ, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 + idx * 0.05 }}
                        className="text-sm text-emerald-100/70 flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>{succ}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {index < phases.length - 1 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '2rem' }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                className="w-1 bg-gradient-to-b from-emerald-500 to-teal-500 mx-auto"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentPhases;
