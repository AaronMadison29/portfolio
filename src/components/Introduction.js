import React from 'react';

export default class Introduction extends React.Component
{
    render(){
        return(
            <div className="introduction">
                        <h1>Hi!<br></br>
                        I'm Aaron</h1><br></br>
                        <button className="know-more" onClick={() => this.props.navigation(1)}>Learn More <i className="fa fa-check-square"></i></button>
                    </div>
        )
    }
}