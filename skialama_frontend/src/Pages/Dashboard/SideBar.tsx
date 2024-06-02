import { memo } from "react";
import './Sidebar.css';
const SideBar = ()=>{
    return <div className="sidebar_container">
        <ul>
            <li>
                Projects
            </li>
            <li>
                Edit Transcription    
            </li>
            <li>
                Choose Platform    
            </li>
            <li>
                Activate    
            </li>
        </ul>
    </div>
}
export default memo(SideBar);