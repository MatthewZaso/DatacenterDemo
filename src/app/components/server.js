import { template } from 'lodash';
import App from './app';

const SETTINGS = {
  ClassName: {
    BASE: 'server-canvas__server',
    APP_CONTAINER: 'server-canvas__server__inner'
  },
  Id: {
    SERVER_TEMP: 'server'
  }
}

class Server {
  constructor(id, container) {
    this.id = id;

    this.container = container;

    this.render();

    const queryString = `.${SETTINGS.ClassName.BASE}[data-server-id="${this.id}"]`;
    this.element = document.querySelector(queryString);

    this.appContainer = this.element.querySelector(`.${SETTINGS.ClassName.APP_CONTAINER}`);

    this.apps = [];
  }

  render() {
    const temp = document.querySelector(`#${SETTINGS.Id.SERVER_TEMP}`).innerHTML;
    const tempFn = template(temp);
    const markup = tempFn({ id: this.id});
    this.container.insertAdjacentHTML('beforeend', markup);
  }

  addApp(app) {
    if(this.apps.length < 2) {
      this.apps.push(app);
      this.appContainer.insertAdjacentHTML('beforeend', app.markup);
    }
  }

  dispose() {
    this.container.removeChild(this.element);
  }
}

export default Server;
