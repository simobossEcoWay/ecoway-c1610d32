
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
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
        {/* Map Grid Background with stronger visibility */}
        <div className="absolute inset-0">
          {/* Vertical Lines */}
          <div className="absolute inset-0 flex justify-between px-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-px h-full bg-neutral-200" />
            ))}
          </div>
          {/* Horizontal Lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-px bg-neutral-200" />
            ))}
          </div>
        </div>

        {/* City Areas */}
        <div className="absolute inset-0 p-8">
          {/* City Center Indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-neutral-300/50">
            Milano
          </div>
          
          {/* Main Roads */}
          <div className="absolute inset-0">
            {/* Horizontal Main Road */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-neutral-200/70 transform -translate-y-1/2" />
            {/* Vertical Main Road */}
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-neutral-200/70 transform -translate-x-1/2" />
            
            {/* Diagonal Roads */}
            <div className="absolute h-[1px] w-[200%] top-0 left-0 bg-neutral-200 origin-bottom-right rotate-45 transform -translate-x-1/2" />
            <div className="absolute h-[1px] w-[200%] top-0 right-0 bg-neutral-200 origin-bottom-left -rotate-45 transform translate-x-1/2" />
          </div>

          {/* Areas Highlights */}
          <div className="absolute inset-8">
            {/* Centro */}
            <div className="absolute top-1/3 left-1/3 right-1/3 bottom-1/3 bg-neutral-200/20 rounded-full" />
            {/* Navigli */}
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neutral-200/20 rounded-tr-3xl" />
            {/* Garibaldi */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neutral-200/20 rounded-bl-3xl" />
          </div>

          {/* Markers */}
          {locations.chargingStations.map((location, index) => (
            <div
              key={`charging-${index}`}
              className="absolute group"
              style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
            >
              <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/20 flex items-center justify-center cursor-pointer shadow-lg">
                <MapPin className="w-5 h-5 text-accent-purple" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
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
              <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 flex items-center justify-center cursor-pointer shadow-lg">
                <Bike className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
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
              <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/20 flex items-center justify-center cursor-pointer shadow-lg">
                <TreeDeciduous className="w-5 h-5 text-accent-green" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {location.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent-purple" />
          </div>
          <span className="text-sm">Stazioni di ricarica</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
            <Bike className="w-5 h-5 text-accent-blue" />
          </div>
          <span className="text-sm">Noleggio bici</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent-green/20 flex items-center justify-center">
            <TreeDeciduous className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm">Parchi</span>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
