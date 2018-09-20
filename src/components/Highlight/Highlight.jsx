import hljs from 'highlight.js';
import React from 'react';

import 'highlight.js/styles/github.css';

class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }

  componentDidMount() {
    this.highlightCode();
  }

  highlightCode() {
    const nodes = this.el.current.querySelectorAll('pre code');

    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <pre ref={this.el}>
        <code className={className}>{children}</code>
      </pre>
    );
  }
}

Highlight.defaultProps = {
  className: null
};

export default Highlight;
