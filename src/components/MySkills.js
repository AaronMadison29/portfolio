import React from 'react';

export default class Description extends React.Component
{
    render(){
        return(
            <div className="row skills-box">
                <div className="green scale-font col-sm-6 center myskills-parent">
                    <h1 className="myskills-child">My Skills</h1>
                </div>
                <div className="col-sm-6">
                    <ul className="list-group scale-font">
                        <li className="list-group-item">C#</li>
                        <li className="list-group-item">ASP.Net</li>
                        <li className="list-group-item">RESTful API Design</li>
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Object Oriented Design</li>
                        <li className="list-group-item">Algorithms and Data Structures</li>
                        <li className="list-group-item">Machine Learning and AI Concepts</li>
                    </ul>
                </div>
            </div>
        )
    }
}