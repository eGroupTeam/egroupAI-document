const styles = theme => ({
  root: {
    paddingBottom: '20px',
    // inner table style fixed
    '& table table tbody tr:last-child td': {
      borderBottom: 0
    }
  }
});

export default styles;
