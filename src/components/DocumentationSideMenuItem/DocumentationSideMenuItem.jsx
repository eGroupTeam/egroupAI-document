import _map from 'lodash/map';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import smoothscroll from 'smoothscroll-polyfill';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';

import styles from './styles';

// https://github.com/rafrex/react-router-hash-link
// This is to set all browsers with smooth scroll
smoothscroll.polyfill();

class DocumentationSideMenuItem extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    primary: PropTypes.string.isRequired,
    items: PropTypes.array
  };

  state = { open: true };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  // fixed smooth scroll offset
  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { classes, primary, items, location } = this.props;
    if (items) {
      return (
        <React.Fragment>
          <ListItem onClick={this.handleClick} button>
            <ListItemText
              primary={primary}
              classes={{
                primary: classes.title
              }}
            />
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {_map(items, item => (
                <ListItem
                  key={item.key}
                  to={item.to}
                  button
                  className={classnames(
                    classes.nested,
                    `${location.pathname}${location.hash}` === item.to
                      ? 'active'
                      : ''
                  )}
                  component={NavHashLink}
                  scroll={el => this.scrollWithOffset(el, 0)}
                  classes={{
                    root: classes.active
                  }}
                >
                  <ListItemText
                    primary={item.primary}
                    classes={{
                      primary: classes.item
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      );
    }
    return (
      <ListItem button>
        <ListItemText
          primary={primary}
          classes={{
            primary: classes.primary
          }}
        />
      </ListItem>
    );
  }
}

export default compose(
  withStyles(styles),
  withRouter
)(DocumentationSideMenuItem);
