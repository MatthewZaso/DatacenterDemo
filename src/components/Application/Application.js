/**
 * @fileoverview A single app that will run on a server.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */

import React, { Component } from 'react';
import './_apps.scss';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`server-canvas__server-app server-canvas__server-app--${this.props.slug}`} data-instance-id={ this.props.instanceId }>
        <h1 className="server-canvas__server-app__abbr header1">{ this.props.abbreviation }</h1>
        <p className="header2">{ this.props.name }</p>
        <p className="paragraph1">Added now</p>
      </div>
    );
  }
}

export default Application;


