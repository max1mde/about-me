import Button from "../components/Button.tsx";

function HomePage() {
    return (
        <div>
            <div className={"hover-card home-main-card"}>
                <div className={"glow"}/>
                <div className="home-main-content">
                    <div>
                        <h1 className={"home-main-title"}>Hi!</h1>
                        <p className={"home-main-text"}>This is my first react project</p>
                        <div className={"home-main-buttons"}>
                            <Button buttonURL={"/contact"} onClick={() => null}>Contact me</Button>
                            <Button buttonURL={"/projects"} color={"secondary"} onClick={() => null}>My projects</Button>
                        </div>
                    </div>
                </div>
                <img className={"home-main-skin"} src={"../../public/images/skin.png"} alt={"skin"}/>
            </div>
        </div>
    );
}

export default HomePage;