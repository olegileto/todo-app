import React, {Component} from 'react';

import Todo from '../Todo/Todo';
import Modal from '../Modal/Modal';
import AddItemForm from '../AddItemForm/AddItemForm';
import TodoHeader from '../TodoHeader/TodoHeader';
import SearchPanel from "../SearchPanel/SearchPanel";
import FilterPanel from "../FilterPanel/FilterPanel";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                this.createTodoItem('Make something with pleasure.'),
                this.createTodoItem('Wake up you need make money!'),
                this.createTodoItem('I do not wanna wake up today...'),
            ],
            term: '',
            filter: 'all'
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

    searchTodo = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        return arr.filter((el) => el.todoName.toLowerCase().indexOf(term) > -1);
    };

    filterTodo = (arr, filter) => {
        switch (filter) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter((el) => !el.done);
            case 'done':
                return arr.filter((el) => el.done);
            default:
                return arr;
        }
    };

    onSearch = (term) => {
        this.setState({term})
    };

    onFilter = (filter) => {
        this.setState({filter});
    };

    render() {
        const {todoList, term, filter} = this.state;
        const visibleTodo = this.filterTodo(this.searchTodo(todoList, term), filter);
        const doneCounter = todoList.filter((el) => el.done).length;
        const todoCounter = todoList.length - doneCounter;

        return (
            <div className='TodoList'>
                <SearchPanel onSearch={this.onSearch}/>
                <FilterPanel filter={filter} onFilter={this.onFilter}/>
                <TodoHeader todoCounter={todoCounter} doneCounter={doneCounter}/>

                {visibleTodo.map((todo, key) => {
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
