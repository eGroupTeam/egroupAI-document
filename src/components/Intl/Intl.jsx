import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';
import moment from 'moment';

export default class Intl extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    locale: PropTypes.string,
    messages: PropTypes.object,
    setLocale: PropTypes.func.isRequired,
    setMessages: PropTypes.func.isRequired
  };

  async componentDidMount() {
    addLocaleData(zhLocaleData);
    // set moment language
    await import(`moment/locale/${navigator.language.toLowerCase()}`);
    moment.locale(navigator.language.toLowerCase());
    const messages = await import(`static/locales/${navigator.language}.json`);
    this.props.setLocale(navigator.language);
    this.props.setMessages(messages);
  }

  render() {
    const { children, locale, messages } = this.props;
    if (locale) {
      return (
        <IntlProvider
          defaultLocale="zh"
          locale={locale}
          key={locale}
          messages={messages}
        >
          {children}
        </IntlProvider>
      );
    }
    return null;
  }
}
