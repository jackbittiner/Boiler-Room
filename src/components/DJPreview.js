'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class DJPreview extends React.Component {
  render() {
    return (
      <Link to={`/dj/${this.props.id}`}>
        <div className="dj-preview">
          <img src={`img/${this.props.image}`}/>
        </div>
      </Link>
    );
  }
}
