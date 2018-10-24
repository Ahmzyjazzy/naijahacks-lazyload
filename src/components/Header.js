import React from 'react';
import { APP_LOGO } from '../constants'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    componentDidMount(){
        const elems = document.querySelectorAll('.dropdown-trigger');
        const instances = M.Dropdown.init(elems, {});
    }

    render(){
        const handleGetStartedClick = () => {
            console.log('The getStarted link was clicked.');
            this.props.history.push("/signup");
        };

        const user = window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : "";
        
        return(
            <nav style={{backgroundColor: 'white'}} className="navbar-fixed">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left" style={{
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'space-around',
                        padding: '0 15px',
                        background: '#222'
                    }}>
                        {APP_LOGO}                                                                                                                                                                                     
                    </Link>
                    {
                       (user == "" || user == null) ? (
                            <ul id="nav-mobile" className="right hide-on-med-and-down" style={{padding: '0 10px'}}>
                                <li><Link to="/instructor-signup" className="black-text">Become an Instructor</Link></li>
                                <li><Link to="/create-workspace" className="black-text">Create Workspace</Link></li>
                                <li><Link to="/frequenty_asked_questions" className="black-text">FAQs</Link></li>
                                <li><Link to="/login" className="black-text">Login</Link></li>
                                <li>
                                    <button onClick={handleGetStartedClick} className="right btn waves-effect waves-light customBtnColor" type="submit" name="action">Get Started
                                        {/* <i className="material-icons right">send</i> */}
                                    </button>
                                </li>
                            </ul>
                        ) : 
                        (
                            <ul id="nav-mobile" className="right hide-on-med-and-down" style={{padding: '0 10px'}}>
                                <li><Link to="/instructor-signup" className="black-text">Become an Instructor</Link></li>
                                <li><Link to="/create-workspace" className="black-text">Create Workspace</Link></li>
                                <li><Link to="/frequenty_asked_questions" className="black-text">FAQs</Link></li>
                                <li>
                                    <a style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            color: 'rgb(0, 0, 0)',
                                            display: 'flex',
                                            color: 'rgb(255, 255, 255)',
                                              top: '18px'
                                    }} className='dropdown-trigger btn customBtnColor' href='' data-target='dropdown1'><i className="material-icons" style={{color: 'rgb(0, 0, 0)',fontSize: '2.5em'}}>account_circle</i> {user.fullName} </a>
                                    <ul id='dropdown1' className='dropdown-content'>
                                        <li><Link to="/me">My Profile</Link></li>
                                        <li><Link to="/user-settings/">Account Setting</Link></li>
                                        <li className="divider" tabindex="-1"></li>
                                        <li><a href="" onClick={
                                            (e)=> {
                                                window.localStorage.clear();
                                                window.location.reload();
                                            }
                                        }>Logout</a></li>
                                        <li><a href="#!"><i className="material-icons">view_module</i>Help</a></li>
                                    </ul>
                                </li>
                            </ul>
                        )
                    }
                                        
                </div>
            </nav>
        )
    }
}

export default withRouter(Header)





