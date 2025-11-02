import { useSelector, useDispatch } from "react-redux";

function Counter() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "ADD_BY", payload: 5 })}>+5</button>
        </div>
    );
}

export default Counter;
