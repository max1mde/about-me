
import Card from "../components/Card.tsx";
import {useState} from "react";



interface Project {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
    placeholderIMG?: string;
}


function ProjectsPage() {

    const projects: Project[] = [
        { title: "Fancy Physics", description: "Minecraft plugin for the version 1.20+. No mod or resource pack required", buttonText: "View on SpigotMC", buttonURL: "https://www.spigotmc.org/resources/110500/", imageSRC: "../../public/images/fancyphysics-project.gif", placeholderIMG: "../../public/images/fancyphysics-project-small.png" },
        { title: "Next Fight", description: "1.20+ minigames server. Join using the domain nextfight.net", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextApply", description: "Discord application bot build with TypeScript and Node.js", buttonText: "View on GitHub", buttonURL: "https://github.com/NextFightNetwork/NextApply", imageSRC: "../../public/images/nextapply-project.png" },
    ];

    const [isHovered, setIsHovered] = useState(false);
    const handleCardHover = (hovered: boolean) => {
        setIsHovered(hovered);
    };


    return (
        <div className="projects-container">
            <div className="title-container">
                <h1>My projects</h1>
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
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;