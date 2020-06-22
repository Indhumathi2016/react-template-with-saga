import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store, history} from 'redux/store';
import Routes from "./routes";


function App() {
    return (
        <Provider store={store}>
            <Routes history={history}/>
        </Provider>
    );
}

export default App;
