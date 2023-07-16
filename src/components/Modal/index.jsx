import * as React from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

function CustomModal(props) {
  const { open, close, title, description, action, closeIcon = true } = props
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    '&:focus-visible': {
      outline: 'none'
    }
  };
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        {closeIcon && <IconButton id="modal-modal-title" onClick={close} sx={{
          display: 'flex',
          position: 'absolute',
          justifyContent: 'right',
          alignItems: 'right',
          right: 15,
          top: 10
        }}>
          <CloseIcon />
        </IconButton>
        }
        <h2 id="parent-modal-title">{title}</h2>
        <p id="parent-modal-description">
          {description}
        </p>
        <Box>
          {action}
        </Box>
      </Box>
    </Modal>
  )
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  action: PropTypes.element,
  closeIcon: PropTypes.bool
}

export default CustomModal;