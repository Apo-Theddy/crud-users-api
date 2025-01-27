export interface Result<T, E> {
  isOk: boolean;
  isFail: boolean;
  data?: T;
  error?: E;
}

export const Ok = <T, E>(data: T): Result<T, E> => {
  return {
    isOk: true,
    isFail: false,
    data,
  };
};

export const Fail = <T, E>(error: E): Result<T, E> => {
  return {
    isOk: false,
    isFail: true,
    error,
  };
};
