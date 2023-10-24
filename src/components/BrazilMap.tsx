import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Feature, FeatureCollection } from "geojson";
import goiasData from "../json/brazilstates.json";
import { fetchLocations } from "../queries/locationStations";

const BrazilMap: React.FC = () => {
  const mapStyle = {
    width: "100%",
    height: "1000px",
  };

  const mapRef = useRef<L.Map | null>(null);
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection>(null as any);
  const [locations, setLocations] = useState<Array<any>>([]);
  const [pinLocation, setPinLocation] = useState<[number, number] | null>(null);

  // Localizações fictícias das usinas fotovoltaicas
  const solarPlants = [
    { latitude: -16.4, longitude: -49.4, name: "Usina Fotovoltaica 1" },
    { latitude: -16.2, longitude: -49.2, name: "Usina Fotovoltaica 2" }
  ];

  useEffect(() => {
    const goiasFeature = goiasData.features.find(
      (feature: Feature) => feature.properties.name === "Goiás"
    );

    if (goiasFeature) {
      const goiasGeoJson = {
        type: "FeatureCollection",
        features: [goiasFeature],
      };
      setGeoJsonData(goiasGeoJson);
    } else {
      console.error("Goiás não foi encontrado no GeoJSON.");
    }
  }, []);

  useEffect(() => {
    if (geoJsonData && mapRef.current) {
      const bounds = L.geoJSON(geoJsonData).getBounds();
      mapRef.current.fitBounds(bounds);
    }
  }, [geoJsonData]);

  useEffect(() => {
    const loadLocations = async () => {
      const fetchedLocations = await fetchLocations();
      setLocations(fetchedLocations);
    };
    loadLocations();
  }, []);
  
  const onEachFeature = (feature: Feature, layer: L.Layer) => {
    layer.on({
      click: (event) => {
        const latitude = event.latlng.lat;
        const longitude = event.latlng.lng;
        setPinLocation([latitude, longitude]);
      },
    });
  };
  
  const geoJsonOptions = {
    style: {
      color: "blue",
      fillColor: "lightblue",
      fillOpacity: 0.5,
    },
  };

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <h1>Mapa de Goiás</h1>
      <div style={mapStyle}>
        <MapContainer
          ref={mapRef}
          style={mapStyle}
          center={[-16.350000, -49.300000]} // Centro aproximado de Goiás
          zoom={7}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geoJsonData && (
            <GeoJSON
              data={geoJsonData}
              onEachFeature={onEachFeature}
              style={geoJsonOptions}
            />
          )}
          {pinLocation && (
            <Marker position={pinLocation}>
              <Popup>
                Latitude: {pinLocation[0]}, Longitude: {pinLocation[1]}
              </Popup>
            </Marker>
          )}
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[parseFloat(location.latitude), parseFloat(location.longitude)]}
            >
              <Popup>
                {location.nome_usina} - {location.city}, {location.state}
              </Popup>
            </Marker>
          ))}
          {solarPlants.map((plant, index) => (
            <Marker key={`solar-${index}`} position={[plant.latitude, plant.longitude]}>
              <Popup>{plant.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default BrazilMap;
