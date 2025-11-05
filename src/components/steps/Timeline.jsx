import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendar,
  faMoneyBillWave,
  faUsers,
  faCheckCircle,
  faClock,
  faRocket,
  faChartLine,
  faExclamationTriangle,
  faHandshake,
  faLightbulb,
  faDatabase,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';

const Timeline = () => {
  const phaseTimeline = [
    { phase: 'Phase 1', months: 3, start: 'Month 1', end: 'Month 3', budget: 150000, team: 5 },
    { phase: 'Phase 2', months: 3, start: 'Month 4', end: 'Month 6', budget: 180000, team: 6 },
    { phase: 'Phase 3', months: 3, start: 'Month 7', end: 'Month 9', budget: 150000, team: 5 },
    { phase: 'Phase 4', months: 3, start: 'Month 10', end: 'Month 12', budget: 180000, team: 6 },
    { phase: 'Phase 5', months: 3, start: 'Month 13', end: 'Month 15', budget: 210000, team: 7 }
  ];

  const budgetData = phaseTimeline.map(p => ({
    name: p.phase,
    budget: p.budget / 1000,
    cumulative: phaseTimeline.slice(0, phaseTimeline.indexOf(p) + 1).reduce((sum, phase) => sum + phase.budget, 0) / 1000
  }));

  const teamAllocation = [
    { role: 'Frontend Developers', count: 2, color: '#ef4444' },
    { role: 'Backend Developers', count: 2, color: '#10b981' },
    { role: 'UI/UX Designer', count: 1, color: '#8b5cf6' },
    { role: 'DevOps Engineer', count: 1, color: '#3b82f6' },
    { role: 'QA Engineer', count: 1, color: '#f59e0b' },
    { role: 'Project Manager', count: 1, color: '#ec4899' }
  ];

  const milestones = [
    { month: 3, title: 'Phase 1 Complete', description: 'Core CRM foundation ready', icon: faDatabase },
    { month: 6, title: 'Phase 2 Complete', description: 'Sales & lead management live', icon: faChartLine },
    { month: 9, title: 'Phase 3 Complete', description: 'Communication hub operational', icon: faComments },
    { month: 12, title: 'Phase 4 Complete', description: 'Analytics & automation active', icon: faRocket },
    { month: 15, title: 'Full Launch', description: 'Complete CRM system deployed', icon: faCheckCircle }
  ];

  const risks = [
    {
      risk: 'Data Migration',
      impact: 'High',
      mitigation: 'Phased migration approach with extensive testing and rollback plan'
    },
    {
      risk: 'User Adoption',
      impact: 'Medium',
      mitigation: 'Extensive training programs, phased rollout, champion program'
    },
    {
      risk: 'Third-party APIs',
      impact: 'Medium',
      mitigation: 'Build abstraction layers and maintain fallback options'
    },
    {
      risk: 'Scope Creep',
      impact: 'Medium',
      mitigation: 'Strict change management process with MVP focus'
    }
  ];

  const nextSteps = [
    { step: 'Stakeholder Workshop', description: 'Define exact requirements with key users', icon: faHandshake },
    { step: 'Data Audit', description: 'Analyze existing customer and policy data', icon: faDatabase },
    { step: 'Vendor Selection', description: 'Choose technology partners and hosting', icon: faUsers },
    { step: 'Pilot Program', description: 'Start with one location for testing', icon: faLightbulb },
    { step: 'Training Plan', description: 'Develop comprehensive training materials', icon: faCheckCircle },
    { step: 'Kickoff Meeting', description: 'Official project launch', icon: faRocket }
  ];

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-orange-500';
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
          Timeline & <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Budget</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto">
          15-month project plan with detailed budget breakdown
        </p>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-4 gap-6 mb-12"
      >
        <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center">
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="text-4xl font-bold text-emerald-50 mb-2">15</div>
          <div className="text-emerald-100/70">Months</div>
        </div>
        <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center">
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </div>
          <div className="text-4xl font-bold text-emerald-50 mb-2">CHF 870K</div>
          <div className="text-emerald-100/70">Total Budget (CHF)</div>
        </div>
        <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center">
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="text-4xl font-bold text-emerald-50 mb-2">5-7</div>
          <div className="text-emerald-100/70">Team Members</div>
        </div>
        <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center">
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          <div className="text-4xl font-bold text-emerald-50 mb-2">5</div>
          <div className="text-emerald-100/70">Phases</div>
        </div>
      </motion.div>

      {/* Budget Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">Budget Distribution</h3>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={budgetData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#059669" opacity={0.1} />
            <XAxis dataKey="name" tick={{ fill: '#6ee7b7', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6ee7b7', fontSize: 12 }} label={{ value: 'Budget (CHF K)', angle: -90, position: 'insideLeft', fill: '#6ee7b7' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#064e3b', 
                border: '1px solid #059669',
                borderRadius: '8px',
                color: '#d1fae5'
              }} 
            />
            <Legend wrapperStyle={{ color: '#6ee7b7' }} />
            <Line type="monotone" dataKey="budget" stroke="#10b981" strokeWidth={3} name="Phase Budget" />
            <Line type="monotone" dataKey="cumulative" stroke="#3b82f6" strokeWidth={3} name="Cumulative" />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-8 text-center text-emerald-100/70">
          <p className="text-sm">Total Investment: <span className="text-emerald-300 font-bold text-xl">CHF 870,000</span> over 15 months</p>
          <p className="text-xs mt-2">Includes development, infrastructure, training, and support</p>
        </div>
      </motion.div>

      {/* Phase Timeline Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-6 text-center">Phase Timeline</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-700/30">
                <th className="text-left text-emerald-100 py-3 px-4">Phase</th>
                <th className="text-left text-emerald-100 py-3 px-4">Duration</th>
                <th className="text-left text-emerald-100 py-3 px-4">Timeline</th>
                <th className="text-left text-emerald-100 py-3 px-4">Budget</th>
                <th className="text-left text-emerald-100 py-3 px-4">Team Size</th>
              </tr>
            </thead>
            <tbody>
              {phaseTimeline.map((phase, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border-b border-emerald-700/20 hover:bg-emerald-800/20 transition-colors"
                >
                  <td className="text-emerald-50 py-4 px-4 font-semibold">{phase.phase}</td>
                  <td className="text-emerald-100/70 py-4 px-4">{phase.months} months</td>
                  <td className="text-emerald-100/70 py-4 px-4">{phase.start} - {phase.end}</td>
                  <td className="text-emerald-300 py-4 px-4 font-semibold">CHF {(phase.budget / 1000).toFixed(0)}K</td>
                  <td className="text-emerald-100/70 py-4 px-4">{phase.team} members</td>
                </motion.tr>
              ))}
              <tr className="bg-emerald-800/20 font-bold">
                <td className="text-emerald-50 py-4 px-4">Total</td>
                <td className="text-emerald-100/70 py-4 px-4">15 months</td>
                <td className="text-emerald-100/70 py-4 px-4">Month 1 - Month 15</td>
                <td className="text-emerald-300 py-4 px-4 text-xl">CHF 870K</td>
                <td className="text-emerald-100/70 py-4 px-4">Avg 5.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Team Allocation & Milestones */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Team Allocation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-emerald-950/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
        >
          <h3 className="text-2xl font-bold text-emerald-50 mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-emerald-400" />
            Team Allocation
          </h3>
          
          <div className="space-y-4">
            {teamAllocation.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: member.color }}></div>
                  <span className="text-emerald-100/80">{member.role}</span>
                </div>
                <span className="text-emerald-50 font-semibold">{member.count}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-emerald-700/30">
            <div className="flex justify-between text-emerald-50 font-bold">
              <span>Total Team</span>
              <span>{teamAllocation.reduce((sum, m) => sum + m.count, 0)} Members</span>
            </div>
          </div>
        </motion.div>

        {/* Key Milestones */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-emerald-950/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
        >
          <h3 className="text-2xl font-bold text-emerald-50 mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendar} className="text-emerald-400" />
            Key Milestones
          </h3>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-emerald-800/20 transition-colors"
              >
                <div className="text-emerald-400 text-2xl mt-1">
                  <FontAwesomeIcon icon={milestone.icon} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-emerald-300 font-semibold text-sm">Month {milestone.month}</span>
                    <span className="text-emerald-50 font-bold">{milestone.title}</span>
                  </div>
                  <p className="text-emerald-100/60 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Risk Mitigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-6 flex items-center gap-3">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-400" />
          Risk Mitigation Strategy
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-emerald-50">{risk.risk}</h4>
                <span className={`${getImpactColor(risk.impact)} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                  {risk.impact}
                </span>
              </div>
              <p className="text-emerald-100/70 text-sm">
                <strong className="text-emerald-300">Mitigation:</strong> {risk.mitigation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-600/30 mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">Next Steps to Get Started</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {nextSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30 text-center"
            >
              <div className="text-emerald-400 text-4xl mb-4">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h4 className="text-lg font-bold text-emerald-50 mb-2">{step.step}</h4>
              <p className="text-emerald-100/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ROI Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-3xl p-10 border border-emerald-500/30 text-center"
      >
        <div className="text-emerald-400 text-6xl mb-4">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <h3 className="text-4xl font-bold text-emerald-50 mb-4">Expected ROI</h3>
        <p className="text-3xl text-emerald-300 font-bold mb-4">8.71 CHF for every 1 CHF invested</p>
        <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto mb-6">
          Based on industry research, this CRM investment of CHF 870K could generate approximately <span className="text-emerald-300 font-bold">CHF 7.6M</span> in value over 3 years through increased sales, efficiency, and customer retention.
        </p>
        <p className="text-sm text-emerald-100/60 mt-2">Note: amounts are shown in CHF; if you want currency conversion at a specific rate, I can update the figures.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="text-3xl font-bold text-emerald-300 mb-2">Year 1</div>
            <div className="text-emerald-100/70">Break-even + 15% ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-300 mb-2">Year 2</div>
            <div className="text-emerald-100/70">250% cumulative ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-300 mb-2">Year 3</div>
            <div className="text-emerald-100/70">870% total ROI</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
