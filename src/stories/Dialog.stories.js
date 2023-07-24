import { Button } from "@mui/material";
import { Dialog } from "../index";

export default {
  title: 'Example/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DialogTest = {
  args: {
    open: true,
    title: 'Dialog Title',
    description: "Dialog Description",
    close: () => false,
    action: <Button variant="outlined" size={"small"}>Save</Button>,
    closeIcon: true,
    actionPosition : "right",
    hideBackdrop: true
  }
};