import React from 'react';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import ProjectWrapper from './ProjectWrapper';

export default class Content extends React.Component
{
    render() {
        switch (this.props.currentPage) {
            case 0:
                return (
                    <Introduction
                        navigation = {this.props.navigation}
                    />
                );
            case 1:
                return (
                    <div className="content">
                        <AboutMe/>
                    </div>
                );
            case 2:
                return (
                    <div className="content">
                        <ProjectWrapper/>
                    </div>
                );
            default:
                return (<div></div>);
        }
    }
}
