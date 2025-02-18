
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
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden bg-neutral-50 border-2 border-neutral-200">
        {/* Base Map Structure */}
        <div className="absolute inset-0">
          {/* Districts Background */}
          <div className="absolute inset-0 p-4">
            {/* Central District */}
            <div className="absolute inset-[20%] bg-neutral-100 rounded-lg border border-neutral-200" />
            {/* North District */}
            <div className="absolute top-4 inset-x-[15%] h-[15%] bg-neutral-100 rounded-lg border border-neutral-200" />
            {/* South District */}
            <div className="absolute bottom-4 inset-x-[15%] h-[15%] bg-neutral-100 rounded-lg border border-neutral-200" />
            {/* East District */}
            <div className="absolute right-4 inset-y-[15%] w-[15%] bg-neutral-100 rounded-lg border border-neutral-200" />
            {/* West District */}
            <div className="absolute left-4 inset-y-[15%] w-[15%] bg-neutral-100 rounded-lg border border-neutral-200" />
          </div>

          {/* Major Roads */}
          <div className="absolute inset-0">
            {/* Central Cross */}
            <div className="absolute left-0 right-0 top-1/2 h-4 bg-neutral-200 -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-neutral-200 -translate-x-1/2" />
            
            {/* Ring Road */}
            <div className="absolute inset-[15%] border-8 border-neutral-200 rounded-full" />
          </div>

          {/* City Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-4xl font-bold text-neutral-400 bg-white/80 px-6 py-2 rounded-full shadow-sm">
              Milano
            </div>
          </div>

          {/* Points of Interest */}
          {locations.chargingStations.map((location, index) => (
            <div
              key={`charging-${index}`}
              className="absolute group"
              style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
            >
              <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-accent-purple flex items-center justify-center cursor-pointer shadow-lg">
                <MapPin className="w-6 h-6 text-accent-purple" />
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
      </div>

      <div className="flex justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white border-2 border-accent-purple flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent-purple" />
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
