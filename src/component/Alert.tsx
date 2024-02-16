import useAlertStore from "@/zustand/alert";
import { Button, Dialog, Typography, styled } from "@mui/material";
import { useMemo } from "react";

const CustomAlert = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    padding: theme.spacing(2),
  },
}));

const Alert = () => {
  const { alert, clearAlert } = useAlertStore();

  const buttonTypes = useMemo(() => {
    if (alert.onOk) {
      return (
        <div>
          <Button onClick={alert.onOk}>Ok</Button>
          <Button onClick={clearAlert}>Cancel</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={clearAlert}>Ok</Button>
        </div>
      );
    }
  }, [alert.onOk]);

  return (
    <CustomAlert open={alert.open} onClose={clearAlert}>
      <Typography variant="h6">Alert</Typography>
      <Typography variant="body1">{alert.message}</Typography>
      {buttonTypes}
    </CustomAlert>
  );
};

export default Alert;
