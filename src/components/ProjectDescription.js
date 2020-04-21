import React from 'react';

export default class ProjectDescription extends React.Component
{
    render(){
        return(
            <div className="project-description text-center">
                <h2 >{this.props.projectName}</h2>
                <p className="scale-font margin-2">{this.props.description}</p>
                <div className="text-center description-link">
                    <form action={this.props.sourceURL} method="get" target="_blank">
                        <button className="description-button scale-font"><i className="fa fa-code" />Check out the Source Code<i className="fa fa-code" /></button>
                    </form>
                </div>
            </div>
        )
    }
}