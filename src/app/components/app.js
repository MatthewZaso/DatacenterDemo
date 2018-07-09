/**
 * @fileoverview A single app that will run on a server.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */

import { template, templateSettings } from 'lodash';

const SETTINGS = {
  Id: {
    APP_TEMP: 'app'
  }
}

class App {
  constructor(data, server, instanceId) {

    /**
     * The data that exists in the server.
     * @type {Object}
     * @public
     */
    this.data = data;

    /**
     * The instance of the server this app exists on.
     * @type {Server}
     * @public
     */
    this.server = server;

    /**
     * The instance Id of the app, used to reference it in the DOM
     * @type {int}
     * @public
     */
    this.instanceId = instanceId;

    /**
     * The generated, orphaned markup for this app
     * @type {String}
     * @public
     */
    this.markup = this._generateMarkup();
  }

  /**
   * Generates the markup for this app and saves it as a property.
   * @private
   */
  _generateMarkup() {
    templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    const temp = document.querySelector(`#${SETTINGS.Id.APP_TEMP}`).innerHTML;
    const tempFn = template(temp);

    return tempFn({ data: this.data, instanceId: this.instanceId });
  }
}

export default App;
