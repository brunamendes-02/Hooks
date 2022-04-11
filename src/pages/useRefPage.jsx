import {useState, useRef} from "react";

export const UseRefPage = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef();

    return (
        <>
            <h1>Aprenda o UseRef</h1>
            <input
                ref={inputRef}
                placeholder="Escreva sua mensagem"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button onClick={() => {
                // console.log(inputRef.current.value);
                inputRef.current.focus();
                setMessage('');
            }}>
                Enviar
            </button>
        </>
    )
}

export default UseRefPage;