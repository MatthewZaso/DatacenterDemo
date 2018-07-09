import { template } from 'lodash';

const SETTINGS = {
  ClassName: {

  },
  Id: {
    APP_TEMP: 'app'
  }
}

class App {
  constructor(data) {
    this.data = data;

    this.element = null;

    this.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const temp = document.querySelector(`#${SETTINGS.Id.APP_TEMP}`).innerHTML;
    const tempFn = template(temp);

    return tempFn({ data: this.data });
  }
}

export default App;
