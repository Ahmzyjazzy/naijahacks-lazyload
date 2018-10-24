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
    let exist = false;

    console.log(' ()=> ', listing);

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
                                if(entity.entityType.toLocaleLowerCase() == item.toLowerCase() || item.toLowerCase() == 'all'){
                                    exist = true;
                                     return(
                                        <div className="col s12 m3 l3" key={`${item}${entity.id}`}>
                                            <div className="card">
                                                <div className="card-image waves-effect waves-block waves-light" style={{background:`url(${entity.banner})`, height: '100px',
                                                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                                                }}>
                                                <img className="activator" src={entity.avatar} style={{width:'80px', height:'80px',
                                                    borderRadius: '50%',
                                                    border: '2px solid rgb(255, 255, 255)',
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '10px'
                                                }} />
                                                </div>
                                                <div className="card-content" style={{minHeight:'225px'}}>
                                                <span className="card-title activator grey-text text-darken-4" style={{fontWeight: '600',fontSize: '14px'}}>{entity.entityName}<i className="material-icons right">more_vert</i></span>
                                                <div className="col s12" style={{padding:'0 0', display: 'flex', justifyContent: 'start'}}>
                                                   <span className="card-title activator grey-text text-darken-4" style={{fontWeight: '600',fontSize: '14px'}}>{entity.state}</span>
                                                    <span className="card-title activator grey-text text-darken-4" style={{fontWeight: '600',fontSize: '14px', paddingLeft:'5px'}}>{entity.city}</span>
                                                </div>
                                                {
                                                    entity.skills.map((skill)=>{
                                                        return (<div className="chip">
                                                            {skill}
                                                        </div>)
                                                    })
                                                }
                                                <p style={{padding: '5px 0', cursor:'pointer'}}><a onClick={ (e)=> { window.localStorage.setItem('currEntity', JSON.stringify(entity)); this.props.history.push('/profile') }}>View more</a></p>
                                                </div>
                                                <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4">About<i className="material-icons right">close</i></span>
                                                <p>{entity.description}</p>
                                                </div>
                                            </div>
                                        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                    )
                                     } else{
                                    exist = false
                                    return(
                                        ''
                                    )
                                }
                               
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