import React from 'react';

export default class ContactWrapper extends React.Component
{
    render(){
        return(
            <div>
                <h1 className="center name">Aaron Madison</h1>
                <div className="center info">
                    <a className="link" href="mailto:aaronmadison29@gmail.com" >
                        <i className="fa fa-envelope-square"></i>aaronmadison29@gmail.com</a>
                    <p><i className="fa fa-phone-square"></i>(414)429-6858</p>
                </div>
            </div>
        )
    }
}