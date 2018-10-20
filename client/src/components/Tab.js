import React, { Component } from 'react';
import { capitalizeFirstLetter as capitalise } from '../helpers'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Select from '../components/Select';

export default withRouter(class Tab extends Component {

  constructor(props){
    super(props)
    this.state = {
        activeTab: "All"
    }
  }

  componentDidMount(){
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  handleToggle(item){
      this.setState({ activeTab: item});
  }

  render(){

    const tabList = this.props.tabList;
    const activeTab = this.state.activeTab;

    return (
        <div className="row">
          <div className="col s12 filter-container">
            <ul className="tabs col s5" style={{color:'rgb(227, 233, 237)'}}>
            {tabList.map( (item, i)=> {    
                console.log(activeTab, item, i)            
                return (
                    <li className={"tab col ".concat(activeTab == item ? "active" : "")} style={{textTransform:'capitalize'}} key={i}><Link to="/" className={activeTab == i ? "active" : ""} onClick={ (e)=> this.handleToggle(item)} >{capitalise(item)}</Link></li>
                )
            })}
            </ul>
            <Select data={['Popular','Recent']} placeholder="Filter Option" />
          </div>
          {tabList.map( (item, i)=> {
                return (
                    <div id={i} className="col s12" className={activeTab == i ? "active" : "hide"} key={i}>{capitalise(item)}</div>
                )
            })}
        </div>
    )
  }
  
})