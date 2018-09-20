import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { Hidden, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DocumentationNavBar from 'components/DocumentationNavBar';
import DocumentationSideMenu from 'components/DocumentationSideMenu';

import {
  DocumentationIntroduce,
  DocumentationGettingStarted,
  DocumentationTrain,
  DocumentationRecognize,
  DocumentationModelSwitch,
  DocumentationModelMerge,
  DocumentationQA,
  DocumentationAppendix
} from 'loadables';

import styles from './styles';

class DocumentationLayout extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DocumentationNavBar handleDrawerToggle={this.handleDrawerToggle} />
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DocumentationSideMenu />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css" className={classes.hidden}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <DocumentationSideMenu />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Switch>
            <Redirect exact path="/" to="/introduce" />
            <Route path="/introduce" component={DocumentationIntroduce} />
            <Route
              path="/getting-started"
              component={DocumentationGettingStarted}
            />
            <Route path="/train" component={DocumentationTrain} />
            <Route path="/recognize" component={DocumentationRecognize} />
            <Route path="/model-switch" component={DocumentationModelSwitch} />
            <Route path="/model-merge" component={DocumentationModelMerge} />
            <Route path="/qa" component={DocumentationQA} />
            <Route path="/appendix" component={DocumentationAppendix} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default compose(withStyles(styles))(DocumentationLayout);
