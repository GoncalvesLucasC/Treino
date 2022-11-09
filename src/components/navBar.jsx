
import { NavLink, NavMenu, NavItens, Img, Nav } from "../css/Pages/navBarStyles"

function NavBar() {
    return (

        <>
            <Nav>
                <NavMenu>
                    <Img src="https://phisalia.com/wp-content/uploads/2020/06/Logo_Lukinha.png" alt="" to="" />

                    <NavItens>
                        <NavLink to="/projects">Projects</NavLink>

                        {/* <NavLink></NavLink>

                    <NavLink></NavLink> */}

                        <NavLink to="/contactPage">Contact</NavLink>

                    </NavItens>

                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar;