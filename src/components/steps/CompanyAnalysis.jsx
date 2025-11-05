import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faMapMarkerAlt, 
  faUsers, 
  faStar,
  faShieldAlt,
  faHandshake,
  faChartLine,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

const CompanyAnalysis = () => {
  const stats = [
    { icon: faChartLine, value: '20+', label: 'Years of Experience' },
    { icon: faMapMarkerAlt, value: '7', label: 'Locations Across Switzerland' },
    { icon: faStar, value: '5.0/5', label: 'Google Rating' },
    { icon: faShieldAlt, value: 'FINMA', label: 'Regulated & Certified' }
  ];

  const locations = [
    { code: 'TG', city: 'Diessenhofen', address: 'Bahnhofstrasse 15, 8253' },
    { code: 'SG', city: 'Rapperswil', address: 'Obere Bahnhofstrasse 54, 8640' },
    { code: 'ZH', city: 'Brüttisellen', address: 'Ruchstuckstrasse 6, 8306' },
    { code: 'ZG', city: 'Cham', address: 'Riedstrasse 3, 6330' },
    { code: 'VD', city: 'Le Mont-sur-Lausanne', address: 'Chemin de Maillefer 37, 1052' },
    { code: 'GR', city: 'Roveredo', address: 'Via cantonale 210, 6535' },
    { code: 'TI', city: 'Manno', address: 'Centro Galleria 1, 6928' }
  ];

  const services = [
    {
      category: 'Private Customers',
      icon: faUsers,
      items: [
        'Vehicle & Travel Insurance',
        'Legal Protection',
        'Housing Insurance',
        'Precaution/Pension Planning',
        'Accident Insurance',
        'Health Insurance',
        'Personal Finances',
        'Wealth Creation',
        'Mortgages'
      ]
    },
    {
      category: 'Business Customers',
      icon: faBriefcase,
      items: [
        'Cyber Insurance',
        'Company Pension Schemes',
        'Accident & Illness Coverage',
        'Property & Liability Insurance',
        'Vehicle & Fleet Management'
      ]
    }
  ];

  const coreValues = [
    { value: 'Quality-Oriented', description: 'Highest standards of service and advice' },
    { value: 'Integrity', description: 'Honest and transparent in all dealings' },
    { value: 'Family-Oriented', description: 'Building lasting relationships with clients' }
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
          Company <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Analysis</span>
        </h2>
        <p className="text-2xl text-emerald-100/80 max-w-4xl mx-auto">
          Understanding the business to build the perfect CRM solution
        </p>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/30 text-center"
          >
            <div className="text-emerald-400 text-4xl mb-3">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="text-3xl font-bold text-emerald-50 mb-2">{stat.value}</div>
            <div className="text-sm text-emerald-100/70">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Company Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-10 border border-emerald-700/30 mb-12 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="text-emerald-400 text-5xl">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-emerald-50">Insurance & Financial Advisory</h3>
            <p className="text-emerald-100/70 text-lg">Swiss Excellence Since 2004</p>
          </div>
        </div>

        <p className="text-xl text-emerald-100/80 leading-relaxed mb-6">
          A leading Swiss insurance and financial advisory firm providing comprehensive support for all 
          matters related to insurance, finance, and pensions. Operating across multiple locations with 
          a strong focus on customer satisfaction and personalized service.
        </p>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-4">
          {coreValues.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <FontAwesomeIcon icon={faHandshake} className="text-emerald-400" />
                <h4 className="font-semibold text-emerald-50">{item.value}</h4>
              </div>
              <p className="text-sm text-emerald-100/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-4xl font-bold text-emerald-50 text-center mb-8">
          Service Portfolio
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-700/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-emerald-400 text-3xl">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h4 className="text-2xl font-bold text-emerald-50">{service.category}</h4>
              </div>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 text-emerald-100/70"
                  >
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-emerald-700/30">
                <p className="text-emerald-300 font-semibold">
                  {service.items.length}+ Products
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Locations Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-10 border border-emerald-700/30 shadow-2xl"
      >
        <h3 className="text-4xl font-bold text-emerald-50 text-center mb-8">
          7 Locations Across Switzerland
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
              className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/30"
            >
              <div className="flex items-start gap-3">
                <div className="text-emerald-400 text-xl mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {location.code}
                    </span>
                    <h4 className="font-semibold text-emerald-50">{location.city}</h4>
                  </div>
                  <p className="text-sm text-emerald-100/60">{location.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-center"
        >
          <p className="text-emerald-300/60 text-sm">
            Multi-location operations require centralized customer data and seamless collaboration
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompanyAnalysis;
