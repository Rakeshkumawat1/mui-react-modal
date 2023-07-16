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
    title: 'Title',
    description: "Description",
    close: () => false,
    action: <>TestAction</>,
    closeIcon: true
  } 
};