import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws,
  FaHtml5, FaCss3Alt, FaJs, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiRedis, SiGraphql, SiFirebase 
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
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 90 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white', level: 88 },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 85 },
    { name: 'Python', icon: FaPython, color: 'text-yellow-500', level: 82 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500', level: 92 },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: 80 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700', level: 78 },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 75 },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 70 },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600', level: 85 },
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
            Passionate developer with a love for creating beautiful, functional web experiences
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
                I'm a passionate full-stack developer with over 5 years of experience in building 
                modern web applications. I love turning complex problems into simple, beautiful, 
                and intuitive solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">50+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-3xl font-bold gradient-text">5+</h4>
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
              { year: '2023', title: 'Senior Full Stack Developer', company: 'Tech Corp', description: 'Leading development of scalable web applications' },
              { year: '2021', title: 'Full Stack Developer', company: 'StartupXYZ', description: 'Built multiple features for SaaS platform' },
              { year: '2019', title: 'Junior Developer', company: 'Web Agency', description: 'Started my professional journey' },
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