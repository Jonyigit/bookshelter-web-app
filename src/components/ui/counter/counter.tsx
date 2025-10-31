import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { increment, decrement } from "../../../redux/slices/counterSlice";

function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Counter;
