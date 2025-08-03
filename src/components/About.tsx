import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaGitAlt, FaAws, FaJs
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
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500', level: 88 },
    { name: 'Svelte', icon: SiSvelte, color: 'text-orange-600', level: 85 },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 82 },
    { name: 'CI/CD', icon: SiYaml, color: 'text-gray-600', level: 88 },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500', level: 90 },
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
            Frontend Engineer specializing in React, Flutter, and healthcare technology innovation
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
                I'm a Frontend Engineer at Raxa with expertise in React, Flutter, and modern web technologies. 
                I specialize in building healthcare solutions, integrating complex systems like ABDM, NHA, HPR, 
                and HFR modules while ensuring seamless user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Currently driving deployments, CI/CD pipelines, and E2E testing metrics. I'm passionate about 
                creating digital health solutions that make a real impact, from health lockers to real-time 
                chat features for healthcare providers and patients.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">10+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare Modules</p>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">2.5+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years at Raxa</p>
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

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            My <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {[
              { year: '2022 - Present', title: 'Frontend Engineer', company: 'Raxa', description: 'Driving deployments, CI/CD pipelines, E2E tests, and healthcare integrations' },
              { year: '2023', title: 'Raxa Assistant', company: 'Raxa', description: 'Built AI assistant for health seekers and providers with real-time chat' },
              { year: '2022', title: 'ABDM Integration', company: 'Raxa', description: 'Integrated Ayushman Bharat Digital Mission and National Health Authority modules' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-effect p-6 rounded-xl card-hover">
                    <span className="text-sm font-bold gradient-text">{item.year}</span>
                    <h4 className="text-lg font-bold mt-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.company}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;