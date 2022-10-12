import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='text-box'>
                    <h1 className='heading-5'>So, you want to travel to</h1>
                    <h2 className='heading-1'>Space</h2>
                    <p className='description'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className='explore'>
                    <Link to='#' className='explore-link'>Explore</Link>
                </div>
            </div>
        );
    }
}
