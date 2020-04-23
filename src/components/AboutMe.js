import React from 'react';
import Description from './Description';
import MySkills from './MySkills';

export default class AboutMe extends React.Component
{
    render(){
        return(
            <div className="about-me">
                <Description/>
                <MySkills/>
            </div>
        )
    }
}