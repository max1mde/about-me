import Button from "../components/Button.tsx";

function HomePage() {
    return (
        <div className={"home-content-container"}>
            <div className={"hover-card home-main-card"}>
                <div className={"glow"}/>
                <div className="home-main-content">
                    <div>
                        <h1 className={"home-main-title"}>Hi!</h1>
                        <p className={"home-main-text"}>My name is Maxim, a 16-year-old interested in software development. I've created various projects, including Android apps, Unity games, websites, and Discord bots. Currently, I'm focused on learning web development, and this website is my first project using React.</p>
                        <div className={"home-main-buttons"}>
                            <Button buttonURL={"/contact"} onClick={() => null}>Contact me</Button>
                            <Button buttonURL={"/projects"} color={"secondary"} onClick={() => null}>My projects</Button>
                        </div>
                    </div>
                </div>
                <img className={"home-main-skin"} src={"../../public/images/skin.png"} alt={"skin"}/>
            </div>

            <div className={"hover-card"}>
                <h1 className="tools-text">Tools & languages I use</h1> <br/>
                <div className="home-skillset">
                <div className={"glow"}/>
                <img className={"home-icon"} src={"../../public/images/icons/java.png"} alt={"java"}/>
                <img className={"home-icon"} src={"../../public/images/icons/kotlin.png"} alt={"kotlin"}/>
                <img className={"home-icon"} src={"../../public/images/icons/javascript.png"} alt={"javascript"}/>
                <img className={"home-icon"} src={"../../public/images/icons/typescript.png"} alt={"typescript"}/>
                <img className={"home-icon"} src={"../../public/images/icons/python.png"} alt={"python"}/>
                <img className={"home-icon"} src={"../../public/images/icons/react.png"} alt={"react"}/>
                <img className={"home-icon"} src={"../../public/images/icons/html.png"} alt={"html"}/>
                <img className={"home-icon"} src={"../../public/images/icons/css.png"} alt={"css"}/>
                <img className={"home-icon"} src={"../../public/images/icons/nodejs.png"} alt={"nodejs"}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;