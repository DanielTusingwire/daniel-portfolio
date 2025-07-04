import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Product Design Engineer',
      company: 'Farmsell',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading design initiatives for agricultural technology platform, bridging design and development to create scalable solutions.',
      achievements: [
        'Designed and implemented design system used across 5+ products',
        'Improved user engagement by 40% through UX optimization',
        'Led cross-functional team of 8 designers and developers'
      ],
      skills: ['Product Design', 'Design Systems', 'Frontend Development', 'Team Leadership']
    },
    {
      title: 'Product Designer',
      company: 'Tallen',
      period: '2021 - 2023',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      description: 'Responsible for end-to-end product design, from user research to final implementation, for multiple digital products.',
      achievements: [
        'Redesigned core product resulting in 60% increase in user satisfaction',
        'Conducted user research with 200+ participants',
        'Mentored 3 junior designers and interns'
      ],
      skills: ['User Research', 'Prototyping', 'UI Design', 'Usability Testing']
    },
    {
      title: 'UI/UX Design Intern',
      company: 'Tallen',
      period: '2020',
      location: 'Kampala, Uganda',
      type: 'Internship',
      description: 'Started my design journey learning fundamental UX principles and contributing to various design projects.',
      achievements: [
        'Completed 5 major design projects during internship',
        'Learned industry-standard design tools and methodologies',
        'Received outstanding intern performance rating'
      ],
      skills: ['UI Design', 'Wireframing', 'Design Thinking', 'Figma']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through different roles and the impact I've made along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-2xl p-8 space-y-6"
                  >
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                        <span className="text-muted-foreground">•</span>
                        <span className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                          {experience.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold">{experience.title}</h3>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-semibold text-foreground">{experience.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Award className="h-4 w-4 text-primary" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold">Skills & Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;