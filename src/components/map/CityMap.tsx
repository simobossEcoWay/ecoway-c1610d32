
import React from 'react';
import { TreeDeciduous, Trees } from 'lucide-react';

const CityMap = () => {
  // Sample data for Milan parks based on visible green areas in the image
  const parks = [
    { name: "Parco Sempione", coordinates: { x: 35, y: 32 }, size: "large" },
    { name: "Giardini Pubblici Indro Montanelli", coordinates: { x: 68, y: 28 }, size: "large" },
    { name: "Parco Biblioteca degli Alberi", coordinates: { x: 58, y: 22 }, size: "medium" },
    { name: "Giardini della Guastalla", coordinates: { x: 52, y: 48 }, size: "small" },
    { name: "Parco delle Basiliche", coordinates: { x: 45, y: 62 }, size: "medium" },
    { name: "Parco Ravizza", coordinates: { x: 42, y: 75 }, size: "medium" },
    { name: "Giardini Pubblici di Porta Venezia", coordinates: { x: 72, y: 35 }, size: "medium" },
    { name: "Parco Solari", coordinates: { x: 28, y: 58 }, size: "small" },
    { name: "Giardino della Rotonda della Besana", coordinates: { x: 62, y: 52 }, size: "small" },
    { name: "Parco Don Giussani", coordinates: { x: 22, y: 45 }, size: "medium" },
    { name: "Giardini di Via Palestro", coordinates: { x: 65, y: 32 }, size: "small" },
    { name: "Parco Papa Giovanni Paolo II", coordinates: { x: 32, y: 68 }, size: "medium" }
  ];

  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden bg-neutral-900">
        {/* Background Image */}
        <img
          src="/lovable-uploads/6dc9aa9b-4a53-4263-8e48-29a6901852c7.png"
          alt="Mappa di Milano"
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Parks */}
        {parks.map((park, index) => (
          <div
            key={`park-${index}`}
            className="absolute group"
            style={{ left: `${park.coordinates.x}%`, top: `${park.coordinates.y}%` }}
          >
            <div className={`
              w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full 
              bg-black/40 border border-accent-green 
              flex items-center justify-center cursor-pointer
              ${park.size === 'large' ? 'scale-125' : park.size === 'small' ? 'scale-75' : ''}
            `}>
              {park.size === 'large' ? (
                <Trees className="w-6 h-6 text-accent-green" />
              ) : (
                <TreeDeciduous className="w-6 h-6 text-accent-green" />
              )}
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              {park.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black/40 border border-accent-green flex items-center justify-center">
            <Trees className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm text-neutral-300">Parchi Maggiori</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black/40 border border-accent-green flex items-center justify-center">
            <TreeDeciduous className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm text-neutral-300">Parchi e Giardini</span>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
