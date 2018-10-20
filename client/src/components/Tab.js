import React from 'react';
import SearchContainer from './SearchContainer'

export default class Main {

  constructor(props){
    super(props)
    this.state = {
        tabIndex: 0
    }
  }

  handleToggle(e){
    console.log(e)
  }

  return(){
    return (
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a className={tabIndex == 0 ? "active" : ""} onClick={ (e)=> this.handleToggle(e)} >Test 1</a></li>
              <li className="tab col s3"><a className={tabIndex == 1 ? "active" : ""} onClick={ (e)=> this.handleToggle(e)}>Test 2</a></li>
              <li className="tab col s3"><a className={tabIndex == 2 ? "active" : ""} onClick={ (e)=> this.handleToggle(e)}>Tab 3</a></li>
              <li className="tab col s3"><a className={tabIndex == 3 ? "active" : ""} onClick={ (e)=> this.handleToggle(e)}>Test 4</a></li>
            </ul>
          </div>
          <div id="test1" className="col s12" className={tabIndex == 3 ? "active" : ""}>Test 1</div>
          <div id="test2" className="col s12" className={tabIndex == 4 ? "active" : ""}>Test 2</div>
          <div id="test3" className="col s12" className={tabIndex == 5 ? "active" : ""}>Test 3</div>
          <div id="test4" className="col s12" className={tabIndex == 6 ? "active" : ""}>Test 4</div>
        </div>
    )
  }
  
};