import { DataApiRoute } from "../App"

interface TabsProps {
    element: DataApiRoute
}

export const Tabs = (props: TabsProps) => {

    const { element } = props
    
    return (
        <>
        <table>
            <tr><td>{element.title}</td><td>{element.order}</td></tr>
        </table>
        </>
    )
}