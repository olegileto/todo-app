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

    toggleDone = (id) => {
        this.setState(({todoList}) => {
            const arrayIndex = todoList.findIndex((el) => el.id === id);

            const oldItem = todoList[arrayIndex];
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };

            const newArray = [
                ...todoList.slice(0, arrayIndex),
                newItem,
                ...todoList.slice(arrayIndex + 1)
            ];

            return {
                todoList: newArray
            }
        })
    };

    toggleModal = (id) => {
        const {todoList} = this.state;
        const modalAction = todoList.map(item => item.id === id ? {...item, modal: !item.modal} : item);

        this.setState(prevState => ({
            ...prevState,
            todoList: [...modalAction]
        }));
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
        const doneCounter = this.state.todoList.filter((el) => el.done).length;
        const todoCounter = this.state.todoList.length - doneCounter;

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
