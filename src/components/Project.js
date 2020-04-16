import React from 'react';

export default class Project extends React.Component
{
    render(){
        return(
            <div className="project-container border">
                <div className="project-display">
                    <img src={this.props.gifPath} className="project-gif" />
                    <h2 className="project-title">{this.props.projectName}</h2>
                </div>
                <div className="project-description text-center">
                    <p className="scale-font">{this.props.projectName}</p>
                    <p className="scale-font">{this.props.description}</p>
                    <div className="text-center description-link">
                        <button className="description-button scale-font" href={this.props.sourceURL}><i class="fa fa-code" />Check out the Source Code<i className="fa fa-code" /></button>
                    </div>
                </div>
            </div>
        )
    }
}