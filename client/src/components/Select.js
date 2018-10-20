import React from 'react';

class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {

        const { data, placeholder } = this.props;

        console.log( data, 'select')

        return (
            <div className='input-field col s2' style={{margin:0}}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="" disabled>{placeholder}</option>
                    {data && data.map((item,i)=>{
                        return(<option key={i} value={item}>{item}</option>)
                    })}
                </select>
            </div>
        );
    }
}

export default Select

