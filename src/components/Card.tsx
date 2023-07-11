import {useEffect, useState} from "react";


interface Props {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
    placeholderIMG?: string;
    setHovered: (hovered: boolean) => void;
    allHovered: boolean;
    badges?: string[];
}

const Card = ({ title, description, buttonText, buttonURL, placeholderIMG="not-defined", imageSRC, setHovered, allHovered, badges = []}: Props) => {
    const [loaded, setLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCardHover = (hovered: boolean) => {
        setIsHovered(hovered);
        setHovered(hovered);
    };

    const cardClassName = `card hover-card project-card ${!isHovered && allHovered ? "blurred" : ""}`;


    useEffect(() => {
        const handleImageLoad = () => {
            setLoaded(true);
        };

        const img = new Image();
        img.onload = handleImageLoad;
        img.src = imageSRC;
    }, [imageSRC]);

    const cardStyle = {
        width: "18rem",
    };

    const imageStyle = {
        filter: loaded ? "none" : "blur(10px)",
        transition: "filter 0.5s ease",
    };

    let placeholder: string = placeholderIMG;
    if(placeholder === "not-defined") {
        placeholder = imageSRC.replace(".png", "-small.png");
    }

    return (
        <div className={cardClassName} style={cardStyle}
             onMouseEnter={() => handleCardHover(true)}
             onMouseLeave={() => handleCardHover(false)}>

            <img
                src={loaded ? imageSRC : placeholder}
                loading="lazy"
                className="card-img-top"
                style={imageStyle}
                alt="banner"
            />
                <div className="card-body project-card-body">
                    <div className="card-badges">
                        {badges.map((badge, index) => (
                            <img key={index} src={badge} alt="badge" />
                        ))}
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="glow"/>
                    <a target="_blank" href={buttonURL} className="btn btn-primary primary-button card-button">
                        {buttonText}
                    </a>
                </div>
        </div>
    );
};

export default Card;