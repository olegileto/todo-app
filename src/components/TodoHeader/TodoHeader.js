import React from 'react';

const TodoHeader = (props) => {
    return (
        <div className='TodoHeader'>
            <span>Todo: {props.todoCounter}</span>
            <span>Done: {props.doneCounter}</span>
        </div>
    )
};

export default TodoHeader;