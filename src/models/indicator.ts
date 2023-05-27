/* eslint-disable @typescript-eslint/no-namespace */
export namespace Indicator {
  export type Model = {
    indicator: string;
    cities: City[];
    average: number;
  };

  export type Input = {
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

export const MAPPED_INDICATORS: MappedIndicators = {
  residential_electricity_consumption_pcp:
    'Uso de energia elétrica residencial per capita(kWh/ano)',
  percentage_residents_with_regular_electricity_supply:
    'Porcentagem de habitantes da cidade com fornecimento regular de energia elétrica',
  public_buildings_energy_consumption_per_year:
    'Consumo de edifícios públicos por ano(kWh/m2)',
  percentage_renewable_energy:
    'Porcentagem proveniente de fontes renováveis, como parte do consumo total de energia da cidade',
  total_electricity_consumption_pcp:
    'Uso total de energia elétrica per capita(kWh/ano)',
  average_power_outages_per_consumer_per_year:
    'Número médio de interrupções de energia elétrica por consumidor por ano',
  average_power_outage_duration:
    'Duração média das interrupções de energia elétrica(em horas)',
};
