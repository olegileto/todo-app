import React, {Component} from 'react';

export default class AddItemForm extends Component{
    render() {
        return (
            <div className='AddItemForm'>
                <button onClick={() => this.props.onAdd('Txt')}>Add item</button>
            </div>
        )
    }
}