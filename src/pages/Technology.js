import React, { Component } from 'react';
import data from '../data.json';
import './Technology.scss';

export default class Technology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            technology: data.technology[0],
            width: window.innerWidth
        };
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    handleClick = (technology) => {
        this.setState({
            technology: technology,
            width: window.innerWidth
        });
    };

    render() {
        return (
            <div className='technology'>
                <h1 className="subheading-3">
                    <span>03</span>
                    Space Launch 101
                </h1>
                <div className="technology-container">
                    <div className="technology-slide" >
                        {data.technology.map((technology, index) => {
                            return <span key={index} onClick={() => this.handleClick(technology)} className={technology === this.state.technology ? 'active' : ''}>{++index}</span>;
                        })}
                    </div>
                    <div className="technology-content">
                        <h2 className='top-text'>The terminology...</h2>
                        <h3 className="heading-3">{this.state.technology.name}</h3>
                        <p className="description">{this.state.technology.description}</p>
                    </div>
                    <div className="image-box">
                        <img className='technology-image' src={this.state.width > 768 ? this.state.technology.images.portrait : this.state.technology.images.landscape} alt={this.state.technology.name} />
                    </div>
                </div>
            </div>
        );
    }
}

