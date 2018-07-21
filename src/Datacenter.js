/**
 * @fileoverview The main datacenter of the application, responsible
 * for handling events and creating new apps and servers.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */
import React, { Component } from 'react';
import Server from './components/Server/Server';
import AppToggle from './components/AppToggle/AppToggle';
import Application from './components/Application/Application';
import AppData from './data/apps';

const SETTINGS = {
  ClassName: {
    CONTAINER: 'server-canvas__container',
    SERVER_TOGGLE: 'server-toggles',
    TOGGLE_CONTAINER: 'apps__menu',
    APP_TOGGLE: 'apps__app'
  },
  Id: {
    SERVER_TEMP: 'server'
  },
  INITIAL_SERVERS: 4
}

class Datacenter extends Component {
  constructor(props) {
    super(props);

    /**
     * An array of all server instances currently active
     * @type {Array<Server>}
     * @public
     */
    this.servers = Array.from({ length: SETTINGS.INITIAL_SERVERS }, (item, i) => i);

    this.onToggleClick = this._onToggleClick.bind(this);
  }

  /**
   * Creates an initial set of empty servers for use.
   * @private
   */
  _createInitialServers() {
    for (let i = 0; i < SETTINGS.INITIAL_SERVERS; i++) {
      this._renderServer();
    }
  }

  /**
   * Binds all listeners to the DOM. Listeners are stored as properties for
   * easy disposal.
   * @private
   */
  _bindListeners() {
    this.serverToggles.addEventListener('click', this.onToggleClick);
  }

  /**
   * Delegated event listener for the server toggles
   * @param {Event} evt The click event.
   * @private
   */
  _onToggleClick(evt) {
    const id = evt.target.getAttribute('data-toggle-id');

    if (id === 'add') {
      this._renderServer();
    } else if (id === 'remove') {
      this._removeServer();
    }
  }

  /** React */
  componentDidMount() {
    /**
     * The container holding the server toggles
     * @type {Element}
     * @public
     */
    this.serverToggles = document.querySelector(`.${SETTINGS.ClassName.SERVER_TOGGLE}`);

    this._bindListeners();
  }

  render() {
    return (
      <section className="main">
        <div className="sidebar">
          <div className="server-toggles">
            <div className="server-toggles__toggle">
              <button className="server-toggles__toggle__button" data-toggle-id="add"></button>
              <p className="label1 server-toggles__toggle__title">Add Server</p>
            </div>
            <div className="server-toggles__toggle">
              <button className="server-toggles__toggle__button" data-toggle-id="remove"></button>
              <p className="label1 server-toggles__toggle__title">Destroy</p>
            </div>
          </div>
          <div className="apps">
            <p className="apps__title label1 label1--dark">Available Apps</p>
            <ul className="apps__menu">
              {AppData.map((data, index) => {
                return <AppToggle slug={data.slug} name={data.name} key={index} />
              })}
            </ul>
          </div>
        </div>
        <div className="server-canvas">
          <h1 className="server-canvas__title header1">Server Canvas</h1>
          <div className="server-canvas__container">
            {this.servers.map((id, index) => {
              return <Server id={id} key={index} />
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Datacenter;
