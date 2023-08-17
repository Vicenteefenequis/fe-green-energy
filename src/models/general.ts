export type Response<T> = {
  content: {
    count: number;
    next: string;
    previous: string;
    results: T[];
  };
};
