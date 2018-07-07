import { template } from 'lodash';
import Server from './server';
import AppToggle from './app-toggle';
import AppData from '../data/apps';

const SETTINGS = {
  ClassName: {
    CONTAINER: 'server-canvas__container',
    SERVER_TOGGLE: 'server-toggles'
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

    this.servers = [];

    this._createInitialServers();

    this._renderFilters();

    this._bindListeners();
  }

  _bindListeners() {
    this.onToggleClick = this._onToggleClick.bind(this);
    this.serverToggles.addEventListener('click', this.onToggleClick);
  }

  _renderFilters() {
    AppData.map((item, index) => {
      return new AppToggle(item);
    });
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

  removeServer() {
    if(servers.length > 0) {
      const server = servers.pop();
      server.dispose();
    }
  }

  _onToggleClick(evt) {
    const id = evt.target.getAttribute('data-toggle-id');

    if (id === 'add') {
      this.renderServer();
    } else if (id === 'remove') {
      this.removeServer();
    }
  }
}

export default Datacenter;
