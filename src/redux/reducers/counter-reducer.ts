export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "ADD_BY"; payload: number };

export const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, value: state.value + 1 };
        case "DECREMENT":
            return { ...state, value: state.value - 1 };
        case "ADD_BY":
            return { ...state, value: state.value + action.payload };
        default:
            return state;
    }
};
