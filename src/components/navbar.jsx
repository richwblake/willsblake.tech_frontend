import './navbar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="lato nav-title">
                <span>willsblake.tech</span>
            </div>
            <div className="lato nav-links">
                <span><a href="#work-list">work</a></span>
                <span><a href="#project-list">projects</a></span>
                <span><a href="#contact-form">contact</a></span>
            </div>
        </div>
    );
}
