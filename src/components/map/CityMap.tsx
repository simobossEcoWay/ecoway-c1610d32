
import React from 'react';
import { MapPin, Bike, TreeDeciduous } from 'lucide-react';

const CityMap = () => {
  // Sample data for city locations
  const locations = {
    chargingStations: [
      { name: "Stazione di ricarica Centro", coordinates: { x: 45, y: 45 } },
      { name: "Stazione di ricarica Nord", coordinates: { x: 25, y: 65 } },
      { name: "Stazione di ricarica Est", coordinates: { x: 65, y: 25 } }
    ],
    bikeRentals: [
      { name: "Noleggio Bici Centro", coordinates: { x: 50, y: 50 } },
      { name: "Noleggio Bici Stazione", coordinates: { x: 30, y: 30 } },
      { name: "Noleggio Bici Parco", coordinates: { x: 70, y: 70 } }
    ],
    parks: [
      { name: "Parco Centrale", coordinates: { x: 20, y: 40 } },
      { name: "Giardini Pubblici", coordinates: { x: 60, y: 35 } },
      { name: "Parco Est", coordinates: { x: 80, y: 55 } }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden">
        {/* Base Map Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/41a31c34-ce3f-413a-b88d-ef7a956cd7f0.jpg")',
            filter: 'brightness(1) contrast(1)'
          }}
        />
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/5" />

        {/* City Label */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <div className="text-4xl font-bold bg-white/90 px-6 py-2 rounded-full shadow-sm text-neutral-800">
            Tua Città
          </div>
        </div>

        {/* Points of Interest */}
        {locations.chargingStations.map((location, index) => (
          <div
            key={`charging-${index}`}
            className="absolute group"
            style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
          >
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-[#ea384c] flex items-center justify-center cursor-pointer shadow-lg">
              <MapPin className="w-6 h-6 text-[#ea384c]" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-200">
              {location.name}
            </div>
          </div>
        ))}

        {locations.bikeRentals.map((location, index) => (
          <div
            key={`bike-${index}`}
            className="absolute group"
            style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
          >
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center cursor-pointer shadow-lg">
              <Bike className="w-6 h-6 text-accent-blue" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-200">
              {location.name}
            </div>
          </div>
        ))}

        {locations.parks.map((location, index) => (
          <div
            key={`park-${index}`}
            className="absolute group"
            style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
          >
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-accent-green flex items-center justify-center cursor-pointer shadow-lg">
              <TreeDeciduous className="w-6 h-6 text-accent-green" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-200">
              {location.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white border-2 border-[#ea384c] flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#ea384c]" />
          </div>
          <span className="text-sm">Stazioni di ricarica</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center">
            <Bike className="w-5 h-5 text-accent-blue" />
          </div>
          <span className="text-sm">Noleggio bici</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white border-2 border-accent-green flex items-center justify-center">
            <TreeDeciduous className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm">Parchi</span>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
