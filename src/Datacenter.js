/**
 * @fileoverview The main datacenter of the application, responsible
 * for handling events and creating new apps and servers.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */
import React, { Component } from 'react';
import Server from './components/Server/Server';
import AppToggle from './components/AppToggle/AppToggle';
import { connect } from 'react-redux';
import { addServer, removeServer } from './actions/actions';
import AppData from './data/apps';

class Datacenter extends Component {
  constructor(props) {
    super(props);

    this._serverAddClick = this._onServerAddClick.bind(this);
    this._serverRemoveClick = this._onServerRemoveClick.bind(this);
  }

  _onServerAddClick(evt) {
    this.props.addServer(this.props.servers.length+1);
  }

  _onServerRemoveClick(evt) {
    this.props.removeServer();
  }

  render() {
    return (
      <section className="main">
        <div className="sidebar">
          <div className="server-toggles">
            <div className="server-toggles__toggle">
              <button className="server-toggles__toggle__button" onClick={this._serverAddClick} data-toggle-id="add"></button>
              <p className="label1 server-toggles__toggle__title">Add Server</p>
            </div>
            <div className="server-toggles__toggle">
              <button className="server-toggles__toggle__button" onClick={this._serverRemoveClick} data-toggle-id="remove"></button>
              <p className="label1 server-toggles__toggle__title">Destroy</p>
            </div>
          </div>
          <div className="apps">
            <p className="apps__title label1 label1--dark">Available Apps</p>
            <ul className="apps__menu">
              {AppData.map((data, index) => {
                return <AppToggle data={data} key={index} />
              })}
            </ul>
          </div>
        </div>
        <div className="server-canvas">
          <h1 className="server-canvas__title header1">Server Canvas</h1>
          <div className="server-canvas__container">
            {this.props.servers.map((data, index) => {
              return <Server id={data.id} key={index} />
            })}
          </div>
        </div>
      </section>
    );
  }
}

/** Redux */
const mapStateToProps = state => {
  return {
    servers: state.servers,
  };
};

/** Redux */
const mapDispatchToProps = dispatch => {
  return {
    addServer: (id) => {
      dispatch(addServer(id));
    },
    removeServer: () => {
      dispatch(removeServer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Datacenter);
