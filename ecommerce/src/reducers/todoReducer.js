export const todoReducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        case "EDIT":
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title };
                } else {
                    return todo;
                }
            });
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        case "ADD":
            return [...state, action.todo]
        default:
            return state;
    }
};

export const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];