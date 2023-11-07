import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Modal } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe o CSS do leaflet
import goiasData from './brazilstates.json'
import { Feature, FeatureCollection } from 'geojson';
import L from 'leaflet';
import { toast } from 'react-toastify';
import { GeocodeInput, fetchGeocodeByCoordinates } from '../../services/geoconding';

type Props = {
    show: boolean;
    onClose: () => void;
    onSelectLocation: (lat: number, long: number) => void;
    locationName?: string;
}

const style = {
    width: 500,
};


const SelectLocation: React.FC<Props> = ({ show, onClose, onSelectLocation, locationName }: Props) => {
    const mapStyle = {
        width: "100%",
        height: "1000px",
    };

    const [openModal, setOpenModal] = useState(false)

    const mapRef = useRef<L.Map | null>(null);
    const [geoJsonData, setGeoJsonData] = useState<FeatureCollection>(null as any);
    const [clickedLocation, setClickedLocation] = useState<{ lat: number; lng: number } | null>(null);

    useEffect(() => {
        const goiasFeature = goiasData.features.find(
            (feature) => feature.properties.name === "Goiás"
        );

        if (goiasFeature) {
            const goiasGeoJson = {
                type: "FeatureCollection",
                features: [goiasFeature],
            };
            setGeoJsonData(goiasGeoJson as FeatureCollection);
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

    const onEachFeature = (feature: Feature, layer: L.Layer) => {
        layer.on({
            click: (event) => {
                const latitude = event.latlng.lat;
                const longitude = event.latlng.lng;
                const input: GeocodeInput = { latitude: latitude, longitude: longitude };
        
                fetchGeocodeByCoordinates(input, locationName)
                .then(geocodeData => {
                    console.log(geocodeData);
                    if (!geocodeData.is_registered_station) {
                        toast.error("Não se pode selecionar uma localização diferente do que você cadastrou no projeto!", {position: "top-center"});
                    } else {
                        setClickedLocation(event.latlng);
                        setOpenModal(true);
                    }
                })
                .catch(error => {
                    console.error("Erro ao obter os dados de geocode", error);
                    alert("Erro ao obter os dados de geocode: " + error.message);
                });
            }
        });
    };

    const geoJsonOptions = {
        color: "blue",
        fillColor: "lightblue",
        fillOpacity: 0.5,
    };

    const handleClose = () => {
        setOpenModal(false)
    }
    const handleAccept = () => {
        if (!clickedLocation) {
            toast.error("Selecione uma localização no mapa")
            return;
        };
        onSelectLocation(clickedLocation?.lat, clickedLocation?.lng)
        onClose()
        handleClose();
        setClickedLocation(null);
    }

    return (
        <Drawer
            open={show}
            onClose={onClose}
            anchor="right"
        >
            <Box style={style} role="presentation">
                <MapContainer
                    ref={mapRef}
                    style={mapStyle}
                    center={[-16.350000, -49.300000]}
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
                    {clickedLocation && (
                        <Marker
                            position={[clickedLocation.lat, clickedLocation.lng]}
                        >
                            <Popup>
                                Latitude: {clickedLocation.lat}, Longitude: {clickedLocation.lng}
                            </Popup>
                        </Marker>
                    )}

                    <Dialog
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            Você tem certeza que deseja usar essa localização?
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Ao selecionar sim, você estará usando essa localização como base da sua usina fotovoltaica.
                                Isso irá impactar diretamente nos dados de geração de energia.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Não</Button>
                            <Button onClick={handleAccept} autoFocus>
                                Sim
                            </Button>
                        </DialogActions>
                    </Dialog>
                </MapContainer>
            </Box>
        </Drawer>
    );
}

export default SelectLocation;



