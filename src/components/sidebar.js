import React from 'react';

import './sidebar.css';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
        this.sidebar = React.createRef();

        this.renderButton = this.renderButton.bind(this);
    }

    render() {
        return (
            <div id='mySidebar' className='sidebar' ref={this.sidebar}>
                {this.renderButton()}
            </div>
        );
    }

    renderButton() {
        if (this.state.isOpen)
            return <button className='btn' onClick={this.toggleSidebar.bind(this)}>&times;</button>
        else
            return <button className='btn' onClick={this.toggleSidebar.bind(this)}>&#9776;</button>
    }

    toggleSidebar() {
        const width = this.state.isOpen ? '32px' : '256px';
        const toggle = !this.state.isOpen;
        this.sidebar.current.style.width = width;
        this.setState({
            isOpen: toggle
        });
    }
}