import Navbar from "./components/Navbar.tsx";


function App() {
    const pages: string[] = ["Home", "Contact", "Projects"]
    return (
        <div>
            <Navbar title="Maxim Fiedler" active={0} redirection={"#"} pages={pages} onSelectItem={() => console.log("test")}></Navbar>
        </div>
    );
}

export default App;
