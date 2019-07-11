import React, {Component} from 'react';

export default class AddItemForm extends Component {
    state = {
        label: '',
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
            label: '',
        });
    };

    render() {
        return (
            <div className='modal-background'>
                <form className='AddItemForm' onSubmit={this.onSubmit}>
                    <span className='close-modal' onClick={this.props.onCloseModal}>X</span>
                    <h1>Add new todo</h1>
                    <input type='text' placeholder='Type something here...' onChange={this.onLabelChange}
                           value={this.state.label}/><br/>
                           <button className='submit-form'>Submit</button>
                </form>
            </div>
        )
    }
}