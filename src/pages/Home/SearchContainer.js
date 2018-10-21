import React, { Component } from 'react';

export default class SearchContainer extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.initPlugin()
    }

    initPlugin(){
        let elems = document.querySelectorAll('#search');
        let instances = M.Autocomplete.init(elems, {
                data: {
                "Apple": null,
                "Microsoft": null,
                "Google": 'https://placehold.it/250x250'
            }});
        console.log(`plugin initialize`)
    }

    render(){        

        return (
            <form className="col s12">
                <div className="row" style={{display: 'flex'}}>
                    <div className="input-field col s6 searchcont" style={{margin: '0 auto'}}>
                        <input placeholder="Enter text here to search" id="search" type="text" className="validate" style={{
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            paddingLeft: '10px',
                        }}/>
                        <button className="btn" style={{minHeight: '82%', position:'absolute', top:0, right:0, bottom: 0}}><i className="material-icons">search</i></button>
                    </div>
                </div>
            </form>
        )
    } 
}