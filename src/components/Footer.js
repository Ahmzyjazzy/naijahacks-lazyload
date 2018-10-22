import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';

export default props => {
  return (
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12" style={{
                    display: 'flex',
                    flexFlow: 'column',
                    textAlign: 'left'
                }}>
                <h5 className="white-text">{APP_NAME}</h5>
                <p className="grey-text text-lighten-4">Connect with your favourite instructor </p>
              </div>
              <div className="col l4 offset-l2 s12" style={{
                    display: 'flex',
                    flexFlow: 'column',
                    textAlign: 'left'
                }}>
                <h5 className="white-text">Links</h5>
                <ul style={{display:'in-line'}}>
                  <li><Link className="grey-text text-lighten-3" to="/instructor-signup">Become an instructor</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/create-workspace">Create a workspace</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright.
            <Link className="grey-text text-lighten-3" to="/"> Created by TeamLazyLoad</Link>
            </div>
          </div>
        </footer>
  )
};