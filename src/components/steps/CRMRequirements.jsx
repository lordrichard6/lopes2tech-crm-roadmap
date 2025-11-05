import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase,
  faShieldAlt,
  faGlobe,
  faUsers,
  faFileAlt,
  faChartBar,
  faRobot,
  faMobile,
  faLayerGroup,
  faCheckCircle,
  faCog,
  faLink
} from '@fortawesome/free-solid-svg-icons';

const CRMRequirements = () => {
  const criticalNeeds = [
    {
      icon: faLayerGroup,
      title: 'Multi-Location Management',
      description: 'Coordinate operations and data across 7 Swiss offices',
      priority: 'Critical'
    },
    {
      icon: faUsers,
      title: 'Dual Customer Segmentation',
      description: 'Separate workflows for B2C and B2B clients',
      priority: 'Critical'
    },
    {
      icon: faDatabase,
      title: 'Complex Product Portfolio',
      description: 'Manage 15+ insurance and finance products',
      priority: 'High'
    },
    {
      icon: faShieldAlt,
      title: 'Regulatory Compliance',
      description: 'FINMA requirements and Swiss data protection',
      priority: 'Critical'
    },
    {
      icon: faFileAlt,
      title: 'Client Lifecycle Management',
      description: 'From lead capture to policy renewal',
      priority: 'High'
    },
    {
      icon: faLink,
      title: 'Partner Network Integration',
      description: 'Connect with multiple insurance providers',
      priority: 'High'
    },
    {
      icon: faGlobe,
      title: 'Multilingual Support',
      description: 'German, French, Italian, and English',
      priority: 'High'
    }
  ];

  const coreModules = [
    {
      category: 'Customer Management',
      icon: faUsers,
      features: [
        'Contact database with B2C/B2B segmentation',
        'Customer profile management (personal/business)',
        'Family structure tracking for dependents',
        'Document management system',
        'Customer 360° view dashboard',
        'Advanced search and filtering'
      ]
    },
    {
      category: 'Policy & Product Management',
      icon: faFileAlt,
      features: [
        'Product catalog for 15+ offerings',
        'Policy lifecycle management',
        'Renewal tracking and automation',
        'Multi-provider policy comparison',
        'Policy amendments and cancellations',
        'Commission tracking'
      ]
    },
    {
      category: 'Sales & Lead Management',
      icon: faChartBar,
      features: [
        'Lead capture from multiple sources',
        'Lead scoring and qualification',
        'Location-based lead assignment',
        'Sales pipeline management',
        'Quote generation and comparison',
        'Opportunity tracking'
      ]
    },
    {
      category: 'Automation & Analytics',
      icon: faRobot,
      features: [
        'Policy renewal automation',
        'Task auto-assignment',
        'Email campaign automation',
        'Real-time reporting dashboards',
        'Sales forecasting',
        'Customer segmentation analytics'
      ]
    }
  ];

  const technicalRequirements = [
    {
      icon: faShieldAlt,
      title: 'Security & Compliance',
      items: [
        'FINMA regulatory compliance',
        'Swiss data protection (DPA)',
        'Role-based access control (RBAC)',
        'Audit logging system',
        'Data encryption (AES-256)',
        'Regular security audits'
      ]
    },
    {
      icon: faMobile,
      title: 'Accessibility',
      items: [
        'Web-based platform',
        'Mobile iOS and Android apps',
        'Offline data access',
        'Cross-device synchronization',
        'Responsive design',
        'Progressive Web App (PWA)'
      ]
    },
    {
      icon: faCog,
      title: 'Integration Capabilities',
      items: [
        'Partner insurance provider APIs',
        'Email systems (Gmail, Outlook)',
        'Calendar synchronization',
        'Accounting software integration',
        'E-signature platforms',
        'Marketing automation tools'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      default: return 'bg-emerald-500';
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
          CRM <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Requirements</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto">
          Essential features and capabilities for insurance & financial advisory operations
        </p>
      </motion.div>

      {/* Critical Business Needs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 mb-8 text-center">
          Critical Business Needs
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criticalNeeds.map((need, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 ${getPriorityColor(need.priority)} text-white text-xs px-3 py-1 rounded-bl-lg font-semibold`}>
                {need.priority}
              </div>
              
              <div className="text-emerald-400 text-4xl mb-4 mt-2">
                <FontAwesomeIcon icon={need.icon} />
              </div>
              
              <h4 className="text-xl font-bold text-emerald-50 mb-2">
                {need.title}
              </h4>
              
              <p className="text-emerald-100/70">
                {need.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Modules */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 mb-8 text-center">
          Core CRM Modules
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {coreModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-emerald-400 text-4xl">
                  <FontAwesomeIcon icon={module.icon} />
                </div>
                <h4 className="text-2xl font-bold text-emerald-50">{module.category}</h4>
              </div>

              <ul className="space-y-3">
                {module.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.2 + idx * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-emerald-100/70"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400 mt-1" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 mb-8 text-center">
          Technical Requirements
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {technicalRequirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-emerald-950/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className="text-emerald-400 text-3xl mb-4">
                <FontAwesomeIcon icon={req.icon} />
              </div>
              
              <h4 className="text-xl font-bold text-emerald-50 mb-4">
                {req.title}
              </h4>

              <ul className="space-y-2">
                {req.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-emerald-100/70">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Success Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-600/30 text-center"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-6">Success Metrics</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="text-4xl font-bold text-emerald-300 mb-2">100%</div>
            <div className="text-emerald-100/70">Lead Capture Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-300 mb-2">&lt;2s</div>
            <div className="text-emerald-100/70">Page Load Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-300 mb-2">99.9%</div>
            <div className="text-emerald-100/70">System Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-300 mb-2">5.0</div>
            <div className="text-emerald-100/70">Customer Satisfaction</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CRMRequirements;
