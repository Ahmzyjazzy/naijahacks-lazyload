import React from 'react';
import { APP_LOGO } from '../constants'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'


class Header extends React.Component {

    render(){
        const handleGetStartedClick = () => {
            console.log('The getStarted link was clicked.');
            this.props.history.push("/signup");
        };

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
                                 
                    <ul id="nav-mobile" className="right hide-on-med-and-down" style={{padding: '0 10px'}}>
                        <li><Link to="/instructor-signup" className="black-text">Become an Instructor</Link></li>
                        <li><Link to="/create-workspace" className="black-text">Create Workspace</Link></li>
                        <li><Link to="/frequenty_asked_questions" className="black-text">FAQs</Link></li>
                        <li>
                            <button onClick={handleGetStartedClick} className="right btn waves-effect waves-light customBtnColor" type="submit" name="action">Get Started
                                {/* <i className="material-icons right">send</i> */}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header)





