import React from 'react';
import Navbar from './navbar'
import Maps from './map'
import Mm from './mm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Route exact path="/" component={Mm} />
                <Route path="/waterways" render={() => <Maps content={'waterways'} />} />
                <Route path="/agri" render={() => <Maps content={'agri'} />} />
                <Route path="/ei" render={() => <Maps content={'ei'} />} />
            </Router>
        </div>
    );
}
export default App;
