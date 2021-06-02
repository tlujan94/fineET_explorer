import React from 'react';
import ReactDOM from 'react-dom';
import { Explorer } from './components/explorer';
import { Sidebar } from './components/sidebar';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.explorer = React.createRef();
        this.sidebar = React.createRef();
    }

    render() {
        return (
            <div>
                <Sidebar ref={this.sidebar}/>
                <Explorer ref={this.explorer}
                          toggleSidebar={this.toggleSidebar.bind(this)}
                          updateRadialCoords={this.updateRadialCoords.bind(this)}/>
            </div>
        );
    }

    addCircle(latlng, etr) {
        this.explorer.current.addCircle(latlng, etr);
    }

    toggleSidebar() {
        this.sidebar.current.toggleSidebar();
    }

    updateRadialCoords(latlng) {
        this.sidebar.current.updateRadialCoords(latlng);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));