
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Bike, Tree } from 'lucide-react';

const CityMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  // Sample data for Milan locations
  const locations = {
    chargingStations: [
      { name: "Stazione di ricarica Centro", coordinates: [9.1875, 45.4668] },
      { name: "Stazione di ricarica Navigli", coordinates: [9.1754, 45.4584] },
      { name: "Stazione di ricarica Garibaldi", coordinates: [9.1878, 45.4838] }
    ],
    bikeRentals: [
      { name: "Noleggio Bici Duomo", coordinates: [9.1900, 45.4641] },
      { name: "Noleggio Bici Centrale", coordinates: [9.1927, 45.4859] },
      { name: "Noleggio Bici Sempione", coordinates: [9.1747, 45.4764] }
    ],
    parks: [
      { name: "Parco Sempione", coordinates: [9.1747, 45.4723] },
      { name: "Giardini Pubblici", coordinates: [9.2000, 45.4723] },
      { name: "Parco Biblioteca degli Alberi", coordinates: [9.1907, 45.4853] }
    ]
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const addMarker = (type: 'charging' | 'bike' | 'park', location: { name: string, coordinates: number[] }) => {
      if (!map.current) return;

      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      
      const style = {
        padding: '8px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      };

      let bgColor = '';
      let Icon;

      switch (type) {
        case 'charging':
          bgColor = 'rgb(137, 137, 222, 0.2)';
          Icon = MapPin;
          break;
        case 'bike':
          bgColor = 'rgb(97, 170, 242, 0.2)';
          Icon = Bike;
          break;
        case 'park':
          bgColor = 'rgb(126, 191, 142, 0.2)';
          Icon = Tree;
          break;
      }

      markerElement.style.background = bgColor;
      
      // Create React element for the icon
      const iconElement = document.createElement('div');
      iconElement.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icon({}).props.children}</svg>`;
      markerElement.appendChild(iconElement);

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(location.name);

      new mapboxgl.Marker(markerElement)
        .setLngLat(location.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current);
    };

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [9.1900, 45.4641], // Milan center coordinates
      zoom: 13,
      accessToken: mapboxToken || 'YOUR_MAPBOX_TOKEN_HERE' // Replace with your token
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers when map loads
    map.current.on('load', () => {
      locations.chargingStations.forEach(location => addMarker('charging', location));
      locations.bikeRentals.forEach(location => addMarker('bike', location));
      locations.parks.forEach(location => addMarker('park', location));
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="mapbox-token" className="text-sm text-neutral-600">
          Inserisci il tuo token Mapbox pubblico:
        </label>
        <input
          id="mapbox-token"
          type="text"
          className="px-4 py-2 rounded-lg border border-neutral-200"
          placeholder="pk.eyJ1..."
          value={mapboxToken}
          onChange={(e) => setMapboxToken(e.target.value)}
        />
        <p className="text-xs text-neutral-500">
          Puoi trovare il tuo token pubblico su mapbox.com nella sezione "Access tokens"
        </p>
      </div>
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0" />
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
            <Tree className="w-5 h-5 text-accent-green" />
          </div>
          <span className="text-sm">Parchi</span>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
