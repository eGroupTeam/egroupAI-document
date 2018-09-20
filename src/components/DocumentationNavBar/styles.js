const styles = theme => ({
  appBar: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: theme.zIndex.drawer + 1
  },
  appBarTitle: {
    fontSize: '1.125rem',
    flexGrow: 1
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

export default styles;
