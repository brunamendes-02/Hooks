import React, {useState, useCallback} from "react";

export const UseCallbackPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // function onNameChange(event) {
    //     setName(event.target.value)
    // }
    const onNameChange = useCallback((event) => {setName(event.target.value)}, [])

    return (
        <>
            <h1>Aprenda o UseCallback</h1>
            <input
                placeholder="Nome"
                value={name}
                onChange={onNameChange}
            />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </>
    )
}

export default UseCallbackPage;