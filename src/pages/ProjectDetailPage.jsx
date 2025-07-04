import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API or CMS
  const projects = {
    1: {
      title: 'E-Commerce Mobile App',
      subtitle: 'Revolutionizing Mobile Shopping Experience',
      category: 'Mobile Design',
      duration: '3 months',
      team: '4 people',
      year: '2023',
      client: 'ShopEasy Inc.',
      overview: 'A comprehensive mobile shopping experience designed to increase user engagement and conversion rates through intuitive navigation and seamless checkout process.',
      problem: 'The existing mobile app had a 68% cart abandonment rate and poor user reviews citing confusing navigation and lengthy checkout process.',
      solution: 'Redesigned the entire user flow with focus on simplicity, implemented one-click checkout, and created a personalized shopping experience.',
      process: [
        'User Research & Interviews',
        'Competitive Analysis',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Implementation Support'
      ],
      results: [
        '45% reduction in cart abandonment',
        '60% increase in user engagement',
        '4.8/5 app store rating',
        '25% increase in conversion rate'
      ],
      tools: ['Figma', 'Principle', 'Maze', 'Hotjar'],
      images: [
        'E-commerce mobile app home screen with product categories and search',
        'Product detail page showing images, reviews and add to cart button',
        'Shopping cart and checkout flow with payment options',
        'User profile and order history interface'
      ]
    },
    2: {
      title: 'SaaS Dashboard',
      subtitle: 'Data-Driven Project Management Platform',
      category: 'Web Design',
      duration: '4 months',
      team: '6 people',
      year: '2023',
      client: 'ProjectFlow',
      overview: 'A comprehensive dashboard design for a project management platform that helps teams visualize data and manage workflows efficiently.',
      problem: 'Users were overwhelmed by data and couldn\'t quickly access the information they needed to make decisions.',
      solution: 'Created a clean, hierarchical dashboard with customizable widgets and clear data visualization.',
      process: [
        'Stakeholder Interviews',
        'User Journey Mapping',
        'Data Architecture Planning',
        'Dashboard Wireframing',
        'Visual Design System',
        'Interactive Prototyping',
        'Developer Handoff'
      ],
      results: [
        '40% faster task completion',
        '85% user satisfaction score',
        '30% reduction in support tickets',
        'Successful product launch'
      ],
      tools: ['Figma', 'FigJam', 'Principle', 'Zeplin'],
      images: [
        'Clean SaaS dashboard overview with key metrics and charts',
        'Project management interface with kanban boards and task lists',
        'Data visualization charts and analytics dashboard',
        'Team collaboration features and communication tools'
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    navigate('/404');
    return null;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{project.title} - Daniel Tusingwire</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Back Button */}
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                className="group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Work
              </Button>

              {/* Project Header */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="grid md:grid-cols-4 gap-6 pt-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Team Size</span>
                    </div>
                    <p className="font-semibold">{project.team}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Year</span>
                    </div>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Client</span>
                    </div>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Images */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img  
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-red-500">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-primary">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              </div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold">Design Process</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.process.map((step, index) => (
                    <div
                      key={index}
                      className="glass-effect rounded-lg p-4 text-center space-y-2"
                    >
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                        {index + 1}
                      </div>
                      <p className="font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold">Results & Impact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 glass-effect rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Tools Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold">Interested in working together?</h3>
              <p className="text-muted-foreground">
                I'm always excited to take on new challenges and create meaningful digital experiences.
              </p>
              <Button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-full"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;