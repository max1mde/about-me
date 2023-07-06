import Navbar from "./components/Navbar.tsx";
import HomePage from './pages/HomePage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import {createBrowserRouter,  RouteObject, RouterProvider} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


interface Page {
    title: string;
    path: string;
    component: React.ComponentType<any> | null;
}



function App() {

    const pages: Page[] = [
        { title: "Home", path: "/", component: HomePage },
        { title: "Contact", path: "/contact", component: ContactPage },
        { title: "Projects", path: "/projects", component: ProjectsPage },
    ];

    const location = useLocation();

    useEffect(() => {
        updateHoverEffect();
    }, [location]);


    const routes: RouteObject[] = pages.map((page) => ({
        path: page.path,
        element: page.component && <page.component />,
    }));

    routes.push({
        path: '*',
        element: <NotFoundPage />,
    });

    /*const routes = pages.map((page, index) => (
        <Route key={index} path={page.path} element={page.component && <page.component />} />
    ));
    routes.push(<Route key="404" path="*" element={<NotFoundPage />} />);*/

    const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/about-me/' })

    return (
        <div data-bs-theme="dark">
                <Navbar title="Maxim Fiedler" active={0} pages={pages} onSelectItem={() => null} />
            <RouterProvider router={router} />
        </div>
    );
}

function updateHoverEffect() {
    if (typeof window.updateCards === 'function') {
        window.updateCards();
    }
}

export default App;
