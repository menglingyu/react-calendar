import React, { Component } from 'react';
import './App.css';
import {
    Calendar
} from './Components'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Calendar
                    minDate="2019-02-24"
                    locale="zh"
                    onSelect={(v) => console.log(v)}
                />
            </div>
        );
    }
}

export default App;
