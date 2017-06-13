'use strict';

import React from 'react';
import { Link } from 'react-router';
import djs from '../data/djs';
import ReactPlayer from 'react-player'

export default class DJPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const dj = djs.filter((dj) => dj.id === id)[0];
    const headerStyle = { backgroundImage: `url(/img/${dj.image})` };
    return (
      <div className='dj'>
        <header style={headerStyle}/>
        <section className='description'>
          <h2 className='name'>{dj.artist}</h2>
          <h2 className='location'>{dj.location}</h2>
          <h2 className='year'>{dj.year}</h2>
          <h4 className='reason'>{dj.reason}</h4>
        </section>
        <center>
          <ReactPlayer url={dj.url} playing />
          </center>
        <div className='navigateBack'>
          <Link to='/'>Back to Index</Link>
        </div>
      </div>
    );
  }
}
