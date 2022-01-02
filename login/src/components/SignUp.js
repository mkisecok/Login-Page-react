import React from 'react'
import {Grid,Paper,Avatar,Typography} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../App.css'

function SignUp() {
    const paperStyle={padding:20, height:'70vh', width:300, margin:'auto'};
    const avatarStyle={backgroundColor:'#1bbd7d'}
    return (
     <Grid>
         <Paper elevation={10} style={paperStyle}>
             <Grid align='center'>
                 <Avatar style={avatarStyle}>
                     <AddCircleOutlineOutlinedIcon/>
                 </Avatar>
                 <h2 style={{margin:0}}> Sign Up</h2>
                 <Typography variant='caption'>Please fill this form to create an account</Typography>
             </Grid>
             
         </Paper>

     </Grid>
    )
}

export default SignUp
