import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

export default class NotFound extends Component {
    render() {
        return (
            <div className='not-found'>
                <div className='content'>
                    <h1 className='heading'>Page Not Found</h1>
                    <p className='description'>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                    <Link className='home-link' to='/home'>Back to our site</Link>
                </div>
            </div>
        );
    }
}
