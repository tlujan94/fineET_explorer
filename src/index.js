import React from 'react';
import ReactDOM from 'react-dom';
import { Explorer } from './components/explorer';
import { Sidebar } from './components/sidebar';

//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.explorer = React.createRef();
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <Explorer ref={this.explorer}/>
            </div>
        );
    }

    addCircle(latlng, etr) {
        this.explorer.current.addCircle(latlng, etr);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));