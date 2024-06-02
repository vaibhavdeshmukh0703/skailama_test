import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions/transition";
import React, { SetStateAction, memo, useState } from "react";
import "./CreateProject.css";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  type Iprops = {
    open : boolean,
    setOpen : React.Dispatch<SetStateAction<boolean>>,
    handleSubmit:(param:string)=>void
  }
const CreateProject = ({open, setOpen, handleSubmit}:Iprops) =>{
    const [projectName, setProjectName] = useState("");
    const [error, setError] = useState("");
    
    const handleProject=()=>{
        if(!projectName){
            setError("project name can't be empty.");
        }
        handleSubmit(projectName);
    }
    return   <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    aria-describedby="alert-dialog-slide-description"
  >
    <div className="project_container">
        <h1 className="project_header">Create Project</h1>
        <span className="project_inputContainer">
        <label htmlFor="input" className="label">Enter Project Name</label>
        <input type="text" value={projectName} onChange={(e)=>setProjectName(e.target.value)} className="project_input" id="input"/>
        <h3 className="error">{error}</h3>
        </span>
        <span className="project_buttonContianer">
        <h3  onClick={()=>setOpen(false)} style={{color: 'red', cursor:'pointer'}}>Cancle</h3>   
        <button  onClick={handleProject} style={{ cursor:'pointer',backgroundColor:"#7E22CE", color:"white", width:"100px",height: '31px',border:'none',borderRadius:'5px'}}>Submit</button>
        </span>
    </div>
    </Dialog>
}
export default memo(CreateProject);