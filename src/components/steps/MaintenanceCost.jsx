import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTools,
  faShieldAlt,
  faUsers,
  faCloudUploadAlt,
  faDatabase,
  faSync,
  faChartLine,
  faCheckCircle,
  faLightbulb,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const MaintenanceCost = () => {
  // Simplified infrastructure costs for 20-person company
  const infrastructureCosts = [
    {
      category: 'Cloud Hosting',
      icon: faCloudUploadAlt,
      items: [
        { name: 'AWS/Azure Server', cost: 180, description: 'Application server' },
        { name: 'CDN & Assets', cost: 50, description: 'Content delivery' },
        { name: 'Backup Storage', cost: 40, description: 'Daily backups' }
      ],
      total: 270,
      color: '#3b82f6'
    },
    {
      category: 'Database & Storage',
      icon: faDatabase,
      items: [
        { name: 'PostgreSQL Database', cost: 120, description: 'Managed database' },
        { name: 'File Storage', cost: 80, description: 'Documents & media' }
      ],
      total: 200,
      color: '#10b981'
    },
    {
      category: 'Security & Monitoring',
      icon: faShieldAlt,
      items: [
        { name: 'SSL Certificate', cost: 15, description: 'HTTPS encryption' },
        { name: 'Security Tools', cost: 100, description: 'Firewall & scanning' },
        { name: 'Monitoring & Logs', cost: 60, description: 'System monitoring' }
      ],
      total: 175,
      color: '#8b5cf6'
    },
    {
      category: 'External Services',
      icon: faSync,
      items: [
        { name: 'Email Service', cost: 50, description: 'Transactional emails' },
        { name: 'SMS/Notifications', cost: 80, description: 'Client notifications' }
      ],
      total: 130,
      color: '#f59e0b'
    }
  ];

  // Single engineer maintenance
  const engineerCost = {
    role: 'Platform Engineer',
    percentage: 30,
    hours: 48,
    monthlyCost: 4500,
    description: '30% time allocation for maintenance, updates, and support',
    responsibilities: [
      'System monitoring and maintenance',
      'Bug fixes and security patches',
      'Performance optimization',
      'User support and troubleshooting',
      'Monthly updates and improvements',
      'Backup verification'
    ]
  };

  const totalInfrastructureCost = infrastructureCosts.reduce((sum, cat) => sum + cat.total, 0);
  const totalMonthlyCost = totalInfrastructureCost + engineerCost.monthlyCost;

  const costDistribution = [
    { name: 'Infrastructure', value: totalInfrastructureCost, color: '#3b82f6' },
    { name: 'Engineer (30%)', value: engineerCost.monthlyCost, color: '#10b981' }
  ];

  const yearlyBreakdown = [
    { 
      year: 'Year 1', 
      infrastructure: totalInfrastructureCost * 12 / 1000, 
      engineer: engineerCost.monthlyCost * 12 / 1000, 
      total: totalMonthlyCost * 12 / 1000 
    },
    { 
      year: 'Year 2', 
      infrastructure: totalInfrastructureCost * 12 / 1000, 
      engineer: (engineerCost.monthlyCost * 1.05) * 12 / 1000, 
      total: (totalInfrastructureCost + engineerCost.monthlyCost * 1.05) * 12 / 1000 
    },
    { 
      year: 'Year 3', 
      infrastructure: totalInfrastructureCost * 12 / 1000, 
      engineer: (engineerCost.monthlyCost * 1.1) * 12 / 1000, 
      total: (totalInfrastructureCost + engineerCost.monthlyCost * 1.1) * 12 / 1000 
    }
  ];

  const maintenanceActivities = [
    {
      activity: 'System Monitoring',
      frequency: 'Daily',
      description: 'Monitor performance, uptime, and error logs',
      icon: faChartLine
    },
    {
      activity: 'Security Updates',
      frequency: 'Weekly',
      description: 'Apply security patches and system updates',
      icon: faShieldAlt
    },
    {
      activity: 'Backup Verification',
      frequency: 'Weekly',
      description: 'Verify backup integrity and test recovery',
      icon: faDatabase
    },
    {
      activity: 'User Support',
      frequency: 'As needed',
      description: 'Help desk support for 20 team members',
      icon: faUsers
    },
    {
      activity: 'Performance Optimization',
      frequency: 'Monthly',
      description: 'Database tuning and code optimization',
      icon: faTools
    },
    {
      activity: 'Feature Updates',
      frequency: 'Quarterly',
      description: 'Minor improvements and feature additions',
      icon: faLightbulb
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
          Ongoing <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Maintenance</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto mb-2">
          Annual costs for 20-person team
        </p>
        <p className="text-lg text-emerald-100/60">
          Single engineer + infrastructure costs
        </p>
      </motion.div>

      {/* Cost Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-10 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-emerald-100 mb-4">Total Monthly Cost</h3>
          <div className="text-6xl font-bold text-emerald-300 mb-2">
            CHF {totalMonthlyCost.toLocaleString()}
          </div>
          <div className="text-xl text-emerald-100/70">
            CHF {(totalMonthlyCost * 12).toLocaleString()} per year
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={costDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {costDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#064e3b', 
                    border: '1px solid #059669',
                    borderRadius: '8px',
                    color: '#d1fae5'
                  }}
                  formatter={(value) => `CHF ${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-950/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-blue-400 text-3xl">
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                  </div>
                  <span className="text-emerald-50 font-semibold text-lg">Infrastructure</span>
                </div>
                <span className="text-emerald-300 font-bold text-xl">CHF {totalInfrastructureCost}</span>
              </div>
              <p className="text-emerald-100/60 text-sm">Hosting, database, security, and external services</p>
            </div>

            <div className="bg-emerald-950/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-green-400 text-3xl">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <span className="text-emerald-50 font-semibold text-lg">Engineer (30%)</span>
                </div>
                <span className="text-emerald-300 font-bold text-xl">CHF {engineerCost.monthlyCost}</span>
              </div>
              <p className="text-emerald-100/60 text-sm">{engineerCost.hours}h/month - {engineerCost.description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Infrastructure Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">Infrastructure Breakdown</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {infrastructureCosts.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl" style={{ color: category.color }}>
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-emerald-50">{category.category}</h4>
                  <div className="text-emerald-300 font-semibold text-lg">CHF {category.total}/month</div>
                </div>
              </div>
              
              <div className="space-y-3 mt-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-emerald-950/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-emerald-50 font-semibold text-sm">{item.name}</span>
                      <span className="text-emerald-300 font-bold">CHF {item.cost}</span>
                    </div>
                    <p className="text-emerald-100/60 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Engineer Responsibilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-6 text-center">
          <FontAwesomeIcon icon={faUsers} className="text-emerald-400 mr-3" />
          Engineer Responsibilities
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {engineerCost.responsibilities.map((responsibility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-start gap-3 bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/30"
            >
              <div className="text-emerald-400 mt-1">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <span className="text-emerald-100/80">{responsibility}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-emerald-700/30 text-center">
          <p className="text-emerald-100/70 mb-2">Time Allocation</p>
          <p className="text-2xl font-bold text-emerald-300">{engineerCost.percentage}% FTE = {engineerCost.hours} hours/month</p>
          <p className="text-emerald-100/60 text-sm mt-2">Dedicated to platform maintenance and user support</p>
        </div>
      </motion.div>

      {/* Maintenance Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-emerald-400 mr-3" />
          Maintenance Schedule
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {maintenanceActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-700/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-emerald-400 text-3xl mt-1">
                  <FontAwesomeIcon icon={activity.icon} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-emerald-50">{activity.activity}</h4>
                    <span className="text-emerald-300 text-xs font-semibold bg-emerald-500/20 px-3 py-1 rounded-full">
                      {activity.frequency}
                    </span>
                  </div>
                  <p className="text-emerald-100/70 text-sm">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3-Year Projection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/30 shadow-2xl mb-12"
      >
        <h3 className="text-3xl font-bold text-emerald-50 mb-8 text-center">3-Year Cost Projection</h3>
        
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={yearlyBreakdown}>
            <CartesianGrid strokeDasharray="3 3" stroke="#059669" opacity={0.1} />
            <XAxis dataKey="year" tick={{ fill: '#6ee7b7', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6ee7b7', fontSize: 12 }} label={{ value: 'Cost (CHF K)', angle: -90, position: 'insideLeft', fill: '#6ee7b7' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#064e3b', 
                border: '1px solid #059669',
                borderRadius: '8px',
                color: '#d1fae5'
              }}
              formatter={(value) => `CHF ${(value * 1000).toLocaleString()}`}
            />
            <Bar dataKey="infrastructure" stackId="a" fill="#3b82f6" name="Infrastructure" />
            <Bar dataKey="engineer" stackId="a" fill="#10b981" name="Engineer" />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-6 text-center">
          <div className="text-emerald-100/70 text-sm mb-2">3-Year Total Investment</div>
          <div className="text-emerald-300 font-bold text-4xl">
            CHF {Math.round(yearlyBreakdown.reduce((sum, year) => sum + year.total, 0) * 1000).toLocaleString()}
          </div>
          <div className="text-emerald-100/60 text-xs mt-2">
            Average CHF {Math.round((yearlyBreakdown.reduce((sum, year) => sum + year.total, 0) / 3) * 1000).toLocaleString()} per year
          </div>
          <div className="text-emerald-100/60 text-xs mt-1">
            Includes 5% annual salary increase for engineer
          </div>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-3xl p-10 border border-emerald-500/30 text-center"
      >
        <div className="text-emerald-400 text-5xl mb-6">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <h3 className="text-3xl font-bold text-emerald-50 mb-4">Cost-Effective Maintenance</h3>
        <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto mb-6">
          Lean operational costs with a single dedicated engineer maintaining the platform for your 20-person team
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="text-2xl font-bold text-emerald-300 mb-2">~6.5%</div>
            <div className="text-emerald-100/70 text-sm">Of initial development cost annually</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-300 mb-2">24/5</div>
            <div className="text-emerald-100/70 text-sm">Business hours support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-300 mb-2">20 users</div>
            <div className="text-emerald-100/70 text-sm">Supported team size</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MaintenanceCost;
