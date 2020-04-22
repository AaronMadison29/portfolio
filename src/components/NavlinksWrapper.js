import React from 'react';
import Link from './Link';
import Resume from './Resume';

export default class NavlinksWrapper extends React.Component
{
    render(){
        return(
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
        )
    }
}