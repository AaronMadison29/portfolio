import React from 'react';

export default class Icons extends React.Component
{
    render(){
        return(
            <div className="icons">
                <div className="text-center navigation">
                    <a className="link" href="https://github.com/AaronMadison29">
                        <i className="fa fa-github-square fa-2x"></i>
                    </a>
                </div>
                <div className="text-center navigation">
                    <a className="link" href="https://www.linkedin.com/in/aaron-madison-229bb8196/">
                        <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}