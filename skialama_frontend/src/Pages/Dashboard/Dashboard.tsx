import { memo } from "react"
import "./Dashboard.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = ()=>{
    return <div className="dashboard_container">
        <SideBar/>
        <Outlet/>
    </div>
}

export default memo(Dashboard);