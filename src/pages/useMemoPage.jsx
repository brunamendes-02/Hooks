import {useState, useMemo} from "react";

export const UseMemoPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const passwordValidator = useMemo(() => {
        return <PasswordValidator password={password}/>
    }, [password]);
    
    return (
        <>
            <h1>Aprenda o UseMemo</h1>
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            {passwordValidator}
            {/* <PasswordValidator password={password}/> */}
        </>
    )
}

const PasswordValidator = ({password}) => {
    console.log(password);
    if (!password.length) return <span>A senha deve ser preenchida</span>
    if (password.length < 5) return <span>A senha deve conter mais que 5 caracteres</span>
    return <span>Senha aprovada</span>
}

export default UseMemoPage;