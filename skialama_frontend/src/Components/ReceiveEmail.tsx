import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions/transition";
import React, { SetStateAction, memo, useState } from "react";
import "./ReceiveEmail.css";
import CloseIcon from '@mui/icons-material/Close';
import { checkIsEmail } from "../Utility/helper";

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
const ReceiveEmail = ({open, setOpen, handleSubmit}:Iprops) =>{
    const [email, setEmail] = useState("");
    
    const handleEmail=()=>{
        if(!checkIsEmail(email))
         {
            alert("invalid Email id, please provide valid address");
            return;
         }   
        handleSubmit(email);
         setOpen(false)
    }
    return   <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    aria-describedby="alert-dialog-slide-description"
  >
    <div >
        <span className="close_container" onClick={()=>setOpen(false)}>
             <CloseIcon fontSize="large" style={{ cursor:"pointer"}}/ >
        </span>
        <span className="container">
        <h1 className="header">Insert Your Email Id</h1>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="inputBox"/>
        <button className="button" onClick={handleEmail}>Submit</button>
        </span>
    </div>
    </Dialog>
}
export default memo(ReceiveEmail);