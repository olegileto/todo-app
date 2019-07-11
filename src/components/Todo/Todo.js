import React from 'react';

const Todo = (props) => {
    const {todo: {id, todoName, done}, onDone, onDelete} = props;
    const doneClass = done ? ' done' : '';

    return (
        <div className={'Todo' + doneClass}>
            <div className={done ? 'done-block-visible' : 'done-block-hidden'}><span>✓</span></div>
            <span style={{marginLeft: done ? '110px' : 0}} className='todo-name'>{todoName}</span>

            <div className='todo-buttons'>
                <button onClick={() => onDone(id)} className='done-btn'>Done</button>
                <button onClick={() => onDelete(id)} className='delete-btn'>Delete</button>
            </div>
        </div>
    )
};

export default Todo;
