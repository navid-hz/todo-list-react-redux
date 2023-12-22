const TODO_KEY = 'todo-list-array';

const getFromLocalStorage = () => {
    const loadedTodos = localStorage.getItem(TODO_KEY)
        ? JSON.parse(localStorage.getItem(TODO_KEY))
        : [];
    return loadedTodos;
};

const saveToLocalStorage = (data) => {
    const loadedItems = getFromLocalStorage();
    loadedItems.push(data);
    localStorage.setItem(TODO_KEY, JSON.stringify(data));
};

const deleteFromLocalStorage = (data) => {
    const loadedItems = getFromLocalStorage();
    localStorage.setItem(TODO_KEY, JSON.stringify([]));
    const filteredItems = loadedItems.filter((e) => e.id !== data.id);
    filteredItems.forEach((item) => saveToLocalStorage(item))
};

const updateLocalStorage = (data, type) => {
    const loadedItems = getFromLocalStorage();
    const updateItem = loadedItems.find((e) => e.id === data.id);
    deleteFromLocalStorage(updateItem);
    let newItem;
    if (type === 'done') {
        newItem = { ...updateItem, isDone: true };
    } else if (type === 'undone') {
        newItem = { ...updateItem, isDone: false };
        saveToLocalStorage(newItem);
    };
};

export { getFromLocalStorage, saveToLocalStorage, deleteFromLocalStorage, updateLocalStorage };