import { apiResponseCheck } from "@/helperFn/apiResponseCheck";
import useAlertStore from "@/zustand/alert";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginRequest, LoginResponse } from "../../type/account/loginType";
import { API } from "../axiosSetup";

export const useLoginMutation = (
  onSuccess: (data: LoginResponse) => void
): UseMutationResult<LoginResponse, Error, LoginRequest, unknown> => {
  const { setAlert } = useAlertStore();

  const handleLogin = async (req: LoginRequest) => {
    const res = await API.post("/login", req);
    return apiResponseCheck<LoginResponse>(res.data);
  };

  return useMutation({
    mutationFn: handleLogin,
    onSuccess,
    onError: (err: AxiosError<any, any>) => {
      setAlert({
        open: true,
        message: err?.response?.data.message || "Something went wrong",
      });
    },
  });
};
