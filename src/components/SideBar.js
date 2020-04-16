import React from 'react';
import Headshot from '../img/Headshot.png';
import Link from './Link'
import Resume from './Resume';

export default class SideBar extends React.Component
{
    render(){
        return (
                <div className="collapse-sm side-bar">
                    <div className="image-container">
                        <img className="headshot" src={Headshot} alt="Headshot" />
                    </div>
                    <div>
                        <h1 className="center name">Aaron Madison</h1>
                        <div className="center info">
                            <a className="link" href="mailto:aaronmadison29@gmail.com" >
                                <i className="fa fa-envelope-square"></i>aaronmadison29@gmail.com</a>
                            <p><i className="fa fa-phone-square"></i>(414)429-6858</p>
                        </div>
                    </div>
                    <div className="navlinks">
                        <Link
                            navigation={this.props.navigation}
                            text={"Introduction"}
                            pageNumber={0}
                            currentPage={this.props.currentPage}
                        />
                        <Link
                            navigation={this.props.navigation}
                            text={"About Me"}
                            pageNumber={1}
                            currentPage={this.props.currentPage}
                        />
                        <Link
                            navigation={this.props.navigation}
                            text={"Projects"}
                            pageNumber={2}
                            currentPage={this.props.currentPage}
                        />
                        <Resume
                        />
                    </div>
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
                    <div className="thanks">
                        <p>
                            Thank you for visiting my portfolio. Please feel free to contact me anytime.
                    </p>
                    </div>
                </div>
        )
    }
}