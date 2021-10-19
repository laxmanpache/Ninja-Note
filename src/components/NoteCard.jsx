import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import { blue, green, yellow } from '@material-ui/core/colors';

const useStyles=makeStyles({
   
      
            avatar:{
                    backgroundColor: 'yellow'
         
            }
          
    
}
    
)
const NoteCard = ({note,handleDelete}) => {
    const classes=useStyles(note);
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                avatar={
                    <Avatar className={classes.avatar} >{note.category[0].toUpperCase()}</Avatar>
                }
                    action={
                        <IconButton  onClick={()=>{handleDelete(note.id)}}>
                            <DeleteOutlineOutlinedIcon/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent >
                            <Typography variant="body2" color="textSecondary">
                                {note.details}
                            </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
