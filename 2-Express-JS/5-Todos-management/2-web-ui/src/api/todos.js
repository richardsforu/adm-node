

// API ==> to communicate with backend-services 

import axios from 'axios';

const baseURL = "http://localhost:3000/todos";

const todosApoi = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    }
})

export function getTodos(id) {
    return todosApoi.get(); // return promise
}

export function saveTodo(title) {
    return todosApoi.post('/', { title }); // return promise
}

export function editTodo(newTitle, id) {
    return todosApoi.put(`/${id}`, { title: newTitle }); // return promise
}

export function completeTodo(id) {
    return todosApoi.put(`/${id}`, { action: 'complete' }); // return promise
}

export function completeAll(id) {
    return todosApoi.put({ action: 'complete-all' }); // return promise
}

export function deleteTodo(id) {
    return todosApoi.delete(`/${id}`); // return promise
}