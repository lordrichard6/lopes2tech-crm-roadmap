import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faRocket,
  faBrain,
  faCode,
  faLightbulb,
  faClock,
  faHandshake,
  faAward,
  faChartLine,
  faMagic,
  faHeart,
  faCheckCircle,
  faGlobe,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const WhyMe = () => {
  const heroStats = [
    { number: '8+', label: 'Years Experience', icon: faClock },
    { number: '40+', label: 'Projects Delivered', icon: faRocket },
    { number: '1', label: 'Developer = Full Focus', icon: faUser },
    { number: '100%', label: 'AI-Powered Workflow', icon: faBrain }
  ];

  const coreStrengths = [
    {
      title: 'AI-Powered Development',
      icon: faMagic,
      color: 'from-purple-500 to-pink-500',
      description: 'I leverage AI tools efficiently to deliver 10x productivity',
      details: [
        'GitHub Copilot for intelligent code completion',
        'ChatGPT/Claude for architecture decisions',
        'AI-assisted debugging and optimization',
        'Automated testing and documentation',
        'Design iteration with Midjourney/DALL-E'
      ],
      impact: 'What takes a team weeks, I deliver in days'
    },
    {
      title: 'Full-Stack Mastery',
      icon: faCode,
      color: 'from-blue-500 to-cyan-500',
      description: 'End-to-end development with modern technologies',
      details: [
        'Frontend: React, Angular, Vue.js',
        'Backend: Django, Node.js, Python',
        'Database: PostgreSQL, MongoDB, Redis',
        'Mobile: Ionic, React Native',
        'DevOps: Docker, AWS, CI/CD pipelines'
      ],
      impact: 'No handoffs, no miscommunication, just results'
    },
    {
      title: 'Swiss Precision',
      icon: faShieldAlt,
      color: 'from-emerald-500 to-teal-500',
      description: 'Quality and reliability in every line of code',
      details: [
        'Thorough testing and documentation',
        'Security-first approach',
        'GDPR and Swiss data protection compliance',
        'Clean, maintainable code',
        'Long-term thinking and scalability'
      ],
      impact: 'Built to last, not just to launch'
    },
    {
      title: 'Self-Learner & Innovator',
      icon: faLightbulb,
      color: 'from-orange-500 to-red-500',
      description: 'Always learning, always improving',
      details: [
        'Early adopter of new technologies',
        'Continuous skill development',
        'Active in developer communities',
        'Building side projects (TheraFlow CRM)',
        'Staying ahead of industry trends'
      ],
      impact: 'Future-proof solutions with cutting-edge tech'
    }
  ];

  const whyOneDeveloper = [
    {
      title: 'Direct Communication',
      description: 'No middlemen, no lost context. You talk directly to the person building your solution.',
      icon: faHandshake
    },
    {
      title: 'Faster Decisions',
      description: 'No committee meetings. Technical decisions happen instantly without bureaucracy.',
      icon: faRocket
    },
    {
      title: 'Consistent Quality',
      description: 'One vision, one coding style, one quality standard throughout the entire project.',
      icon: faAward
    },
    {
      title: 'Lower Costs',
      description: 'No team overhead. You get senior-level expertise without paying for multiple developers.',
      icon: faChartLine
    },
    {
      title: 'Personal Investment',
      description: 'Your project success is my reputation. I care deeply about delivering excellence.',
      icon: faHeart
    },
    {
      title: 'Full Ownership',
      description: 'Complete understanding of every part of your system. No knowledge silos.',
      icon: faCheckCircle
    }
  ];

  const technologies = [
    'React', 'Angular', 'Django', 'Python', 'TypeScript', 'PostgreSQL',
    'Docker', 'AWS', 'Figma', 'Git', 'REST APIs', 'WebSockets',
    'Redis', 'Nginx', 'CI/CD', 'Agile', 'TDD', 'UX/UI Design'
  ];

  const testimonialHighlight = {
    quote: "The most impressive thing? How fast things get done. What I expected to take months was delivered in weeks, with quality that rivals any agency I've worked with.",
    author: 'Satisfied Client',
    project: 'TheraFlow CRM (In Beta)'
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
          Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lopes2tech?</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto mb-4">
          One developer. Eight years experience. Unlimited potential with AI.
        </p>
        <p className="text-lg text-emerald-100/60">
          Born in Portugal, based in Switzerland, powered by ambition (and cheese 🧀)
        </p>
      </motion.div>

      {/* Hero Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-4 gap-6 mb-12"
      >
        {heroStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center"
          >
            <div className="text-emerald-400 text-4xl mb-3">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="text-4xl font-bold text-emerald-50 mb-2">{stat.number}</div>
            <div className="text-emerald-100/70 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Core Strengths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">What Makes Me Different</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {coreStrengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${strength.color} p-4 rounded-2xl text-white text-4xl w-fit mb-4`}>
                <FontAwesomeIcon icon={strength.icon} />
              </div>
              
              <h4 className="text-2xl font-bold text-emerald-50 mb-3">{strength.title}</h4>
              <p className="text-emerald-100/70 mb-4">{strength.description}</p>
              
              <div className="space-y-2 mb-4">
                {strength.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="text-emerald-400 mt-1 text-xs">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <span className="text-emerald-100/80 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-emerald-700/30">
                <div className="text-emerald-300 font-semibold text-sm">💡 Impact:</div>
                <div className="text-emerald-100/90 font-bold">{strength.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why One Developer Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-700/30 shadow-2xl mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-2 text-center">
          <FontAwesomeIcon icon={faUser} className="text-purple-400 mr-3" />
          Why One Developer Actually Works Better
        </h3>
        <p className="text-center text-emerald-100/70 mb-8 max-w-3xl mx-auto">
          Small teams move fast. One developer with AI moves faster.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {whyOneDeveloper.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-purple-950/50 rounded-2xl p-6 border border-purple-700/30"
            >
              <div className="text-purple-400 text-3xl mb-3">
                <FontAwesomeIcon icon={reason.icon} />
              </div>
              <h4 className="text-lg font-bold text-emerald-50 mb-2">{reason.title}</h4>
              <p className="text-emerald-100/70 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The AI Secret */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-10 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <div className="flex items-start gap-6 mb-6">
          <div className="text-6xl">
            <FontAwesomeIcon icon={faMagic} className="text-purple-400" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-emerald-50 mb-4">The Secret? AI-Powered Efficiency</h3>
            <p className="text-xl text-emerald-100/80 mb-4">
              While others resist AI, I embrace it fully. This is how I compete with entire teams:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-emerald-950/50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-emerald-300 mb-3">⚡ Traditional Team (5 developers)</h4>
            <ul className="space-y-2 text-emerald-100/70 text-sm">
              <li>• Meetings and coordination overhead</li>
              <li>• Code review delays</li>
              <li>• Knowledge silos between developers</li>
              <li>• Integration complexity</li>
              <li>• Higher costs and management needs</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-emerald-700/30">
              <div className="text-emerald-100/60 text-xs">Estimated delivery:</div>
              <div className="text-emerald-50 font-bold text-xl">4-6 months</div>
            </div>
          </div>

          <div className="bg-purple-950/50 rounded-2xl p-6 border-2 border-purple-500/50">
            <h4 className="text-lg font-bold text-purple-300 mb-3">🚀 Me + AI Tools</h4>
            <ul className="space-y-2 text-emerald-100/70 text-sm">
              <li>• AI writes boilerplate, I focus on logic</li>
              <li>• Instant code reviews with AI assistants</li>
              <li>• Complete system knowledge</li>
              <li>• Zero communication overhead</li>
              <li>• Lower cost, higher velocity</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-purple-700/30">
              <div className="text-emerald-100/60 text-xs">Estimated delivery:</div>
              <div className="text-purple-300 font-bold text-xl">3-4 months ⚡</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 text-center">
          <p className="text-2xl font-bold text-emerald-50 mb-2">
            I don't work harder. I work smarter.
          </p>
          <p className="text-emerald-100/70">
            AI handles the repetitive tasks. I focus on architecture, innovation, and delivering value.
          </p>
        </div>
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-6 text-center">
          <FontAwesomeIcon icon={faCode} className="text-emerald-400 mr-3" />
          Technology Expertise
        </h3>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.3 + index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="bg-emerald-950/50 border border-emerald-700/30 rounded-lg px-4 py-2 text-emerald-100 font-semibold"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial / Featured Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-10 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <div className="text-center mb-6">
          <div className="text-emerald-400 text-5xl mb-4">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <h3 className="text-3xl font-bold text-emerald-50 mb-2">Featured Work</h3>
          <p className="text-emerald-300 font-semibold text-lg mb-4">{testimonialHighlight.project}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl text-emerald-500/20 mb-4">"</div>
          <p className="text-2xl text-emerald-100/90 italic mb-6 text-center">
            {testimonialHighlight.quote}
          </p>
          <div className="text-right text-emerald-100/70">
            — {testimonialHighlight.author}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3 }}
        className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/30 text-center"
      >
        <div className="text-purple-400 text-6xl mb-6">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <h3 className="text-4xl font-bold text-emerald-50 mb-4">Ready to Build Something Amazing?</h3>
        <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto mb-8">
          No bureaucracy. No overhead. Just a passionate developer who loves solving problems and delivering results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.lopes2tech.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all inline-flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGlobe} />
            Visit lopes2tech.ch
          </a>
          <div className="text-emerald-100/70">
            or email: <span className="text-emerald-300 font-semibold">contact@lopes2tech.ch</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/30">
          <p className="text-emerald-100/60 text-sm">
            🇨🇭 Based in Switzerland • 🌍 Working Globally • 🤖 AI-Enhanced Development
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyMe;
