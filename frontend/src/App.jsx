import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";

import "./index.css";
import { Provider } from "react-redux";
import { store } from './Store'
import Routers from "./Routers";

let persistor = persistStore(store)

const App = () => (
    <div>
        <Routers />
    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>, document.getElementById("app"));
