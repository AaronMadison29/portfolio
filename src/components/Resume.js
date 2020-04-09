import React from 'react';

export default class Resume extends React.Component
{
    render(){
        return(
            <div className="content">
                <object data='https://github.com/AaronMadison29/Portfolio/blob/master/src/img/Aaron%20Madison%20Resume.pdf'
                    type='application/pdf'
                    width='100%'
                    height='100%'></object>
            </div>
        )
    }
}