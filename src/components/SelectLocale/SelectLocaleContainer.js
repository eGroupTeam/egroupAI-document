import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getLocale, getMessages } from 'redux/modules/locales/selectors';

import actionCreators from 'redux/modules/actionCreators';

import SelectLocale from './SelectLocale';

const mapStateToProps = state => ({
  locale: getLocale(state),
  messages: getMessages(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actionCreators.locales
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLocale);
