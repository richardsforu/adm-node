import React, { useState, useEffect } from 'react';

const TodoInput = (props) => {
    
    let { onSubmit, isEditing } = props
    const [title, setTitle] = useState('');
    
    useEffect(() => {
        setTitle(props.title)
    }, [props])

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="alert alert-danger">
                    <form className="form-inline"
                        onSubmit={e => { e.preventDefault(); onSubmit(title) }}>
                        <div className="form-group">
                            <input
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                className="form-control"
                                name="title" />
                        </div>
                        &nbsp;
                        <button className="btn btn-dark">{isEditing ? 'Update' : 'Add'}</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default TodoInput;