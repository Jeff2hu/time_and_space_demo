import { RegisterRequest, RegisterResponse } from "@/type/account/registerType";
import useAlertStore from "@/zustand/alert";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { apiResponseCheck } from "../../helperFn/apiResponseCheck";
import { API } from "../axiosSetup";

export const useRegisterMutation = (
  onSuccess: () => void
): UseMutationResult<RegisterResponse, Error, RegisterRequest, unknown> => {
  const { setAlert } = useAlertStore();

  const handleLogin = async (req: RegisterRequest) => {
    const res = await API.post("/register", req);
    return apiResponseCheck<RegisterResponse>(res.data);
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
