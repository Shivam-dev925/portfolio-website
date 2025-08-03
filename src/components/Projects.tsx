import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Raxa Healthcare Platform',
      description: 'Digital health solutions with ABDM integration and real-time features',
      longDescription: 'Integrated ABDM (Ayushman Bharat Digital Mission), NHA (National Health Authority), HPR (Healthcare Professional Registry), and HFR (Health Facility Registry) modules. Built digital health lockers, real-time chat features, and subscription flows with promocodes.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['React', 'Flutter', 'ABDM', 'NHA', 'Real-time Chat', 'CI/CD'],
      liveUrl: 'https://www.raxa.io/raxaDesktop/',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Raxa Assistant',
      description: 'AI-powered healthcare assistant for providers and patients',
      longDescription: 'Built an intelligent assistant for health seekers and healthcare providers. Integrated with AI Langchain agents, webSockets, and XMPP for real-time communication and intelligent responses.',
      image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'AI Langchain', 'WebSockets', 'XMPP'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.raxa.EMR',
      category: 'ai',
    },
    {
      id: 3,
      title: 'WTM App - Water Taxi Miami',
      description: 'Mobile app for water taxi booking with QR code validation',
      longDescription: 'Developed a Flutter-based mobile application for Water Taxi Miami. Implemented ticket booking system with QR code generation and verification process for ride providers to authenticate bookings.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'QR Code', 'Real-time Notifications'],
      liveUrl: 'https://apps.apple.com/in/app/water-taxi-miami/id1545116369',
      category: 'mobile',
    },
    {
      id: 4,
      title: 'Netflix Clone',
      description: 'Full-featured streaming platform clone with authentication',
      longDescription: 'React-based project using IMDB API. Integrated full functionality including login and signup with Google authentication and email/password using Firebase backend.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      technologies: ['React', 'Firebase', 'Google Auth', 'IMDB API'],
      liveUrl: 'https://example.com',
      category: 'frontend',
    },
    {
      id: 5,
      title: 'HumanWrk Mobile App',
      description: 'Productivity and employee engagement platform',
      longDescription: 'Contributed to the HumanWrk mobile app available on Android and iOS. Implemented secure authentication with Firebase, utilized BLoC state management, and refined UI/UX with modern app themes.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'BLoC', 'Dart'],
      liveUrl: 'https://humanwrk.com',
      category: 'mobile',
    },
    {
      id: 6,
      title: 'CI/CD Pipeline Monitoring',
      description: 'YAML-based pipelines for API status monitoring',
      longDescription: 'Created comprehensive pipelines to monitor API status that can be run manually. Implemented automated testing, deployment workflows, and health checks for continuous integration.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop',
      technologies: ['YAML', 'CI/CD', 'AWS Device Farm', 'AWS CodeCatalyst'],
      liveUrl: 'https://shivam-dev925.github.io/javascript_project/',
      category: 'devops',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Healthcare' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'ai', label: 'AI/ML' },
    { value: 'devops', label: 'DevOps' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'glass-effect hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="glass-effect rounded-2xl overflow-hidden card-hover h-full"
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center items-center">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : 20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaExternalLinkAlt size={16} />
                          <span className="text-sm font-medium">View Project</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium gradient-text cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <FaEye />
                      <span>View Details</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <FaCode />
              View All Projects
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;