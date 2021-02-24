import React, { useEffect, useState } from 'react';
import TodoInput from './todo-input'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../actions/todos'

const TodosView = (props) => {

    let [todo, setTodo] = useState({ title: '' })
    let [isEditing, setEditing] = useState(false)

    let todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.viewTodos())
    }, [])

    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <tr key={todo.id}>
                    <td>
                        <button onClick={e => dispatch(actions.completeTodo(todo.id))}
                            style={{ backgroundColor: todo.completed ? '#FAF' : '#FFF' }}>
                            <i className="fa fa-check"></i>
                        </button>
                    </td>
                    <td><span className="badge">{todo.id}</span></td>
                    <td><span>{todo.title}</span></td>
                    <td><span className={todo.completed ? 'text-success' : 'text-danger'}>{todo.completed ? 'Completed' : 'Active'}</span></td>
                    <td>
                        <button onClick={e => { setTodo(todo); setEditing(true) }}><i className="fa fa-edit"></i></button>
                    </td>
                    <td>
                        <button onClick={e => dispatch(actions.deleteTodo(todo.id))}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="container">
            <hr />
            <h1>React-View ( client-side )</h1>
            <hr />

            <TodoInput
                title={todo.title}
                isEditing={isEditing}
                onSubmit={title => {
                    if (!isEditing)
                        dispatch(actions.addTodo(title))
                    if (isEditing) {
                        dispatch(actions.editTodo(title, todo.id))
                        setTodo({ title: '' })
                    }
                }} />

            <div className="card card-body">
                <div className="row">
                    <div className="col-1 col-sm-1 col-md-1">
                        <button onClick={e => dispatch(actions.completeAll())}><i className="fa fa-list"></i></button>
                    </div>
                </div>
                <hr />
                <table className="table table-bordered table-sm table-striped">
                    <tbody>
                        {renderTodos()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodosView;