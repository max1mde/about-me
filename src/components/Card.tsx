import {useEffect, useState} from "react";


interface Props {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
    placeholderIMG?: string;
}

const Card = ({ title, description, buttonText, buttonURL, placeholderIMG="not-defined", imageSRC }: Props) => {
    const [loaded, setLoaded] = useState(false);

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
        <div className="card" style={cardStyle}>
            <img
                src={loaded ? imageSRC : placeholder}
                loading="lazy"
                className="card-img-top"
                style={imageStyle}
                alt="..."
            />
            <div className="card-body project-card">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={buttonURL} className="btn btn-primary primary-button">
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default Card;