const Navbar = () => {
    return (  <nav>
        <div className = "wrapper">
            <ul>
                <li className = "menu-items"><a href="/">Home</a></li>
                <li className = "menu-items"><a href="/projects">Projects</a></li>
                <li className = "github-linkedin"><a href="https://www.linkedin.com/in/gerhard-biermann-ab868617b/" target="_blank">Linkedin</a></li>
                <li className = "github-linkedin"><a href="https://github.com/GerhardBiermann" target="_blank">GitHub</a></li>
                <li className = "menu-items"><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>);
}
 
export default Navbar;