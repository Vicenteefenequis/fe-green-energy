import axios from 'axios';


export type GeocodeInput = {
    latitude: number;
    longitude: number;
};

export type ProjectGeocodeOutput = {
    is_registered_station: boolean;
};

export const fetchGeocodeByCoordinates = async (
    input: GeocodeInput,
    locationName?: string
): Promise<any> => { // Defina um tipo adequado no lugar de `any`.
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/reverse-geocode/`, {
            params: {
                lat: input.latitude,
                lon: input.longitude,
                project_city_name: locationName
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Erro desconhecido na API");
    }
};