import React from 'react';
import SearchContainer from './SearchContainer'

export default props => {
  return (
    <main>
        <div className="row text-center" style={{width:'90%'}}>
          <h2 className="flow-text text-center" style={{
            fontSize: '2em',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            43,554 Instructors & Tutorial Centres Accross Africa
          </h2>
          <p className="text-center" style={{
            fontSize: '1.5em',
            textAlign: 'center'
          }}>Connecting you to professional near you. Brought to you by the largest global community of creatives.</p>
          <SearchContainer />
        </div>
        <div className="row">
            <div cl ass="col s3">1</div>
            <div className="col s6">2</div>
            <div className="col s3">3</div>
        </div>
    </main>
  )
};