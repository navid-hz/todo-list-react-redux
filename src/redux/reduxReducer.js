const initState = {
    todoList: [],
};
const reduxReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload)
            };
        case 'DONE_TODO':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload) {
                        todo.isDone = true;
                    }
                    return todo;
                })
            };
        case 'UNDONE_TODO':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload) {
                        todo.isDone = false;
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
};
export default reduxReducer;