
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
        {/* Fake Map Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlNWU1IiBvcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

        {/* City Areas */}
        <div className="absolute inset-0 p-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-300">
            Milano
          </div>
          
          {/* Roads */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 transform -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-neutral-200 transform -translate-x-1/2" />
          </div>

          {/* Markers */}
          {locations.chargingStations.map((location, index) => (
            <div
              key={`charging-${index}`}
              className="absolute group"
              style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
            >
              <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/20 flex items-center justify-center cursor-pointer">
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
              <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 flex items-center justify-center cursor-pointer">
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
              <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/20 flex items-center justify-center cursor-pointer">
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
