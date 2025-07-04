import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'BSc in Software Engineering',
      institution: 'Cavendish University',
      period: '2021 - 2025',
      location: 'Kampala, Uganda',
      status: 'In Progress',
      description: 'Comprehensive program covering software development, system design, and project management with focus on modern technologies.',
      highlights: [
        'Specialized in Human-Computer Interaction',
        'Led university design club with 50+ members',
        'Completed capstone project on accessible design'
      ],
      gpa: '3.8/4.0'
    },
    {
      degree: 'Certificate in Graphic Design',
      institution: 'Fine Graphics School',
      period: '2020',
      location: 'Kampala, Uganda',
      status: 'Completed',
      description: 'Intensive program focused on visual design principles, typography, and brand identity development.',
      highlights: [
        'Graduated with distinction',
        'Won best portfolio award',
        'Completed 10+ real client projects'
      ],
      gpa: 'Distinction'
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation that shaped my design and technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 space-y-6 hover:bg-primary/5 transition-colors"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        edu.status === 'Completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">{edu.institution}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Award className="h-4 w-4 text-primary" />
                  Key Highlights
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GPA */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Academic Performance</span>
                  <span className="text-sm font-bold text-primary">{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond formal education, I'm committed to staying current with design trends and technologies. 
              I regularly participate in design workshops, online courses, and industry conferences to 
              enhance my skills and knowledge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;