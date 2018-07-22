import { createStore } from "redux";
import data from "../reducers/reducers";

export default createStore(data, {
  servers: [{
    id: 0,
    apps: [ 1, 2 ]
  }, {
    id: 1,
    apps: []
  }, {
    id: 2,
    apps: []
  }, {
    id: 3,
    apps: []
  }],
  apps: [{
    instanceId: 1,
    slug: 'spark',
    name: 'Spark',
    abbreviation: 'Sp',
    server: 0
  }, {
    instanceId: 2,
    slug: 'hadoop',
    name: 'Hadoop',
    abbreviation: 'Hd',
    server: 0
  }]
});
