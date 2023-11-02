import { Navigate, Route, Routes } from "react-router-dom"
import { DataApiRoute } from "../App"
import { lazy, Suspense } from "react"

const loadingDummyComponent = (element: any) => {
  const Dummy = lazy(() => import(`../components/${element.path}`))
  return <Suspense fallback="loading..."><Dummy/></Suspense>
}

interface AllRouteProps {
    allRoute: DataApiRoute[]
}

export const AllRoute = (props: AllRouteProps) => {
const {allRoute} = props

return (
      <Routes>
        {allRoute.map((element: DataApiRoute, ind: number) => {
          return <Route 
          path={"/" + element.id} 
          index={ind === 0} 
          key={ind} 
          element={loadingDummyComponent(element) as unknown as React.ReactNode} 
          />
        })}
        {allRoute.length && <Route path="/" element={<Navigate to={allRoute[0].id} replace={true} />} />}
      </Routes>
    )
}