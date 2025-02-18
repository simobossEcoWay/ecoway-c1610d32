
import React from 'react';
import { MapPin, Bike, Trees, TreeDeciduous } from 'lucide-react';

const CityMap = () => {
  // Sample data for Milan locations based on major roads and commercial areas
  const locations = {
    chargingStations: [
      { name: "Stazione di ricarica Duomo", coordinates: { x: 48, y: 45 }, size: "large" },
      { name: "Stazione di ricarica Centrale", coordinates: { x: 55, y: 25 }, size: "large" },
      { name: "Stazione di ricarica Garibaldi", coordinates: { x: 58, y: 32 }, size: "medium" },
      { name: "Stazione di ricarica Navigli", coordinates: { x: 35, y: 62 }, size: "medium" },
      { name: "Stazione di ricarica Porta Romana", coordinates: { x: 52, y: 65 }, size: "medium" },
      { name: "Stazione di ricarica City Life", coordinates: { x: 28, y: 32 }, size: "large" },
      { name: "Stazione di ricarica Porta Venezia", coordinates: { x: 65, y: 35 }, size: "medium" },
      { name: "Stazione di ricarica Sempione", coordinates: { x: 35, y: 38 }, size: "medium" },
      { name: "Stazione di ricarica Buenos Aires", coordinates: { x: 68, y: 28 }, size: "medium" },
      { name: "Stazione di ricarica Porta Genova", coordinates: { x: 38, y: 55 }, size: "small" },
      { name: "Stazione di ricarica Lambrate", coordinates: { x: 75, y: 42 }, size: "small" },
      { name: "Stazione di ricarica Isola", coordinates: { x: 55, y: 28 }, size: "small" }
    ],
    bikeRentals: [
      { name: "BikeMi Duomo", coordinates: { x: 50, y: 48 }, size: "large" },
      { name: "BikeMi Centrale", coordinates: { x: 58, y: 22 }, size: "large" },
      { name: "BikeMi Sempione", coordinates: { x: 32, y: 35 }, size: "large" },
      { name: "BikeMi Navigli", coordinates: { x: 32, y: 58 }, size: "medium" },
      { name: "BikeMi Porta Venezia", coordinates: { x: 62, y: 32 }, size: "medium" },
      { name: "BikeMi Garibaldi", coordinates: { x: 52, y: 30 }, size: "medium" },
      { name: "BikeMi City Life", coordinates: { x: 25, y: 35 }, size: "medium" },
      { name: "BikeMi Buenos Aires", coordinates: { x: 65, y: 30 }, size: "medium" },
      { name: "BikeMi Porta Romana", coordinates: { x: 55, y: 62 }, size: "small" },
      { name: "BikeMi Brera", coordinates: { x: 45, y: 42 }, size: "small" },
      { name: "BikeMi Isola", coordinates: { x: 52, y: 25 }, size: "small" },
      { name: "BikeMi Tortona", coordinates: { x: 35, y: 52 }, size: "small" }
    ],
    parks: [
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
        
        {/* Charging Stations */}
        {locations.chargingStations.map((station, index) => (
          <div
            key={`charging-${index}`}
            className="absolute group"
            style={{ left: `${station.coordinates.x}%`, top: `${station.coordinates.y}%` }}
          >
            <div className={`
              w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full 
              bg-black/40 border border-[#ea384c] 
              flex items-center justify-center cursor-pointer
              ${station.size === 'large' ? 'scale-125' : station.size === 'small' ? 'scale-75' : ''}
            `}>
              <MapPin className="w-6 h-6 text-[#ea384c]" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              {station.name}
            </div>
          </div>
        ))}

        {/* Bike Rentals */}
        {locations.bikeRentals.map((rental, index) => (
          <div
            key={`bike-${index}`}
            className="absolute group"
            style={{ left: `${rental.coordinates.x}%`, top: `${rental.coordinates.y}%` }}
          >
            <div className={`
              w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full 
              bg-black/40 border border-accent-blue 
              flex items-center justify-center cursor-pointer
              ${rental.size === 'large' ? 'scale-125' : rental.size === 'small' ? 'scale-75' : ''}
            `}>
              <Bike className="w-6 h-6 text-accent-blue" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              {rental.name}
            </div>
          </div>
        ))}

        {/* Parks */}
        {locations.parks.map((park, index) => (
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
            <Trees className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm text-neutral-300">Parchi</span>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
