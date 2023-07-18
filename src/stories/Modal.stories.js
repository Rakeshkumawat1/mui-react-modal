import { Button } from "@mui/material";
import { Modal } from "../index";

export default {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
};

export const ModalTest = {
  args: {
    open: true,
    title: 'Modal Title',
    description: "Modal Description",
    close: () => false,
    action: <Button variant="outlined" size={"small"}>Save</Button>,
    closeIcon: true,
    actionPosition: "right"
  }
};