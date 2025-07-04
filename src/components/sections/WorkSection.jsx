import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/img1.png'
import farmsellLogo from '../../assets/images/farmselllgo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const WorkSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "World's first AI-powered scheduling app",
      description: 'Your calm sleep made you ready for today.',
      category: 'UX/UI DESIGN',
      logo: [farmsellLogo],
      image: [img1],
      tags: ['Case study', 'Visit app'],
      customColor: '#fde2e2',
    },
    {
      id: 2,
      title: 'Modern E-Commerce Platform',
      description: 'A seamless shopping experience with delightful UI.',
      category: 'WEB DESIGN',
      logo: 'https://dummyimage.com/80x30/000/fff.png&text=Shoply',
      image: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      tags: ['Case study', 'Visit shop'],
      customColor: '#e2f5e2',
    },
    // add more slides as desired
  ];

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my design process and problem-solving approach.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          slidesPerView={1}
          effect="slide" // Change to "fade" for fade effect
          speed={600}
          className="relative"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                style={{
                  backgroundColor: project.customColor,
                }}
                className="w-full h-[80vh] rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 md:p-16"
              >
                {/* Left Side */}
                <div className="flex flex-col gap-6 md:w-1/2 text-center md:text-left">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={project.title}
                     className='w-40 logo-custome'
                    />
                  )}
                  <span className="text-sm uppercase tracking-wide font-medium text-muted-foreground">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {project.description}
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Button
                      variant="default"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      {project.tags[0]}
                    </Button>
                    <Button variant="outline">
                      {project.tags[1]}
                    </Button>
                  </div>
                </div>

                {/* Right Side */}
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                  <div className="w-40 md:w-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>



        {/* View All Projects + Swiper Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-between mt-12 gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex gap-3 ml-auto">
            <button
              className="swiper-button-prev flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary bg-transparent transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none"
              aria-label="Previous project"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            </button>
            <button
              className="swiper-button-next flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary bg-transparent transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none"
              aria-label="Next project"
              type="button"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
