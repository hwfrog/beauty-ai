import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class DenseAppBar extends Component {
  render() {
  return (
    <div className={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={{marginLeft: -18,
    marginRight: 10,}} color="inherit" aria-label="Menu"
                      onClick={this.props.flip}>
            <KeyboardArrowLeft />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Item Name
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DenseAppBar;