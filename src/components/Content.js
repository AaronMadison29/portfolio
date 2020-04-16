import React from 'react';
import Project from './Project';
import ProjectGif from '../img/Project.gif';
import RouteWayGif from '../img/RouteWay.gif';
import ThriveGif from '../img/Thrive.gif';

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
                        <div className="about-me">
                            <div>
                                <div className="green scale-font">
                                    <h1>Hi, I'm Aaron Madison</h1>
                                </div>
                                <div>
                                    <h3 className="about-me-content scale-font">
                                        I’m a Software Developer currently seeking work in the Greater Milwaukee area. I specifically enjoy working on back-end database and API technologies, but most of all I love to learn new things. Through my years in the grocery vendor sales market I learned many lessons that helped me climb the ranks to become the youngest salesman employed by Nestle, while simultaneously overseeing the largest route in the state of Wisconsin. This was all due to my determination and willingness to learn new things and advance myself. I intend to bring a similar determination to the Software Development field, learning as much as I can from veterans in the business. One day I hope to work on the AI and Machine Learning technologies that continue to revolutionize today’s world.
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className="green scale-font">
                                    <h1>My Skills</h1>
                                </div>
                                <div>
                                    <ul className="list-group scale-font">
                                        <li className="list-group-item">C#</li>
                                        <li className="list-group-item">ASP.Net</li>
                                        <li className="list-group-item">RESTful API Design</li>
                                        <li className="list-group-item">Java</li>
                                        <li className="list-group-item">Python</li>
                                        <li className="list-group-item">React</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="content">
                        <div className="page-title">
                            <h1 className="green scale-font">Projects</h1>
                        </div>
                        <div className="project-area">
                            <div className="row projects-container-row">
                                <div className="col-sm-4">
                                    <Project
                                        gifPath={RouteWayGif}
                                        sourceURL={"https://github.com/AaronMadison29/RouteWay"}
                                        projectName="RouteWay"
                                        description="Over my years as a sales representative for one of the worlds largest vendor companies, I noticed most companies were operating with very dated technology, and the few pieces of current generation technology they did have rarely functioned. RouteWay is an APP I’ve designed to improve the lives and efficiency of grocery vendors during their workday."
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Project
                                        gifPath={ThriveGif}
                                        sourceURL="https://github.com/AaronMadison29/Thrive"
                                        projectName="Thrive"
                                        description="Thrive is a communication app for Teachers, Students, and Parents. For the development of this APP I took the role of Development Lead, and lead my team to a great final product."
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Project
                                        gifPath={ProjectGif}
                                        sourceURL="https://github.com/AaronMadison29/Portfolio"
                                        projectName="This Portfolio"
                                        description="This portfolio site was designed by myself to display my skills in React, while also portraying my other skills and projects, as well as a brief introduction as to who I am."
                                    />
                                </div>
                            </div>
                            <div className="row projects-container-row">
                                <div className="col-sm-4">
                                    <Project
                                        gifPath={ProjectGif}
                                        sourceURL="https://github.com/AaronMadison29/Custom-List"
                                        projectName="Custom List"
                                        description="This Custom List project is a full re-development of the built in C# list class, it helped me to learn the ins and outs of data structures within C# and gave me a better understanding of the List class itself."
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Project
                                        gifPath={ProjectGif}
                                        sourceURL="https://github.com/AaronMadison29/Battleship"
                                        projectName="Battleship Game"
                                        description="This project is a fully-functional console game using the rules of the Battlship board game for 0, 1, or 2 players. My favorite part of designing this game was designing the logic for the computer players. Their targetting is based on several factors that allowed one computer to win in only 20 turns(Only 6 missed shots)!"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Project
                                        gifPath={ProjectGif}
                                        sourceURL="https://github.com/AaronMadison29/BinarySearchTree"
                                        projectName="Binary Search Tree"
                                        description="This project was my first attempt at creating and using a Binary Search tree. It helped me learn more about how this type of data structure functions, as well as it's use cases."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (<div></div>);
        }
    }
}
