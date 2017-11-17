import React, { Component } from 'react';
import './App.css';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from "./components/pages/Home";
import German from './components/pages/German'
import Russian from './components/pages/Russian'
import British from "./components/pages/British";

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Header/>
                <div class="row">
                    <div class="col-9">
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/German' component={German}/>
                        <Route exact path='/Russian' component={Russian}/>
                        <Route exact path='/British' component={British}/>
                    </div>
                    <div class="col-3">
                        <Navigation/>
                    </div>
                </div>

          <Footer/>
        </div>
        </Router>
    );
  }
}

export default App;

