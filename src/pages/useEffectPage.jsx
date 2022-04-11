import React, {useState, useEffect} from "react";

export const UseEffectPage = () => {
    const [name, setName] = useState('User');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        console.log(name);
    }, [name])
    
    return (
        <>
            <h1>Aprenda o UseEffect</h1>
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </>
    )
}

export default UseEffectPage;