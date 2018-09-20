const styles = theme => ({
  root: {
    display: 'flex',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative'
  },
  toolbar: theme.mixins.toolbar,
  hidden: {
    // https://stackoverflow.com/questions/29885284/how-to-set-a-fixed-width-column-with-css-flexbox
    flex: `0 0 ${theme.config.drawerWidth}px`
  },
  drawerPaper: {
    width: theme.config.drawerWidth,
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 64px)',
      marginTop: '64px'
    }
  },
  content: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px'
    },
    backgroundColor: '#fff',
    padding: theme.spacing.unit * 3,
    margin: 'auto',
    marginTop: '64px',
    minHeight: 'calc(100vh - 64px)'
  }
});

export default styles;
