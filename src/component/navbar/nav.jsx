import './nav.css'

function Nav() {
    return(
        <nav>
            <div className="nav-grp-1">
                <img src=".\asset\logo.svg" alt="" />
                <p>Geo Tracker</p>
            </div>

            <div className="nav-grp-2">
                <span> <img src=".\asset\home.svg" alt="home logo" /> <a href="/home"><p>Home</p></a> </span>
                <span> <img src=".\asset\location.svg" alt="" /> <a href="/map"><p>Map</p></a> </span>
                <span> <img src=".\asset\save-location.svg" alt="" /> <a href="/map"><p>Saved Location</p></a> </span>
                <span> <img src=".\asset\settings.svg" alt="" /> <a href="/setting"><p>Setting</p></a></span>
            </div>

            <div className="nav-grp-3">
                <span> <img src=".\asset\logout.svg" alt="" /> <p>Logout</p></span>
            </div>
        </nav>
    )
}

export default Nav;