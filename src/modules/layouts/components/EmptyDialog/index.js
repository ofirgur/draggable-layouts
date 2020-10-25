import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';    
import Button from '@material-ui/core/Button';

const EmptyDialog = ({ open }) => {
    const history = useHistory();

    const handleClose = save => {
        history.push('/configurations')
    };

    return (
        <Dialog 
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"You have no layouts!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please add some!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

EmptyDialog.propTypes = {
    open: PropTypes.bool
};

export default EmptyDialog;