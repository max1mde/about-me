import React, { useState, useEffect } from "react";


interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const savedPassword = localStorage.getItem("password");
        if (savedPassword) {
            setLoggedIn(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pw = "nullpointer"; //WOW! You have found the password ;)
        if (password === pw) {
            localStorage.setItem("password", password);
            setLoggedIn(true);
            window.location.href = "/";
            onLogin();
        }
    };

    if (loggedIn) {
        return null;
    }

    return (
        <div>
        <div className={"hover-card home-main-card login-page-card"}>

            <div className="home-main-content login-page-content">
                <div>
                    <div className={"glow"}/>
                    <h1 className={"home-main-title login-page-title"}>Login</h1>
                    <form className={"form-inline d-grid gap-2"} onSubmit={handleSubmit}>
                            <input
                                className={"form-control"}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        <button className={"btn btn-primary"} type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
</div>
    );
};

export default LoginPage;
