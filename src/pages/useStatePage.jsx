import {useState} from "react";

export const UseStatePage = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Aprenda o UseState</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>diminuir</button>
            <button onClick={() => setCount(count + 1)}>adicionar</button>
        </>
    )
}

export default UseStatePage;