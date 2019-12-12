import React, {useState} from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';


import {addFeature, removeFeature} from "./actions/featureActions";
// import {additonalPrice, car, additionalFeatures} from "./reducers/featureReducer";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

// Step I- Create the reux store


const App = (props) => {
  
  // const[state, setState]=useState();

  const addFeatures = feature => {
    props.addFeature(feature)
}
   
  const removeFeatures = feature => {
    props.removeFeature(feature)
  };


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeatures={removeFeatures}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeatures={addFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(App);
