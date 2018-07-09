import { template } from 'lodash';

const SETTINGS = {
  Id: {
    APP_TEMP: 'app'
  }
}

class App {
  constructor(data, server, instanceId) {
    this.data = data;

    this.server = server;

    this.instanceId = instanceId;

    this.element = null;

    this.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const temp = document.querySelector(`#${SETTINGS.Id.APP_TEMP}`).innerHTML;
    const tempFn = template(temp);

    return tempFn({ data: this.data, instanceId: this.instanceId });
  }
}

export default App;
