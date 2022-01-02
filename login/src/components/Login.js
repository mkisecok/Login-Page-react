import { Avatar, Grid, Paper } from '@mui/material'
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
                  
                </Paper>
            </Grid>
        </div>
    )
}

export default Login
