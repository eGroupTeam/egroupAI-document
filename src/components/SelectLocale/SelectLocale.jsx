import _map from 'lodash/map';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, intlShape } from 'react-intl';
import { NativeSelect, FormHelperText } from '@material-ui/core';

const options = [
  {
    key: 'zh-TW',
    text: '繁體中文',
    value: 'zh-TW'
  },
  {
    key: 'en',
    text: 'English',
    value: 'en'
  }
];

class SelectLocale extends Component {
  static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    intl: intlShape.isRequired,
    setLocale: PropTypes.func.isRequired,
    setMessages: PropTypes.func.isRequired
  };

  static defaultProps = {
    locale: null
  };

  handleChange = async e => {
    const locale = e.target.value;
    const messages = await import(`static/locales/${locale}.json`);
    this.props.setMessages(messages);
    this.props.setLocale(locale);
  };

  render() {
    const { intl, locale } = this.props;
    return (
      <React.Fragment>
        <FormattedMessage id="introduce" />
        <NativeSelect onChange={this.handleChange} value={locale}>
          {_map(options, el => (
            <option value={el.value} key={el.key}>
              {el.text}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>{intl.messages.text}</FormHelperText>
      </React.Fragment>
    );
  }
}

export default injectIntl(SelectLocale);
