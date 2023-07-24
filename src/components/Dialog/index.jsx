import * as React from "react";
import {
    IconButton, Dialog, DialogActions, DialogContent,
    DialogTitle, Slide, Fade
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const TransitionHandler = React.forwardRef((props, ref) => {
    return <Slide direction="left" ref={ref} {...props} />;
});

const FadeTransitionHandler = React.forwardRef((props, ref) => {
    return <Fade ref={ref} {...props} />;
});
function CustomDialog(props) {
    const {
        open = false,
        transition = false,
        close,
        hideBackdrop = false,
        title = "",
        content = "",
        actions = "",
        dividers = false,
        closeIcon = true,
        dialogTitleSx = {},
        dialogContentSx = {},
        dialogActionSx = {},
        dialogRootSx = {},
        closeIconSx = {
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
        },
        fullScreen = false,
        ...other
    } = props || {};

    return (
        <Dialog
            open={open}
            TransitionComponent={transition ? TransitionHandler : FadeTransitionHandler}
            keepMounted
            onClose={close}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{ sx: dialogRootSx }}
            hideBackdrop={hideBackdrop}
            {...{ fullScreen, ...other }}
        >
            <DialogTitle sx={dialogTitleSx}>
                {title}
                {closeIcon && <IconButton
                    aria-label="close"
                    onClick={close}
                    sx={closeIconSx}
                >
                    <CloseIcon />
                </IconButton>}
            </DialogTitle>
            <DialogContent dividers={dividers} sx={dialogContentSx}>
                {content}
            </DialogContent>
            <DialogActions sx={dialogActionSx}>
                {actions}
            </DialogActions>
        </Dialog>
    );
}

CustomDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    transition: PropTypes.bool,
    handleClose: PropTypes.func,
    hideBackdrop: PropTypes.bool,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    actions: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    dividers: PropTypes.bool,
    closeIcon: PropTypes.bool,
    dialogTitleSx: PropTypes.object,
    dialogContentSx: PropTypes.object,
    dialogActionSx: PropTypes.object,
    closeIconSx: PropTypes.object,
    dialogRootSx: PropTypes.object,
}

export default CustomDialog;
