import { template } from 'lodash';

const SETTINGS = {
  ClassName: {
    CONTAINER: 'apps__menu',
    APP: 'apps__app'
  },
  Id: {
    TOGGLE_TEMP: 'toggle'
  }
}

class AppToggle {
  constructor(data) {
    this.data = data;

    this.container = document.querySelector(`.${SETTINGS.ClassName.CONTAINER}`);

    this.element = null;

    this.render();
  }

  render() {
    const temp = document.querySelector(`#${SETTINGS.Id.TOGGLE_TEMP}`).innerHTML;
    const tempFn = template(temp);
    const markup = tempFn({ data: this.data });
    this.container.insertAdjacentHTML('beforeend', markup)
    const queryString = `.${SETTINGS.ClassName.APP}[data-app-id="${this.data.slug}"]`;
    this.element = document.querySelector(queryString);
  }
}

export default AppToggle;
