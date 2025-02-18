
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Bike, TreeDeciduous } from 'lucide-react';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CityMap = () => {
  // Sample data for Milan locations
  const locations = {
    chargingStations: [
      { name: "Stazione di ricarica Centro", coordinates: [45.4642, 9.1900] },
      { name: "Stazione di ricarica Navigli", coordinates: [45.4545, 9.1745] },
      { name: "Stazione di ricarica Garibaldi", coordinates: [45.4817, 9.1875] }
    ],
    bikeRentals: [
      { name: "Noleggio Bici Duomo", coordinates: [45.4641, 9.1919] },
      { name: "Noleggio Bici Centrale", coordinates: [45.4859, 9.2042] },
      { name: "Noleggio Bici Sempione", coordinates: [45.4725, 9.1750] }
    ],
    parks: [
      { name: "Parco Sempione", coordinates: [45.4724, 9.1788] },
      { name: "Giardini Pubblici", coordinates: [45.4723, 9.1967] },
      { name: "Parco Biblioteca degli Alberi", coordinates: [45.4837, 9.1907] }
    ]
  };

  // Create custom marker icons
  const createCustomIcon = (color: string) => {
    return new Icon({
      iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23${color.replace('#', '')}' width='24' height='24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z'/%3E%3C/svg%3E`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  const chargingIcon = createCustomIcon('#ea384c');
  const bikeIcon = createCustomIcon('#2563eb');
  const parkIcon = createCustomIcon('#5a8f67');

  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden">
        <MapContainer
          center={[45.4642, 9.1900]}
          zoom={14}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {locations.chargingStations.map((location, index) => (
            <Marker
              key={`charging-${index}`}
              position={location.coordinates}
              icon={chargingIcon}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}

          {locations.bikeRentals.map((location, index) => (
            <Marker
              key={`bike-${index}`}
              position={location.coordinates}
              icon={bikeIcon}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}

          {locations.parks.map((location, index) => (
            <Marker
              key={`park-${index}`}
              position={location.coordinates}
              icon={parkIcon}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
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
