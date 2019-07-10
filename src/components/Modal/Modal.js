import React from 'react';

const Modal = (props) => {
    const {todo: {id, todoName}, doneEdit} = props;

    return (
        <div className='Modal'>
            <input type='text' placeholder="Change title" name='todoName'/>
            <button onClick={() => doneEdit(id, todoName)}>Done</button>
        </div>
    )
};

export default Modal;
