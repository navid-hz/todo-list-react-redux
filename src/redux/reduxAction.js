const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
};
const deleteTodo = (data) => {
    return {
        type: 'DELETE_TODO',
        payload: data
    }
};
const doneTodo = (data) => {
    return {
        type: 'DONE_TODO',
        payload: data
    }
};
const undoneTodo = (data) => {
    return {
        type: 'UNDONE_TODO',
        payload: data
    }
};
const getAllTodos = () => {
    return {
        type: 'GET_ALL_TODOS',
    }
};

export { addTodo, deleteTodo, doneTodo, undoneTodo, getAllTodos };