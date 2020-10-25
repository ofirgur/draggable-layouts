import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';    
import Button from '@material-ui/core/Button';

const SaveDialog = ({ open, setOpen, saveLayout }) => {
    const handleClose = save => {
        if(save) {
            saveLayout();
        }        

        setOpen(false)
    };

    return (
        <Dialog 
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Saving your new layout?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Click DISCARD in order to reset your layout!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Discard
                </Button>
                <Button onClick={() => handleClose(true)} color="primary" autoFocus>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

SaveDialog.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    saveLayout: PropTypes.func
};

export default SaveDialog;