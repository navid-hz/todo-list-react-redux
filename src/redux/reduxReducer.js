import {getFromLocalStorage, saveToLocalStorage, deleteFromLocalStorage, updateLocalStorage} from '../LocalStorageFunctions';


const initState = {
    todoList: [],
};
const reduxReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            state.todoList = [...state.todoList, action.payload];
            saveToLocalStorage(action.payload);
            return state;
        case 'DELETE_TODO':
            const newState = state.todoList.filter((e) => e.id !== action.payload.id);
            deleteFromLocalStorage(action.payload);
            return { todoList: newState };            
        case 'DONE_TODO':
            const indexDone = state.todoList.findIndex(
                (e) => e.id === action.payload.id
            );
            state.todoList[indexDone] = {
                ...action.payload, isDone: true
            };
            updateLocalStorage(state.todoList[indexDone], 'done');
            return state;
        case 'UNDONE_TODO':
            const indexUnDone = state.todoList.findIndex(
                (e) => e.id === action.payload.id
            );
            state.todoList[indexUnDone] = {
                ...action.payload, isDone: false
            };
            updateLocalStorage(state.todoList[indexUnDone], 'undone');
            return state;
        case 'GET_ALL_TODOS':
            return { todoList: getFromLocalStorage() };
        default:
            return state;
    }
};
export default reduxReducer;