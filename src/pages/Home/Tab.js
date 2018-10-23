import React, { Component, Fragment } from 'react';
import { capitalizeFirstLetter as capitalise } from '../../helpers'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Select from '../../components/Select';
import instImage from '../../assets/images/inst1.png';

import { listing } from '../../store/listing';

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
                return (
                    <li className={"tab col ".concat(activeTab == item ? "active" : "")} style={{textTransform:'capitalize'}} key={i}><Link to="/" className={activeTab == i ? "active" : ""} onClick={ (e)=> this.handleToggle(item)} >{capitalise(item)}</Link></li>
                )
            })}
            </ul>
            <Select data={['Popular','Recent']} placeholder="Filter Option" />
          </div>
          {tabList.map( (item, i)=> {
                return (
                    <div className="row"  key={i}>
                        <div id={i} className="col s12" className={activeTab == item ? "active" : "hide"} key={i}>{
                            listing.map((entity)=>{
                                return(
                                    <div className="col s12 m3 l3" key={`${item}${entity.userId}`}>
                                        <div className="card">
                                            <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator" src={instImage} />
                                            </div>
                                            <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                            <p><Link to="/profile" >This is a link</Link></p>
                                            </div>
                                            <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }
  
})