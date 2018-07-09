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
    this.container = document.querySelector(`.${SETTINGS.ClassName.CONTAINER}`);

    this.serverToggles = document.querySelector(`.${SETTINGS.ClassName.SERVER_TOGGLE}`);

    this.appToggleContainer = null;

    this.servers = [];

    this.apps = [];

    this.appToggles = null;

    this._createInitialServers();

    this._renderFilters();

    this._bindListeners();
  }

  _bindListeners() {
    this.onToggleClick = this._onToggleClick.bind(this);
    this.serverToggles.addEventListener('click', this.onToggleClick);

    this.onToggleBtnClick = this._onToggleBtnClick.bind(this);
    this.appToggleContainer.addEventListener('click', this.onToggleBtnClick);
  }

  _onToggleBtnClick(evt) {
    const closest = evt.target.closest(`.${SETTINGS.ClassName.APP_TOGGLE}`);
    const id = closest.getAttribute('data-app-id');

    if (evt.target.classList.contains('apps__app-add')) {
      this._addApp(id);
    } else if (evt.target.classList.contains('apps__app-remove')) {
      this._removeApp(id);
    }
  }

  _addApp(id) {
    const closestEmpty = this._closestEmptyServer();
    const closestSingle = this._closestSingleServer();


    if (closestEmpty) {
      const app1 = new App(this._datasetById(id), closestEmpty, Date.now());
      closestEmpty.addApp(app1);
      this.apps.push(app1);
    } else if (closestSingle) {
      const app2 = new App(this._datasetById(id), closestSingle, Date.now());
      closestSingle.addApp(app2);
      this.apps.push(app2);
    }
  }

  _removeApp(id) {
    const recentAppInstance = this.apps.slice(0).reverse().find(app => app.data.slug === id);
    recentAppInstance.server.removeApp(recentAppInstance);

    const indexToRemove = this.apps.indexOf(recentAppInstance);
    this.apps.splice(indexToRemove, 1);
  }

  _closestEmptyServer() {
    return this.servers.find(server => server.apps.length === 0);
  }

  _closestSingleServer() {
    return this.servers.find(server => server.apps.length === 1);
  }

  _datasetById(id) {
    return AppData.find(data => data.slug === id);
  }

  _renderFilters() {
    this.appToggles = AppData.map((item) => {
      return new AppToggle(item);
    });

    this.appToggleContainer = document.querySelector(`.${SETTINGS.ClassName.TOGGLE_CONTAINER}`);
  }

  _createInitialServers() {
    for(let i = 0; i < SETTINGS.INITIAL_SERVERS; i++) {
      this._renderServer();
    }
  }

  _renderServer() {
    const id = this.servers.length + 1;
    this.servers.push(new Server(id, this.container));
  }

  _removeServer() {
    if(this.servers.length > 0) {
      const server = this.servers.pop();
      server.apps.forEach((app) => {
        const indexToRemove = this.apps.indexOf(app);
        this.apps.splice(indexToRemove, 1);
      });
      server.dispose();
    }
  }

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
