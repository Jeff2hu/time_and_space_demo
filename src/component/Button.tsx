import { Typography } from "@mui/material";
import { ButtonHTMLAttributes, PropsWithChildren, memo } from "react";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: JSX.Element | string | number;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <Button {...props}>
      {typeof children !== "function" ? (
        <Typography>{children}</Typography>
      ) : (
        children
      )}
    </Button>
  );
};

export default memo(Button);
