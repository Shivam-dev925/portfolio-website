import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
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
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with payment integration',
      longDescription: 'Built a complete e-commerce solution with user authentication, product management, shopping cart, and secure payment processing using Stripe.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'Developed a real-time task management application with drag-and-drop functionality, team collaboration features, and activity tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'AI Image Generator',
      description: 'Web app that generates images using AI models',
      longDescription: 'Created an innovative web application that leverages AI models to generate unique images based on user prompts and preferences.',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=600&fit=crop',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'ai',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and interactive maps',
      longDescription: 'Designed and built a responsive weather dashboard featuring real-time data, interactive maps, and detailed forecasts with stunning visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Mapbox'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'frontend',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media performance',
      longDescription: 'Built a comprehensive analytics platform that aggregates data from multiple social media platforms and provides actionable insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'D3.js', 'Node.js', 'Redis', 'GraphQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'fullstack',
    },
    {
      id: 6,
      title: 'Mobile Banking UI',
      description: 'Modern UI design for mobile banking application',
      longDescription: 'Crafted an intuitive and secure mobile banking interface with biometric authentication, transaction history, and budget tracking features.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      technologies: ['React Native', 'TypeScript', 'Styled Components'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'mobile',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'ai', label: 'AI/ML' },
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
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: hoveredProject === project.id ? 0 : -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaGithub size={20} />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: hoveredProject === project.id ? 0 : 20 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          <FaExternalLinkAlt size={20} />
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