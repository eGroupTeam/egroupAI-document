const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  title: {
    fontSize: '0.875rem',
    fontWeight: 600
  },
  item: {
    fontSize: '0.875rem',
    color: 'rgba(0,0,0,.65)'
  },
  // react material not support active ListItem so refer to this issue
  // this only work with react-router-dom's NavLink component
  // https://github.com/mui-org/material-ui/issues/1534
  active: {
    '&.active span': {
      color: theme.palette.primary.main,
      fontWeight: 600
    }
  }
});

export default styles;
