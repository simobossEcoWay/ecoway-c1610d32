
import React from 'react';
import { Plug, Bike } from 'lucide-react';

const Map = () => {
  // Sample data for Milan
  const chargingStations = [
    { x: 40, y: 45, name: "Milano Centrale EV" },
    { x: 65, y: 35, name: "Porta Garibaldi Power" },
    { x: 30, y: 60, name: "Porta Romana Electric" },
    { x: 75, y: 55, name: "Lambrate Charging" },
    { x: 45, y: 75, name: "Navigli Power Station" }
  ];

  const bikeRentals = [
    { x: 50, y: 50, name: "Duomo Bikes" },
    { x: 35, y: 40, name: "Brera Rental" },
    { x: 70, y: 45, name: "Isola Cycles" },
    { x: 55, y: 65, name: "Navigli Bikes" },
    { x: 25, y: 55, name: "Porta Venezia Rental" }
  ];

  const handleMarkerHover = (event: React.MouseEvent<HTMLDivElement>, name: string) => {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    if (tooltip) {
      tooltip.classList.toggle('opacity-0');
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center">
              <Plug className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">Stazioni di ricarica</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
              <Bike className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">Noleggio biciclette</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[600px] bg-neutral-100 rounded-xl overflow-hidden shadow-lg">
        {/* Grid lines for visual reference */}
        <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-neutral-200" />
          ))}
        </div>

        {/* Main districts */}
        <div className="absolute inset-10 bg-white/50 rounded-lg shadow-inner" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent-purple/10 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">Duomo</span>
        </div>

        {/* Charging stations */}
        {chargingStations.map((station, index) => (
          <div
            key={`charging-${index}`}
            className="absolute"
            style={{ left: `${station.x}%`, top: `${station.y}%` }}
            onMouseEnter={(e) => handleMarkerHover(e, station.name)}
            onMouseLeave={(e) => handleMarkerHover(e, station.name)}
          >
            <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2">
              <Plug className="w-4 h-4 text-white" />
            </div>
            <div className="tooltip opacity-0 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white px-2 py-1 rounded shadow-lg text-sm whitespace-nowrap">
              {station.name}
            </div>
          </div>
        ))}

        {/* Bike rentals */}
        {bikeRentals.map((rental, index) => (
          <div
            key={`bike-${index}`}
            className="absolute"
            style={{ left: `${rental.x}%`, top: `${rental.y}%` }}
            onMouseEnter={(e) => handleMarkerHover(e, rental.name)}
            onMouseLeave={(e) => handleMarkerHover(e, rental.name)}
          >
            <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2">
              <Bike className="w-4 h-4 text-white" />
            </div>
            <div className="tooltip opacity-0 transition-opacity absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white px-2 py-1 rounded shadow-lg text-sm whitespace-nowrap">
              {rental.name}
            </div>
          </div>
        ))}

        {/* Major roads */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-200 transform -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 transform -translate-y-1/2" />
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-neutral-200" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-neutral-200" />
          <div className="absolute top-1/4 left-0 right-0 h-px bg-neutral-200" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-neutral-200" />
        </div>
      </div>
    </div>
  );
};

export default Map;
