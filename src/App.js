import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    // state Stuff
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Load once when the app start
    useEffect(() => {
        function getLocalTodos() {
            if (localStorage.getItem('todos') !== null) {
                setTodos(JSON.parse(localStorage.getItem('todos')));
            }
            console.log(JSON.parse(localStorage.getItem('todos')));
        }
        getLocalTodos();
    }, []);

    // Save todos to local storage
    useEffect(() => {
        // Save to local
        function saveLocalTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        saveLocalTodos();
    }, [todos]);

    // filter todos
    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case 'completed':
                    setFilteredTodos(todos.filter((todo) => todo.completed === true));
                    break;

                case 'uncompleted':
                    setFilteredTodos(todos.filter((todo) => todo.completed === false));
                    break;

                default:
                    setFilteredTodos(todos);
                    break;
            }
        };
        filterHandler();
    }, [status, todos]);

    return (
        <div className="App">
            <div className="container">
                <h2 className="text-center py-2">React Todos</h2>
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
            </div>
        </div>
    );
}

export default App;
