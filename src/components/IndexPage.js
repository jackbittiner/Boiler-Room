import React from 'react';
import DJPreview from './DJPreview';
import djs from '../data/djs';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="djs-selector">
          {djs.map(djData => <DJPreview key={djData.id} {...djData} />)}
        </div>
      </div>
    );
  }
}
