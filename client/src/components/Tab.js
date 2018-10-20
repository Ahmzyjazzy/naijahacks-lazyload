import React, { Component } from 'react';
import { capitalizeFirstLetter as capitalise } from '../helpers'

export default class Tab extends Component {

  constructor(props){
    super(props)
    this.state = {
        tabIndex: 0
    }
  }

  handleToggle(e){
    console.log(e.target)
  }

  render(){

    const tabList = this.props.tabList;
    const tabIndex = this.state.tabIndex;

    return (
        <div className="row">
          <div className="col s12">
            <ul className="tabs" style={{color:'rgb(227, 233, 237)'}}>
            {tabList.map( (item, i)=> {
                return (
                    <li className="tab col" style={{textTransform:'capitalize'}} key={i}><a className={tabIndex == 0 ? "active" : ""} onClick={ (e)=> this.handleToggle(e)} >{capitalise(item)}</a></li>
                )
            })}
            </ul>
          </div>
          {tabList.map( (item, i)=> {
                return (
                    <div id={i} className="col s12" className={tabIndex == 3 ? "active" : "hidden"} key={i}>{capitalise(item)}</div>
                )
            })}
        </div>
    )
  }
  
};