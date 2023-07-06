import Button from "../components/Button.tsx";


function NotFoundPage() {

    return (
        <div>
            <h1 className={"page-title"}>Page not found!</h1>
            <div className={"center-content"}>
                <Button onClick={() => null} buttonURL={"/"}>
                    Go back home
                </Button>
            </div>
        </div>
    );
}

export default NotFoundPage;