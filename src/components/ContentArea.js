import React from 'react';
import Content from './Content';

export default class ContentArea extends React.Component
{
    render(){
        return(
            <div className="content-container">
                <Content
                    currentPage = {this.props.currentPage}
                    navigation = {() => this.props.navigation}
                />
            </div>
        )
    }
}