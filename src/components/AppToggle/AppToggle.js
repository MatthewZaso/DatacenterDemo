/**
 * @fileoverview A toggle that will trigger the creation or deletion of an app.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */
import React, { Component } from 'react';
import './_sidebar.scss';

class AppToggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={`apps__app apps__app--${this.props.slug}`} data-app-id={ this.props.slug }>
        <label className="header3">{ this.props.name }</label>
        <div className="apps__app__buttons">
          <button className="apps__app-remove">-</button>
          <button className="apps__app-add">+</button>
        </div>
      </li>
    );
  }
}

export default AppToggle;
