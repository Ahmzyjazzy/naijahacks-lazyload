import React, { Component } from 'react';

export default class SearchContainer extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        return (
            <form class="col s12">
                <div class="row" style={{display: 'flex'}}>
                    <div class="input-field col s6" style={{margin: '0 auto'}}>
                        <input placeholder="Enter text here to search" id="search" type="text" class="validate" style={{
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            paddingLeft: '10px',
                            background: ''
                        }}/>
                    </div>
                </div>
            </form>
        )
    } 
}