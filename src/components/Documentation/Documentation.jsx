import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Documentation extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classNames(classes.root)}>
        <Helmet>
          <title>eGroupAI 開發文件</title>
        </Helmet>
        {children}
      </div>
    );
  }
}

export default compose(withStyles(styles))(Documentation);
