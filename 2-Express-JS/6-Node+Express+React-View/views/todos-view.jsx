import React from 'react';
import DefaultLayout from './default'
import TodoInput from './todo-input';

const TodosView = (props) => {
    let { todos } = props;
    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <tr>
                    <td>
                        <form method="POST" action={'/todos/' + todo.id + '?_method=PUT'}>
                            <input type="hidden" name="action" value="complete" />
                            <input type="hidden" name="id" value={todo.id} />
                            <button type="submit" style={{ backgroundColor: todo.completed ? '#FAF' : '#FFF' }}><i className="fa fa-check"></i></button>
                        </form>
                    </td>
                    <td><span className="badge">{todo.id}</span></td>
                    <td><span>{todo.title}</span></td>
                    <td><span className={todo.completed ? 'text-success' : 'text-danger'}>{todo.completed ? 'Completed' : 'Active'}</span></td>
                    <td>
                        <form method="POST" action={'/todos/' + todo.id + '?_method=GET'}>
                            <button type="submit"><i className="fa fa-edit"></i></button>
                        </form>
                    </td>
                    <td>
                        <form method="POST" action={'/todos/' + todo.id + '?_method=DELETE'}>
                            <button type="submit"><i className="fa fa-trash"></i></button>
                        </form>
                    </td>
                </tr>
            )
        })
    }
    return (
        <DefaultLayout>
            <hr />
            <TodoInput todo={props.todoToEdit} isEditing={props.isEditing} />
            <hr />
            {props.message}
            <hr />
            <div className="card card-body">
                <form method="POST" action={'/todos?_method=PUT'}>
                    <input type="hidden" name="action" value="complete-all" />
                    <button type="submit"><i className="fa fa-list"></i></button>
                </form>
                <hr />
                <table className="table table-bordered table-sm table-striped">
                    <tbody>
                        {renderTodos()}
                    </tbody>
                </table>
                {todos.lenghth === 0 ? 'Nil' : ''}
            </div>
        </DefaultLayout>
    );
};

export default TodosView;