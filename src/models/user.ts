// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace User {
  export type Login = {
    username: string;
    password: string;
  };

  export type Output = {
    refresh: string;
    access: string;
  };

  export type Register = {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
  };

  export type OutputRegister = Omit<Register, 'password'>;
}
