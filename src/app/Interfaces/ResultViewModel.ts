export interface ResultViewModel<T> {
  data: T;
  exception: string;
  isSuccess: boolean;
}
