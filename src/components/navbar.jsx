import './navbar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="lato nav-title">
                <span>willsblake.tech</span>
            </div>
            <div className="lato nav-links">
                <span><a href="#">projects</a></span>
                <span><a href="#">work</a></span>
                <span><a href="#">contact</a></span>
            </div>
        </div>
    );
}
