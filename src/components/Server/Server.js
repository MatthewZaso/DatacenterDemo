/**
 * @fileoverview A server that will exist on the canvas and contain multiple
 * or a single app.
 *
 * @author zaso.matthew@gmail.com (Matt Zaso)
 */
import React, { Component } from 'react';
import Application from '../Application/Application';
import { connect } from 'react-redux';
import './_server.scss';
import './_server-canvas.scss';

class Server extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="server-canvas__server" data-server-id={ this.props.id }>
        <div className="server-canvas__server__inner">
          {this.props.apps.map((data, index) => {
            return data.server === this.props.id ?
              <Application
                instanceId={data.instanceId}
                slug={data.slug}
                name={data.name}
                abbreviation={data.abbreviation}
                key={index} /> : '';
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apps: state.apps,
  };
};

export default connect(mapStateToProps)(Server);
