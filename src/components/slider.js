import React from 'react';

import './slider.css';

export class Slider extends React.Component {
    render() {
        return (
            <div className='slidercontainer'>
                <input type='range' min={1} max={100} value={50} step={1} className='slider' onInput={() => console.log('here')} id='myslider'/>
            </div>
        );
    }

    componentDidMount() {
        this.slider = document.getElementById('myslider');
        this.slider.oninput = function() {
            console.log(this.value);
        }
    }
}