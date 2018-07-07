import { template } from 'lodash';
import App from './app';

const SETTINGS = {
  Id: {
    SERVER_TEMP: 'server'
  }
}

class Server {
  constructor(id, container) {
    this.id = id;

    this.container = container;

    this.element = null;

    this.apps = [];

    this.render();
  }

  render() {
    const temp = document.querySelector(`#${SETTINGS.Id.SERVER_TEMP}`).innerHTML;
    const tempFn = template(temp);
    const markup = tempFn({ id: this.id});
    this.container.innerHTML += markup;
  }

  addApp() {
    if(this.apps.length < 2) {
      this.apps.push(new App());
    }
  }

  dispose() {
    this.element.parentNode.removeChild(this.element);
  }
}

export default Server;
