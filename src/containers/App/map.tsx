import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';

const MapComponent: React.FC = () => {
  const [position, setPosition] = useState<LatLngTuple | undefined>(undefined);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  return (
    <MapContainer style={{ height: '100%' }} center={[-16.67305554, -49.26388888]} zoom={12} scrollWheelZoom={false}>
      <MapClickHandler />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-16.67305554, -49.26388888]}>
      <Popup> <div
        style={{width: '100px', height: '100%', justifyContent: 'center', alignContent: 'center'}}>
          Estação Goiânia - Automática
          <button className="bg-green-500 text-white"
          style={{justifyContent: 'center', width: '100px', height: '100%'}} onClick={() => {
             alert("click button")
            }}>
              Converter em energia
             </button>
             </div>
        </Popup>
      </Marker>

      <Marker position={[-16.64277777, -49.22027777]}>
        <Popup> <div
        style={{width: '100px', height: '100%', justifyContent: 'center', alignContent: 'center'}}>
          Estação Goiânia - Convencional
          <button className="bg-green-500 text-white"
          style={{justifyContent: 'center', width: '100px', height: '100%'}} onClick={() => {
             alert("click button")
            }}>
              Converter em energia
             </button>
             </div>
        </Popup>
      </Marker>

      {position && (
        <Marker position={position}>
          <Popup>
            Latitude: {position[0]}, Longitude: {position[1]}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
