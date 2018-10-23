import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import Tab from './Tab';

// asset
import instImage from '../../assets/images/inst1.png';

class Main extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return (
      <main>
          <div className="row text-center">
            {/* <div className="backCover"></div> */}
            <div className="coverText">
              <h2 className="flow-text text-center" style={{zIndex:1}}>
                <span style={{color:'rgb(233, 30, 99)'}} className="customTxt">43,554</span> Instructors & Tutorial Centres Accross <span style={{color:'rgb(30, 77, 146)'}} className="customTxt">Africa</span>
              </h2>
              <p className="text-center subdesc" style={{zIndex:1}}>Connecting you to professional near you. Brought to you by the largest global community of creatives.</p>
              <SearchContainer />  
            </div>                      
          </div>
          <Tab tabList={['All', 'Instructor', 'Tutorial Centre', 'Workspace']} />
      </main>
    )
  }
  
}

export default Main
