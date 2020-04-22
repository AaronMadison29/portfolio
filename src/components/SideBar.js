import React from 'react';
import Headshot from '../img/Headshot.png';
import ContactWrapper from './ContactWrapper';
import NavlinksWrapper from './NavlinksWrapper';
import Icons from './Icons';
import Thanks from './Thanks';
import ImageWrapper from './ImageWrapper';


export default class SideBar extends React.Component
{
    render(){
        return (
                <div className="collapse-sm side-bar">
                    <ImageWrapper
                        headshot = {Headshot}
                    />
                    <ContactWrapper/>
                    <NavlinksWrapper
                        navigation = {this.props.navigation}
                        currentPage = {this.props.currentPage}
                    />
                    <Icons/>
                    <Thanks/>
                </div>
        )
    }
}