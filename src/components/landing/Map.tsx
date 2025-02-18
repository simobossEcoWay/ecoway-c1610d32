
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Plug, Bike } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default icon path issue fix
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style="background-color: ${color === 'accent-blue' ? '#2563eb' : '#22c55e'}"></div>`,
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

  const defaultProps = {
    center: [45.4642, 9.1900] as L.LatLngExpression,
    zoom: 13,
    scrollWheelZoom: false
  };

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
        {...defaultProps}
        style={{ height: "600px", width: "100%", borderRadius: "0.75rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {chargingStations.map((station, index) => (
          <Marker
            key={`charging-${index}`}
            position={station.position as L.LatLngExpression}
            icon={createCustomIcon('accent-blue')}
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
            position={rental.position as L.LatLngExpression}
            icon={createCustomIcon('accent-green')}
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
