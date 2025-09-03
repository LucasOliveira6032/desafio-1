import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";

function SideBar() {
    const [activeItem, setActiveItem] = useState(0);
    const navigate = useNavigate();

    const buttons = [
        { id: 0, Route: "/dashboard", label: "Dashboard", icon: "🏠"}
    ];

    return (
        <aside className="w-60 h-screen p-4 border border-gray-300 rounded-lg">
            <nav className="flex flex-col gap-4">
                {buttons.map((button) => (
                    <button
                    key={button.id}
                    className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 ${activeItem === button.id ? 'bg-gray-300' : ''}`}
                    onClick={() => {
                        setActiveItem(button.id);
                        navigate(button.Route);
                    }}
                    ></button>
                )
                )}
            </nav>

        </aside>
    )
}
export default SideBar;