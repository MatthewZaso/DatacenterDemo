/**
 * Finds the closest server that is not hosting any apps
 * @returns {Server} The server instance.
 * @private
 */
function closestEmptyServer(servers) {
  return servers.find(server => server.apps.length === 0);
}

/**
 * Finds the closest server that is hosting a single app
 * @returns {Server} The server instance.
 * @private
 */
function closestSingleServer(servers) {
  return servers.find(server => server.apps.length === 1);
}

const Reducers = (state, action) => {
  switch (action.type) {
    case "ADD_SERVER":
      state = Object.assign({}, state, {
        servers: state.servers.concat({ id: action.payload }),
      });
      return state;
    case "REMOVE_SERVER":
      state = Object.assign({}, state, {
        servers: state.servers.slice(0, -1),
      });
      return state;
    case "ADD_APP":
      const newServers = state.servers.slice(0);
      const closestEmpty = closestEmptyServer(newServers);
      const closestSingle = closestSingleServer(newServers);
      const serverToHost = closestEmpty ? closestEmpty : closestSingle;
      const appId = Date.now();
      action.payload.server = serverToHost.id;
      action.payload.instanceId = appId;
      serverToHost.apps.push(appId);

      state = Object.assign({}, state, {
        apps: state.apps.concat(action.payload),
        servers: newServers,
      });
      return state;
    case "REMOVE_APP":
      const recentAppInstance = state.apps.slice(0).reverse().find(app => app.slug === action.payload);
      const mutatedServers = state.servers.slice(0).map((server) => {
        const targetIndex = server.apps.indexOf(recentAppInstance.instanceId);
        if (targetIndex > -1) {
          server.apps.splice(targetIndex, 1);
        }
        return server;
      });
      if (recentAppInstance) {
        const indexToRemove = state.apps.indexOf(recentAppInstance);
        const mutatedApps = state.apps.slice(0);
        mutatedApps.splice(indexToRemove, 1);
        state = Object.assign({}, state, {
          apps: mutatedApps,
          servers: mutatedServers,
        });
      }
      return state;
    default:
      return state;
  }
};

export default Reducers;
