import Card from "../components/Card.tsx";
import {useState} from "react";


interface Project {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
    placeholderIMG?: string;
    badges?: string[];
}

function ProjectsPage() {


    const projects: Project[] = [
        { title: "This website", description: "This is my first website which I built using React", buttonText: "View on GitHub", buttonURL: "https://github.com/MaximFiedler/about-me", imageSRC: "../../public/images/this-project.png", placeholderIMG: "../../public/images/this-project-small.png", badges: ["https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", "https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB"] },
        { title: "YouTube downloader", description: "A simple YouTube downloader", buttonText: "View on GitHub", buttonURL: "https://github.com/MaximFiedler/youtube-downloader", imageSRC: "../../public/images/youtubedownloader-project.png", placeholderIMG: "../../public/images/youtubedownloader-project-small.png", badges: ["https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", "https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB", "https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=express&logoColor=61DAFB"] },
        { title: "Fancy Physics", description: "MC plugin for the version 1.20+. No mod or resourcepack is needed", buttonText: "View on GitHub", buttonURL: "https://github.com/MaximFiedler/FancyPhysics", imageSRC: "../../public/images/fancyphysics-project.png", placeholderIMG: "../../public/images/fancyphysics-project-small.png", badges: ["https://img.shields.io/spiget/downloads/110500?label=Spigot%20downloads", "https://img.shields.io/bstats/servers/18833"] },
        { title: "NextApply", description: "Discord application bot build with TypeScript and Node.js", buttonText: "View on GitHub", buttonURL: "https://github.com/NextFightNetwork/NextApply", imageSRC: "../../public/images/nextapply-project.png", placeholderIMG: "../../public/images/nextapply-project-small.png", badges: ["https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB", "https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB" ]},
        { title: "NextFight", description: "1.20+ minigames server. Join nextfight.net now!", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png", placeholderIMG: "../../public/images/nextfight-project-small.png", badges: ["https://img.shields.io/discord/1051758423211003951"] },
        { title: "MaximClient", description: "1.8 PVP client with many mods and online cosmetics", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/uMQnvKQM7J", imageSRC: "../../public/images/maximclient-project.png", badges: ["https://img.shields.io/discord/895012337793249341"] },
        { title: "SimpleLobby", description: "Lobby system [1.8 - 1.19]", buttonText: "Download on SpigotMC", buttonURL: "https://www.spigotmc.org/resources/105614/", imageSRC: "../../public/images/simplelobby-project.png", badges: ["https://img.shields.io/spiget/downloads/105614?label=Spigot%20downloads"] },
    ];

    const [isHovered, setIsHovered] = useState(false);
    const handleCardHover = (hovered: boolean) => {
        setIsHovered(hovered);
    };

    return (
        <div className="projects-container">
            <div className="title-container">
                <h1 className={"page-title"}>My projects</h1>
            </div>
            <div className="cards-container">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        buttonText={project.buttonText}
                        buttonURL={project.buttonURL}
                        imageSRC={project.imageSRC}
                        placeholderIMG={project.placeholderIMG}
                        setHovered={handleCardHover}
                        allHovered={isHovered}
                        badges={project.badges}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;