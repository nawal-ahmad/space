import React, { Component } from 'react';
import data from '../data.json';
import './Destination.scss';

export default class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: data.destinations[0],
        };
    }

    handleClick = (destination) => {
        this.setState({
            destination: destination,
        });
    };

    render() {
        return (
            <div className='destination'>
                <div className='image-box'>
                    <h1 className='subheading-3'><span>01</span>Pick your destination</h1>
                    <img className='destination-image' src={this.state.destination.images.png} alt="planet" />
                </div>
                <div className='text-box'>
                    <nav className='destination-nav'>
                        {data.destinations.map((destination) => {
                            return <span onClick={() => this.handleClick(destination)} className={destination === this.state.destination ? 'active' : ''}>{destination.name}</span>;
                        })}
                    </nav>
                    <h1 className='destination-title'>{this.state.destination.name}</h1>
                    <p className='destination-para'>{this.state.destination.description}</p>
                    <div className='destination-stats'>
                        <div className='destination-distance'>
                            <h5 className='subheading-2'>avg. distance</h5>
                            <h6 className='subheading-1'>{this.state.destination.distance}</h6>
                        </div>
                        <div className='destination-time'>
                            <h5 className='subheading-2'>EST. Travel time</h5>
                            <h6 className='subheading-1'>{this.state.destination.travel}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
