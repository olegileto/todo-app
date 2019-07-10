import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel'
import FilterPanel from '../FilterPanel/FilterPanel';

const TodoHeader = (props) => {
    return (
        <div className='TodoHeader'>
            <SearchPanel/>
            <FilterPanel/>

            <span>Todo: {props.todoCounter}</span>
            <span>Done: {props.doneCounter}</span>
        </div>
    )
};

export default TodoHeader;