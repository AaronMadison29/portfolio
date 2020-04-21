import React from 'react';

export default class ProjectDispaly extends React.Component
{
    render(){
        return(
            <div className="project-display">
                    <img src={this.props.gifPath} className="project-gif" />
                    <h2 className="project-title">{this.props.projectName}</h2>
                </div>
        )
    }
}