import React from 'react';
import Project from './Project';
import ProjectGif from '../img/Project.gif';
import ThriveGif from '../img/Thrive.gif';
import RouteWayGif from '../img/RouteWay.gif';

export default class ProjectWrapper extends React.Component
{
    render(){
        return (
            <div className="project-wrapper">
                <div className="page-title">
                    <h1 className="green">Projects</h1>
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
        )
    }
}