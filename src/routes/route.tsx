import { Navigate, Route, Routes } from "react-router-dom"
import { Tabs } from "../components/tabs.component"
import { DataApiRoute } from "../App"

interface AllRouteProps {
    allRoute: DataApiRoute[]
}

export const AllRoute = (props: AllRouteProps) => {
const {allRoute} = props

    return (
    <Routes>
    {
    allRoute.map((element: DataApiRoute, ind: number) => {
     return <Route path={"/" + element.id} index={ind === 0} key={ind} element={<Tabs element={element}/>}/>
    })
    }
    {allRoute.length && <Route path="/" element={<Navigate to={allRoute[0].id} replace={true} />}/>}
  </Routes>
    )
}