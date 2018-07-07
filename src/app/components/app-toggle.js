import { template } from 'lodash';

const SETTINGS = {
  ClassName: {
    CONTAINER: 'apps__menu'
  },
  Id: {
    TOGGLE_TEMP: 'toggle'
  }
}

class AppToggle {
  constructor(data) {
    this.data = data;

    this.container = document.querySelector(`.${SETTINGS.ClassName.CONTAINER}`);

    this.render();
  }

  render() {
    const temp = document.querySelector(`#${SETTINGS.Id.TOGGLE_TEMP}`).innerHTML;
    const tempFn = template(temp);
    const markup = tempFn({ data: this.data });
    this.container.innerHTML += markup;
  }
}

export default AppToggle;
