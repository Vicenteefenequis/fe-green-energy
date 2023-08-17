// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace User {
  export type Login = {
    email: string;
    password: string;
  };

  export type Output = {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    gender: string;
    phone_number: string;
    city: string;
  };

  export type Register = {
    email: string;
    password1: string;
    password2: string;
    first_name: string;
    last_name: string;
  };

  export type OutputRegister = Omit<Register, "password">;
}
