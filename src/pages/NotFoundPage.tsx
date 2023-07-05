import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    const handleGoBackHome = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Page not found!</h1>
            <div className={"center-content"}>
                <Button onClick={handleGoBackHome}>
                    Go back home
                </Button>
            </div>
        </div>
    );
}

export default NotFoundPage;