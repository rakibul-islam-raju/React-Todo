import React, { useState } from 'react';

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    const [id, setId] = useState(0);

    function idGenerator(_id) {
        setId(_id + 1);
    }

    function inputTextHandler(e) {
        setInputText(e.target.value);
    }

    function submitTodosHandler(e) {
        e.preventDefault();
        if (inputText.length !== 0) {
            idGenerator(id);
            setTodos([...todos, { text: inputText, completed: false, id }]);
            setInputText('');
        }
    }

    function filterStatusHandler(e) {
        setStatus(e.target.value);
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0 my-3">
                        <div className="card-body">
                            <form onSubmit={submitTodosHandler}>
                                <div className="input-group mb-3">
                                    <input
                                        value={inputText}
                                        onChange={inputTextHandler}
                                        type="text"
                                        className="form-control"
                                    />
                                    <button
                                        onClick={submitTodosHandler}
                                        type="button"
                                        className="btn btn-primary input-group-text"
                                    >
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </form>

                            <br />

                            <div className="d-flex justify-content-end">
                                <select
                                    onBlur={filterStatusHandler}
                                    onChange={filterStatusHandler}
                                    name="todos"
                                    className="form-select"
                                >
                                    <option>All</option>
                                    <option value="completed">Completed</option>
                                    <option value="uncompleted">Uncompleted</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
