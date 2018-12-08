import React, { Component } from 'react';
import Nav from '../../../common/nav/Nav';


export default class UpcomingSession extends Component {
    navigate = (link) => {

        console.log('Link: ', link);
        return this.props.history.push(link);
    }


    render() {
        return(
            <div className="home">
                <Nav navigate = {this.navigate}/>
                <h2>I am the Add Upcoming Session Functionality</h2>
            </div>
        );
    }
}