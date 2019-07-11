import React, {Component} from 'react';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearch = (e) => {
        const term  = e.target.value;
        this.setState({term});
        this.props.onSearch(term);
    };

    render() {
        return (
            <div className='SearchPanel'>
                <input type='text' placeholder='Find your task...' value={this.state.term} onChange={this.onSearch}/>
            </div>
        )
    }
}
