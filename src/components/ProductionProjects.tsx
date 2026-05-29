"use client";
import { motion } from 'motion/react';
import { COLORS } from '@/constants';

const PROD_PROJECTS = [
  {
    title: 'Sticky Fingers',
    role: 'Producer',
    description: 'Managed a cross-functional team of artists, animators, and developers. Oversaw the entire production pipeline from concept to final delivery, ensuring milestones were met on schedule while maintaining high creative standards.',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop',
    tags: ['Team Management', 'Pipeline Setup', 'Scheduling'],
    color: COLORS.purple
  },
  {
    title: 'AnimationReference.org',
    role: 'Project Manager',
    description: 'Spearheaded the development of a comprehensive reference library platform for animators. Managed content curation, coordinated with developers for the site build, and oversaw user testing and launch.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Product Management', 'Web Platform', 'Curation'],
    color: COLORS.blue
  },
  {
    title: 'Web Design Agency',
    role: 'Founder & Managing Director',
    description: 'Established and directed a boutique web design agency. Handled all client communications, defined project scopes, managed freelance resources, and acted as the primary liaison between technical teams and stakeholders. This heavily honed my ability to balance creative vision with business goals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Client Relations', 'Resource Allocation', 'Scope Management'],
    color: COLORS.yellow
  }
];

export default function ProductionProjects() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col space-y-12 lg:space-y-24">
          {PROD_PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="flex-1 w-full relative aspect-[4/3] lg:aspect-square max-h-[600px] rounded-[32px] lg:rounded-[48px] overflow-hidden border-8 border-black shadow-[15px_15px_0px_rgba(34,34,34,1)] group">
                <img 
                  src={(project.image) || undefined} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex-1 flex flex-col space-y-6 lg:space-y-8">
                <div>
                  <span 
                    className="inline-block px-4 py-2 text-xs lg:text-sm font-bold uppercase tracking-widest rounded-full border-2 border-black mb-6"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.role}
                  </span>
                  <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-6">
                    {project.title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-black/70 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-black text-white text-xs lg:text-sm font-bold uppercase rounded-xl tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
