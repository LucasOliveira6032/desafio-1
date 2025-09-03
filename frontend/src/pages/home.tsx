import { Outlet } from "react-router-dom";
import SideBar from "../components/layouts/navbar";
import Header from "../components/layouts/header";

function Home() {
    return (
        <>
            <Header />
            <section className="flex gap-4 p-4 ">
                <SideBar />
                <Outlet />
            </section>
            
        </>
    );
}

export default Home;