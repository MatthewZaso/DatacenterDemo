/**
 * @fileoverview A toggle that will trigger the creation or deletion of an app.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addApp, removeApp } from '../../actions/actions';
import './_sidebar.scss';

class AppToggle extends Component {
  constructor(props) {
    super(props);

    this._appAddClick = this._onAppAddClick.bind(this);
    this._appRemoveClick = this._onAppRemoveClick.bind(this);
  }

  _onAppAddClick(evt) {
    this.props.addApp(this.props.data);
  }

  _onAppRemoveClick(evt) {
    this.props.removeApp(this.props.data.slug);
  }

  render() {
    return (
      <li className={`apps__app apps__app--${this.props.data.slug}`} data-app-id={ this.props.data.slug }>
        <label className="header3">{ this.props.data.name }</label>
        <div className="apps__app__buttons">
          <button onClick={this._appRemoveClick} className="apps__app-remove">-</button>
          <button onClick={this._appAddClick} className="apps__app-add">+</button>
        </div>
      </li>
    );
  }
}

/** Redux */
const mapStateToProps = state => {
  return {};
};

/** Redux */
const mapDispatchToProps = dispatch => {
  return {
    addApp: (data) => {
      dispatch(addApp(data));
    },
    removeApp: (id) => {
      dispatch(removeApp(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppToggle);
