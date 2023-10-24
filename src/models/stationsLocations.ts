export namespace LocationAPI {
    export type Location = {
      latitude: string;
      longitude: string;
      city: string;
      nome_usina: string;
      state: string;
    };
  
    export type Output = Location[];
  }
  