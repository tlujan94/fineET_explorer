import React from 'react';
import ReactDOM from 'react-dom';
import { Explorer } from './components/explorer';
import { Toolbar } from './components/toolbar';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.explorer = React.createRef();
    }

    render() {
        return (
            <div>
                <Toolbar addCircle={this.addCircle.bind(this)}/>
                <Explorer ref={this.explorer}/>
            </div>
        );
    }

    addCircle(latlng, etr) {
        this.explorer.current.addCircle(latlng, etr);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));