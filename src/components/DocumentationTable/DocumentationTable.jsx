import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';

import styles from './styles';

const DocumentationTable = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Table>{children}</Table>
    </div>
  );
};

DocumentationTable.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(DocumentationTable);
