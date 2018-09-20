import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';

class DocumentationNavBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired
  };

  render() {
    const { classes, handleDrawerToggle } = this.props;
    return (
      <header>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" noWrap className={classes.appBarTitle}>
              eGroupAI 開發文件
            </Typography>
            <Button color="inherit">latest</Button>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default compose(withStyles(styles))(DocumentationNavBar);
