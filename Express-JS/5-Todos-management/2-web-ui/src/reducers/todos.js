

export function todosReducer(state = [], action) {

    let { type } = action;

    switch (type) {
        case 'ADD_TODO': {
            let { newTodo } = action;
            return [...state, newTodo]
        }
        case 'EDIT_TODO': {
            let { updatedTodo } = action;
            return state.map(todo => {
                if (todo.id === updatedTodo.id)
                    todo.title = updatedTodo.title
                return todo;
            })
        }
        case 'COMPLETE_TODO': {
            let { id } = action;
            return state.map(todo => {
                if (todo.id === id)
                    todo.completed = !todo.completed
                return todo;
            })
        }
        case 'DELETE_TODO': {
            let { id } = action;
            return state.filter(todo => {
                if (todo.id === id)
                    return false;
                return true;
            })
        }
        case 'COMPLETE_ALL': {
            let areAllCompleted = state.every(todo => todo.completed)
            return state.map(todo => {
                todo.completed = !areAllCompleted
                return todo;
            })
        }
        case 'VIEW_TODOS': {
            let { todos } = action;
            return [...todos]
        }
        default: return state;
    }

}