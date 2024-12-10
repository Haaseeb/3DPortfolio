import React from 'react';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80"
            alt="Haseeb Ur Rehman"
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white/20 shadow-xl"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Haseeb Ur Rehman
        </h1>
        <h2 className="text-2xl text-blue-200 mb-6">3D Architectural Visualization Artist</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Crafting photorealistic architectural visualizations with Blender expertise, transforming concepts into stunning visual experiences
        </p>
        <div className="flex justify-center gap-6">
          <SocialLink 
            href="https://www.fiverr.com/haseebrehman262?up_rollout=true" 
            icon={<MessageSquare />} 
            label="Fiverr" 
          />
          <SocialLink 
            href="https://www.linkedin.com/in/haseeb-rehman-82128a294/" 
            icon={<Linkedin />} 
            label="LinkedIn" 
          />
          <SocialLink 
            href="mailto:haseebrehmannaul55@gmail.com" 
            icon={<Mail />} 
            label="Email" 
          />
        </div>
      </div>
    </header>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20 backdrop-blur-sm"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}