import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import Tab from './Tab';

class Main extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return (
      <main>
          <div className="row text-center">
            <h2 className="flow-text text-center">
              <span style={{color:'rgb(233, 30, 99)'}} className="customTxt">43,554</span> Instructors & Tutorial Centres Accross <span style={{color:'rgb(30, 77, 146)'}} className="customTxt">Africa</span>
            </h2>
            <p className="text-center subdesc">Connecting you to professional near you. Brought to you by the largest global community of creatives.</p>
            <SearchContainer />
          </div>
          <Tab tabList={['All', 'Instructor', 'Tutorial Centre', 'Workspace']} />
      </main>
    )
  }
  
}

export default Main
