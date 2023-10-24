import { TProjectCreateBody } from "../../interfaces/api";
import { Indicator } from "../../models/indicator";

export function toProjectCreateBody(payload: Indicator.Input): TProjectCreateBody {
    return {
        name: payload.name,
        description: payload.description,
        location: {
            name: payload.city,
            population: payload.population,
            data_energetic: {
                total_residential_electricity_use: payload.total_residential_electricity_use,
                number_of_people_with_regular_connection: payload.number_of_people_with_regular_connection,
                total_electricity_consumption_in_public_buildings: payload.total_electricity_consumption_in_public_buildings,
                total_area_of_these_buildings: payload.total_area_of_these_buildings,
                total_electricity_consumption_produced_from_renewable: payload.total_electricity_consumption_produced_from_renewable,
                total_energy_consumption: payload.total_energy_consumption,
                total_electricity_use: payload.total_electricity_use,
                total_number_of_consumer_interruptions: payload.total_number_of_consumer_interruptions,
                total_number_of_consumers_served: payload.total_number_of_consumers_served,
                sum_of_the_duration_of_all_interruptions: payload.sum_of_the_duration_of_all_interruptions,
                total_number_of_interruptions: payload.total_number_of_interruptions,
            }
        }
    };
}