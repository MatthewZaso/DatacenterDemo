/**
 * @fileoverview A server that will exist on the canvas and contain multiple
 * or a single app.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */
import React, { Component } from 'react';
import Application from '../Application/Application';
import './_server.scss';
import './_server-canvas.scss';

const SETTINGS = {
  ClassName: {
    BASE: 'server-canvas__server',
    APP_CONTAINER: 'server-canvas__server__inner',
    APP: 'server-canvas__server-app'
  },
  Id: {
    SERVER_TEMP: 'server'
  }
}

class Server extends Component {
  constructor(props) {
    super(props);

    /**
     * The server's unique id.
     * @type {int}
     * @public
     */
    this.id = props.id;

    /**
     * The element's container.
     * @type {Element}
     * @public
     */
    this.container = props.container;

    this.apps = [];
  }

  /**
   * Adds a new App to the server.
   * @param {App} app The app to be added.
   * @public
   */
  addApp(app) {
    if(this.apps.length < 2) {
      this.apps.push(app);
    }
  }

  /**
   * Removes an app from the server and deletes it's markup.
   * @param {App} instance The app to be removed.
   * @public
   */
  removeApp(instance) {
    // let instanceId = instance.instanceId;
    // const queryString = `.${SETTINGS.ClassName.APP}[data-instance-id="${instanceId}"]`;
    // const instanceEl = this.element.querySelector(queryString);
    // instanceEl.parentNode.removeChild(instanceEl);

    // const indexToRemove = this.apps.indexOf(instance);
    // this.apps.splice(indexToRemove, 1);
  }

  render() {
    return (
      <div className="server-canvas__server" data-server-id={ this.props.id }>
        <div className="server-canvas__server__inner"></div>
      </div>
    );
  }
}

export default Server;
