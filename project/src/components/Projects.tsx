import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: 'Modern Villa Exterior',
    description: 'Exterior visualization with landscaping and lighting',
    image: 'https://ibb.co/vzDF3WK',
    technologies: ['Blender', 'Exterior Rendering', 'Dusk Scene'],
    demoUrl: '#',
  },
  {
    title: 'Contemporary Living Room',
    description: 'Interior visualization showcasing modern design and natural lighting',
    image: 'https://ibb.co/FqygqVj',
    technologies: ['Blender', 'Interior Design', 'Lighting Study'],
    demoUrl: '#',
  },
  {
    title: 'Aerial View',
    description: 'Aerial view showcasing modern interior design',
    image: 'https://ibb.co/grwvgvX',
    technologies: ['Blender', 'Interior', 'Aerial View'],
    demoUrl: '#',
  },
  {
    title: 'Exterior Visualization',
    description: 'High-end residential exterior',
    image: 'https://ibb.co/tmNrFvw',
    technologies: ['Blender', 'Interior Visualization', 'Material Design'],
    demoUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={demoUrl}
            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Play size={24} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
