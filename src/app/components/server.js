/**
 * @fileoverview A server that will exist on the canvas and contain multiple
 * or a single app.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */

import { template, templateSettings } from 'lodash';
import App from './app';

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

class Server {
  constructor(id, container) {
    /**
     * The server's unique id.
     * @type {int}
     * @public
     */
    this.id = id;

    /**
     * The element's container.
     * @type {Element}
     * @public
     */
    this.container = container;

    this.render();

    const queryString = `.${SETTINGS.ClassName.BASE}[data-server-id="${this.id}"]`;

    /**
     * The server's HTML element
     * @type {Element}
     * @public
     */
    this.element = document.querySelector(queryString);

    /**
     * The container inside the server which holds the app HTML
     * @type {Element}
     * @public
     */
    this.appContainer = this.element.querySelector(`.${SETTINGS.ClassName.APP_CONTAINER}`);

    this.apps = [];
  }

  /**
   * Renders the markup for the new server from the lodash template and appends
   * it to the container
   * @public
   */
  render() {
    templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    const temp = document.querySelector(`#${SETTINGS.Id.SERVER_TEMP}`).innerHTML;
    const tempFn = template(temp);
    const markup = tempFn({ id: this.id});
    this.container.insertAdjacentHTML('beforeend', markup);
  }

  /**
   * Adds a new App to the server.
   * @param {App} app The app to be added.
   * @public
   */
  addApp(app) {
    if(this.apps.length < 2) {
      this.apps.push(app);
      this.appContainer.insertAdjacentHTML('beforeend', app.markup);
    }
  }

  /**
   * Removes an app from the server and deletes it's markup.
   * @param {App} instance The app to be removed.
   * @public
   */
  removeApp(instance) {
    let instanceId = instance.instanceId;
    const queryString = `.${SETTINGS.ClassName.APP}[data-instance-id="${instanceId}"]`;
    const instanceEl = this.element.querySelector(queryString);
    instanceEl.parentNode.removeChild(instanceEl);

    const indexToRemove = this.apps.indexOf(instance);
    this.apps.splice(indexToRemove, 1);
  }

  /**
   * Removes this server element from it's container.
   * @public
   */
  dispose() {
    this.container.removeChild(this.element);
  }
}

export default Server;
