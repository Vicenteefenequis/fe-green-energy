import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Feature, FeatureCollection } from 'geojson';

const BrazilMap: React.FC = () => {
  const mapStyle = {
    width: '100%',
    height: '500px',
  };

  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection<Feature> | null>(null);

  useEffect(() => {
    // Faz a requisição para carregar o arquivo GeoJSON
    fetch('/json/geojson.json')
      .then((response) => response.json())
      .then((data) => {
        // Filtra apenas os recursos do Brasil
        const brazilFeatures = data.features.filter(
          (feature: Feature) => feature.properties.pais === 'Brasil'
        );

        // Cria um novo objeto GeoJSON com os recursos do Brasil
        const brazilGeoJson = {
          type: 'FeatureCollection',
          features: brazilFeatures,
        };

        setGeoJsonData(brazilGeoJson);
      })
      .catch((error) => {
        console.error('Erro ao carregar o arquivo GeoJSON:', error);
      });
  }, []);

  const brazilBounds = [
    [-34.817, -74.091],
    [5.264, -34.276],
  ];

  const onEachFeature = (feature: Feature, layer: L.Layer) => {
    layer.on({
      click: (e: any) => {
        const stateName = feature.properties.nome;
        alert(`Você clicou em ${stateName}`);
      },
    });
  };

  const geoJsonOptions = {
    style: () => ({
      color: 'blue',
      weight: 1,
      fillColor: 'lightblue',
      fillOpacity: 0.5,
    }),
    onEachFeature: onEachFeature, // Use a função de callback correta aqui
  };

  return (
    <div>
      <h1>Mapa do Brasil com Estados</h1>
      <div style={mapStyle}>
        <MapContainer bounds={brazilBounds} style={mapStyle}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geoJsonData && (
            <GeoJSON data={geoJsonData} eventHandlers={{ click: onEachFeature }} pathOptions={geoJsonOptions.style} />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default BrazilMap;
