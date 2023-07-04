interface Props {
    pages: string[];
    onSelectItem: (item: string) => void;
    redirection: string;
    active: number;
    title: string
}

function Navbar({pages, onSelectItem, redirection, active, title}: Props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{title}</a>
                    </div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {pages.map((item, index) => (
                            <li
                                key={index}
                                className={
                                active === index
                                    ? "active"
                                    : ""
                            }>
                                <a href={redirection} className="nav-link" onClick={() => {
                                    onSelectItem(item);
                                }}>{item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex align-items-center">
                        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;