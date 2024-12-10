import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            As a professional 3D architectural visualization artist, I specialize in creating
            photorealistic renderings and animations that bring architectural designs to life.
            With extensive experience in both exterior and interior visualizations, I help
            clients and stakeholders envision spaces before they're built.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My approach combines technical precision with artistic vision, resulting in
            compelling imagery that effectively communicates design intent and helps sell
            properties. I take pride in my attention to detail and ability to create
            immersive experiences that showcase architectural projects in their best light.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <Skill title="Expertise" items={['Exterior Visualization', 'Interior Rendering', 'Virtual Walkthrough']} />
            <Skill title="Software" items={['Blender', 'V-Ray', 'Lumion']} />
            <Skill title="Specialties" items={['Residential', 'Commercial', 'Hospitality']} />
            <Skill title="Deliverables" items={['3D Renders', 'Animations', 'VR Tours']} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}