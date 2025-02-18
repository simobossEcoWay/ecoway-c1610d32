
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Plug, Bike } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  // Fix for default markers in React-Leaflet
  const customIcon = (color: string, icon: JSX.Element) => {
    const customMarkerElement = document.createElement('div');
    customMarkerElement.className = `w-8 h-8 bg-${color} rounded-full flex items-center justify-center shadow-lg`;
    customMarkerElement.style.backgroundColor = color === 'accent-blue' ? '#2563eb' : '#22c55e';
    customMarkerElement.innerHTML = `<div class="text-white">${icon}</div>`;

    return L.divIcon({
      html: customMarkerElement.outerHTML,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  };

  // Sample data for Milan
  const chargingStations = [
    { position: [45.4858, 9.2044], name: "Milano Centrale EV" },
    { position: [45.4853, 9.1875], name: "Porta Garibaldi Power" },
    { position: [45.4515, 9.2099], name: "Porta Romana Electric" },
    { position: [45.4859, 9.2367], name: "Lambrate Charging" },
    { position: [45.4488, 9.1745], name: "Navigli Power Station" }
  ];

  const bikeRentals = [
    { position: [45.4641, 9.1900], name: "Duomo Bikes" },
    { position: [45.4715, 9.1862], name: "Brera Rental" },
    { position: [45.4839, 9.1873], name: "Isola Cycles" },
    { position: [45.4500, 9.1800], name: "Navigli Bikes" },
    { position: [45.4750, 9.2000], name: "Porta Venezia Rental" }
  ];

  // Create marker icons once
  const chargingIcon = customIcon('accent-blue', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17h10V5H7v12Z"/><path d="M11 8h2v3h-2z"/><path d="M7 5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3"/><path d="M17 5h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3"/></svg>`);
  const bikeIcon = customIcon('accent-green', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>`);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-[1000] bg-white p-4 rounded-lg shadow-lg">
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
      
      <MapContainer 
        center={[45.4642, 9.1900]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "600px", width: "100%", borderRadius: "0.75rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {chargingStations.map((station, index) => (
          <Marker
            key={`charging-${index}`}
            position={station.position as [number, number]}
            icon={chargingIcon}
          >
            <Popup>
              <div className="font-medium">{station.name}</div>
              <div className="text-sm text-neutral-600">Stazione di ricarica</div>
            </Popup>
          </Marker>
        ))}

        {bikeRentals.map((rental, index) => (
          <Marker
            key={`bike-${index}`}
            position={rental.position as [number, number]}
            icon={bikeIcon}
          >
            <Popup>
              <div className="font-medium">{rental.name}</div>
              <div className="text-sm text-neutral-600">Noleggio biciclette</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
