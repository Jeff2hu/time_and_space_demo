export type AlertType = {
  open: boolean;
  message: string;
  onOk?: () => void;
};
