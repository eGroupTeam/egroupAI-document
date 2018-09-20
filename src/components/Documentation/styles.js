const styles = theme => ({
  root: {
    lineHeight: '2.2rem',
    fontFamily: theme.typography.fontFamily,
    '& .description': {
      color: 'rgba(0, 0, 0, 0.87)',
      margin: '20px 0 20px',
      fontSize: '1.1rem',
      fontWeight: 400
    },
    '& img': {
      margin: '20px 0',
      boxShadow:
        '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
      width: '100%'
    },
    '& a': theme.link
  }
});

export default styles;
