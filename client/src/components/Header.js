import React from 'react';
import { Icon4 } from '../helpers/svg'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render(){

        return(
            <nav style={{backgroundColor: 'white'}}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo left" style={{
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'space-around',
                        padding: '0 15px',
                        background: '#222'
                    }}>
                        <Icon4 align="center" /><span style={{color:'#fff'}}>onnecto</span>                                                                                                                                                                                      
                    </a>
                                 
                    <ul id="nav-mobile" className="right hide-on-med-and-down" style={{padding: '0 10px'}}>
                        <li><Link to="/create-instructor" className="black-text">Become an Instructor</Link></li>
                        <li><Link to="/create-workspace" className="black-text">Create Workspace</Link></li>
                        <li><Link to="/frequenty_asked_questions" className="black-text">FAQs</Link></li>
                        <li>
                            <button className="right btn waves-effect waves-light customBtnColor" type="submit" name="action">Get Started
                                {/* <i className="material-icons right">send</i> */}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header





