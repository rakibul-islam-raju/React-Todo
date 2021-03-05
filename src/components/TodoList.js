import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0">
                        <div className="card-body">
                            {filteredTodos.map((todo) => (
                                <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
