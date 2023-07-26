import * as React from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

function CustomModal(props) {
  const {
    open,
    close,
    title,
    description,
    action,
    closeIcon = true,
    customStyle = {},
    actionPosition = "left",
    modalRootClass = "",
    closeIconRootClass = "",
    titleRootClass = "",
    descriptionRootClass = "",
    actionRootClass = "",
    modalPosition = "center"
  } = props;

  const style = {
    position: 'absolute',
    minWidth: 300,
    bgcolor: 'background.default',
    boxShadow: 24,
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    '&:focus-visible': {
      outline: 'none'
    }
  };

  // Create action position mapper to avoid multiple if else in jsx.
  const actionPositionMapper = {
    left: "flex-start",
    center: 'center',
    right: 'flex-end'
  }

  const modalPositionMapper = {
    center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', },
    topLeft: { top: '10px', left: '10px', },
    topCenter: { top: '10px', left: '50%', transform: 'translate(-50%, 0%)', },
    topRight: { top: '10px', right: '10px', },
    bottomLeft: { bottom: '10px', left: '10px', },
    bottomCenter: { bottom: '10px', left: '50%', transform: 'translate(-50%, 0%)', },
    bottomRight: { bottom: '10px', right: '10px', },
  }

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        className={modalRootClass}
        sx={Object.keys(customStyle).length ? customStyle : { ...style, ...modalPositionMapper[modalPosition] }}
      >
        {closeIcon && <IconButton
          id="modal-close-icon"
          onClick={close}
          className={closeIconRootClass}
          sx={{
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

        {/* Render modal title */}
        {typeof title === "string" ?
          <Typography
            id="parent-modal-title"
            variant='h5'
            component={"h5"}
            className={titleRootClass}
            sx={{
              fontWeight: 600,
              lineHeight: '40px'
            }}>
            {title}
          </Typography>
          :
          { title }
        }

        {/* Render modal description */}
        {typeof description === "string" ?
          <Typography
            id="parent-modal-description"
            variant='p'
            component={"p"}
            className={descriptionRootClass}
            sx={{
              lineHeight: '45px'
            }}>
            {description}
          </Typography>
          :
          { description }
        }

        {/* Render modal action section */}
        {action &&
          <Box className={actionRootClass} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: actionPositionMapper[actionPosition],
            width: '100%'
          }}>
            {action}
          </Box>
        }
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
  closeIcon: PropTypes.bool,
  customStyle: PropTypes.object,
  actionPosition: PropTypes.oneOf(["left", "center", "right"]),
  modalRootClass: PropTypes.string,
  closeIconRootClass: PropTypes.string,
  titleRootClass: PropTypes.string,
  descriptionRootClass: PropTypes.string,
  actionRootClass: PropTypes.string,
  modalPosition: PropTypes.oneOf(["center", "topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"])
}

export default CustomModal;