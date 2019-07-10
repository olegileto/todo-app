import React from 'react';

const Todo = (props) => {
    const {todo: {id, todoName, done, modal}, onDone, onEdit, onDelete} = props;

    return (
        <div className='Todo'>
            <span style={{backgroundColor: done ? 'red' : 'white'}}>{todoName}</span>
            <button onClick={() => onDone(id)}>Done</button>
            <button onClick={() => onEdit(id)}>{modal ? 'Close' : "Edit"}</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
};

export default Todo;
