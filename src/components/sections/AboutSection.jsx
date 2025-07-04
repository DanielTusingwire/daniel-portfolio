import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCards = [
    {
      tool: 'Framer',
      description: 'No code website builder tool',
      proficiency: '92%'
    },
    {
      tool: 'Illustrator',
      description: 'Professional graphic software',
      proficiency: '74%'
    },
    {
      tool: 'Slack',
      description: 'User interface design tool',
      proficiency: '80%'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground dark:text-white">
              <p className="dark:text-white">
                I am passionate about the intersection of design, usability, and problem-solving.
                I strive to create digital experiences that are not only functional, but emotionally
                engaging and delightfully simple.
              </p>
              <p className="dark:text-white">
                My mission is to elevate product experiences through human-centered design, clear
                visual hierarchy, and systems thinking. I believe thoughtful design has the power
                to solve real-world problems at scale.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground dark:text-white">
                I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the principles that underpin effective interaction design, providing me with the knowledge to create designs that seamlessly blend aesthetics and functionality.
              </p>
            </div>

            <div className="space-y-6">
              {skillCards.map((skill, index) => (
                <motion.div
                  key={skill.tool}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between min-h-[120px] md:min-h-[140px] bg-[hsl(var(--primary))] rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-1 text-left">
                    <h4 className="text-xl md:text-2xl font-bold text-[#111] dark:text-[#111]">{skill.tool}</h4>
                    <p className="text-base md:text-lg text-[#222] dark:text-[#111] opacity-80">{skill.description}</p>
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-[#ffff] dark:text-[#111] text-right flex items-center h-full">
                    {skill.proficiency}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;