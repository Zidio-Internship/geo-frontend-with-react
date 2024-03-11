import './nav.css'

function Nav() {
    return(
        <nav>
            <div className="nav-grp-1">
                <img src=".\asset\logo.svg" alt="" />
                <p>Geo Tracker</p>
            </div>

            <div className="nav-grp-2">
                <span> <img src=".\asset\home.svg" alt="home logo" /> <p>Home</p> </span>
                <span> <img src=".\asset\location.svg" alt="" /> <p>Map</p></span>
                <span> <img src=".\asset\save-location.svg" alt="" /> <p>Saved Location</p></span>
                <span> <img src=".\asset\settings.svg" alt="" /> <p>Setting</p></span>
            </div>

            <div className="nav-grp-3">
                <span> <img src=".\asset\logout.svg" alt="" /> <p>Logout</p></span>
            </div>
        </nav>
    )
}

export default Nav;