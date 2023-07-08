import Navbar from "./components/Navbar.tsx";
import HomePage from './pages/HomePage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage.tsx";


interface Page {
    title: string;
    path: string;
    component: React.ComponentType<any> | null;
}

function App() {
    const [loggedIn, setLoggedIn] = useState(
        !!localStorage.getItem('password')
    );
    const handleLogin = () => {
        setLoggedIn(true);
    };
    const pages: Page[] = [
        { title: "Home", path: "/", component: HomePage },
        { title: "Contact", path: "/contact", component: ContactPage },
        { title: "Projects", path: "/projects", component: ProjectsPage },
    ];

    const location = useLocation();

    useEffect(() => {
        updateHoverEffect();
    }, [location]);

    /*const routes = pages.map((page, index) => (
        <Route key={index} path={page.path} element={page.component && <page.component />} />
    ));*/
    const routes = loggedIn
        ? pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.component && <page.component />} />
        ))
        : [
            <Route key="login" path="*" element={<LoginPage onLogin={handleLogin} />} />
        ];

    routes.push(<Route key="404" path="*" element={<NotFoundPage />} />);

    return (
        <div data-bs-theme="dark">
            {loggedIn && (
                <Navbar title="Maxim" active={0} pages={pages} onSelectItem={() => null} />
            )}
                <Routes>{routes}</Routes>
        </div>
    );
}

function updateHoverEffect() {
    if (typeof window.updateCards === 'function') {
        window.updateCards();
    }
}

export default App;
