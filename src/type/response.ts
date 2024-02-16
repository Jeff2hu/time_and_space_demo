export type ApiResponse<T> = {
  data: T | null;
  message: string;
  code: string;
};
