import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useReducer, useRef } from 'react'
import { initialTodos, todoReducer } from '../../reducers/todoReducer';

export const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const formRef = useRef(null)

    const handleComplete = (todo) => {
        //Ejecutamos la 'acción o action'
        // Una action normalmente tiene 2 atributos: type y payload
        // type es el tipo que aparece en el listado del switch del reducer
        // Payload es la información o data necesaria.
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    const handleEdit = (todo) => {
        let newTitle = prompt('Nuevo valor: ')
        dispatch({ type: "EDIT", payload: { id: todo.id, title: newTitle } });
    };

    const handleRemove = (todo) => {
        dispatch({ type: "REMOVE", id: todo.id });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        let id = todos[todos.length - 1].id + 1
        dispatch({
            type: "ADD", todo: {
                id: id,
                title: event.target.newTodo.value,
                complete: false
            }
        });
        formRef.current.reset()

    };

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
                        <div className="card-body py-4 px-4 px-md-5">
                            <div className="pb-2">
                                <div className="card">
                                    <div className="card-body">
                                        <form ref={formRef} className="d-flex flex-row align-items-center" onSubmit={handleSubmit}>
                                            <input type="text" className="form-control form-control-lg" id="newTodo" name='newTodo'
                                                placeholder="Add new..." />
                                            <div>
                                                <button type="submit" className="btn btn-primary mx-3">Add</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4"></hr>
                            {todos.map((todo) => (
                                <ul key={todo.id} className="list-group list-group-horizontal rounded-0 bg-transparent mb-2">
                                    <li
                                        className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input me-0"
                                                checked={todo.complete}
                                                onChange={() => handleComplete(todo)}
                                            />
                                        </div>
                                    </li>
                                    <li
                                        className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                        <p className="lead fw-normal mb-0">
                                            <span style={todo.complete ? { textDecoration: 'line-through' } : {}}>
                                                {todo.title}
                                            </span>
                                        </p>
                                    </li>
                                    <button className='btn btn-primary mx-1' onClick={() => handleEdit(todo)}>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                    <button className='btn btn-danger' onClick={() => handleRemove(todo)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
