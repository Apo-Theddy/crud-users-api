export interface IUseCase<T, P> {
  execute(params: P): T;
}
