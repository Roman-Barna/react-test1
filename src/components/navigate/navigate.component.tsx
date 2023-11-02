import { NavLink } from "react-router-dom"
import "./navigate.component.scss"
import { DataApiRoute } from "../../App"

interface NavigateMenuProps {
    allRoute: DataApiRoute[]
}

export const NavigateMenu = (props: NavigateMenuProps) => {
    const { allRoute } = props
    return (
        <>
            <header className="header">
                <nav className="menu">
                    {
                        allRoute && allRoute.map((element: DataApiRoute, ind: number) =>
                            <li className="menu-list">
                                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                                key={ind} 
                                to={'/' + element.id}
                                >{element.id}</NavLink>
                            </li>
                        )}
                </nav>
            </header>
        </>
    )
}