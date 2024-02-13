import React, {useReducer} from 'react';
import TodoReducer from "./TodoReducer";

const ReducerExample = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>

        </div>
    );
};

export default ReducerExample;