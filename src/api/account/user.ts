import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiResponseCheck } from "../../helperFn/apiResponseCheck";
import { UserData } from "../../type/account/userType";
import useUserStore from "../../zustand/user";
import { API } from "../axiosSetup";

export const getUserInfo = (id: number) => {
  const { setUser } = useUserStore();

  const fetchUserInfo = async () => {
    const res = await API.get(`/user/${id}`);
    const data = apiResponseCheck<UserData>(res.data);
    setUser(data);
    return data;
  };

  const result = useQuery({
    queryKey: ["user", id],
    queryFn: fetchUserInfo,
    enabled: !!id,
  });

  return result as UseQueryResult<UserData, Error>;
};
