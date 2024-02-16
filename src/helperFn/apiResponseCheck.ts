import { ApiResponse } from "../type/response";

export const apiResponseCheck = <T>(_res: ApiResponse<T>) => {
  const { message, data, code } = _res;
  if (code === "00000" && data) {
    return data;
  } else {
    throw new Error(message);
  }
};
