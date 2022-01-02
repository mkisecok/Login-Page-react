import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
    const paperStyle={padding:20, height:'70vh', width:300, margin:'auto'};
    const avatarStyle={backgroundColor:'#1bbd7d'}
    return (
        <div>
            <Grid>
                <Paper  elevation={10} style={paperStyle}>
                    <Grid align='center'>  
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>  
                     </Grid>
                     <TextField id="standard-basic" label="Username" placeholder='Enter Username' variant="standard" fullWidth  required/>
                     <TextField id="standard-basic" label="Password" placeholder='Enter Password' type='password' variant="standard" fullWidth  required/>
                     <FormControlLabel control={<Checkbox name='checkedB' color='primary' align=''/>} label="Remember me" />
                     <Button type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>


                </Paper>
            </Grid>
        </div>
    )
}

export default Login
