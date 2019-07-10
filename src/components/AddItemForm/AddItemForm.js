import React, {Component} from 'react';

export default class AddItemForm extends Component{
    state = {
      label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);

        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className='AddItemForm' onSubmit={this.onSubmit}>
                <input type='text' placeholder='Add something to list...' onChange={this.onLabelChange} value={this.state.label}/>
                <button>Add item</button>
            </form>
        )
    }
}