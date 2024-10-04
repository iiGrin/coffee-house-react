import { Component } from "react";

import Promo from "../promo/promo";

import './_app.scss';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Promo />
            </div>
        )
    }
}

export default App;