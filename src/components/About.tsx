import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaAws, FaJs
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiFlutter, SiDart,
  SiSvelte, SiYaml
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  color: string;
  level: number;
}

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    { name: 'React', icon: FaReact, color: 'text-blue-400', level: 95 },
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-500', level: 92 },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 90 },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 93 },
    { name: 'Dart', icon: SiDart, color: 'text-blue-400', level: 90 },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500', level: 88 },
    { name: 'Svelte', icon: SiSvelte, color: 'text-orange-600', level: 85 },
    { name: 'CI/CD', icon: SiYaml, color: 'text-gray-600', level: 90 },
    { name: 'AWS CodeCatalyst', icon: FaAws, color: 'text-orange-500', level: 85 },
    { name: 'AWS Device Farm', icon: FaAws, color: 'text-orange-400', level: 82 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Frontend Engineer experienced in React, Flutter, and CI/CD with focus on healthcare innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a Lead Frontend Developer at Raxa with 4+ years of experience in React, Flutter, and CI/CD. I build, ship, and scale
                production features end-to-end with a focus on reliability, performance, and user experience.
                I've integrated complex healthcare systems like ABDM, NHA, HPR, and HFR modules.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I own CI/CD pipelines and deployment automation to increase release cadence and stability.
                My work includes migrating legacy Ext.js to React, delivering Raxa Assistant with real-time chat,
                and implementing QCI-certified digital health record lockers and doctor workflows.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">5+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Major Projects</p>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">4+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              My <span className="gradient-text">Skills</span>
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="glass-effect p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <skill.icon className={`text-4xl mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                    
                    {/* Skill level tooltip */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap pointer-events-none"
                    >
                      {skill.level}%
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-purple-600 tracking-wider">EXPERIENCE</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-2">
              My Professional <span className="gradient-text">Journey</span>
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {/* Frontend Engineer at Raxa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative mb-12"
            >
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <div className="ml-16 glass-effect p-8 rounded-2xl">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold">Lead Frontend Developer</h4>
                    <p className="text-lg font-semibold gradient-text">Raxa Health Information Services</p>
                    <div className="flex gap-4 mt-2">
                      <a href="https://www.raxa.io" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        🌐 Website
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.raxa.EMR" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline flex items-center gap-1">
                        ▶ Play Store
                      </a>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    📅 May 2022 - Present
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Owned CI/CD pipelines and deployment automation to increase release cadence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Integrated ABDM, NHA, HPR, HFR modules for secure data flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Migrated onboarding from legacy Ext.js to React</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Delivered Raxa Assistant with real-time chat features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Built QCI-certified digital health record lockers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Implemented doctor workflows and patient systems</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-6 mt-6">
                  <span className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    📍 Delhi, India
                  </span>
                  <span className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    🏥 Healthcare Technology
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Key Projects */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              <div className="ml-16 glass-effect p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Key Achievements at Raxa</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-bold text-sm gradient-text">ABDM Scan & Share (2025)</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Implemented ABHA address creation, login, and scan-share feature to bypass OPD queues</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-bold text-sm gradient-text">Raxa Assistant (2023)</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">AI assistant with real-time chat for health seekers and providers</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-bold text-sm gradient-text">ABDM Integration (2022)</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Integrated Ayushman Bharat Digital Mission modules</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-bold text-sm gradient-text">CI/CD Pipelines</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Authored YAML pipelines for API monitoring and deployment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;