import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./HomePage.css";
import React, { useEffect, useState } from 'react';
import ReceiveEmail from '../../Components/ReceiveEmail';
import CreateProject from '../../Components/CreateProject';

const HomePage = ()=>{
    const [open, setOpen] = useState(false);
    const [openProjectModal, setOpenProjectModal] = useState(false);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setOpen(true);
        },2000)
        return()=>clearTimeout(timer);
    },[])
    const handleSubmit=(email:string)=>{
        localStorage.setItem("userEmailId",email)
    }
    const handleCreateProject = (projectName:string)=>{
        console.log(projectName)
    }
        return (<>
            <header className='header_container'>
                <h1 className='logo'>LAMA.</h1>
                <span className='icon_container'>    
                    <SettingsOutlinedIcon fontSize='large'/>        
                    <NotificationsNoneOutlinedIcon fontSize='large'/>    
                </span>
             </header>
             <section className='section_container'>
                <h1 className='section_heading'> Create a New Project</h1>
                <img src='https://as2.ftcdn.net/v2/jpg/04/08/31/89/1000_F_408318989_OjLm2J2iL1Jn5rgPQPnrn3eHRVO5Puye.jpg' alt="podcaster image" className='image_container'/>
                <h4 className='section_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem facere voluptatibus accusantium, blanditiis deleniti commodi cumque tempora omnis vero vitae, repudiandae dolores? Laboriosam asperiores, iure optio beatae neque ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex inventore at amet quidem perspiciatis vel corporis animi ab dignissimos praesentium, maiores eum dolore, sequi culpa doloribus labore. Magnam, tenetur!</h4>
                <button className='button_container' onClick={()=>setOpenProjectModal(true)}>
                    <AddCircleIcon color='info' fontSize='large' />
                    <h4 className='button_heading'>Create New Project</h4>
                </button>
             </section>
            {open && <ReceiveEmail  open={open} setOpen={setOpen} handleSubmit={handleSubmit}/>}
            {openProjectModal && <CreateProject open={openProjectModal} setOpen={setOpenProjectModal} handleSubmit={handleCreateProject}/>}
        </>)
}
export default HomePage;