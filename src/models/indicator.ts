/* eslint-disable @typescript-eslint/no-namespace */
export namespace Indicator {
  export type Model = {
    id: string;
    name: string;
    city: string;
    description: string;
    total_residential_electricity_use_per_capita: number;
    percentage_electricity_supply: number;
    annual_energy_consumption_of_public_buildings: number;
    percentage_of_electricity_renewable_sources: number;
    total_electricity_use_per_capita: number;
    average_number_of_power_outages_per_consumer_per_year: number;
    average_duration_of_power_outages: number;
    updated_at: string;
    created_at: string;
  };

  export type Input = {
    name: string;
    city: string;
    description: string;
    population: number;
    total_residential_electricity_use: number;
    number_of_people_with_regular_connection: number;
    total_electricity_consumption_in_public_buildings: number;
    total_area_of_these_buildings: number;
    total_electricity_consumption_produced_from_renewable: number;
    total_energy_consumption: number;
    total_electricity_use: number;
    total_number_of_consumer_interruptions: number;
    total_number_of_consumers_served: number;
    sum_of_the_duration_of_all_interruptions: number;
    total_number_of_interruptions: number;
  };

  export type Output = {
    id: number;
    city_name: string;
    residential_total_electricity_usage: number;
    regular_connection_population: number;
    public_buildings_electricity_consumption: number;
    total_area_of_buildings: number;
    total_renewable_energy_consumption: number;
    total_energy_consumption: number;
    total_electricity_usage: number;
    total_customer_interruptions: number;
    total_customers_served: number;
    total_duration_of_interruptions: number;
    total_number_of_interruptions: number;
    total_population: number;
  };
}

export type City = {
  name: string;
  result: number;
};

type MappedIndicators = {
  [key: string]: string;
};

export type KeyIndicator = keyof Indicator.Model;

export const KEY_INDICATOR: KeyIndicator[] = [
  "total_residential_electricity_use_per_capita",
  "percentage_electricity_supply",
  "annual_energy_consumption_of_public_buildings",
  "percentage_of_electricity_renewable_sources",
  "total_electricity_use_per_capita",
  "average_number_of_power_outages_per_consumer_per_year",
  "average_duration_of_power_outages",
];

export const MAPPED_INDICATORS: MappedIndicators = {
  total_residential_electricity_use_per_capita:
    "Uso de energia elétrica residencial per capita(kWh/ano)",
  percentage_electricity_supply:
    "Porcentagem de habitantes da cidade com fornecimento regular de energia elétrica",
  annual_energy_consumption_of_public_buildings:
    "Consumo de edifícios públicos por ano(kWh/m2)",
  percentage_of_electricity_renewable_sources:
    "Porcentagem proveniente de fontes renováveis, como parte do consumo total de energia da cidade",
  total_electricity_use_per_capita:
    "Uso total de energia elétrica per capita(kWh/ano)",
  average_number_of_power_outages_per_consumer_per_year:
    "Número médio de interrupções de energia elétrica por consumidor por ano",
  average_duration_of_power_outages:
    "Duração média das interrupções de energia elétrica(em horas)",
};

export interface Chart {
  label: string;
  value: number;
}
