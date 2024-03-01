import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../state/reducers/actiontypes";

export function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (<div>
        <p>
            Count:{count}
        </p>
        <button onClick={() => dispatch({ type: INCREMENT })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>DECREMENT</button>
    </div>)
}