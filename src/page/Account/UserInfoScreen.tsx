import useUserStore from "@Zustand/user";
import { useParams } from "react-router-dom";

const UserInfoScreen = () => {
  const { id } = useParams();
  const { user } = useUserStore();

  return <div>{`Hello! params:${id} / zustand:${(user?.id, user?.name)}`}</div>;
};

export default UserInfoScreen;
