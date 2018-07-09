/**
 * @fileoverview A toggle that will trigger the creation or deletion of an app.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */

import { template, templateSettings } from 'lodash';

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
    /**
     * The dataset used to render this toggle
     * @type {Object}
     * @public
     */
    this.data = data;

    /**
     * The container where this element will live inside
     * @type {Element}
     * @public
     */
    this.container = document.querySelector(`.${SETTINGS.ClassName.CONTAINER}`);

    this.render();

    const queryString = `.${SETTINGS.ClassName.APP}[data-app-id="${this.data.slug}"]`;

    /**
     * The toggle's HTML element
     * @type {Element}
     * @public
     */
    this.element = document.querySelector(queryString);
  }

  /**
   * Renders the toggle's HTML and appends it to the container
   * @public
   */
  render() {
    templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    const temp = document.querySelector(`#${SETTINGS.Id.TOGGLE_TEMP}`).innerHTML;
    const tempFn = template(temp);
    const markup = tempFn({ data: this.data });
    this.container.insertAdjacentHTML('beforeend', markup)
  }
}

export default AppToggle;
