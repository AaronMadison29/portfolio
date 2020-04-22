import React from 'react';

export default class ImageWrapper extends React.Component
{
    render(){
        return(
            <div className="image-container">
                <img className="headshot" src={this.props.headshot} alt="Headshot" />
            </div>
        )
    }
}