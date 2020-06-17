import { dispatch, useGlobalState } from "../Store";

const useCounter = () => {
    const increment = () => dispatch({ type: "increment" });
    const decrement = () => dispatch({ type: "decrement" });
    const initialize = () => dispatch({ type: "initialize" });
    const [count] = useGlobalState("count");
    return {count, increment, decrement, initialize};
};

export default useCounter;