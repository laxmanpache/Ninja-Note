import React from 'react'
import  Typography  from '@material-ui/core/Typography';
import { Button, FormControl,FormLabel,FormControlLabel } from '@material-ui/core';
import { Container } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
// import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useState } from 'react';
import { useHistory } from 'react-router';


const useStyle=makeStyles({
    // btn:{
    //     backgroundColor:'red',
    //     fontSize:50,
    //     '&:hover':{
    //         backgroundColor:"green"
    //     }

    field:{
        marginTop:20,
        marginBottom:20
    }
    
})
const CreatePages = () => {
    const classes=useStyle();
    const history=useHistory()

    const [title, setnote] = useState("");
    const [details, setnotedata] = useState("");
    const [noteerr, setnoteerr] = useState(false);
    const [notedataerr, setnotedataerr] = useState(false);
    const [category,setcategory] = useState("todo");
    const submiteform=(e)=>{
        setnoteerr(false);
        setnotedataerr(false);
        if(title==="" ){
            setnoteerr(true);  
        }
        if(details==="" ){
            setnotedataerr(true);  
        }
           e.preventDefault();
           if(title && details && category)
           {
               console.log(title);
               console.log(details);
               console.log(category)
               fetch("http://localhost:8080/notes",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({title: title,details : details,category:category})
               }
               

               ).then(history.push('/'))
           }
    }
    return (
        <>
      <Container>  
            <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom
            // align="center"
            >
                Create New Note
            </Typography>



          <form noValidate autoComplete="off" onSubmit={submiteform}>
           
          
           
            <TextField
                onChange={(e)=>{setnote(e.target.value)}}
                 label="creteNote"
                 fullWidth
                 variant="outlined"
                 required
                 className={classes.field}
                 error={noteerr}
                 
            />
              <TextField
                 onChange={(e)=>{setnotedata(e.target.value)}}
                 label="creteNote"
                 fullWidth
                 variant="outlined"
                 multiline
                 rows={4}
                 required
                 className={classes.field}
                 error={notedataerr}
            />

            <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup  value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                        <FormControlLabel value="money" control={<Radio/>} label="money" />
                        <FormControlLabel value="todo" control={<Radio/>} label="TODO" />
                        <FormControlLabel value="reminder" control={<Radio/>} label="Reminder" />
                        <FormControlLabel value="checks" control={<Radio/>} label="checks" />
                    </RadioGroup>
            </FormControl>
             <br/>
            <Button  className={classes.btn}
                type="submit"
                color="primary"
            variant="contained" 
            // startIcon={<SendIcon/>}   
            endIcon={ <ArrowForwardIosIcon/>}        
            >
           Submit
            </Button>
          </form>


            <br/>


            
            <br/>
            {/* <AcUnitIcon />
            <AcUnitIcon color="primary" fontSize="large"/>
            <AcUnitIcon color="secondary" fontSize="small"/>
            <AcUnitIcon color="action" fontSize="small"/>
            <AcUnitIcon color="error" fontSize="small"/>
            <AcUnitIcon color="disabled" fontSize="small"/> */}
       </Container>
        </>
    )
}

export default CreatePages;
