import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {UserContext} from '../contexts/userContext';

export const HomePage = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Bem vindo aos hooks, {user.userName}!</h1>
            <Link to="/useState">Vá para o useStatePage</Link>
            <br />
            <br />
            <Link to="/useEffect">Vá para o useEffectPage</Link>
            <br />
            <br />
            <Link to="/useCallback">Vá para o useCallbackPage</Link>
            <br />
            <br />
            <Link to="/useMemo">Vá para o useMemoPage</Link>
            <br />
            <br />
            <Link to="/useRef">Vá para o useRefPage</Link>
        </>
    )
}

export default HomePage;