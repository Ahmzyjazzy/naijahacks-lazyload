import React from 'react';
import SearchContainer from './SearchContainer'

export default props => {
  return (
    <main>
        <div className="row text-center">
          <h2 className="flow-text text-center">
            <span style={{color:'rgb(233, 30, 99)'}} className="customTxt">43,554</span> Instructors & Tutorial Centres Accross <span style={{color:'rgb(30, 77, 146)'}} className="customTxt">Africa</span>
          </h2>
          <p className="text-center subdesc">Connecting you to professional near you. Brought to you by the largest global community of creatives.</p>
          <SearchContainer />
        </div>
        <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#test1">Test 1</a></li>
            <li className="tab col s3"><a className="active" href="#test2">Test 2</a></li>
            <li className="tab col s3"><a href="#test3">Tab 3</a></li>
            <li className="tab col s3"><a href="#test4">Test 4</a></li>
          </ul>
        </div>
        <div id="test1" className="col s12">Test 1</div>
        <div id="test2" className="col s12">Test 2</div>
        <div id="test3" className="col s12">Test 3</div>
        <div id="test4" className="col s12">Test 4</div>
      </div>
        <div className="row">
            <div cl ass="col s3">1</div>
            <div className="col s6">2</div>
            <div className="col s3">3</div>
        </div>
    </main>
  )
};