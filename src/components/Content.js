import React from 'react';
import Resume from './Resume';

export default class Content extends React.Component
{
    render() {
        switch (this.props.currentPage) {
            case 0:
                return (
                    <div className="introduction">
                        <h1>Hi!<br></br>
                        I'm Aaron</h1><br></br>
                        <button className="know-more" onClick={() => this.props.navigation(1)}>Learn More <i className="fa fa-check-square"></i></button>
                    </div>
                );
            case 1:
                return (
                    <div className="content">
                        <h1>About Me</h1>
                    </div>
                );
            case 2:
                return (
                    <div className="content">
                        <h1>Projects</h1>
                    </div>
                );
            case 3:
                return(
                    <Resume
                    />
                )
            default:
                return (<div></div>);
        }
    }
}