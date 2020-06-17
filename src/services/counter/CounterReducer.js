const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
    case "increment":
        return state + 1;
    case "decrement":
        return state - 1;
    case "initialize":
        return initialState;
    default:
        return state;
    }
};
export {
    initialState,
};
export default counterReducer;