
export type TProjects = {
    id: number;
    name: string;
    description: string;
    location_name: string;
    created_at: string;
    updated_at: string;
}

export type TDataEnergeticCreateBody = {
    total_residential_electricity_use: number,
    number_of_people_with_regular_connection: number,
    total_electricity_consumption_in_public_buildings: number,
    total_area_of_these_buildings: number,
    total_electricity_consumption_produced_from_renewable: number,
    total_energy_consumption: number,
    total_electricity_use: number,
    total_number_of_consumer_interruptions: number,
    total_number_of_consumers_served: number,
    sum_of_the_duration_of_all_interruptions: number,
    total_number_of_interruptions: number,
}
export type TLocationCreateBody = {
    name: string,
    population: number,
    data_energetic: TDataEnergeticCreateBody
}

export type TProjectCreateBody = {
    name: string,
    description: string,
    location: TLocationCreateBody
}

export type TDataIndicatorResult = {
    location_name: string;
    value: number;
    is_certified: boolean;
}

export type TIndicatorRequest = {
    id: string;
    latitude?: number;
    longitude?: number;
}
export type TIndicatorResult = {
    name: string;
    unit: string;
    data: TDataIndicatorResult[];
    average: number;
}

export type TStateFilterResult = {
    id: string;
    name: string;
    slug: string;
}