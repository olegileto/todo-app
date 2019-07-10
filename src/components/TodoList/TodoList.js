import React, {Component} from 'react';

import Todo from '../Todo/Todo';
import Modal from '../Modal/Modal';
import AddItemForm from '../AddItemForm/AddItemForm';
import TodoHeader from '../TodoHeader/TodoHeader';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                this.createTodoItem('Make something with pleasure.'),
                this.createTodoItem('Wake up you need make money!'),
                this.createTodoItem('I do not wanna wake up today...'),
            ]
        };
    }

    maxId = 1;

    createTodoItem(name) {
        return {
            id: this.maxId++,
            todoName: name,
            done: false,
            modal: false
        }
    }

    toggleProperty = (arr, id, propName) => {
        const arrayIndex = arr.findIndex((el) => el.id === id);
        const oldItem = arr[arrayIndex];

        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, arrayIndex),
            newItem,
            ...arr.slice(arrayIndex + 1)
        ];
    };

    toggleDone = (id) => {
        this.setState(({todoList}) => {
            return {
                todoList: this.toggleProperty(todoList, id, 'done')
            }
        })
    };

    toggleModal = (id) => {
        this.setState(({todoList}) => {
            return {
                todoList: this.toggleProperty(todoList, id, 'modal')
            }
        })
    };

    deleteItem = (id) => {
        this.setState(({todoList}) => {
            const arrayIndex = todoList.findIndex((el) => el.id === id);
            const newArray = [
                ...todoList.slice(0, arrayIndex),
                ...todoList.slice(arrayIndex + 1)
            ];

            return {
                todoList: newArray
            }
        })
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoList}) => {
            const newArray = [
                ...todoList,
                newItem
            ];

            return {
                todoList: newArray
            }
        })
    };

    render() {
        const {todoList} = this.state;
        const doneCounter = todoList.filter((el) => el.done).length;
        const todoCounter = todoList.length - doneCounter;

        return (
            <div className='TodoList'>
                <TodoHeader todoCounter={todoCounter} doneCounter={doneCounter}/>
                {todoList.map((todo, key) => {
                        return (
                            <div key={key}>
                                <Todo
                                    todo={todo}
                                    onDone={this.toggleDone}
                                    onEdit={this.toggleModal}
                                    onDelete={this.deleteItem}
                                />
                                {todo.modal ? <Modal todo={todo}/> : null}
                            </div>

                        )
                    }
                )}

                <AddItemForm onAdd={this.addItem}/>
            </div>
        )
    }
}
