import React from 'react';
import ReactDOM from 'react-dom';
import { Explorer } from './components/explorer';
import { Toolbar } from './components/toolbar';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <Explorer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));