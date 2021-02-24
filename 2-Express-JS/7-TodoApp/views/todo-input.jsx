import React from 'react';

const TodoInput = (props) => {
    let { todo, isEditing } = props
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="alert alert-danger">
                    <form action={isEditing ? '/todos/' + todo.id + '?_method=PUT' : '/todos?_method=POST'} method="post" class="form-inline">
                        <input autoFocus={true} type="hidden" name="id" value={todo.id} />
                        <input type="hidden" name="isEditing" value={isEditing} />
                        <div class="form-group">
                            <input value={todo.title} className="form-control" name="title" />
                        </div>
                        &nbsp;
                        <button className="btn btn-dark">{isEditing ? 'Update' : 'Add'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoInput;