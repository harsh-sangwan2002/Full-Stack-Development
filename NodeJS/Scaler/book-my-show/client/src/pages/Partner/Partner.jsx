import { Tabs } from "antd"
import TheatreList from "./TheatreList"

const Partner = () => {

    const items = [
        {
            key: "1",
            label: "Theatres",
            children: <TheatreList />
        },
        {
            key: "2",
            label: "Bookings",
            children: <TheatreList />
        }
    ]

    return (
        <div>
            Partner Page
            <Tabs items={items} />
        </div>
    )
}

export default Partner
