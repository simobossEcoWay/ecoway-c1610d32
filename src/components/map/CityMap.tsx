
import React from 'react';
import { MapPin, Bike, TreeDeciduous } from 'lucide-react';

const CityMap = () => {
  // Sample data for Milan locations
  const locations = {
    chargingStations: [
      { name: "Stazione di ricarica Centro", coordinates: { x: 45, y: 45 } },
      { name: "Stazione di ricarica Navigli", coordinates: { x: 25, y: 65 } },
      { name: "Stazione di ricarica Garibaldi", coordinates: { x: 65, y: 25 } }
    ],
    bikeRentals: [
      { name: "Noleggio Bici Duomo", coordinates: { x: 50, y: 50 } },
      { name: "Noleggio Bici Centrale", coordinates: { x: 30, y: 30 } },
      { name: "Noleggio Bici Sempione", coordinates: { x: 70, y: 70 } }
    ],
    parks: [
      { name: "Parco Sempione", coordinates: { x: 20, y: 40 } },
      { name: "Giardini Pubblici", coordinates: { x: 60, y: 35 } },
      { name: "Parco Biblioteca degli Alberi", coordinates: { x: 80, y: 55 } }
    ]
  };

  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden bg-neutral-900">
        {/* Background Image */}
        <img
          src="/lovable-uploads/6dc9aa9b-4a53-4263-8e48-29a6901852c7.png"
          alt="Mappa di Milano"
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Points of Interest */}
        {locations.chargingStations.map((location, index) => (
          <div
            key={`charging-${index}`}
            className="absolute group"
            style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
          >
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 border border-[#ea384c] flex items-center justify-center cursor-pointer">
              <MapPin className="w-6 h-6 text-[#ea384c]" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
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
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 border border-accent-blue flex items-center justify-center cursor-pointer">
              <Bike className="w-6 h-6 text-accent-blue" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
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
            <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 border border-accent-green flex items-center justify-center cursor-pointer">
              <TreeDeciduous className="w-6 h-6 text-accent-green" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              {location.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black/40 border border-[#ea384c] flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#ea384c]" />
          </div>
          <span className="text-sm text-neutral-300">Stazioni di ricarica</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black/40 border border-accent-blue flex items-center justify-center">
            <Bike className="w-5 h-5 text-accent-blue" />
          </div>
          <span className="text-sm text-neutral-300">Noleggio bici</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black/40 border border-accent-green flex items-center justify-center">
            <TreeDeciduous className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm text-neutral-300">Parchi</span>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
