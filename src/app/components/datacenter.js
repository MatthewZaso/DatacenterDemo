/**
 * @fileoverview The main datacenter of the application, responsible
 * for handling events and creating new apps and servers.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */

import Server from './server';
import AppToggle from './app-toggle';
import App from './app';
import AppData from '../data/apps';

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

class Datacenter {
  constructor() {

    /**
     * The container that will hold all servers
     * @type {Element}
     * @public
     */
    this.container = document.querySelector(`.${SETTINGS.ClassName.CONTAINER}`);

    /**
     * The container holding the server toggles
     * @type {Element}
     * @public
     */
    this.serverToggles = document.querySelector(`.${SETTINGS.ClassName.SERVER_TOGGLE}`);

    /**
     * The container that is the parent to the app toggles
     * @type {Element}
     * @public
     */
    this.appToggleContainer = null;

    /**
     * An array of all server instances currently active
     * @type {Array<Server>}
     * @public
     */
    this.servers = [];

    /**
     * An array of all app instances currently active
     * @type {Array<App>}
     * @public
     */
    this.apps = [];

    /**
     * An array of all app toggles currently active
     * @type {Array<AppToggle>}
     * @public
     */
    this.appToggles = null;

    this._createInitialServers();

    this._renderToggles();

    this._bindListeners();

  }

  /**
   * Binds all listeners to the DOM. Listeners are stored as properties for
   * easy disposal.
   * @private
   */
  _bindListeners() {
    this.onToggleClick = this._onToggleClick.bind(this);
    this.serverToggles.addEventListener('click', this.onToggleClick);

    this.onToggleBtnClick = this._onToggleBtnClick.bind(this);
    this.appToggleContainer.addEventListener('click', this.onToggleBtnClick);
  }

  /**
   * Delegated event listener for all of the app toggles
   * @param {Event} evt The click event.
   * @private
   */
  _onToggleBtnClick(evt) {
    const closest = evt.target.closest(`.${SETTINGS.ClassName.APP_TOGGLE}`);
    const id = closest.getAttribute('data-app-id');

    if (evt.target.classList.contains('apps__app-add')) {
      this._addApp(id);
    } else if (evt.target.classList.contains('apps__app-remove')) {
      this._removeApp(id);
    }
  }

  /**
   * Adds an app based on the app slug.
   * @param {String} id The slug of the app to add.
   * @private
   */
  _addApp(id) {
    const closestEmpty = this._closestEmptyServer();
    const closestSingle = this._closestSingleServer();
    const serverToHost = closestEmpty ? closestEmpty : closestSingle;
    const newApp = new App(this._datasetById(id), serverToHost, Date.now());
    serverToHost.addApp(newApp);
    this.apps.push(newApp);
  }

  /**
   * Removes the most recently created app based on the slug.
   * @param {String} id The slug of the app to remove.
   * @private
   */
  _removeApp(id) {
    const recentAppInstance = this.apps.slice(0).reverse().find(app => app.data.slug === id);
    recentAppInstance.server.removeApp(recentAppInstance);

    const indexToRemove = this.apps.indexOf(recentAppInstance);
    this.apps.splice(indexToRemove, 1);
  }

  /**
   * Finds the closest server that is not hosting any apps
   * @returns {Server} The server instance.
   * @private
   */
  _closestEmptyServer() {
    return this.servers.find(server => server.apps.length === 0);
  }

  /**
   * Finds the closest server that is hosting a single app
   * @returns {Server} The server instance.
   * @private
   */
  _closestSingleServer() {
    return this.servers.find(server => server.apps.length === 1);
  }

  /**
   * Grabs the dataset based on the app slug.
   * @returns {Object} The data object
   * @private
   */
  _datasetById(id) {
    return AppData.find(data => data.slug === id);
  }

  /**
   * Renders the toggles and adds them to the DOM.
   * @private
   */
  _renderToggles() {
    this.appToggles = AppData.map((item) => {
      return new AppToggle(item);
    });

    this.appToggleContainer = document.querySelector(`.${SETTINGS.ClassName.TOGGLE_CONTAINER}`);
  }

  /**
   * Creates an initial set of empty servers for use.
   * @private
   */
  _createInitialServers() {
    for(let i = 0; i < SETTINGS.INITIAL_SERVERS; i++) {
      this._renderServer();
    }
  }

  /**
   * Renders a new, empty server
   * @private
   */
  _renderServer() {
    const id = this.servers.length + 1;
    this.servers.push(new Server(id, this.container));
  }

  /**
   * Removes the most recently created server. If the server contains apps,
   * we remove them and attempt to restart them on a differnt server.
   * @private
   */
  _removeServer() {
    if(this.servers.length > 0) {
      const server = this.servers.pop();
      let orphanedApps = [];

      server.apps.forEach((app) => {
        const indexToRemove = this.apps.indexOf(app);
        orphanedApps = orphanedApps.concat(this.apps.splice(indexToRemove, 1));
      });

      server.dispose();

      this._restartOrphanedApps(orphanedApps);
    }
  }

  /**
   * Restarts apps that were orphaned with their server was deleted.
   * @param {Array<App>} apps The orphaned apps.
   * @private
   */
  _restartOrphanedApps(apps) {
    apps.forEach((app) => {
      this._addApp(app.data.slug);
    });
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
}

export default Datacenter;
