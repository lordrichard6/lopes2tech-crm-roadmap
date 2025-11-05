import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faServer,
  faDatabase,
  faMobile,
  faShieldAlt,
  faCloud,
  faCogs,
  faCheckCircle,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const TechStack = () => {
  const techCategories = [
    {
      category: 'Frontend',
      icon: faCode,
      color: 'from-red-500 to-pink-500',
      primary: {
        name: 'Angular',
        version: '18+',
        description: 'Enterprise-grade framework for scalable web applications',
        features: [
          'TypeScript-based for type safety',
          'Component-based architecture',
          'RxJS for reactive programming',
          'Built-in dependency injection',
          'Angular Material UI components',
          'Progressive Web App support'
        ]
      },
      supporting: [
        { name: 'TypeScript', purpose: 'Type-safe development' },
        { name: 'RxJS', purpose: 'Reactive state management' },
        { name: 'Angular Material', purpose: 'UI component library' },
        { name: 'NGRX', purpose: 'State management' },
        { name: 'Angular Router', purpose: 'Navigation & routing' }
      ]
    },
    {
      category: 'Backend',
      icon: faServer,
      color: 'from-green-600 to-emerald-600',
      primary: {
        name: 'Django',
        version: '5.0+',
        description: 'High-level Python web framework for rapid development',
        features: [
          'Python-based for readability',
          'Built-in admin panel',
          'Django ORM for database',
          'REST framework for APIs',
          'Authentication & permissions',
          'Security best practices built-in'
        ]
      },
      supporting: [
        { name: 'Django REST Framework', purpose: 'RESTful API development' },
        { name: 'Celery', purpose: 'Asynchronous task processing' },
        { name: 'Redis', purpose: 'Caching & task queue' },
        { name: 'Gunicorn', purpose: 'WSGI HTTP server' },
        { name: 'Python 3.11+', purpose: 'Core language' }
      ]
    },
    {
      category: 'Database',
      icon: faDatabase,
      color: 'from-blue-500 to-cyan-500',
      primary: {
        name: 'PostgreSQL',
        version: '16+',
        description: 'Advanced open-source relational database',
        features: [
          'ACID compliance for data integrity',
          'JSON/JSONB support',
          'Full-text search capabilities',
          'Advanced indexing options',
          'Replication & high availability',
          'Excellent performance at scale'
        ]
      },
      supporting: [
        { name: 'Redis', purpose: 'Session & cache storage' },
        { name: 'ElasticSearch', purpose: 'Full-text search engine' },
        { name: 'pgAdmin', purpose: 'Database management' },
        { name: 'PostGIS', purpose: 'Geographic data (optional)' }
      ]
    },
    {
      category: 'Mobile',
      icon: faMobile,
      color: 'from-purple-500 to-indigo-500',
      primary: {
        name: 'Ionic + Angular',
        version: '7+',
        description: 'Cross-platform mobile framework with Angular',
        features: [
          'Single codebase for iOS & Android',
          'Native device access via Capacitor',
          'Angular-based for consistency',
          'Pre-built mobile UI components',
          'Offline data synchronization',
          'Push notifications support'
        ]
      },
      supporting: [
        { name: 'Capacitor', purpose: 'Native device features' },
        { name: 'Cordova Plugins', purpose: 'Extended functionality' },
        { name: 'PWA', purpose: 'Progressive web capabilities' }
      ]
    }
  ];

  const devOpsTools = [
    {
      name: 'Docker',
      icon: faLayerGroup,
      purpose: 'Containerization for consistent environments',
      color: 'text-blue-400'
    },
    {
      name: 'Kubernetes',
      icon: faCogs,
      purpose: 'Container orchestration & scaling',
      color: 'text-blue-500'
    },
    {
      name: 'GitLab CI/CD',
      icon: faCode,
      purpose: 'Automated testing & deployment',
      color: 'text-orange-500'
    },
    {
      name: 'AWS/Azure',
      icon: faCloud,
      purpose: 'Cloud hosting (Swiss regions)',
      color: 'text-yellow-500'
    },
    {
      name: 'Nginx',
      icon: faServer,
      purpose: 'Reverse proxy & load balancing',
      color: 'text-green-500'
    },
    {
      name: 'Prometheus',
      icon: faCheckCircle,
      purpose: 'Monitoring & alerting',
      color: 'text-red-500'
    }
  ];

  const securityTools = [
    { name: 'SSL/TLS Encryption', description: 'Data in transit protection' },
    { name: 'AES-256 Encryption', description: 'Data at rest protection' },
    { name: 'OAuth 2.0 / OIDC', description: 'Authentication & authorization' },
    { name: 'JWT Tokens', description: 'Secure API authentication' },
    { name: 'Rate Limiting', description: 'DDoS protection' },
    { name: 'Security Headers', description: 'XSS, CSRF protection' },
    { name: 'Regular Audits', description: 'FINMA compliance checks' },
    { name: 'Backup & Recovery', description: 'Daily encrypted backups' }
  ];

  const whyThisStack = [
    {
      icon: faShieldAlt,
      title: 'Enterprise-Grade Security',
      description: 'Django and Angular provide built-in security features essential for FINMA compliance and Swiss data protection requirements.'
    },
    {
      icon: faLayerGroup,
      title: 'Scalable Architecture',
      description: 'Both frameworks are designed for large-scale applications with multi-location support and high user concurrency.'
    },
    {
      icon: faCode,
      title: 'Developer Productivity',
      description: 'Django admin panel and Angular CLI accelerate development with code generation and built-in best practices.'
    },
    {
      icon: faCogs,
      title: 'Long-term Maintainability',
      description: 'Strong typing (TypeScript), clear structure (Django MVT), and extensive documentation ensure easier maintenance.'
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
          Technology <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Stack</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto">
          Modern, secure, and scalable technologies for enterprise CRM
        </p>
      </motion.div>

      {/* Main Tech Stack */}
      <div className="space-y-8 mb-12">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl text-white text-3xl`}>
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <div>
                <div className="text-emerald-300 text-sm font-semibold uppercase">{category.category}</div>
                <h3 className="text-3xl font-bold text-emerald-50">{category.primary.name}</h3>
                <div className="text-emerald-300/70 text-sm">{category.primary.version}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-emerald-100/80 mb-6">
              {category.primary.description}
            </p>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Key Features */}
              <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30">
                <h4 className="text-emerald-50 font-semibold mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {category.primary.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.2 + idx * 0.05 }}
                      className="text-sm text-emerald-100/70 flex items-start gap-2"
                    >
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Supporting Technologies */}
              <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30">
                <h4 className="text-emerald-50 font-semibold mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-emerald-400" />
                  Supporting Technologies
                </h4>
                <ul className="space-y-3">
                  {category.supporting.map((tech, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 + idx * 0.05 }}
                      className="text-sm"
                    >
                      <div className="text-emerald-50 font-medium">{tech.name}</div>
                      <div className="text-emerald-100/60 text-xs">{tech.purpose}</div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DevOps & Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 mb-8 text-center">
          DevOps & Infrastructure
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {devOpsTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className={`${tool.color} text-4xl mb-3`}>
                <FontAwesomeIcon icon={tool.icon} />
              </div>
              <h4 className="text-lg font-bold text-emerald-50 mb-2">{tool.name}</h4>
              <p className="text-sm text-emerald-100/70">{tool.purpose}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Security & Compliance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-2xl text-white text-3xl">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-emerald-50">Security & Compliance</h3>
            <p className="text-emerald-100/70">FINMA-compliant security measures</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {securityTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.05 }}
              className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/30"
            >
              <div className="text-emerald-50 font-semibold text-sm mb-1">{tool.name}</div>
              <div className="text-emerald-100/60 text-xs">{tool.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why This Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 mb-8 text-center">
          Why This Technology Stack?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {whyThisStack.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-emerald-400 text-3xl">
                  <FontAwesomeIcon icon={reason.icon} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-50 mb-2">{reason.title}</h4>
                  <p className="text-emerald-100/70">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-600/30 text-center"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-4">Modern Full-Stack Architecture</h3>
        <div className="text-xl text-emerald-100/70 mb-6">
          <span className="text-emerald-300 font-semibold">Angular</span> + 
          <span className="text-emerald-300 font-semibold"> Django</span> + 
          <span className="text-emerald-300 font-semibold"> PostgreSQL</span>
        </div>
        <p className="text-emerald-100/70 max-w-4xl mx-auto">
          A proven combination that powers thousands of enterprise applications worldwide, 
          providing the security, scalability, and maintainability required for mission-critical CRM systems.
        </p>
      </motion.div>
    </div>
  );
};

export default TechStack;
