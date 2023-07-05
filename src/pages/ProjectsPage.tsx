
import Card from "../components/Card.tsx";


interface Project {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
}


function ProjectsPage() {

    const projects: Project[] = [
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
        { title: "NextFight", description: "Minigames", buttonText: "Join the Discord server", buttonURL: "https://discord.gg/nextfight", imageSRC: "../../public/images/nextfight-project.png" },
    ];

    return (
        <div>
            <h1>My projects</h1>
            <div className="projects-page">
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            buttonText={project.buttonText}
                            buttonURL={project.buttonURL}
                            imageSRC={project.imageSRC}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;