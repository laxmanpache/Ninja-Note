import React from 'react'
// import Typography from '@material-ui/core/Typography'
import { useEffect } from 'react'
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Container, Paper } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
const Note = () => {
    const [dataj, setdataj] = useState([])
    useEffect( () => {
          lodedata();
          
         
    }, [])

  const  lodedata = async ()=>{

    const responce= await fetch("http://localhost:8080/notes");
    const data=await responce.json();
    console.log(data)
    setdataj(data);
    

    }

    const handleDelete = async (id)=>{
          await fetch("http://localhost:8080/notes/"+id,{
              method:'DELETE'
          });

          const newdata=dataj.filter((curele)=>{
              return curele.id!==id;
          })

          setdataj(newdata);


    }
    return (
        <Container>


           {/* <Grid container>
             <Grid item md={3} sm={6} xs={12}>
                   <Paper>1</Paper>
             </Grid>
             <Grid item md={3} sm={6} xs={12}>
                   <Paper>2</Paper>
             </Grid>
             <Grid item md={3} sm={6} xs={12}>
                   <Paper>3</Paper>
             </Grid>
             <Grid item md={3} sm={6} xs={12}>
                   <Paper>4</Paper>
             </Grid>
            
             
           </Grid> */}
           
           <Grid container spacing={3}>
            {
               
                dataj.map((curele,id)=>{
                    return (<><Grid item key={id} xs={12} sm={6} md={4} lg={3} >
                     {/* <Paper>{curele.title} {curele.category}</Paper> */}
                     <NoteCard note={curele}  handleDelete={handleDelete}/>
                     </Grid></>);
                })
              
            }
           </Grid>

          
        </Container>
    )
}

export default Note
