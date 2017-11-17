import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';


class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul class="list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/German">German Line</Link></li>
                        <li><Link to="/Russian">Russian Line</Link></li>
                        <li><Link to="/British">British Line</Link></li>
                    </ul>
            </nav>
        );
    }
}

export default Navigation;