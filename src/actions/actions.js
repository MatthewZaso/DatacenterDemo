export function addServer(id) {
  return {
    type: "ADD_SERVER",
    payload: id
  };
}

export function removeServer() {
  return {
    type: "REMOVE_SERVER",
  };
}

export function addApp(data) {
  return {
    type: "ADD_APP",
    payload: data
  };
}

export function removeApp(slug) {
  return {
    type: "REMOVE_APP",
    payload: slug
  };
}
