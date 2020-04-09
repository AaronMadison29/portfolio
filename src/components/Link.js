import React from 'react';

export default class Link extends React.Component
{
    render(){
        return(
            <div className="text-center navigation">
                <span className={this.props.pageNumber === this.props.currentPage ? "activeLink":"link"} onClick={() => this.props.navigation(this.props.pageNumber)}>
                    {this.props.text}
                </span>
            </div>
        )
    }
}