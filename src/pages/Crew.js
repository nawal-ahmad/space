import React, { Component } from 'react';
import data from '../data.json';
import './Crew.scss';
export default class Crew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crew: data.crew[0],
        };
    }
    handleClick = (crew) => {
        this.setState({
            crew: crew,
        });
    };

    render() {
        return (
            <div className='crew'>
                <div className="text-box">
                    <h1 className="subheading-3">
                        <span>02</span>
                        Meet your crew
                    </h1>
                    <div className="crew-content">
                        <h2 className="heading-4">{this.state.crew.role}</h2>
                        <h3 className="heading-3">{this.state.crew.name}</h3>
                        <p className="description">{this.state.crew.bio}</p>
                    </div>
                    <div className="crew-slides">
                        {data.crew.map((crew, index) => {
                            return <span key={index} onClick={() => this.handleClick(crew)} className={crew === this.state.crew ? 'active' : ''}></span>;
                        })}
                    </div>
                </div>
                <div className="image-box">
                    <img className='crew-image' src={this.state.crew.images.png} alt={this.state.crew.name} />
                </div>
            </div>
        );
    }
}
