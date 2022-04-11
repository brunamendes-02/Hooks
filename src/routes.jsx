import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';
import {UseStatePage} from './pages/useStatePage';
import {UseEffectPage} from './pages/useEffectPage';
import {UseCallbackPage} from './pages/useCallback';
import {UseMemoPage} from './pages/useMemoPage';
import {UseRefPage} from './pages/useRefPage';
import {UserContextProvider} from './contexts/userContext';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/useState" element={<UseStatePage />}/>
                    <Route path="/useEffect" element={<UseEffectPage />}/>
                    <Route path="/useCallback" element={<UseCallbackPage />}/>
                    <Route path="/useMemo" element={<UseMemoPage />}/>
                    <Route path="/useRef" element={<UseRefPage />}/>
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;