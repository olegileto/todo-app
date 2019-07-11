import React from 'react';

const TodoHeader = (props) => {
    return (
        <div className='TodoHeader'>
            <span className='todo-qty'>Todo: <span className='todo-qty-number'>{props.todoCounter}</span></span>
            <span className='done-qty'>Done: <span className='done-qty-number'>{props.doneCounter}</span></span>
        </div>
    )
};

export default TodoHeader;