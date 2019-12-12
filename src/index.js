import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {featureReducer} from "./reducers/featureReducer";
import {Provider} from "react-redux";
import {createStore} from "redux";


import 'bulma/css/bulma.css';
import './styles.scss';

//Wrap App in the provider component and pass in the store object
const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}> 
<App />
</Provider>, rootElement);
