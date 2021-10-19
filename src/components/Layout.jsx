import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { List } from '@material-ui/core';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from 'react-router';
import { Avatar } from '@material-ui/core';

const drawwidth=240
const useStyle=makeStyles((theme)=>{

    return{
        page:{
            backgroundColor:"#f9f9f9",
            width:"100%",
            padding:theme.spacing(3)

        }
        ,
        drawer:{
            width:drawwidth,
        },
        drawerpaper :{
            width:drawwidth,
        },
        root:{
            display:'flex'
        },
        active:{
            background:'#f4f4f4'
        }
    }
}
    
)

const menuItem=[
    {
       text:'My Notes',
       icon:<SubjectOutlinedIcon color="secondary"/>,
       path:'/'
    },
    {
        text:'create Note',
        icon:<AddCircleOutlineOutlinedIcon color="secondary"/>,
        path:'/create'


    }
]
const Layout = ({children}) => {
    const classes=useStyle();
    const history=useHistory()
    const location = useLocation();
    return (
        <div className={classes.root}>

        {/* { appbar} */}

        {/* sidebar */}
        <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper:classes.drawerpaper}}
        >
           <div>
               <Typography variant="h5"> Ninja Note</Typography>
           </div>
           {/* <List>
               <ListItem>
                   <ListItemText primary="Hello"/>
               </ListItem>
               <ListItem>
                   <ListItemText primary="Hello"/>
               </ListItem>
               <ListItem>
                   <ListItemText primary="Hello"/>
               </ListItem>
               <ListItem>
                   <ListItemText primary="Hello"/>
               </ListItem>
           </List> */}

           <List>
               {
                menuItem.map((curele ,id)=>{
               return(      <ListItem key={id} 
                             button
                             onClick={ ()=>{history.push(curele.path)}}
                             className={location.pathname === curele.path ? classes.active :null }>
                        <ListItemIcon>{curele.icon}</ListItemIcon>
                        <ListItemText primary={curele.text} />
                    </ListItem>
                )})
               }
           </List>
        </Drawer>
           
           <div className={classes.page}>
           {children}
           </div>
          
        </div>
    )
}

export default Layout
