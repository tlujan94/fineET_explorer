import React from 'react';
import ReactDOM from 'react-dom';
import { Explorer } from './components/explorer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Explorer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));