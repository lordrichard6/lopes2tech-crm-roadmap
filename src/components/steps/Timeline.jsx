import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendar,
  faMoneyBillWave,
  faUsers,
  faCheckCircle,
  faClock,
  faRocket,
  faChartLine,
  faDatabase,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';

const Timeline = () => {
  const [viewMode, setViewMode] = useState('traditional'); // 'traditional' or 'ai-powered'
  // Traditional timeline data (aligned with Development Phases: 2 months per phase = 10 months total)
  const phaseTimelineTraditional = [
    { phase: 'Phase 1', months: 2, start: 'Month 1', end: 'Month 2', budget: 50000, team: 4 },
    { phase: 'Phase 2', months: 2, start: 'Month 3', end: 'Month 4', budget: 50000, team: 4 },
    { phase: 'Phase 3', months: 2, start: 'Month 5', end: 'Month 6', budget: 50000, team: 4 },
    { phase: 'Phase 4', months: 2, start: 'Month 7', end: 'Month 8', budget: 50000, team: 4 },
    { phase: 'Phase 5', months: 2, start: 'Month 9', end: 'Month 10', budget: 50000, team: 4 }
  ];

  // AI-powered timeline data
  const phaseTimelineAI = [
    { phase: 'Phase 1', months: 0.75, start: 'Week 1', end: 'Week 3', budget: 8000, team: 1 },
    { phase: 'Phase 2', months: 0.75, start: 'Week 4', end: 'Week 6', budget: 8000, team: 1 },
    { phase: 'Phase 3', months: 0.75, start: 'Week 7', end: 'Week 9', budget: 8000, team: 1 },
    { phase: 'Phase 4', months: 0.75, start: 'Week 10', end: 'Week 12', budget: 8000, team: 1 },
    { phase: 'Phase 5', months: 0.75, start: 'Week 13', end: 'Week 15', budget: 8000, team: 1 }
  ];

  const phaseTimeline = viewMode === 'traditional' ? phaseTimelineTraditional : phaseTimelineAI;

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

  const milestonesTraditional = [
    { month: 2, title: 'Phase 1 Complete', description: 'Core CRM foundation ready', icon: faDatabase },
    { month: 4, title: 'Phase 2 Complete', description: 'Sales & lead management live', icon: faChartLine },
    { month: 6, title: 'Phase 3 Complete', description: 'Communication hub operational', icon: faComments },
    { month: 8, title: 'Phase 4 Complete', description: 'Analytics & automation active', icon: faRocket },
    { month: 10, title: 'Full Launch', description: 'Complete CRM system deployed', icon: faCheckCircle }
  ];

  const milestonesAI = [
    { month: 0.75, title: 'Phase 1 Complete', description: 'Core CRM foundation ready', icon: faDatabase },
    { month: 1.5, title: 'Phase 2 Complete', description: 'Sales & lead management live', icon: faChartLine },
    { month: 2.25, title: 'Phase 3 Complete', description: 'Communication hub operational', icon: faComments },
    { month: 3, title: 'Phase 4 Complete', description: 'Analytics & automation active', icon: faRocket },
    { month: 3.75, title: 'Full Launch', description: 'Complete CRM system deployed', icon: faCheckCircle }
  ];

  const milestones = viewMode === 'traditional' ? milestonesTraditional : milestonesAI;

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
            Timeline & <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Budget</span>
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
          className="text-2xl text-emerald-100/80 max-w-4xl mx-auto"
        >
          {viewMode === 'traditional' 
            ? '10-month project plan with detailed budget breakdown'
            : '3-4 month project plan with detailed budget breakdown'
          }
        </motion.p>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-4 gap-6 mb-12"
      >
        <motion.div 
          key={`months-${viewMode}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center"
        >
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <motion.div 
            key={`months-value-${viewMode}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold text-emerald-50 mb-2"
          >
            {viewMode === 'traditional' ? '10' : '3-4'}
          </motion.div>
          <div className="text-emerald-100/70">Months</div>
        </motion.div>
        <motion.div 
          key={`budget-${viewMode}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
          className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center"
        >
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </div>
          <motion.div 
            key={`budget-value-${viewMode}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl font-bold text-emerald-50 mb-2"
          >
            {viewMode === 'traditional' ? 'CHF 250K' : 'CHF 40K'}
          </motion.div>
          <div className="text-emerald-100/70">Total Budget</div>
        </motion.div>
        <motion.div 
          key={`team-${viewMode}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
          className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center"
        >
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <motion.div 
            key={`team-value-${viewMode}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl font-bold text-emerald-50 mb-2"
          >
            {viewMode === 'traditional' ? '3-4' : '1'}
          </motion.div>
          <div className="text-emerald-100/70">
            {viewMode === 'traditional' ? 'Team Members' : 'AI Powered Person'}
          </div>
        </motion.div>
        <motion.div 
          key={`phases-${viewMode}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
          className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center"
        >
          <div className="text-emerald-400 text-4xl mb-3">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          <div className="text-4xl font-bold text-emerald-50 mb-2">5</div>
          <div className="text-emerald-100/70">Phases</div>
        </motion.div>
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

        <motion.div 
          key={`budget-summary-${viewMode}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 text-center text-emerald-100/70"
        >
          <p className="text-sm">
            Total Investment: <span className="text-emerald-300 font-bold text-xl">
              {viewMode === 'traditional' ? 'CHF 250,000' : 'CHF 40,000'}
            </span> over {viewMode === 'traditional' ? '10 months' : '3-4 months'}
          </p>
          <p className="text-xs mt-2">Includes development, infrastructure, training, and support</p>
        </motion.div>
      </motion.div>

      {/* Why this budget? - Only shown in traditional view */}
      {viewMode === 'traditional' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 mb-12"
        >
          <h3 className="text-3xl font-bold text-emerald-50 mb-6 text-center flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-emerald-400" />
            Why this budget?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Breakdown */}
            <div className="space-y-4">
              <div className="bg-emerald-950/50 rounded-xl p-5 border border-emerald-700/20">
                <h4 className="text-emerald-300 font-bold text-lg mb-3">Development Team Costs</h4>
                <div className="space-y-2 text-emerald-100/80 text-sm">
                  <div className="flex justify-between">
                    <span>• 3-4 developers × 10 months</span>
                    <span className="text-emerald-300 font-semibold">CHF 180K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Project management</span>
                    <span className="text-emerald-300 font-semibold">CHF 30K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• UI/UX design</span>
                    <span className="text-emerald-300 font-semibold">CHF 20K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• QA & testing</span>
                    <span className="text-emerald-300 font-semibold">CHF 15K</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-950/50 rounded-xl p-5 border border-emerald-700/20">
                <h4 className="text-emerald-300 font-bold text-lg mb-3">Infrastructure & Tools</h4>
                <div className="space-y-2 text-emerald-100/80 text-sm">
                  <div className="flex justify-between">
                    <span>• Cloud hosting setup</span>
                    <span className="text-emerald-300 font-semibold">CHF 5K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Development tools & licenses</span>
                    <span className="text-emerald-300 font-semibold">CHF 8K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Security & compliance setup</span>
                    <span className="text-emerald-300 font-semibold">CHF 12K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Why It's Competitive */}
            <div className="space-y-4">
              <div className="bg-emerald-950/50 rounded-xl p-5 border border-emerald-700/20">
                <h4 className="text-emerald-300 font-bold text-lg mb-3">Training & Support</h4>
                <div className="space-y-2 text-emerald-100/80 text-sm">
                  <div className="flex justify-between">
                    <span>• User training & documentation</span>
                    <span className="text-emerald-300 font-semibold">CHF 10K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Post-launch support (3 months)</span>
                    <span className="text-emerald-300 font-semibold">CHF 15K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Data migration & integration</span>
                    <span className="text-emerald-300 font-semibold">CHF 10K</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 rounded-xl p-5 border border-emerald-600/30">
                <h4 className="text-emerald-300 font-bold text-lg mb-3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400" />
                  Why It's Competitive
                </h4>
                <ul className="space-y-2 text-emerald-100/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span><strong>Lean team:</strong> 3-4 specialists vs typical 5-7 team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span><strong>Efficient timeline:</strong> 10 months vs industry standard 15-18</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span><strong>Swiss quality:</strong> CHF 25K per month all-inclusive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span><strong>Fixed price:</strong> No hidden costs or surprises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span><strong>Boutique approach:</strong> Personalized service, not agency overhead</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 pt-6 border-t border-emerald-700/30 text-center"
          >
            <p className="text-emerald-100/70 text-sm">
              <strong className="text-emerald-300">Market comparison:</strong> Traditional agencies charge CHF 400K-600K for similar projects with 15-18 month timelines
            </p>
            <p className="text-emerald-100/60 text-xs mt-2">
              Our lean, efficient approach delivers the same quality at 40-60% lower cost
            </p>
          </motion.div>
        </motion.div>
      )}

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
                  key={`${index}-${viewMode}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border-b border-emerald-700/20 hover:bg-emerald-800/20 transition-colors"
                >
                  <td className="text-emerald-50 py-4 px-4 font-semibold">{phase.phase}</td>
                  <td className="text-emerald-100/70 py-4 px-4">
                    {viewMode === 'traditional' ? `${phase.months} months` : `${phase.months * 4} weeks`}
                  </td>
                  <td className="text-emerald-100/70 py-4 px-4">{phase.start} - {phase.end}</td>
                  <td className="text-emerald-300 py-4 px-4 font-semibold">CHF {(phase.budget / 1000).toFixed(0)}K</td>
                  <td className="text-emerald-100/70 py-4 px-4">
                    {viewMode === 'traditional' ? `${phase.team} members` : '1 AI person'}
                  </td>
                </motion.tr>
              ))}
              <motion.tr 
                key={`total-${viewMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="bg-emerald-800/20 font-bold"
              >
                <td className="text-emerald-50 py-4 px-4">Total</td>
                <td className="text-emerald-100/70 py-4 px-4">
                  {viewMode === 'traditional' ? '10 months' : '15 weeks'}
                </td>
                <td className="text-emerald-100/70 py-4 px-4">
                  {viewMode === 'traditional' ? 'Month 1 - Month 10' : 'Week 1 - Week 15'}
                </td>
                <td className="text-emerald-300 py-4 px-4 text-xl">
                  {viewMode === 'traditional' ? 'CHF 250K' : 'CHF 40K'}
                </td>
                <td className="text-emerald-100/70 py-4 px-4">
                  {viewMode === 'traditional' ? 'Avg 4' : '1 AI person'}
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Team Allocation & Milestones */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Team Allocation */}
        <motion.div
          key={`team-allocation-${viewMode}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-emerald-950/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
        >
          <h3 className="text-2xl font-bold text-emerald-50 mb-6 flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-emerald-400" />
            {viewMode === 'traditional' ? 'Traditional Team Allocation' : 'Team Allocation'}
          </h3>
          
          {viewMode === 'traditional' ? (
            <>
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
            </>
          ) : (
            <div className="space-y-4">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-8"
              >
                <div className="text-6xl mb-4">🦸‍♂️</div>
                <div className="text-2xl font-bold text-emerald-50 mb-2">One AI-Powered Developer</div>
                <div className="text-emerald-300 text-sm mb-6">(a.k.a. The Swiss Army Knife of Tech)</div>
              </motion.div>

              <div className="space-y-3">
                {teamAllocation.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-emerald-900/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: member.color }}></div>
                      <span className="text-emerald-100/80">{member.role}</span>
                    </div>
                    <span className="text-emerald-300 font-semibold text-sm">✓ Me + AI</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="mt-6 pt-6 border-t border-emerald-700/30 text-center"
              >
                <div className="text-emerald-100/70 text-sm italic">
                  "Why hire 8 people when AI can do the work of 7?" 😎
                </div>
              </motion.div>
            </div>
          )}
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
                key={`${viewMode}-milestone-${index}`}
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
                    <motion.span 
                      key={`${viewMode}-label-${index}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="text-emerald-300 font-semibold text-sm"
                    >
                      {viewMode === 'traditional' 
                        ? `Month ${milestone.month}` 
                        : `Week ${Math.round(milestone.month * 4)}`
                      }
                    </motion.span>
                    <span className="text-emerald-50 font-bold">{milestone.title}</span>
                  </div>
                  <p className="text-emerald-100/60 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
