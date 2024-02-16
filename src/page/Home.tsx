import useUserStore from "@/zustand/user";
import { Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { clearUser } = useUserStore();

  return (
    <Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Button onClick={() => navigate("account/login")}>Login</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button onClick={() => navigate("account/register")}>Register</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button onClick={clearUser}>Logout</Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
