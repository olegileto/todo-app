import React, {Component} from 'react';

export default class FilterPanel extends Component {
    state = {
        filter: 'all'
    };

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const {filter, onFilter} = this.props;

        return (
            <div className='FilterPanel'>
                {this.buttons.map((button, key) => {
                    const isActive = filter === button.name;
                    return (
                        <button key={key} name={button.name}
                                onClick={() => onFilter(button.name)}>{button.label}</button>
                    );
                })}
            </div>
        )
    }
}

