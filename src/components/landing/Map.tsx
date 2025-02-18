
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Plug, Bike } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  // Sample data for Lombardia
  const chargingStations = [
    { lng: 9.1900, lat: 45.4642, name: "Milano Centrale EV" },
    { lng: 9.6700, lat: 45.6982, name: "Bergamo Charging Hub" },
    { lng: 10.2230, lat: 45.5416, name: "Brescia Station" },
    { lng: 9.4027, lat: 45.8149, name: "Monza Electric" },
    { lng: 9.1419, lat: 45.1866, name: "Pavia Power" }
  ];

  const bikeRentals = [
    { lng: 9.1850, lat: 45.4700, name: "Milano Bikes" },
    { lng: 9.6650, lat: 45.7000, name: "Bergamo Rental" },
    { lng: 10.2180, lat: 45.5450, name: "Brescia Bikes" },
    { lng: 9.4000, lat: 45.8200, name: "Monza Cycles" },
    { lng: 9.1400, lat: 45.1900, name: "BikePavia" }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken || 'YOUR_MAPBOX_TOKEN'; // Replace with your token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [9.1900, 45.4642], // Center on Milan
      zoom: 7.5,
    });

    // Add markers for charging stations
    chargingStations.forEach(station => {
      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'marker charging-station';
      el.innerHTML = `<div class="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center shadow-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17h10V5H7v12Z" />
          <path d="M11 8h2v3h-2z" />
          <path d="M7 5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3" />
          <path d="M17 5h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3" />
        </svg>
      </div>`;

      new mapboxgl.Marker(el)
        .setLngLat([station.lng, station.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-medium">${station.name}</h3><p>Stazione di ricarica</p>`))
        .addTo(map.current);
    });

    // Add markers for bike rentals
    bikeRentals.forEach(rental => {
      const el = document.createElement('div');
      el.className = 'marker bike-rental';
      el.innerHTML = `<div class="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center shadow-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18.5" cy="17.5" r="3.5"/>
          <circle cx="5.5" cy="17.5" r="3.5"/>
          <circle cx="15" cy="5" r="1"/>
          <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
        </svg>
      </div>`;

      new mapboxgl.Marker(el)
        .setLngLat([rental.lng, rental.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-medium">${rental.name}</h3><p>Noleggio biciclette</p>`))
        .addTo(map.current);
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

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
      <div 
        ref={mapContainer} 
        className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg"
      />
      {!mapboxToken && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Inserisci il tuo Mapbox token"
            className="w-full p-2 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-neutral-600 mt-2">
            Visita mapbox.com per ottenere il tuo token pubblico
          </p>
        </div>
      )}
    </div>
  );
};

export default Map;
