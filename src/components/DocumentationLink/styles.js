const styles = theme => ({
  root: {
    margin: '32px 0 24px',
    '& .anchor-link': {
      marginTop: -96, // Offset for the anchor.
      position: 'absolute'
    },
    '& .anchor-link-style': {
      opacity: 0,
      // To prevent the link to get the focus.
      display: 'none'
    },
    '&:hover .anchor-link-style': {
      display: 'inline-block',
      opacity: 1,
      padding: '0 8px',
      color: theme.palette.text.hint,
      '&:hover': {
        color: theme.palette.text.secondary
      },
      '& svg': {
        width: '0.55em',
        height: '0.55em',
        fill: 'currentColor'
      }
    }
  }
});

export default styles;
