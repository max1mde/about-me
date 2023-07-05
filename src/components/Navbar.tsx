import { Link, NavLink } from 'react-router-dom';

interface Props {
    pages: Page[];
    onSelectItem: (item: string) => void;
    active: number;
    title: string;
}

interface Page {
    title: string;
    path: string;
}

function Navbar({ title, pages, onSelectItem, active }: Props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            <img src="../../public/logo.svg" alt="logo" className="navbar-brand-image" />
                            <span className="navbar-brand-title">{title}</span>
                        </Link>
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
                                <NavLink to={item.path} className="nav-link" onClick={() => {
                                    onSelectItem(item.title);
                                }}>{item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex align-items-center">
                        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary custom-search-button primary-search-button " type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;