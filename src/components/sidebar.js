import React from 'react';

import './sidebar.css';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
        this.sidebar = React.createRef();
    }

    render() {
        return (
            <div id='mySidebar' className='sidebar' ref={this.sidebar}>
                <button className='btn' onClick={this.toggleSidebar.bind(this)}>&times;</button>
            </div>
        );
    }

    toggleSidebar() {
        const width = this.state.isOpen ? '0px' : '256px';
        const toggle = !this.state.isOpen;
        this.sidebar.current.style.width = width;
        this.setState({
            isOpen: toggle
        });
    }
}