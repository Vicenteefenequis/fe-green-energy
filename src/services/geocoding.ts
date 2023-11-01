import axios from 'axios';

type Address = {
    road: string;
    suburb: string;
    city?: string;
    town?: string;  
    village?: string;
    municipality: string;
    state_district: string;
    state: string;
    region: string;
    postcode: string;
    country: string;
    country_code: string;
};

export type GeocodeOutput = {
    place_id: number;
    licence: string;
    powered_by: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    display_name: string;
    address: Address;
    boundingbox: string[];
};

export type GeocodeInput = {
    latitude: number;
    longitude: number;
};

export const fetchGeocodeByCoordinates = async (input: GeocodeInput): Promise<GeocodeOutput> => {
    const { data } = await axios.get<GeocodeOutput>(`https://geocode.maps.co/reverse`, {
        params: {
            lat: input.latitude,
            lon: input.longitude
        }
    });
    return data;
};

