import Navbar from "./components/Navbar.tsx";
import HomePage from './pages/HomePage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import { Route, Routes } from "react-router";

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
    const routes = pages.map((page, index) => (
        <Route key={index} path={page.path} element={page.component && <page.component />} />
    ));
    return (
        <div>
            <Navbar title="Maxim Fiedler" active={0} pages={pages} onSelectItem={() => console.log("test")}></Navbar>
            <Routes>{routes}</Routes>
        </div>
    );
}

export default App;
