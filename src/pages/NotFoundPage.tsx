import Button from "../components/Button.tsx";


function NotFoundPage() {
    const style = {
        width: "400px",
    };
    return (
        <div>
            <div className={"center-content"}>
                <img src={"../../public/images/404.png"} style={style}/>
                <Button color={"danger"} onClick={() => null} buttonURL={"/"}>
                    Go back home
                </Button>
            </div>
        </div>
    );
}

export default NotFoundPage;