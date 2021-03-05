import React from 'react';

function Todo({ todo, todos, setTodos }) {
    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    function completeHandler() {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    }

    return (
        <div>
            <ul className="list-group border-0">
                <li
                    className={`list-group-item border-0 mb-2 text-white d-flex justify-content-between ${
                        todo.completed === true ? 'bg-success' : 'bg-primary'
                    }`}
                >
                    {todo.text}
                    <div className="d-flex">
                        <button
                            onClick={completeHandler}
                            type="button"
                            className={`btn btn-sm ${
                                todo.completed ? 'btn-danger' : 'btn-success'
                            }`}
                        >
                            <i className={`fa fa-${todo.completed ? 'times' : 'check'}`} />
                        </button>
                        <button
                            onClick={deleteHandler}
                            type="button"
                            className="btn btn-sm btn-danger ml-2"
                        >
                            <i className="fa fa-trash-alt" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Todo;
