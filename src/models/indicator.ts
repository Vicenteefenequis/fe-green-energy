/* eslint-disable @typescript-eslint/no-namespace */
export namespace Indicator {
  export type Model = {
    indicator: string;
    cities: City[];
    average: number;
  };
}

export type City = {
  name: string;
  result: number;
};
