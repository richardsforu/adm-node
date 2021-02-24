
import * as todosApi from '../api/todos'

export function addTodo(title) {
    //...
    //return { type: 'ADD_TODO', newTodo: { id: Math.floor(Math.random() * 1000), title, completed: false } }

    return async dispatch => {
        let response = await todosApi.saveTodo(title);
        dispatch({ type: 'ADD_TODO', newTodo: response.data })
    }

}
export function editTodo(newTitle, id) {
    //...
    //return { type: 'EDIT_TODO', updatedTodo: { id, title: newTitle, completed: false }, id }

    return async dispatch => {
        let response = await todosApi.editTodo(newTitle, id);
        dispatch({ type: 'EDIT_TODO', updatedTodo: response.data, id })
    }

}
export function deleteTodo(id) {
    //...
    // return { type: 'DELETE_TODO', id }

    return async dispatch => {
        let response = await todosApi.deleteTodo(id);
        dispatch({ type: 'DELETE_TODO', id })
    }

}
export function completeTodo(id) {
    //...
    // return { type: 'COMPLETE_TODO', id }


    return async dispatch => {
        let response = await todosApi.completeTodo(id);
        dispatch({ type: 'COMPLETE_TODO', id })
    }

}
export function completeAll() {
    //...
    // return { type: 'COMPLETE_ALL' }
    return async dispatch => {
        let response = await todosApi.completeAll();
        dispatch({ type: 'COMPLETE_ALL' })
    }

}
export function viewTodos() {
    //...
    // return { type: 'VIEW_TODOS',todos }

    return async dispatch => {
        let response = await todosApi.getTodos();
        dispatch({ type: 'VIEW_TODOS', todos: response.data })
    }

}